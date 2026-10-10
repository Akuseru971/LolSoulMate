"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { en } from "@/lib/i18n/en";
import type { ChampionProfile } from "@/data/champions/types";

const step = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

export function ChampionReveal({
  champion,
  compatibility,
  oneLiner,
  revealComplete,
  onRevealComplete,
  onSkip,
  onReadStory,
  onOpenStudio,
}: {
  champion: ChampionProfile;
  compatibility: number;
  oneLiner: string;
  revealComplete: boolean;
  onRevealComplete: () => void;
  onSkip: () => void;
  onReadStory: () => void;
  onOpenStudio: () => void;
}) {
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState(() => (reduce ? 4 : 0));

  useEffect(() => {
    if (reduce || revealComplete) return;
    const timers = [
      setTimeout(() => setPhase(1), 120),
      setTimeout(() => setPhase(2), 520),
      setTimeout(() => setPhase(3), 900),
      setTimeout(() => setPhase(4), 1300),
    ];
    return () => timers.forEach(clearTimeout);
  }, [reduce, revealComplete]);

  useEffect(() => {
    if (phase >= 4 || revealComplete) {
      onRevealComplete();
    }
  }, [phase, revealComplete, onRevealComplete]);

  function skipAll() {
    setPhase(4);
    onSkip();
  }

  const show = (min: number) => revealComplete || phase >= min;

  return (
    <header className="relative -mx-4 mb-10 sm:mx-0">
      <div className="relative min-h-[min(78dvh,640px)] w-full overflow-hidden sm:min-h-[520px] sm:rounded-sm">
        <div className="absolute inset-0 bg-[#050608]" />
        <motion.div
          initial={false}
          animate={{ opacity: show(1) ? 1 : 0 }}
          transition={{ duration: revealComplete ? 0 : 0.6 }}
          className="absolute inset-0"
        >
          <Image
            src={champion.imageUrl}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_12%] sm:object-top"
            unoptimized
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-[#050608]/55 to-[#050608]/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050608]/40 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 px-5 pb-8 pt-24 sm:px-6">
          <motion.p
            initial={false}
            animate={show(2) ? step.show : step.hidden}
            className="text-[11px] uppercase tracking-[0.32em] text-amber-200/80"
          >
            {en.results.revealKicker}
          </motion.p>
          <motion.h2
            initial={false}
            animate={show(2) ? step.show : step.hidden}
            className="mt-2 font-serif text-[2.5rem] leading-none text-white sm:text-5xl"
          >
            {champion.name}
          </motion.h2>
          <motion.p
            initial={false}
            animate={show(2) ? step.show : step.hidden}
            className="mt-2 text-sm text-white/55"
          >
            {champion.region} · {champion.title}
          </motion.p>
          <motion.p
            initial={false}
            animate={show(3) ? step.show : step.hidden}
            className="mt-5 max-w-md font-serif text-lg leading-relaxed text-amber-50/95"
          >
            {oneLiner}
          </motion.p>
          <motion.p
            initial={false}
            animate={show(3) ? step.show : step.hidden}
            className="mt-3 text-sm text-white/40"
          >
            {en.results.compatibilityLabel}{" "}
            <span className="font-serif text-amber-200/90">{compatibility}%</span>
          </motion.p>

          {show(4) && (
            <motion.div
              initial={revealComplete ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <button
                type="button"
                onClick={onReadStory}
                className="min-h-[44px] border-b border-amber-400/45 pb-1 text-left font-serif text-amber-100"
              >
                Read your story
              </button>
              <button
                type="button"
                onClick={onOpenStudio}
                className="min-h-[44px] text-sm text-white/50 underline-offset-2 hover:text-white/75 hover:underline"
              >
                Save your portrait
              </button>
            </motion.div>
          )}
        </div>

        {!revealComplete && phase < 4 && (
          <button
            type="button"
            onClick={skipAll}
            className="absolute right-4 top-4 min-h-[44px] rounded-full px-3 text-xs text-white/45 underline"
          >
            Skip
          </button>
        )}
      </div>
    </header>
  );
}
