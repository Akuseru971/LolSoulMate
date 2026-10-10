import type { ChampionNarrativePack } from "../types";

export const garenPack: ChampionNarrativePack = {
  championId: "garen",
  loreEventIds: ["demacia_mage_secrets"],
  fragments: [
    {
      id: "garen-intro-0",
      championId: "garen",
      type: "introduction",
      text: "Garen stands where Demacia stands: straight-backed, vow-heavy, silence about doubt.",
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
      id: "garen-intro-1",
      championId: "garen",
      type: "introduction",
      text: "What reads in your pattern is disciplined loyalty to ideals even when life complicates them.",
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
      id: "garen-intro-2",
      championId: "garen",
      type: "introduction",
      text: "He loves family and nation with the same guarded intensity.",
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
      id: "garen-intro-3",
      championId: "garen",
      type: "introduction",
      text: "Magic secrets in his house test vows he repeats but rarely interrogates.",
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
      id: "garen-intro-4",
      championId: "garen",
      type: "introduction",
      text: "Courage for him is showing up again, banner high, questions buried.",
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
      id: "garen-parallel-0",
      championId: "garen",
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
      userInterpretation: "Duty anchors you when fear would scatter resolve.",
      canonicalFact: "Garen leads Dauntless Vanguard charges for Demacia's code.",
      parallelExplanation: "Institutional duty aligns; his expression is martial.",
      tags: [
        "parallel-0",
        "vow",
      ],
    },
    {
      id: "garen-parallel-1",
      championId: "garen",
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
      userInterpretation: "You protect institutions because they protect people you love.",
      canonicalFact: "He believes Demacia's laws shield the vulnerable.",
      parallelExplanation: "Faith in order as shield is shared temperament.",
      tags: [
        "parallel-1",
      ],
    },
    {
      id: "garen-parallel-2",
      championId: "garen",
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
      userInterpretation: "You struggle to name emotional nuance aloud.",
      canonicalFact: "Garen speaks in certainties, especially around Lux and magic.",
      parallelExplanation: "Emotional reticence links; his stakes are national.",
      tags: [
        "parallel-2",
      ],
    },
    {
      id: "garen-parallel-3",
      championId: "garen",
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
      userInterpretation: "You confront threats directly rather than intrigue.",
      canonicalFact: "He prefers the front line to court games.",
      parallelExplanation: "Straightforward conflict style aligns.",
      tags: [
        "parallel-3",
      ],
    },
    {
      id: "garen-parallel-4",
      championId: "garen",
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
      userInterpretation: "Mercy exists but must fit within honor's frame.",
      canonicalFact: "He spares the worthy foe when Demacia allows.",
      parallelExplanation: "Bounded mercy mirrors structured moral codes.",
      tags: [
        "parallel-4",
      ],
    },
    {
      id: "garen-parallel-5",
      championId: "garen",
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
      userInterpretation: "You fear failing those who see you as exemplar.",
      canonicalFact: "Crownguard name carries expectation on every march.",
      parallelExplanation: "Recognition as burden is parallel.",
      tags: [
        "parallel-5",
      ],
    },
    {
      id: "garen-parallel-6",
      championId: "garen",
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
      userInterpretation: "Family loyalty overrides comfort.",
      canonicalFact: "He defends Lux even when her secret terrifies him.",
      parallelExplanation: "Protective sibling bond aligns with loyalty answers.",
      tags: [
        "parallel-6",
      ],
    },
    {
      id: "garen-parallel-7",
      championId: "garen",
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
      userInterpretation: "You distrust power that lacks visible accountability.",
      canonicalFact: "Demacia's fear of mages shapes his suspicion.",
      parallelExplanation: "Skepticism of hidden power is thematic link.",
      tags: [
        "parallel-7",
      ],
    },
    {
      id: "garen-parallel-8",
      championId: "garen",
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
      userInterpretation: "Resilience is routine: train, march, repeat.",
      canonicalFact: "Years of service forged him into living symbol.",
      parallelExplanation: "Discipline as identity rhymes.",
      tags: [
        "parallel-8",
      ],
    },
    {
      id: "garen-parallel-9",
      championId: "garen",
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
      userInterpretation: "You want legacy of steadfastness, not novelty.",
      canonicalFact: "Garen seeks to be remembered as true Demacian.",
      parallelExplanation: "Legacy of integrity aligns with quiz option on staying true.",
      tags: [
        "parallel-9",
      ],
    },
    {
      id: "garen-strength-0",
      championId: "garen",
      type: "strength",
      text: "Others trust you in crisis because you do not waver lightly.",
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
      id: "garen-strength-1",
      championId: "garen",
      type: "strength",
      text: "You model courage that is repeatable, not flashy.",
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
      id: "garen-strength-2",
      championId: "garen",
      type: "strength",
      text: "You shield weaker allies without condescension.",
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
      id: "garen-strength-3",
      championId: "garen",
      type: "strength",
      text: "You translate ideals into daily habit.",
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
      id: "garen-strength-4",
      championId: "garen",
      type: "strength",
      text: "You keep promises when cost is visible.",
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
      id: "garen-weakness-0",
      championId: "garen",
      type: "weakness",
      text: "Rigid codes blind you to necessary change.",
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
      id: "garen-weakness-1",
      championId: "garen",
      type: "weakness",
      text: "Emotional silence strains intimate bonds.",
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
      id: "garen-weakness-2",
      championId: "garen",
      type: "weakness",
      text: "You may confuse loyalty with uncritical support.",
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
      id: "garen-weakness-3",
      championId: "garen",
      type: "weakness",
      text: "Prejudice inherited feels like truth until examined.",
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
      id: "garen-weakness-4",
      championId: "garen",
      type: "weakness",
      text: "Doubt unspoken becomes isolation.",
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
      id: "garen-conclusion-0",
      championId: "garen",
      type: "conclusion",
      text: "Garen's strength grows when vows include honest questions.",
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
      id: "garen-conclusion-1",
      championId: "garen",
      type: "conclusion",
      text: "Protect people, not only banners.",
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
      id: "garen-conclusion-2",
      championId: "garen",
      type: "conclusion",
      text: "Let family secrets become trust, not silence.",
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
      id: "garen-conclusion-3",
      championId: "garen",
      type: "conclusion",
      text: "Mercy can be Demacian when law learns to see.",
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
      id: "garen-conclusion-4",
      championId: "garen",
      type: "conclusion",
      text: "Stand straight, but not so stiff you cannot turn toward light.",
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
