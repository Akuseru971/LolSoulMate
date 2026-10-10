import { ImageResponse } from "next/og";
import { decodeSharePayload, payloadToDisplay } from "@/lib/sharing/payload";
import { siteConfig } from "@/lib/config";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const d = searchParams.get("d");
  const payload = d ? decodeSharePayload(d) : null;
  const display = payload ? payloadToDisplay(payload) : null;

  const name = display?.champion.name ?? "Soul of Runeterra";
  const score = display?.compatibility ?? 0;
  const quote = display?.shareQuote ?? "Which champion shares your story?";
  const imageUrl = display?.champion.imageUrl;

  let artSrc: string | null = null;
  if (imageUrl) {
    try {
      const res = await fetch(imageUrl);
      if (res.ok) {
        const buf = await res.arrayBuffer();
        const bytes = new Uint8Array(buf);
        let binary = "";
        for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
        artSrc = `data:image/jpeg;base64,${btoa(binary)}`;
      }
    } catch {
      artSrc = null;
    }
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(135deg, #0a1018 0%, #050608 100%)",
          color: "#f5f5f5",
          padding: 48,
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 22, letterSpacing: 6, color: "#c9a227" }}>
          SOUL OF RUNETERRA
        </div>
        <div style={{ display: "flex", flex: 1, marginTop: 32, gap: 32 }}>
          {artSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={artSrc}
              alt=""
              width={320}
              height={420}
              style={{
                objectFit: "cover",
                borderRadius: 8,
                border: "2px solid rgba(201,162,39,0.35)",
              }}
            />
          ) : (
            <div
              style={{
                width: 320,
                height: 420,
                background: "#111820",
                borderRadius: 8,
              }}
            />
          )}
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <div style={{ fontSize: 56, fontWeight: 600 }}>{name}</div>
            <div style={{ fontSize: 28, marginTop: 12, color: "#c9a227" }}>{score}% similarity</div>
            <div
              style={{
                fontSize: 26,
                marginTop: 24,
                lineHeight: 1.35,
                fontStyle: "italic",
                color: "rgba(255,255,255,0.85)",
              }}
            >
              {quote.length > 120 ? `${quote.slice(0, 117)}...` : quote}
            </div>
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 20, color: "rgba(255,255,255,0.45)" }}>
          {siteConfig.siteUrl.replace(/^https?:\/\//, "")} · {siteConfig.creatorName}
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
