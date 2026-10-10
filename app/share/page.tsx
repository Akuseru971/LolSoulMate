import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { decodeSharePayload, payloadToDisplay } from "@/lib/sharing/payload";
import { buildSharePageMetadata } from "@/lib/sharing/shareMetadata";
import { SharePublicView } from "@/components/share/SharePublicView";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ d?: string }>;
}): Promise<Metadata> {
  const { d } = await searchParams;
  return buildSharePageMetadata(d);
}

export default async function SharePage({
  searchParams,
}: {
  searchParams: Promise<{ d?: string }>;
}) {
  const { d } = await searchParams;
  if (!d) notFound();

  const payload = decodeSharePayload(d);
  if (!payload) notFound();

  const display = payloadToDisplay(payload);
  if (!display) notFound();

  const { champion, compatibility, traits, shareQuote } = display;

  return (
    <SharePublicView
      champion={champion}
      compatibility={compatibility}
      traits={traits}
      shareQuote={shareQuote}
    />
  );
}
