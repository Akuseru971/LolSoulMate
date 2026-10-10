import type { ChampionNarrativePack } from "../types";

export const morganaPack: ChampionNarrativePack = {
  championId: "morgana",
  loreEventIds: ["targon_ascent"],
  fragments: [
    {
      id: "morgana-intro-0",
      championId: "morgana",
      type: "introduction",
      text: "Morgana chose fallen wings and doubted crowns, power spent on shielding the broken.",
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
      id: "morgana-intro-1",
      championId: "morgana",
      type: "introduction",
      text: "Your pattern carries empathy for outcasts and skepticism toward glittering authority.",
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
      id: "morgana-intro-2",
      championId: "morgana",
      type: "introduction",
      text: "She rejected Aspect ascension to walk among mortals who fear the sky.",
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
      id: "morgana-intro-3",
      championId: "morgana",
      type: "introduction",
      text: "Pain taught her mercy; betrayal taught her boundaries.",
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
      id: "morgana-intro-4",
      championId: "morgana",
      type: "introduction",
      text: "You need not be immortal to know love that looks like defiance.",
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
      id: "morgana-parallel-0",
      championId: "morgana",
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
      loreEventId: "targon_ascent",
      userInterpretation: "You distrust power that demands worship.",
      canonicalFact: "Morgana broke from Kayle's celestial crusade.",
      parallelExplanation: "Anti-idolatry aligns; her break was cosmic.",
      tags: [
        "parallel-0",
        "fallen",
      ],
    },
    {
      id: "morgana-parallel-1",
      championId: "morgana",
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
      loreEventId: "targon_ascent",
      userInterpretation: "You shelter those punished for difference.",
      canonicalFact: "She protects mages and exiles across Demacia and beyond.",
      parallelExplanation: "Sanctuary giver rhymes.",
      tags: [
        "parallel-1",
      ],
    },
    {
      id: "morgana-parallel-2",
      championId: "morgana",
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
      loreEventId: "targon_ascent",
      userInterpretation: "Sacrifice of comfort for others feels natural.",
      canonicalFact: "She endured mortal pain willingly to stay near sufferers.",
      parallelExplanation: "Embodied empathy aligns.",
      tags: [
        "parallel-2",
      ],
    },
    {
      id: "morgana-parallel-3",
      championId: "morgana",
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
      loreEventId: "targon_ascent",
      userInterpretation: "Anger at injustice simmers long.",
      canonicalFact: "Her grudge against Kayle spans centuries.",
      parallelExplanation: "Long grievance is cautionary parallel.",
      tags: [
        "parallel-3",
      ],
    },
    {
      id: "morgana-parallel-4",
      championId: "morgana",
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
      loreEventId: "targon_ascent",
      userInterpretation: "Freedom means choosing pain over hollow perfection.",
      canonicalFact: "She kept broken wings rather than pristine ascension.",
      parallelExplanation: "Authentic suffering over false glory aligns.",
      tags: [
        "parallel-4",
      ],
    },
    {
      id: "morgana-parallel-5",
      championId: "morgana",
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
      loreEventId: "targon_ascent",
      userInterpretation: "You teach boundaries alongside mercy.",
      canonicalFact: "Morgana's chains bind tyrants, not only comfort victims.",
      parallelExplanation: "Boundaried mercy links.",
      tags: [
        "parallel-5",
      ],
    },
    {
      id: "morgana-parallel-6",
      championId: "morgana",
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
      loreEventId: "targon_ascent",
      userInterpretation: "Faith is questioned, not copied.",
      canonicalFact: "She rejects Targon dogma that ignores mortal frailty.",
      parallelExplanation: "Critical spirituality rhymes.",
      tags: [
        "parallel-6",
      ],
    },
    {
      id: "morgana-parallel-7",
      championId: "morgana",
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
      loreEventId: "targon_ascent",
      userInterpretation: "You forgive individuals slower than systems.",
      canonicalFact: "Kayle represents system; mortals receive softer grace.",
      parallelExplanation: "Selective forgiveness aligns.",
      tags: [
        "parallel-7",
      ],
    },
    {
      id: "morgana-parallel-8",
      championId: "morgana",
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
      loreEventId: "targon_ascent",
      userInterpretation: "Legacy is refuge, not throne.",
      canonicalFact: "Outcasts whisper her name like shelter.",
      parallelExplanation: "Refuge legacy aligns.",
      tags: [
        "parallel-8",
      ],
    },
    {
      id: "morgana-parallel-9",
      championId: "morgana",
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
      loreEventId: "targon_ascent",
      userInterpretation: "Hope looks like dark wings spread over the accused.",
      canonicalFact: "She appears when mages face execution.",
      parallelExplanation: "Protective hope rhymes.",
      tags: [
        "parallel-9",
      ],
    },
    {
      id: "morgana-strength-0",
      championId: "morgana",
      type: "strength",
      text: "You offer sanctuary without condescension.",
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
      id: "morgana-strength-1",
      championId: "morgana",
      type: "strength",
      text: "You challenge cruel law with moral clarity.",
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
      id: "morgana-strength-2",
      championId: "morgana",
      type: "strength",
      text: "You endure pain to remain relatable.",
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
      id: "morgana-strength-3",
      championId: "morgana",
      type: "strength",
      text: "You bind abusers while healing victims.",
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
      id: "morgana-strength-4",
      championId: "morgana",
      type: "strength",
      text: "You articulate doubt that strengthens ethics.",
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
      id: "morgana-weakness-0",
      championId: "morgana",
      type: "weakness",
      text: "Bitterness toward institutions can spill onto individuals.",
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
      id: "morgana-weakness-1",
      championId: "morgana",
      type: "weakness",
      text: "You carry others' trauma without enough rest.",
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
      id: "morgana-weakness-2",
      championId: "morgana",
      type: "weakness",
      text: "Isolation from sisterhood aches.",
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
      id: "morgana-weakness-3",
      championId: "morgana",
      type: "weakness",
      text: "Dark aesthetic hides need for joy.",
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
      id: "morgana-weakness-4",
      championId: "morgana",
      type: "weakness",
      text: "Martyrdom tempts when boundaries slip.",
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
      id: "morgana-conclusion-0",
      championId: "morgana",
      type: "conclusion",
      text: "Morgana says mercy without boundaries becomes self-erasure.",
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
      id: "morgana-conclusion-1",
      championId: "morgana",
      type: "conclusion",
      text: "Question crowns, keep hands open.",
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
      id: "morgana-conclusion-2",
      championId: "morgana",
      type: "conclusion",
      text: "Let fallen wings still lift someone.",
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
      id: "morgana-conclusion-3",
      championId: "morgana",
      type: "conclusion",
      text: "Forgive where safe; fight where not.",
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
      id: "morgana-conclusion-4",
      championId: "morgana",
      type: "conclusion",
      text: "Your doubt can be holy, not only heresy.",
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
