/**
 * Full artwork mode: object-fit contain, centered, no preset crop.
 * Artistic crop: optional cover + focal/zoom (user studio or dev presets).
 */
export type ArtworkDisplayMode = "full" | "artisticCrop";

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
  | "shareCinematic"
  | "altThumb";

export interface ChampionVisualProfile {
  championId: string;
  verified: boolean;
  revealMobile: ArtworkFrame;
  revealDesktop: ArtworkFrame;
  result: ArtworkFrame;
  shareStory: ArtworkFrame;
  sharePortrait: ArtworkFrame;
  shareSquare: ArtworkFrame;
  shareCinematic: ArtworkFrame;
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
  mode: ArtworkDisplayMode = "artisticCrop",
): ArtworkFrame & UserArtTransform {
  if (mode === "full") {
    return {
      focalX: 50,
      focalY: 50,
      scale: 1,
      panX: 0,
      panY: 0,
      zoom: 1,
    };
  }
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

export type ShareFormatId = "cinematic" | "story" | "portrait" | "square";

export function shareContextForFormat(format: ShareFormatId): VisualContextKey {
  if (format === "cinematic") return "shareCinematic";
  if (format === "portrait") return "sharePortrait";
  if (format === "square") return "shareSquare";
  return "shareStory";
}

/** Standard 16:9 presentation for main illustrations */
export const ARTWORK_ASPECT = "16 / 9" as const;
