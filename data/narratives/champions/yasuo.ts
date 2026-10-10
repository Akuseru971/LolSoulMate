import type { ChampionNarrativePack } from "../types";

export const yasuoPack: ChampionNarrativePack = {
  championId: "yasuo",
  loreEventIds: ["ionian_balance"],
  fragments: [
    {
      id: "yasuo-intro-0",
      championId: "yasuo",
      type: "introduction",
      text: "Yasuo moves with wind and regret, each strike a question he cannot outrun.",
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
      id: "yasuo-intro-1",
      championId: "yasuo",
      type: "introduction",
      text: "Your answers touch independence wounded by honor codes and misunderstanding.",
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
      id: "yasuo-intro-2",
      championId: "yasuo",
      type: "introduction",
      text: "Ionia taught him technique; tragedy taught him exile.",
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
      id: "yasuo-intro-3",
      championId: "yasuo",
      type: "introduction",
      text: "He seeks absolution without always knowing who must grant it.",
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
      id: "yasuo-intro-4",
      championId: "yasuo",
      type: "introduction",
      text: "The blade is steady; it is the story around it that shakes.",
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
      id: "yasuo-parallel-0",
      championId: "yasuo",
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
      userInterpretation: "You carry blame that may not belong entirely to you.",
      canonicalFact: "Yasuo was accused of killing his master and wandered hunted.",
      parallelExplanation: "Misassigned guilt is his plot; you may feel echoes in private history.",
      tags: [
        "parallel-0",
        "exile",
      ],
    },
    {
      id: "yasuo-parallel-1",
      championId: "yasuo",
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
      userInterpretation: "Freedom matters more after someone else defined your fate.",
      canonicalFact: "He refused execution and chose road over ritual submission.",
      parallelExplanation: "Autonomy reclaimed aligns; his path was fugitive.",
      tags: [
        "parallel-1",
      ],
    },
    {
      id: "yasuo-parallel-2",
      championId: "yasuo",
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
      userInterpretation: "Discipline in craft steadies chaos inside.",
      canonicalFact: "Wind technique demands breath control and relentless practice.",
      parallelExplanation: "Mastery as meditation is shared chord.",
      tags: [
        "parallel-2",
      ],
    },
    {
      id: "yasuo-parallel-3",
      championId: "yasuo",
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
      userInterpretation: "You confront allies when truth demands it, even alone.",
      canonicalFact: "Yasuo clashed with Ionian elders and later with his brother's legacy.",
      parallelExplanation: "Face-to-face reckoning temperament matches his.",
      tags: [
        "parallel-3",
      ],
    },
    {
      id: "yasuo-parallel-4",
      championId: "yasuo",
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
      userInterpretation: "Impulse strikes when insult lands on old wounds.",
      canonicalFact: "Pride and grief made his younger years volatile.",
      parallelExplanation: "Hot moments do not make you his crimes.",
      tags: [
        "parallel-4",
      ],
    },
    {
      id: "yasuo-parallel-5",
      championId: "yasuo",
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
      userInterpretation: "You believe destiny can be defied by skill and choice.",
      canonicalFact: "He challenged supposed fate after Swain's machinations in Ionia.",
      parallelExplanation: "Agency against prophecy rhymes thematically.",
      tags: [
        "parallel-5",
      ],
    },
    {
      id: "yasuo-parallel-6",
      championId: "yasuo",
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
      userInterpretation: "Protective instinct appears for strangers who mirror past failures.",
      canonicalFact: "He intervenes for the unjustly accused on the road.",
      parallelExplanation: "Redemption through protection is his arc's hope.",
      tags: [
        "parallel-6",
      ],
    },
    {
      id: "yasuo-parallel-7",
      championId: "yasuo",
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
      userInterpretation: "Solitude recharges yet deepens brooding.",
      canonicalFact: "Years of travel honed skill while feeding melancholy.",
      parallelExplanation: "Introverted recovery is familiar to many.",
      tags: [
        "parallel-7",
      ],
    },
    {
      id: "yasuo-parallel-8",
      championId: "yasuo",
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
      userInterpretation: "Mercy competes with desire for clean judgment.",
      canonicalFact: "He spared some pursuers, cut down others who left no choice.",
      parallelExplanation: "Moral tension without equating you to his killings.",
      tags: [
        "parallel-8",
      ],
    },
    {
      id: "yasuo-parallel-9",
      championId: "yasuo",
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
      userInterpretation: "Legacy you want is truth told, not legend polished.",
      canonicalFact: "Yasuo seeks to clear his name before he can rest.",
      parallelExplanation: "Honest narrative as goal aligns with quiz legacy answers.",
      tags: [
        "parallel-9",
      ],
    },
    {
      id: "yasuo-strength-0",
      championId: "yasuo",
      type: "strength",
      text: "You adapt quickly and learn from motion.",
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
      id: "yasuo-strength-1",
      championId: "yasuo",
      type: "strength",
      text: "You defend the accused when evidence feels thin.",
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
      id: "yasuo-strength-2",
      championId: "yasuo",
      type: "strength",
      text: "Your resilience survives social exile.",
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
      id: "yasuo-strength-3",
      championId: "yasuo",
      type: "strength",
      text: "You channel emotion into focused skill.",
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
      id: "yasuo-strength-4",
      championId: "yasuo",
      type: "strength",
      text: "You pursue reconciliation when pride allows.",
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
      id: "yasuo-weakness-0",
      championId: "yasuo",
      type: "weakness",
      text: "Brooding can delay necessary apologies.",
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
      id: "yasuo-weakness-1",
      championId: "yasuo",
      type: "weakness",
      text: "Pride masquerades as honor.",
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
      id: "yasuo-weakness-2",
      championId: "yasuo",
      type: "weakness",
      text: "You may push allies away preemptively.",
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
      id: "yasuo-weakness-3",
      championId: "yasuo",
      type: "weakness",
      text: "Anger at injustice becomes self-punishment.",
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
      id: "yasuo-weakness-4",
      championId: "yasuo",
      type: "weakness",
      text: "Rest feels undeserved while names stay stained.",
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
      id: "yasuo-conclusion-0",
      championId: "yasuo",
      type: "conclusion",
      text: "Yasuo's wind reminds you: forward motion can be penance and healing.",
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
      id: "yasuo-conclusion-1",
      championId: "yasuo",
      type: "conclusion",
      text: "Seek witnesses who will hear your full story.",
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
      id: "yasuo-conclusion-2",
      championId: "yasuo",
      type: "conclusion",
      text: "Skill without forgiveness keeps wounds open.",
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
      id: "yasuo-conclusion-3",
      championId: "yasuo",
      type: "conclusion",
      text: "Brotherhood may return when blame loosens.",
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
      id: "yasuo-conclusion-4",
      championId: "yasuo",
      type: "conclusion",
      text: "Let independence serve truth, not isolation alone.",
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
