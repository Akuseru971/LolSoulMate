export const siteConfig = {
  name: "Soul of Runeterra",
  tagline: "Every Soul Has a Legend.",
  creatorName: "Lore of Legends",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://soul-of-runeterra.vercel.app",
  kofiUrl: process.env.NEXT_PUBLIC_KOFI_URL ?? "",
  questionnaireMinutes: 6,
};

export function adsenseConfig() {
  return {
    publisherId: process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID ?? "",
    adSlot: process.env.NEXT_PUBLIC_ADSENSE_SLOT_ID ?? "",
  };
}
