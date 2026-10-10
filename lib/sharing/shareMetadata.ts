import type { Metadata } from "next";
import { decodeSharePayload, payloadToDisplay } from "@/lib/sharing/payload";
import { siteConfig } from "@/lib/config";

export function buildSharePageMetadata(encoded: string | undefined): Metadata {
  if (!encoded) {
    return {
      title: `Shared result | ${siteConfig.name}`,
      description: "A shared Soul of Runeterra champion reading.",
    };
  }

  const payload = decodeSharePayload(encoded);
  if (!payload) {
    return {
      title: `Shared result | ${siteConfig.name}`,
      description: "This shared result link is invalid or expired.",
      robots: { index: false, follow: false },
    };
  }

  const display = payloadToDisplay(payload);
  if (!display) {
    return {
      title: `Shared result | ${siteConfig.name}`,
      description: "This shared result could not be loaded.",
      robots: { index: false, follow: false },
    };
  }

  const { champion, compatibility, shareQuote } = display;
  const title = `My Soul of Runeterra: ${champion.name}`;
  const description = `${champion.name} reflects these choices in Soul of Runeterra (${compatibility}% similarity). ${shareQuote} Which champion shares your story?`;

  const ogImage = `${siteConfig.siteUrl.replace(/\/$/, "")}/api/og/share?d=${encodeURIComponent(encoded)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `${siteConfig.siteUrl.replace(/\/$/, "")}/share?d=${encodeURIComponent(encoded)}`,
      images: [{ url: ogImage, width: 1200, height: 630, alt: champion.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
