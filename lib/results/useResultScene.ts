"use client";

import { useEffect, useState, type RefObject } from "react";
import type { ResultScrollScene } from "@/data/champions/resultThemes";

const SCENE_ORDER: ResultScrollScene[] = [
  "reveal",
  "connection",
  "fragments",
  "inner",
  "conclusion",
  "legacy",
];

export function useResultScene(
  refs: Record<ResultScrollScene, RefObject<HTMLElement | null>>,
): ResultScrollScene {
  const [scene, setScene] = useState<ResultScrollScene>("reveal");

  useEffect(() => {
    const elements = SCENE_ORDER.map((key) => ({ key, el: refs[key].current })).filter(
      (x): x is { key: ResultScrollScene; el: HTMLElement } => x.el != null,
    );
    if (elements.length === 0) return;

    const ratios = new Map<ResultScrollScene, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const key = (entry.target as HTMLElement).dataset.resultScene as ResultScrollScene;
          if (key) ratios.set(key, entry.intersectionRatio);
        }
        let best: ResultScrollScene = "reveal";
        let bestRatio = 0;
        for (const key of SCENE_ORDER) {
          const r = ratios.get(key) ?? 0;
          if (r > bestRatio) {
            bestRatio = r;
            best = key;
          }
        }
        if (bestRatio > 0.12) setScene(best);
      },
      { threshold: [0, 0.12, 0.25, 0.4, 0.55, 0.7] },
    );

    for (const { el } of elements) observer.observe(el);
    return () => observer.disconnect();
    // refs are stable RefObjects from parent
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return scene;
}
