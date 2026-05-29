"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

const INSTALL = `git clone https://github.com/rajan-cforge/ai-runtime-monitor-enterprise.git vigil
cd vigil
python3.12 -m venv .venv
source .venv/bin/activate
pip install -e .
ai-monitor --setup
ai-monitor --start --with-proxy`;

export function InstallSection() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(INSTALL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {}
  };

  return (
    <section id="install" className="border-b border-line py-22">
      <div className="mx-auto max-w-[1080px] px-7">
        <div className="mb-[18px] text-xs font-semibold uppercase tracking-[0.12em] text-brand">Install</div>
        <h2 className="mb-4 text-[clamp(28px,4vw,38px)] font-semibold leading-[1.1] tracking-[-0.025em]">
          Free and open source.
        </h2>
        <p className="max-w-[680px] text-lg text-ink-2">
          macOS today (Sequoia 15 and 26.5 verified). Linux best-effort. Windows planned for v0.3.
        </p>

        <div className="relative mt-9 max-w-[760px] overflow-x-auto rounded-xl border border-line bg-terminal px-[22px] py-5">
          <button
            type="button"
            aria-label={copied ? "Copied to clipboard" : "Copy install commands to clipboard"}
            onClick={copy}
            className="absolute right-3.5 top-3.5 inline-flex items-center gap-1.5 rounded-lg border border-line-2 bg-elevated px-2.5 py-1.5 text-xs font-medium text-ink hover:bg-hover"
          >
            {copied ? <Check className="size-3.5 text-safe" /> : <Copy className="size-3.5" />}
            {copied ? "Copied" : "Copy"}
          </button>
          <pre className="font-mono text-[13.5px] leading-[1.9] text-ink">
            <span className="text-ink-3"># macOS</span>
            {"\n" + INSTALL}
          </pre>
        </div>

        <div className="mt-[22px] grid max-w-[760px] gap-3.5 text-[14.5px] text-ink-2">
          <p>
            The setup wizard generates a local CA, prompts you to paste one sudo command in the same
            terminal to trust it, and walks you through loading the Chrome extension. Full install
            takes about 5 minutes.
          </p>
          <p>
            Requires macOS 12+, Python 3.12+, Chrome, and brief terminal sudo access. PyPI / pipx
            install path is planned for v0.3.
          </p>
          <p>
            Then open <span className="font-mono text-brand">http://localhost:9081</span>. The CA is
            cryptographically constrained to AI domains only via X.509 NameConstraints — even if the
            CA key is compromised, it cannot be used to MITM banking or email; the OS validator
            enforces the constraint.
          </p>
          <p>
            <a href="https://github.com/rajan-cforge/ai-runtime-monitor-enterprise" target="_blank" rel="noopener noreferrer" className="text-info hover:underline">
              Read the docs on GitHub →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
