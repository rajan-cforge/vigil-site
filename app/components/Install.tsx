import CopyButton from "./CopyButton";

const installBlock = `git clone https://github.com/rajan-cforge/ai-runtime-monitor-enterprise.git vigil
cd vigil
python3.12 -m venv .venv
source .venv/bin/activate
pip install -e .
ai-monitor --setup
ai-monitor --start --with-proxy`;

export default function Install() {
  return (
    <section id="install" className="border-t border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Install
        </h2>
        <p className="mt-4 text-lg text-[var(--muted)]">
          Free and open source. macOS today (Sequoia 15 and 26.5 verified). Linux best-effort.
          Windows planned for v0.3.
        </p>

        <div className="mt-10">
          <div className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)]">
            <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-2">
              <span className="text-sm font-semibold text-[var(--foreground)]">macOS</span>
              <CopyButton text={installBlock} label="install" />
            </div>
            <pre className="overflow-x-auto px-4 py-4 text-sm leading-relaxed text-[var(--foreground)]">
              <code>{installBlock}</code>
            </pre>
          </div>
        </div>

        <p className="mt-8 text-sm text-[var(--muted)]">
          The setup wizard generates a local CA, prompts you to paste one sudo command in the
          same terminal to trust it, and walks you through loading the Chrome extension. Full
          install takes about 5 minutes.
        </p>
        <p className="mt-4 text-sm text-[var(--muted)]">
          Requires macOS 12+, Python 3.12+, Chrome, and brief terminal sudo access. PyPI / pipx
          install path is planned for v0.3.
        </p>

        <p className="mt-8 text-sm text-[var(--muted)]">
          Then open{" "}
          <code className="rounded bg-[var(--surface)] px-1.5 py-0.5 text-[var(--foreground)]">
            http://localhost:9081
          </code>{" "}
          in your browser. The CA is cryptographically constrained to AI domains only via X.509
          NameConstraints — even if the CA key is compromised, it cannot be used to MITM banking
          or email; the OS validator enforces the constraint.
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
