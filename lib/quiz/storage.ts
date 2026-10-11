import type { ZodiacSign } from "@/lib/zodiac";
import { CONTENT_VERSION, STORAGE_SCHEMA_VERSION } from "@/lib/config/versions";
import { QUESTIONS } from "@/data/questions";

const STORAGE_KEY = "soul-of-runeterra-v2";

export type JourneyStage =
  | "landing"
  | "personal"
  | "quiz"
  | "analyzing"
  | "results";

export interface StoredProgress {
  schemaVersion: number;
  contentVersion: number;
  stage: JourneyStage;
  nickname?: string;
  birthMonth?: number;
  birthDay?: number;
  zodiac?: ZodiacSign;
  personalityKeywords?: string;
  answers: Record<string, string>;
  quizIndex: number;
  /** Reveal currently displayed, restored after page refresh. */
  pendingCheckpoint?: 5 | 10 | 15;
  /** Cached primary champion for quick restore validation */
  resultChampionId?: string;
}

export interface LoadProgressResult {
  data: StoredProgress | null;
  error: "corrupt" | "incompatible" | "incomplete" | null;
}

export function defaultProgress(): StoredProgress {
  return {
    schemaVersion: STORAGE_SCHEMA_VERSION,
    contentVersion: CONTENT_VERSION,
    stage: "landing",
    answers: {},
    quizIndex: 0,
  };
}

function migrateV1(raw: Record<string, unknown>): StoredProgress | null {
  if (!raw || typeof raw !== "object") return null;
  const stage = raw.stage as JourneyStage;
  if (!stage) return null;
  return {
    schemaVersion: STORAGE_SCHEMA_VERSION,
    contentVersion: 1,
    stage,
    nickname: raw.nickname as string | undefined,
    birthMonth: raw.birthMonth as number | undefined,
    birthDay: raw.birthDay as number | undefined,
    zodiac: raw.zodiac as ZodiacSign | undefined,
    personalityKeywords: raw.personalityKeywords as string | undefined,
    answers: (raw.answers as Record<string, string>) ?? {},
    quizIndex: typeof raw.quizIndex === "number" ? raw.quizIndex : 0,
  };
}

export function isQuizComplete(answers: Record<string, string>): boolean {
  return QUESTIONS.every((q) => {
    const id = answers[q.id];
    return Boolean(id && q.answers.some((a) => a.id === id));
  });
}

export function validateStoredProgress(data: StoredProgress): LoadProgressResult["error"] {
  if (data.schemaVersion > STORAGE_SCHEMA_VERSION) return "incompatible";
  const validStages: JourneyStage[] = [
    "landing",
    "personal",
    "quiz",
    "analyzing",
    "results",
  ];
  if (!validStages.includes(data.stage)) return "corrupt";
  if (!Number.isInteger(data.quizIndex) || data.quizIndex < 0 || data.quizIndex >= QUESTIONS.length) return "corrupt";
  if (data.pendingCheckpoint !== undefined && (![5, 10, 15].includes(data.pendingCheckpoint) || data.stage !== "quiz" || data.quizIndex !== data.pendingCheckpoint - 1 || !QUESTIONS.slice(0, data.pendingCheckpoint).every(q => q.answers.some(a => a.id === data.answers[q.id])))) return "corrupt";
  if (data.stage === "results" && !isQuizComplete(data.answers)) return "incomplete";
  if (data.stage === "analyzing" && !isQuizComplete(data.answers)) return "incomplete";
  return null;
}

export function loadProgress(): LoadProgressResult {
  if (typeof window === "undefined") return { data: null, error: null };
  try {
    let raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      raw = localStorage.getItem("soul-of-runeterra-v1");
      if (raw) {
        const migrated = migrateV1(JSON.parse(raw) as Record<string, unknown>);
        if (migrated) {
          saveProgress(migrated);
          localStorage.removeItem("soul-of-runeterra-v1");
          const err = validateStoredProgress(migrated);
          return { data: err ? null : migrated, error: err };
        }
      }
      return { data: null, error: null };
    }
    const parsed = JSON.parse(raw) as StoredProgress;
    if (!parsed.schemaVersion) {
      const migrated = migrateV1(parsed as unknown as Record<string, unknown>);
      if (!migrated) return { data: null, error: "corrupt" };
      saveProgress(migrated);
      const err = validateStoredProgress(migrated);
      return { data: err ? null : migrated, error: err };
    }
    const err = validateStoredProgress(parsed);
    if (err) return { data: null, error: err };
    return { data: parsed, error: null };
  } catch {
    return { data: null, error: "corrupt" };
  }
}

export function saveProgress(data: StoredProgress): void {
  if (typeof window === "undefined") return;
  const payload: StoredProgress = {
    ...data,
    schemaVersion: STORAGE_SCHEMA_VERSION,
    contentVersion: data.contentVersion ?? STORAGE_SCHEMA_VERSION,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

export function clearProgress(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem("soul-of-runeterra-v1");
}
