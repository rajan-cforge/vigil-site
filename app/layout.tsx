import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
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
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
