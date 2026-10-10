import type { ChampionNarrativePack } from "../types";

export const akaliPack: ChampionNarrativePack = {
  championId: "akali",
  loreEventIds: ["ionian_balance", "ionian_resistance"],
  fragments: [
    {
      id: "akali-intro-0",
      championId: "akali",
      type: "introduction",
      text: "Akali moves through smoke and conviction, kinkou training bent toward street-level justice.",
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
      id: "akali-intro-1",
      championId: "akali",
      type: "introduction",
      text: "Your pattern favors independence that still serves a larger balance.",
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
      id: "akali-intro-2",
      championId: "akali",
      type: "introduction",
      text: "She left rigid doctrine to protect Ionia where elders could not reach.",
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
      id: "akali-intro-3",
      championId: "akali",
      type: "introduction",
      text: "Names change; responsibility remains, tattooed in motion.",
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
      id: "akali-intro-4",
      championId: "akali",
      type: "introduction",
      text: "You need not vanish into shadow to know rebellion can be care.",
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
      id: "akali-parallel-0",
      championId: "akali",
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
      userInterpretation: "You break rules when rules fail the vulnerable.",
      canonicalFact: "Akali split from traditional kinkou to act autonomously.",
      parallelExplanation: "Institutional critique aligns; her tools are lethal.",
      tags: [
        "parallel-0",
        "shadow",
      ],
    },
    {
      id: "akali-parallel-1",
      championId: "akali",
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
      userInterpretation: "Discipline lives in body memory even when ideology shifts.",
      canonicalFact: "Years of temple training shape every leap and strike.",
      parallelExplanation: "Embodied discipline is shared.",
      tags: [
        "parallel-1",
      ],
    },
    {
      id: "akali-parallel-2",
      championId: "akali",
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
      userInterpretation: "You want freedom with purpose, not chaos.",
      canonicalFact: "She still speaks of balance, just on her terms.",
      parallelExplanation: "Purposeful independence rhymes.",
      tags: [
        "parallel-2",
      ],
    },
    {
      id: "akali-parallel-3",
      championId: "akali",
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
      userInterpretation: "Recognition from peers matters less than results.",
      canonicalFact: "Shen and Kennen disapproved; she continued anyway.",
      parallelExplanation: "Outcome-focused autonomy aligns.",
      tags: [
        "parallel-3",
      ],
    },
    {
      id: "akali-parallel-4",
      championId: "akali",
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
      userInterpretation: "You act fast when hesitation costs lives.",
      canonicalFact: "Akali intercepts threats in alleys before councils meet.",
      parallelExplanation: "Impulsive rescue impulse parallels without equating violence.",
      tags: [
        "parallel-4",
      ],
    },
    {
      id: "akali-parallel-5",
      championId: "akali",
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
      userInterpretation: "Community protection beats abstract purity.",
      canonicalFact: "She defends Ionian neighborhoods from Noxians and criminals.",
      parallelExplanation: "Ground-level care links to protective answers.",
      tags: [
        "parallel-5",
      ],
    },
    {
      id: "akali-parallel-6",
      championId: "akali",
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
      userInterpretation: "Identity evolves; you refuse frozen labels.",
      canonicalFact: "She shed the title of Fist to define Rogue Assassin.",
      parallelExplanation: "Self-naming journey is human parallel.",
      tags: [
        "parallel-6",
      ],
    },
    {
      id: "akali-parallel-7",
      championId: "akali",
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
      userInterpretation: "You trust instincts honed by repetition.",
      canonicalFact: "Her fighting style merges tradition with improvisation.",
      parallelExplanation: "Craft plus instinct aligns.",
      tags: [
        "parallel-7",
      ],
    },
    {
      id: "akali-parallel-8",
      championId: "akali",
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
      userInterpretation: "Loyalty remains to people, not always to office.",
      canonicalFact: "She still guards Ionia though methods diverge.",
      parallelExplanation: "Loyalty to land over title rhymes.",
      tags: [
        "parallel-8",
      ],
    },
    {
      id: "akali-parallel-9",
      championId: "akali",
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
      userInterpretation: "You carry anger at injustice as fuel, not identity.",
      canonicalFact: "Noxian invasion scars inform her urgency.",
      parallelExplanation: "Anger directed toward protection is shared lesson.",
      tags: [
        "parallel-9",
      ],
    },
    {
      id: "akali-strength-0",
      championId: "akali",
      type: "strength",
      text: "You adapt doctrine to reality without losing skill.",
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
      id: "akali-strength-1",
      championId: "akali",
      type: "strength",
      text: "You protect marginalized spaces others ignore.",
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
      id: "akali-strength-2",
      championId: "akali",
      type: "strength",
      text: "You move decisively when plans would arrive too late.",
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
      id: "akali-strength-3",
      championId: "akali",
      type: "strength",
      text: "You inspire others to claim agency.",
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
      id: "akali-strength-4",
      championId: "akali",
      type: "strength",
      text: "You blend tradition with innovation naturally.",
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
      id: "akali-weakness-0",
      championId: "akali",
      type: "weakness",
      text: "Going alone increases risk and burnout.",
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
      id: "akali-weakness-1",
      championId: "akali",
      type: "weakness",
      text: "Defiance can dismiss wise counsel.",
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
      id: "akali-weakness-2",
      championId: "akali",
      type: "weakness",
      text: "Anger may outrun strategy.",
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
      id: "akali-weakness-3",
      championId: "akali",
      type: "weakness",
      text: "You hide tenderness behind swagger.",
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
      id: "akali-weakness-4",
      championId: "akali",
      type: "weakness",
      text: "Recognition withheld breeds resentment.",
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
      id: "akali-conclusion-0",
      championId: "akali",
      type: "conclusion",
      text: "Akali shows balance can walk in sneakers and smoke.",
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
      id: "akali-conclusion-1",
      championId: "akali",
      type: "conclusion",
      text: "Invite allies without surrendering conscience.",
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
      id: "akali-conclusion-2",
      championId: "akali",
      type: "conclusion",
      text: "Train still; freedom needs form.",
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
      id: "akali-conclusion-3",
      championId: "akali",
      type: "conclusion",
      text: "Let rebellion serve neighbors, not ego.",
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
      id: "akali-conclusion-4",
      championId: "akali",
      type: "conclusion",
      text: "Ionia lives in acts, not only in temples.",
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
