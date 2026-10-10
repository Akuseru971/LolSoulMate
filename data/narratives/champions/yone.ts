import type { ChampionNarrativePack } from "../types";

export const yonePack: ChampionNarrativePack = {
  championId: "yone",
  loreEventIds: ["ionian_balance", "shadow_isles_ruin"],
  fragments: [
    {
      id: "yone-intro-0",
      championId: "yone",
      type: "introduction",
      text: "Yone crossed death hunting his brother's shadow and returned with two blades, two truths.",
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
      id: "yone-intro-1",
      championId: "yone",
      type: "introduction",
      text: "Your pattern balances duty to family with duty to balance itself.",
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
      id: "yone-intro-2",
      championId: "yone",
      type: "introduction",
      text: "Azakana and mist tested him; discipline and sorrow forged Azakana hunter path.",
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
      id: "yone-intro-3",
      championId: "yone",
      type: "introduction",
      text: "He loves Yasuo still, though story between them tore.",
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
      id: "yone-intro-4",
      championId: "yone",
      type: "introduction",
      text: "You need not die to feel split between honor and forgiveness.",
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
      id: "yone-parallel-0",
      championId: "yone",
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
      loreEventId: "ionian_balance",
      userInterpretation: "You feel responsible for siblings' or peers' failures.",
      canonicalFact: "Yone died pursuing Yasuo after master's murder accusation.",
      parallelExplanation: "Family duty aligns; his pursuit was fatal.",
      tags: [
        "parallel-0",
        "dual",
      ],
    },
    {
      id: "yone-parallel-1",
      championId: "yone",
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
      loreEventId: "ionian_balance",
      userInterpretation: "Discipline masks heartbreak.",
      canonicalFact: "He trains endlessly as azakana hunter.",
      parallelExplanation: "Training as grief container rhymes.",
      tags: [
        "parallel-1",
      ],
    },
    {
      id: "yone-parallel-2",
      championId: "yone",
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
      loreEventId: "ionian_balance",
      userInterpretation: "You seek harmony between spirit and mortal choice.",
      canonicalFact: "Yone walks realm between living and demonic.",
      parallelExplanation: "Integrated self theme aligns metaphorically.",
      tags: [
        "parallel-2",
      ],
    },
    {
      id: "yone-parallel-3",
      championId: "yone",
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
      loreEventId: "ionian_balance",
      userInterpretation: "Forgiveness competes with need for answers.",
      canonicalFact: "Reunion with Yasuo mixed embrace and unresolved pain.",
      parallelExplanation: "Sibling reconciliation arc links.",
      tags: [
        "parallel-3",
      ],
    },
    {
      id: "yone-parallel-4",
      championId: "yone",
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
      loreEventId: "ionian_balance",
      userInterpretation: "You protect others from spiritual corruption.",
      canonicalFact: "He binds azakana that feed on emotion.",
      parallelExplanation: "Protective spiritual work rhymes.",
      tags: [
        "parallel-4",
      ],
    },
    {
      id: "yone-parallel-5",
      championId: "yone",
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
      loreEventId: "ionian_balance",
      userInterpretation: "Independence follows death of old identity.",
      canonicalFact: "Return from spirit realm remade his name and role.",
      parallelExplanation: "Rebirth narrative aligns.",
      tags: [
        "parallel-5",
      ],
    },
    {
      id: "yone-parallel-6",
      championId: "yone",
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
      loreEventId: "ionian_balance",
      userInterpretation: "Courage is facing family truth without blade first.",
      canonicalFact: "Yone ultimately chose understanding with Yasuo.",
      parallelExplanation: "Late softness aligns.",
      tags: [
        "parallel-6",
      ],
    },
    {
      id: "yone-parallel-7",
      championId: "yone",
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
      loreEventId: "ionian_balance",
      userInterpretation: "You fear becoming monster when anger wins.",
      canonicalFact: "Azakana nearly consumed him.",
      parallelExplanation: "Fear of inner demon links.",
      tags: [
        "parallel-7",
      ],
    },
    {
      id: "yone-parallel-8",
      championId: "yone",
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
      loreEventId: "ionian_balance",
      userInterpretation: "Legacy is restoring balance, not winning duels.",
      canonicalFact: "Kinkou traditions inform his hunts.",
      parallelExplanation: "Balance legacy aligns.",
      tags: [
        "parallel-8",
      ],
    },
    {
      id: "yone-parallel-9",
      championId: "yone",
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
      loreEventId: "ionian_balance",
      userInterpretation: "Hope looks like two blades pointing same direction again.",
      canonicalFact: "Brothers fight side by side in newer tales.",
      parallelExplanation: "Repaired bond hope rhymes.",
      tags: [
        "parallel-9",
      ],
    },
    {
      id: "yone-strength-0",
      championId: "yone",
      type: "strength",
      text: "You mediate between emotion and code.",
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
      id: "yone-strength-1",
      championId: "yone",
      type: "strength",
      text: "You master skills requiring patience.",
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
      id: "yone-strength-2",
      championId: "yone",
      type: "strength",
      text: "You return after setback transformed.",
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
      id: "yone-strength-3",
      championId: "yone",
      type: "strength",
      text: "You defend realm others cannot see.",
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
      id: "yone-strength-4",
      championId: "yone",
      type: "strength",
      text: "You choose family repair when possible.",
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
      id: "yone-weakness-0",
      championId: "yone",
      type: "weakness",
      text: "Duty to family can delay your own healing.",
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
      id: "yone-weakness-1",
      championId: "yone",
      type: "weakness",
      text: "You suppress anger until it flares.",
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
      id: "yone-weakness-2",
      championId: "yone",
      type: "weakness",
      text: "Spiritual burden isolates you.",
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
      id: "yone-weakness-3",
      championId: "yone",
      type: "weakness",
      text: "Perfectionism in form avoids feeling.",
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
      id: "yone-weakness-4",
      championId: "yone",
      type: "weakness",
      text: "You judge yourself harder than azakana.",
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
      id: "yone-conclusion-0",
      championId: "yone",
      type: "conclusion",
      text: "Yone teaches second life can be chooser, not victim.",
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
      id: "yone-conclusion-1",
      championId: "yone",
      type: "conclusion",
      text: "Speak with Yasuo before story hardens.",
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
      id: "yone-conclusion-2",
      championId: "yone",
      type: "conclusion",
      text: "Bind your demons with name and ritual.",
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
      id: "yone-conclusion-3",
      championId: "yone",
      type: "conclusion",
      text: "Two blades need one purpose: protect living.",
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
      id: "yone-conclusion-4",
      championId: "yone",
      type: "conclusion",
      text: "Balance includes forgiving yourself.",
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
