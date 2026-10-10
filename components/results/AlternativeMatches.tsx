"use client";

import Image from "next/image";
import type { MatchResult } from "@/lib/matching/engine";
import { buildAlternativeInsight } from "@/lib/matching/alternativeInsight";
import { en } from "@/lib/i18n/en";

export function AlternativeMatches({ match }: { match: MatchResult }) {
  if (match.alternatives.length === 0) return null;

  const primary = match.primary.champion;

  return (
    <aside className="mt-16 border-t border-white/10 pt-10">
      <h4 className="font-serif text-xl text-amber-100/90">{en.results.alsoClose}</h4>
      <ul className="mt-6 space-y-6">
        {match.alternatives.map((alt) => (
          <li
            key={alt.championId}
            className="flex gap-4 border-l border-white/10 pl-4 opacity-90"
          >
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-sm bg-black/40">
              <Image
                src={alt.champion.imageUrl}
                alt=""
                fill
                className="object-cover object-top"
                sizes="64px"
                unoptimized
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-serif text-lg text-white/90">{alt.champion.name}</p>
              <p className="text-xs text-white/45">
                {alt.champion.region} · {alt.compatibility}%
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {buildAlternativeInsight(match.blendedVector, alt.champion, primary)}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
