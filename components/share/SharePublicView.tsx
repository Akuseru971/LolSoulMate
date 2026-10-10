"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";
import { siteConfig } from "@/lib/config";
import type { ChampionProfile } from "@/data/champions/types";

export function SharePublicView({
  champion,
  compatibility,
  traits,
  shareQuote,
}: {
  champion: ChampionProfile;
  compatibility: number;
  traits: string[];
  shareQuote: string;
}) {
  useEffect(() => {
    trackEvent("shared_result_opened", { championId: champion.id });
  }, [champion.id]);

  return (
    <main className="min-h-screen bg-[#050608] text-white">
      <div className="relative mx-auto max-w-lg">
        <div className="relative aspect-[4/5] max-h-[70dvh] w-full">
          <Image
            src={champion.imageUrl}
            alt=""
            fill
            priority
            className="object-cover object-[center_12%]"
            sizes="100vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-[#050608]/50 to-transparent" />
        </div>
        <div className="relative -mt-24 px-5 pb-16 pt-8">
          <p className="text-[11px] uppercase tracking-[0.32em] text-amber-200/75">
            Soul of Runeterra
          </p>
          <h1 className="mt-3 font-serif text-4xl">{champion.name}</h1>
          <p className="mt-1 text-sm text-white/50">
            {champion.region} · {champion.title}
          </p>
          <p className="mt-4 text-sm text-white/45">
            Similarity score{" "}
            <span className="font-serif text-lg text-amber-200/90">{compatibility}%</span>
          </p>
          <ul className="mt-6 space-y-1 text-sm text-amber-100/85">
            {traits.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <p className="mt-8 font-serif text-xl leading-relaxed text-amber-50/90">{shareQuote}</p>
          <Link
            href="/"
            onClick={() => trackEvent("shared_result_quiz_start")}
            className="mt-10 inline-flex min-h-[44px] items-center border-b border-amber-400/45 pb-1 font-serif text-lg text-amber-100"
          >
            Discover your own story
          </Link>
          <p className="mt-12 text-xs text-white/35">{siteConfig.creatorName}</p>
        </div>
      </div>
    </main>
  );
}
