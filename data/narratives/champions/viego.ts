import type { ChampionNarrativePack } from "../types";

export const viegoPack: ChampionNarrativePack = {
  championId: "viego",
  loreEventIds: ["shadow_isles_ruin"],
  fragments: [
    {
      id: "viego-intro-0",
      championId: "viego",
      type: "introduction",
      text: "Viego wears grief like armor, a king who chose mist over mourning's end.",
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
      id: "viego-intro-1",
      championId: "viego",
      type: "introduction",
      text: "Your pattern touches obsession: love remembered past reason, past repair.",
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
      id: "viego-intro-2",
      championId: "viego",
      type: "introduction",
      text: "The Ruination began in a heart that could not release a single name.",
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
      id: "viego-intro-3",
      championId: "viego",
      type: "introduction",
      text: "Shadow Isles warn what possession does to purpose and to the living.",
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
      id: "viego-intro-4",
      championId: "viego",
      type: "introduction",
      text: "You need not share his crown to recognize hunger that outlasts the meal.",
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
      id: "viego-parallel-0",
      championId: "viego",
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
      userInterpretation: "Loss can fix your gaze on what was, blurring what still is.",
      canonicalFact: "Viego unleashed the Black Mist trying to restore Isolde, reshaping the Blessed Isles.",
      parallelExplanation: "His grief became catastrophe; yours may stay private. The parallel is refusal to let go.",
      tags: [
        "parallel-0",
        "grief",
      ],
    },
    {
      id: "viego-parallel-1",
      championId: "viego",
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
      userInterpretation: "You attach identity to devotion, even when devotion harms you.",
      canonicalFact: "He defined himself as husband and king before all other duties.",
      parallelExplanation: "Role fusion is his ruin; you may feel it in smaller loyalties.",
      tags: [
        "parallel-1",
      ],
    },
    {
      id: "viego-parallel-2",
      championId: "viego",
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
      userInterpretation: "Power tempts you when it promises to undo a mistake.",
      canonicalFact: "Viego sought arcane tools and armies to reverse death itself.",
      parallelExplanation: "Wish to rewrite the past is human; his scale was continental.",
      tags: [
        "parallel-2",
      ],
    },
    {
      id: "viego-parallel-3",
      championId: "viego",
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
      userInterpretation: "You struggle to trust others with what you cherish most.",
      canonicalFact: "He hoarded sorrow and sovereignty until allies became extensions of will.",
      parallelExplanation: "Control born of fear rhymes without requiring mist or blades.",
      tags: [
        "parallel-3",
      ],
    },
    {
      id: "viego-parallel-4",
      championId: "viego",
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
      userInterpretation: "Emotional sensitivity makes endings feel like theft.",
      canonicalFact: "Isolde's death cracked his judgment; the mist spread from that fracture.",
      parallelExplanation: "Intensity of feeling aligns; world-breaking response does not.",
      tags: [
        "parallel-4",
      ],
    },
    {
      id: "viego-parallel-5",
      championId: "viego",
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
      userInterpretation: "You replay moments, seeking a different outcome in memory.",
      canonicalFact: "Viego relives his last hours with Isolde in waking obsession.",
      parallelExplanation: "Mental rehearsal is shared; his became a kingdom's curse.",
      tags: [
        "parallel-5",
      ],
    },
    {
      id: "viego-parallel-6",
      championId: "viego",
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
      userInterpretation: "Authority feels empty when the person you built it for is gone.",
      canonicalFact: "Camavor's conquests fed a hollow throne after loss.",
      parallelExplanation: "Achievement without beloved witness is a theme you may know.",
      tags: [
        "parallel-6",
      ],
    },
    {
      id: "viego-parallel-7",
      championId: "viego",
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
      userInterpretation: "You may isolate rather than risk new attachment.",
      canonicalFact: "Centuries in isolation deepened his distortion on the Shadow Isles.",
      parallelExplanation: "Withdrawal protects and imprisons; his cell was spectral.",
      tags: [
        "parallel-7",
      ],
    },
    {
      id: "viego-parallel-8",
      championId: "viego",
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
      userInterpretation: "Justice and mercy collapse when pain demands a single target.",
      canonicalFact: "He blamed the world for a wound that began inside his refusal to heal.",
      parallelExplanation: "Externalizing grief is his lesson, not your sentence.",
      tags: [
        "parallel-8",
      ],
    },
    {
      id: "viego-parallel-9",
      championId: "viego",
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
      userInterpretation: "Hope, for you, sometimes looks like reunion against all evidence.",
      canonicalFact: "Ruination persisted because he called it love.",
      parallelExplanation: "Hope misnamed can poison; naming yours honestly matters.",
      tags: [
        "parallel-9",
      ],
    },
    {
      id: "viego-strength-0",
      championId: "viego",
      type: "strength",
      text: "You love with memorable depth that can anchor others.",
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
      id: "viego-strength-1",
      championId: "viego",
      type: "strength",
      text: "You persist through despair longer than many would attempt.",
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
      id: "viego-strength-2",
      championId: "viego",
      type: "strength",
      text: "You recognize emotional truth beneath polite denial.",
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
      id: "viego-strength-3",
      championId: "viego",
      type: "strength",
      text: "You can mobilize resources when someone you love needs them.",
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
      id: "viego-strength-4",
      championId: "viego",
      type: "strength",
      text: "Your loyalty, when healthy, feels unshakable.",
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
      id: "viego-weakness-0",
      championId: "viego",
      type: "weakness",
      text: "Grief can become identity if never mourned fully.",
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
      id: "viego-weakness-1",
      championId: "viego",
      type: "weakness",
      text: "Possessiveness disguises itself as devotion.",
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
      id: "viego-weakness-2",
      championId: "viego",
      type: "weakness",
      text: "You may neglect the living while serving memory.",
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
      id: "viego-weakness-3",
      championId: "viego",
      type: "weakness",
      text: "Isolation amplifies distorted narratives.",
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
      id: "viego-weakness-4",
      championId: "viego",
      type: "weakness",
      text: "Anger at fate can spill onto innocent bystanders.",
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
      id: "viego-conclusion-0",
      championId: "viego",
      type: "conclusion",
      text: "Let endings be real; love can continue without undoing death.",
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
      id: "viego-conclusion-1",
      championId: "viego",
      type: "conclusion",
      text: "Viego shows the cost of mistaking control for devotion.",
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
      id: "viego-conclusion-2",
      championId: "viego",
      type: "conclusion",
      text: "Invite witnesses you trust to speak when obsession narrows vision.",
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
      id: "viego-conclusion-3",
      championId: "viego",
      type: "conclusion",
      text: "Build purpose that includes the present, not only the lost.",
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
      id: "viego-conclusion-4",
      championId: "viego",
      type: "conclusion",
      text: "Your heart's size is gift; aim it toward life still breathing.",
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
