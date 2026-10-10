import type { DimensionWeights } from "@/lib/matching/dimensions";

export interface QuizAnswer {
  id: string;
  text: string;
  weights: DimensionWeights;
}

export interface QuizQuestion {
  id: string;
  category: string;
  text: string;
  answers: QuizAnswer[];
}

export const QUIZ_DURATION_MINUTES = 6;

export const QUESTIONS: QuizQuestion[] = [
  {
    id: "q01",
    category: "Resilience",
    text: "When the world turns against you, what keeps you standing?",
    answers: [
      { id: "a", text: "The people I love.", weights: { loyalty: 0.9, empathy: 0.7, protectiveInstinct: 0.6, socialConnection: 0.18, capacityForSacrifice: 0.12 } },
      { id: "b", text: "The belief that I can change my fate.", weights: { relationshipWithDestiny: 0.85, resilience: 0.7, idealism: 0.55, courage: 0.08 } },
      { id: "c", text: "The desire to prove everyone wrong.", weights: { needForRecognition: 0.85, ambition: 0.7, independence: 0.6, desireForFreedom: 0.21 } },
      { id: "d", text: "The duty I cannot abandon.", weights: { discipline: 0.85, loyalty: 0.75, relationshipWithAuthority: 0.55, courage: 0.19 } },
      { id: "e", text: "The freedom no one can take from me.", weights: { independence: 0.9, impulsivity: 0.45, moralFlexibility: 0.4, desireForFreedom: 0.32 } },
    ],
  },
  {
    id: "q02",
    category: "Fear",
    text: "What is your greatest fear?",
    answers: [
      { id: "a", text: "Losing someone I love.", weights: { empathy: 0.75, protectiveInstinct: 0.8, emotionalSensitivity: 0.65, socialConnection: 0.19, capacityForSacrifice: 0.16 } },
      { id: "b", text: "Becoming powerless.", weights: { desireForPower: 0.85, ambition: 0.6, resilience: 0.5 } },
      { id: "c", text: "Being forgotten.", weights: { needForRecognition: 0.9, emotionalSensitivity: 0.55, idealism: 0.4, courage: 0.06 } },
      { id: "d", text: "Betraying my principles.", weights: { idealism: 0.85, moralFlexibility: 0.2, discipline: 0.6, courage: 0.13 } },
      { id: "e", text: "Never discovering who I truly am.", weights: { independence: 0.7, relationshipWithDestiny: 0.75, emotionalSensitivity: 0.65, desireForFreedom: 0.24 } },
    ],
  },
  {
    id: "q03",
    category: "Power",
    text: "What would you sacrifice for power?",
    answers: [
      { id: "a", text: "Nothing. Power is never worth my humanity.", weights: { idealism: 0.85, moralFlexibility: 0.25, empathy: 0.65, socialConnection: 0.16, courage: 0.13 } },
      { id: "b", text: "My comfort, but never my loved ones.", weights: { loyalty: 0.75, protectiveInstinct: 0.7, pragmatism: 0.45, capacityForSacrifice: 0.14 } },
      { id: "c", text: "Anything necessary to protect others.", weights: { protectiveInstinct: 0.9, pragmatism: 0.65, moralFlexibility: 0.55, capacityForSacrifice: 0.18 } },
      { id: "d", text: "Everything, if my purpose demanded it.", weights: { ambition: 0.8, discipline: 0.7, relationshipWithDestiny: 0.65 } },
      { id: "e", text: "I would rather walk away from power.", weights: { independence: 0.75, idealism: 0.6, moralFlexibility: 0.35, desireForFreedom: 0.26, courage: 0.09 } },
    ],
  },
  {
    id: "q04",
    category: "Moral principles",
    text: "When justice and mercy collide, you tend to…",
    answers: [
      { id: "a", text: "Choose mercy, even when it is risky.", weights: { empathy: 0.85, idealism: 0.7, moralFlexibility: 0.45, socialConnection: 0.21, courage: 0.11 } },
      { id: "b", text: "Follow the rule, because order protects everyone.", weights: { discipline: 0.85, pragmatism: 0.6, desireForPower: 0.55 } },
      { id: "c", text: "Weigh outcomes and pick the lesser harm.", weights: { pragmatism: 0.9, moralFlexibility: 0.65, relationshipWithAuthority: 0.5, courage: 0.18 } },
      { id: "d", text: "Trust your instincts in the moment.", weights: { impulsivity: 0.75, independence: 0.65, resilience: 0.55, desireForFreedom: 0.23 } },
      { id: "e", text: "Ask who will suffer most if you choose wrong.", weights: { empathy: 0.8, protectiveInstinct: 0.75, emotionalSensitivity: 0.6, socialConnection: 0.2, capacityForSacrifice: 0.15 } },
    ],
  },
  {
    id: "q05",
    category: "Loyalty",
    text: "A close ally commits an unforgivable act. You…",
    answers: [
      { id: "a", text: "Stand by them and seek the full truth first.", weights: { loyalty: 0.85, empathy: 0.65, emotionalSensitivity: 0.55, socialConnection: 0.16 } },
      { id: "b", text: "Cut ties immediately to protect your honor.", weights: { discipline: 0.75, idealism: 0.7, independence: 0.6, desireForFreedom: 0.21, courage: 0.11 } },
      { id: "c", text: "Help them atone if they are willing to change.", weights: { idealism: 0.75, empathy: 0.7, resilience: 0.55, socialConnection: 0.18, courage: 0.11 } },
      { id: "d", text: "Use the situation strategically.", weights: { pragmatism: 0.85, moralFlexibility: 0.7, ambition: 0.55 } },
      { id: "e", text: "Confront them alone, face to face.", weights: { independence: 0.7, impulsivity: 0.55, resilience: 0.65, relationshipWithAuthority: 0.45, courage: 0.16, desireForFreedom: 0.24 } },
    ],
  },
  {
    id: "q06",
    category: "Ambition",
    text: "What drives your ambition most?",
    answers: [
      { id: "a", text: "Building something that outlasts me.", weights: { relationshipWithDestiny: 0.75, relationshipWithAuthority: 0.7, idealism: 0.55, courage: 0.33 } },
      { id: "b", text: "Proving I was underestimated.", weights: { needForRecognition: 0.9, resilience: 0.65, ambition: 0.75 } },
      { id: "c", text: "Protecting people who cannot protect themselves.", weights: { protectiveInstinct: 0.9, empathy: 0.7, loyalty: 0.55, socialConnection: 0.18, capacityForSacrifice: 0.18 } },
      { id: "d", text: "Mastering my craft until I am unmatched.", weights: { discipline: 0.85, independence: 0.65, ambition: 0.7, desireForFreedom: 0.23 } },
      { id: "e", text: "Freedom from anyone's control.", weights: { independence: 0.9, impulsivity: 0.5, moralFlexibility: 0.45, desireForFreedom: 0.32 } },
    ],
  },
  {
    id: "q07",
    category: "Betrayal",
    text: "After betrayal, your heart usually…",
    answers: [
      { id: "a", text: "Hardens, but you still care deeply.", weights: { resilience: 0.75, emotionalSensitivity: 0.55, loyalty: 0.5 } },
      { id: "b", text: "Seeks balance and long-term reckoning.", weights: { discipline: 0.7, pragmatism: 0.65, desireForPower: 0.6 } },
      { id: "c", text: "Burns hot—you need to act now.", weights: { impulsivity: 0.85, emotionalSensitivity: 0.65, independence: 0.55, desireForFreedom: 0.19 } },
      { id: "d", text: "Turns inward to rebuild yourself.", weights: { independence: 0.75, resilience: 0.8, emotionalSensitivity: 0.45, desireForFreedom: 0.26 } },
      { id: "e", text: "Forgives, if the apology is genuine.", weights: { empathy: 0.8, idealism: 0.65, moralFlexibility: 0.5, socialConnection: 0.2, courage: 0.1 } },
    ],
  },
  {
    id: "q08",
    category: "Sacrifice",
    text: "You are asked to give up your dream for someone else's survival.",
    answers: [
      { id: "a", text: "You do it without hesitation.", weights: { protectiveInstinct: 0.9, empathy: 0.75, loyalty: 0.65, socialConnection: 0.19, capacityForSacrifice: 0.18 } },
      { id: "b", text: "You negotiate another path.", weights: { pragmatism: 0.8, relationshipWithAuthority: 0.6, discipline: 0.55, courage: 0.21 } },
      { id: "c", text: "You refuse—your dream is part of who you are.", weights: { independence: 0.85, ambition: 0.65, idealism: 0.5, desireForFreedom: 0.3, courage: 0.08 } },
      { id: "d", text: "You sacrifice partially, keeping a piece of yourself.", weights: { resilience: 0.7, moralFlexibility: 0.55, pragmatism: 0.55 } },
      { id: "e", text: "You find a way to save both, or die trying.", weights: { idealism: 0.8, resilience: 0.75, relationshipWithDestiny: 0.6, courage: 0.12 } },
    ],
  },
  {
    id: "q09",
    category: "Love and attachment",
    text: "In love, you fear most that you will…",
    answers: [
      { id: "a", text: "Fail to protect the other person.", weights: { protectiveInstinct: 0.85, empathy: 0.7, loyalty: 0.6, socialConnection: 0.18, capacityForSacrifice: 0.17 } },
      { id: "b", text: "Lose yourself completely.", weights: { independence: 0.8, desireForPower: 0.55, emotionalSensitivity: 0.5, desireForFreedom: 0.28 } },
      { id: "c", text: "Be abandoned when they see your flaws.", weights: { emotionalSensitivity: 0.75, needForRecognition: 0.5, resilience: 0.55 } },
      { id: "d", text: "Choose duty over them.", weights: { discipline: 0.75, loyalty: 0.65, relationshipWithAuthority: 0.55, courage: 0.19 } },
      { id: "e", text: "Never be fully understood.", weights: { emotionalSensitivity: 0.8, idealism: 0.55, relationshipWithDestiny: 0.5, courage: 0.08 } },
    ],
  },
  {
    id: "q10",
    category: "Leadership",
    text: "When others look to you to lead, you feel…",
    answers: [
      { id: "a", text: "Responsible—leadership is a burden you accept.", weights: { relationshipWithAuthority: 0.85, discipline: 0.65, empathy: 0.55, courage: 0.3, socialConnection: 0.14 } },
      { id: "b", text: "Reluctant, but you step up when needed.", weights: { resilience: 0.7, protectiveInstinct: 0.65, idealism: 0.55, capacityForSacrifice: 0.13, courage: 0.08 } },
      { id: "c", text: "Energized—you were born for this.", weights: { ambition: 0.75, needForRecognition: 0.7, relationshipWithAuthority: 0.8, courage: 0.28 } },
      { id: "d", text: "Suspicious—power corrupts too easily.", weights: { independence: 0.75, moralFlexibility: 0.45, pragmatism: 0.6, desireForFreedom: 0.26 } },
      { id: "e", text: "Unworthy, even if you perform well.", weights: { emotionalSensitivity: 0.65, idealism: 0.55, discipline: 0.55, courage: 0.08 } },
    ],
  },
  {
    id: "q11",
    category: "Responsibility",
    text: "Power, to you, is mostly…",
    answers: [
      { id: "a", text: "A tool to shield the vulnerable.", weights: { protectiveInstinct: 0.85, idealism: 0.65, empathy: 0.6, socialConnection: 0.15, capacityForSacrifice: 0.17, courage: 0.1 } },
      { id: "b", text: "Proof of what you have earned.", weights: { ambition: 0.8, needForRecognition: 0.75, discipline: 0.55 } },
      { id: "c", text: "A chain that binds you to others' expectations.", weights: { loyalty: 0.7, relationshipWithDestiny: 0.65, resilience: 0.55 } },
      { id: "d", text: "Something to analyze and control carefully.", weights: { desireForPower: 0.85, pragmatism: 0.75, discipline: 0.65 } },
      { id: "e", text: "A temptation you would rather avoid.", weights: { moralFlexibility: 0.35, independence: 0.65, idealism: 0.55, desireForFreedom: 0.23, courage: 0.08 } },
    ],
  },
  {
    id: "q12",
    category: "Solitude",
    text: "Alone at night, you usually…",
    answers: [
      { id: "a", text: "Replay conversations and wonder if you failed anyone.", weights: { empathy: 0.75, emotionalSensitivity: 0.7, loyalty: 0.55, socialConnection: 0.19 } },
      { id: "b", text: "Plan the next move with cold clarity.", weights: { pragmatism: 0.8, discipline: 0.7, desireForPower: 0.6 } },
      { id: "c", text: "Feel restless until you create or destroy something.", weights: { impulsivity: 0.75, needForRecognition: 0.6, independence: 0.6, desireForFreedom: 0.21 } },
      { id: "d", text: "Find peace—you recharge in silence.", weights: { independence: 0.7, resilience: 0.65, emotionalSensitivity: 0.4, desireForFreedom: 0.24 } },
      { id: "e", text: "Reach out to someone, even briefly.", weights: { emotionalSensitivity: 0.8, empathy: 0.65, loyalty: 0.5, socialConnection: 0.16 } },
    ],
  },
  {
    id: "q13",
    category: "Conflict",
    text: "In conflict, your first instinct is to…",
    answers: [
      { id: "a", text: "De-escalate and listen.", weights: { empathy: 0.85, emotionalSensitivity: 0.65, discipline: 0.5, socialConnection: 0.21 } },
      { id: "b", text: "Strike first if threatened.", weights: { impulsivity: 0.8, resilience: 0.6, protectiveInstinct: 0.55, capacityForSacrifice: 0.11 } },
      { id: "c", text: "Set boundaries with absolute clarity.", weights: { discipline: 0.8, desireForPower: 0.65, independence: 0.55, desireForFreedom: 0.19 } },
      { id: "d", text: "Outthink the other side.", weights: { pragmatism: 0.85, relationshipWithAuthority: 0.55, moralFlexibility: 0.5, courage: 0.19 } },
      { id: "e", text: "Take the hit to protect someone else.", weights: { protectiveInstinct: 0.9, loyalty: 0.75, idealism: 0.55, capacityForSacrifice: 0.18, courage: 0.08 } },
    ],
  },
  {
    id: "q14",
    category: "Justice vs revenge",
    text: "Someone hurts your community. You want…",
    answers: [
      { id: "a", text: "Fair justice, even if it takes time.", weights: { idealism: 0.75, discipline: 0.65, pragmatism: 0.5, courage: 0.11 } },
      { id: "b", text: "Immediate payback—they should feel what you felt.", weights: { impulsivity: 0.8, emotionalSensitivity: 0.6, moralFlexibility: 0.6 } },
      { id: "c", text: "A system that prevents this from happening again.", weights: { relationshipWithAuthority: 0.75, pragmatism: 0.7, desireForPower: 0.55, courage: 0.26 } },
      { id: "d", text: "To heal the wounded before punishing anyone.", weights: { empathy: 0.85, protectiveInstinct: 0.7, idealism: 0.55, socialConnection: 0.21, capacityForSacrifice: 0.14, courage: 0.08 } },
      { id: "e", text: "To walk away—you won't let hate own you.", weights: { independence: 0.75, resilience: 0.7, moralFlexibility: 0.45, desireForFreedom: 0.26 } },
    ],
  },
  {
    id: "q15",
    category: "Freedom",
    text: "Freedom means…",
    answers: [
      { id: "a", text: "Choosing your own path, no matter the cost.", weights: { independence: 0.9, impulsivity: 0.45, ambition: 0.55, desireForFreedom: 0.32 } },
      { id: "b", text: "Safety for the people you love.", weights: { protectiveInstinct: 0.85, loyalty: 0.7, empathy: 0.6, socialConnection: 0.15, capacityForSacrifice: 0.17 } },
      { id: "c", text: "Knowing exactly who you are.", weights: { discipline: 0.65, relationshipWithDestiny: 0.7, emotionalSensitivity: 0.55 } },
      { id: "d", text: "Breaking rules that crush the innocent.", weights: { idealism: 0.75, moralFlexibility: 0.55, impulsivity: 0.5, courage: 0.11 } },
      { id: "e", text: "Being seen and accepted as you are.", weights: { needForRecognition: 0.8, emotionalSensitivity: 0.75, empathy: 0.55, socialConnection: 0.14 } },
    ],
  },
  {
    id: "q16",
    category: "Trust",
    text: "Trust, for you, is…",
    answers: [
      { id: "a", text: "Earned slowly, lost in an instant.", weights: { discipline: 0.7, desireForPower: 0.65, resilience: 0.55 } },
      { id: "b", text: "Given freely until someone proves otherwise.", weights: { empathy: 0.75, emotionalSensitivity: 0.8, idealism: 0.55, socialConnection: 0.19, courage: 0.08 } },
      { id: "c", text: "A risk you take because isolation hurts more.", weights: { emotionalSensitivity: 0.7, loyalty: 0.65, independence: 0.45, desireForFreedom: 0.16 } },
      { id: "d", text: "A tactical choice in each situation.", weights: { pragmatism: 0.85, moralFlexibility: 0.6, relationshipWithAuthority: 0.5, courage: 0.18 } },
      { id: "e", text: "Sacred—breaking it changes who you are.", weights: { idealism: 0.8, loyalty: 0.75, moralFlexibility: 0.3, courage: 0.12 } },
    ],
  },
  {
    id: "q17",
    category: "Identity",
    text: "The story you tell about yourself emphasizes…",
    answers: [
      { id: "a", text: "Who you protect.", weights: { protectiveInstinct: 0.85, loyalty: 0.7, empathy: 0.6, socialConnection: 0.15, capacityForSacrifice: 0.17 } },
      { id: "b", text: "What you survived.", weights: { resilience: 0.85, independence: 0.6, emotionalSensitivity: 0.5, desireForFreedom: 0.21 } },
      { id: "c", text: "What you will become.", weights: { ambition: 0.8, relationshipWithDestiny: 0.75, idealism: 0.55, courage: 0.08 } },
      { id: "d", text: "What you refuse to become.", weights: { discipline: 0.7, moralFlexibility: 0.35, idealism: 0.65, courage: 0.1 } },
      { id: "e", text: "The mask you wear in public.", weights: { needForRecognition: 0.7, emotionalSensitivity: 0.45, moralFlexibility: 0.55 } },
    ],
  },
  {
    id: "q18",
    category: "Destiny",
    text: "When you think about destiny, you believe…",
    answers: [
      { id: "a", text: "It calls certain souls—and you hear it.", weights: { relationshipWithDestiny: 0.9, idealism: 0.65, relationshipWithAuthority: 0.55, courage: 0.29 } },
      { id: "b", text: "It is mostly what we choose, again and again.", weights: { independence: 0.75, pragmatism: 0.65, resilience: 0.6, desireForFreedom: 0.26 } },
      { id: "c", text: "It is cruel, but you can defy it.", weights: { resilience: 0.8, impulsivity: 0.55, independence: 0.65, desireForFreedom: 0.23 } },
      { id: "d", text: "It is a story people tell to endure chaos.", weights: { pragmatism: 0.75, moralFlexibility: 0.55, emotionalSensitivity: 0.45 } },
      { id: "e", text: "It ties you to people across time.", weights: { loyalty: 0.7, relationshipWithDestiny: 0.75, empathy: 0.55, socialConnection: 0.14 } },
    ],
  },
  {
    id: "q19",
    category: "Hope",
    text: "Hope, in dark times, looks like…",
    answers: [
      { id: "a", text: "Small kindnesses that refuse to die.", weights: { empathy: 0.85, idealism: 0.75, emotionalSensitivity: 0.65, socialConnection: 0.21, courage: 0.11 } },
      { id: "b", text: "A plan that might actually work.", weights: { pragmatism: 0.8, discipline: 0.65, relationshipWithAuthority: 0.55, courage: 0.19 } },
      { id: "c", text: "Your own stubborn refusal to quit.", weights: { resilience: 0.9, independence: 0.65, ambition: 0.5, desireForFreedom: 0.23 } },
      { id: "d", text: "Revenge turned into purpose.", weights: { ambition: 0.7, impulsivity: 0.55, needForRecognition: 0.55 } },
      { id: "e", text: "Faith in something larger than yourself.", weights: { relationshipWithDestiny: 0.8, idealism: 0.7, discipline: 0.5, courage: 0.11 } },
    ],
  },
  {
    id: "q20",
    category: "Legacy",
    text: "The legacy you want to leave is…",
    answers: [
      { id: "a", text: "That you kept people safe.", weights: { protectiveInstinct: 0.9, empathy: 0.7, loyalty: 0.65, socialConnection: 0.18, capacityForSacrifice: 0.18 } },
      { id: "b", text: "That you changed the world’s direction.", weights: { ambition: 0.85, relationshipWithAuthority: 0.75, relationshipWithDestiny: 0.6, courage: 0.26 } },
      { id: "c", text: "That you stayed true when it cost everything.", weights: { idealism: 0.85, discipline: 0.7, moralFlexibility: 0.3, courage: 0.13 } },
      { id: "d", text: "That you inspired others to rise.", weights: { relationshipWithAuthority: 0.8, needForRecognition: 0.65, idealism: 0.6, courage: 0.37 } },
      { id: "e", text: "That you finally understood yourself.", weights: { emotionalSensitivity: 0.8, independence: 0.65, relationshipWithDestiny: 0.55, desireForFreedom: 0.23 } },
    ],
  },
];

export function getQuestionById(id: string): QuizQuestion | undefined {
  return QUESTIONS.find((q) => q.id === id);
}

export function getAnswerLabel(questionId: string, answerId: string): string {
  const q = getQuestionById(questionId);
  const a = q?.answers.find((ans) => ans.id === answerId);
  return a?.text ?? answerId;
}
