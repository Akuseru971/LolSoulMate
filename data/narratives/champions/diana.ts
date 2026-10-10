import type { ChampionNarrativePack } from "../types";

export const dianaPack: ChampionNarrativePack = {
  championId: "diana",
  loreEventIds: ["targon_ascent"],
  fragments: [
    {
      id: "diana-intro-0",
      championId: "diana",
      type: "introduction",
      text: "Diana climbed Targon chasing truth and found moon's wrath where she sought belonging.",
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
      id: "diana-intro-1",
      championId: "diana",
      type: "introduction",
      text: "Your pattern touches devotion that outgrows doctrine, faith sharpened into exile.",
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
      id: "diana-intro-2",
      championId: "diana",
      type: "introduction",
      text: "Her armor remembers ascent; her heart remembers rejection by sun cult.",
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
      id: "diana-intro-3",
      championId: "diana",
      type: "introduction",
      text: "Lunari truth collided with Solari power; she chose the sky that answered.",
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
      id: "diana-intro-4",
      championId: "diana",
      type: "introduction",
      text: "You need not scale a mountain to feel calling that society denies.",
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
      id: "diana-parallel-0",
      championId: "diana",
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
      userInterpretation: "You pursue truth even when elders forbid questions.",
      canonicalFact: "Diana uncovered Lunari heritage hidden by Solari leaders.",
      parallelExplanation: "Heresy as honesty aligns; her cost was exile.",
      tags: [
        "parallel-0",
        "moon",
      ],
    },
    {
      id: "diana-parallel-1",
      championId: "diana",
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
      userInterpretation: "Destiny feels like pull stronger than comfort.",
      canonicalFact: "Targon chose her, reshaping flesh with celestial force.",
      parallelExplanation: "Sense of call rhymes without cosmic rewrite.",
      tags: [
        "parallel-1",
      ],
    },
    {
      id: "diana-parallel-2",
      championId: "diana",
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
      userInterpretation: "You protect outcasts who share hidden names.",
      canonicalFact: "She fights for Lunari survivors across Runeterra.",
      parallelExplanation: "Protective advocacy links.",
      tags: [
        "parallel-2",
      ],
    },
    {
      id: "diana-parallel-3",
      championId: "diana",
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
      userInterpretation: "Anger at injustice arrives fast, cooled slowly.",
      canonicalFact: "Her crusade against Solari hypocrisy was fierce.",
      parallelExplanation: "Hot justice temperament aligns.",
      tags: [
        "parallel-3",
      ],
    },
    {
      id: "diana-parallel-4",
      championId: "diana",
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
      userInterpretation: "Discipline in training grounds volatile revelation.",
      canonicalFact: "Years of mountaineering forged body before apotheosis.",
      parallelExplanation: "Preparedness plus breakthrough rhymes.",
      tags: [
        "parallel-4",
      ],
    },
    {
      id: "diana-parallel-5",
      championId: "diana",
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
      userInterpretation: "You feel torn between two homes that both claim you.",
      canonicalFact: "Diana belongs to Targon sky and mortal memory alike.",
      parallelExplanation: "Split belonging is human parallel.",
      tags: [
        "parallel-5",
      ],
    },
    {
      id: "diana-parallel-6",
      championId: "diana",
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
      userInterpretation: "Independence follows betrayal by institutions.",
      canonicalFact: "Solari tried to silence her; she walked into night.",
      parallelExplanation: "Institutional betrayal theme links.",
      tags: [
        "parallel-6",
      ],
    },
    {
      id: "diana-parallel-7",
      championId: "diana",
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
      userInterpretation: "You seek recognition from the cosmos, not crowds.",
      canonicalFact: "Moon's voice matters more than temple applause.",
      parallelExplanation: "Spiritual validation aligns.",
      tags: [
        "parallel-7",
      ],
    },
    {
      id: "diana-parallel-8",
      championId: "diana",
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
      userInterpretation: "Courage is continuing when faith feels lonely.",
      canonicalFact: "She wandered Runeterra without a nation.",
      parallelExplanation: "Lonely faith rhymes.",
      tags: [
        "parallel-8",
      ],
    },
    {
      id: "diana-parallel-9",
      championId: "diana",
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
      userInterpretation: "Legacy means opening paths others were denied.",
      canonicalFact: "Her fight reopens Lunari worship in secret.",
      parallelExplanation: "Trailblazing legacy aligns.",
      tags: [
        "parallel-9",
      ],
    },
    {
      id: "diana-strength-0",
      championId: "diana",
      type: "strength",
      text: "You endure physical and moral ascent.",
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
      id: "diana-strength-1",
      championId: "diana",
      type: "strength",
      text: "You defend minorities with lethal and legal force.",
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
      id: "diana-strength-2",
      championId: "diana",
      type: "strength",
      text: "You integrate mystic experience with action.",
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
      id: "diana-strength-3",
      championId: "diana",
      type: "strength",
      text: "You question authority productively.",
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
      id: "diana-strength-4",
      championId: "diana",
      type: "strength",
      text: "You remain loyal to truth over title.",
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
      id: "diana-weakness-0",
      championId: "diana",
      type: "weakness",
      text: "Zeal can blur nuance among allies.",
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
      id: "diana-weakness-1",
      championId: "diana",
      type: "weakness",
      text: "Isolation on the road hardens judgment.",
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
      id: "diana-weakness-2",
      championId: "diana",
      type: "weakness",
      text: "You may replay rejection obsessively.",
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
      id: "diana-weakness-3",
      championId: "diana",
      type: "weakness",
      text: "Body and spirit strain under dual calling.",
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
      id: "diana-weakness-4",
      championId: "diana",
      type: "weakness",
      text: "Forgiveness for Solari comes reluctantly.",
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
      id: "diana-conclusion-0",
      championId: "diana",
      type: "conclusion",
      text: "Diana asks you to honor the moon you see, not only the sun allowed.",
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
      id: "diana-conclusion-1",
      championId: "diana",
      type: "conclusion",
      text: "Ascent continues after the peak; keep climbing inward.",
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
      id: "diana-conclusion-2",
      championId: "diana",
      type: "conclusion",
      text: "Let wrath serve protection, not vanity.",
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
      id: "diana-conclusion-3",
      championId: "diana",
      type: "conclusion",
      text: "Find kin who share hidden names.",
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
      id: "diana-conclusion-4",
      championId: "diana",
      type: "conclusion",
      text: "Faith denied by mortals may still be true.",
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
