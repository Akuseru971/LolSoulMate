import type { ChampionNarrativePack } from "../types";

export const ireliaPack: ChampionNarrativePack = {
  championId: "irelia",
  loreEventIds: ["ionian_resistance", "ionian_balance"],
  fragments: [
    {
      id: "irelia-intro-0",
      championId: "irelia",
      type: "introduction",
      text: "Irelia moves through memory like a dance: each blade a note, each loss a step she refuses to forget.",
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
      id: "irelia-intro-1",
      championId: "irelia",
      type: "introduction",
      text: "Your answers carry the Ionian thread of duty that outlasts comfort, the kind that turns grief into posture.",
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
      id: "irelia-intro-2",
      championId: "irelia",
      type: "introduction",
      text: "There is a dancer's patience in you: form that holds when the world breaks, deeper than applause or display.",
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
      id: "irelia-intro-3",
      championId: "irelia",
      type: "introduction",
      text: "Ionia asks its defenders to weigh beauty against invasion; you seem to understand that weight.",
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
      id: "irelia-intro-4",
      championId: "irelia",
      type: "introduction",
      text: "Where others chase conquest, you lean toward homeland as a promise kept in the body.",
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
      id: "irelia-parallel-0",
      championId: "irelia",
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
      loreEventId: "ionian_resistance",
      userInterpretation: "You hold to duty when the easier path would be to look away.",
      canonicalFact: "After Noxus shattered her village, Irelia rallied Ionian resistance with floating blades and unbroken focus.",
      parallelExplanation: "Her war was literal; yours may be private. The parallel is steadiness under loss, not shared violence.",
      tags: [
        "parallel-0",
        "duty",
      ],
    },
    {
      id: "irelia-parallel-1",
      championId: "irelia",
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
      userInterpretation: "You protect culture and people as if they were extensions of your own breath.",
      canonicalFact: "She learned the dances of Ionia before she learned war, and never separated the two.",
      parallelExplanation: "Art and defense intertwine for her; for you, care may show as loyalty to what must survive.",
      tags: [
        "parallel-1",
      ],
    },
    {
      id: "irelia-parallel-2",
      championId: "irelia",
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
      loreEventId: "ionian_resistance",
      userInterpretation: "Discipline steadies you when emotion would scatter your choices.",
      canonicalFact: "Irelia's training turned panic into motion, grief into precise defiance on the front lines.",
      parallelExplanation: "You need not wield steel to recognize how structure can carry a heart through crisis.",
      tags: [
        "parallel-2",
      ],
    },
    {
      id: "irelia-parallel-3",
      championId: "irelia",
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
      loreEventId: "ionian_resistance",
      userInterpretation: "Idealism survives in you even when pragmatists call it naive.",
      canonicalFact: "She fought for an Ionia that could remain itself, not merely win.",
      parallelExplanation: "That stubborn hope mirrors a temperament that chooses meaning before convenience.",
      tags: [
        "parallel-3",
      ],
    },
    {
      id: "irelia-parallel-4",
      championId: "irelia",
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
      loreEventId: "ionian_resistance",
      userInterpretation: "Independence keeps you from surrendering your judgment to crowds or commanders.",
      canonicalFact: "Irelia became a symbol because she acted when institutions faltered.",
      parallelExplanation: "Leadership found her through conviction, not through seeking a title.",
      tags: [
        "parallel-4",
      ],
    },
    {
      id: "irelia-parallel-5",
      championId: "irelia",
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
      loreEventId: "ionian_resistance",
      userInterpretation: "You feel responsibility for others' safety as a quiet constant.",
      canonicalFact: "Survivors of the invasion looked to her for victory and for continuity of Ionian life.",
      parallelExplanation: "Protective instinct aligns with her role as living reminder of home.",
      tags: [
        "parallel-5",
      ],
    },
    {
      id: "irelia-parallel-6",
      championId: "irelia",
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
      userInterpretation: "You sense destiny as obligation rather than romance.",
      canonicalFact: "The Spirit of Ionia stirred in her, binding personal fate to the land's survival.",
      parallelExplanation: "Cosmic scale is hers; your scale may be smaller, but the sense of call can rhyme.",
      tags: [
        "parallel-6",
      ],
    },
    {
      id: "irelia-parallel-7",
      championId: "irelia",
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
      loreEventId: "ionian_resistance",
      userInterpretation: "You weigh outcomes when mercy and victory disagree.",
      canonicalFact: "Resistance leaders debated tactics while Irelia held the line between vengeance and restoration.",
      parallelExplanation: "Her choices were strategic; yours may be relational. Both require clear eyes.",
      tags: [
        "parallel-7",
      ],
    },
    {
      id: "irelia-parallel-8",
      championId: "irelia",
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
      loreEventId: "ionian_resistance",
      userInterpretation: "Recognition matters less to you than integrity of action.",
      canonicalFact: "She accepted fame as a burden when it helped unite fractured provinces.",
      parallelExplanation: "Visibility served purpose for her; you may prefer impact without spotlight.",
      tags: [
        "parallel-8",
      ],
    },
    {
      id: "irelia-parallel-9",
      championId: "irelia",
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
      loreEventId: "ionian_resistance",
      userInterpretation: "Courage for you is sustained effort, not a single dramatic leap.",
      canonicalFact: "Years of war tested her endurance as much as her skill.",
      parallelExplanation: "Resilience over time is the shared chord, not any one battlefield moment.",
      tags: [
        "parallel-9",
      ],
    },
    {
      id: "irelia-strength-0",
      championId: "irelia",
      type: "strength",
      text: "You endure pressure without abandoning the people or principles you chose.",
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
      id: "irelia-strength-1",
      championId: "irelia",
      type: "strength",
      text: "Your loyalty can turn a scattered community into something that feels defendable.",
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
      id: "irelia-strength-2",
      championId: "irelia",
      type: "strength",
      text: "You translate emotion into action instead of letting it dissolve into paralysis.",
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
      id: "irelia-strength-3",
      championId: "irelia",
      type: "strength",
      text: "You honor tradition while still adapting when survival demands it.",
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
      id: "irelia-strength-4",
      championId: "irelia",
      type: "strength",
      text: "You offer others a model of dignity under occupation, loss, or doubt.",
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
      id: "irelia-weakness-0",
      championId: "irelia",
      type: "weakness",
      text: "Grief can tighten your grip until flexibility feels like betrayal.",
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
      id: "irelia-weakness-1",
      championId: "irelia",
      type: "weakness",
      text: "You may judge yourself harshly when protection falls short of perfect.",
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
      id: "irelia-weakness-2",
      championId: "irelia",
      type: "weakness",
      text: "Idealism sometimes delays the compromise that would reduce immediate harm.",
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
      id: "irelia-weakness-3",
      championId: "irelia",
      type: "weakness",
      text: "The weight of symbolhood can isolate you from ordinary rest.",
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
      id: "irelia-weakness-4",
      championId: "irelia",
      type: "weakness",
      text: "Anger at injustice may flash hot before your discipline catches it.",
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
      id: "irelia-conclusion-0",
      championId: "irelia",
      type: "conclusion",
      text: "Carry Irelia's lesson: home is a practice renewed each day, not a memory sealed in glass.",
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
      id: "irelia-conclusion-1",
      championId: "irelia",
      type: "conclusion",
      text: "Let your duty breathe; rigidity breaks dancers as surely as enemies do.",
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
      id: "irelia-conclusion-2",
      championId: "irelia",
      type: "conclusion",
      text: "When you lead, invite others to share the weight so you remain human.",
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
      id: "irelia-conclusion-3",
      championId: "irelia",
      type: "conclusion",
      text: "Measure victory by what survives culturally, not only by what is defeated.",
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
      id: "irelia-conclusion-4",
      championId: "irelia",
      type: "conclusion",
      text: "Your steadiness can be Ionian balance in miniature: motion held by purpose.",
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
