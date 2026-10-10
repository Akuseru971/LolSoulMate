"use client";

import { forwardRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/config";

export interface ShareCardProps {
  championName: string;
  imageUrl: string;
  compatibility: number;
  traits: string[];
  quote: string;
}

export const ShareCard = forwardRef<HTMLDivElement, ShareCardProps>(
  function ShareCard(
    { championName, imageUrl, compatibility, traits, quote },
    ref,
  ) {
    return (
      <div
        ref={ref}
        className="relative flex h-[1920px] w-[1080px] flex-col overflow-hidden bg-[#070b12] text-white"
        style={{ width: 1080, height: 1920 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a2744]/80 via-[#0b0f18] to-black" />
        <div className="relative z-10 flex flex-1 flex-col p-16">
          <p className="text-3xl uppercase tracking-[0.3em] text-amber-200/80">
            My Soul of Runeterra
          </p>
          <h2 className="mt-8 font-serif text-7xl leading-tight text-amber-50">
            {championName}
          </h2>
          <p className="mt-6 text-4xl text-white/80">
            {compatibility}% resonance
          </p>
          <div className="relative mt-12 h-[900px] w-full overflow-hidden rounded-3xl border border-amber-500/30 shadow-2xl">
            <Image
              src={imageUrl}
              alt=""
              fill
              className="object-cover object-center"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </div>
          <ul className="mt-12 space-y-4 text-3xl text-amber-100/90">
            {traits.map((t) => (
              <li key={t}>• {t}</li>
            ))}
          </ul>
          <p className="mt-12 font-serif text-4xl italic leading-snug text-white/85">
            {quote}
          </p>
          <div className="mt-auto pt-16 text-2xl text-white/55">
            <p>{siteConfig.siteUrl.replace(/^https?:\/\//, "")}</p>
            <p className="mt-2 text-amber-200/70">{siteConfig.creatorName}</p>
          </div>
        </div>
      </div>
    );
  },
);
