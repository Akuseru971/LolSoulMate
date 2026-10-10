import type { ShareFormatId, ShareTemplateId } from "@/lib/sharing/formats";
import { getShareFormat } from "@/lib/sharing/formats";

export interface RegionBox {
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface CardTypography {
  brand: number;
  nick: number;
  name: number;
  title: number;
  quote: number;
  meta: number;
  trait: number;
  chapter: number;
}

export interface CardLayoutSpec {
  width: number;
  height: number;
  pad: number;
  art: RegionBox;
  footer: RegionBox;
  type: CardTypography;
}

function box(x: number, y: number, w: number, h: number): RegionBox {
  return { x, y, w, h };
}

function scaleType(base: CardTypography, factor: number): CardTypography {
  const s = (n: number) => Math.round(n * factor * 10) / 10;
  return {
    brand: s(base.brand),
    nick: s(base.nick),
    name: s(base.name),
    title: s(base.title),
    quote: s(base.quote),
    meta: s(base.meta),
    trait: s(base.trait),
    chapter: s(base.chapter),
  };
}

const BASE_TYPE: CardTypography = {
  brand: 14,
  nick: 22,
  name: 52,
  title: 18,
  quote: 24,
  meta: 14,
  trait: 16,
  chapter: 12,
};

function cinematicLayout(format: ShareFormatId): CardLayoutSpec {
  const { width: W, height: H } = getShareFormat(format);
  const pad = Math.round(W * 0.045);

  if (format === "cinematic") {
    return {
      width: W,
      height: H,
      pad,
      art: box(pad, pad, W - pad * 2, Math.round(H * 0.62)),
      footer: box(pad, H - Math.round(H * 0.28), W - pad * 2, Math.round(H * 0.22)),
      type: scaleType(BASE_TYPE, 1),
    };
  }
  if (format === "story") {
    return {
      width: W,
      height: H,
      pad,
      art: box(pad, pad, W - pad * 2, Math.round(H * 0.42)),
      footer: box(pad, Math.round(H * 0.48), W - pad * 2, H - Math.round(H * 0.48) - pad),
      type: scaleType(BASE_TYPE, 0.72),
    };
  }
  if (format === "portrait") {
    return {
      width: W,
      height: H,
      pad,
      art: box(pad, pad, W - pad * 2, Math.round(H * 0.44)),
      footer: box(pad, Math.round(H * 0.5), W - pad * 2, H - Math.round(H * 0.5) - pad),
      type: scaleType(BASE_TYPE, 0.68),
    };
  }
  return {
    width: W,
    height: H,
    pad,
    art: box(pad, pad, W - pad * 2, Math.round(H * 0.52)),
    footer: box(pad, Math.round(H * 0.56), W - pad * 2, H - Math.round(H * 0.56) - pad),
    type: scaleType(BASE_TYPE, 0.62),
  };
}

function soulLayout(format: ShareFormatId): CardLayoutSpec {
  const { width: W, height: H } = getShareFormat(format);
  const pad = Math.round(W * 0.05);
  const landscape = W >= H;

  if (landscape) {
    return {
      width: W,
      height: H,
      pad,
      art: box(pad, pad, Math.round(W * 0.58), H - pad * 2),
      footer: box(Math.round(W * 0.62), pad, W - Math.round(W * 0.62) - pad, H - pad * 2),
      type: scaleType(BASE_TYPE, 0.88),
    };
  }

  const artH =
    format === "story"
      ? Math.round(H * 0.38)
      : format === "portrait"
        ? Math.round(H * 0.4)
        : Math.round(H * 0.44);

  return {
    width: W,
    height: H,
    pad,
    art: box(pad, Math.round(H * 0.12), W - pad * 2, artH),
    footer: box(pad, pad + Math.round(H * 0.12) + artH + pad, W - pad * 2, H - artH - Math.round(H * 0.12) - pad * 3),
    type: scaleType(
      BASE_TYPE,
      format === "story" ? 0.7 : format === "portrait" ? 0.68 : 0.64,
    ),
  };
}

function legendLayout(format: ShareFormatId): CardLayoutSpec {
  const { width: W, height: H } = getShareFormat(format);
  const pad = Math.round(W * 0.055);
  const landscape = W >= H;

  if (landscape) {
    return {
      width: W,
      height: H,
      pad,
      art: box(pad, Math.round(H * 0.08), W - pad * 2, Math.round(H * 0.55)),
      footer: box(pad, Math.round(H * 0.66), W - pad * 2, H - Math.round(H * 0.66) - pad),
      type: scaleType(BASE_TYPE, 0.9),
    };
  }

  const artH =
    format === "story"
      ? Math.round(H * 0.36)
      : format === "portrait"
        ? Math.round(H * 0.38)
        : Math.round(H * 0.42);

  return {
    width: W,
    height: H,
    pad,
    art: box(pad, Math.round(H * 0.1), W - pad * 2, artH),
    footer: box(pad, pad + Math.round(H * 0.1) + artH + pad, W - pad * 2, H - artH - Math.round(H * 0.1) - pad * 3),
    type: scaleType(BASE_TYPE, format === "square" ? 0.62 : 0.7),
  };
}

export function getCardLayout(
  template: ShareTemplateId,
  format: ShareFormatId,
): CardLayoutSpec {
  if (template === "cinematic") return cinematicLayout(format);
  if (template === "soul") return soulLayout(format);
  return legendLayout(format);
}

export type LayoutKey = `${ShareTemplateId}:${ShareFormatId}`;

export function layoutKey(template: ShareTemplateId, format: ShareFormatId): LayoutKey {
  return `${template}:${format}`;
}
