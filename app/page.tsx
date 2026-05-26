import Enterprise from "./components/Enterprise";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Install from "./components/Install";
import Problem from "./components/Problem";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <Problem />
        <Features />
        <Install />
        <Enterprise />
      </main>
      <Footer />
    </>
  );
}
