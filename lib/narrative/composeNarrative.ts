import type { MatchResult } from "@/lib/matching/engine";
import { getNarrativePack } from "@/data/narratives/packs/all";
import {
  PERSONALITY_DIMENSIONS,
  vectorToPercentScores,
  DIMENSION_LABELS,
  type PersonalityDimension,
} from "@/lib/matching/dimensions";
import type { NarrativeBuildMeta } from "@/data/narratives/types";
import type { NarrativeResponse } from "@/lib/validation/schemas";
import { narrativeSeed } from "./seed";
import { selectFragments, selectOne, type SelectionContext } from "./select";

export interface ComposeInput {
  match: MatchResult;
  answers: { questionId: string; answerId: string }[];
  nickname?: string;
}

export interface ComposedNarrative {
  narrative: NarrativeResponse;
  meta: NarrativeBuildMeta;
}

function buildContext(input: ComposeInput, championId: string): SelectionContext {
  const seed = narrativeSeed(championId, input.answers);
  const pct = vectorToPercentScores(input.match.blendedVector);
  const answerKeys = new Set(
    input.answers.map((a) => `${a.questionId}:${a.answerId}`),
  );
  return {
    seed,
    percentScores: pct,
    answerKeys,
    usedTags: new Set(),
    usedIds: new Set(),
  };
}

function trimWords(text: string, min: number, max: number): string {
  const words = text.split(/\s+/);
  if (words.length <= max) return text;
  return words.slice(0, max).join(" ") + "…";
}

export function composeNarrative(input: ComposeInput): ComposedNarrative {
  const champion = input.match.primary.champion;
  const pack = getNarrativePack(champion.id);
  if (!pack) {
    throw new Error(`No narrative pack for champion ${champion.id}`);
  }

  const ctx = buildContext(input, champion.id);
  const intro = selectOne(pack.fragments, ctx, "introduction", "intro");
  const parallels = selectFragments(pack.fragments, ctx, 4, "personality_parallel");
  const loreBits = selectFragments(pack.fragments, ctx, 2, "lore_comparison");
  const strength = selectOne(pack.fragments, ctx, "strength", "strength");
  const weakness = selectOne(pack.fragments, ctx, "weakness", "weakness");
  const conclusion = selectOne(pack.fragments, ctx, "conclusion", "end");

  const name = input.nickname?.trim() || "Traveler";
  const topDims = input.match.topDimensions.slice(0, 3);

  const sharedSoulParts = [
    intro.text.replace(/\bYour choices\b/, `${name}, your choices`),
    `Across your answers, ${topDims.map((d) => d.label.toLowerCase()).join(", ")} rise most strongly—dimensions that align with ${champion.name}'s established lore as ${champion.title}.`,
    `${champion.loreSummary}`,
  ];
  const sharedSoul = trimWords(sharedSoulParts.join(" "), 100, 150);

  const narrativeParallels = [...parallels, ...loreBits].slice(0, 5).map((f, i) => {
    const answer = input.match.influentialAnswers[i] ?? input.match.influentialAnswers[0];
    return {
      userChoiceSummary: answer
        ? `You indicated: "${answer.label}"`
        : "Your questionnaire pattern emphasizes this trait.",
      canonicalBeat: f.loreEventId
        ? `${f.text}`
        : f.text.split(".")[0] + ".",
      resonance: f.text,
    };
  });

  const definingTraits = topDims.map((d) => d.label);

  const narrative: NarrativeResponse = {
    reveal: {
      championName: champion.name,
      region: champion.region,
      compatibility: input.match.primary.compatibility,
      oneLiner: intro.text.split(".")[0] + ".",
    },
    sharedSoul,
    parallels: narrativeParallels,
    shadowWithin: weakness.text,
    greatestStrength: strength.text,
    destiny: conclusion.text,
    shareQuote: `"${conclusion.text.split(".")[0]}."`,
    definingTraits,
  };

  return {
    narrative,
    meta: {
      seed: ctx.seed,
      selectedFragmentIds: [...ctx.usedIds],
      topDimensions: topDims.map((d) => d.dimension),
      influentialAnswers: input.match.influentialAnswers,
    },
  };
}

export function topTraitLabels(vector: Record<PersonalityDimension, number>, n = 3): string[] {
  const pct = vectorToPercentScores(vector);
  return [...PERSONALITY_DIMENSIONS]
    .map((d) => ({ d, s: pct[d] }))
    .sort((a, b) => b.s - a.s)
    .slice(0, n)
    .map((x) => DIMENSION_LABELS[x.d]);
}
