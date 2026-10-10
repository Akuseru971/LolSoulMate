import type { ChampionNarrativePack } from "../types";

export const ekkoPack: ChampionNarrativePack = {
  championId: "ekko",
  loreEventIds: ["zaun_progress"],
  fragments: [
    {
      id: "ekko-intro-0",
      championId: "ekko",
      type: "introduction",
      text: "Ekko bends seconds in Zaun's alleys where tomorrow must be stolen back from neglect.",
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
      id: "ekko-intro-1",
      championId: "ekko",
      type: "introduction",
      text: "Your pattern mixes ingenuity, loyalty to friends, and defiance of fatalism.",
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
      id: "ekko-intro-2",
      championId: "ekko",
      type: "introduction",
      text: "He rebuilds possibility with scrap, clocks, and stubborn joy.",
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
      id: "ekko-intro-3",
      championId: "ekko",
      type: "introduction",
      text: "Progress in Zaun means protecting kids who never asked to be collateral.",
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
      id: "ekko-intro-4",
      championId: "ekko",
      type: "introduction",
      text: "You need not rewind time to fight for futures others write off.",
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
      id: "ekko-parallel-0",
      championId: "ekko",
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
      loreEventId: "zaun_progress",
      userInterpretation: "You innovate when systems fail your community.",
      canonicalFact: "Ekko's Z-Drive and Firelights challenge Piltover's indifference.",
      parallelExplanation: "Grassroots invention aligns; his tech is miraculous.",
      tags: [
        "parallel-0",
        "time",
      ],
    },
    {
      id: "ekko-parallel-1",
      championId: "ekko",
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
      loreEventId: "zaun_progress",
      userInterpretation: "Friendship is infrastructure you maintain fiercely.",
      canonicalFact: "He leads Firelights as family as much as gang.",
      parallelExplanation: "Social loyalty as survival rhymes.",
      tags: [
        "parallel-1",
      ],
    },
    {
      id: "ekko-parallel-2",
      championId: "ekko",
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
      loreEventId: "zaun_progress",
      userInterpretation: "You replay choices mentally, seeking better outcomes.",
      canonicalFact: "Ekko literally revisits moments to save allies.",
      parallelExplanation: "Mental what-ifs parallel his temporal ones safely.",
      tags: [
        "parallel-2",
      ],
    },
    {
      id: "ekko-parallel-3",
      championId: "ekko",
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
      loreEventId: "zaun_progress",
      userInterpretation: "Pragmatism includes joy, not only grim calculation.",
      canonicalFact: "He dances through fights, mocking despair.",
      parallelExplanation: "Playful resilience aligns.",
      tags: [
        "parallel-3",
      ],
    },
    {
      id: "ekko-parallel-4",
      championId: "ekko",
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
      loreEventId: "zaun_progress",
      userInterpretation: "You distrust authority that never visits your streets.",
      canonicalFact: "Zaun's councils and Piltover's enforcers overlook his people.",
      parallelExplanation: "Skepticism of distant power links.",
      tags: [
        "parallel-4",
      ],
    },
    {
      id: "ekko-parallel-5",
      championId: "ekko",
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
      loreEventId: "zaun_progress",
      userInterpretation: "Sacrifice for friends feels obvious, not heroic.",
      canonicalFact: "He risked paradox to save Jinx-era loved ones in stories told.",
      parallelExplanation: "Protective sacrifice theme aligns.",
      tags: [
        "parallel-5",
      ],
    },
    {
      id: "ekko-parallel-6",
      championId: "ekko",
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
      loreEventId: "zaun_progress",
      userInterpretation: "Ambition aims at changing conditions, not climbing alone.",
      canonicalFact: "Ekko wants safer Zaun, not personal throne.",
      parallelExplanation: "Community ambition rhymes.",
      tags: [
        "parallel-6",
      ],
    },
    {
      id: "ekko-parallel-7",
      championId: "ekko",
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
      loreEventId: "zaun_progress",
      userInterpretation: "Impulse serves rescue more than vanity.",
      canonicalFact: "He dives into fights when timers run out.",
      parallelExplanation: "Fast action for others aligns.",
      tags: [
        "parallel-7",
      ],
    },
    {
      id: "ekko-parallel-8",
      championId: "ekko",
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
      loreEventId: "zaun_progress",
      userInterpretation: "Memory anchors identity against chaos.",
      canonicalFact: "His device stores moments that define who survived.",
      parallelExplanation: "Memory as selfhood links.",
      tags: [
        "parallel-8",
      ],
    },
    {
      id: "ekko-parallel-9",
      championId: "ekko",
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
      loreEventId: "zaun_progress",
      userInterpretation: "Hope is a plan with deadlines.",
      canonicalFact: "Firelights schedule raids, repairs, and celebrations alike.",
      parallelExplanation: "Structured hope aligns with quiz pragmatism.",
      tags: [
        "parallel-9",
      ],
    },
    {
      id: "ekko-strength-0",
      championId: "ekko",
      type: "strength",
      text: "You invent paths where none existed.",
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
      id: "ekko-strength-1",
      championId: "ekko",
      type: "strength",
      text: "You keep friend groups cohesive under pressure.",
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
      id: "ekko-strength-2",
      championId: "ekko",
      type: "strength",
      text: "You learn quickly from failed attempts.",
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
      id: "ekko-strength-3",
      championId: "ekko",
      type: "strength",
      text: "You bring humor into bleak rooms.",
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
      id: "ekko-strength-4",
      championId: "ekko",
      type: "strength",
      text: "You prioritize kids and vulnerable neighbors.",
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
      id: "ekko-weakness-0",
      championId: "ekko",
      type: "weakness",
      text: "Playing with limits risks burnout or harm.",
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
      id: "ekko-weakness-1",
      championId: "ekko",
      type: "weakness",
      text: "You may overpromise second chances.",
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
      id: "ekko-weakness-2",
      championId: "ekko",
      type: "weakness",
      text: "Anger at injustice can scatter focus.",
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
      id: "ekko-weakness-3",
      championId: "ekko",
      type: "weakness",
      text: "You hide grief behind jokes.",
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
      id: "ekko-weakness-4",
      championId: "ekko",
      type: "weakness",
      text: "Time tricks cannot fix every systemic wound.",
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
      id: "ekko-conclusion-0",
      championId: "ekko",
      type: "conclusion",
      text: "Ekko says futures belong to those who schedule rebellion and rest.",
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
      id: "ekko-conclusion-1",
      championId: "ekko",
      type: "conclusion",
      text: "Use memory to guide, not to trap.",
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
      id: "ekko-conclusion-2",
      championId: "ekko",
      type: "conclusion",
      text: "Build with friends; do not carry Z-Drive alone.",
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
      id: "ekko-conclusion-3",
      championId: "ekko",
      type: "conclusion",
      text: "Zaun progress is brick by brick, laugh by laugh.",
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
      id: "ekko-conclusion-4",
      championId: "ekko",
      type: "conclusion",
      text: "Rewind only to learn; live forward.",
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
