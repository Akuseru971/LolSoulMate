import type { ChampionNarrativePack } from "../types";

export const leonaPack: ChampionNarrativePack = {
  championId: "leona",
  loreEventIds: ["targon_ascent"],
  fragments: [
    {
      id: "leona-intro-0",
      championId: "leona",
      type: "introduction",
      text: "Leona rises like dawn over Targon: radiant, disciplined, vow-bound to solar order.",
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
      id: "leona-intro-1",
      championId: "leona",
      type: "introduction",
      text: "Your pattern suggests protective authority rooted in faith and training.",
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
      id: "leona-intro-2",
      championId: "leona",
      type: "introduction",
      text: "She ascended to defend Solari truth with shield and spear.",
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
      id: "leona-intro-3",
      championId: "leona",
      type: "introduction",
      text: "Warmth and severity share her face depending on who threatens light.",
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
      id: "leona-intro-4",
      championId: "leona",
      type: "introduction",
      text: "You need not be Aspect-host to lead with visible conviction.",
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
      id: "leona-parallel-0",
      championId: "leona",
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
      loreEventId: "targon_ascent",
      userInterpretation: "You accept leadership as duty, not vanity.",
      canonicalFact: "Leona became Aspect of the Sun to guard Mount Targon.",
      parallelExplanation: "Called leadership aligns; her power is divine.",
      tags: [
        "parallel-0",
        "sun",
      ],
    },
    {
      id: "leona-parallel-1",
      championId: "leona",
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
      loreEventId: "targon_ascent",
      userInterpretation: "You shield others before advancing yourself.",
      canonicalFact: "Her eclipse shield protects allies in every battle.",
      parallelExplanation: "Protective instinct rhymes.",
      tags: [
        "parallel-1",
      ],
    },
    {
      id: "leona-parallel-2",
      championId: "leona",
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
      loreEventId: "targon_ascent",
      userInterpretation: "Discipline is worship made daily.",
      canonicalFact: "Solari training shaped her before ascension.",
      parallelExplanation: "Ritual discipline links.",
      tags: [
        "parallel-2",
      ],
    },
    {
      id: "leona-parallel-3",
      championId: "leona",
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
      loreEventId: "targon_ascent",
      userInterpretation: "You believe order prevents greater suffering.",
      canonicalFact: "Solari doctrine frames sun as civilization's spine.",
      parallelExplanation: "Order as mercy aligns.",
      tags: [
        "parallel-3",
      ],
    },
    {
      id: "leona-parallel-4",
      championId: "leona",
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
      loreEventId: "targon_ascent",
      userInterpretation: "Friendship can survive ideological distance.",
      canonicalFact: "Diana was her childhood ally before their paths split.",
      parallelExplanation: "Bond across conflict is poignant parallel.",
      tags: [
        "parallel-4",
      ],
    },
    {
      id: "leona-parallel-5",
      championId: "leona",
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
      loreEventId: "targon_ascent",
      userInterpretation: "You confront heresy with sorrow as well as strength.",
      canonicalFact: "Leona did not rejoice in hunting Diana.",
      parallelExplanation: "Reluctant enforcement aligns emotionally.",
      tags: [
        "parallel-5",
      ],
    },
    {
      id: "leona-parallel-6",
      championId: "leona",
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
      loreEventId: "targon_ascent",
      userInterpretation: "Courage is standing in light others fear.",
      canonicalFact: "She returned from ascent changed yet steadfast.",
      parallelExplanation: "Visible bravery rhymes.",
      tags: [
        "parallel-6",
      ],
    },
    {
      id: "leona-parallel-7",
      championId: "leona",
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
      loreEventId: "targon_ascent",
      userInterpretation: "Authority must serve the vulnerable.",
      canonicalFact: "She protects pilgrims and Solari faithful.",
      parallelExplanation: "Servant protector theme links.",
      tags: [
        "parallel-7",
      ],
    },
    {
      id: "leona-parallel-8",
      championId: "leona",
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
      loreEventId: "targon_ascent",
      userInterpretation: "You fear failing the divine charge.",
      canonicalFact: "Aspects bear cosmic responsibility.",
      parallelExplanation: "Fear of letting down calling aligns.",
      tags: [
        "parallel-8",
      ],
    },
    {
      id: "leona-parallel-9",
      championId: "leona",
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
      loreEventId: "targon_ascent",
      userInterpretation: "Legacy is dawn that others can walk by.",
      canonicalFact: "Solari look to her as living sun.",
      parallelExplanation: "Guiding legacy aligns.",
      tags: [
        "parallel-9",
      ],
    },
    {
      id: "leona-strength-0",
      championId: "leona",
      type: "strength",
      text: "You stabilize groups with calm certainty.",
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
      id: "leona-strength-1",
      championId: "leona",
      type: "strength",
      text: "You translate faith into protective action.",
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
      id: "leona-strength-2",
      championId: "leona",
      type: "strength",
      text: "You train until competence feels like prayer.",
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
      id: "leona-strength-3",
      championId: "leona",
      type: "strength",
      text: "You inspire discipline without cruelty.",
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
      id: "leona-strength-4",
      championId: "leona",
      type: "strength",
      text: "You remain loyal to friends even in disagreement.",
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
      id: "leona-weakness-0",
      championId: "leona",
      type: "weakness",
      text: "Doctrine can blind you to legitimate dissent.",
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
      id: "leona-weakness-1",
      championId: "leona",
      type: "weakness",
      text: "You may suppress your own doubts.",
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
      id: "leona-weakness-2",
      championId: "leona",
      type: "weakness",
      text: "Radiance intimidates those who need gentleness.",
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
      id: "leona-weakness-3",
      championId: "leona",
      type: "weakness",
      text: "Conflict with loved ones wounds deeply.",
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
      id: "leona-weakness-4",
      championId: "leona",
      type: "weakness",
      text: "Perfectionism in vows creates brittle joy.",
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
      id: "leona-conclusion-0",
      championId: "leona",
      type: "conclusion",
      text: "Leona teaches light can guard without scorching.",
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
      id: "leona-conclusion-1",
      championId: "leona",
      type: "conclusion",
      text: "Question sun when shadows hold truth.",
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
      id: "leona-conclusion-2",
      championId: "leona",
      type: "conclusion",
      text: "Let shield face outward, heart stay porous.",
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
      id: "leona-conclusion-3",
      championId: "leona",
      type: "conclusion",
      text: "Dawn returns; repair with Diana if paths allow.",
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
      id: "leona-conclusion-4",
      championId: "leona",
      type: "conclusion",
      text: "Lead so others feel warmed, not shrunk.",
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
