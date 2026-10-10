import type { ChampionProfile } from "@/data/champions/types";
import {
  emptyVector,
  type PersonalityDimension,
  type PersonalityVector,
} from "./dimensions";
import { addWeighted, l2Normalize, normalizeUserVector } from "./normalize";
import type { DimensionWeights } from "./dimensions";
import type { ZodiacSign } from "@/lib/zodiac";
import { zodiacDimensionNudge } from "@/lib/zodiac";

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

export interface MatchResult {
  primary: ChampionMatch & { champion: ChampionProfile };
  alternatives: (ChampionMatch & { champion: ChampionProfile })[];
  userVector: PersonalityVector;
  blendedVector: PersonalityVector;
}

const DIMENSION_IMPORTANCE: Record<PersonalityDimension, number> = {
  ambition: 1,
  empathy: 1.1,
  independence: 1,
  loyalty: 1.05,
  discipline: 0.95,
  impulsivity: 1,
  idealism: 1.05,
  pragmatism: 1,
  emotionalOpenness: 0.9,
  resilience: 1.1,
  desireForRecognition: 0.85,
  protectiveInstinct: 1.05,
  leadershipTendency: 0.95,
  moralFlexibility: 1,
  needForControl: 0.9,
  relationshipWithDestiny: 1,
};

function buildUserVector(input: MatchInput): PersonalityVector {
  const raw = emptyVector();
  for (const answer of input.answers) {
    addWeighted(raw, answer.weights, 1);
  }
  return normalizeUserVector(raw);
}

function applyZodiacBlend(
  user: PersonalityVector,
  zodiac?: ZodiacSign | null,
): PersonalityVector {
  if (!zodiac) return user;
  const nudge = zodiacDimensionNudge(zodiac);
  const blended = { ...user };
  for (const [dim, delta] of Object.entries(nudge) as [
    PersonalityDimension,
    number,
  ][]) {
    blended[dim] = Math.min(1, Math.max(0, blended[dim] * 0.9 + delta * 0.1));
  }
  return blended;
}

function weightedCosineDistance(
  a: PersonalityVector,
  b: PersonalityVector,
): number {
  let dot = 0;
  let normA = 0;
  let normB = 0;
  for (const dim of Object.keys(DIMENSION_IMPORTANCE) as PersonalityDimension[]) {
    const w = DIMENSION_IMPORTANCE[dim];
    const av = a[dim] * w;
    const bv = b[dim] * w;
    dot += av * bv;
    normA += av * av;
    normB += bv * bv;
  }
  const denom = Math.sqrt(normA) * Math.sqrt(normB) || 1;
  const similarity = dot / denom;
  return 1 - similarity;
}

function distanceToCompatibility(distance: number): number {
  const score = Math.round(100 * (1 - distance * 0.85));
  return Math.min(99, Math.max(52, score));
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
  const alternatives = ranked.slice(1, 3);

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
  };
}

/** Stable hash for reproducibility checks (no PII). */
export function fingerprintMatchInput(input: MatchInput): string {
  const parts = input.answers
    .map((a) => `${a.questionId}:${a.answerId}`)
    .sort()
    .join("|");
  const z = input.zodiac ?? "none";
  return `${parts}#${z}`;
}
