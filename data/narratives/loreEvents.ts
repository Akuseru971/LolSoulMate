/** Canonical lore event hooks — interpretive comparisons only, no invented history. */
export const LORE_EVENTS = {
  ionian_resistance: {
    id: "ionian_resistance",
    label: "Ionia's resistance to Noxian invasion",
    summary:
      "After Noxus invaded Ionia and devastated its heartlands, defenders rallied to protect their homeland and traditions.",
  },
  noxian_conquest: {
    id: "noxian_conquest",
    label: "Noxus expansion",
    summary:
      "Noxus spreads its vision of strength through conquest, offering glory to those who prove themselves ruthless and capable.",
  },
  demacia_mage_secrets: {
    id: "demacia_mage_secrets",
    label: "Magic hidden in Demacia",
    summary:
      "In Demacia, where magic is feared, individuals with arcane gifts often conceal their light to survive prejudice.",
  },
  shadow_isles_ruin: {
    id: "shadow_isles_ruin",
    label: "The Ruination of the Shadow Isles",
    summary:
      "King Viego's refusal to accept loss unleashed the Black Mist, transforming the Blessed Isles into a realm of undeath.",
  },
  bilgewater_vengeance: {
    id: "bilgewater_vengeance",
    label: "Bilgewater's brutal justice",
    summary:
      "On Bilgewater's docks, revenge and survival often outweigh mercy, and captains rise through cunning and force.",
  },
  freljord_unity: {
    id: "freljord_unity",
    label: "Freljord unification",
    summary:
      "The Freljord's tribes struggle between isolation and unity as champions seek to unite the icy wilds without erasing its peoples.",
  },
  ionian_balance: {
    id: "ionian_balance",
    label: "Ionian spiritual balance",
    summary:
      "Ionia's kinkou and vastaya traditions teach that emotion and duty must be weighed to preserve harmony between realms.",
  },
  zaun_progress: {
    id: "zaun_progress",
    label: "Zaun's struggle beneath Piltover",
    summary:
      "Zaunites innovate in shadow and chem-light, often sacrificing comfort and safety to protect the communities Piltover overlooks.",
  },
  targon_ascent: {
    id: "targon_ascent",
    label: "Mount Targon's celestial call",
    summary:
      "Targonian warriors who survive the ascent may be changed forever, bound to cosmic purpose and rigid celestial order.",
  },
  kindred_mercy: {
    id: "kindred_mercy",
    label: "Kindred's covenant with mortality",
    summary:
      "Kindred embody life's end—Lamb offering gentle release and Wolf pursuing those who flee the inevitable.",
  },
} as const;

export type LoreEventId = keyof typeof LORE_EVENTS;
