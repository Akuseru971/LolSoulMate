import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Atmosphere } from "@/components/layout/Atmosphere";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ConsentProvider } from "@/components/privacy/ConsentContext";
import { CookieBanner } from "@/components/privacy/CookieBanner";
import { AdSenseScript } from "@/components/ads/AdSenseScript";
import { siteConfig } from "@/lib/config";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const body = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | An interactive Runeterra story`,
  description:
    "An unofficial fan experience that pairs your choices with League of Legends champions through canonical lore, computed locally in your browser.",
  metadataBase: new URL(siteConfig.siteUrl),
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.tagline,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased text-white">
        <ConsentProvider>
          <AdSenseScript />
          <Atmosphere />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <CookieBanner />
        </ConsentProvider>
      </body>
    </html>
  );
}
