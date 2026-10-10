import type { ChampionNarrativePack } from "../types";

export const kindredPack: ChampionNarrativePack = {
  championId: "kindred",
  loreEventIds: ["kindred_mercy"],
  fragments: [
    {
      id: "kindred-intro-0",
      championId: "kindred",
      type: "introduction",
      text: "Kindred walk every path twice: Lamb's touch, Wolf's chase, one covenant with ending.",
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
      id: "kindred-intro-1",
      championId: "kindred",
      type: "introduction",
      text: "Your answers echo mortality's tension, whether you flee it, greet it, or weigh it for others.",
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
      id: "kindred-intro-2",
      championId: "kindred",
      type: "introduction",
      text: "They are not cruel; they are inevitable made visible, a duality older than any nation.",
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
      id: "kindred-intro-3",
      championId: "kindred",
      type: "introduction",
      text: "To meet Kindred in story is to ask how you live beside the fact of finitude.",
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
      id: "kindred-intro-4",
      championId: "kindred",
      type: "introduction",
      text: "Wolf laughs at denial; Lamb offers gentleness when denial finally breaks.",
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
      id: "kindred-parallel-0",
      championId: "kindred",
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
      loreEventId: "kindred_mercy",
      userInterpretation: "You accept endings as part of love, not betrayal of it.",
      canonicalFact: "Lamb marks those ready to rest; Wolf hunts those who run from their last page.",
      parallelExplanation: "You need not face literal hunters to share the question of acceptance.",
      tags: [
        "parallel-0",
        "mortality",
      ],
    },
    {
      id: "kindred-parallel-1",
      championId: "kindred",
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
      loreEventId: "kindred_mercy",
      userInterpretation: "You offer calm presence when others panic about loss.",
      canonicalFact: "Kindred appear differently to each soul, often shaped by culture and fear.",
      parallelExplanation: "Mercy in your tone can mirror Lamb even without divine form.",
      tags: [
        "parallel-1",
      ],
    },
    {
      id: "kindred-parallel-2",
      championId: "kindred",
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
      loreEventId: "kindred_mercy",
      userInterpretation: "You sometimes chase what you know you cannot keep forever.",
      canonicalFact: "Wolf's run is endless because mortals invent new escapes from truth.",
      parallelExplanation: "Denial is human; his pursuit is myth made flesh.",
      tags: [
        "parallel-2",
      ],
    },
    {
      id: "kindred-parallel-3",
      championId: "kindred",
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
      loreEventId: "kindred_mercy",
      userInterpretation: "Balance between gentleness and firmness guides your hardest conversations.",
      canonicalFact: "Kindred never disagree on the outcome, only on the path taken to reach it.",
      parallelExplanation: "Dual methods, single respect for ending: that tension may live in you.",
      tags: [
        "parallel-3",
      ],
    },
    {
      id: "kindred-parallel-4",
      championId: "kindred",
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
      loreEventId: "kindred_mercy",
      userInterpretation: "You feel destiny as a thread that tightens with age and consequence.",
      canonicalFact: "Every Runeterran legend eventually hears footsteps that match their stride.",
      parallelExplanation: "Awareness of limits can deepen your choices rather than paralyze them.",
      tags: [
        "parallel-4",
      ],
    },
    {
      id: "kindred-parallel-5",
      championId: "kindred",
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
      loreEventId: "kindred_mercy",
      userInterpretation: "Community rituals around loss matter deeply to you.",
      canonicalFact: "Freljord tales teach children Kindred's names so fear becomes familiarity.",
      parallelExplanation: "Story as comfort aligns with Ionian and Freljord wisdom alike.",
      tags: [
        "parallel-5",
      ],
    },
    {
      id: "kindred-parallel-6",
      championId: "kindred",
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
      loreEventId: "kindred_mercy",
      userInterpretation: "You protect the living while honoring what the dead leave behind.",
      canonicalFact: "Kindred do not hate life; they complete its arc.",
      parallelExplanation: "Caretaking beside grief is shared ground without claiming their cosmic role.",
      tags: [
        "parallel-6",
      ],
    },
    {
      id: "kindred-parallel-7",
      championId: "kindred",
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
      loreEventId: "kindred_mercy",
      userInterpretation: "Pragmatism helps you speak plainly about risks others dodge.",
      canonicalFact: "Wolf's honesty is brutal because euphemism wastes the final moments.",
      parallelExplanation: "Clarity is kinship; cruelty is not required.",
      tags: [
        "parallel-7",
      ],
    },
    {
      id: "kindred-parallel-8",
      championId: "kindred",
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
      loreEventId: "kindred_mercy",
      userInterpretation: "You forgive yourself slowly when change feels like small deaths.",
      canonicalFact: "Lamb waits when souls need one more breath to say goodbye.",
      parallelExplanation: "Patience with transition rhymes with her grace, not Wolf's hunger.",
      tags: [
        "parallel-8",
      ],
    },
    {
      id: "kindred-parallel-9",
      championId: "kindred",
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
      loreEventId: "kindred_mercy",
      userInterpretation: "Freedom, to you, includes choosing how you meet unavoidable change.",
      canonicalFact: "Those who accept Lamb's hand walk without being torn.",
      parallelExplanation: "Agency at the threshold is the moral lesson mortals can carry.",
      tags: [
        "parallel-9",
      ],
    },
    {
      id: "kindred-strength-0",
      championId: "kindred",
      type: "strength",
      text: "You normalize conversations others fear, reducing shame around loss.",
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
      id: "kindred-strength-1",
      championId: "kindred",
      type: "strength",
      text: "You hold space for both grief and continuation at once.",
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
      id: "kindred-strength-2",
      championId: "kindred",
      type: "strength",
      text: "You perceive cycles where others see only chaos.",
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
      id: "kindred-strength-3",
      championId: "kindred",
      type: "strength",
      text: "You remain steady when panic would scatter a room.",
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
      id: "kindred-strength-4",
      championId: "kindred",
      type: "strength",
      text: "You translate abstract fate into language people can breathe.",
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
      id: "kindred-weakness-0",
      championId: "kindred",
      type: "weakness",
      text: "Fixating on endings can dim present joy.",
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
      id: "kindred-weakness-1",
      championId: "kindred",
      type: "weakness",
      text: "You may seem distant when others want purely optimistic comfort.",
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
      id: "kindred-weakness-2",
      championId: "kindred",
      type: "weakness",
      text: "Wolf's impatience can echo in you as bluntness that wounds.",
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
      id: "kindred-weakness-3",
      championId: "kindred",
      type: "weakness",
      text: "Acceptance can be mistaken for resignation by hopeful friends.",
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
      id: "kindred-weakness-4",
      championId: "kindred",
      type: "weakness",
      text: "You carry others' fears until your own rest thins.",
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
      id: "kindred-conclusion-0",
      championId: "kindred",
      type: "conclusion",
      text: "Walk with Lamb's patience when someone needs a soft exit from denial.",
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
      id: "kindred-conclusion-1",
      championId: "kindred",
      type: "conclusion",
      text: "Let Wolf's honesty sharpen plans, not relationships.",
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
      id: "kindred-conclusion-2",
      championId: "kindred",
      type: "conclusion",
      text: "Mortality makes moments precious; hoard them actively.",
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
      id: "kindred-conclusion-3",
      championId: "kindred",
      type: "conclusion",
      text: "Teach what you know of endings as invitation, not threat.",
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
      id: "kindred-conclusion-4",
      championId: "kindred",
      type: "conclusion",
      text: "Kindred remind you: how you finish a chapter defines its music.",
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
