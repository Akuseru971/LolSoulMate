export async function waitForFonts(timeoutMs = 4000): Promise<void> {
  if (typeof document === "undefined") return;
  try {
    await Promise.race([
      document.fonts.ready,
      new Promise((r) => setTimeout(r, timeoutMs)),
    ]);
  } catch {
    /* ignore */
  }
}

export async function waitForImages(root: HTMLElement, timeoutMs = 8000): Promise<void> {
  const imgs = Array.from(root.querySelectorAll("img"));
  await Promise.all(
    imgs.map(
      (img) =>
        new Promise<void>((resolve) => {
          if (img.complete && img.naturalWidth > 0) {
            resolve();
            return;
          }
          const done = () => resolve();
          img.addEventListener("load", done, { once: true });
          img.addEventListener("error", done, { once: true });
          setTimeout(done, timeoutMs);
        }),
    ),
  );
}

export function exportCaptureOptions(width: number, height: number) {
  return {
    cacheBust: true,
    pixelRatio: 1,
    width,
    height,
    style: {
      transform: "scale(1)",
      transformOrigin: "top left",
    },
  };
}
