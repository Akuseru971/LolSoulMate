"use client";

import { forwardRef } from "react";
import { siteConfig } from "@/lib/config";
import type { ShareFormatId, ShareTemplateId } from "@/lib/sharing/formats";
import { getShareFormat } from "@/lib/sharing/formats";

export interface ShareExportCardProps {
  template: ShareTemplateId;
  format: ShareFormatId;
  championName: string;
  championTitle: string;
  region: string;
  imageSrc: string;
  compatibility: number;
  traits: string[];
  quote: string;
}

function fitNameSize(name: string, base: number): number {
  if (name.length > 14) return base * 0.72;
  if (name.length > 10) return base * 0.85;
  return base;
}

function CinematicLayout({
  w,
  h,
  championName,
  imageSrc,
  compatibility,
  quote,
}: ShareExportCardProps & { w: number; h: number }) {
  const nameSize = fitNameSize(championName, h * 0.055);
  const artHeight = h * (h > w ? 0.58 : 0.62);
  return (
    <>
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #0a1018 0%, #050608 55%, #000 100%)",
        }}
      />
      <div className="relative z-10 flex h-full flex-col p-[5%]">
        <p
          className="uppercase tracking-[0.35em] text-amber-200/75"
          style={{ fontSize: h * 0.014 }}
        >
          Soul of Runeterra
        </p>
        <div
          className="relative mt-[3%] w-full overflow-hidden"
          style={{ height: artHeight, borderRadius: h * 0.012 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt=""
            className="h-full w-full object-cover object-top"
            crossOrigin="anonymous"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, transparent 35%, rgba(5,6,8,0.92) 100%)",
            }}
          />
        </div>
        <h2
          className="font-serif leading-none text-white"
          style={{ fontSize: nameSize, marginTop: h * 0.025 }}
        >
          {championName}
        </h2>
        <p className="text-white/55" style={{ fontSize: h * 0.018, marginTop: h * 0.01 }}>
          {compatibility}% similarity
        </p>
        <p
          className="font-serif italic leading-snug text-amber-50/90"
          style={{ fontSize: h * 0.024, marginTop: h * 0.03, maxWidth: "92%" }}
        >
          {quote}
        </p>
        <div className="mt-auto flex justify-between text-white/45" style={{ fontSize: h * 0.014 }}>
          <span>{siteConfig.siteUrl.replace(/^https?:\/\//, "")}</span>
          <span>{siteConfig.creatorName}</span>
        </div>
      </div>
    </>
  );
}

function SoulLayout({
  w,
  h,
  championName,
  imageSrc,
  compatibility,
  traits,
  quote,
}: ShareExportCardProps & { w: number; h: number }) {
  const stacked = h / w > 1.2;
  return (
    <>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 70% 20%, rgba(201,162,39,0.12), transparent 45%), #070b10",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "repeating-radial-gradient(circle at 50% 50%, rgba(255,255,255,0.04) 0 1px, transparent 1px 48px)",
        }}
      />
      <div
        className={`relative z-10 flex h-full p-[5%] ${stacked ? "flex-col" : "flex-row gap-[4%]"}`}
      >
        <div
          className={`relative overflow-hidden border border-amber-500/25 ${stacked ? "w-full" : "shrink-0"}`}
          style={{
            width: stacked ? "100%" : w * 0.44,
            height: stacked ? h * 0.4 : h * 0.78,
            borderRadius: h * 0.01,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt=""
            className="h-full w-full object-cover object-top"
            crossOrigin="anonymous"
          />
        </div>
        <div className="flex flex-1 flex-col justify-between">
          <div>
            <p
              className="uppercase tracking-[0.3em] text-amber-200/70"
              style={{ fontSize: h * 0.013 }}
            >
              The Soul
            </p>
            <h2
              className="font-serif text-amber-50"
              style={{ fontSize: fitNameSize(championName, h * 0.048), marginTop: h * 0.015 }}
            >
              {championName}
            </h2>
            <p
              className="font-serif text-amber-200/90"
              style={{ fontSize: h * 0.038, marginTop: h * 0.02 }}
            >
              {compatibility}%
            </p>
            <ul className="text-amber-100/85" style={{ fontSize: h * 0.022, marginTop: h * 0.025 }}>
              {traits.map((t) => (
                <li key={t} style={{ marginTop: h * 0.008 }}>
                  {t}
                </li>
              ))}
            </ul>
            <p
              className="font-serif italic text-white/80"
              style={{ fontSize: h * 0.02, marginTop: h * 0.025 }}
            >
              {quote}
            </p>
          </div>
          <p className="text-white/40" style={{ fontSize: h * 0.013 }}>
            {siteConfig.creatorName} · {siteConfig.siteUrl.replace(/^https?:\/\//, "")}
          </p>
        </div>
      </div>
    </>
  );
}

function LegendLayout({
  h,
  championName,
  championTitle,
  region,
  imageSrc,
  compatibility,
  quote,
}: ShareExportCardProps & { w: number; h: number }) {
  const frame = h * 0.012;
  return (
    <>
      <div className="absolute inset-0 bg-[#06080d]" />
      <div
        className="absolute inset-[3%] border border-amber-500/20"
        style={{ boxShadow: "inset 0 0 80px rgba(0,0,0,0.55)" }}
      />
      <div className="relative z-10 flex h-full flex-col p-[7%]">
        <p className="uppercase tracking-[0.28em] text-amber-200/65" style={{ fontSize: h * 0.013 }}>
          Soul of Runeterra
        </p>
        <div
          className="relative mt-[4%] flex-1 overflow-hidden"
          style={{ minHeight: h * 0.42, borderRadius: frame }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt=""
            className="h-full w-full object-cover object-[center_15%]"
            crossOrigin="anonymous"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(0deg, rgba(6,8,13,0.95) 0%, transparent 55%)",
            }}
          />
          <div className="absolute bottom-[6%] left-[5%] right-[5%]">
            <h2
              className="font-serif text-white"
              style={{ fontSize: fitNameSize(championName, h * 0.045) }}
            >
              {championName}
            </h2>
            <p className="text-white/55" style={{ fontSize: h * 0.016 }}>
              {region} · {championTitle}
            </p>
          </div>
        </div>
        <p
          className="font-serif leading-relaxed text-amber-50/92"
          style={{ fontSize: h * 0.026, marginTop: h * 0.03 }}
        >
          {quote}
        </p>
        <p className="text-white/45" style={{ fontSize: h * 0.015, marginTop: h * 0.015 }}>
          {compatibility}% similarity · {siteConfig.siteUrl.replace(/^https?:\/\//, "")}
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
        {template === "cinematic" && (
          <CinematicLayout {...props} w={width} h={height} />
        )}
        {template === "soul" && <SoulLayout {...props} w={width} h={height} />}
        {template === "legend" && <LegendLayout {...props} w={width} h={height} />}
      </div>
    );
  },
);
