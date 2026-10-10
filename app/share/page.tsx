import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { decodeSharePayload, payloadToDisplay } from "@/lib/sharing/payload";
import { siteConfig } from "@/lib/config";

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
    <main className="min-h-screen px-4 py-16 pb-28 text-white">
      <div className="mx-auto max-w-lg text-center">
        <p className="text-xs uppercase tracking-widest text-amber-200/70">
          Soul of Runeterra
        </p>
        <h1 className="mt-4 font-serif text-4xl">{champion.name}</h1>
        <p className="mt-1 text-sm text-white/55">{champion.title}</p>
        <p className="mt-2 text-white/70">{compatibility}% entertainment similarity</p>
        <div className="relative mx-auto mt-8 aspect-[3/4] max-w-sm overflow-hidden rounded-2xl border border-amber-500/30">
          <Image
            src={champion.imageUrl}
            alt=""
            fill
            className="object-cover object-top"
            unoptimized
          />
        </div>
        <ul className="mt-6 space-y-1 text-amber-100/85">
          {traits.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <p className="mt-6 font-serif text-lg italic leading-relaxed text-white/80">
          {shareQuote}
        </p>
        <Link
          href="/"
          className="mt-10 inline-block min-h-[44px] rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-black"
        >
          Discover your champion
        </Link>
        <p className="mt-8 text-xs text-white/40">{siteConfig.creatorName}</p>
      </div>
    </main>
  );
}
