"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LandingStage } from "@/components/stages/LandingStage";
import {
  PersonalStage,
  resolveZodiac,
  type PersonalFormState,
} from "@/components/stages/PersonalStage";
import { QuizStage } from "@/components/quiz/QuizStage";
import { AnalyzingStage } from "@/components/stages/AnalyzingStage";
import { ResultsStage } from "@/components/results/ResultsStage";
import { QUESTIONS } from "@/data/questions";
import {
  clearProgress,
  defaultProgress,
  loadProgress,
  saveProgress,
  type JourneyStage,
  type StoredProgress,
} from "@/lib/quiz/storage";
import { computeMatch } from "@/lib/quiz/matchFromProgress";
import type { MatchResult } from "@/lib/matching/engine";
import type { NarrativeResponse } from "@/lib/validation/schemas";
import { composeNarrative } from "@/lib/narrative/composeNarrative";

const emptyForm: PersonalFormState = {
  nickname: "",
  birthMonth: "",
  birthDay: "",
  zodiac: "",
  personalityKeywords: "",
};

export function SoulJourney() {
  const [progress, setProgress] = useState<StoredProgress>(() => defaultProgress());
  const [form, setForm] = useState<PersonalFormState>(emptyForm);
  const [match, setMatch] = useState<MatchResult | null>(null);
  const [narrative, setNarrative] = useState<NarrativeResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const analysisLock = useRef(false);

  useEffect(() => {
    const stored = loadProgress();
    if (!stored) return;
    queueMicrotask(() => {
      setProgress(stored);
      setForm({
        nickname: stored.nickname ?? "",
        birthMonth: stored.birthMonth?.toString() ?? "",
        birthDay: stored.birthDay?.toString() ?? "",
        zodiac: stored.zodiac ?? "",
        personalityKeywords: stored.personalityKeywords ?? "",
      });
    });
  }, []);

  const persist = useCallback((next: StoredProgress) => {
    setProgress(next);
    saveProgress(next);
  }, []);

  const runAnalysis = useCallback(
    (snapshot: StoredProgress) => {
      if (analysisLock.current) return;
      analysisLock.current = true;

      const z = resolveZodiac(form) ?? snapshot.zodiac;
      const result = computeMatch(snapshot.answers, z);
      setMatch(result);

      const answersPayload = QUESTIONS.map((q) => ({
        questionId: q.id,
        answerId: snapshot.answers[q.id] ?? q.answers[0].id,
      }));

      try {
        const { narrative: composed } = composeNarrative({
          match: result,
          answers: answersPayload,
          nickname: form.nickname || snapshot.nickname,
        });
        setNarrative(composed);
      } catch (e) {
        setError(
          e instanceof Error ? e.message : "Unable to compose narrative locally.",
        );
        analysisLock.current = false;
        return;
      }

      persist({ ...snapshot, stage: "results" });
    },
    [form, persist],
  );

  function restart() {
    analysisLock.current = false;
    clearProgress();
    setProgress(defaultProgress());
    setForm(emptyForm);
    setMatch(null);
    setNarrative(null);
    setError(null);
  }

  function startAnalyzing(snapshot: StoredProgress) {
    const analyzing = { ...snapshot, stage: "analyzing" as JourneyStage };
    persist(analyzing);
    runAnalysis(analyzing);
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={progress.stage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {progress.stage === "landing" && (
          <LandingStage onStart={() => persist({ ...progress, stage: "personal" })} />
        )}

        {progress.stage === "personal" && (
          <PersonalStage
            form={form}
            onChange={setForm}
            onContinue={() => {
              const next: StoredProgress = {
                ...progress,
                stage: "quiz",
                nickname: form.nickname || undefined,
                birthMonth: form.birthMonth ? Number(form.birthMonth) : undefined,
                birthDay: form.birthDay ? Number(form.birthDay) : undefined,
                zodiac: resolveZodiac(form),
                personalityKeywords: form.personalityKeywords || undefined,
              };
              persist(next);
            }}
            onSkip={() => persist({ ...progress, stage: "quiz" })}
          />
        )}

        {progress.stage === "quiz" && (
          <QuizStage
            index={progress.quizIndex}
            answers={progress.answers}
            onSelect={(questionId, answerId) => {
              persist({
                ...progress,
                answers: { ...progress.answers, [questionId]: answerId },
              });
            }}
            onBack={() => {
              if (progress.quizIndex === 0) {
                persist({ ...progress, stage: "personal" });
                return;
              }
              persist({ ...progress, quizIndex: progress.quizIndex - 1 });
            }}
            onNext={() => {
              const q = QUESTIONS[progress.quizIndex];
              if (!progress.answers[q.id]) {
                setError("Please choose an answer to continue.");
                return;
              }
              setError(null);
              if (progress.quizIndex >= QUESTIONS.length - 1) {
                startAnalyzing(progress);
                return;
              }
              persist({ ...progress, quizIndex: progress.quizIndex + 1 });
            }}
          />
        )}

        {error && (
          <p className="text-center text-sm text-red-300/90" role="alert">
            {error}
          </p>
        )}

        {progress.stage === "analyzing" && (
          <AnalyzingStage
            onSkipAnimation={() => {
              if (match && narrative) {
                persist({ ...progress, stage: "results" });
              }
            }}
          />
        )}

        {progress.stage === "results" && match && narrative && (
          <ResultsStage match={match} narrative={narrative} onRestart={restart} />
        )}
      </motion.div>
    </AnimatePresence>
  );
}
