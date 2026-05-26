export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0d1117] via-[#0d1117] to-[#0a0d12]" />
      <div
        className="absolute inset-x-0 top-0 -z-10 h-[600px] opacity-30"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(88,166,255,0.18) 0%, rgba(88,166,255,0) 70%)",
        }}
      />
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-20 sm:pt-28 sm:pb-24 lg:pt-36 lg:pb-32">
        <div className="text-center">
          <h1 className="mx-auto max-w-4xl text-balance text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Endpoint security for the{" "}
            <span className="text-[var(--accent)]">AI developer</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-[var(--muted)] sm:text-xl">
            See what AI coding agents actually do on your machine. Detect credential exposure,
            supply chain risk, and adversarial behavior in real time.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="#install"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[var(--accent)] px-6 py-3 text-sm font-medium text-[#0d1117] transition hover:brightness-110 sm:text-base"
            >
              Install with pip
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-4"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.78-11.53a.75.75 0 0 0-1.06 1.06L11.19 9H6.75a.75.75 0 0 0 0 1.5h4.44l-1.47 1.47a.75.75 0 1 0 1.06 1.06l2.75-2.75a.75.75 0 0 0 0-1.06l-2.75-2.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://github.com/rajan-cforge/ai-runtime-monitor-enterprise"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-[var(--border)] bg-[var(--surface)] px-6 py-3 text-sm font-medium text-[var(--foreground)] transition hover:border-[var(--accent)] sm:text-base"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
                />
              </svg>
              View on GitHub
            </a>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-5xl sm:mt-20">
          <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-2xl shadow-[#0d1117]">
            <div className="flex items-center gap-2 border-b border-[var(--border)] bg-[#0d1117]/60 px-4 py-3">
              <span className="size-3 rounded-full bg-[var(--critical)]" />
              <span className="size-3 rounded-full bg-[#d29922]" />
              <span className="size-3 rounded-full bg-[var(--success)]" />
              <span className="ml-3 font-mono text-xs text-[var(--muted)]">
                http://localhost:9081 — Vigil dashboard
              </span>
            </div>
            <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-3">
              <div className="rounded-md border border-[var(--border)] bg-[#0d1117] p-4">
                <div className="text-xs uppercase tracking-wide text-[var(--muted)]">
                  Sensitive findings
                </div>
                <div className="mt-2 font-mono text-3xl font-semibold text-[var(--critical)]">
                  17
                </div>
                <div className="mt-1 text-xs text-[var(--muted)]">
                  AWS keys, GitHub tokens, Anthropic API keys
                </div>
              </div>
              <div className="rounded-md border border-[var(--border)] bg-[#0d1117] p-4">
                <div className="text-xs uppercase tracking-wide text-[var(--muted)]">
                  AI agents seen
                </div>
                <div className="mt-2 font-mono text-3xl font-semibold text-[var(--accent)]">
                  4
                </div>
                <div className="mt-1 text-xs text-[var(--muted)]">
                  Claude Code · Cursor · ChatGPT Desktop · Ollama
                </div>
              </div>
              <div className="rounded-md border border-[var(--border)] bg-[#0d1117] p-4">
                <div className="text-xs uppercase tracking-wide text-[var(--muted)]">
                  CVEs in installs
                </div>
                <div className="mt-2 font-mono text-3xl font-semibold text-[#d29922]">
                  3
                </div>
                <div className="mt-1 text-xs text-[var(--muted)]">
                  Caught via OSV before execution
                </div>
              </div>
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-[var(--muted)]">
            Replace with a real dashboard screenshot before launch.
          </p>
        </div>
      </div>
    </section>
  );
}
