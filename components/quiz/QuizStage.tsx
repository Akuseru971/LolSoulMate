"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { QUESTIONS } from "@/data/questions";
import { ConstellationProgress } from "./ConstellationProgress";
import { EchoMark } from "@/components/ornaments/EchoMark";

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
    <div className="relative mx-auto flex min-h-[100svh] w-full max-w-[560px] flex-col px-5 pb-[calc(108px+env(safe-area-inset-bottom))] pt-[max(20px,env(safe-area-inset-top))] sm:justify-center sm:py-10">
      <div
        className="pointer-events-none absolute inset-x-0 top-12 -z-[1] h-[min(70vh,520px)] bg-gradient-to-b from-black/55 via-black/35 to-transparent"
        aria-hidden
      />

      <ConstellationProgress currentIndex={index} answers={answers} />
      <button
        type="button"
        onClick={onBack}
        className="mb-3 inline-flex min-h-[44px] w-fit items-center gap-1 text-sm text-white/60 transition hover:text-white/85"
      >
        <ChevronLeft className="h-4 w-4" /> Previous
      </button>

      <AnimatePresence mode="wait">
        <motion.div
          key={q.id}
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: -10 }}
          transition={{ duration: reduce ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="type-chapter">{q.category}</p>
          <h2 className="type-cinematic-title mt-2 text-[clamp(1.65rem,6.4vw,2.25rem)] leading-tight text-[var(--sor-ivory)] sm:text-3xl">
            {q.text}
          </h2>

          <ul className="mt-6 flex flex-col gap-2.5" role="listbox" aria-label={q.text}>
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
                    className={`group relative w-full rounded-2xl border px-4 py-3.5 text-left text-[15px] leading-snug min-h-[56px] transition-colors duration-200 active:scale-[0.99] ${
                      active
                        ? "border-[var(--sor-gold)]/55 bg-[var(--sor-gold)]/10 text-white shadow-[0_0_20px_rgba(197,164,109,0.12)]"
                        : "border-white/10 bg-black/25 text-white/85 hover:border-[var(--sor-mist)]/35 hover:bg-black/35"
                    }`}
                  >
                    {active && (
                      <EchoMark
                        size={14}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--sor-gold)]/70"
                      />
                    )}
                    <span className="pr-8">{a.text}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            disabled={!selected}
            onClick={onNext}
            className="fixed inset-x-4 bottom-[calc(16px+env(safe-area-inset-bottom))] z-40 mx-auto max-w-[528px] min-h-[56px] rounded-2xl shadow-[0_12px_45px_rgba(0,0,0,.65)] backdrop-blur-xl sm:static sm:mt-8 sm:w-full border border-[var(--sor-gold)]/40 bg-[var(--sor-gold)]/12 py-3.5 text-sm font-medium text-[var(--sor-ivory)] transition hover:bg-[var(--sor-gold)]/18 disabled:opacity-35"
          >
            {index === QUESTIONS.length - 1 ? "Reveal my champion" : "Continue"}
          </button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
