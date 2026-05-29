import { ArrowRight } from "lucide-react";
import { DashboardPreview } from "./DashboardPreview";
import { GithubMark } from "./icons/GithubMark";

export function HeroSection() {
  return (
    <header id="top" className="mx-auto max-w-[1080px] px-7 pb-22 pt-18 text-center">
      <span className="mb-7 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-[13px] text-ink-2">
        <span className="size-1.5 rounded-full bg-safe" />
        Open source · runs locally · no telemetry
      </span>
      <h1 className="mx-auto mb-5 max-w-[14ch] text-[clamp(38px,6vw,62px)] font-semibold leading-[1.04] tracking-[-0.035em]">
        Runtime security monitoring for <span className="text-brand">AI coding agents</span>
      </h1>
      <p className="mx-auto mb-8 max-w-[620px] text-[clamp(16px,2.2vw,19px)] leading-[1.55] text-ink-2">
        Capture what Claude Code, Cursor, ChatGPT, and other AI tools actually do on your
        machine — conversations, API traffic, file changes, install commands, and credential
        exposure.
      </p>
      <div className="mb-14 flex flex-wrap justify-center gap-3">
        <a
          href="#install"
          className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg bg-brand px-[18px] py-[11px] text-[15px] font-semibold text-[#0b0d12] hover:bg-brand-hi"
        >
          Quick install <ArrowRight className="size-[15px]" />
        </a>
        <a
          href="https://github.com/rajan-cforge/ai-runtime-monitor-enterprise"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg border border-line-2 px-[18px] py-[11px] text-[15px] font-medium text-ink hover:bg-hover"
        >
          <GithubMark className="size-[15px]" /> View on GitHub
        </a>
      </div>
      <DashboardPreview />
    </header>
  );
}
