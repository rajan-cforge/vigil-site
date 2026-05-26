type Feature = {
  icon: React.ReactNode;
  heading: string;
  body: string;
};

const features: Feature[] = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-7 text-[var(--accent)]"
        aria-hidden="true"
      >
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    heading: "Three-layer monitoring",
    body: "Captures every AI agent action through JSONL session tailing, system process monitoring, and optional HTTPS proxy interception. Works with Claude Code, Cursor, Copilot, ChatGPT Desktop, and 15+ other agents. Zero configuration required for the basic layer.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-7 text-[var(--accent)]"
        aria-hidden="true"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    heading: "Sensitive data detection",
    body: "Detects AWS keys, GitHub tokens, Anthropic API keys, and 20+ other credential patterns in AI session data. Severity-ranked alerts with drill-down to the exact conversation turn where exposure occurred. Plaintext auto-purged after 30 days; metadata retained for audit.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-7 text-[var(--accent)]"
        aria-hidden="true"
      >
        <path d="m21 16-9 5-9-5V8l9-5 9 5Z" />
        <path d="m3 8 9 5 9-5" />
        <path d="M12 13v8" />
      </svg>
    ),
    heading: "Supply chain intelligence",
    body: "Real-time CVE detection across 19 package managers via OSV.dev. Threat intel feeds from ThreatFox and URLhaus. Detects when AI agents install packages with known vulnerabilities or malicious behavior — before they execute.",
  },
];

export default function Features() {
  return (
    <section className="border-t border-[var(--border)] bg-[#0a0d12]">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          What Vigil does
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.heading}
              className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:border-[var(--accent)]/50"
            >
              <div className="mb-4 inline-flex size-12 items-center justify-center rounded-md border border-[var(--border)] bg-[#0d1117]">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-[var(--foreground)]">
                {feature.heading}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{feature.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
