import About from "@/components/reform/About";
import Contact from "@/components/reform/Contact";
import FAQ from "@/components/reform/FAQ";
import Features from "@/components/reform/Features";
import FloatingCTA from "@/components/reform/FloatingCTA";
import Flow from "@/components/reform/Flow";
import Footer from "@/components/reform/Footer";
import Header from "@/components/reform/Header";
import Hero from "@/components/reform/Hero";
import Works from "@/components/reform/Works";

export default function ReformPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Works />
        <Flow />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
