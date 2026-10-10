import type { PersonalityDimension } from "@/lib/matching/dimensions";
import type { LoreEventId } from "./loreEvents";

export type FragmentType =
  | "introduction"
  | "lore_parallel"
  | "strength"
  | "weakness"
  | "conclusion";

/** Structured parallel — three distinct narrative layers. */
export interface LoreParallelFragment {
  id: string;
  championId: string;
  type: "lore_parallel";
  relatedDimensions: PersonalityDimension[];
  relevantAnswerKeys: string[];
  minTraitScores?: Partial<Record<PersonalityDimension, number>>;
  maxTraitScores?: Partial<Record<PersonalityDimension, number>>;
  loreEventId?: LoreEventId;
  userInterpretation: string;
  canonicalFact: string;
  parallelExplanation: string;
  tags?: string[];
  excludesTags?: string[];
  incompatibleFragmentIds?: string[];
}

export interface TextFragment {
  id: string;
  championId: string;
  type: Exclude<FragmentType, "lore_parallel">;
  text: string;
  relatedDimensions?: PersonalityDimension[];
  relevantAnswerKeys?: string[];
  minTraitScores?: Partial<Record<PersonalityDimension, number>>;
  loreEventId?: LoreEventId;
  tags?: string[];
  excludesTags?: string[];
}

export type NarrativeFragment = LoreParallelFragment | TextFragment;

export interface ChampionNarrativePack {
  championId: string;
  loreEventIds: LoreEventId[];
  fragments: NarrativeFragment[];
}

export interface NarrativeBuildMeta {
  seed: string;
  selectedFragmentIds: string[];
  topDimensions: PersonalityDimension[];
  matchedAnswerKeys: string[];
}
