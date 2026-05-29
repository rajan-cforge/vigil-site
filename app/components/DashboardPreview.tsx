interface PreviewRow {
  name: string;
  version: string;
  capability: "High capability" | "Standard";
  verdict: string;
  state: "safe" | "risk";
}

const ROWS: PreviewRow[] = [
  { name: "mistralai", version: "2.4.6", capability: "High capability", verdict: "Malicious — remove now", state: "risk" },
  { name: "cryptography", version: "48.0.0", capability: "High capability", verdict: "Safe — 0 of 10 CVEs affect you", state: "safe" },
  { name: "requests", version: "2.34.2", capability: "Standard", verdict: "Safe — 0 of 13 CVEs affect you", state: "safe" },
];

export function DashboardPreview() {
  return (
    <div className="mx-auto max-w-[880px] overflow-hidden rounded-2xl border border-line bg-surface text-left shadow-[0_30px_80px_-30px_rgba(0,0,0,.7)]">
      <div className="flex items-center gap-2 border-b border-line bg-elevated px-[15px] py-[11px]">
        <span className="size-[11px] rounded-full bg-risk" />
        <span className="size-[11px] rounded-full bg-warn" />
        <span className="size-[11px] rounded-full bg-safe" />
        <span className="ml-2.5 font-mono text-xs text-ink-3">localhost:9081 — Vigil · Supply Chain</span>
      </div>
      <div className="p-[18px]">
        {ROWS.map((r) => (
          <div
            key={r.name}
            className="mb-2.5 grid grid-cols-[auto_1fr_auto_auto] items-center gap-3.5 rounded-[9px] border border-line bg-elevated px-[15px] py-[13px] last:mb-0"
            style={r.state === "risk" ? { boxShadow: "inset 3px 0 0 var(--color-risk)" } : undefined}
          >
            <span
              className={`grid size-[18px] place-items-center rounded-full text-[11px] font-bold ${
                r.state === "risk" ? "bg-risk/[.13] text-risk" : "bg-safe/[.13] text-safe"
              }`}
            >
              {r.state === "risk" ? "!" : "✓"}
            </span>
            <span>
              <span className="font-mono text-[13px] font-medium">{r.name}</span>{" "}
              <span className="font-mono text-xs text-ink-3">{r.version}</span>
            </span>
            <span
              className={`hidden items-center gap-1.5 rounded-full border border-line bg-hover px-[9px] py-[3px] text-[10.5px] font-semibold uppercase tracking-wide text-ink-2 sm:inline-flex ${
                r.capability === "Standard" ? "opacity-60" : ""
              }`}
            >
              <span
                className="size-1.5 rounded-full"
                style={{ background: r.capability === "Standard" ? "var(--color-ink-3)" : "var(--color-cap)" }}
              />
              {r.capability}
            </span>
            <span className={`whitespace-nowrap text-[12.5px] font-semibold ${r.state === "risk" ? "text-risk" : "text-safe"}`}>
              {r.verdict}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
