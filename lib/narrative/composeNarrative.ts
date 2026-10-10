import type { MatchResult } from "@/lib/matching/engine";
import { getNarrativePack } from "@/data/narratives/packs/all";
import { vectorToPercentScores } from "@/lib/matching/dimensions";
import type { NarrativeBuildMeta } from "@/data/narratives/types";
import type { NarrativeResponse } from "@/lib/validation/schemas";
import { narrativeSeed } from "./seed";
import {
  parallelToUserSummary,
  selectLoreParallels,
  selectTextFragment,
  type SelectionContext,
} from "./select";
import { joinSentences, firstSentence, limitSentences } from "./text";
import { CONTENT_VERSION } from "@/lib/config/versions";

export interface ComposeInput {
  match: MatchResult;
  answers: { questionId: string; answerId: string }[];
  nickname?: string;
  contentVersion?: number;
}

export interface ComposedNarrative {
  narrative: NarrativeResponse;
  meta: NarrativeBuildMeta;
}

function buildContext(
  input: ComposeInput,
  championId: string,
  contentVersion: number,
): SelectionContext {
  const seed = `${narrativeSeed(championId, input.answers)}@cv${contentVersion}`;
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
    usedLoreEvents: new Set(),
    usedThemes: new Set(),
  };
}

export function composeNarrative(input: ComposeInput): ComposedNarrative {
  const champion = input.match.primary.champion;
  const pack = getNarrativePack(champion.id);
  if (!pack) {
    throw new Error(`No narrative pack for champion ${champion.id}`);
  }

  const cv = input.contentVersion ?? CONTENT_VERSION;
  const ctx = buildContext(input, champion.id, cv);
  const intro = selectTextFragment(pack.fragments, ctx, "introduction", "intro");
  const parallels = selectLoreParallels(pack.fragments, ctx, 5);
  const strength = selectTextFragment(pack.fragments, ctx, "strength", "strength");
  const weakness = selectTextFragment(pack.fragments, ctx, "weakness", "weakness");
  const conclusion = selectTextFragment(pack.fragments, ctx, "conclusion", "end");

  const name = input.nickname?.trim() || "Traveler";
  const topDims = input.match.topDimensions.slice(0, 3);

  const introLine = intro.text.replace(/\bYour answers\b/, `${name}, your answers`);
  const traitLine =
    topDims.length > 0
      ? `What stands out in your pattern is ${topDims.map((d) => d.label.toLowerCase()).join(", ")}. That thread runs through ${champion.name}'s life as ${champion.title}.`
      : limitSentences(champion.loreSummary, 1);
  const sharedSoul = joinSentences([introLine, traitLine, limitSentences(champion.loreSummary, 2)], 5);

  const narrativeParallels = parallels.map((p) => ({
    userChoiceSummary: parallelToUserSummary(p, ctx.answerKeys),
    canonicalBeat: p.canonicalFact,
    resonance: joinSentences([p.userInterpretation, p.canonicalFact, p.parallelExplanation], 8),
  }));

  const definingTraits = topDims.map((d) => d.label);
  const traitDimensions = topDims.map((d) => d.dimension);

  const narrative: NarrativeResponse = {
    reveal: {
      championName: champion.name,
      region: champion.region,
      compatibility: input.match.primary.compatibility,
      oneLiner: firstSentence(intro.text),
    },
    sharedSoul,
    parallels:
      narrativeParallels.length >= 3
        ? narrativeParallels
        : narrativeParallels.length > 0
          ? narrativeParallels
          : [
              {
                userChoiceSummary: limitSentences(intro.text, 2),
                canonicalBeat: limitSentences(champion.loreSummary, 2),
                resonance: joinSentences(
                  [
                    intro.text,
                    champion.loreSummary,
                    `The comparison is thematic: you need not have lived ${champion.name}'s wars to recognize a similar way of choosing what matters.`,
                  ],
                  6,
                ),
              },
            ],
    shadowWithin: weakness.text,
    greatestStrength: strength.text,
    destiny: limitSentences(conclusion.text, 4),
    shareQuote: firstSentence(conclusion.text),
    definingTraits,
  };

  return {
    narrative,
    meta: {
      seed: ctx.seed,
      selectedFragmentIds: [...ctx.usedIds],
      topDimensions: traitDimensions,
      matchedAnswerKeys: [...ctx.answerKeys].filter((k) =>
        parallels.some((p) => p.relevantAnswerKeys.includes(k)),
      ),
    },
  };
}
