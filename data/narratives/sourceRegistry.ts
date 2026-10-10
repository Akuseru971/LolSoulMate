import type { LoreEventId } from "./loreEvents";

export interface LoreSourceEntry {
  eventId: LoreEventId;
  description: string;
  sourceUrl: string;
  verificationStatus: "verified" | "pending";
  themes: string[];
}

/** Canonical event registry — expand with Universe URLs as profiles grow. */
export const LORE_SOURCE_REGISTRY: LoreSourceEntry[] = [
  {
    eventId: "ionian_resistance",
    description: "Noxian invasion of Ionia and Ionian resistance",
    sourceUrl: "https://universe.leagueoflegends.com/en_US/region/ionia/",
    verificationStatus: "verified",
    themes: ["duty", "homeland", "sacrifice"],
  },
  {
    eventId: "shadow_isles_ruin",
    description: "The Ruination and the Shadow Isles",
    sourceUrl: "https://universe.leagueoflegends.com/en_US/region/shadow-isles/",
    verificationStatus: "verified",
    themes: ["grief", "obsession", "undeath"],
  },
  {
    eventId: "kindred_mercy",
    description: "Kindred and mortality's covenant",
    sourceUrl: "https://universe.leagueoflegends.com/en_US/champion/kindred/",
    verificationStatus: "verified",
    themes: ["death", "acceptance", "duality"],
  },
];
