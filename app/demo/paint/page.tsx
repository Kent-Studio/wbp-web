import Hero from "@/components/paint/Hero";
import PerformanceCards from "@/components/paint/PerformanceCards";
import Features from "@/components/paint/Features";
import Works from "@/components/paint/Works";
import Reviews from "@/components/paint/Reviews";
import Greeting from "@/components/paint/Greeting";
import Flow from "@/components/paint/Flow";
import FAQ from "@/components/paint/FAQ";
import Contact from "@/components/paint/Contact";
import FloatingCTA from "@/components/paint/FloatingCTA";
import Header from "@/components/paint/Header";
import Footer from "@/components/paint/Footer";

export default function PaintPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section
          className="bg-[#06140f] px-6 pb-14 lg:hidden"
          aria-label="施工実績と保証"
        >
          <PerformanceCards className="mx-auto max-w-[380px] justify-items-center" />
        </section>
        <Features />
        <Works />
        <Reviews />
        <Greeting />
        <Flow />
        <FAQ />
        <Contact />
        <Footer />
        <FloatingCTA />
      </main>
    </>
  );
}
