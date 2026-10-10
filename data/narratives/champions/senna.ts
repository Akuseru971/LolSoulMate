import type { ChampionNarrativePack } from "../types";

export const sennaPack: ChampionNarrativePack = {
  championId: "senna",
  loreEventIds: ["shadow_isles_ruin"],
  fragments: [
    {
      id: "senna-intro-0",
      championId: "senna",
      type: "introduction",
      text: "Senna hunted mist and found love inside a lantern, refusing to stay a victim of grief.",
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
      id: "senna-intro-1",
      championId: "senna",
      type: "introduction",
      text: "Your pattern carries resilience through long separation and stubborn faith.",
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
      id: "senna-intro-2",
      championId: "senna",
      type: "introduction",
      text: "Lucian and the Black Mist framed her story; she reframed it with will.",
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
      id: "senna-intro-3",
      championId: "senna",
      type: "introduction",
      text: "Light in her hands answers darkness that tried to define her entirely.",
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
      id: "senna-intro-4",
      championId: "senna",
      type: "introduction",
      text: "You need not be a Sentinel to know love that persists through impossible odds.",
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
      id: "senna-parallel-0",
      championId: "senna",
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
      userInterpretation: "You endure captivity, literal or emotional, without surrendering self.",
      canonicalFact: "Thresh imprisoned Senna's soul for years before she escaped.",
      parallelExplanation: "Endurance aligns; her prison was spectral.",
      tags: [
        "parallel-0",
        "sentinel",
      ],
    },
    {
      id: "senna-parallel-1",
      championId: "senna",
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
      userInterpretation: "Partnership doubles courage when hope thins.",
      canonicalFact: "Lucian's hunt intertwined with her fight for release.",
      parallelExplanation: "Bonded resilience rhymes.",
      tags: [
        "parallel-1",
      ],
    },
    {
      id: "senna-parallel-2",
      championId: "senna",
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
      userInterpretation: "You transform pain into purpose rather than identity.",
      canonicalFact: "Senna became Sentinel to free others from the Mist.",
      parallelExplanation: "Purpose after trauma aligns.",
      tags: [
        "parallel-2",
      ],
    },
    {
      id: "senna-parallel-3",
      championId: "senna",
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
      userInterpretation: "Mercy and wrath coexist in your justice.",
      canonicalFact: "She wields relic cannon against wraiths while protecting the living.",
      parallelExplanation: "Dual tone of justice is thematic.",
      tags: [
        "parallel-3",
      ],
    },
    {
      id: "senna-parallel-4",
      championId: "senna",
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
      userInterpretation: "You distrust endings declared by enemies.",
      canonicalFact: "She rejected Thresh's claim that souls belong to him.",
      parallelExplanation: "Agency against domination aligns.",
      tags: [
        "parallel-4",
      ],
    },
    {
      id: "senna-parallel-5",
      championId: "senna",
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
      userInterpretation: "Faith means action under fire, not comfort.",
      canonicalFact: "Sentinels of Light train for constant war with undeath.",
      parallelExplanation: "Active faith links.",
      tags: [
        "parallel-5",
      ],
    },
    {
      id: "senna-parallel-6",
      championId: "senna",
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
      userInterpretation: "You collect fragments of others' stories to honor them.",
      canonicalFact: "Senna carries souls she frees, guiding their release.",
      parallelExplanation: "Witness-bearing aligns metaphorically.",
      tags: [
        "parallel-6",
      ],
    },
    {
      id: "senna-parallel-7",
      championId: "senna",
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
      userInterpretation: "Freedom includes choosing who you become after harm.",
      canonicalFact: "She returned changed, wiser, still loving.",
      parallelExplanation: "Reclamation of self rhymes.",
      tags: [
        "parallel-7",
      ],
    },
    {
      id: "senna-parallel-8",
      championId: "senna",
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
      userInterpretation: "You protect the grieving from predatory hope.",
      canonicalFact: "She fights wraiths that feed on sorrow.",
      parallelExplanation: "Guardian of mourners theme aligns.",
      tags: [
        "parallel-8",
      ],
    },
    {
      id: "senna-parallel-9",
      championId: "senna",
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
      userInterpretation: "Legacy is chain broken, not chain worn.",
      canonicalFact: "Her escape weakened Thresh's myth of inevitability.",
      parallelExplanation: "Breaking cycles is shared hope.",
      tags: [
        "parallel-9",
      ],
    },
    {
      id: "senna-strength-0",
      championId: "senna",
      type: "strength",
      text: "You return from hardship with clarified purpose.",
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
      id: "senna-strength-1",
      championId: "senna",
      type: "strength",
      text: "You inspire partners to keep fighting.",
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
      id: "senna-strength-2",
      championId: "senna",
      type: "strength",
      text: "You channel anger into disciplined aim.",
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
      id: "senna-strength-3",
      championId: "senna",
      type: "strength",
      text: "You honor the dead by freeing the living.",
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
      id: "senna-strength-4",
      championId: "senna",
      type: "strength",
      text: "You believe love can survive transformation.",
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
      id: "senna-weakness-0",
      championId: "senna",
      type: "weakness",
      text: "Hypervigilance exhausts body and trust.",
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
      id: "senna-weakness-1",
      championId: "senna",
      type: "weakness",
      text: "You may define yourself by the hunt too long.",
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
      id: "senna-weakness-2",
      championId: "senna",
      type: "weakness",
      text: "Grief flashes when triggers appear.",
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
      id: "senna-weakness-3",
      championId: "senna",
      type: "weakness",
      text: "Forgiveness for captors comes slowly, if at all.",
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
      id: "senna-weakness-4",
      championId: "senna",
      type: "weakness",
      text: "You struggle to rest while mist still breathes.",
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
      id: "senna-conclusion-0",
      championId: "senna",
      type: "conclusion",
      text: "Senna proves lanterns can be escaped with will and help.",
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
      id: "senna-conclusion-1",
      championId: "senna",
      type: "conclusion",
      text: "Let love be active, not nostalgic.",
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
      id: "senna-conclusion-2",
      championId: "senna",
      type: "conclusion",
      text: "Rest is tactical, not betrayal.",
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
      id: "senna-conclusion-3",
      championId: "senna",
      type: "conclusion",
      text: "Carry stories lightly; do not become archive of pain.",
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
      id: "senna-conclusion-4",
      championId: "senna",
      type: "conclusion",
      text: "Your light can be Sentinel calm, not only blaze.",
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
