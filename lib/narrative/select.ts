import type { NarrativeFragment } from "@/data/narratives/types";
import type { PersonalityDimension } from "@/lib/matching/dimensions";
import { pickIndex } from "./seed";

export interface SelectionContext {
  seed: string;
  percentScores: Record<PersonalityDimension, number>;
  answerKeys: Set<string>;
  usedTags: Set<string>;
  usedIds: Set<string>;
}

function meetsThresholds(
  fragment: NarrativeFragment,
  scores: Record<PersonalityDimension, number>,
): boolean {
  if (fragment.minTraitScores) {
    for (const [trait, min] of Object.entries(fragment.minTraitScores) as [
      PersonalityDimension,
      number,
    ][]) {
      if ((scores[trait] ?? 0) < min) return false;
    }
  }
  return true;
}

function matchesAnswers(fragment: NarrativeFragment, answerKeys: Set<string>): boolean {
  if (fragment.relatedAnswerIds?.length) {
    return fragment.relatedAnswerIds.some((k) => answerKeys.has(k));
  }
  if (fragment.relatedQuestionIds?.length) {
    return fragment.relatedQuestionIds.some((q) =>
      [...answerKeys].some((k) => k.startsWith(`${q}:`)),
    );
  }
  return true;
}

function coherenceOk(fragment: NarrativeFragment, usedTags: Set<string>): boolean {
  if (fragment.tags?.some((t) => usedTags.has(`!${t}`))) return false;
  if (fragment.excludesTags?.some((t) => usedTags.has(t))) return false;
  return true;
}

function scoreFragment(
  fragment: NarrativeFragment,
  ctx: SelectionContext,
): number {
  if (!meetsThresholds(fragment, ctx.percentScores)) return -1;
  if (!matchesAnswers(fragment, ctx.answerKeys)) return -1;
  if (!coherenceOk(fragment, ctx.usedTags)) return -1;
  if (ctx.usedIds.has(fragment.id)) return -1;

  let score = 0;
  if (fragment.relatedAnswerIds?.some((k) => ctx.answerKeys.has(k))) score += 40;
  if (fragment.relatedQuestionIds?.length) score += 15;
  if (fragment.requiredTraits?.length) {
    for (const t of fragment.requiredTraits) {
      score += (ctx.percentScores[t] ?? 0) / 5;
    }
  }
  score += pickIndex(ctx.seed, fragment.id, 7);
  return score;
}

export function selectFragments(
  pool: NarrativeFragment[],
  ctx: SelectionContext,
  count: number,
  type: NarrativeFragment["type"],
): NarrativeFragment[] {
  const candidates = pool
    .filter((f) => f.type === type)
    .map((f) => ({ f, score: scoreFragment(f, ctx) }))
    .filter((x) => x.score >= 0)
    .sort((a, b) => b.score - a.score || a.f.id.localeCompare(b.f.id));

  const selected: NarrativeFragment[] = [];
  for (const { f } of candidates) {
    if (selected.length >= count) break;
    if (ctx.usedIds.has(f.id)) continue;
    selected.push(f);
    ctx.usedIds.add(f.id);
    f.tags?.forEach((t) => ctx.usedTags.add(t));
    f.excludesTags?.forEach((t) => ctx.usedTags.add(`!${t}`));
  }

  if (selected.length < count) {
    const fallback = pool.filter((f) => f.type === type && !ctx.usedIds.has(f.id));
    for (const f of fallback) {
      if (selected.length >= count) break;
      selected.push(f);
      ctx.usedIds.add(f.id);
    }
  }

  return selected;
}

export function selectOne(
  pool: NarrativeFragment[],
  ctx: SelectionContext,
  type: NarrativeFragment["type"],
  salt: string,
): NarrativeFragment {
  const matches = selectFragments(pool, ctx, 999, type);
  if (matches.length === 0) {
    throw new Error(`No narrative fragments for type ${type}`);
  }
  const idx = pickIndex(ctx.seed, salt, matches.length);
  const choice = matches[idx] ?? matches[0];
  ctx.usedIds.add(choice.id);
  choice.tags?.forEach((t) => ctx.usedTags.add(t));
  return choice;
}
