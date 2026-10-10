"use client";

import { forwardRef } from "react";
import type { ShareFormatId, ShareTemplateId } from "@/lib/sharing/formats";
import type {
  ArtworkDisplayMode,
  ArtworkFrame,
  UserArtTransform,
} from "@/lib/champions/visualTypes";
import { CinematicCard } from "./layouts/CinematicCard";
import { SoulCard } from "./layouts/SoulCard";
import { LegendCard } from "./layouts/LegendCard";
import { getShareFormat } from "@/lib/sharing/formats";

export interface ShareExportCardProps {
  template: ShareTemplateId;
  format: ShareFormatId;
  championName: string;
  championTitle: string;
  region: string;
  imageSrc: string;
  artFrame: ArtworkFrame;
  artworkMode?: ArtworkDisplayMode;
  userTransform?: UserArtTransform;
  compatibility: number;
  traits: string[];
  quote: string;
  showNickname: boolean;
  displayNickname?: string;
}

export const ShareExportCard = forwardRef<HTMLDivElement, ShareExportCardProps>(
  function ShareExportCard(props, ref) {
    const { template, format } = props;
    const { width, height } = getShareFormat(format);

    return (
      <div ref={ref} style={{ width, height }}>
        {template === "cinematic" && <CinematicCard {...props} />}
        {template === "soul" && <SoulCard {...props} />}
        {template === "legend" && <LegendCard {...props} />}
      </div>
    );
  },
);
