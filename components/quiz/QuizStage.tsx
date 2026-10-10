"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { QUESTIONS } from "@/data/questions";
import { QuizProgress } from "./QuizProgress";

interface QuizStageProps {
  index: number;
  answers: Record<string, string>;
  onSelect: (questionId: string, answerId: string) => void;
  onBack: () => void;
  onNext: () => void;
}

export function QuizStage({
  index,
  answers,
  onSelect,
  onBack,
  onNext,
}: QuizStageProps) {
  const reduce = useReducedMotion();
  const q = QUESTIONS[index];
  const selected = answers[q.id];

  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-8">
      <QuizProgress current={index} total={QUESTIONS.length} />
      <button
        type="button"
        onClick={onBack}
        className="mb-4 inline-flex min-h-[44px] items-center gap-1 text-sm text-white/60 transition hover:text-white/85"
      >
        <ChevronLeft className="h-4 w-4" /> Previous
      </button>

      <AnimatePresence mode="wait">
        <motion.div
          key={q.id}
          initial={reduce ? false : { opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={reduce ? undefined : { opacity: 0, x: -24 }}
          transition={{ duration: 0.35 }}
        >
          <p className="mb-2 text-xs uppercase tracking-widest text-amber-200/60">
            {q.category}
          </p>
          <h2 className="font-serif text-2xl leading-snug text-white sm:text-3xl">
            {q.text}
          </h2>

          <ul className="mt-8 flex flex-col gap-3" role="listbox" aria-label={q.text}>
            {q.answers.map((a) => {
              const active = selected === a.id;
              return (
                <li key={a.id}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={active}
                    onClick={() => onSelect(q.id, a.id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        onSelect(q.id, a.id);
                      }
                    }}
                    className={`w-full rounded-xl border px-4 py-4 text-left text-base transition ${
                      active
                        ? "border-amber-400/70 bg-amber-500/15 text-white shadow-[0_0_24px_rgba(201,162,39,0.15)]"
                        : "border-white/10 bg-white/[0.03] text-white/85 hover:border-amber-200/30 hover:bg-white/[0.06]"
                    }`}
                  >
                    {a.text}
                  </button>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            disabled={!selected}
            onClick={onNext}
            className="mt-8 w-full rounded-full bg-gradient-to-r from-amber-600 to-amber-400 py-3.5 text-sm font-semibold text-black disabled:opacity-40"
          >
            {index === QUESTIONS.length - 1 ? "Reveal my champion" : "Continue"}
          </button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
