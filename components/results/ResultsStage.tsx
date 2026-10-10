"use client";

import { useCallback, useEffect, useRef, useState, lazy, Suspense } from "react";
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
import { sanitizeNickname } from "@/lib/champions/nickname";
import { ChapterSeparator } from "@/components/ornaments/ChapterSeparator";
import { FinalMark } from "@/components/ornaments/FinalMark";
import { ResultCardPreview } from "@/components/sharing/ResultCardPreview";

const ShareStudio = lazy(() =>
  import("@/components/sharing/ShareStudio").then((m) => ({ default: m.ShareStudio })),
);

export function ResultsStage({
  match,
  narrative,
  nickname: rawNickname,
  onRestart,
}: {
  match: MatchResult;
  narrative: NarrativeResponse;
  nickname?: string;
  onRestart: () => void;
}) {
  const reduce = useReducedMotion();
  const [revealDone, setRevealDone] = useState(!!reduce);
  const [studioOpen, setStudioOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const narrativeRef = useRef<HTMLElement>(null);
  const studioTriggerRef = useRef<HTMLButtonElement>(null);
  const revealTracked = useRef(false);
  const nickname = sanitizeNickname(rawNickname);
  const { champion, compatibility } = match.primary;

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const apply = () => setIsDesktop(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

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
    nickname,
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
    <section className="mx-auto w-full max-w-[var(--sor-visual-max)] px-4 py-6 pb-32 sm:pb-24">
      <ChampionReveal
        champion={champion}
        compatibility={compatibility}
        oneLiner={narrative.reveal.oneLiner}
        nickname={nickname}
        isDesktop={isDesktop}
        revealComplete={revealDone}
        onRevealComplete={handleRevealComplete}
        onSkip={handleRevealComplete}
        onReadStory={scrollToNarrative}
        onOpenStudio={openStudio}
      />

      <article
        ref={narrativeRef}
        className="mx-auto mt-4 max-w-[var(--sor-read-max)] scroll-mt-6 space-y-14"
      >
        <section className="rounded-sm bg-black/20 px-1 py-2 sm:px-2">
          <p className="type-chapter">{en.results.connection}</p>
          <p className="type-body-narrative mt-6 text-[1.08rem] leading-[1.85]">
            {narrative.sharedSoul}
          </p>
          <p className="mt-5 text-sm text-white/40">{en.results.compatibilityNote}</p>
        </section>

        {narrative.parallels.length > 0 && (
          <>
            <ChapterSeparator className="my-8" />
            <section>
              <p className="type-chapter">{en.results.parallels}</p>
              <div className="mt-8 space-y-8">
                {narrative.parallels.map((p, i) => (
                  <div
                    key={i}
                    className="grid gap-4 border-t border-white/[0.06] pt-6 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]"
                  >
                    <div className="space-y-3">
                      <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--sor-mist)]">
                        Your choice
                      </p>
                      <p className="text-sm text-[var(--sor-ivory)]/88">{p.userChoiceSummary}</p>
                    </div>
                    <div className="space-y-3 sm:border-l sm:border-[var(--sor-border-subtle)] sm:pl-6">
                      <p className="text-[11px] uppercase tracking-[0.22em] text-white/40">
                        In their legend
                      </p>
                      <p className="text-sm italic text-white/55">{p.canonicalBeat}</p>
                      <p className="type-body-narrative text-[1rem]">{p.resonance}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        <ChapterSeparator className="my-8" />

        <section className="grid gap-10 sm:grid-cols-2">
          <div>
            <p className="type-chapter">Strength</p>
            <h3 className="mt-2 font-serif text-xl text-[var(--sor-ivory)]/95">
              {en.results.strength}
            </h3>
            <p className="type-body-narrative mt-4">{narrative.greatestStrength}</p>
          </div>
          <div>
            <p className="type-chapter">Contradiction</p>
            <h3 className="mt-2 font-serif text-xl text-white/72">{en.results.shadow}</h3>
            <p className="type-body-narrative mt-4 text-white/65">{narrative.shadowWithin}</p>
          </div>
        </section>

        <ChapterSeparator className="my-8" />

        <section>
          <p className="type-chapter">The final word</p>
          <h3 className="mt-3 font-serif text-2xl text-[var(--sor-ivory)]/95">
            {en.results.closing}
          </h3>
          <p className="mt-8 font-serif text-[1.35rem] leading-[1.65] text-[var(--sor-ivory)]/92">
            {narrative.destiny}
          </p>
          <div className="mt-10 flex justify-center">
            <FinalMark className="text-[var(--sor-gold)]/45" size={28} />
          </div>
        </section>
      </article>

      <div className="mx-auto max-w-[var(--sor-read-max)]">
        <AlternativeMatches match={match} />

        <div className="mt-16 border-t border-white/10 pt-10 text-center">
          <p className="type-chapter">{en.results.shareHeading}</p>
          <p className="mt-2 text-sm text-white/45">
            A collectible portrait — ready to save or share.
          </p>
          <ResultCardPreview data={studioData} onOpenStudio={openStudio} />
          <button
            ref={studioTriggerRef}
            type="button"
            className="sr-only"
            onClick={openStudio}
          >
            Open portrait studio
          </button>
          <button
            type="button"
            onClick={onRestart}
            className="mt-8 inline-flex min-h-[44px] items-center gap-2 text-sm text-white/45 hover:text-white/70"
          >
            <RefreshCw className="h-4 w-4" /> Restart
          </button>
        </div>

        <footer className="mt-16 text-center">
          <p className="font-serif text-white/70">{en.results.kofiTitle}</p>
          <p className="mt-2 text-sm text-white/45">{en.results.kofiBody}</p>
          {siteConfig.kofiUrl ? (
            <a
              href={siteConfig.kofiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex min-h-[44px] items-center gap-2 text-sm text-[var(--sor-gold)]/85 underline-offset-2 hover:underline"
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
      </div>

      <Suspense fallback={null}>
        <ShareStudio
          open={studioOpen}
          onClose={() => setStudioOpen(false)}
          data={studioData}
          triggerRef={studioTriggerRef}
        />
      </Suspense>
    </section>
  );
}
