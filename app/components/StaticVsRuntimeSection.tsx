import { Check } from "lucide-react";

interface Cell { k: string; v: string; }
const STATIC: Cell[] = [
  { k: "When", v: "At the manifest, before / around install" },
  { k: "Sees", v: "What's declared in the lockfile vs known-bad lists" },
  { k: "Catches", v: "Known CVEs & flagged packages already on a list" },
  { k: "Blind spot", v: "Novel behavior; anything that passes provenance but acts maliciously at runtime" },
];
const RUNTIME: Cell[] = [
  { k: "When", v: "As the agent acts, in the moment" },
  { k: "Sees", v: "The actual install command, network call, and file write the agent runs" },
  { k: "Catches", v: "Behavior — whether or not the IOC is on a list yet" },
  { k: "Blind spot", v: "Risk in code that never executes on your machine" },
];

function Col({ title, kind, dot, rows }: { title: string; kind: string; dot: string; rows: Cell[] }) {
  return (
    <div className="rounded-xl border border-line bg-surface p-6">
      <h3 className="mb-1 flex items-center gap-2.5 text-[15px] font-semibold">
        <span className="size-[9px] rounded-full" style={{ background: dot }} />
        {title}
      </h3>
      <div className="mb-[18px] text-xs text-ink-3">{kind}</div>
      <ul>
        {rows.map((r) => (
          <li key={r.k} className="flex gap-2.5 border-b border-line py-2.5 text-sm text-ink-2 last:border-0">
            <span className="min-w-[88px] shrink-0 text-ink-3">{r.k}</span>
            <span className="text-ink">{r.v}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function StaticVsRuntimeSection() {
  return (
    <section id="compare" className="border-b border-line py-22">
      <div className="mx-auto max-w-[1080px] px-7">
        <div className="mb-[18px] text-xs font-semibold uppercase tracking-[0.12em] text-brand">
          Static vs runtime
        </div>
        <h2 className="mb-4 text-[clamp(28px,4vw,38px)] font-semibold leading-[1.1] tracking-[-0.025em]">
          Two layers. Run both.
        </h2>
        <p className="max-w-[680px] text-lg text-ink-2">
          Static scanners inventory what&apos;s declared in your manifest and check it against
          known-bad lists. Vigil watches what the agent actually does at runtime. They cover
          different moments — the TanStack attack is exactly why you want both.
        </p>
        <div className="mt-11 grid gap-4 md:grid-cols-2">
          <Col title="Static scanners" kind="Socket · Snyk · Bumblebee · OSV" dot="var(--color-info)" rows={STATIC} />
          <Col title="Vigil" kind="Runtime / behavioral" dot="var(--color-brand)" rows={RUNTIME} />
        </div>
        <div className="mt-4 flex items-center gap-3.5 rounded-xl border border-safe/30 bg-safe/[.13] px-6 py-[18px]">
          <Check className="size-5 shrink-0 text-safe" />
          <span className="text-[15px] text-ink-2">
            <b className="text-ink">Static tells you what&apos;s declared; Vigil tells you what
            happened.</b>{" "}
            When malicious packages carry valid provenance — as TanStack&apos;s did — the runtime
            layer is what flags the install attempt anyway.
          </span>
        </div>
      </div>
    </section>
  );
}
