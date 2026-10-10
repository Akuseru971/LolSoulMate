export interface ImageWaitResult {
  ok: boolean;
  failed: string[];
}

export async function waitForFonts(timeoutMs = 5000): Promise<void> {
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

function waitOneImage(img: HTMLImageElement, timeoutMs: number): Promise<boolean> {
  return new Promise((resolve) => {
    const finish = (ok: boolean) => resolve(ok);
    if (img.complete && img.naturalWidth > 0 && img.naturalHeight > 0) {
      finish(true);
      return;
    }
    const onLoad = () => {
      if (img.naturalWidth > 0 && img.naturalHeight > 0) finish(true);
      else finish(false);
    };
    const onError = () => finish(false);
    img.addEventListener("load", onLoad, { once: true });
    img.addEventListener("error", onError, { once: true });
    setTimeout(() => finish(false), timeoutMs);
  });
}

export async function waitForImages(
  root: HTMLElement,
  timeoutMs = 10000,
): Promise<ImageWaitResult> {
  const imgs = Array.from(root.querySelectorAll("img"));
  if (imgs.length === 0) {
    return { ok: false, failed: ["no-images"] };
  }
  const results = await Promise.all(imgs.map((img) => waitOneImage(img, timeoutMs)));
  const failed: string[] = [];
  imgs.forEach((img, i) => {
    if (!results[i]) failed.push(img.src.slice(0, 80));
  });
  return { ok: failed.length === 0, failed };
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
