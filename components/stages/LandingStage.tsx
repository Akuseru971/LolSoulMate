"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { en } from "@/lib/i18n/en";
import { SoulSeal } from "@/components/ornaments/SoulSeal";

export function LandingStage({ onStart }: { onStart: () => void }) {
  const reduce = useReducedMotion();

  return (
    <section className="landing-hero relative min-h-[100dvh] w-full overflow-hidden">
      <div className="landing-hero__sky" aria-hidden />
      <div className="landing-hero__mist" aria-hidden />
      <div className="landing-hero__vignette" aria-hidden />

      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-3xl flex-col justify-end px-5 pb-16 pt-24 sm:justify-center sm:pb-24 sm:pt-32">
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8 sm:mb-10"
          aria-hidden
        >
          <SoulSeal size={44} className="text-[var(--sor-gold)]/55" />
        </motion.div>
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-xs uppercase tracking-[0.35em] text-amber-200/70"
        >
          {en.landing.kicker}
        </motion.p>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
          className="mt-5 font-serif text-[2rem] leading-[1.15] text-white sm:text-5xl md:text-[3.25rem]"
        >
          {en.landing.title}
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="mt-6 max-w-xl text-base leading-relaxed text-white/72 sm:text-lg"
        >
          {en.landing.subtitle}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
        >
          <button
            type="button"
            onClick={onStart}
            className="group inline-flex min-h-[44px] items-center gap-2 border-b border-amber-400/50 pb-1 text-left font-serif text-lg text-amber-100 transition hover:border-amber-300 hover:text-white"
          >
            {en.landing.cta}
            <ChevronRight className="h-5 w-5 transition group-hover:translate-x-0.5" aria-hidden />
          </button>
          <button
            type="button"
            onClick={onStart}
            className="min-h-[44px] text-sm text-white/45 underline-offset-4 hover:text-white/70 hover:underline"
          >
            {en.landing.ctaAlt}
          </button>
        </motion.div>

        <p className="mt-16 max-w-lg text-left text-[11px] leading-relaxed text-white/40 sm:mt-24">
          {en.landing.disclaimer}
        </p>
      </div>
    </section>
  );
}
