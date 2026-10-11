"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  lazy,
  Suspense,
  useMemo,
  forwardRef,
} from "react";
import { useReducedMotion } from "framer-motion";
import type { MatchResult } from "@/lib/matching/engine";
import type { NarrativeResponse } from "@/lib/validation/schemas";
import { en } from "@/lib/i18n/en";
import { siteConfig } from "@/lib/config";
import { ExternalLink, RefreshCw } from "lucide-react";
import { ChampionReveal } from "./ChampionReveal";
import { AlternativeMatches } from "./AlternativeMatches";
import { ResultAtmosphere } from "./ResultAtmosphere";
import { LoreFragment } from "./LoreFragment";
import { InnerTruth } from "./InnerTruth";
import { SoulConclusion } from "./SoulConclusion";
import type { ShareStudioData } from "@/components/sharing/ShareStudio";
import { trackEvent } from "@/lib/analytics";
import { sanitizeNickname } from "@/lib/champions/nickname";
import { ResultCardPreview } from "@/components/sharing/ResultCardPreview";
import { getResultTheme } from "@/data/champions/resultThemes";
import { useResultScene } from "@/lib/results/useResultScene";
import type { ResultScrollScene } from "@/data/champions/resultThemes";

const ShareStudio = lazy(() =>
  import("@/components/sharing/ShareStudio").then((m) => ({ default: m.ShareStudio })),
);

const SceneSection = forwardRef<
  HTMLElement,
  { scene: ResultScrollScene; children: React.ReactNode; className?: string }
>(function SceneSection({ scene, children, className = "" }, ref) {
  return (
    <section ref={ref} data-result-scene={scene} className={`scroll-mt-6 ${className}`}>
      {children}
    </section>
  );
});

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
  const revealTracked = useRef(false);
  const studioTriggerRef = useRef<HTMLButtonElement>(null);
  const nickname = sanitizeNickname(rawNickname);
  const { champion, compatibility } = match.primary;
  const theme = getResultTheme(champion.id);

  const revealRef = useRef<HTMLElement>(null);
  const connectionRef = useRef<HTMLElement>(null);
  const fragmentsRef = useRef<HTMLElement>(null);
  const innerRef = useRef<HTMLElement>(null);
  const conclusionRef = useRef<HTMLElement>(null);
  const legacyRef = useRef<HTMLElement>(null);
  const activeScene = useResultScene({
    reveal: revealRef,
    connection: connectionRef,
    fragments: fragmentsRef,
    inner: innerRef,
    conclusion: conclusionRef,
    legacy: legacyRef,
  });

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const apply = () => setIsDesktop(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const studioData: ShareStudioData = useMemo(
    () => ({
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
    }),
    [champion, compatibility, narrative, match.topDimensions, nickname],
  );

  const scrollToConnection = useCallback(() => {
    trackEvent("narrative_read_started");
    connectionRef.current?.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      block: "start",
    });
  }, [reduce]);

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
    <>
      <ResultAtmosphere championId={champion.id} scene={activeScene} />
      <div
        className="relative z-10 mx-auto w-full max-w-[var(--sor-visual-max)] px-4 py-6 pb-[max(8rem,env(safe-area-inset-bottom))] sm:pb-24"
        style={{ color: theme.palette.text }}
      >
        <SceneSection scene="reveal" ref={revealRef}>
          <ChampionReveal
            champion={champion}
            compatibility={compatibility}
            oneLiner={narrative.reveal.oneLiner}
            nickname={nickname}
            isDesktop={isDesktop}
            revealComplete={revealDone}
            onRevealComplete={handleRevealComplete}
            onSkip={handleRevealComplete}
            onReadStory={scrollToConnection}
            onOpenStudio={openStudio}
          />
        </SceneSection>

        <div className="mx-auto max-w-[var(--sor-read-max)] space-y-14 sm:space-y-20">
          <SceneSection scene="connection" ref={connectionRef} className="relative rounded-2xl px-3 py-10 sm:px-10 sm:py-14" >
            <p className="text-center text-[11px] uppercase tracking-[0.32em]" style={{ color: theme.palette.accent }}>I · THE CONNECTION</p>
            <p className="type-body-narrative mx-auto mt-7 max-w-[44rem] text-center font-serif text-[1.2rem] leading-[1.85] sm:text-[1.5rem]">
              {narrative.sharedSoul}
            </p>
            <p className="mt-7 text-center text-xs text-white/45">{en.results.compatibilityNote}</p>
          </SceneSection>

          {narrative.parallels.length > 0 && (
            <SceneSection scene="fragments" ref={fragmentsRef} className="relative px-2 py-8 sm:px-6">
              <p className="text-center text-[11px] uppercase tracking-[0.32em]" style={{ color: theme.palette.accent }}>II · ECHOES OF A LEGEND</p>
              <div className="mt-10 space-y-14 sm:space-y-16">
                {narrative.parallels.map((p, i) => (
                  <LoreFragment
                    key={i}
                    index={i}
                    userChoiceSummary={p.userChoiceSummary}
                    canonicalBeat={p.canonicalBeat}
                    resonance={p.resonance}
                    theme={theme}
                  />
                ))}
              </div>
            </SceneSection>
          )}

          <SceneSection scene="inner" ref={innerRef}>
            <p className="mb-10 text-center text-[11px] uppercase tracking-[0.32em]" style={{ color: theme.palette.accent }}>III · THE INNER TRUTH</p>
            <InnerTruth
              strength={narrative.greatestStrength}
              shadow={narrative.shadowWithin}
              theme={theme}
            />
          </SceneSection>

          <SceneSection scene="conclusion" ref={conclusionRef}>
            <SoulConclusion destiny={narrative.destiny} theme={theme} />
          </SceneSection>

          <SceneSection scene="legacy" ref={legacyRef}>
            <AlternativeMatches match={match} />
            <div className="mt-20 border-t border-white/[0.08] pt-14 text-center">
              <h4 className="font-serif text-xl text-[var(--sor-ivory)]/92 sm:text-2xl">
                Your legend, preserved.
              </h4>
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
                className="mt-10 inline-flex min-h-[44px] items-center gap-2 text-sm text-white/45 hover:text-white/70"
              >
                <RefreshCw className="h-4 w-4" /> Restart
              </button>
            </div>

            <footer className="mt-20 text-center">
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
          </SceneSection>
        </div>

        <Suspense fallback={null}>
          <ShareStudio
            open={studioOpen}
            onClose={() => setStudioOpen(false)}
            data={studioData}
            triggerRef={studioTriggerRef}
          />
        </Suspense>
      </div>
    </>
  );
}
