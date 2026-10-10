import { notFound } from "next/navigation";
import { DevNarrativePreview } from "./preview-client";

export default function DevNarrativePreviewPage() {
  if (
    process.env.NODE_ENV === "production" &&
    process.env.ENABLE_DEV_TOOLS !== "true"
  ) {
    notFound();
  }
  return <DevNarrativePreview />;
}
