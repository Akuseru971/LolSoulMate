/**
 * Artwork framing coordinate system (documented):
 * - focalX, focalY: percentage point on the splash art (0–100), used as object-position and transform-origin.
 * - scale: zoom multiplier applied after cover sizing (1 = default cover, >1 zooms in).
 * - panX, panY: optional normalized pan -1..1 applied as translate(% of container) for user/studio adjustments.
 */
export interface ArtworkFrame {
  focalX: number;
  focalY: number;
  scale: number;
}

export type VisualContextKey =
  | "revealMobile"
  | "revealDesktop"
  | "result"
  | "shareStory"
  | "sharePortrait"
  | "shareSquare"
  | "altThumb";

export interface ChampionVisualProfile {
  championId: string;
  /** Manual QA status — false until tuned in /dev/champion-framing */
  verified: boolean;
  revealMobile: ArtworkFrame;
  revealDesktop: ArtworkFrame;
  result: ArtworkFrame;
  shareStory: ArtworkFrame;
  sharePortrait: ArtworkFrame;
  shareSquare: ArtworkFrame;
  altThumb: ArtworkFrame;
}

export interface UserArtTransform {
  panX: number;
  panY: number;
  zoom: number;
}

export const DEFAULT_USER_TRANSFORM: UserArtTransform = {
  panX: 0,
  panY: 0,
  zoom: 1,
};

export function mergeArtworkFrame(
  base: ArtworkFrame,
  user: UserArtTransform = DEFAULT_USER_TRANSFORM,
): ArtworkFrame & UserArtTransform {
  const zoom = Math.min(2.2, Math.max(0.85, base.scale * user.zoom));
  return {
    focalX: base.focalX,
    focalY: base.focalY,
    scale: zoom,
    panX: user.panX,
    panY: user.panY,
    zoom: user.zoom,
  };
}

export function shareContextForFormat(format: "story" | "portrait" | "square"): VisualContextKey {
  if (format === "portrait") return "sharePortrait";
  if (format === "square") return "shareSquare";
  return "shareStory";
}
