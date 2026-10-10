import { notFound } from "next/navigation";

export const instant = false;
import Image from "next/image";
import Link from "next/link";
import { getShareSnapshot } from "@/lib/privacy/shareStore";
import { getChampionById } from "@/data/champions";
import { siteConfig } from "@/lib/config";

export default async function SharePage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  const snap = getShareSnapshot(token);
  if (!snap) notFound();

  const champion = getChampionById(snap.championId);
  if (!champion) notFound();

  return (
    <main className="min-h-screen px-4 py-16 text-white">
      <div className="mx-auto max-w-lg text-center">
        <p className="text-xs uppercase tracking-widest text-amber-200/70">
          Soul of Runeterra
        </p>
        <h1 className="mt-4 font-serif text-4xl">{champion.name}</h1>
        <p className="mt-2 text-white/70">{snap.compatibility}% resonance</p>
        <div className="relative mx-auto mt-8 aspect-[3/4] max-w-sm overflow-hidden rounded-2xl border border-amber-500/30">
          <Image
            src={champion.imageUrl}
            alt=""
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <ul className="mt-6 space-y-1 text-amber-100/85">
          {snap.definingTraits.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <p className="mt-6 font-serif italic text-white/80">{snap.shareQuote}</p>
        <Link
          href="/"
          className="mt-10 inline-block rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-black"
        >
          Discover your champion
        </Link>
        <p className="mt-8 text-xs text-white/40">{siteConfig.creatorName}</p>
      </div>
    </main>
  );
}
