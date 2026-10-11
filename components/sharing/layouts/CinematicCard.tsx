"use client";

import { siteConfig } from "@/lib/config";
import { soulPortraitLabel } from "@/lib/champions/nickname";
import { getCardLayout } from "@/lib/sharing/layoutMetrics";
import type { ShareExportCardProps } from "../ShareExportCard";
import { CardArtPlaque } from "../primitives/CardArtPlaque";
import { CardCanvas, fitNameSize } from "../primitives/CardChrome";
import { SoulSeal } from "@/components/ornaments/SoulSeal";

/**
 * A collectible composition, not a web page screenshot.
 * Every coordinate is in export pixels; the live preview uses the exact same card.
 * The artwork is always rendered in full mode unless the visitor enables artistic crop.
 */
export function CinematicCard(props: ShareExportCardProps) {
  const { championName, championTitle, region, quote, compatibility, showNickname, displayNickname } = props;
  const { width: W, height: H } = getCardLayout("cinematic", props.format);
  const horizontal = W > H * 1.3;
  const square = Math.abs(W - H) < 100;
  const pad = horizontal ? 70 : square ? 62 : 72;
  const nick = showNickname && displayNickname ? soulPortraitLabel(displayNickname) : "YOUR SOUL";
  const artTop = horizontal ? 86 : square ? 88 : 156;
  const artWidth = W - 2 * pad;
  const artHeight = horizontal ? 660 : Math.round(artWidth * 9 / 16);
  const contentTop = artTop + artHeight + (horizontal ? 0 : square ? 28 : 62);
  const nameSize = fitNameSize(championName, horizontal ? 82 : square ? 76 : 116);
  const quoteSize = horizontal ? 29 : square ? 28 : 43;

  return (
    <CardCanvas
      width={W}
      height={H}
      background="radial-gradient(ellipse at 50% 28%, #223044 0%, #11151e 46%, #050608 85%)"
    >
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 80% 65% at 50% 68%, rgba(197,164,109,0.10), transparent 70%)"
      }} />
      <div className="absolute pointer-events-none" style={{
        inset: 26, border: "1px solid rgba(197,164,109,0.28)"
      }} />
      <div className="absolute pointer-events-none" style={{
        inset: 39, border: "1px solid rgba(197,164,109,0.08)"
      }} />
      <div className="absolute flex items-center justify-between" style={{
        top: horizontal ? 43 : 72, left: pad, right: pad, color: "#D9BE8E"
      }}>
        <span style={{ fontSize: horizontal ? 20 : 19, letterSpacing: "0.27em", fontWeight: 500 }}>
          SOUL OF RUNETERRA
        </span>
        <SoulSeal size={horizontal ? 29 : 35} className="opacity-85" />
      </div>
      <CardArtPlaque {...props} region={{
        x: pad, y: artTop, w: artWidth, h: artHeight
      }} rounded={4} />
      <div className="absolute pointer-events-none" style={{
        left: pad, top: artTop + artHeight - 4, width: artWidth, height: 4,
        background: "linear-gradient(90deg,transparent,#C5A46D,transparent)"
      }} />

      {horizontal ? (
        <>
          <div className="absolute" style={{ left: pad, top: 796, width: 850 }}>
            <p style={{ fontSize: 25, color: "#D5B985", letterSpacing: "0.12em" }}>{nick}</p>
            <h2 className="font-serif" style={{
              marginTop: 10, fontSize: nameSize, lineHeight: 1.0, color: "#F5EDDF"
            }}>{championName}</h2>
            <p style={{ marginTop: 10, fontSize: 23, color: "#AEA69B" }}>
              {region} · {championTitle} · {compatibility}% resonance
            </p>
          </div>
          <div className="absolute flex items-center" style={{
            left: 1040, right: pad, top: 795, height: 170,
            paddingLeft: 38, borderLeft: "1px solid rgba(197,164,109,.5)"
          }}>
            <p className="font-serif italic" style={{
              color: "#E9DCC6", fontSize: quoteSize, lineHeight: 1.3,
              overflowWrap: "anywhere"
            }}>{quote}</p>
          </div>
        </>
      ) : (
        <div className="absolute flex flex-col items-center text-center"
          style={{ left: pad + 24, right: pad + 24, top: contentTop, bottom: square ? 68 : 115 }}>
          <p style={{
            fontSize: square ? 21 : 32, color: "#D5B985", letterSpacing: "0.17em",
            textTransform: "uppercase", overflowWrap: "anywhere"
          }}>{nick}</p>
          <h2 className="font-serif" style={{
            marginTop: square ? 12 : 24, fontSize: nameSize, lineHeight: 1.04,
            color: "#F6EEDF", overflowWrap: "anywhere"
          }}>{championName}</h2>
          <p style={{
            marginTop: square ? 8 : 15, fontSize: square ? 18 : 27,
            color: "#C1B5A4", letterSpacing: "0.05em"
          }}>{championTitle} · {region}</p>
          <div className="flex items-center justify-center" style={{
            width: "80%", gap: 24, marginTop: square ? 18 : 45, color: "#C5A46D"
          }}>
            <span style={{ flex: 1, height: 1, background: "linear-gradient(90deg,transparent,#C5A46D)" }} />
            <SoulSeal size={square ? 22 : 38} />
            <span style={{ flex: 1, height: 1, background: "linear-gradient(90deg,#C5A46D,transparent)" }} />
          </div>
          <p className="font-serif italic" style={{
            maxWidth: "94%", marginTop: square ? 16 : 46, fontSize: quoteSize,
            lineHeight: 1.42, color: "#F0E3D1", overflowWrap: "anywhere"
          }}>{quote}</p>
          <p style={{
            marginTop: square ? 14 : 34, fontSize: square ? 17 : 25,
            color: "#D4B784", letterSpacing: "0.12em"
          }}>{compatibility}% RESONANCE</p>
        </div>
      )}
      <div className="absolute flex justify-between" style={{
        bottom: horizontal ? 31 : 63, left: pad, right: pad,
        color: "#A89B8A", fontSize: horizontal ? 17 : square ? 15 : 19,
        letterSpacing: "0.08em"
      }}>
        <span>{siteConfig.creatorName}</span>
        <span>SOUL OF RUNETERRA</span>
      </div>
    </CardCanvas>
  );
}
