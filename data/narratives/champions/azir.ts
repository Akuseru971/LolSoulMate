import type { ChampionNarrativePack } from "../types";

export const azirPack: ChampionNarrativePack = {
  championId: "azir",
  loreEventIds: ["shurima_restoration", "shurima_fall"],
  fragments: [
    {
      id: "azir-intro-0",
      championId: "azir",
      type: "introduction",
      text: "Azir returned from betrayal dust to raise a sun-disc and call empire back to life.",
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
      id: "azir-intro-1",
      championId: "azir",
      type: "introduction",
      text: "Your pattern touches ambition fused with vision, pride that believes restoration possible.",
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
      id: "azir-intro-2",
      championId: "azir",
      type: "introduction",
      text: "He was emperor once; now he is miracle with blueprint.",
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
      id: "azir-intro-3",
      championId: "azir",
      type: "introduction",
      text: "Sand obeys memory of glory; skeptics obey caution.",
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
      id: "azir-intro-4",
      championId: "azir",
      type: "introduction",
      text: "You need not ascend to want legacy that rebuilds what collapse stole.",
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
      id: "azir-parallel-0",
      championId: "azir",
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
      loreEventId: "shurima_restoration",
      userInterpretation: "You believe greatness can be rebuilt after humiliation.",
      canonicalFact: "Azir resurrected and lifted Shurima's capital from desert.",
      parallelExplanation: "Restoration drive aligns; his method was divine.",
      tags: [
        "parallel-0",
        "emperor",
      ],
    },
    {
      id: "azir-parallel-1",
      championId: "azir",
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
      loreEventId: "shurima_restoration",
      userInterpretation: "Ambition serves civilization, not only ego.",
      canonicalFact: "He promises prosperity to reunited Shuriman peoples.",
      parallelExplanation: "Visionary ambition rhymes.",
      tags: [
        "parallel-1",
      ],
    },
    {
      id: "azir-parallel-2",
      championId: "azir",
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
      loreEventId: "shurima_restoration",
      userInterpretation: "Betrayal taught you who must never hold keys again.",
      canonicalFact: "Xerath's treachery killed him at ascension ritual.",
      parallelExplanation: "Trust fracture aligns.",
      tags: [
        "parallel-2",
      ],
    },
    {
      id: "azir-parallel-3",
      championId: "azir",
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
      loreEventId: "shurima_restoration",
      userInterpretation: "You delegate to capable hands while setting direction.",
      canonicalFact: "Azir elevates loyal commanders in new empire.",
      parallelExplanation: "Leader-as-architect aligns.",
      tags: [
        "parallel-3",
      ],
    },
    {
      id: "azir-parallel-4",
      championId: "azir",
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
      loreEventId: "shurima_restoration",
      userInterpretation: "Recognition matters when it legitimizes reform.",
      canonicalFact: "He demands acknowledgment as true emperor.",
      parallelExplanation: "Need for legitimate title links.",
      tags: [
        "parallel-4",
      ],
    },
    {
      id: "azir-parallel-5",
      championId: "azir",
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
      loreEventId: "shurima_fall",
      userInterpretation: "Discipline in planning prevents second collapse.",
      canonicalFact: "He studies old failures while designing new institutions.",
      parallelExplanation: "Learning from fall rhymes.",
      tags: [
        "parallel-5",
      ],
    },
    {
      id: "azir-parallel-6",
      championId: "azir",
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
      loreEventId: "shurima_restoration",
      userInterpretation: "You romanticize golden age yet work in present sand.",
      canonicalFact: "Azir merges ancient aesthetics with current needs.",
      parallelExplanation: "Nostalgia plus action aligns.",
      tags: [
        "parallel-6",
      ],
    },
    {
      id: "azir-parallel-7",
      championId: "azir",
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
      loreEventId: "shurima_restoration",
      userInterpretation: "Power tempts you to speed timelines others call impossible.",
      canonicalFact: "Restoration magic accelerates rebuilding dramatically.",
      parallelExplanation: "Impatience with slowness links.",
      tags: [
        "parallel-7",
      ],
    },
    {
      id: "azir-parallel-8",
      championId: "azir",
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
      loreEventId: "shurima_restoration",
      userInterpretation: "Legacy is city skyline, not personal anecdote.",
      canonicalFact: "He measures success in restored aqueducts and armies.",
      parallelExplanation: "Civilizational legacy aligns.",
      tags: [
        "parallel-8",
      ],
    },
    {
      id: "azir-parallel-9",
      championId: "azir",
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
      loreEventId: "shurima_restoration",
      userInterpretation: "Hope looks like banners rising from dunes.",
      canonicalFact: "Shuriman refugees witness sun-disc and weep.",
      parallelExplanation: "Symbolic hope rhymes.",
      tags: [
        "parallel-9",
      ],
    },
    {
      id: "azir-strength-0",
      championId: "azir",
      type: "strength",
      text: "You inspire large projects with articulate vision.",
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
      id: "azir-strength-1",
      championId: "azir",
      type: "strength",
      text: "You learn from catastrophic mistakes.",
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
      id: "azir-strength-2",
      championId: "azir",
      type: "strength",
      text: "You magnetize talented collaborators.",
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
      id: "azir-strength-3",
      championId: "azir",
      type: "strength",
      text: "You combine pride with genuine care for people.",
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
      id: "azir-strength-4",
      championId: "azir",
      type: "strength",
      text: "You persist after deathly setbacks metaphorically or literally.",
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
      id: "azir-weakness-0",
      championId: "azir",
      type: "weakness",
      text: "Pride blinds you to necessary compromise.",
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
      id: "azir-weakness-1",
      championId: "azir",
      type: "weakness",
      text: "Speed risks repeating Xerath-era hubris.",
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
      id: "azir-weakness-2",
      championId: "azir",
      type: "weakness",
      text: "You may confuse loyalty with obedience.",
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
      id: "azir-weakness-3",
      championId: "azir",
      type: "weakness",
      text: "Skeptics feel crushed, not convinced.",
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
      id: "azir-weakness-4",
      championId: "azir",
      type: "weakness",
      text: "Golden myth overshadows present suffering.",
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
      id: "azir-conclusion-0",
      championId: "azir",
      type: "conclusion",
      text: "Azir warns: empires rise on trust, not only sun.",
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
      id: "azir-conclusion-1",
      championId: "azir",
      type: "conclusion",
      text: "Rebuild with ears open to desert poor.",
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
      id: "azir-conclusion-2",
      championId: "azir",
      type: "conclusion",
      text: "Let ambition serve living Shurimans, not ghosts.",
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
      id: "azir-conclusion-3",
      championId: "azir",
      type: "conclusion",
      text: "Forgive cautiously; remember treason clearly.",
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
      id: "azir-conclusion-4",
      championId: "azir",
      type: "conclusion",
      text: "Your skyline needs justice inside walls.",
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
