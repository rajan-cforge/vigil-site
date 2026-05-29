import { Nav } from "./components/Nav";
import { HeroSection } from "./components/HeroSection";
import { ProblemSection } from "./components/ProblemSection";
import { WhatVigilDoesSection } from "./components/WhatVigilDoesSection";
import { CaptureMatrixSection } from "./components/CaptureMatrixSection";
import { StaticVsRuntimeSection } from "./components/StaticVsRuntimeSection";
import { SupplyChainFeatureSection } from "./components/SupplyChainFeatureSection";
import { InstallSection } from "./components/InstallSection";
import { HonestRoadmapSection } from "./components/HonestRoadmapSection";
import { ForTeamsSection } from "./components/ForTeamsSection";
import { FooterSection } from "./components/FooterSection";

export default function Home() {
  return (
    <>
      {/* restrained top glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(900px 460px at 50% -8%, rgba(107,138,253,.07), transparent 70%)",
        }}
      />
      <div className="relative z-10">
        <Nav />
        <main>
          <HeroSection />
          <ProblemSection />
          <WhatVigilDoesSection />
          <CaptureMatrixSection />
          <StaticVsRuntimeSection />
          <SupplyChainFeatureSection />
          <InstallSection />
          <HonestRoadmapSection />
          <ForTeamsSection />
        </main>
        <FooterSection />
      </div>
    </>
  );
}
