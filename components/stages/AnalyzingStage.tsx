"use client";

import { motion, useReducedMotion } from "framer-motion";
import { en } from "@/lib/i18n/en";

export function AnalyzingStage({ onSkipAnimation }: { onSkipAnimation?: () => void }) {
  const reduce = useReducedMotion();

  return (
    <section className="mx-auto flex min-h-[50vh] w-full max-w-2xl flex-col justify-center px-4 py-16 text-center">
      <motion.h2
        initial={reduce ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-serif text-3xl text-white sm:text-4xl"
      >
        {en.loading.title}
      </motion.h2>
      <motion.p
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="mt-4 text-white/60"
      >
        {en.loading.subtitle}
      </motion.p>
      {onSkipAnimation && (
        <button
          type="button"
          onClick={onSkipAnimation}
          className="mx-auto mt-8 min-h-[44px] text-sm text-amber-200/80 underline-offset-2 hover:underline"
        >
          {en.loading.skip}
        </button>
      )}
    </section>
  );
}
