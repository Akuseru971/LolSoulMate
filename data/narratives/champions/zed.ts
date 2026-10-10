import type { ChampionNarrativePack } from "../types";

export const zedPack: ChampionNarrativePack = {
  championId: "zed",
  loreEventIds: ["ionian_balance"],
  fragments: [
    {
      id: "zed-intro-0",
      championId: "zed",
      type: "introduction",
      text: "Zed leads Order of Shadow, power taken because balance, to him, demanded teeth.",
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
      id: "zed-intro-1",
      championId: "zed",
      type: "introduction",
      text: "Your pattern may carry pragmatism sharp enough to cut tradition.",
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
      id: "zed-intro-2",
      championId: "zed",
      type: "introduction",
      text: "He broke from kinkou after witnessing invaders crush passive doctrine.",
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
      id: "zed-intro-3",
      championId: "zed",
      type: "introduction",
      text: "Forbidden techniques live in his hands; fear lives in Ionian councils.",
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
      id: "zed-intro-4",
      championId: "zed",
      type: "introduction",
      text: "You need not steal shadow to know urgency that outruns elders.",
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
      id: "zed-parallel-0",
      championId: "zed",
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
      userInterpretation: "You accept moral cost when soft methods fail.",
      canonicalFact: "Zed embraced forbidden shadow arts after Noxian invasion.",
      parallelExplanation: "Hard means debate aligns; his means are lethal.",
      tags: [
        "parallel-0",
        "shadow",
      ],
    },
    {
      id: "zed-parallel-1",
      championId: "zed",
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
      userInterpretation: "You distrust institutions that preach while burning.",
      canonicalFact: "He saw kinkou restraint as complicity.",
      parallelExplanation: "Institutional skepticism links.",
      tags: [
        "parallel-1",
      ],
    },
    {
      id: "zed-parallel-2",
      championId: "zed",
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
      userInterpretation: "Discipline in training is absolute.",
      canonicalFact: "Order of Shadow drills relentlessly.",
      parallelExplanation: "Harsh discipline rhymes.",
      tags: [
        "parallel-2",
      ],
    },
    {
      id: "zed-parallel-3",
      championId: "zed",
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
      userInterpretation: "You cultivate fear as diplomatic tool.",
      canonicalFact: "Ionians negotiate differently when Zed intervenes.",
      parallelExplanation: "Fear as leverage cautionary parallel.",
      tags: [
        "parallel-3",
      ],
    },
    {
      id: "zed-parallel-4",
      championId: "zed",
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
      userInterpretation: "Personal loss fed appetite for control.",
      canonicalFact: "Early trauma and invasion shaped his doctrine.",
      parallelExplanation: "Trauma-driven control aligns safely.",
      tags: [
        "parallel-4",
      ],
    },
    {
      id: "zed-parallel-5",
      championId: "zed",
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
      userInterpretation: "You mentor apprentices in your image.",
      canonicalFact: "Zed trains assassins to enforce his balance.",
      parallelExplanation: "Legacy through disciples links.",
      tags: [
        "parallel-5",
      ],
    },
    {
      id: "zed-parallel-6",
      championId: "zed",
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
      userInterpretation: "Independence from elders feels like survival.",
      canonicalFact: "He split from Shen's path openly.",
      parallelExplanation: "Breakaway autonomy rhymes.",
      tags: [
        "parallel-6",
      ],
    },
    {
      id: "zed-parallel-7",
      championId: "zed",
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
      userInterpretation: "Ambition serves nation, not only ego, in your telling.",
      canonicalFact: "Zed claims shadow protects Ionia.",
      parallelExplanation: "Nationalist pragmatism theme.",
      tags: [
        "parallel-7",
      ],
    },
    {
      id: "zed-parallel-8",
      championId: "zed",
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
      userInterpretation: "You hide tenderness entirely.",
      canonicalFact: "Rare glimpses show care for Ionian civilians.",
      parallelExplanation: "Hidden warmth aligns.",
      tags: [
        "parallel-8",
      ],
    },
    {
      id: "zed-parallel-9",
      championId: "zed",
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
      userInterpretation: "Legacy is order maintained by unseen blade.",
      canonicalFact: "His shadow persists across provinces.",
      parallelExplanation: "Covert legacy rhymes.",
      tags: [
        "parallel-9",
      ],
    },
    {
      id: "zed-strength-0",
      championId: "zed",
      type: "strength",
      text: "You act when committees stall.",
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
      id: "zed-strength-1",
      championId: "zed",
      type: "strength",
      text: "You master skills others fear to learn.",
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
      id: "zed-strength-2",
      championId: "zed",
      type: "strength",
      text: "You protect homeland in ways you choose.",
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
      id: "zed-strength-3",
      championId: "zed",
      type: "strength",
      text: "You organize loyal teams efficiently.",
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
      id: "zed-strength-4",
      championId: "zed",
      type: "strength",
      text: "You read threats before they bloom.",
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
      id: "zed-weakness-0",
      championId: "zed",
      type: "weakness",
      text: "Ends justify means until lines blur.",
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
      id: "zed-weakness-1",
      championId: "zed",
      type: "weakness",
      text: "Fear erodes trust you need.",
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
      id: "zed-weakness-2",
      championId: "zed",
      type: "weakness",
      text: "Isolation from kinkou costs wisdom.",
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
      id: "zed-weakness-3",
      championId: "zed",
      type: "weakness",
      text: "Apprentices inherit your hardness.",
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
      id: "zed-weakness-4",
      championId: "zed",
      type: "weakness",
      text: "Control becomes addiction.",
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
      id: "zed-conclusion-0",
      championId: "zed",
      type: "conclusion",
      text: "Zed asks whether teeth alone can hold balance.",
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
      id: "zed-conclusion-1",
      championId: "zed",
      type: "conclusion",
      text: "Shadow can guard; it should not devour.",
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
      id: "zed-conclusion-2",
      championId: "zed",
      type: "conclusion",
      text: "Listen once to Shen before striking.",
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
      id: "zed-conclusion-3",
      championId: "zed",
      type: "conclusion",
      text: "Power taken must be power checked.",
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
      id: "zed-conclusion-4",
      championId: "zed",
      type: "conclusion",
      text: "Ionia needs you human, not only feared.",
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
