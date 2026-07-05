import Hero from "@/components/paint/Hero";
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
