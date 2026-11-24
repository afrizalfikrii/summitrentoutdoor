import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Catalog from "@/components/Catalog";
import About from "@/components/About";
import CtaBanner from "@/components/CtaBanner";
import FooterWithMap from "@/components/FooterWithMap";
import MobileBottomBar from "@/components/MobileBottomBar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen bg-surface">
        <Hero />
        <Features />
        <Catalog />
        <About />
        <CtaBanner />
      </main>
      <FooterWithMap />
      <MobileBottomBar />
    </>
  );
}
