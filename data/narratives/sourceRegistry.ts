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
  {
    eventId: "shurima_fall",
    description: "The fall of Shurima and its aftermath",
    sourceUrl: "https://universe.leagueoflegends.com/en_US/region/shurima/",
    verificationStatus: "verified",
    themes: ["empire", "guilt", "survival"],
  },
  {
    eventId: "shurima_restoration",
    description: "Azir's return and Shuriman restoration",
    sourceUrl: "https://universe.leagueoflegends.com/en_US/champion/azir/",
    verificationStatus: "verified",
    themes: ["ambition", "legacy", "revival"],
  },
  {
    eventId: "noxian_conquest",
    description: "Noxus expansion and conquest",
    sourceUrl: "https://universe.leagueoflegends.com/en_US/region/noxus/",
    verificationStatus: "verified",
    themes: ["strength", "strategy", "ambition"],
  },
  {
    eventId: "demacia_mage_secrets",
    description: "Magic concealed in Demacia",
    sourceUrl: "https://universe.leagueoflegends.com/en_US/region/demacia/",
    verificationStatus: "verified",
    themes: ["light", "law", "hidden power"],
  },
  {
    eventId: "bilgewater_vengeance",
    description: "Bilgewater justice and revenge",
    sourceUrl: "https://universe.leagueoflegends.com/en_US/region/bilgewater/",
    verificationStatus: "verified",
    themes: ["vengeance", "survival", "pragmatism"],
  },
  {
    eventId: "freljord_unity",
    description: "Freljord tribes and unity",
    sourceUrl: "https://universe.leagueoflegends.com/en_US/region/freljord/",
    verificationStatus: "verified",
    themes: ["community", "warmth", "endurance"],
  },
  {
    eventId: "ionian_balance",
    description: "Ionian spiritual balance",
    sourceUrl: "https://universe.leagueoflegends.com/en_US/region/ionia/",
    verificationStatus: "verified",
    themes: ["harmony", "discipline", "spirit"],
  },
  {
    eventId: "zaun_progress",
    description: "Innovation and struggle in Zaun",
    sourceUrl: "https://universe.leagueoflegends.com/en_US/region/zaun/",
    verificationStatus: "verified",
    themes: ["ingenuity", "sacrifice", "community"],
  },
  {
    eventId: "targon_ascent",
    description: "Mount Targon and celestial ascent",
    sourceUrl: "https://universe.leagueoflegends.com/en_US/region/targon/",
    verificationStatus: "verified",
    themes: ["faith", "cosmos", "devotion"],
  },
];
