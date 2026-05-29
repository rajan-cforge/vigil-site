export function ProblemSection() {
  return (
    <section id="problem" className="border-b border-line py-22">
      <div className="mx-auto max-w-[1080px] px-7">
        <h2 className="mb-4 max-w-[18ch] text-[clamp(28px,4vw,38px)] font-semibold leading-[1.1] tracking-[-0.025em]">
          AI agents install dependencies, read secrets, and call APIs on your machine — often
          unattended.
        </h2>
        <p className="max-w-[680px] text-lg text-ink-2">
          An agent can run an install command and an outbound network call in the same turn, while
          you&apos;re asleep. Existing tools weren&apos;t built to watch that moment: EDR watches for
          malware, static scanners inventory your manifest. Neither watches the agent that installs
          the dependency, writes the code, and touches credentials at 3&nbsp;AM.
        </p>

        <div
          className="mt-8 max-w-[760px] rounded-xl border border-line bg-surface px-[26px] py-[22px]"
          style={{ boxShadow: "inset 3px 0 0 var(--color-risk)" }}
        >
          <div className="mb-2 text-xs font-semibold tracking-wide text-risk">
            May 11, 2026 · TanStack / Mini Shai-Hulud
          </div>
          <p className="text-[15.5px] leading-relaxed text-ink-2">
            The TanStack npm packages were compromised — 84 malicious versions published by the
            project&apos;s own release pipeline, carrying <strong className="text-ink">valid signed
            SLSA provenance</strong>. They looked legitimate to every tool checking cryptographic
            proof of origin, and the worm spread to Mistral AI&apos;s SDK on PyPI (the malicious{" "}
            <span className="font-mono text-[0.92em]">mistralai 2.4.6</span>). What caught it fast
            wasn&apos;t the provenance check — it was <strong className="text-ink">behavioral
            analysis at install time</strong>. That&apos;s the layer Vigil watches: what your AI
            agents try to install, as they try it.
          </p>
          <cite className="mt-3 block text-[13px] not-italic text-ink-3">
            Sources:{" "}
            <a href="https://tanstack.com/blog/npm-supply-chain-compromise-postmortem" target="_blank" rel="noopener noreferrer" className="text-info hover:underline">TanStack postmortem</a>{" "}
            ·{" "}
            <a href="https://snyk.io/blog/tanstack-npm-packages-compromised/" target="_blank" rel="noopener noreferrer" className="text-info hover:underline">Snyk</a>{" "}
            · OpenAI incident response, May 2026.
          </cite>
        </div>
      </div>
    </section>
  );
}
