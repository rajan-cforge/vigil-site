export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 text-sm text-[var(--muted)] sm:grid-cols-3">
          <div>
            <div className="text-base font-semibold text-[var(--foreground)]">Vigil</div>
            <div className="mt-2">by GoCloudForge, Inc.</div>
            <div className="mt-1">© 2026</div>
          </div>
          <div>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/rajan-cforge/ai-runtime-monitor-enterprise"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--accent)]"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/rajan-cforge/ai-runtime-monitor-enterprise#readme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--accent)]"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="mailto:security@gocloudforge.com"
                  className="hover:text-[var(--accent)]"
                >
                  Security: security@gocloudforge.com
                </a>
              </li>
            </ul>
          </div>
          <div className="sm:text-right">
            <div>Built in San Jose</div>
            <div className="mt-1">Apache 2.0 licensed</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
