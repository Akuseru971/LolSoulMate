import type { ChampionNarrativePack } from "../types";

export const rivenPack: ChampionNarrativePack = {
  championId: "riven",
  loreEventIds: ["noxian_conquest", "ionian_resistance"],
  fragments: [
    {
      id: "riven-intro-0",
      championId: "riven",
      type: "introduction",
      text: "Riven carries a broken blade and a nation she can no longer praise without choking.",
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
      id: "riven-intro-1",
      championId: "riven",
      type: "introduction",
      text: "Your answers touch fracture between loyalty and conscience after harm done.",
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
      id: "riven-intro-2",
      championId: "riven",
      type: "introduction",
      text: "Noxus forged her; Ionia broke her certainties.",
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
      id: "riven-intro-3",
      championId: "riven",
      type: "introduction",
      text: "She seeks atonement without easy script, exile as classroom.",
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
      id: "riven-intro-4",
      championId: "riven",
      type: "introduction",
      text: "You need not have wielded rune steel to know shame that outlasts victory.",
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
      id: "riven-parallel-0",
      championId: "riven",
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
      userInterpretation: "You question causes you once defended loudly.",
      canonicalFact: "Riven abandoned Noxus after seeing invasion's cost.",
      parallelExplanation: "Moral awakening aligns; her past was soldiering.",
      tags: [
        "parallel-0",
        "atonement",
      ],
    },
    {
      id: "riven-parallel-1",
      championId: "riven",
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
      userInterpretation: "Discipline remains even when purpose crumbles.",
      canonicalFact: "She trains alone, maintaining form without banner.",
      parallelExplanation: "Embodied discipline persists.",
      tags: [
        "parallel-1",
      ],
    },
    {
      id: "riven-parallel-2",
      championId: "riven",
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
      userInterpretation: "You prefer direct repair to abstract apology.",
      canonicalFact: "Riven seeks ways to undo rune blade's lingering harm.",
      parallelExplanation: "Action-oriented remorse rhymes.",
      tags: [
        "parallel-2",
      ],
    },
    {
      id: "riven-parallel-3",
      championId: "riven",
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
      userInterpretation: "Independence feels like punishment and freedom both.",
      canonicalFact: "Exile freed her from commands she hated.",
      parallelExplanation: "Self-imposed distance aligns.",
      tags: [
        "parallel-3",
      ],
    },
    {
      id: "riven-parallel-4",
      championId: "riven",
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
      userInterpretation: "Anger at self can outlast anger at enemies.",
      canonicalFact: "She shattered her sword rather than serve Noxus again.",
      parallelExplanation: "Internalized blame is parallel.",
      tags: [
        "parallel-4",
      ],
    },
    {
      id: "riven-parallel-5",
      championId: "riven",
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
      userInterpretation: "You protect the vulnerable to balance old harm.",
      canonicalFact: "Riven intervenes for Ionians when she can.",
      parallelExplanation: "Redemptive protection links.",
      tags: [
        "parallel-5",
      ],
    },
    {
      id: "riven-parallel-6",
      championId: "riven",
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
      userInterpretation: "Trust is rebuilt slowly with those you hurt.",
      canonicalFact: "Ionian villagers met her with fear and tentative acceptance.",
      parallelExplanation: "Earned trust theme aligns.",
      tags: [
        "parallel-6",
      ],
    },
    {
      id: "riven-parallel-7",
      championId: "riven",
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
      userInterpretation: "You fear becoming tool again.",
      canonicalFact: "Noxus treated her as weapon before person.",
      parallelExplanation: "Fear of instrumentalization is human.",
      tags: [
        "parallel-7",
      ],
    },
    {
      id: "riven-parallel-8",
      championId: "riven",
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
      userInterpretation: "Strength without meaning feels hollow.",
      canonicalFact: "Her rune blade once defined her; now she redefines strength.",
      parallelExplanation: "Identity after role loss rhymes.",
      tags: [
        "parallel-8",
      ],
    },
    {
      id: "riven-parallel-9",
      championId: "riven",
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
      userInterpretation: "Hope looks like a life where name is not synonym for destruction.",
      canonicalFact: "Riven wants a future unowned by warlords.",
      parallelExplanation: "Hope for renamed self aligns.",
      tags: [
        "parallel-9",
      ],
    },
    {
      id: "riven-strength-0",
      championId: "riven",
      type: "strength",
      text: "You face guilt without denying facts.",
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
      id: "riven-strength-1",
      championId: "riven",
      type: "strength",
      text: "You retain skill while changing allegiance.",
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
      id: "riven-strength-2",
      championId: "riven",
      type: "strength",
      text: "You empathize with other exiles.",
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
      id: "riven-strength-3",
      championId: "riven",
      type: "strength",
      text: "You accept discomfort of unfinished amends.",
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
      id: "riven-strength-4",
      championId: "riven",
      type: "strength",
      text: "You fight only when cause clears your throat.",
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
      id: "riven-weakness-0",
      championId: "riven",
      type: "weakness",
      text: "Self-punishment can replace useful repair.",
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
      id: "riven-weakness-1",
      championId: "riven",
      type: "weakness",
      text: "Shame isolates you from guidance.",
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
      id: "riven-weakness-2",
      championId: "riven",
      type: "weakness",
      text: "You may assume others will never forgive.",
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
      id: "riven-weakness-3",
      championId: "riven",
      type: "weakness",
      text: "Anger flashes at reminders of old uniform.",
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
      id: "riven-weakness-4",
      championId: "riven",
      type: "weakness",
      text: "Identity vacuum invites reckless tests.",
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
      id: "riven-conclusion-0",
      championId: "riven",
      type: "conclusion",
      text: "Riven shows broken blades can still cut chains, not throats.",
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
      id: "riven-conclusion-1",
      championId: "riven",
      type: "conclusion",
      text: "Let atonement be daily, not theatrical.",
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
      id: "riven-conclusion-2",
      championId: "riven",
      type: "conclusion",
      text: "Accept help from those you protect.",
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
      id: "riven-conclusion-3",
      championId: "riven",
      type: "conclusion",
      text: "Name harm plainly; then listen.",
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
      id: "riven-conclusion-4",
      championId: "riven",
      type: "conclusion",
      text: "Noxus is a chapter, not your epitaph.",
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
