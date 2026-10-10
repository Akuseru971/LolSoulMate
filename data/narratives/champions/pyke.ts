import type { ChampionNarrativePack } from "../types";

export const pykePack: ChampionNarrativePack = {
  championId: "pyke",
  loreEventIds: ["bilgewater_vengeance"],
  fragments: [
    {
      id: "pyke-intro-0",
      championId: "pyke",
      type: "introduction",
      text: "Pyke lists names in salt and memory, revenant accountant of Bilgewater's betrayals.",
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
      id: "pyke-intro-1",
      championId: "pyke",
      type: "introduction",
      text: "Your pattern may touch uncompromising justice, or fear of those who cannot forgive.",
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
      id: "pyke-intro-2",
      championId: "pyke",
      type: "introduction",
      text: "He was harpooner cheated to death; now he returns debt to captains who thought accounts closed.",
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
      id: "pyke-intro-3",
      championId: "pyke",
      type: "introduction",
      text: "Spectacle follows him; mercy rarely does.",
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
      id: "pyke-intro-4",
      championId: "pyke",
      type: "introduction",
      text: "You are not undead enforcer; you may still feel ledgers that must balance.",
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
      id: "pyke-parallel-0",
      championId: "pyke",
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
      loreEventId: "bilgewater_vengeance",
      userInterpretation: "You remember who owed what when systems failed.",
      canonicalFact: "Pyke hunts those he judges guilty of maritime murder.",
      parallelExplanation: "Moral accounting aligns; his collection is lethal.",
      tags: [
        "parallel-0",
        "ledger",
      ],
    },
    {
      id: "pyke-parallel-1",
      championId: "pyke",
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
      loreEventId: "bilgewater_vengeance",
      userInterpretation: "Betrayal by peers defines your caution.",
      canonicalFact: "Crew sacrificed him to save gold.",
      parallelExplanation: "Workplace betrayal theme links.",
      tags: [
        "parallel-1",
      ],
    },
    {
      id: "pyke-parallel-2",
      championId: "pyke",
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
      loreEventId: "bilgewater_vengeance",
      userInterpretation: "You distrust wealthy captains who rewrite stories.",
      canonicalFact: "Bilgewater oligarchs erased Pyke's death easily.",
      parallelExplanation: "Class skepticism rhymes.",
      tags: [
        "parallel-2",
      ],
    },
    {
      id: "pyke-parallel-3",
      championId: "pyke",
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
      loreEventId: "bilgewater_vengeance",
      userInterpretation: "Impulse executes before committee meets.",
      canonicalFact: "Pyke strikes from shadows without trial.",
      parallelExplanation: "Fast retribution is his; you may feel urge safely.",
      tags: [
        "parallel-3",
      ],
    },
    {
      id: "pyke-parallel-4",
      championId: "pyke",
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
      loreEventId: "bilgewater_vengeance",
      userInterpretation: "You vocalize grudges others swallow.",
      canonicalFact: "His hook screams names in alleyways.",
      parallelExplanation: "Naming harm aligns without murder.",
      tags: [
        "parallel-4",
      ],
    },
    {
      id: "pyke-parallel-5",
      championId: "pyke",
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
      loreEventId: "bilgewater_vengeance",
      userInterpretation: "Community justice feels personal on docks.",
      canonicalFact: "Harbor folk whisper his killings like weather.",
      parallelExplanation: "Folk justice theme links.",
      tags: [
        "parallel-5",
      ],
    },
    {
      id: "pyke-parallel-6",
      championId: "pyke",
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
      loreEventId: "bilgewater_vengeance",
      userInterpretation: "You struggle to forgive yourself for surviving.",
      canonicalFact: "Undeath keeps Pyke from closure.",
      parallelExplanation: "Survivor guilt rhymes metaphorically.",
      tags: [
        "parallel-6",
      ],
    },
    {
      id: "pyke-parallel-7",
      championId: "pyke",
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
      loreEventId: "bilgewater_vengeance",
      userInterpretation: "Power without mercy terrifies you when mirrored.",
      canonicalFact: "Even allies fear his unpredictability.",
      parallelExplanation: "Fear of unchecked avengers aligns.",
      tags: [
        "parallel-7",
      ],
    },
    {
      id: "pyke-parallel-8",
      championId: "pyke",
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
      loreEventId: "bilgewater_vengeance",
      userInterpretation: "Hope for you means accounts settled without new ghosts.",
      canonicalFact: "Some pray his list ends; it never does.",
      parallelExplanation: "Desire for closure links.",
      tags: [
        "parallel-8",
      ],
    },
    {
      id: "pyke-parallel-9",
      championId: "pyke",
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
      loreEventId: "bilgewater_vengeance",
      userInterpretation: "Identity fused with mission can erase rest.",
      canonicalFact: "Pyke barely recalls human tenderness.",
      parallelExplanation: "Mission obsession cautionary.",
      tags: [
        "parallel-9",
      ],
    },
    {
      id: "pyke-strength-0",
      championId: "pyke",
      type: "strength",
      text: "You detect liars in negotiation.",
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
      id: "pyke-strength-1",
      championId: "pyke",
      type: "strength",
      text: "You advocate for workers cheated by bosses.",
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
      id: "pyke-strength-2",
      championId: "pyke",
      type: "strength",
      text: "You persist when institutions ignore you.",
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
      id: "pyke-strength-3",
      championId: "pyke",
      type: "strength",
      text: "You make violators feel seen.",
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
      id: "pyke-strength-4",
      championId: "pyke",
      type: "strength",
      text: "You survive betrayal with narrative clarity.",
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
      id: "pyke-weakness-0",
      championId: "pyke",
      type: "weakness",
      text: "Vengeance loops without healing.",
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
      id: "pyke-weakness-1",
      championId: "pyke",
      type: "weakness",
      text: "Binary guilt ignores context.",
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
      id: "pyke-weakness-2",
      championId: "pyke",
      type: "weakness",
      text: "You may isolate from fear of becoming judge.",
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
      id: "pyke-weakness-3",
      championId: "pyke",
      type: "weakness",
      text: "Rage erodes empathy.",
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
      id: "pyke-weakness-4",
      championId: "pyke",
      type: "weakness",
      text: "Ledger mindset misses redemption arcs.",
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
      id: "pyke-conclusion-0",
      championId: "pyke",
      type: "conclusion",
      text: "Pyke warns: unpaid debts fester into monsters.",
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
      id: "pyke-conclusion-1",
      championId: "pyke",
      type: "conclusion",
      text: "Seek justice with process, not only hook.",
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
      id: "pyke-conclusion-2",
      championId: "pyke",
      type: "conclusion",
      text: "Let survival become life, not list.",
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
      id: "pyke-conclusion-3",
      championId: "pyke",
      type: "conclusion",
      text: "Bilgewater needs courts, not only specters.",
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
      id: "pyke-conclusion-4",
      championId: "pyke",
      type: "conclusion",
      text: "Close accounts you can; release those you cannot.",
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
