"use client";

import { useCallback, useRef, useState, lazy, Suspense } from "react";
import { useReducedMotion } from "framer-motion";
import type { MatchResult } from "@/lib/matching/engine";
import type { NarrativeResponse } from "@/lib/validation/schemas";
import { en } from "@/lib/i18n/en";
import { siteConfig } from "@/lib/config";
import { ExternalLink, RefreshCw } from "lucide-react";
import { ChampionReveal } from "./ChampionReveal";
import { AlternativeMatches } from "./AlternativeMatches";
import type { ShareStudioData } from "@/components/sharing/ShareStudio";
import { trackEvent } from "@/lib/analytics";

const ShareStudio = lazy(() =>
  import("@/components/sharing/ShareStudio").then((m) => ({ default: m.ShareStudio })),
);

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
  const [revealDone, setRevealDone] = useState(!!reduce);
  const [studioOpen, setStudioOpen] = useState(false);
  const narrativeRef = useRef<HTMLElement>(null);
  const revealTracked = useRef(false);
  const { champion, compatibility } = match.primary;

  const studioData: ShareStudioData = {
    championId: champion.id,
    championName: champion.name,
    championTitle: champion.title,
    region: champion.region,
    imageUrl: champion.imageUrl,
    compatibility,
    traits: narrative.definingTraits,
    quote: narrative.shareQuote,
    traitDimensions: match.topDimensions.slice(0, 3).map((d) => d.dimension),
  };

  function scrollToNarrative() {
    trackEvent("narrative_read_started");
    narrativeRef.current?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  }

  function openStudio() {
    setStudioOpen(true);
  }

  const handleRevealComplete = useCallback(() => {
    setRevealDone(true);
    if (!revealTracked.current) {
      revealTracked.current = true;
      trackEvent("result_revealed", { championId: champion.id });
    }
  }, [champion.id]);

  return (
    <section className="mx-auto w-full max-w-2xl px-4 py-6 pb-32 sm:pb-24">
      <ChampionReveal
        champion={champion}
        compatibility={compatibility}
        oneLiner={narrative.reveal.oneLiner}
        revealComplete={revealDone}
        onRevealComplete={handleRevealComplete}
        onSkip={handleRevealComplete}
        onReadStory={scrollToNarrative}
        onOpenStudio={openStudio}
      />

      <article
        ref={narrativeRef}
        className="mt-6 space-y-16 text-[1.05rem] leading-[1.8] text-white/78 scroll-mt-6"
      >
        <section>
          <h3 className="font-serif text-2xl text-amber-100/95">{en.results.connection}</h3>
          <p className="mt-6">{narrative.sharedSoul}</p>
          <p className="mt-4 text-sm text-white/40">{en.results.compatibilityNote}</p>
        </section>

        {narrative.parallels.length > 0 && (
          <section>
            <h3 className="font-serif text-2xl text-amber-100/95">{en.results.parallels}</h3>
            <div className="mt-8 space-y-10">
              {narrative.parallels.map((p, i) => (
                <div key={i} className="space-y-3">
                  <p className="text-sm text-amber-200/75">{p.userChoiceSummary}</p>
                  <p className="text-sm italic text-white/50">{p.canonicalBeat}</p>
                  <p className="border-l border-amber-500/20 pl-4 leading-relaxed">
                    {p.resonance}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="grid gap-10 sm:grid-cols-1">
          <div className="rounded-sm bg-white/[0.02] px-1 py-2">
            <h3 className="font-serif text-xl text-amber-100/95">{en.results.strength}</h3>
            <p className="mt-4">{narrative.greatestStrength}</p>
          </div>
          <div className="rounded-sm px-1 py-2">
            <h3 className="font-serif text-xl text-white/70">{en.results.shadow}</h3>
            <p className="mt-4 text-white/65">{narrative.shadowWithin}</p>
          </div>
        </section>

        <section className="border-t border-amber-500/15 pt-12">
          <h3 className="font-serif text-2xl text-amber-100/95">{en.results.closing}</h3>
          <p className="mt-8 font-serif text-[1.35rem] leading-[1.65] text-amber-50/92">
            {narrative.destiny}
          </p>
        </section>
      </article>

      <AlternativeMatches match={match} />

      <div className="mt-16 border-t border-white/10 pt-10 text-center">
        <h4 className="font-serif text-xl text-amber-100/90">{en.results.shareHeading}</h4>
        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={openStudio}
            className="min-h-[44px] border-b border-amber-400/40 pb-1 font-serif text-amber-100"
          >
            Save your portrait
          </button>
          <button
            type="button"
            onClick={onRestart}
            className="inline-flex min-h-[44px] items-center gap-2 text-sm text-white/45 hover:text-white/70"
          >
            <RefreshCw className="h-4 w-4" /> Restart
          </button>
        </div>
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
            onClick={() => trackEvent("kofi_clicked")}
          >
            {en.results.kofiCta} <ExternalLink className="h-3.5 w-3.5" />
          </a>
        ) : null}
        <p className="mt-10 text-xs text-white/35">
          Interpretive fan analysis · Canonical facts drawn from Riot Universe lore · Not
          affiliated with Riot Games
        </p>
      </footer>

      <Suspense fallback={null}>
        <ShareStudio open={studioOpen} onClose={() => setStudioOpen(false)} data={studioData} />
      </Suspense>
    </section>
  );
}
