import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Self-hosted Geist (sans) and Geist Mono. Variable woff2 files live at
// public/fonts/, sourced from Vercel's geist npm package (SIL OFL 1.1 — see
// public/fonts/LICENSE.txt). Self-hosting matches Vigil's "no telemetry,
// runs locally, no external dependencies" framing — zero Google Fonts
// requests at runtime, faster first paint for the static Cloudflare Pages
// export, and reproducible builds independent of Google's CDN.
const geist = localFont({
  src: "../public/fonts/Geist-Variable.woff2",
  variable: "--font-geist",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "../public/fonts/GeistMono-Variable.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

const siteUrl = "https://vigil.gocloudforge.com";
const ogImage = `${siteUrl}/og-image.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Vigil — Endpoint security for the AI developer",
  description:
    "Real-time monitoring for AI coding agents. Detect credential exposure, supply chain risk, and adversarial behavior on your machine. Free and open source.",
  keywords: [
    "AI security",
    "endpoint security",
    "Claude Code",
    "Cursor",
    "Copilot",
    "supply chain",
    "credential detection",
    "developer security",
  ],
  authors: [{ name: "Rajan Yadav" }, { name: "GoCloudForge, Inc." }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Vigil — Endpoint security for the AI developer",
    description:
      "Real-time monitoring for AI coding agents. Detect credential exposure, supply chain risk, and adversarial behavior on your machine. Free and open source.",
    images: [{ url: ogImage, width: 1200, height: 630, alt: "Vigil" }],
    siteName: "Vigil",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vigil — Endpoint security for the AI developer",
    description:
      "Real-time monitoring for AI coding agents. Detect credential exposure, supply chain risk, and adversarial behavior on your machine.",
    images: [ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
