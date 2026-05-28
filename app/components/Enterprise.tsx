export default function Enterprise() {
  return (
    <section className="border-t border-[var(--border)] bg-[#0a0d12]">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          For teams and enterprises
        </h2>
        <p className="mt-6 text-pretty text-lg text-[var(--muted)]">
          Vigil v0.2 is open source and runs on a single developer&apos;s machine — full HTTPS
          proxy capture, LaunchAgent auto-start, and the complete capture matrix are included.
          The forthcoming Enterprise tier adds fleet-scale monitoring with a control plane,
          RBAC, SSO, and SIEM integration. We&apos;re booking design partners now for the v1.0
          fleet dashboard launching in Q4 2026.
        </p>
        <div className="mt-8">
          <a
            href="mailto:hello@gocloudforge.com?subject=Vigil%20enterprise%20inquiry"
            className="inline-flex items-center gap-2 rounded-md bg-[var(--accent)] px-6 py-3 text-sm font-medium text-[#0d1117] transition hover:brightness-110"
          >
            Contact for enterprise
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
