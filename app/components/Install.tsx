const pipBlock = `pip install ai-runtime-monitor
ai-monitor --setup
ai-monitor --start`;

const brewBlock = `# Coming in v0.2.1 (2-3 days post-launch)
brew tap rajan-cforge/vigil
brew install vigil
vigil --setup
vigil --start`;

export default function Install() {
  return (
    <section id="install" className="border-t border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Install in 30 seconds
        </h2>
        <p className="mt-4 text-lg text-[var(--muted)]">
          Free and open source. macOS today, Linux best-effort, Windows coming in v0.3.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <CodeBlock title="pip" subtitle="Available now" code={pipBlock} />
          <CodeBlock title="Homebrew" subtitle="v0.2.1" code={brewBlock} muted />
        </div>

        <p className="mt-8 text-sm text-[var(--muted)]">
          Then open{" "}
          <code className="rounded bg-[var(--surface)] px-1.5 py-0.5 text-[var(--foreground)]">
            http://localhost:9081
          </code>{" "}
          in your browser. The setup wizard walks you through certificate trust
          (cryptographically constrained to AI domains only via X.509 NameConstraints), data
          directory creation, and dashboard token generation.
        </p>

        <a
          href="https://github.com/rajan-cforge/ai-runtime-monitor-enterprise#readme"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] hover:underline"
        >
          Read the docs on GitHub
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}

function CodeBlock({
  title,
  subtitle,
  code,
  muted = false,
}: {
  title: string;
  subtitle: string;
  code: string;
  muted?: boolean;
}) {
  return (
    <div
      className={`overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)] ${
        muted ? "opacity-80" : ""
      }`}
    >
      <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-2">
        <span className="text-sm font-semibold text-[var(--foreground)]">{title}</span>
        <span className="font-mono text-xs uppercase tracking-wide text-[var(--muted)]">
          {subtitle}
        </span>
      </div>
      <pre className="overflow-x-auto px-4 py-4 text-sm leading-relaxed text-[var(--foreground)]">
        <code>{code}</code>
      </pre>
    </div>
  );
}
