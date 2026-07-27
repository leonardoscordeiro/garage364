import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Indicators from "@/components/indicators";
import AboutAndServices from "@/components/about-and-services";
import GallerySection from "@/components/gallery-section";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white selection:bg-[#E31E24] selection:text-white">
      <Navbar />
      <Hero />
      <Indicators />
      <AboutAndServices />
      <GallerySection />
      <CTASection />
      <Footer />
    </main>
  );
}
