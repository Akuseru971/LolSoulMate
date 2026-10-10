import type { ChampionNarrativePack } from "../types";

export const jhinPack: ChampionNarrativePack = {
  championId: "jhin",
  loreEventIds: ["ionian_balance"],
  fragments: [
    {
      id: "jhin-intro-0",
      championId: "jhin",
      type: "introduction",
      text: "Jhin hears the world as composition: breath, gunshot, silence, each placed with cruel intention.",
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
      id: "jhin-intro-1",
      championId: "jhin",
      type: "introduction",
      text: "Your pattern suggests appetite for precision, the need for acts to mean something beyond noise.",
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
      id: "jhin-intro-2",
      championId: "jhin",
      type: "introduction",
      text: "In Ionian balance, he is the fracture: art twisted until it worships the final breath.",
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
      id: "jhin-intro-3",
      championId: "jhin",
      type: "introduction",
      text: "You may not share his violence, yet you recognize craft that treats consequence as canvas.",
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
      id: "jhin-intro-4",
      championId: "jhin",
      type: "introduction",
      text: "Perfection can seduce any soul; Jhin simply refuses every limit on that seduction.",
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
      id: "jhin-parallel-0",
      championId: "jhin",
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
      userInterpretation: "You want your choices to land with deliberate shape, not accidental clutter.",
      canonicalFact: "Jhin plans killings as four-act performances, down to light, color, and timing.",
      parallelExplanation: "His stage is murder; yours may be work or words. The rhyme is aesthetic control, not cruelty.",
      tags: [
        "parallel-0",
        "art",
      ],
    },
    {
      id: "jhin-parallel-1",
      championId: "jhin",
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
      userInterpretation: "You dislike mess, whether in plans, relationships, or unfinished business.",
      canonicalFact: "He altered crime scenes to satisfy an internal critic that never applauds.",
      parallelExplanation: "Obsession with order can mirror his, without sharing his harm.",
      tags: [
        "parallel-1",
      ],
    },
    {
      id: "jhin-parallel-2",
      championId: "jhin",
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
      userInterpretation: "Recognition matters when it confirms mastery, not when it flatters ego alone.",
      canonicalFact: "Jhin leaves signatures so Runeterra must acknowledge the artist behind the horror.",
      parallelExplanation: "You may seek witness to craft; he demands it through fear.",
      tags: [
        "parallel-2",
      ],
    },
    {
      id: "jhin-parallel-3",
      championId: "jhin",
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
      userInterpretation: "You analyze emotion from a slight distance, as material to refine.",
      canonicalFact: "He studied victims' faces for the exact moment beauty peaked in ruin.",
      parallelExplanation: "Emotional distance can serve art or empathy; for him it served neither mercy.",
      tags: [
        "parallel-3",
      ],
    },
    {
      id: "jhin-parallel-4",
      championId: "jhin",
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
      userInterpretation: "Rules feel like suggestions when they dull excellence.",
      canonicalFact: "Ionia's council imprisoned him for murders dressed as theater, yet he returned unchanged.",
      parallelExplanation: "Defiance of constraint links temperaments; only his expression was lethal.",
      tags: [
        "parallel-4",
      ],
    },
    {
      id: "jhin-parallel-5",
      championId: "jhin",
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
      userInterpretation: "Patience is a weapon you are willing to hone.",
      canonicalFact: "He waited years between performances if the composition required it.",
      parallelExplanation: "Delayed gratification in craft is shared; his patience served death.",
      tags: [
        "parallel-5",
      ],
    },
    {
      id: "jhin-parallel-6",
      championId: "jhin",
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
      userInterpretation: "You believe detail separates amateurs from masters.",
      canonicalFact: "Jhin crafts custom ammunition and stagecraft for each target.",
      parallelExplanation: "Meticulousness aligns; intent diverges utterly.",
      tags: [
        "parallel-6",
      ],
    },
    {
      id: "jhin-parallel-7",
      championId: "jhin",
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
      userInterpretation: "You can detach from social warmth when focus demands it.",
      canonicalFact: "He treats allies as props if they improve the tableau.",
      parallelExplanation: "Instrumental relationships are his sin; your detachment may protect concentration.",
      tags: [
        "parallel-7",
      ],
    },
    {
      id: "jhin-parallel-8",
      championId: "jhin",
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
      userInterpretation: "Moral flexibility appears when ideals obstruct the finished piece.",
      canonicalFact: "He rationalizes slaughter as higher beauty that mortals cannot judge.",
      parallelExplanation: "You may bend ethics in smaller arenas; he made bending a religion.",
      tags: [
        "parallel-8",
      ],
    },
    {
      id: "jhin-parallel-9",
      championId: "jhin",
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
      userInterpretation: "Silence after effort feels as important as the effort itself.",
      canonicalFact: "His fourth shot is reserved for the concluding stillness of a 'masterwork'.",
      parallelExplanation: "Cadence and closure matter to you both; his closure ends lives.",
      tags: [
        "parallel-9",
      ],
    },
    {
      id: "jhin-strength-0",
      championId: "jhin",
      type: "strength",
      text: "You notice patterns others miss and can refine them relentlessly.",
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
      id: "jhin-strength-1",
      championId: "jhin",
      type: "strength",
      text: "Your standards push work from competent toward memorable.",
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
      id: "jhin-strength-2",
      championId: "jhin",
      type: "strength",
      text: "You tolerate solitude when creation requires uninterrupted time.",
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
      id: "jhin-strength-3",
      championId: "jhin",
      type: "strength",
      text: "You treat constraints as prompts rather than defeats.",
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
      id: "jhin-strength-4",
      championId: "jhin",
      type: "strength",
      text: "You can narrate your own actions with unsettling clarity.",
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
      id: "jhin-weakness-0",
      championId: "jhin",
      type: "weakness",
      text: "Perfectionism can stall compassion or collaboration.",
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
      id: "jhin-weakness-1",
      championId: "jhin",
      type: "weakness",
      text: "You may aestheticize pain, yours or others', instead of healing it.",
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
      id: "jhin-weakness-2",
      championId: "jhin",
      type: "weakness",
      text: "Critique turns inward until nothing satisfies.",
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
      id: "jhin-weakness-3",
      championId: "jhin",
      type: "weakness",
      text: "Detachment can read as coldness even when you mean focus.",
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
      id: "jhin-weakness-4",
      championId: "jhin",
      type: "weakness",
      text: "Impulse lurks beneath control when someone disrupts your design.",
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
      id: "jhin-conclusion-0",
      championId: "jhin",
      type: "conclusion",
      text: "Let craft serve connection, not spectacle alone.",
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
      id: "jhin-conclusion-1",
      championId: "jhin",
      type: "conclusion",
      text: "Jhin warns what happens when art refuses moral weight.",
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
      id: "jhin-conclusion-2",
      championId: "jhin",
      type: "conclusion",
      text: "Finish pieces, then release them; not every flaw requires blood.",
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
      id: "jhin-conclusion-3",
      championId: "jhin",
      type: "conclusion",
      text: "Invite feedback before the 'final shot' of a decision.",
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
      id: "jhin-conclusion-4",
      championId: "jhin",
      type: "conclusion",
      text: "Precision can honor life when it protects rather than performs ending.",
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
