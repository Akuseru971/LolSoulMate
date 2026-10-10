import { notFound } from "next/navigation";
import { ShareGalleryDev } from "./gallery-client";

export default function ShareGalleryDevPage() {
  if (
    process.env.NODE_ENV === "production" &&
    process.env.ENABLE_DEV_TOOLS !== "true"
  ) {
    notFound();
  }
  return <ShareGalleryDev />;
}
