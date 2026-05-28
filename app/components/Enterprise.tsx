export default function Enterprise() {
  return (
    <section className="border-t border-[var(--border)] bg-[#0a0d12]">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          For teams and enterprises
        </h2>
        <p className="mt-6 text-pretty text-lg text-[var(--muted)]">
          Vigil is open source and Apache 2.0 licensed — free for any use, individual or
          commercial, with no feature gates. v0.2 runs on a single developer&apos;s machine;
          the full HTTPS proxy capture, dashboard, and supply chain monitoring are all in the
          open-source release.
        </p>
        <p className="mt-4 text-pretty text-lg text-[var(--muted)]">
          Fleet-scale monitoring (a control plane that aggregates from many developer machines
          into a shared dashboard) is the direction we&apos;re heading for organizations that
          want team-wide visibility. We&apos;re talking to security teams who might want to
          shape that work as design partners — if you&apos;re running AI coding agents at scale
          and would consider piloting something pre-1.0, reach out at{" "}
          <a
            href="mailto:hello@gocloudforge.com?subject=Vigil%20design%20partner%20inquiry"
            className="text-[var(--accent)] hover:underline"
          >
            hello@gocloudforge.com
          </a>
          .
        </p>
        <p className="mt-4 text-pretty text-lg text-[var(--muted)]">
          We&apos;re not selling anything yet.
        </p>
        <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
          <a
            href="mailto:hello@gocloudforge.com?subject=Vigil%20design%20partner%20inquiry"
            className="inline-flex items-center gap-2 rounded-md bg-[var(--accent)] px-6 py-3 text-sm font-medium text-[#0d1117] transition hover:brightness-110"
          >
            Contact for enterprise
            <span aria-hidden="true">→</span>
          </a>
          <a
            href="mailto:hello@gocloudforge.com?subject=Vigil%20design%20partner%20inquiry"
            className="font-mono text-sm text-[var(--muted)] hover:text-[var(--accent)]"
          >
            hello@gocloudforge.com
          </a>
        </div>
      </div>
    </section>
  );
}
