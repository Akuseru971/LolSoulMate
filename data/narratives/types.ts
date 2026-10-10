import type { PersonalityDimension } from "@/lib/matching/dimensions";
import type { LoreEventId } from "./loreEvents";

export type FragmentType =
  | "introduction"
  | "personality_parallel"
  | "strength"
  | "weakness"
  | "lore_comparison"
  | "conclusion";

export interface NarrativeFragment {
  id: string;
  championId: string;
  type: FragmentType;
  text: string;
  requiredTraits?: PersonalityDimension[];
  minTraitScores?: Partial<Record<PersonalityDimension, number>>;
  relatedQuestionIds?: string[];
  relatedAnswerIds?: string[];
  loreEventId?: LoreEventId;
  /** Tags that must not co-occur with this fragment (coherence). */
  excludesTags?: string[];
  tags?: string[];
}

export interface ChampionNarrativePack {
  championId: string;
  loreEventIds: LoreEventId[];
  fragments: NarrativeFragment[];
}

export interface NarrativeBuildMeta {
  seed: string;
  selectedFragmentIds: string[];
  topDimensions: PersonalityDimension[];
  influentialAnswers: { questionId: string; answerId: string; label: string }[];
}
