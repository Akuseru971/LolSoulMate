"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { MatchResult } from "@/lib/matching/engine";
import type { NarrativeResponse } from "@/lib/validation/schemas";
import { en } from "@/lib/i18n/en";
import { GlassPanel } from "@/components/layout/GlassPanel";
import { ShareActions } from "@/components/sharing/ShareActions";
import { siteConfig } from "@/lib/config";
import { ExternalLink, Heart } from "lucide-react";

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
  const [shareUrl, setShareUrl] = useState<string | null>(null);
  const { champion, compatibility } = match.primary;

  useEffect(() => {
    fetch("/api/share", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        championId: champion.id,
        compatibility,
        definingTraits: narrative.definingTraits,
        shareQuote: narrative.shareQuote,
      }),
    })
      .then((r) => r.json())
      .then((d: { url?: string }) => setShareUrl(d.url ?? null))
      .catch(() => undefined);
  }, [champion.id, compatibility, narrative]);

  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-10 pb-24">
      {!skippedReveal && !reduce && (
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative mb-10 overflow-hidden rounded-2xl border border-amber-500/30"
        >
          <div className="relative h-64 sm:h-80">
            <Image
              src={champion.imageUrl}
              alt=""
              fill
              className="object-cover object-top"
              priority
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070b12] via-transparent to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-sm uppercase tracking-widest text-amber-200/80">
              The Reveal
            </p>
            <h2 className="font-serif text-4xl text-white">
              Your soul resonates with {narrative.reveal.championName}.
            </h2>
            <button
              type="button"
              className="mt-3 text-sm text-white/60 underline"
              onClick={() => setSkippedReveal(true)}
            >
              Skip reveal animation
            </button>
          </div>
        </motion.div>
      )}

      {(skippedReveal || reduce) && (
        <header className="mb-8">
          <p className="text-sm uppercase tracking-widest text-amber-200/70">
            {champion.region} · {champion.title}
          </p>
          <h2 className="font-serif text-4xl text-white">
            Your soul resonates with {champion.name}.
          </h2>
          <p className="mt-2 text-lg text-amber-100/80">{narrative.reveal.oneLiner}</p>
        </header>
      )}

      <GlassPanel className="mb-6 p-5">
        <p className="text-3xl font-serif text-amber-300">{compatibility}%</p>
        <p className="text-xs uppercase tracking-widest text-white/50">
          {en.results.compatibilityLabel}
        </p>
        <p className="mt-1 text-sm text-white/55">{en.results.compatibilityNote}</p>
      </GlassPanel>

      <article className="prose prose-invert max-w-none space-y-8 prose-p:text-white/75">
        <section>
          <h3 className="font-serif text-2xl text-amber-100">Your Shared Soul</h3>
          <p className="mt-3 whitespace-pre-wrap text-white/75">{narrative.sharedSoul}</p>
        </section>

        <section>
          <h3 className="font-serif text-2xl text-amber-100">
            Your Story, Reflected in Theirs
          </h3>
          <ul className="mt-4 space-y-6">
            {narrative.parallels.map((p, i) => (
              <li key={i} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-sm text-amber-200/80">{p.userChoiceSummary}</p>
                <p className="mt-2 text-sm text-white/60">
                  <span className="text-white/40">Canon: </span>
                  {p.canonicalBeat}
                </p>
                <p className="mt-2 text-white/75">{p.resonance}</p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="font-serif text-2xl text-amber-100">The Shadow Within</h3>
          <p className="mt-3 text-white/75">{narrative.shadowWithin}</p>
        </section>

        <section>
          <h3 className="font-serif text-2xl text-amber-100">Your Greatest Strength</h3>
          <p className="mt-3 text-white/75">{narrative.greatestStrength}</p>
        </section>

        <section>
          <h3 className="font-serif text-2xl text-amber-100">Your Destiny</h3>
          <p className="mt-3 font-serif text-lg italic text-amber-50/90">
            {narrative.destiny}
          </p>
        </section>
      </article>

      {(match.primarySimilarities.length > 0 || match.primaryContradictions.length > 0) && (
        <GlassPanel className="mt-8 p-5">
          <h4 className="text-sm uppercase tracking-widest text-white/50">
            Personality resonance
          </h4>
          <p className="mt-2 text-sm text-white/70">
            Strongest alignments: {match.primarySimilarities.join(" · ")}
          </p>
          <p className="mt-2 text-sm text-white/55">
            Creative tensions: {match.primaryContradictions.join(" · ")}
          </p>
        </GlassPanel>
      )}

      {match.alternatives.length > 0 && (
        <GlassPanel className="mt-10 p-5">
          <h4 className="text-sm uppercase tracking-widest text-white/50">
            Also close in spirit
          </h4>
          <ul className="mt-3 space-y-2 text-white/75">
            {match.alternatives.map((alt) => (
              <li key={alt.championId}>
                {alt.champion.name} ({alt.compatibility}%)
              </li>
            ))}
          </ul>
        </GlassPanel>
      )}

      <div className="mt-10">
        <ShareActions
          card={{
            championName: champion.name,
            imageUrl: champion.imageUrl,
            compatibility,
            traits: narrative.definingTraits,
            quote: narrative.shareQuote,
          }}
          shareUrl={shareUrl}
          onRestart={onRestart}
        />
      </div>

      <GlassPanel className="mt-12 p-6 text-center">
        <Heart className="mx-auto h-6 w-6 text-amber-400/80" />
        <p className="mt-3 text-white/80">
          Enjoyed discovering your place in Runeterra?
        </p>
        <p className="text-sm text-white/55">
          Support the creator behind this experience and help keep the stories alive.
        </p>
        {siteConfig.kofiUrl ? (
          <a
            href={siteConfig.kofiUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#ff5e5b] px-5 py-2.5 text-sm font-medium text-white"
          >
            Support the Creator on Ko-fi <ExternalLink className="h-4 w-4" />
          </a>
        ) : (
          <p className="mt-4 text-xs text-white/45">
            Set <code className="text-amber-200/70">NEXT_PUBLIC_KOFI_URL</code> to enable
            Ko-fi support (optional; results remain free).
          </p>
        )}
      </GlassPanel>

      <p className="mt-8 text-center text-xs text-white/40">
        Interpretive fan analysis · Canonical facts sourced from Riot Universe lore ·
        Not affiliated with Riot Games
      </p>
    </section>
  );
}
