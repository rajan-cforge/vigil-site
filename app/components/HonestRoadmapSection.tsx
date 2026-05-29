interface Bucket {
  title: string;
  dot: string;
  shipped?: boolean;
  items: { text: string; faint?: boolean }[];
}

const BUCKETS: Bucket[] = [
  {
    title: "Shipped · v0.2",
    dot: "var(--color-safe)",
    shipped: true,
    items: [
      { text: "macOS (Sequoia 15 & 26.5)" },
      { text: "All four capture layers" },
      { text: "Claude Desktop, ChatGPT, Cursor capture" },
      { text: "Selective SSL inspection + NameConstraints CA" },
      { text: "Credential leak detection (15+ patterns)" },
      { text: "Install-command parsing + typosquat detection" },
      { text: "URLhaus & ThreatFox threat intel" },
      { text: "30-day local auto-purge" },
    ],
  },
  {
    title: "Coming · v0.3",
    dot: "var(--color-warn)",
    items: [
      { text: "Linux first-class support" },
      { text: "Windows support" },
      { text: "PyPI / pipx install path" },
      { text: "Privileged macOS helper (no sudo paste)" },
      { text: "MCP server config scanning" },
      { text: "Prompt-injection detection" },
      { text: "Browser AI: verify Perplexity, Copilot, DeepSeek" },
      { text: "Cost computation for non-Anthropic models" },
    ],
  },
  {
    title: "Longer term",
    dot: "var(--color-ink-3)",
    items: [
      { text: "Fleet-scale control plane — aggregate many developer machines into a shared dashboard" },
      { text: "A Pro / Enterprise offering — not yet defined, not yet committed", faint: true },
    ],
  },
];

export function HonestRoadmapSection() {
  return (
    <section id="roadmap" className="border-b border-line py-22">
      <div className="mx-auto max-w-[1080px] px-7">
        <div className="mb-[18px] text-xs font-semibold uppercase tracking-[0.12em] text-brand">
          Honest roadmap
        </div>
        <h2 className="mb-4 text-[clamp(28px,4vw,38px)] font-semibold leading-[1.1] tracking-[-0.025em]">
          What&apos;s shipped, what&apos;s next.
        </h2>
        <p className="max-w-[680px] text-lg text-ink-2">
          v0.2.0 shipped publicly. Here&apos;s exactly what works today and what doesn&apos;t yet —
          including the parts we haven&apos;t built.
        </p>
        <div className="mt-11 grid gap-4 md:grid-cols-3">
          {BUCKETS.map((b) => (
            <div key={b.title} className="rounded-xl border border-line bg-surface p-[22px]">
              <div className="mb-4 flex items-center gap-2.5">
                <span className="size-2 rounded-full" style={{ background: b.dot }} />
                <h3 className="text-sm font-semibold">{b.title}</h3>
              </div>
              <ul>
                {b.items.map((it) => (
                  <li
                    key={it.text}
                    className={`relative py-1.5 pl-5 text-[13.5px] leading-snug ${it.faint ? "text-ink-3" : "text-ink-2"}`}
                  >
                    <span
                      className="absolute left-0.5 top-[13px] size-[5px] rounded-full"
                      style={{ background: b.shipped ? "var(--color-safe)" : "var(--color-ink-3)" }}
                    />
                    {it.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
