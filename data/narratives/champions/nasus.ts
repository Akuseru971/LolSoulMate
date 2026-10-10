import type { ChampionNarrativePack } from "../types";

export const nasusPack: ChampionNarrativePack = {
  championId: "nasus",
  loreEventIds: ["shurima_fall"],
  fragments: [
    {
      id: "nasus-intro-0",
      championId: "nasus",
      type: "introduction",
      text: "Nasus walks desert memory as curator, brother, and reluctant warrior beneath a fallen sun.",
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
      id: "nasus-intro-1",
      championId: "nasus",
      type: "introduction",
      text: "Your pattern suggests duty stretched across centuries, wisdom heavy on shoulders.",
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
      id: "nasus-intro-2",
      championId: "nasus",
      type: "introduction",
      text: "Shurima's collapse scarred him; Renekton's rage scarred them both.",
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
      id: "nasus-intro-3",
      championId: "nasus",
      type: "introduction",
      text: "Knowledge preserved in tomes and choices alike defines his atonement.",
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
      id: "nasus-intro-4",
      championId: "nasus",
      type: "introduction",
      text: "You need not be Ascended to feel responsible for what empire broke.",
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
      id: "nasus-parallel-0",
      championId: "nasus",
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
      loreEventId: "shurima_fall",
      userInterpretation: "You carry guilt for failing someone you loved.",
      canonicalFact: "Nasus sealed Renekton with Azir's crumbling palace, a mercy that became torment.",
      parallelExplanation: "Impossible choice aligns; his scale was mythic.",
      tags: [
        "parallel-0",
        "curator",
      ],
    },
    {
      id: "nasus-parallel-1",
      championId: "nasus",
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
      loreEventId: "shurima_fall",
      userInterpretation: "Discipline channels grief into stewardship.",
      canonicalFact: "He guarded the Great Library before war pulled him frontward.",
      parallelExplanation: "Scholarly duty rhymes.",
      tags: [
        "parallel-1",
      ],
    },
    {
      id: "nasus-parallel-2",
      championId: "nasus",
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
      loreEventId: "shurima_fall",
      userInterpretation: "You prefer teaching to dominating.",
      canonicalFact: "Nasus instructs survivors in Shuriman history and ethics.",
      parallelExplanation: "Pedagogy as power aligns.",
      tags: [
        "parallel-2",
      ],
    },
    {
      id: "nasus-parallel-3",
      championId: "nasus",
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
      loreEventId: "shurima_fall",
      userInterpretation: "Pragmatism accepts ugly solutions to prevent worse.",
      canonicalFact: "He imprisoned his brother to stop immediate slaughter.",
      parallelExplanation: "Tragic tradeoff theme links without repeating his act.",
      tags: [
        "parallel-3",
      ],
    },
    {
      id: "nasus-parallel-4",
      championId: "nasus",
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
      loreEventId: "shurima_fall",
      userInterpretation: "You believe cultures must be remembered accurately.",
      canonicalFact: "He preserves records amid sand that buries truth.",
      parallelExplanation: "Archivist instinct aligns.",
      tags: [
        "parallel-4",
      ],
    },
    {
      id: "nasus-parallel-5",
      championId: "nasus",
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
      loreEventId: "shurima_fall",
      userInterpretation: "Resilience is measured in eras, not days.",
      canonicalFact: "Ascended lifespan forced him to watch Shurima crumble slowly.",
      parallelExplanation: "Long horizon endurance rhymes.",
      tags: [
        "parallel-5",
      ],
    },
    {
      id: "nasus-parallel-6",
      championId: "nasus",
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
      loreEventId: "shurima_fall",
      userInterpretation: "Authority serves continuity, not vanity.",
      canonicalFact: "He rejected petty thrones for custodial role.",
      parallelExplanation: "Servant leader aligns.",
      tags: [
        "parallel-6",
      ],
    },
    {
      id: "nasus-parallel-7",
      championId: "nasus",
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
      loreEventId: "shurima_fall",
      userInterpretation: "You fear rage in yourself or those you love.",
      canonicalFact: "Renekton's fury haunts every decision Nasus makes.",
      parallelExplanation: "Fear of uncontrolled anger links.",
      tags: [
        "parallel-7",
      ],
    },
    {
      id: "nasus-parallel-8",
      championId: "nasus",
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
      loreEventId: "shurima_fall",
      userInterpretation: "Destiny feels like obligation to unfinished repair.",
      canonicalFact: "Shurima's return forces him to confront old oaths.",
      parallelExplanation: "Repair calling aligns.",
      tags: [
        "parallel-8",
      ],
    },
    {
      id: "nasus-parallel-9",
      championId: "nasus",
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
      loreEventId: "shurima_fall",
      userInterpretation: "Justice prefers restoration over spectacle.",
      canonicalFact: "He seeks to heal land before punishing pretenders.",
      parallelExplanation: "Restorative justice rhymes.",
      tags: [
        "parallel-9",
      ],
    },
    {
      id: "nasus-strength-0",
      championId: "nasus",
      type: "strength",
      text: "You think in generations, not news cycles.",
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
      id: "nasus-strength-1",
      championId: "nasus",
      type: "strength",
      text: "You teach patiently under insult.",
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
      id: "nasus-strength-2",
      championId: "nasus",
      type: "strength",
      text: "You choose preservation when rage would be easier.",
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
      id: "nasus-strength-3",
      championId: "nasus",
      type: "strength",
      text: "You navigate family conflict with sorrowful clarity.",
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
      id: "nasus-strength-4",
      championId: "nasus",
      type: "strength",
      text: "You ground ambition in ethics.",
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
      id: "nasus-weakness-0",
      championId: "nasus",
      type: "weakness",
      text: "Guilt slows necessary action.",
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
      id: "nasus-weakness-1",
      championId: "nasus",
      type: "weakness",
      text: "You may romanticize past golden ages.",
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
      id: "nasus-weakness-2",
      championId: "nasus",
      type: "weakness",
      text: "Brother wounds reopen unexpectedly.",
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
      id: "nasus-weakness-3",
      championId: "nasus",
      type: "weakness",
      text: "Detachment looks like coldness.",
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
      id: "nasus-weakness-4",
      championId: "nasus",
      type: "weakness",
      text: "You burden yourself as sole rememberer.",
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
      id: "nasus-conclusion-0",
      championId: "nasus",
      type: "conclusion",
      text: "Nasus asks you to curate mercy along with history.",
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
      id: "nasus-conclusion-1",
      championId: "nasus",
      type: "conclusion",
      text: "Release what cannot be sealed again.",
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
      id: "nasus-conclusion-2",
      championId: "nasus",
      type: "conclusion",
      text: "Teach so fall does not repeat as farce.",
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
      id: "nasus-conclusion-3",
      championId: "nasus",
      type: "conclusion",
      text: "Renekton's rage warns: monitor your own heat.",
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
      id: "nasus-conclusion-4",
      championId: "nasus",
      type: "conclusion",
      text: "Shurima lives in honest memory, not only golden myth.",
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
