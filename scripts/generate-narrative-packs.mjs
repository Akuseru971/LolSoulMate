import fs from "fs";

const COMPLETE = [
  "irelia",
  "jhin",
  "kindred",
  "viego",
  "swain",
  "braum",
  "yasuo",
  "lux",
  "garen",
  "akali",
  "thresh",
  "karma",
  "riven",
  "ekko",
  "senna",
];

const LORE = {
  irelia: {
    events: ["ionian_resistance"],
    name: "Irelia",
    themes: ["duty", "homeland", "discipline", "sacrifice"],
    canon: [
      "When Noxus invaded Ionia, Irelia rallied defenders after her homeland was devastated.",
      "She carries the dancer's discipline, turning grief into focused resistance.",
      "Her loyalty is tied to culture and people, not abstract conquest.",
    ],
  },
  jhin: {
    events: [],
    name: "Jhin",
    themes: ["control", "precision", "recognition", "detachment"],
    canon: [
      "Jhin treats murder as art, demanding perfect composition in every act.",
      "He plans meticulously, refusing chaos that would ruin his 'masterpieces'.",
      "His relationship to emotion is theatrical—curated, never spontaneous.",
    ],
  },
  kindred: {
    events: ["kindred_mercy"],
    name: "Kindred",
    themes: ["acceptance", "destiny", "duality", "detachment"],
    canon: [
      "Kindred appear at life's end—Lamb offering mercy, Wolf pursuing the fleeing.",
      "They embody inevitability without cruelty for its own sake.",
      "Mortals who understand them accept cycles larger than personal desire.",
    ],
  },
  viego: {
    events: ["shadow_isles_ruin"],
    name: "Viego",
    themes: ["grief", "obsession", "power", "denial"],
    canon: [
      "Viego's refusal to accept Isolde's death triggered the Ruination.",
      "His love curdled into obsession, drowning kingdoms in the Black Mist.",
      "He seeks restoration at any cost, blind to the harm he inflicts.",
    ],
  },
  swain: {
    events: ["noxian_conquest"],
    name: "Swain",
    themes: ["strategy", "sacrifice", "authority", "pragmatism"],
    canon: [
      "Swain sacrificed his body to bind a demon of secrets for Noxus's survival.",
      "He reads war as chess, trading pieces—including himself—for the empire.",
      "Power, to him, is responsibility sharpened until it bleeds.",
    ],
  },
  braum: {
    events: ["freljord_unity"],
    name: "Braum",
    themes: ["compassion", "protection", "optimism", "courage"],
    canon: [
      "Braum is a folk hero of the Freljord, famous for shielding the weak with impossible warmth.",
      "He fights with joy, believing courage is contagious.",
      "His strength serves community, not personal glory.",
    ],
  },
  yasuo: {
    events: ["ionian_balance"],
    name: "Yasuo",
    themes: ["guilt", "honor", "freedom", "redemption"],
    canon: [
      "Yasuo was wrongly accused of killing his master and wandered Ionia carrying that shame.",
      "He trusts his blade and his code, even when the world calls him traitor.",
      "His path is solitary, but not loveless—he still protects those he failed once.",
    ],
  },
  lux: {
    events: ["demacia_mage_secrets"],
    name: "Lux",
    themes: ["hope", "secrets", "idealism", "courage"],
    canon: [
      "Lux hides luminous magic in a kingdom that fears mages.",
      "She chooses hope over silence, lighting paths for others who feel trapped.",
      "Her optimism is not naivety—it is defiance.",
    ],
  },
  garen: {
    events: ["demacia_mage_secrets"],
    name: "Garen",
    themes: ["duty", "loyalty", "discipline", "protection"],
    canon: [
      "Garen serves Demacia as Crown Guard, putting nation before private longing.",
      "He embodies steadfast loyalty even when law and heart collide.",
      "His courage is quiet, practiced daily rather than performed.",
    ],
  },
  akali: {
    events: ["ionian_resistance", "ionian_balance"],
    name: "Akali",
    themes: ["freedom", "rebellion", "duty", "impulse"],
    canon: [
      "Akali left the Kinkou to fight threats in Ionia's shadows on her own terms.",
      "She rejects rigid tradition when it fails the living.",
      "Her loyalty is to people first, institutions second.",
    ],
  },
  thresh: {
    events: ["shadow_isles_ruin"],
    name: "Thresh",
    themes: ["control", "cruelty", "power", "detachment"],
    canon: [
      "Thresh collects souls in his lantern, savoring suffering and domination.",
      "He was once a mortal warden; undeath amplified his hunger for control.",
      "Mercy, to Thresh, is a toy—not a gift.",
    ],
  },
  karma: {
    events: ["ionian_balance"],
    name: "Karma",
    themes: ["wisdom", "destiny", "leadership", "sacrifice"],
    canon: [
      "Karma carries the weight of generations as the Enlightened One.",
      "She seeks balance when Ionia trembles between spirit and steel.",
      "Her power is responsibility repeated across lifetimes.",
    ],
  },
  riven: {
    events: ["noxian_conquest"],
    name: "Riven",
    themes: ["guilt", "redemption", "freedom", "honor"],
    canon: [
      "Riven wielded Noxian rune-blade until she could no longer accept the destruction she helped cause.",
      "She shattered her sword and exiled herself, seeking a self not defined by war.",
      "Her strength now serves atonement, not empire.",
    ],
  },
  ekko: {
    events: ["zaun_progress"],
    name: "Ekko",
    themes: ["protection", "ingenuity", "youth", "sacrifice"],
    canon: [
      "Ekko rewinds catastrophic moments to protect the Firelights and Zaun's forgotten.",
      "He builds hope from scrap, turning time itself into a shield.",
      "His loyalty is to found family beneath Piltover's shadow.",
    ],
  },
  senna: {
    events: ["shadow_isles_ruin"],
    name: "Senna",
    themes: ["defiance", "love", "resilience", "light"],
    canon: [
      "Senna escaped Thresh's lantern, returning as a Sentinel with light forged from grief.",
      "She refuses to let darkness define those she loves.",
      "Her resilience is active—not passive endurance.",
    ],
  },
};

const TRAITS = [
  "loyalty",
  "protectiveInstinct",
  "capacityForSacrifice",
  "discipline",
  "idealism",
  "independence",
  "desireForFreedom",
  "pragmatism",
  "ambition",
  "emotionalSensitivity",
  "courage",
  "resilience",
  "moralFlexibility",
  "relationshipWithDestiny",
  "socialConnection",
  "needForRecognition",
  "desireForPower",
  "relationshipWithAuthority",
  "empathy",
  "impulsivity",
];

const QUESTIONS = [
  "q01",
  "q02",
  "q03",
  "q04",
  "q05",
  "q06",
  "q07",
  "q08",
  "q09",
  "q10",
  "q11",
  "q12",
  "q13",
  "q14",
  "q15",
  "q16",
  "q17",
  "q18",
  "q19",
  "q20",
];

function frags(championId, cfg) {
  const out = [];
  let n = 0;
  const mk = (type, text, extra = {}) => {
    out.push({
      id: `${championId}-${type}-${n++}`,
      championId,
      type,
      text,
      ...extra,
    });
  };

  for (let i = 0; i < 5; i++) {
    mk(
      "introduction",
      `Your choices echo ${cfg.name}'s legend—a soul shaped by ${cfg.themes[i % cfg.themes.length]} and ${cfg.themes[(i + 1) % cfg.themes.length]}. This is not fate copying fiction; it is pattern recognition across who you protect, what you refuse, and what you still dare to hope (${i + 1}).`,
      { tags: [`intro-${i}`], requiredTraits: [TRAITS[i % TRAITS.length]] },
    );
  }

  for (let i = 0; i < 10; i++) {
    const canon = cfg.canon[i % cfg.canon.length];
    const q = QUESTIONS[i % QUESTIONS.length];
    mk(
      "personality_parallel",
      `You indicated priorities that mirror ${cfg.name}'s canonical path: ${canon} Your answers around ${q} suggest you weigh similar costs—meaning over comfort, and consequence over applause.`,
      {
        relatedQuestionIds: [q, QUESTIONS[(i + 3) % QUESTIONS.length]],
        loreEventId: cfg.events[0],
        minTraitScores: { [TRAITS[(i + 2) % TRAITS.length]]: 55 + (i % 20) },
        tags: [`parallel-${i}`],
      },
    );
  }

  for (let i = 0; i < 5; i++) {
    mk(
      "strength",
      `Your strongest current is ${TRAITS[(i + 4) % TRAITS.length].replace(/([A-Z])/g, " $1").toLowerCase()}. ${cfg.name} embodies this in official lore—not as perfection, but as a repeated choice under pressure (${cfg.themes[i % cfg.themes.length]}).`,
      { requiredTraits: [TRAITS[(i + 4) % TRAITS.length]], tags: [`strength-${i}`] },
    );
  }

  for (let i = 0; i < 5; i++) {
    mk(
      "weakness",
      `When ${TRAITS[(i + 7) % TRAITS.length].replace(/([A-Z])/g, " $1").toLowerCase()} rises in you, shadow follows—as it does for ${cfg.name}, whose lore acknowledges ${cfg.themes[(i + 2) % cfg.themes.length]} becoming a chain.`,
      { tags: [`weakness-${i}`], excludesTags: i === 0 ? [] : ["weakness-0"] },
    );
  }

  for (let i = 0; i < 5; i++) {
    const canon = cfg.canon[(i + 1) % cfg.canon.length];
    mk("lore_comparison", canon, {
      type: "lore_comparison",
      loreEventId: cfg.events[i % cfg.events.length] || undefined,
      relatedQuestionIds: [QUESTIONS[(i + 5) % QUESTIONS.length]],
      tags: [`lore-${i}`],
    });
  }

  for (let i = 0; i < 5; i++) {
    mk(
      "conclusion",
      `Destiny does not ask ${cfg.name}'s permission—and it does not ask yours. Between ${cfg.themes[i % cfg.themes.length]} and ${cfg.themes[(i + 3) % cfg.themes.length]}, your legend keeps unfolding: not copied from Runeterra, but rhyming with it (${i + 1}).`,
      { tags: [`end-${i}`] },
    );
  }

  return out;
}

const packs = COMPLETE.map((id) => ({
  championId: id,
  loreEventIds: LORE[id].events.filter(Boolean),
  fragments: frags(id, LORE[id]),
}));

const out = `/** Auto-generated narrative packs — run scripts/generate-narrative-packs.mjs to regenerate */
import type { ChampionNarrativePack } from "../types";

export const NARRATIVE_PACKS: ChampionNarrativePack[] = ${JSON.stringify(packs, null, 2)};

export const NARRATIVE_COMPLETE_IDS = new Set<string>(${JSON.stringify(COMPLETE)});

export function getNarrativePack(championId: string): ChampionNarrativePack | undefined {
  return NARRATIVE_PACKS.find((p) => p.championId === championId);
}
`;

fs.writeFileSync("data/narratives/packs/all.ts", out);

// patch coverage in profiles
let profiles = fs.readFileSync("data/champions/profiles.ts", "utf8");
for (const id of COMPLETE) {
  const re = new RegExp(`(id: "${id}"[\\s\\S]*?)(loreHooks:)`, "m");
  profiles = profiles.replace(re, (m, pre, hook) => {
    if (pre.includes("coverage:")) return m;
    return `${pre}coverage: "narrative-complete",\n    ${hook}`;
  });
}
profiles = profiles.replace(
  /coverage: "narrative-complete",\n    coverage: "narrative-complete",/g,
  'coverage: "narrative-complete",',
);
if (!profiles.includes('id: "kindred"')) {
  profiles = profiles.replace(
    "export const CHAMPIONS: ChampionProfile[] = [",
    `export const CHAMPIONS: ChampionProfile[] = [
  defineChampion({
    id: "kindred",
    name: "Kindred",
    region: "Runeterra",
    title: "The Eternal Hunters",
    loreSummary: "Twin manifestations of death—Lamb and Wolf—who visit every mortal at life's end.",
    ddragonKey: "Kindred",
    coverage: "narrative-complete",
    traits: ["Duality", "Inevitability", "Mercy and pursuit"],
    motivations: ["Fulfill the covenant of mortality"],
    values: ["Acceptance of life's end"],
    strengths: ["Cosmic clarity", "Patience"],
    flaws: ["Detachment from mortal grief"],
    emotionalVulnerabilities: ["Mortals who deny death"],
    powerRelationship: "Embodies inevitability rather than seeking power.",
    peopleRelationship: "Appears to all; bonds only through the moment of passing.",
    moralDilemmas: ["Mercy versus the hunt"],
    internalContradictions: ["Lamb and Wolf as one covenant, two natures"],
    developmentThemes: ["Mortality as truth, not punishment"],
    loreSources: ["League of Legends Universe (universe.leagueoflegends.com)"],
    vector: { relationshipWithDestiny: 0.95, idealism: 0.55, emotionalSensitivity: 0.45, independence: 0.7, pragmatism: 0.65, moralFlexibility: 0.35, resilience: 0.8, empathy: 0.5, courage: 0.55, socialConnection: 0.12 },
    loreHooks: [{"theme":"Mortality","canonicalBeat":"Kindred offer release to those who accept Lamb; Wolf hunts those who flee death."}],
  }),`,
  );
}
fs.writeFileSync("data/champions/profiles.ts", profiles);
console.log("generated packs and patched profiles");
