import { AlertTriangle } from "lucide-react";

const BADGES = [
  { label: "10 package managers parsed", tone: "safe" },
  { label: "Typosquat detection", tone: "warn" },
  { label: "Per-install provenance", tone: "safe" },
] as const;

export function SupplyChainFeatureSection() {
  return (
    <section id="supply" className="border-b border-line py-22">
      <div className="mx-auto max-w-[1080px] px-7">
        <div className="mb-[18px] text-xs font-semibold uppercase tracking-[0.12em] text-brand">
          The differentiator
        </div>
        <h2 className="mb-4 text-[clamp(28px,4vw,38px)] font-semibold leading-[1.1] tracking-[-0.025em]">
          Vigil flags the install command itself.
        </h2>
        <div className="mt-6 grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-[16.5px] leading-relaxed text-ink-2">
              When an agent runs <span className="font-mono text-ink-3">pip install</span> or{" "}
              <span className="font-mono text-ink-3">npm install</span>, Vigil parses the command as
              it happens — resolving package, version, and source — and checks it against typosquat
              dictionaries and threat-intel feeds <span className="text-ink">before</span> you depend
              on a clean IOC database. Each install is tied to the exact agent, session, and turn
              that ran it, so &ldquo;how did this get on my machine?&rdquo; has a one-click answer.
            </p>
            <div className="mt-[22px] flex flex-wrap gap-2.5">
              {BADGES.map((b) => (
                <span
                  key={b.label}
                  className={`inline-flex items-center rounded-[5px] border px-2 py-[3px] text-[11px] font-semibold uppercase tracking-wide ${
                    b.tone === "warn"
                      ? "border-warn/30 bg-warn/[.13] text-warn"
                      : "border-safe/30 bg-safe/[.13] text-safe"
                  }`}
                >
                  {b.label}
                </span>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-line bg-terminal">
            <div className="border-b border-line bg-elevated px-3.5 py-2.5 font-mono text-xs text-ink-3">
              claude_code · session c654f242 · turn 283
            </div>
            <div className="p-4 font-mono text-[13px] leading-[1.8]">
              <div>
                <span className="text-safe">$</span>{" "}
                <span className="text-ink">pip install mistralai==2.4.6</span>
              </div>
              <div className="mt-3 flex items-start gap-2.5 rounded-lg border border-risk/30 bg-risk/[.13] px-3.5 py-[11px] font-sans text-[12.5px] text-ink-2">
                <AlertTriangle className="mt-0.5 size-[15px] shrink-0 text-risk" />
                <span>
                  <strong className="text-risk">Flagged at runtime.</strong> Known-malicious
                  typosquat — no <span className="font-mono">2.4.6</span> tag exists in the source
                  repo (legitimate latest is <span className="font-mono">2.4.5</span>). Install
                  intercepted before completion.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
