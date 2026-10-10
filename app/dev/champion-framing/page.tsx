import { notFound } from "next/navigation";
import { ChampionFramingDev } from "./framing-client";

export default function ChampionFramingPage() {
  if (
    process.env.NODE_ENV === "production" &&
    process.env.ENABLE_DEV_TOOLS !== "true"
  ) {
    notFound();
  }
  return <ChampionFramingDev />;
}
