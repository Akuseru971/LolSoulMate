import type { ChampionNarrativePack } from "../types";

export const karmaPack: ChampionNarrativePack = {
  championId: "karma",
  loreEventIds: ["ionian_balance", "ionian_resistance"],
  fragments: [
    {
      id: "karma-intro-0",
      championId: "karma",
      type: "introduction",
      text: "Karma carries Ionian memory in many lives, wisdom pressed into present crisis.",
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
      id: "karma-intro-1",
      championId: "karma",
      type: "introduction",
      text: "Your pattern suggests idealism disciplined by spiritual practice.",
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
      id: "karma-intro-2",
      championId: "karma",
      type: "introduction",
      text: "She speaks for balance while war burns orchards and temples.",
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
      id: "karma-intro-3",
      championId: "karma",
      type: "introduction",
      text: "Power returns each incarnation; responsibility returns with it.",
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
      id: "karma-intro-4",
      championId: "karma",
      type: "introduction",
      text: "You need not remember past lives to weigh duty against compassion.",
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
      id: "karma-parallel-0",
      championId: "karma",
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
      userInterpretation: "You feel called to mediate when factions sharpen blades.",
      canonicalFact: "Karma guided Ionians during Noxian invasion and after.",
      parallelExplanation: "Peacemaking temperament aligns; her stage was continental.",
      tags: [
        "parallel-0",
        "wisdom",
      ],
    },
    {
      id: "karma-parallel-1",
      championId: "karma",
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
      userInterpretation: "You integrate intuition with deliberate ethics.",
      canonicalFact: "Her mantra channels spirit without abandoning judgment.",
      parallelExplanation: "Spiritual pragmatism rhymes.",
      tags: [
        "parallel-1",
      ],
    },
    {
      id: "karma-parallel-2",
      championId: "karma",
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
      userInterpretation: "Sacrifice is acceptable when it prevents wider harm.",
      canonicalFact: "She accepted personal cost to shield villages.",
      parallelExplanation: "Protective sacrifice theme links.",
      tags: [
        "parallel-2",
      ],
    },
    {
      id: "karma-parallel-3",
      championId: "karma",
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
      userInterpretation: "You believe people can change with guidance.",
      canonicalFact: "Karma offers paths back to balance for the lost.",
      parallelExplanation: "Redemptive idealism aligns.",
      tags: [
        "parallel-3",
      ],
    },
    {
      id: "karma-parallel-4",
      championId: "karma",
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
      userInterpretation: "Destiny feels like thread connecting choices across years.",
      canonicalFact: "The Mantle of Spirit passes between incarnations.",
      parallelExplanation: "Sense of continuity aligns metaphorically.",
      tags: [
        "parallel-4",
      ],
    },
    {
      id: "karma-parallel-5",
      championId: "karma",
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
      userInterpretation: "You resist cynicism even after betrayal.",
      canonicalFact: "Noxian tactics tested her faith repeatedly.",
      parallelExplanation: "Resilient hope is shared.",
      tags: [
        "parallel-5",
      ],
    },
    {
      id: "karma-parallel-6",
      championId: "karma",
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
      userInterpretation: "Teaching satisfies you as much as winning.",
      canonicalFact: "Karma instructs disciples in harmony and defiance.",
      parallelExplanation: "Pedagogical impulse links.",
      tags: [
        "parallel-6",
      ],
    },
    {
      id: "karma-parallel-7",
      championId: "karma",
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
      userInterpretation: "You pause before acting, listening inward.",
      canonicalFact: "Mantra meditation precedes her interventions.",
      parallelExplanation: "Reflective discipline aligns.",
      tags: [
        "parallel-7",
      ],
    },
    {
      id: "karma-parallel-8",
      championId: "karma",
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
      userInterpretation: "Community healing matters after conflict.",
      canonicalFact: "She rebuilt spiritual ties shattered by occupation.",
      parallelExplanation: "Post-crisis care rhymes.",
      tags: [
        "parallel-8",
      ],
    },
    {
      id: "karma-parallel-9",
      championId: "karma",
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
      userInterpretation: "Authority should serve balance, not ego.",
      canonicalFact: "She refuses tyranny even when empowered.",
      parallelExplanation: "Servant leadership aligns.",
      tags: [
        "parallel-9",
      ],
    },
    {
      id: "karma-strength-0",
      championId: "karma",
      type: "strength",
      text: "You calm rooms without erasing truth.",
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
      id: "karma-strength-1",
      championId: "karma",
      type: "strength",
      text: "You hold long perspective in short emergencies.",
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
      id: "karma-strength-2",
      championId: "karma",
      type: "strength",
      text: "You mentor others into courage.",
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
      id: "karma-strength-3",
      championId: "karma",
      type: "strength",
      text: "You bridge spiritual and practical language.",
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
      id: "karma-strength-4",
      championId: "karma",
      type: "strength",
      text: "You model forgiveness with boundaries.",
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
      id: "karma-weakness-0",
      championId: "karma",
      type: "weakness",
      text: "Idealism delays hard exclusions of toxic actors.",
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
      id: "karma-weakness-1",
      championId: "karma",
      type: "weakness",
      text: "You carry collective grief personally.",
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
      id: "karma-weakness-2",
      championId: "karma",
      type: "weakness",
      text: "Patience can look like passivity.",
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
      id: "karma-weakness-3",
      championId: "karma",
      type: "weakness",
      text: "You expect yourself to be timeless sage.",
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
      id: "karma-weakness-4",
      championId: "karma",
      type: "weakness",
      text: "Incarnation myth pressure feels lonely.",
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
      id: "karma-conclusion-0",
      championId: "karma",
      type: "conclusion",
      text: "Karma invites you to breathe before you bless or battle.",
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
      id: "karma-conclusion-1",
      championId: "karma",
      type: "conclusion",
      text: "Balance includes your rest, not only others' peace.",
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
      id: "karma-conclusion-2",
      championId: "karma",
      type: "conclusion",
      text: "Let wisdom speak plainly, not only in riddles.",
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
      id: "karma-conclusion-3",
      championId: "karma",
      type: "conclusion",
      text: "War ends; orchards need planters.",
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
      id: "karma-conclusion-4",
      championId: "karma",
      type: "conclusion",
      text: "Your incarnation is this life; use it fully.",
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
