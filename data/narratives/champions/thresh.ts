import type { ChampionNarrativePack } from "../types";

export const threshPack: ChampionNarrativePack = {
  championId: "thresh",
  loreEventIds: ["shadow_isles_ruin"],
  fragments: [
    {
      id: "thresh-intro-0",
      championId: "thresh",
      type: "introduction",
      text: "Thresh collects souls the way others collect debts: patiently, personally, with relish.",
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
      id: "thresh-intro-1",
      championId: "thresh",
      type: "introduction",
      text: "Your answers touch strategic cruelty, or the fear of those who wield it.",
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
      id: "thresh-intro-2",
      championId: "thresh",
      type: "introduction",
      text: "Once human, now warden of agony on the Shadow Isles, he tests resolve.",
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
      id: "thresh-intro-3",
      championId: "thresh",
      type: "introduction",
      text: "Lantern light promises escape, then teaches the price of hope misplaced.",
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
      id: "thresh-intro-4",
      championId: "thresh",
      type: "introduction",
      text: "You are not him; yet you may recognize gamesmanship that watches suffering closely.",
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
      id: "thresh-parallel-0",
      championId: "thresh",
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
      loreEventId: "shadow_isles_ruin",
      userInterpretation: "You observe suffering to learn what people will trade.",
      canonicalFact: "Thresh torments souls to break them slowly in the Mist.",
      parallelExplanation: "Psychological insight aligns; his use is torture.",
      tags: [
        "parallel-0",
        "warden",
      ],
    },
    {
      id: "thresh-parallel-1",
      championId: "thresh",
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
      loreEventId: "shadow_isles_ruin",
      userInterpretation: "Control matters more than quick victory.",
      canonicalFact: "He prolongs hunts to savor fear.",
      parallelExplanation: "Patience as dominance is his sin; you may apply patience elsewhere.",
      tags: [
        "parallel-1",
      ],
    },
    {
      id: "thresh-parallel-2",
      championId: "thresh",
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
      loreEventId: "shadow_isles_ruin",
      userInterpretation: "Promises are leverage when others are desperate.",
      canonicalFact: "His lantern offers false salvation to the lost.",
      parallelExplanation: "Understanding desperation is not exploiting it.",
      tags: [
        "parallel-2",
      ],
    },
    {
      id: "thresh-parallel-3",
      championId: "thresh",
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
      loreEventId: "shadow_isles_ruin",
      userInterpretation: "You remember slights and store them carefully.",
      canonicalFact: "Thresh's cruelty grew from mortal resentment amplified by Ruination.",
      parallelExplanation: "Long memory can warn, not only haunt.",
      tags: [
        "parallel-3",
      ],
    },
    {
      id: "thresh-parallel-4",
      championId: "thresh",
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
      loreEventId: "shadow_isles_ruin",
      userInterpretation: "Authority without empathy becomes theater.",
      canonicalFact: "He styles himself judge of the condemned.",
      parallelExplanation: "Performative power is cautionary mirror.",
      tags: [
        "parallel-4",
      ],
    },
    {
      id: "thresh-parallel-5",
      championId: "thresh",
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
      loreEventId: "shadow_isles_ruin",
      userInterpretation: "You analyze moral flexibility in yourself and others.",
      canonicalFact: "He rationalizes pain as education.",
      parallelExplanation: "Self-awareness of ethics differs from his predation.",
      tags: [
        "parallel-5",
      ],
    },
    {
      id: "thresh-parallel-6",
      championId: "thresh",
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
      loreEventId: "shadow_isles_ruin",
      userInterpretation: "Isolation suits tasks others find unbearable.",
      canonicalFact: "Centuries alone in the Mist refined his craft.",
      parallelExplanation: "Tolerance for solitude aligns safely.",
      tags: [
        "parallel-6",
      ],
    },
    {
      id: "thresh-parallel-7",
      championId: "thresh",
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
      loreEventId: "shadow_isles_ruin",
      userInterpretation: "You fear being trapped by past choices.",
      canonicalFact: "Souls in his lantern cannot leave until he wills it.",
      parallelExplanation: "Fear of entrapment rhymes without soul cages.",
      tags: [
        "parallel-7",
      ],
    },
    {
      id: "thresh-parallel-8",
      championId: "thresh",
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
      loreEventId: "shadow_isles_ruin",
      userInterpretation: "Power tempts when it promises safety from vulnerability.",
      canonicalFact: "Undeath freed him from mortal limits and conscience.",
      parallelExplanation: "Temptation noted; his surrender was total.",
      tags: [
        "parallel-8",
      ],
    },
    {
      id: "thresh-parallel-9",
      championId: "thresh",
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
      loreEventId: "shadow_isles_ruin",
      userInterpretation: "Legacy of fear can outlive legacy of love.",
      canonicalFact: "Sailors warn of Thresh long after his human name faded.",
      parallelExplanation: "Reputation's shadow is lesson, not aspiration.",
      tags: [
        "parallel-9",
      ],
    },
    {
      id: "thresh-strength-0",
      championId: "thresh",
      type: "strength",
      text: "You read motives under panic.",
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
      id: "thresh-strength-1",
      championId: "thresh",
      type: "strength",
      text: "You endure grim work without sentimental collapse.",
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
      id: "thresh-strength-2",
      championId: "thresh",
      type: "strength",
      text: "You set boundaries others cannot cross easily.",
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
      id: "thresh-strength-3",
      championId: "thresh",
      type: "strength",
      text: "You strategize long interactions.",
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
      id: "thresh-strength-4",
      championId: "thresh",
      type: "strength",
      text: "You recognize when hope is being weaponized.",
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
      id: "thresh-weakness-0",
      championId: "thresh",
      type: "weakness",
      text: "Detachment can slide into enjoyment of others' pain.",
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
      id: "thresh-weakness-1",
      championId: "thresh",
      type: "weakness",
      text: "Control obsession limits trust.",
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
      id: "thresh-weakness-2",
      championId: "thresh",
      type: "weakness",
      text: "Grudges become hobbies.",
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
      id: "thresh-weakness-3",
      championId: "thresh",
      type: "weakness",
      text: "You may withhold mercy to feel secure.",
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
      id: "thresh-weakness-4",
      championId: "thresh",
      type: "weakness",
      text: "Cynicism masks unprocessed hurt.",
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
      id: "thresh-conclusion-0",
      championId: "thresh",
      type: "conclusion",
      text: "Thresh warns: never trade your soul for temporary relief.",
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
      id: "thresh-conclusion-1",
      championId: "thresh",
      type: "conclusion",
      text: "Use insight to free, not to bind.",
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
      id: "thresh-conclusion-2",
      championId: "thresh",
      type: "conclusion",
      text: "Let the lantern be metaphor for honesty, not bait.",
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
      id: "thresh-conclusion-3",
      championId: "thresh",
      type: "conclusion",
      text: "Mercy breaks cycles he perpetuates.",
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
      id: "thresh-conclusion-4",
      championId: "thresh",
      type: "conclusion",
      text: "Choose legacy that releases, not collects.",
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
