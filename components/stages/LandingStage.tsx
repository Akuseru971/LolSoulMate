"use client";

import { Sparkles } from "lucide-react";
import { en } from "@/lib/i18n/en";
import { GlassPanel } from "@/components/layout/GlassPanel";

export function LandingStage({ onStart }: { onStart: () => void }) {
  return (
    <section className="mx-auto flex min-h-[80vh] max-w-3xl flex-col justify-center px-4 py-16 text-center">
      <p className="mb-4 inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-amber-200/70">
        <Sparkles className="h-4 w-4" /> Soul of Runeterra
      </p>
      <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
        {en.landing.title}
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-white/75">{en.landing.subtitle}</p>
      <p className="mt-3 text-sm text-white/50">{en.landing.secondary}</p>
      <p className="mt-2 text-sm text-amber-200/80">{en.landing.duration}</p>

      <button
        type="button"
        onClick={onStart}
        className="mx-auto mt-10 w-full max-w-md rounded-full bg-gradient-to-r from-amber-600 via-amber-400 to-amber-500 py-4 text-base font-semibold text-black shadow-[0_0_40px_rgba(201,162,39,0.25)] transition hover:brightness-110"
      >
        {en.landing.cta}
      </button>

      <GlassPanel className="mt-12 p-4 text-left text-xs leading-relaxed text-white/55">
        {en.landing.disclaimer}
      </GlassPanel>
    </section>
  );
}
