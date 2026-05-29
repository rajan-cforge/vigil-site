import { Eye, ShieldCheck, Package } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  body: string;
}

const FEATURES: Feature[] = [
  {
    icon: Eye,
    title: "Four-layer monitoring",
    body: "API traffic via an AI-only HTTPS proxy, Claude Code session transcripts, browser AI through a Chrome extension, and process / filesystem / network observation for desktop apps. Set up once, captures continuously.",
  },
  {
    icon: ShieldCheck,
    title: "Credential leak detection",
    body: "Scans every captured prompt and response for 15+ patterns — AWS keys, GitHub tokens, API keys, JWTs, private keys, Luhn-validated cards. Severity-ranked, with drill-down to the exact conversation turn. Masked on display, auto-purged after 30 days.",
  },
  {
    icon: Package,
    title: "Supply chain intelligence",
    body: "Parses every install command an agent runs — npm, yarn, pnpm, pip, cargo, go get, gem, brew, apt, npx — and checks it against typosquat dictionaries and CVE data from OSV.dev, with threat-intel correlation from URLhaus and ThreatFox.",
  },
];

export function WhatVigilDoesSection() {
  return (
    <section id="what" className="border-b border-line py-22">
      <div className="mx-auto max-w-[1080px] px-7">
        <div className="mb-[18px] text-xs font-semibold uppercase tracking-[0.12em] text-brand">
          What Vigil does
        </div>
        <h2 className="mb-4 text-[clamp(28px,4vw,38px)] font-semibold leading-[1.1] tracking-[-0.025em]">
          Capture, detect, and trace — continuously.
        </h2>
        <p className="max-w-[680px] text-lg text-ink-2">
          Set up once. Vigil captures from the runtime layer — no code changes, no SDK, no sampling.
        </p>
        <div className="mt-11 grid gap-4 md:grid-cols-3">
          {FEATURES.map((f) => (
            <div key={f.title} className="rounded-xl border border-line bg-surface p-6">
              <div className="mb-4 grid size-[38px] place-items-center rounded-[10px] bg-hover text-brand">
                <f.icon className="size-[19px]" />
              </div>
              <h3 className="mb-2 text-[17px] font-semibold tracking-tight">{f.title}</h3>
              <p className="text-sm leading-relaxed text-ink-2">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
