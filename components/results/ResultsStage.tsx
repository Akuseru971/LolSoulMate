"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { MatchResult } from "@/lib/matching/engine";
import type { NarrativeResponse } from "@/lib/validation/schemas";
import { en } from "@/lib/i18n/en";
import { ShareActions } from "@/components/sharing/ShareActions";
import { siteConfig } from "@/lib/config";
import { ExternalLink } from "lucide-react";

export function ResultsStage({
  match,
  narrative,
  onRestart,
}: {
  match: MatchResult;
  narrative: NarrativeResponse;
  onRestart: () => void;
}) {
  const reduce = useReducedMotion();
  const [skippedReveal, setSkippedReveal] = useState(false);
  const { champion, compatibility } = match.primary;

  const showReveal = !skippedReveal && !reduce;

  return (
    <section className="mx-auto w-full max-w-2xl px-4 py-8 pb-32 sm:pb-24">
      {showReveal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative mb-12 overflow-hidden rounded-sm"
        >
          <div className="relative aspect-[4/5] max-h-[420px] w-full sm:max-h-[480px]">
            <Image
              src={champion.imageUrl}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 672px"
              className="object-cover object-top"
              priority
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-[#050608]/40 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 px-1 pb-2 pt-16">
            <p className="text-[11px] uppercase tracking-[0.3em] text-amber-200/75">
              {en.results.revealKicker}
            </p>
            <h2 className="mt-2 font-serif text-4xl text-white">{champion.name}</h2>
            <p className="mt-2 text-sm text-white/55">
              {champion.region} · {champion.title}
            </p>
            <button
              type="button"
              className="mt-4 min-h-[44px] text-xs text-white/50 underline"
              onClick={() => setSkippedReveal(true)}
            >
              Skip reveal
            </button>
          </div>
        </motion.div>
      )}

      {(!showReveal || skippedReveal || reduce) && (
        <header className="mb-10 border-b border-white/10 pb-8">
          <p className="text-[11px] uppercase tracking-[0.3em] text-amber-200/75">
            {en.results.revealKicker}
          </p>
          <h2 className="mt-2 font-serif text-4xl text-white">{champion.name}</h2>
          <p className="mt-1 text-sm text-white/55">
            {champion.region} · {champion.title}
          </p>
        </header>
      )}

      <p className="font-serif text-xl leading-relaxed text-amber-50/95">
        {narrative.reveal.oneLiner}
      </p>
      <p className="mt-3 text-sm text-white/45">
        {en.results.compatibilityLabel}:{" "}
        <span className="font-serif text-lg text-amber-200/90">{compatibility}%</span>
        <span className="ml-2 text-white/35">{en.results.compatibilityNote}</span>
      </p>

      <article className="mt-14 space-y-14 text-[1.05rem] leading-[1.75] text-white/78">
        <section>
          <h3 className="font-serif text-2xl text-amber-100/95">{en.results.connection}</h3>
          <p className="mt-5">{narrative.sharedSoul}</p>
        </section>

        {narrative.parallels.length > 0 && (
          <section>
            <h3 className="font-serif text-2xl text-amber-100/95">{en.results.parallels}</h3>
            <div className="mt-6 space-y-8">
              {narrative.parallels.map((p, i) => (
                <p key={i} className="border-l border-amber-500/25 pl-5">
                  {p.resonance}
                </p>
              ))}
            </div>
          </section>
        )}

        <section>
          <h3 className="font-serif text-2xl text-amber-100/95">{en.results.strength}</h3>
          <p className="mt-5">{narrative.greatestStrength}</p>
        </section>

        <section>
          <h3 className="font-serif text-2xl text-amber-100/95">{en.results.shadow}</h3>
          <p className="mt-5">{narrative.shadowWithin}</p>
        </section>

        <section>
          <h3 className="font-serif text-2xl text-amber-100/95">{en.results.closing}</h3>
          <p className="mt-5 font-serif text-lg text-amber-50/90">{narrative.destiny}</p>
        </section>
      </article>

      {match.alternatives.length > 0 && (
        <aside className="mt-14 border-t border-white/10 pt-8">
          <h4 className="text-xs uppercase tracking-[0.25em] text-white/45">
            {en.results.alsoClose}
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-white/65">
            {match.alternatives.map((alt) => (
              <li key={alt.championId}>
                {alt.champion.name} ({alt.compatibility}%)
              </li>
            ))}
          </ul>
        </aside>
      )}

      <div className="mt-16 border-t border-white/10 pt-10">
        <h4 className="font-serif text-xl text-amber-100/90">{en.results.shareHeading}</h4>
        <ShareActions
          card={{
            championName: champion.name,
            imageUrl: champion.imageUrl,
            compatibility,
            traits: narrative.definingTraits,
            quote: narrative.shareQuote,
          }}
          championId={champion.id}
          traitDimensions={match.topDimensions.slice(0, 3).map((d) => d.dimension)}
          shareQuote={narrative.shareQuote}
          onRestart={onRestart}
        />
      </div>

      <footer className="mt-16 text-center">
        <p className="font-serif text-white/70">{en.results.kofiTitle}</p>
        <p className="mt-2 text-sm text-white/45">{en.results.kofiBody}</p>
        {siteConfig.kofiUrl ? (
          <a
            href={siteConfig.kofiUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex min-h-[44px] items-center gap-2 text-sm text-amber-200/85 underline-offset-2 hover:underline"
          >
            {en.results.kofiCta} <ExternalLink className="h-3.5 w-3.5" />
          </a>
        ) : null}
        <p className="mt-10 text-xs text-white/35">
          Interpretive fan analysis · Canonical facts drawn from Riot Universe lore · Not
          affiliated with Riot Games
        </p>
      </footer>
    </section>
  );
}
