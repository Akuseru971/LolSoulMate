/** Prefetch champion splash for reliable canvas export (CORS-safe data URL when possible). */
export async function resolveImageSrcForExport(url: string): Promise<string> {
  if (typeof window === "undefined") return url;
  try {
    const res = await fetch(url, { mode: "cors", credentials: "omit" });
    if (!res.ok) return url;
    const blob = await res.blob();
    return await new Promise<string>((resolve) => {
      const reader = new FileReader();
      reader.onload = () => resolve(typeof reader.result === "string" ? reader.result : url);
      reader.onerror = () => resolve(url);
      reader.readAsDataURL(blob);
    });
  } catch {
    return url;
  }
}
