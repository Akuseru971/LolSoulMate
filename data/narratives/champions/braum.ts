import type { ChampionNarrativePack } from "../types";

export const braumPack: ChampionNarrativePack = {
  championId: "braum",
  loreEventIds: ["freljord_unity"],
  fragments: [
    {
      id: "braum-intro-0",
      championId: "braum",
      type: "introduction",
      text: "Braum laughs like sunlight on snow: broad, improbable, warming frozen places.",
      relatedDimensions: [
        "loyalty",
        "discipline",
      ],
      relevantAnswerKeys: [
        "q01:d",
        "q05:a",
      ],
      tags: [
        "intro-0",
      ],
    },
    {
      id: "braum-intro-1",
      championId: "braum",
      type: "introduction",
      text: "Your pattern carries protective warmth, the instinct to stand between harm and home.",
      relatedDimensions: [
        "protectiveInstinct",
        "idealism",
      ],
      relevantAnswerKeys: [
        "q02:a",
        "q06:c",
      ],
      tags: [
        "intro-1",
      ],
    },
    {
      id: "braum-intro-2",
      championId: "braum",
      type: "introduction",
      text: "He carries a door because doors mean shelter; Freljord remembers who opens them.",
      relatedDimensions: [
        "capacityForSacrifice",
        "independence",
      ],
      relevantAnswerKeys: [
        "q08:a",
        "q03:b",
      ],
      tags: [
        "intro-2",
      ],
    },
    {
      id: "braum-intro-3",
      championId: "braum",
      type: "introduction",
      text: "Strength for Braum is service, not boast, though boisterous joy follows anyway.",
      relatedDimensions: [
        "discipline",
        "desireForFreedom",
      ],
      relevantAnswerKeys: [
        "q04:b",
        "q15:a",
      ],
      tags: [
        "intro-3",
      ],
    },
    {
      id: "braum-intro-4",
      championId: "braum",
      type: "introduction",
      text: "You may never punch a dragon, yet you know what it means to guard a threshold.",
      relatedDimensions: [
        "idealism",
        "pragmatism",
      ],
      relevantAnswerKeys: [
        "q14:a",
        "q11:a",
      ],
      tags: [
        "intro-4",
      ],
    },
    {
      id: "braum-parallel-0",
      championId: "braum",
      type: "lore_parallel",
      relatedDimensions: [
        "protectiveInstinct",
        "idealism",
        "pragmatism",
      ],
      relevantAnswerKeys: [
        "q01:a",
        "q04:e",
      ],
      minTraitScores: {
        protectiveInstinct: 52,
      },
      loreEventId: "freljord_unity",
      userInterpretation: "You step forward when others hesitate to shield someone vulnerable.",
      canonicalFact: "Braum defended frozen villages, myth and muscle alike.",
      parallelExplanation: "Heroic scale differs; protective reflex aligns.",
      tags: [
        "parallel-0",
        "warmth",
      ],
    },
    {
      id: "braum-parallel-1",
      championId: "braum",
      type: "lore_parallel",
      relatedDimensions: [
        "capacityForSacrifice",
        "independence",
        "ambition",
      ],
      relevantAnswerKeys: [
        "q03:c",
        "q08:b",
      ],
      minTraitScores: {
        capacityForSacrifice: 50,
      },
      loreEventId: "freljord_unity",
      userInterpretation: "Community ties matter more than solitary glory.",
      canonicalFact: "He travels between tribes, knitting trust with stories and deeds.",
      parallelExplanation: "Social connection as duty is shared ground.",
      tags: [
        "parallel-1",
      ],
    },
    {
      id: "braum-parallel-2",
      championId: "braum",
      type: "lore_parallel",
      relatedDimensions: [
        "discipline",
        "desireForFreedom",
        "emotionalSensitivity",
      ],
      relevantAnswerKeys: [
        "q06:d",
        "q12:d",
      ],
      minTraitScores: {
        discipline: 52,
      },
      loreEventId: "freljord_unity",
      userInterpretation: "You believe kindness can disarm conflict before fists must.",
      canonicalFact: "Braum talks first, fights last, smiles throughout.",
      parallelExplanation: "De-escalation temperament mirrors his, without required superhuman punch.",
      tags: [
        "parallel-2",
      ],
    },
    {
      id: "braum-parallel-3",
      championId: "braum",
      type: "lore_parallel",
      relatedDimensions: [
        "idealism",
        "pragmatism",
        "courage",
      ],
      relevantAnswerKeys: [
        "q04:a",
        "q19:a",
      ],
      minTraitScores: {
        idealism: 51,
      },
      loreEventId: "freljord_unity",
      userInterpretation: "Loyalty is shown in showing up, again and again.",
      canonicalFact: "He kept promises across blizzards and decades.",
      parallelExplanation: "Reliability is his legend and may be yours.",
      tags: [
        "parallel-3",
      ],
    },
    {
      id: "braum-parallel-4",
      championId: "braum",
      type: "lore_parallel",
      relatedDimensions: [
        "independence",
        "ambition",
        "resilience",
      ],
      relevantAnswerKeys: [
        "q01:e",
        "q07:d",
      ],
      minTraitScores: {
        resilience: 52,
      },
      loreEventId: "freljord_unity",
      userInterpretation: "You collect stories and share them to teach courage.",
      canonicalFact: "Freljord children grow on tales of Braum's heart.",
      parallelExplanation: "Narrative as care links storyteller souls.",
      tags: [
        "parallel-4",
      ],
    },
    {
      id: "braum-parallel-5",
      championId: "braum",
      type: "lore_parallel",
      relatedDimensions: [
        "loyalty",
        "empathy",
        "socialConnection",
      ],
      relevantAnswerKeys: [
        "q05:c",
        "q16:b",
      ],
      minTraitScores: {
        empathy: 50,
      },
      loreEventId: "freljord_unity",
      userInterpretation: "Discipline lives in training so others need not suffer your unpreparedness.",
      canonicalFact: "His strength is practiced, not accidental.",
      parallelExplanation: "Prepared protector is a role you may inhabit.",
      tags: [
        "parallel-5",
      ],
    },
    {
      id: "braum-parallel-6",
      championId: "braum",
      type: "lore_parallel",
      relatedDimensions: [
        "relationshipWithDestiny",
        "discipline",
        "relationshipWithAuthority",
      ],
      relevantAnswerKeys: [
        "q18:a",
        "q10:a",
      ],
      minTraitScores: {
        relationshipWithDestiny: 52,
      },
      loreEventId: "freljord_unity",
      userInterpretation: "You forgive quickly when apology is sincere.",
      canonicalFact: "Braum welcomes redeemed rivals at hearth fires.",
      parallelExplanation: "Mercy after conflict is Freljord unity in miniature.",
      tags: [
        "parallel-6",
      ],
    },
    {
      id: "braum-parallel-7",
      championId: "braum",
      type: "lore_parallel",
      relatedDimensions: [
        "moralFlexibility",
        "pragmatism",
        "desireForPower",
      ],
      relevantAnswerKeys: [
        "q03:d",
        "q11:d",
      ],
      minTraitScores: {
        pragmatism: 52,
      },
      loreEventId: "freljord_unity",
      userInterpretation: "Freedom means no one freezes alone at the edge of camp.",
      canonicalFact: "He broke ice and isolation alike for strangers.",
      parallelExplanation: "Inclusion as liberty rhymes warmly.",
      tags: [
        "parallel-7",
      ],
    },
    {
      id: "braum-parallel-8",
      championId: "braum",
      type: "lore_parallel",
      relatedDimensions: [
        "emotionalSensitivity",
        "needForRecognition",
        "courage",
      ],
      relevantAnswerKeys: [
        "q02:c",
        "q17:c",
      ],
      minTraitScores: {
        emotionalSensitivity: 50,
      },
      loreEventId: "freljord_unity",
      userInterpretation: "You fear failing someone who counted on your strength.",
      canonicalFact: "Legends say he once held a mountain pass until reinforcements arrived.",
      parallelExplanation: "Fear of letting down dependents is human parallel.",
      tags: [
        "parallel-8",
      ],
    },
    {
      id: "braum-parallel-9",
      championId: "braum",
      type: "lore_parallel",
      relatedDimensions: [
        "impulsivity",
        "courage",
        "desireForFreedom",
      ],
      relevantAnswerKeys: [
        "q13:d",
        "q15:d",
      ],
      minTraitScores: {
        courage: 50,
      },
      loreEventId: "freljord_unity",
      userInterpretation: "Hope looks like shared food, shared fire, shared plan.",
      canonicalFact: "Braum's journeys leave supplies and repaired doors behind.",
      parallelExplanation: "Practical hope aligns with your answers about small kindnesses.",
      tags: [
        "parallel-9",
      ],
    },
    {
      id: "braum-strength-0",
      championId: "braum",
      type: "strength",
      text: "People feel safer when you enter a room.",
      relatedDimensions: [
        "resilience",
        "discipline",
      ],
      relevantAnswerKeys: [
        "q01:d",
        "q07:a",
      ],
      tags: [
        "strength-0",
      ],
    },
    {
      id: "braum-strength-1",
      championId: "braum",
      type: "strength",
      text: "You translate strength into hospitality.",
      relatedDimensions: [
        "empathy",
        "protectiveInstinct",
      ],
      relevantAnswerKeys: [
        "q08:a",
        "q13:e",
      ],
      tags: [
        "strength-1",
      ],
    },
    {
      id: "braum-strength-2",
      championId: "braum",
      type: "strength",
      text: "You bridge factions with humor and steady presence.",
      relatedDimensions: [
        "idealism",
        "courage",
      ],
      relevantAnswerKeys: [
        "q20:c",
        "q04:a",
      ],
      tags: [
        "strength-2",
      ],
    },
    {
      id: "braum-strength-3",
      championId: "braum",
      type: "strength",
      text: "You model courage that invites others to stand taller.",
      relatedDimensions: [
        "pragmatism",
        "relationshipWithAuthority",
      ],
      relevantAnswerKeys: [
        "q11:d",
        "q10:b",
      ],
      tags: [
        "strength-3",
      ],
    },
    {
      id: "braum-strength-4",
      championId: "braum",
      type: "strength",
      text: "You remember names, losses, and favorite songs.",
      relatedDimensions: [
        "independence",
        "desireForFreedom",
      ],
      relevantAnswerKeys: [
        "q15:a",
        "q06:e",
      ],
      tags: [
        "strength-4",
      ],
    },
    {
      id: "braum-weakness-0",
      championId: "braum",
      type: "weakness",
      text: "You may overextend until your own rest cracks.",
      relatedDimensions: [
        "emotionalSensitivity",
        "loyalty",
      ],
      relevantAnswerKeys: [
        "q09:c",
        "q07:a",
      ],
      tags: [
        "weakness-0",
      ],
    },
    {
      id: "braum-weakness-1",
      championId: "braum",
      type: "weakness",
      text: "Optimism can underestimate real predators.",
      relatedDimensions: [
        "impulsivity",
        "moralFlexibility",
      ],
      relevantAnswerKeys: [
        "q13:b",
        "q05:d",
      ],
      tags: [
        "weakness-1",
      ],
    },
    {
      id: "braum-weakness-2",
      championId: "braum",
      type: "weakness",
      text: "You absorb others' pain without always naming yours.",
      relatedDimensions: [
        "needForRecognition",
        "ambition",
      ],
      relevantAnswerKeys: [
        "q06:b",
        "q02:c",
      ],
      tags: [
        "weakness-2",
      ],
    },
    {
      id: "braum-weakness-3",
      championId: "braum",
      type: "weakness",
      text: "Boisterous mask hides fatigue from those you protect.",
      relatedDimensions: [
        "relationshipWithDestiny",
        "idealism",
      ],
      relevantAnswerKeys: [
        "q18:e",
        "q19:e",
      ],
      tags: [
        "weakness-3",
      ],
    },
    {
      id: "braum-weakness-4",
      championId: "braum",
      type: "weakness",
      text: "You struggle to ask for help, preferring to be the help.",
      relatedDimensions: [
        "desireForPower",
        "pragmatism",
      ],
      relevantAnswerKeys: [
        "q03:d",
        "q11:b",
      ],
      tags: [
        "weakness-4",
      ],
    },
    {
      id: "braum-conclusion-0",
      championId: "braum",
      type: "conclusion",
      text: "Keep the door open, including for your own needs.",
      relatedDimensions: [
        "loyalty",
        "protectiveInstinct",
      ],
      relevantAnswerKeys: [
        "q20:a",
        "q17:a",
      ],
      tags: [
        "conclusion-0",
      ],
    },
    {
      id: "braum-conclusion-1",
      championId: "braum",
      type: "conclusion",
      text: "Braum shows strength as invitation, not domination.",
      relatedDimensions: [
        "relationshipWithDestiny",
        "idealism",
      ],
      relevantAnswerKeys: [
        "q18:a",
        "q20:d",
      ],
      tags: [
        "conclusion-1",
      ],
    },
    {
      id: "braum-conclusion-2",
      championId: "braum",
      type: "conclusion",
      text: "Let warmth be strategy, not performance alone.",
      relatedDimensions: [
        "independence",
        "resilience",
      ],
      relevantAnswerKeys: [
        "q15:a",
        "q01:b",
      ],
      tags: [
        "conclusion-2",
      ],
    },
    {
      id: "braum-conclusion-3",
      championId: "braum",
      type: "conclusion",
      text: "Repair what you can; not every fight needs your fist.",
      relatedDimensions: [
        "empathy",
        "socialConnection",
      ],
      relevantAnswerKeys: [
        "q12:e",
        "q16:e",
      ],
      tags: [
        "conclusion-3",
      ],
    },
    {
      id: "braum-conclusion-4",
      championId: "braum",
      type: "conclusion",
      text: "Freljord unity begins at one hearth; tend yours.",
      relatedDimensions: [
        "discipline",
        "courage",
      ],
      relevantAnswerKeys: [
        "q10:a",
        "q13:c",
      ],
      tags: [
        "conclusion-4",
      ],
    },
  ],
};
