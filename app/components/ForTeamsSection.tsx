export function ForTeamsSection() {
  return (
    <section id="teams" className="border-b border-line py-22">
      <div className="mx-auto max-w-[720px] px-7">
        <div className="mb-[18px] text-xs font-semibold uppercase tracking-[0.12em] text-brand">
          For teams and enterprises
        </div>
        <p className="text-[16.5px] leading-[1.65] text-ink-2">
          <span className="font-medium text-ink">Vigil is open source and Apache 2.0 licensed</span> —
          free for any use, individual or commercial, with no feature gates. v0.2 runs on a single
          developer&apos;s machine; the full HTTPS proxy capture, dashboard, and supply chain
          monitoring are all in the open-source release.
        </p>
        <p className="mt-4 text-[16.5px] leading-[1.65] text-ink-2">
          Fleet-scale monitoring — a control plane that aggregates from many developer machines into
          a shared dashboard — is the direction we&apos;re heading for organizations that want
          team-wide visibility. We&apos;re talking to security teams who might want to shape that
          work as design partners. If you&apos;re running AI coding agents at scale and would
          consider piloting something pre-1.0, reach out at{" "}
          <a href="mailto:hello@gocloudforge.com" className="text-info hover:underline">
            hello@gocloudforge.com
          </a>
          .
        </p>
        <p className="mt-[18px] text-[15px] italic text-ink-3">We&apos;re not selling anything yet.</p>
      </div>
    </section>
  );
}
