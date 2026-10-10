export type ShareTemplateId = "cinematic" | "soul" | "legend";

export type ShareFormatId = "story" | "portrait" | "square";

export interface ShareFormatSpec {
  id: ShareFormatId;
  label: string;
  width: number;
  height: number;
}

export const SHARE_FORMATS: ShareFormatSpec[] = [
  { id: "story", label: "Story", width: 1080, height: 1920 },
  { id: "portrait", label: "Portrait", width: 1080, height: 1350 },
  { id: "square", label: "Square", width: 1080, height: 1080 },
];

export function getShareFormat(id: ShareFormatId): ShareFormatSpec {
  return SHARE_FORMATS.find((f) => f.id === id) ?? SHARE_FORMATS[0];
}

export const SHARE_TEMPLATE_LABELS: Record<ShareTemplateId, string> = {
  cinematic: "Cinematic",
  soul: "The Soul",
  legend: "The Legend",
};
