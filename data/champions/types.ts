import type { PersonalityVector } from "@/lib/matching/dimensions";

/** `narrative-complete` = matchable with full modular narrative; `vector-only` = pending narrative expansion. */
export type ChampionCoverage = "narrative-complete" | "vector-only" | "pending-verification";

export interface ChampionProfile {
  id: string;
  name: string;
  region: string;
  title: string;
  loreSummary: string;
  traits: string[];
  motivations: string[];
  values: string[];
  strengths: string[];
  flaws: string[];
  emotionalVulnerabilities: string[];
  powerRelationship: string;
  peopleRelationship: string;
  moralDilemmas: string[];
  internalContradictions: string[];
  developmentThemes: string[];
  /** Riot Data Dragon splash (fan use per Riot API / asset policies). */
  imageUrl: string;
  loreSources: string[];
  vector: PersonalityVector;
  /** Lore parallels for fallback narrative (canonical hooks). */
  loreHooks: {
    theme: string;
    canonicalBeat: string;
  }[];
  coverage: ChampionCoverage;
}
