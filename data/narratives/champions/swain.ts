import type { ChampionNarrativePack } from "../types";

export const swainPack: ChampionNarrativePack = {
  championId: "swain",
  loreEventIds: ["noxian_conquest"],
  fragments: [
    {
      id: "swain-intro-0",
      championId: "swain",
      type: "introduction",
      text: "Swain reads war as ledger and poem: sacrifice counted, victory justified.",
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
      id: "swain-intro-1",
      championId: "swain",
      type: "introduction",
      text: "What reads in your pattern is strategic patience, vision that tolerates ugly arithmetic.",
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
      id: "swain-intro-2",
      championId: "swain",
      type: "introduction",
      text: "Noxus forged him in belief that strength must govern a chaotic world.",
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
      id: "swain-intro-3",
      championId: "swain",
      type: "introduction",
      text: "The demon in his arm is secret kept for empire, not confession for comfort.",
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
      id: "swain-intro-4",
      championId: "swain",
      type: "introduction",
      text: "You need not wear the tricorn to think several moves past the obvious.",
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
      id: "swain-parallel-0",
      championId: "swain",
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
      loreEventId: "noxian_conquest",
      userInterpretation: "You plan with cool head when others react from pride.",
      canonicalFact: "Swain rose after defeat, uniting Noxian factions under long-view strategy.",
      parallelExplanation: "His battlefield is politics; yours may be work or family. Shared: foresight.",
      tags: [
        "parallel-0",
        "strategy",
      ],
    },
    {
      id: "swain-parallel-1",
      championId: "swain",
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
      loreEventId: "noxian_conquest",
      userInterpretation: "You accept necessary cost if the outcome protects many.",
      canonicalFact: "He sent legions knowing casualties would be vast yet purposeful.",
      parallelExplanation: "Moral weight of tradeoffs rhymes; you are not ordering invasions.",
      tags: [
        "parallel-1",
      ],
    },
    {
      id: "swain-parallel-2",
      championId: "swain",
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
      loreEventId: "noxian_conquest",
      userInterpretation: "Power is tool, not trophy, in your calculus.",
      canonicalFact: "Swain wields the Darkin secret to steer Noxus rather than glorify himself.",
      parallelExplanation: "Instrumental strength aligns without demonic bargain.",
      tags: [
        "parallel-2",
      ],
    },
    {
      id: "swain-parallel-3",
      championId: "swain",
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
      loreEventId: "noxian_conquest",
      userInterpretation: "You read rivals' emotions as data.",
      canonicalFact: "He exploited Ionian divisions and Demacian rigidity alike.",
      parallelExplanation: "Empathy used analytically is kinship at safer scale.",
      tags: [
        "parallel-3",
      ],
    },
    {
      id: "swain-parallel-4",
      championId: "swain",
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
      loreEventId: "noxian_conquest",
      userInterpretation: "Authority should serve continuity, not vanity.",
      canonicalFact: "He rejected short reigns of spectacle for durable conquest doctrine.",
      parallelExplanation: "Institutional thinking links you; cruelty is his optional method.",
      tags: [
        "parallel-4",
      ],
    },
    {
      id: "swain-parallel-5",
      championId: "swain",
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
      loreEventId: "noxian_conquest",
      userInterpretation: "Betrayal teaches you patterns more than it breaks you.",
      canonicalFact: "Swain survived assassination and returned with sharper networks.",
      parallelExplanation: "Resilience after treachery is shared temperament.",
      tags: [
        "parallel-5",
      ],
    },
    {
      id: "swain-parallel-6",
      championId: "swain",
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
      loreEventId: "noxian_conquest",
      userInterpretation: "You hide vulnerability until it becomes leverage.",
      canonicalFact: "Few know the demon arm's true bargain or limits.",
      parallelExplanation: "Selective disclosure is strategy, not mandatory occult pact.",
      tags: [
        "parallel-6",
      ],
    },
    {
      id: "swain-parallel-7",
      championId: "swain",
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
      loreEventId: "noxian_conquest",
      userInterpretation: "Destiny feels like burden you choose to carry for others.",
      canonicalFact: "Visions of Noxus's future guided his coldest decisions.",
      parallelExplanation: "Visionary duty at personal cost is the chord.",
      tags: [
        "parallel-7",
      ],
    },
    {
      id: "swain-parallel-8",
      championId: "swain",
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
      loreEventId: "noxian_conquest",
      userInterpretation: "Recognition matters when it stabilizes coalition.",
      canonicalFact: "He cultivates loyalty through merit and fear in measured doses.",
      parallelExplanation: "Social credit as glue is familiar to leaders.",
      tags: [
        "parallel-8",
      ],
    },
    {
      id: "swain-parallel-9",
      championId: "swain",
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
      loreEventId: "noxian_conquest",
      userInterpretation: "Impulse is suspect; you prefer designs that survive surprise.",
      canonicalFact: "Swain rarely strikes without scouts, spies, and secondary plans.",
      parallelExplanation: "Discipline in planning aligns across scales.",
      tags: [
        "parallel-9",
      ],
    },
    {
      id: "swain-strength-0",
      championId: "swain",
      type: "strength",
      text: "You see systems and can improve them under pressure.",
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
      id: "swain-strength-1",
      championId: "swain",
      type: "strength",
      text: "You remain functional when emotions run high around you.",
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
      id: "swain-strength-2",
      championId: "swain",
      type: "strength",
      text: "You learn from defeat without romanticizing it.",
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
      id: "swain-strength-3",
      championId: "swain",
      type: "strength",
      text: "You coordinate people with different motives toward one aim.",
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
      id: "swain-strength-4",
      championId: "swain",
      type: "strength",
      text: "You tolerate ambiguity while still deciding.",
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
      id: "swain-weakness-0",
      championId: "swain",
      type: "weakness",
      text: "Cost-benefit thinking can bruise tender hearts.",
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
      id: "swain-weakness-1",
      championId: "swain",
      type: "weakness",
      text: "Secrets erode trust even when kept for good reasons.",
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
      id: "swain-weakness-2",
      championId: "swain",
      type: "weakness",
      text: "You may defer feeling until it erupts unexpectedly.",
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
      id: "swain-weakness-3",
      championId: "swain",
      type: "weakness",
      text: "Others can feel managed rather than loved.",
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
      id: "swain-weakness-4",
      championId: "swain",
      type: "weakness",
      text: "Ambition risks mistaking expansion for health.",
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
      id: "swain-conclusion-0",
      championId: "swain",
      type: "conclusion",
      text: "Let strategy serve life, not only map lines.",
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
      id: "swain-conclusion-1",
      championId: "swain",
      type: "conclusion",
      text: "Swain proves mind without mercy becomes its own tyrant.",
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
      id: "swain-conclusion-2",
      championId: "swain",
      type: "conclusion",
      text: "Share enough truth that allies choose you freely.",
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
      id: "swain-conclusion-3",
      championId: "swain",
      type: "conclusion",
      text: "Count the human line items, not only troop numbers.",
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
      id: "swain-conclusion-4",
      championId: "swain",
      type: "conclusion",
      text: "Power maintained wisely knows when not to conquer.",
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
