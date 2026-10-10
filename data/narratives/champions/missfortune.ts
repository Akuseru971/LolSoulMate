import type { ChampionNarrativePack } from "../types";

export const missfortunePack: ChampionNarrativePack = {
  championId: "missfortune",
  loreEventIds: ["bilgewater_vengeance"],
  fragments: [
    {
      id: "missfortune-intro-0",
      championId: "missfortune",
      type: "introduction",
      text: "Miss Fortune wears red and reputation, captain who turned grief into fleet and flag.",
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
      id: "missfortune-intro-1",
      championId: "missfortune",
      type: "introduction",
      text: "Your pattern mixes charm, calculation, and hunger to rewrite a city's power map.",
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
      id: "missfortune-intro-2",
      championId: "missfortune",
      type: "introduction",
      text: "Bilgewater respects brass; she brought brass and theater both.",
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
      id: "missfortune-intro-3",
      championId: "missfortune",
      type: "introduction",
      text: "Vengeance against Gangplank reshaped docks; pragmatism keeps them.",
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
      id: "missfortune-intro-4",
      championId: "missfortune",
      type: "introduction",
      text: "You need not sail slaughterer's bay to know revenge as business plan.",
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
      id: "missfortune-parallel-0",
      championId: "missfortune",
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
      loreEventId: "bilgewater_vengeance",
      userInterpretation: "You perform confidence while calculating angles.",
      canonicalFact: "Sarah Fortune built persona to dominate Bilgewater politics.",
      parallelExplanation: "Strategic persona aligns; her stage was piracy.",
      tags: [
        "parallel-0",
        "captain",
      ],
    },
    {
      id: "missfortune-parallel-1",
      championId: "missfortune",
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
      loreEventId: "bilgewater_vengeance",
      userInterpretation: "Loss of parent forged appetite for control.",
      canonicalFact: "Gangplank murdered her mother; she rebuilt power to unseat him.",
      parallelExplanation: "Origin grief drives ambition safely scaled.",
      tags: [
        "parallel-1",
      ],
    },
    {
      id: "missfortune-parallel-2",
      championId: "missfortune",
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
      loreEventId: "bilgewater_vengeance",
      userInterpretation: "You leverage charisma as tool, not confession.",
      canonicalFact: "Her pistols and smile negotiate before blood.",
      parallelExplanation: "Social weaponry rhymes.",
      tags: [
        "parallel-2",
      ],
    },
    {
      id: "missfortune-parallel-3",
      championId: "missfortune",
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
      loreEventId: "bilgewater_vengeance",
      userInterpretation: "Pragmatism accepts messy allies.",
      canonicalFact: "She allies with scoundrels when docks require it.",
      parallelExplanation: "Coalition realism aligns.",
      tags: [
        "parallel-3",
      ],
    },
    {
      id: "missfortune-parallel-4",
      championId: "missfortune",
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
      loreEventId: "bilgewater_vengeance",
      userInterpretation: "Freedom means owning your route, not following tide.",
      canonicalFact: "She refused to be trophy pirate princess.",
      parallelExplanation: "Autonomy narrative links.",
      tags: [
        "parallel-4",
      ],
    },
    {
      id: "missfortune-parallel-5",
      championId: "missfortune",
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
      loreEventId: "bilgewater_vengeance",
      userInterpretation: "You fear becoming what you hunt.",
      canonicalFact: "Victory over Gangplank left her ruling with hard edges.",
      parallelExplanation: "Mirror fear is human parallel.",
      tags: [
        "parallel-5",
      ],
    },
    {
      id: "missfortune-parallel-6",
      championId: "missfortune",
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
      loreEventId: "bilgewater_vengeance",
      userInterpretation: "Justice on docks is personal before institutional.",
      canonicalFact: "Bilgewater lacks clean courts; captains enforce.",
      parallelExplanation: "Personal justice theme aligns.",
      tags: [
        "parallel-6",
      ],
    },
    {
      id: "missfortune-parallel-7",
      championId: "missfortune",
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
      loreEventId: "bilgewater_vengeance",
      userInterpretation: "Recognition stabilizes crew loyalty.",
      canonicalFact: "Her flag unites mercenaries under visible success.",
      parallelExplanation: "Merit leadership rhymes.",
      tags: [
        "parallel-7",
      ],
    },
    {
      id: "missfortune-parallel-8",
      championId: "missfortune",
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
      loreEventId: "bilgewater_vengeance",
      userInterpretation: "Hope looks like a harbor where your name means safety.",
      canonicalFact: "She aims to make Bilgewater less random in cruelty.",
      parallelExplanation: "Ordered hope aligns.",
      tags: [
        "parallel-8",
      ],
    },
    {
      id: "missfortune-parallel-9",
      championId: "missfortune",
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
      loreEventId: "bilgewater_vengeance",
      userInterpretation: "You separate public mask from private doubt.",
      canonicalFact: "Few see uncertainty beneath captain's laugh.",
      parallelExplanation: "Masked vulnerability links.",
      tags: [
        "parallel-9",
      ],
    },
    {
      id: "missfortune-strength-0",
      championId: "missfortune",
      type: "strength",
      text: "You rally disparate people quickly.",
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
      id: "missfortune-strength-1",
      championId: "missfortune",
      type: "strength",
      text: "You negotiate under gunfire, literal or metaphorical.",
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
      id: "missfortune-strength-2",
      championId: "missfortune",
      type: "strength",
      text: "You turn trauma into strategic patience.",
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
      id: "missfortune-strength-3",
      championId: "missfortune",
      type: "strength",
      text: "You read rooms and winds equally well.",
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
      id: "missfortune-strength-4",
      championId: "missfortune",
      type: "strength",
      text: "You maintain style without losing edge.",
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
      id: "missfortune-weakness-0",
      championId: "missfortune",
      type: "weakness",
      text: "Revenge can become identity after victory.",
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
      id: "missfortune-weakness-1",
      championId: "missfortune",
      type: "weakness",
      text: "Trust issues linger with allies.",
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
      id: "missfortune-weakness-2",
      championId: "missfortune",
      type: "weakness",
      text: "Performance exhausts inner life.",
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
      id: "missfortune-weakness-3",
      championId: "missfortune",
      type: "weakness",
      text: "Hard edges scare potential friends.",
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
      id: "missfortune-weakness-4",
      championId: "missfortune",
      type: "weakness",
      text: "Control obsession limits delegation.",
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
      id: "missfortune-conclusion-0",
      championId: "missfortune",
      type: "conclusion",
      text: "Miss Fortune says captains must choose what harbor becomes after war.",
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
      id: "missfortune-conclusion-1",
      championId: "missfortune",
      type: "conclusion",
      text: "Let red coat be warning, not wall.",
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
      id: "missfortune-conclusion-2",
      championId: "missfortune",
      type: "conclusion",
      text: "Build institutions, not only personal score.",
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
      id: "missfortune-conclusion-3",
      championId: "missfortune",
      type: "conclusion",
      text: "Grief fueled rise; do not fuel forever.",
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
      id: "missfortune-conclusion-4",
      championId: "missfortune",
      type: "conclusion",
      text: "Bilgewater thrives when brass serves docks, not ego.",
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
