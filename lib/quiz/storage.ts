import type { ZodiacSign } from "@/lib/zodiac";

const STORAGE_KEY = "soul-of-runeterra-v1";

export type JourneyStage =
  | "landing"
  | "personal"
  | "quiz"
  | "analyzing"
  | "results";

export interface StoredProgress {
  stage: JourneyStage;
  nickname?: string;
  birthMonth?: number;
  birthDay?: number;
  zodiac?: ZodiacSign;
  personalityKeywords?: string;
  answers: Record<string, string>;
  quizIndex: number;
}

export function loadProgress(): StoredProgress | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as StoredProgress;
  } catch {
    return null;
  }
}

export function saveProgress(data: StoredProgress): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function clearProgress(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}

export function defaultProgress(): StoredProgress {
  return {
    stage: "landing",
    answers: {},
    quizIndex: 0,
  };
}
