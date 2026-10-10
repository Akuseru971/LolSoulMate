import type { LoreParallelFragment, NarrativeFragment, TextFragment } from "@/data/narratives/types";
import type { PersonalityDimension } from "@/lib/matching/dimensions";
import { getAnswerLabel } from "@/data/questions";
import { pickIndex } from "./seed";

export interface SelectionContext {
  seed: string;
  percentScores: Record<PersonalityDimension, number>;
  answerKeys: Set<string>;
  usedTags: Set<string>;
  usedIds: Set<string>;
  usedLoreEvents: Set<string>;
  usedThemes: Set<string>;
}

function meetsThresholds(
  fragment: NarrativeFragment,
  scores: Record<PersonalityDimension, number>,
): boolean {
  const min = "minTraitScores" in fragment ? fragment.minTraitScores : undefined;
  const max = "maxTraitScores" in fragment ? fragment.maxTraitScores : undefined;
  if (min) {
    for (const [trait, floor] of Object.entries(min) as [PersonalityDimension, number][]) {
      if ((scores[trait] ?? 0) < floor) return false;
    }
  }
  if (max && "maxTraitScores" in fragment && fragment.maxTraitScores) {
    for (const [trait, ceiling] of Object.entries(fragment.maxTraitScores) as [
      PersonalityDimension,
      number,
    ][]) {
      if ((scores[trait] ?? 0) > ceiling) return false;
    }
  }
  return true;
}

function answerOverlap(fragment: NarrativeFragment, answerKeys: Set<string>): number {
  const keys =
    fragment.type === "lore_parallel"
      ? fragment.relevantAnswerKeys
      : fragment.relevantAnswerKeys ?? [];
  if (!keys.length) return 0;
  let hits = 0;
  for (const k of keys) {
    if (answerKeys.has(k)) hits += 1;
  }
  return hits;
}

function coherenceOk(fragment: NarrativeFragment, ctx: SelectionContext): boolean {
  if (fragment.tags?.some((t) => ctx.usedTags.has(`!${t}`))) return false;
  if (fragment.excludesTags?.some((t) => ctx.usedTags.has(t))) return false;
  if (ctx.usedIds.has(fragment.id)) return false;
  if (
    fragment.type === "lore_parallel" &&
    fragment.incompatibleFragmentIds?.some((id) => ctx.usedIds.has(id))
  ) {
    return false;
  }
  if (
    fragment.type === "lore_parallel" &&
    fragment.loreEventId &&
    ctx.usedLoreEvents.has(fragment.loreEventId) &&
    answerOverlap(fragment, ctx.answerKeys) === 0
  ) {
    return false;
  }
  return true;
}

function scoreFragment(fragment: NarrativeFragment, ctx: SelectionContext): number {
  if (!meetsThresholds(fragment, ctx.percentScores)) return -1;
  if (!coherenceOk(fragment, ctx)) return -1;

  const overlap = answerOverlap(fragment, ctx.answerKeys);
  if (fragment.type === "lore_parallel" && overlap === 0 && fragment.relevantAnswerKeys.length > 0) {
    return -1;
  }

  let score = overlap * 50;
  const dims =
    fragment.type === "lore_parallel"
      ? fragment.relatedDimensions
      : fragment.relatedDimensions ?? [];
  for (const d of dims) {
    score += (ctx.percentScores[d] ?? 0) / 4;
  }
  score += pickIndex(ctx.seed, fragment.id, 5);
  return score;
}

export function selectLoreParallels(
  pool: NarrativeFragment[],
  ctx: SelectionContext,
  maxCount: number,
): LoreParallelFragment[] {
  const candidates = pool
    .filter((f): f is LoreParallelFragment => f.type === "lore_parallel")
    .map((f) => ({ f, score: scoreFragment(f, ctx) }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score || a.f.id.localeCompare(b.f.id));

  const selected: LoreParallelFragment[] = [];
  for (const { f } of candidates) {
    if (selected.length >= maxCount) break;
    selected.push(f);
    ctx.usedIds.add(f.id);
    f.tags?.forEach((t) => ctx.usedTags.add(t));
    if (f.loreEventId) ctx.usedLoreEvents.add(f.loreEventId);
    f.tags?.forEach((t) => ctx.usedThemes.add(t));
  }

  if (selected.length < Math.min(3, maxCount)) {
    const fallback = pool
      .filter((f): f is LoreParallelFragment => f.type === "lore_parallel")
      .filter((f) => !ctx.usedIds.has(f.id) && meetsThresholds(f, ctx.percentScores))
      .slice(0, maxCount - selected.length);
    for (const f of fallback) {
      selected.push(f);
      ctx.usedIds.add(f.id);
    }
  }

  return selected;
}

export function selectTextFragment(
  pool: NarrativeFragment[],
  ctx: SelectionContext,
  type: TextFragment["type"],
  salt: string,
): TextFragment {
  const candidates = pool
    .filter((f): f is TextFragment => f.type === type)
    .map((f) => ({ f, score: scoreFragment(f, ctx) }))
    .filter((x) => x.score >= 0)
    .sort((a, b) => b.score - a.score || a.f.id.localeCompare(b.f.id));

  if (candidates.length === 0) {
    const fallback = pool.find((f): f is TextFragment => f.type === type);
    if (!fallback) throw new Error(`Missing ${type} fragment`);
    ctx.usedIds.add(fallback.id);
    return fallback;
  }

  const idx = pickIndex(ctx.seed, salt, candidates.length);
  const choice = candidates[idx]?.f ?? candidates[0].f;
  ctx.usedIds.add(choice.id);
  choice.tags?.forEach((t) => ctx.usedTags.add(t));
  return choice;
}

export function parallelToUserSummary(
  parallel: LoreParallelFragment,
  answerKeys: Set<string>,
): string {
  for (const key of parallel.relevantAnswerKeys) {
    if (answerKeys.has(key)) {
      const [qid, aid] = key.split(":");
      const label = getAnswerLabel(qid, aid);
      return `Your answer — "${label}" — suggests: ${parallel.userInterpretation}`;
    }
  }
  return parallel.userInterpretation;
}
