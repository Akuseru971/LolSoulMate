"use client";

import { forwardRef } from "react";
import { siteConfig } from "@/lib/config";
import type { ShareFormatId, ShareTemplateId } from "@/lib/sharing/formats";
import { getShareFormat } from "@/lib/sharing/formats";
import { artworkStyle } from "@/components/champions/ChampionArtwork";
import type { ArtworkFrame, UserArtTransform } from "@/lib/champions/visualTypes";
import { mergeArtworkFrame } from "@/lib/champions/visualTypes";
import {
  legendPortraitLabel,
  soulPortraitLabel,
} from "@/lib/champions/nickname";

export interface ShareExportCardProps {
  template: ShareTemplateId;
  format: ShareFormatId;
  championName: string;
  championTitle: string;
  region: string;
  imageSrc: string;
  artFrame: ArtworkFrame;
  userTransform?: UserArtTransform;
  compatibility: number;
  traits: string[];
  quote: string;
  showNickname: boolean;
  displayNickname?: string;
}

function fitTextSize(text: string, base: number, min = 0.55): number {
  if (text.length > 28) return base * min;
  if (text.length > 18) return base * 0.72;
  if (text.length > 12) return base * 0.85;
  return base;
}

function ArtSlot({
  imageSrc,
  artFrame,
  userTransform,
  height,
  rounded = 0,
}: {
  imageSrc: string;
  artFrame: ArtworkFrame;
  userTransform?: UserArtTransform;
  height: number;
  rounded?: number;
}) {
  const merged = mergeArtworkFrame(artFrame, userTransform);
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height, borderRadius: rounded }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imageSrc}
        alt=""
        crossOrigin="anonymous"
        className="absolute inset-0 h-full w-full"
        style={artworkStyle(merged)}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050608]/85 via-transparent to-transparent"
        aria-hidden
      />
    </div>
  );
}

function CinematicLayout(props: ShareExportCardProps & { w: number; h: number }) {
  const { h, championName, quote, compatibility, showNickname, displayNickname } = props;
  const artH = h * (props.w < props.h ? 0.62 : 0.68);
  const nick = showNickname ? displayNickname : undefined;
  return (
    <>
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #0a1018 0%, #050608 60%, #000 100%)",
        }}
      />
      <div className="relative z-10 flex h-full flex-col p-[5%]">
        <p className="uppercase tracking-[0.35em] text-amber-200/70" style={{ fontSize: h * 0.013 }}>
          Soul of Runeterra
        </p>
        <ArtSlot
          imageSrc={props.imageSrc}
          artFrame={props.artFrame}
          userTransform={props.userTransform}
          height={artH}
          rounded={h * 0.012}
        />
        {nick && (
          <p className="text-amber-200/80" style={{ fontSize: h * 0.02, marginTop: h * 0.02 }}>
            {soulPortraitLabel(nick)}
          </p>
        )}
        <h2
          className="font-serif leading-none text-white"
          style={{ fontSize: fitTextSize(championName, h * 0.052), marginTop: h * 0.018 }}
        >
          {championName}
        </h2>
        <p className="text-white/50" style={{ fontSize: h * 0.016 }}>
          {compatibility}% similarity
        </p>
        <p
          className="font-serif italic leading-snug text-amber-50/90"
          style={{ fontSize: h * 0.022, marginTop: h * 0.025, maxWidth: "94%" }}
        >
          {quote}
        </p>
        <div className="mt-auto flex justify-between text-white/40" style={{ fontSize: h * 0.013 }}>
          <span>{siteConfig.siteUrl.replace(/^https?:\/\//, "")}</span>
          <span>{siteConfig.creatorName}</span>
        </div>
      </div>
    </>
  );
}

function SoulLayout(props: ShareExportCardProps & { w: number; h: number }) {
  const { w, h, championName, traits, compatibility, quote, showNickname, displayNickname } =
    props;
  const stacked = h / w > 1.15;
  const artH = stacked ? h * 0.36 : h * 0.72;
  const artW = stacked ? w * 0.92 : w * 0.42;
  const nick = showNickname ? displayNickname : undefined;
  return (
    <>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 30% 15%, rgba(201,162,39,0.14), transparent 50%), #070b10",
        }}
      />
      <div className="relative z-10 flex h-full flex-col p-[5%]">
        {nick && (
          <p
            className="font-serif text-amber-100/90"
            style={{ fontSize: fitTextSize(nick, h * 0.034) }}
          >
            {soulPortraitLabel(nick)}
          </p>
        )}
        <div className={`mt-[3%] flex flex-1 ${stacked ? "flex-col gap-[3%]" : "flex-row gap-[4%]"}`}>
          <div style={{ width: stacked ? "100%" : artW, height: artH, flexShrink: 0 }}>
            <ArtSlot
              imageSrc={props.imageSrc}
              artFrame={props.artFrame}
              userTransform={props.userTransform}
              height={artH}
            />
          </div>
          <div className="flex flex-1 flex-col justify-center">
            <h2
              className="font-serif text-amber-50"
              style={{ fontSize: fitTextSize(championName, h * 0.042) }}
            >
              {championName}
            </h2>
            <p className="font-serif text-amber-200/90" style={{ fontSize: h * 0.034 }}>
              {compatibility}%
            </p>
            <ul className="text-amber-100/85" style={{ fontSize: h * 0.02, marginTop: h * 0.02 }}>
              {traits.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
        <p
          className="font-serif italic text-white/75"
          style={{ fontSize: h * 0.019, marginTop: h * 0.02 }}
        >
          {quote}
        </p>
        <p className="text-white/40" style={{ fontSize: h * 0.012, marginTop: "auto" }}>
          {siteConfig.creatorName}
        </p>
      </div>
    </>
  );
}

function LegendLayout(props: ShareExportCardProps & { w: number; h: number }) {
  const { h, championName, championTitle, region, quote, compatibility, showNickname, displayNickname } =
    props;
  const artH = h * (props.w < props.h ? 0.44 : 0.55);
  const nick = showNickname ? displayNickname : undefined;
  return (
    <>
      <div className="absolute inset-0 bg-[#06080d]" />
      <div className="absolute inset-[2.5%] border border-amber-500/20" />
      <div className="relative z-10 flex h-full flex-col p-[6%]">
        <ArtSlot
          imageSrc={props.imageSrc}
          artFrame={props.artFrame}
          userTransform={props.userTransform}
          height={artH}
          rounded={h * 0.008}
        />
        {nick && (
          <p className="text-amber-200/75" style={{ fontSize: h * 0.018, marginTop: h * 0.02 }}>
            {legendPortraitLabel(nick)}
          </p>
        )}
        <h2
          className="font-serif text-white"
          style={{ fontSize: fitTextSize(championName, h * 0.04), marginTop: h * 0.015 }}
        >
          {championName}
        </h2>
        <p className="text-white/50" style={{ fontSize: h * 0.015 }}>
          {region} · {championTitle}
        </p>
        <p
          className="font-serif leading-relaxed text-amber-50/92"
          style={{ fontSize: h * 0.026, marginTop: h * 0.025, flex: 1 }}
        >
          {quote}
        </p>
        <p className="text-white/45" style={{ fontSize: h * 0.014 }}>
          {compatibility}% · {siteConfig.creatorName}
        </p>
      </div>
    </>
  );
}

export const ShareExportCard = forwardRef<HTMLDivElement, ShareExportCardProps>(
  function ShareExportCard(props, ref) {
    const { template, format } = props;
    const { width, height } = getShareFormat(format);

    return (
      <div
        ref={ref}
        className="relative overflow-hidden bg-[#050608] text-white"
        style={{
          width,
          height,
          fontFamily: "var(--font-body), system-ui, sans-serif",
        }}
      >
        {template === "cinematic" && <CinematicLayout {...props} w={width} h={height} />}
        {template === "soul" && <SoulLayout {...props} w={width} h={height} />}
        {template === "legend" && <LegendLayout {...props} w={width} h={height} />}
      </div>
    );
  },
);
