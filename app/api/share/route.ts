import { NextResponse } from "next/server";
import { shareCreateSchema } from "@/lib/validation/schemas";
import { createShareToken } from "@/lib/privacy/shareStore";
import { checkRateLimit } from "@/lib/privacy/rateLimit";
import { siteConfig } from "@/lib/config";

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";
  const rate = checkRateLimit(`share:${ip}`, 20, 60_000);
  if (!rate.ok) {
    return NextResponse.json({ error: "Rate limited" }, { status: 429 });
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = shareCreateSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const token = createShareToken(parsed.data);
  const url = `${siteConfig.siteUrl}/share/${token}`;
  return NextResponse.json({ token, url });
}
