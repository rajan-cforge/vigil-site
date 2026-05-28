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
    heading: "Four-layer monitoring",
    body: "Captures AI agent activity through four paths: mitmproxy interception for any tool routed through HTTPS_PROXY, JSONL transcript tailing for Claude Code sessions, a Chrome extension for browser AI (verified end-to-end on claude.ai, chatgpt.com, gemini.google.com), and process/filesystem/network observation for desktop apps. Set up once, captures continuously.",
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
    heading: "Credential leak detection",
    body: "Scans every captured prompt and response for AWS keys, GitHub tokens (all 5 prefix variants), Anthropic and OpenAI API keys, JWT bearers, Slack webhooks, private keys, credit cards (Luhn-validated), SSNs, phone numbers, and database connection strings. Severity-ranked alerts with drill-down to the exact conversation turn. Plaintext masked on display and auto-purged after 30 days.",
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
    body: "Parses every install command an AI agent issues — npm, yarn, pnpm, pip, cargo, go get, gem, brew, apt, npx. Scores against a dictionary of known typosquats and high-risk packages. CVE detection via OSV.dev for PyPI, npm, crates.io, Go, and RubyGems. Threat-intel correlation via abuse.ch URLhaus and ThreatFox feeds.",
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
