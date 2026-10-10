"use client";

import { forwardRef } from "react";
import { siteConfig } from "@/lib/config";
import type { ShareFormatId, ShareTemplateId } from "@/lib/sharing/formats";
import { getShareFormat } from "@/lib/sharing/formats";
import { artworkStyle } from "@/components/champions/ChampionArtwork";
import type {
  ArtworkDisplayMode,
  ArtworkFrame,
  UserArtTransform,
} from "@/lib/champions/visualTypes";
import { mergeArtworkFrame } from "@/lib/champions/visualTypes";
import {
  legendPortraitLabel,
  soulPortraitLabel,
} from "@/lib/champions/nickname";
import { ChapterSeparator } from "@/components/ornaments/ChapterSeparator";
import { SoulSeal } from "@/components/ornaments/SoulSeal";

export interface ShareExportCardProps {
  template: ShareTemplateId;
  format: ShareFormatId;
  championName: string;
  championTitle: string;
  region: string;
  imageSrc: string;
  artFrame: ArtworkFrame;
  artworkMode?: ArtworkDisplayMode;
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
  artworkMode = "full",
  maxHeight,
  rounded = 0,
}: {
  imageSrc: string;
  artFrame: ArtworkFrame;
  userTransform?: UserArtTransform;
  artworkMode?: ArtworkDisplayMode;
  maxHeight?: number;
  rounded?: number;
}) {
  const merged = mergeArtworkFrame(artFrame, userTransform, artworkMode);
  return (
    <div
      className="relative w-full overflow-hidden bg-[#111b2a]"
      style={{
        aspectRatio: "16 / 9",
        maxHeight,
        borderRadius: rounded,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imageSrc}
        alt=""
        crossOrigin="anonymous"
        className="absolute inset-0 h-full w-full"
        style={artworkStyle(merged, artworkMode)}
      />
    </div>
  );
}

function CinematicLayout(props: ShareExportCardProps & { w: number; h: number }) {
  const {
    w,
    h,
    championName,
    quote,
    compatibility,
    showNickname,
    displayNickname,
    artworkMode,
  } = props;
  const landscape = w >= h;
  const nick = showNickname ? displayNickname : undefined;
  const artMaxH = landscape ? h * 0.58 : h * 0.38;

  if (landscape) {
    return (
      <>
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #0a1018 0%, #050608 55%, #000 100%)",
          }}
        />
        <div className="relative z-10 flex h-full flex-col p-[4%]">
          <div className="flex flex-1 flex-col justify-center">
            <ArtSlot
              imageSrc={props.imageSrc}
              artFrame={props.artFrame}
              userTransform={props.userTransform}
              artworkMode={artworkMode}
              maxHeight={artMaxH}
              rounded={h * 0.01}
            />
          </div>
          <div className="mt-[2.5%] flex items-end justify-between gap-[4%]">
            <div className="min-w-0 flex-1">
              {nick && (
                <p className="text-[#c5a46d]/90" style={{ fontSize: h * 0.022 }}>
                  {soulPortraitLabel(nick)}
                </p>
              )}
              <h2
                className="font-serif leading-none text-white"
                style={{ fontSize: fitTextSize(championName, h * 0.065), marginTop: h * 0.008 }}
              >
                {championName}
              </h2>
              <p className="text-white/45" style={{ fontSize: h * 0.016, marginTop: h * 0.01 }}>
                {compatibility}% similarity
              </p>
            </div>
            <p
              className="max-w-[42%] font-serif italic leading-snug text-[#e6ddce]/88"
              style={{ fontSize: h * 0.02 }}
            >
              {quote}
            </p>
          </div>
          <div
            className="mt-[2%] flex justify-between text-white/35"
            style={{ fontSize: h * 0.012 }}
          >
            <span>Soul of Runeterra</span>
            <span>{siteConfig.siteUrl.replace(/^https?:\/\//, "")}</span>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #0a1018 0%, #050608 60%, #000 100%)",
        }}
      />
      <div className="relative z-10 flex h-full flex-col p-[5%]">
        <p className="uppercase tracking-[0.35em] text-[#c5a46d]/75" style={{ fontSize: h * 0.012 }}>
          Soul of Runeterra
        </p>
        <ArtSlot
          imageSrc={props.imageSrc}
          artFrame={props.artFrame}
          userTransform={props.userTransform}
          artworkMode={artworkMode}
          maxHeight={artMaxH}
          rounded={h * 0.012}
        />
        {nick && (
          <p className="text-[#c5a46d]/85" style={{ fontSize: h * 0.02, marginTop: h * 0.022 }}>
            {soulPortraitLabel(nick)}
          </p>
        )}
        <h2
          className="font-serif leading-none text-white"
          style={{ fontSize: fitTextSize(championName, h * 0.048), marginTop: h * 0.018 }}
        >
          {championName}
        </h2>
        <p className="text-white/50" style={{ fontSize: h * 0.016 }}>
          {compatibility}% similarity
        </p>
        <ChapterSeparator className="my-[3%]" />
        <p
          className="font-serif italic leading-snug text-[#e6ddce]/90"
          style={{ fontSize: h * 0.021, flex: 1 }}
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
  const {
    w,
    h,
    championName,
    traits,
    compatibility,
    quote,
    showNickname,
    displayNickname,
    artworkMode,
  } = props;
  const stacked = h / w > 1.05;
  const nick = showNickname ? displayNickname : undefined;
  const artMaxH = stacked ? h * 0.32 : h * 0.52;

  return (
    <>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 30% 12%, rgba(197,164,109,0.12), transparent 48%), #070b10",
        }}
      />
      <div className="relative z-10 flex h-full flex-col p-[5%]">
        <div className="flex items-center gap-[3%]">
          <SoulSeal size={h * 0.04} className="text-[#c5a46d]/80" />
          <p className="uppercase tracking-[0.28em] text-[#718c8b]/90" style={{ fontSize: h * 0.011 }}>
            The Soul
          </p>
        </div>
        {nick && (
          <p
            className="font-serif text-[#e6ddce]/92"
            style={{ fontSize: fitTextSize(nick, h * 0.032), marginTop: h * 0.015 }}
          >
            {soulPortraitLabel(nick)}
          </p>
        )}
        <div
          className={`mt-[2.5%] flex flex-1 ${stacked ? "flex-col gap-[3%]" : "flex-row gap-[4%]"}`}
        >
          <div className={stacked ? "w-full" : "w-[48%] shrink-0"}>
            <ArtSlot
              imageSrc={props.imageSrc}
              artFrame={props.artFrame}
              userTransform={props.userTransform}
              artworkMode={artworkMode}
              maxHeight={artMaxH}
            />
          </div>
          <div className="flex min-w-0 flex-1 flex-col justify-center">
            <h2
              className="font-serif text-[#e6ddce]"
              style={{ fontSize: fitTextSize(championName, h * 0.038) }}
            >
              {championName}
            </h2>
            <p className="font-serif text-[#c5a46d]/90" style={{ fontSize: h * 0.028 }}>
              {compatibility}%
            </p>
            <ul className="text-[#e6ddce]/80" style={{ fontSize: h * 0.018, marginTop: h * 0.018 }}>
              {traits.slice(0, 3).map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
        <p
          className="font-serif italic text-white/72"
          style={{ fontSize: h * 0.018, marginTop: h * 0.02 }}
        >
          {quote}
        </p>
        <p className="text-white/38" style={{ fontSize: h * 0.011, marginTop: "auto" }}>
          {siteConfig.creatorName}
        </p>
      </div>
    </>
  );
}

function LegendLayout(props: ShareExportCardProps & { w: number; h: number }) {
  const {
    h,
    championName,
    championTitle,
    region,
    quote,
    compatibility,
    showNickname,
    displayNickname,
    artworkMode,
  } = props;
  const artMaxH = props.w < props.h ? h * 0.34 : h * 0.48;
  const nick = showNickname ? displayNickname : undefined;

  return (
    <>
      <div className="absolute inset-0 bg-[#06080d]" />
      <div className="absolute inset-[2.5%] border border-[#c5a46d]/18" />
      <div className="relative z-10 flex h-full flex-col p-[5.5%]">
        <p
          className="type-chapter"
          style={{ fontSize: h * 0.011, marginBottom: h * 0.012 }}
        >
          A chapter from Runeterra
        </p>
        <ArtSlot
          imageSrc={props.imageSrc}
          artFrame={props.artFrame}
          userTransform={props.userTransform}
          artworkMode={artworkMode}
          maxHeight={artMaxH}
          rounded={h * 0.006}
        />
        {nick && (
          <p className="text-[#c5a46d]/75" style={{ fontSize: h * 0.016, marginTop: h * 0.018 }}>
            {legendPortraitLabel(nick)}
          </p>
        )}
        <h2
          className="font-serif text-white"
          style={{ fontSize: fitTextSize(championName, h * 0.036), marginTop: h * 0.012 }}
        >
          {championName}
        </h2>
        <p className="text-white/48" style={{ fontSize: h * 0.014 }}>
          {region} · {championTitle}
        </p>
        <p
          className="font-serif leading-relaxed text-[#e6ddce]/92"
          style={{ fontSize: h * 0.022, marginTop: h * 0.02, flex: 1 }}
        >
          {quote}
        </p>
        <p className="text-white/42" style={{ fontSize: h * 0.013 }}>
          {compatibility}% · {siteConfig.creatorName}
        </p>
      </div>
    </>
  );
}

export const ShareExportCard = forwardRef<HTMLDivElement, ShareExportCardProps>(
  function ShareExportCard(props, ref) {
    const { template, format, artworkMode = "full" } = props;
    const { width, height } = getShareFormat(format);
    const cardProps = { ...props, artworkMode };

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
        {template === "cinematic" && <CinematicLayout {...cardProps} w={width} h={height} />}
        {template === "soul" && <SoulLayout {...cardProps} w={width} h={height} />}
        {template === "legend" && <LegendLayout {...cardProps} w={width} h={height} />}
      </div>
    );
  },
);
