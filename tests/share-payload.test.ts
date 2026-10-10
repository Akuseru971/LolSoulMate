import { describe, expect, it } from "vitest";
import {
  buildShareUrl,
  createSharePayload,
  decodeSharePayload,
  encodeSharePayload,
} from "@/lib/sharing/payload";

describe("share payload", () => {
  it("round-trips valid payload", () => {
    const payload = createSharePayload({
      championId: "irelia",
      compatibility: 87,
      traitDimensions: ["loyalty", "protectiveInstinct", "resilience"],
      shareQuote: "Destiny rhymes with courage.",
    });
    const encoded = encodeSharePayload(payload);
    const decoded = decodeSharePayload(encoded);
    expect(decoded).toEqual(payload);
  });

  it("rejects malicious champion id", () => {
    expect(decodeSharePayload("not-valid-base64!!!")).toBeNull();
  });

  it("builds share URL without server", () => {
    const payload = createSharePayload({
      championId: "lux",
      compatibility: 80,
      traitDimensions: ["idealism", "empathy", "courage"],
      shareQuote: "Light persists.",
    });
    const url = buildShareUrl(payload, "https://lolsoulmate.vercel.app");
    expect(url).toContain("/share?d=");
  });
});
