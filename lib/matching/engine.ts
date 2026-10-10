import type { ChampionProfile } from "@/data/champions/types";
import {
  emptyVector,
  PERSONALITY_DIMENSIONS,
  type PersonalityDimension,
  type PersonalityVector,
  vectorToPercentScores,
  DIMENSION_LABELS,
} from "./dimensions";
import { addWeighted, l2Normalize, normalizeUserVector } from "./normalize";
import type { DimensionWeights } from "./dimensions";
import type { ZodiacSign } from "@/lib/zodiac";
import { zodiacDimensionNudge } from "@/lib/zodiac";
import { getAnswerLabel } from "@/data/questions";

export interface QuizAnswerSelection {
  questionId: string;
  answerId: string;
  weights: DimensionWeights;
}

export interface MatchInput {
  answers: QuizAnswerSelection[];
  zodiac?: ZodiacSign | null;
}

export interface ChampionMatch {
  championId: string;
  compatibility: number;
  distance: number;
}

export interface PersonalityInsight {
  dimension: PersonalityDimension;
  label: string;
  score: number;
}

export interface MatchResult {
  primary: ChampionMatch & { champion: ChampionProfile };
  /** Top three alternatives after primary. */
  alternatives: (ChampionMatch & { champion: ChampionProfile })[];
  userVector: PersonalityVector;
  blendedVector: PersonalityVector;
  topDimensions: PersonalityInsight[];
  influentialAnswers: { questionId: string; answerId: string; label: string }[];
  primarySimilarities: string[];
  primaryContradictions: string[];
}

const DIMENSION_IMPORTANCE: Record<PersonalityDimension, number> = {
  ambition: 1,
  loyalty: 1.05,
  empathy: 1.1,
  independence: 1,
  courage: 1,
  discipline: 0.95,
  impulsivity: 1,
  emotionalSensitivity: 0.95,
  desireForPower: 0.9,
  relationshipWithAuthority: 0.95,
  protectiveInstinct: 1.05,
  moralFlexibility: 1,
  idealism: 1.05,
  pragmatism: 1,
  resilience: 1.1,
  needForRecognition: 0.85,
  relationshipWithDestiny: 1,
  desireForFreedom: 1,
  socialConnection: 0.9,
  capacityForSacrifice: 1.05,
};

function buildUserVector(input: MatchInput): PersonalityVector {
  const raw = emptyVector();
  for (const answer of input.answers) {
    addWeighted(raw, answer.weights, 1);
  }
  return normalizeUserVector(raw);
}

/** Zodiac contributes at most ~5% of the blended vector. */
function applyZodiacBlend(
  user: PersonalityVector,
  zodiac?: ZodiacSign | null,
): PersonalityVector {
  if (!zodiac) return user;
  const nudge = zodiacDimensionNudge(zodiac);
  const blended = { ...user };
  for (const dim of PERSONALITY_DIMENSIONS) {
    const delta = nudge[dim] ?? user[dim];
    blended[dim] = user[dim] * 0.95 + delta * 0.05;
  }
  return blended;
}

function weightedCosineDistance(a: PersonalityVector, b: PersonalityVector): number {
  let dot = 0;
  let normA = 0;
  let normB = 0;
  for (const dim of PERSONALITY_DIMENSIONS) {
    const w = DIMENSION_IMPORTANCE[dim];
    const av = a[dim] * w;
    const bv = b[dim] * w;
    dot += av * bv;
    normA += av * av;
    normB += bv * bv;
  }
  const denom = Math.sqrt(normA) * Math.sqrt(normB) || 1;
  return 1 - dot / denom;
}

function distanceToCompatibility(distance: number): number {
  const score = Math.round(100 * (1 - distance * 0.85));
  return Math.min(99, Math.max(52, score));
}

function topUserDimensions(vector: PersonalityVector, count = 5): PersonalityInsight[] {
  const pct = vectorToPercentScores(vector);
  return [...PERSONALITY_DIMENSIONS]
    .map((d) => ({
      dimension: d,
      label: DIMENSION_LABELS[d],
      score: pct[d],
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, count);
}

function influentialAnswers(input: MatchInput, count = 5) {
  const scored = input.answers.map((a) => {
    const magnitude = Object.values(a.weights).reduce((s, v) => s + (v ?? 0), 0);
    return {
      questionId: a.questionId,
      answerId: a.answerId,
      label: getAnswerLabel(a.questionId, a.answerId),
      magnitude,
    };
  });
  return scored
    .sort((a, b) => b.magnitude - a.magnitude)
    .slice(0, count)
    .map(({ questionId, answerId, label }) => ({ questionId, answerId, label }));
}

function compareChampionTraits(
  user: PersonalityVector,
  champion: PersonalityVector,
): { similarities: string[]; contradictions: string[] } {
  const pctUser = vectorToPercentScores(user);
  const pctChamp = vectorToPercentScores(champion);
  const diffs = PERSONALITY_DIMENSIONS.map((d) => ({
    d,
    label: DIMENSION_LABELS[d],
    delta: Math.abs(pctUser[d] - pctChamp[d]),
    user: pctUser[d],
    champ: pctChamp[d],
  }));
  diffs.sort((a, b) => a.delta - b.delta);
  const similarities = diffs.slice(0, 3).map((x) => `${x.label} (${x.user}% resonance)`);
  const contradictions = diffs
    .slice(-2)
    .reverse()
    .map((x) => `${x.label} (you ${x.user}% · ${x.label.toLowerCase()} in their legend ${x.champ}%)`);
  return { similarities, contradictions };
}

export function matchChampions(
  champions: ChampionProfile[],
  input: MatchInput,
): MatchResult {
  const userVector = buildUserVector(input);
  const blendedVector = applyZodiacBlend(userVector, input.zodiac);
  const userUnit = l2Normalize(blendedVector);

  const ranked = champions
    .map((champion) => {
      const champUnit = l2Normalize(champion.vector);
      const distance = weightedCosineDistance(userUnit, champUnit);
      return {
        championId: champion.id,
        champion,
        distance,
        compatibility: distanceToCompatibility(distance),
      };
    })
    .sort((a, b) => {
      if (a.distance !== b.distance) return a.distance - b.distance;
      return a.championId.localeCompare(b.championId);
    });

  const primary = ranked[0];
  const alternatives = ranked.slice(1, 4);
  const { similarities, contradictions } = compareChampionTraits(
    blendedVector,
    primary.champion.vector,
  );

  return {
    primary: {
      championId: primary.championId,
      champion: primary.champion,
      distance: primary.distance,
      compatibility: primary.compatibility,
    },
    alternatives: alternatives.map((a) => ({
      championId: a.championId,
      champion: a.champion,
      distance: a.distance,
      compatibility: a.compatibility,
    })),
    userVector,
    blendedVector,
    topDimensions: topUserDimensions(blendedVector),
    influentialAnswers: influentialAnswers(input),
    primarySimilarities: similarities,
    primaryContradictions: contradictions,
  };
}

export function fingerprintMatchInput(input: MatchInput): string {
  const parts = input.answers
    .map((a) => `${a.questionId}:${a.answerId}`)
    .sort()
    .join("|");
  const z = input.zodiac ?? "none";
  return `${parts}#${z}`;
}
