import type { ChampionNarrativePack } from "../types";

export const settPack: ChampionNarrativePack = {
  championId: "sett",
  loreEventIds: ["noxian_conquest"],
  fragments: [
    {
      id: "sett-intro-0",
      championId: "sett",
      type: "introduction",
      text: "Sett turned Noxian pit into stage, half vastaya pride and whole Ionian stubbornness.",
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
      id: "sett-intro-1",
      championId: "sett",
      type: "introduction",
      text: "Your pattern mixes showmanship, protectiveness for crew, and rage at absent fathers.",
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
      id: "sett-intro-2",
      championId: "sett",
      type: "introduction",
      text: "He punches for coin, reputation, and mom; empire watches and bets.",
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
      id: "sett-intro-3",
      championId: "sett",
      type: "introduction",
      text: "Boss of bosses in arena, son at heart beneath ink and scars.",
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
      id: "sett-intro-4",
      championId: "sett",
      type: "introduction",
      text: "You need not fight champions to know duty to family worn like championship belt.",
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
      id: "sett-parallel-0",
      championId: "sett",
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
      userInterpretation: "You perform strength to hide vulnerability.",
      canonicalFact: "Sett plays braggart while funding his mother's quiet life.",
      parallelExplanation: "Performative toughness aligns.",
      tags: [
        "parallel-0",
        "pit",
      ],
    },
    {
      id: "sett-parallel-1",
      championId: "sett",
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
      userInterpretation: "You protect your people like extended family.",
      canonicalFact: "He runs pit crews with loyalist code.",
      parallelExplanation: "Crew loyalty rhymes.",
      tags: [
        "parallel-1",
      ],
    },
    {
      id: "sett-parallel-2",
      championId: "sett",
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
      userInterpretation: "Abandonment by parent fuels ambition.",
      canonicalFact: "His Noxian father left; Sett built fame without him.",
      parallelExplanation: "Father wound links.",
      tags: [
        "parallel-2",
      ],
    },
    {
      id: "sett-parallel-3",
      championId: "sett",
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
      userInterpretation: "You enjoy recognition loudly earned.",
      canonicalFact: "Crowds chant his name in Noxus arena.",
      parallelExplanation: "Need for recognition aligns.",
      tags: [
        "parallel-3",
      ],
    },
    {
      id: "sett-parallel-4",
      championId: "sett",
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
      userInterpretation: "Pragmatism accepts dirty arenas to fund clean purposes.",
      canonicalFact: "He tolerates Noxian violence business to support Ionia remittances.",
      parallelExplanation: "Moral compromise for family rhymes.",
      tags: [
        "parallel-4",
      ],
    },
    {
      id: "sett-parallel-5",
      championId: "sett",
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
      userInterpretation: "Impulse hits when disrespect lands.",
      canonicalFact: "Sett's temper flares in ring and backroom.",
      parallelExplanation: "Hot temper aligns without requiring fights.",
      tags: [
        "parallel-5",
      ],
    },
    {
      id: "sett-parallel-6",
      championId: "sett",
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
      userInterpretation: "You negotiate from position of demonstrated force.",
      canonicalFact: "Rivals bend after public beating.",
      parallelExplanation: "Demonstrated credibility links.",
      tags: [
        "parallel-6",
      ],
    },
    {
      id: "sett-parallel-7",
      championId: "sett",
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
      userInterpretation: "Independence from both nations defines you.",
      canonicalFact: "Half Ionian, half vastaya, he claims pit as home.",
      parallelExplanation: "Between-cultures identity rhymes.",
      tags: [
        "parallel-7",
      ],
    },
    {
      id: "sett-parallel-8",
      championId: "sett",
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
      userInterpretation: "Hope looks like mom safe while you take the hits.",
      canonicalFact: "Letters and coin reach Ionia regularly.",
      parallelExplanation: "Protective hope aligns.",
      tags: [
        "parallel-8",
      ],
    },
    {
      id: "sett-parallel-9",
      championId: "sett",
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
      userInterpretation: "Legacy is name mom can speak proudly.",
      canonicalFact: "He wants her to see champion, not thug.",
      parallelExplanation: "Family-centered legacy links.",
      tags: [
        "parallel-9",
      ],
    },
    {
      id: "sett-strength-0",
      championId: "sett",
      type: "strength",
      text: "You energize crowds and teams.",
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
      id: "sett-strength-1",
      championId: "sett",
      type: "strength",
      text: "You convert pain into visible success.",
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
      id: "sett-strength-2",
      championId: "sett",
      type: "strength",
      text: "You fund care for loved ones reliably.",
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
      id: "sett-strength-3",
      championId: "sett",
      type: "strength",
      text: "You stand up to bullies in your domain.",
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
      id: "sett-strength-4",
      championId: "sett",
      type: "strength",
      text: "You blend charm with credible threat.",
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
      id: "sett-weakness-0",
      championId: "sett",
      type: "weakness",
      text: "Performative rage hides unprocessed hurt.",
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
      id: "sett-weakness-1",
      championId: "sett",
      type: "weakness",
      text: "You risk body for approval.",
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
      id: "sett-weakness-2",
      championId: "sett",
      type: "weakness",
      text: "Noxian ties stain reputation at home.",
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
      id: "sett-weakness-3",
      championId: "sett",
      type: "weakness",
      text: "Temper ends negotiations early.",
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
      id: "sett-weakness-4",
      championId: "sett",
      type: "weakness",
      text: "You avoid asking mom for emotional support.",
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
      id: "sett-conclusion-0",
      championId: "sett",
      type: "conclusion",
      text: "Sett shows strength can bankroll tenderness.",
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
      id: "sett-conclusion-1",
      championId: "sett",
      type: "conclusion",
      text: "Leave pit when show costs soul.",
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
      id: "sett-conclusion-2",
      championId: "sett",
      type: "conclusion",
      text: "Forgive slowly; protect fiercely.",
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
      id: "sett-conclusion-3",
      championId: "sett",
      type: "conclusion",
      text: "Let crew see the son, not only boss.",
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
      id: "sett-conclusion-4",
      championId: "sett",
      type: "conclusion",
      text: "Champion is who you protect, not only who you beat.",
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
