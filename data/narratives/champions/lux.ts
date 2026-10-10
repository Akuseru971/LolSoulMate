import type { ChampionNarrativePack } from "../types";

export const luxPack: ChampionNarrativePack = {
  championId: "lux",
  loreEventIds: ["demacia_mage_secrets"],
  fragments: [
    {
      id: "lux-intro-0",
      championId: "lux",
      type: "introduction",
      text: "Lux keeps light inside a kingdom that fears it, smile as camouflage, beam as truth.",
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
      id: "lux-intro-1",
      championId: "lux",
      type: "introduction",
      text: "Your pattern glows with idealism tested by rules that would deny part of who you are.",
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
      id: "lux-intro-2",
      championId: "lux",
      type: "introduction",
      text: "Demacia asks conformity; she answers with hidden help and stubborn hope.",
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
      id: "lux-intro-3",
      championId: "lux",
      type: "introduction",
      text: "Magic in her hands wants to heal, reveal, and sometimes rebel politely.",
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
      id: "lux-intro-4",
      championId: "lux",
      type: "introduction",
      text: "You need not be a Crownguard to know the fatigue of appearing harmless.",
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
      id: "lux-parallel-0",
      championId: "lux",
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
      loreEventId: "demacia_mage_secrets",
      userInterpretation: "You hide strength until someone needs it urgently.",
      canonicalFact: "Lux concealed her talents while serving Demacia publicly.",
      parallelExplanation: "Secrecy for survival aligns; her secret was arcane.",
      tags: [
        "parallel-0",
        "light",
      ],
    },
    {
      id: "lux-parallel-1",
      championId: "lux",
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
      loreEventId: "demacia_mage_secrets",
      userInterpretation: "Rules feel unjust when they harm innocents.",
      canonicalFact: "Demacian law hunts mages; she broke it to save lives.",
      parallelExplanation: "Civil disobedience temperament rhymes without shared battles.",
      tags: [
        "parallel-1",
      ],
    },
    {
      id: "lux-parallel-2",
      championId: "lux",
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
      loreEventId: "demacia_mage_secrets",
      userInterpretation: "You want recognition for good done, not for rebellion alone.",
      canonicalFact: "She seeks acceptance from family and nation alike.",
      parallelExplanation: "Need to be seen as worthy is human parallel.",
      tags: [
        "parallel-2",
      ],
    },
    {
      id: "lux-parallel-3",
      championId: "lux",
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
      loreEventId: "demacia_mage_secrets",
      userInterpretation: "Optimism persists even after witnessing prejudice.",
      canonicalFact: "Lux still believes Demacia can become better.",
      parallelExplanation: "Hope inside systems is shared theme.",
      tags: [
        "parallel-3",
      ],
    },
    {
      id: "lux-parallel-4",
      championId: "lux",
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
      loreEventId: "demacia_mage_secrets",
      userInterpretation: "You choose mercy when law demands hardness.",
      canonicalFact: "Her light binds and shields more often than it burns.",
      parallelExplanation: "Protective mercy aligns with quiz mercy answers.",
      tags: [
        "parallel-4",
      ],
    },
    {
      id: "lux-parallel-5",
      championId: "lux",
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
      loreEventId: "demacia_mage_secrets",
      userInterpretation: "Family loyalty complicates moral clarity.",
      canonicalFact: "Garen and her parents embody the code she quietly defies.",
      parallelExplanation: "Split loyalties mirror many secret selves.",
      tags: [
        "parallel-5",
      ],
    },
    {
      id: "lux-parallel-6",
      championId: "lux",
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
      loreEventId: "demacia_mage_secrets",
      userInterpretation: "You educate yourself when institutions refuse truth.",
      canonicalFact: "Lux studied magic in hiding, risking discovery.",
      parallelExplanation: "Self-directed learning links curious souls.",
      tags: [
        "parallel-6",
      ],
    },
    {
      id: "lux-parallel-7",
      championId: "lux",
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
      loreEventId: "demacia_mage_secrets",
      userInterpretation: "Courage looks like speaking up with a shaking voice.",
      canonicalFact: "She exposed corruption when silence would be safer.",
      parallelExplanation: "Brave speech under risk is shared.",
      tags: [
        "parallel-7",
      ],
    },
    {
      id: "lux-parallel-8",
      championId: "lux",
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
      loreEventId: "demacia_mage_secrets",
      userInterpretation: "You fear becoming the monster others imagine.",
      canonicalFact: "Demacia paints mages as threats; she fights that narrative daily.",
      parallelExplanation: "Internalized stigma is parallel, not prophecy.",
      tags: [
        "parallel-8",
      ],
    },
    {
      id: "lux-parallel-9",
      championId: "lux",
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
      loreEventId: "demacia_mage_secrets",
      userInterpretation: "Legacy means leaving Demacia kinder, not only freer for you.",
      canonicalFact: "She dreams of a nation where light needs no disguise.",
      parallelExplanation: "Reformist legacy aligns with idealist answers.",
      tags: [
        "parallel-9",
      ],
    },
    {
      id: "lux-strength-0",
      championId: "lux",
      type: "strength",
      text: "You illuminate confusion without always burning bridges.",
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
      id: "lux-strength-1",
      championId: "lux",
      type: "strength",
      text: "You maintain warmth under surveillance or judgment.",
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
      id: "lux-strength-2",
      championId: "lux",
      type: "strength",
      text: "You innovate kind solutions under constraint.",
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
      id: "lux-strength-3",
      championId: "lux",
      type: "strength",
      text: "You rally others with hope grounded in action.",
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
      id: "lux-strength-4",
      championId: "lux",
      type: "strength",
      text: "You notice suffering others trained themselves to ignore.",
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
      id: "lux-weakness-0",
      championId: "lux",
      type: "weakness",
      text: "Secrecy exhausts and isolates.",
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
      id: "lux-weakness-1",
      championId: "lux",
      type: "weakness",
      text: "People-pleasing delays necessary confrontation.",
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
      id: "lux-weakness-2",
      championId: "lux",
      type: "weakness",
      text: "Optimism can underestimate entrenched fear.",
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
      id: "lux-weakness-3",
      championId: "lux",
      type: "weakness",
      text: "You may minimize your power to keep peace.",
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
      id: "lux-weakness-4",
      championId: "lux",
      type: "weakness",
      text: "Family expectations weigh like armor you did not choose.",
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
      id: "lux-conclusion-0",
      championId: "lux",
      type: "conclusion",
      text: "Lux asks you to let light be honest when safety allows.",
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
      id: "lux-conclusion-1",
      championId: "lux",
      type: "conclusion",
      text: "Reveal strategically; truth needs allies.",
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
      id: "lux-conclusion-2",
      championId: "lux",
      type: "conclusion",
      text: "Kindness is not weakness in Demacia or anywhere.",
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
      id: "lux-conclusion-3",
      championId: "lux",
      type: "conclusion",
      text: "Teach what you know; ignorance fuels cruelty.",
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
      id: "lux-conclusion-4",
      championId: "lux",
      type: "conclusion",
      text: "Your glow can reform systems, not only escape them.",
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
