"use client";

import { siteConfig } from "@/lib/config";
import { soulPortraitLabel } from "@/lib/champions/nickname";
import { getCardLayout } from "@/lib/sharing/layoutMetrics";
import type { ShareExportCardProps } from "../ShareExportCard";
import { CardArtPlaque } from "../primitives/CardArtPlaque";
import { CardCanvas, fitNameSize } from "../primitives/CardChrome";

export function CinematicCard(props: ShareExportCardProps) {
  const { format, championName, quote, compatibility, showNickname, displayNickname } = props;
  const layout = getCardLayout("cinematic", format);
  const { width: W, height: H, pad, art, footer, type } = layout;
  const nick = showNickname ? displayNickname : undefined;
  const landscape = W >= H;

  const bg = landscape
    ? "radial-gradient(ellipse 120% 100% at 50% 0%, #141c28 0%, #050608 55%, #000 100%)"
    : "linear-gradient(180deg, #0a1018 0%, #050608 42%, #030508 100%)";

  return (
    <CardCanvas width={W} height={H} background={bg}>
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 80% 20%, rgba(197,164,109,0.12), transparent 45%)",
        }}
      />
      <CardArtPlaque
        {...props}
        region={art}
        rounded={landscape ? 6 : 10}
      />
      {landscape ? (
        <>
          <div
            className="absolute flex flex-col justify-end"
            style={{ left: footer.x, top: footer.y, width: footer.w, height: footer.h }}
          >
            {nick && (
              <p
                className="uppercase tracking-[0.22em] text-[var(--sor-gold)]/90"
                style={{ fontSize: type.nick }}
              >
                {soulPortraitLabel(nick)}
              </p>
            )}
            <h2
              className="font-serif leading-none text-white"
              style={{ fontSize: fitNameSize(championName, type.name), marginTop: nick ? 8 : 0 }}
            >
              {championName}
            </h2>
            <p className="text-white/45" style={{ fontSize: type.meta, marginTop: 6 }}>
              {compatibility}% resonance
            </p>
          </div>
          <p
            className="absolute font-serif italic leading-snug text-[var(--sor-ivory)]/88"
            style={{
              right: pad,
              bottom: pad + type.meta + 8,
              width: Math.round(W * 0.34),
              fontSize: type.quote,
            }}
          >
            {quote}
          </p>
          <p
            className="absolute text-white/35 uppercase tracking-[0.3em]"
            style={{ left: pad, bottom: pad, fontSize: type.brand }}
          >
            Soul of Runeterra
          </p>
        </>
      ) : (
        <div
          className="absolute flex flex-col"
          style={{ left: footer.x, top: footer.y, width: footer.w, height: footer.h }}
        >
          {nick && (
            <p
              className="font-serif text-[var(--sor-gold)]/92"
              style={{ fontSize: type.nick }}
            >
              {soulPortraitLabel(nick)}
            </p>
          )}
          <h2
            className="font-serif leading-tight text-white"
            style={{ fontSize: fitNameSize(championName, type.name), marginTop: 10 }}
          >
            {championName}
          </h2>
          <p className="text-white/45" style={{ fontSize: type.meta, marginTop: 6 }}>
            {compatibility}% · {siteConfig.creatorName}
          </p>
          <div
            className="my-4 h-px w-16 bg-gradient-to-r from-[var(--sor-gold)]/60 to-transparent"
            aria-hidden
          />
          <p
            className="font-serif italic leading-relaxed text-[var(--sor-ivory)]/90"
            style={{ fontSize: type.quote, flex: 1 }}
          >
            {quote}
          </p>
          <p
            className="mt-auto text-white/35"
            style={{ fontSize: type.brand }}
          >
            {siteConfig.siteUrl.replace(/^https?:\/\//, "")}
          </p>
        </div>
      )}
    </CardCanvas>
  );
}
