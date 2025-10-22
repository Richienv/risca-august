import CTA from "@/components/sections/cta";
import FAQ from "@/components/sections/faq";
import Footer from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hook";
import HowItWorks from "@/components/sections/how-it-works";
import Pricing from "@/components/sections/pricing";
import ProblemSection from "@/components/sections/problem";
import PerubahanSection from "@/components/sections/perubahan";
import SolutionSection from "@/components/sections/solution";
import Pricing2 from "@/components/sections/pricing2";
import AboutMeSection from "@/components/sections/abous-me";
import TestimonialSection from "@/components/sections/testimonial-section";
import DigitalSerenity from "@/components/digital-seranity";
import { BlueGradientSeparator } from "@/components/blue-gradient-separator";
import Navbar from "@/components/navbar";
import AppleStyleSection from "@/components/apple-style-section";
import ThreeSectionLayout from "@/components/three-section-layout";
import WebGLHeroSection from "@/components/sections/webgl-hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Risca Agustine - Tim Throne MANULIFE Jakarta | Peluang Bisnis Asuransi untuk Ibu",
  description: "Bergabung dengan Tim Throne yang dipimpin Risca Agustine, leader asuransi MANULIFE Jakarta. Peluang bisnis asuransi khusus untuk ibu rumah tangga yang ingin mengoptimalkan waktu dan meraih penghasilan tambahan. Program mentoring dan training eksklusif.",
  keywords: [
    "risca agustine", 
    "tim throne MANULIFE", 
    "bisnis asuransi jakarta", 
    "peluang bisnis ibu rumah tangga", 
    "agen asuransi MANULIFE", 
    "penghasilan tambahan ibu", 
    "mentor asuransi jakarta",
    "bisnis sambilan ibu",
    "asuransi MANULIFE jakarta",
    "ibu produktif jakarta"
  ],
  openGraph: {
    title: "Risca Agustine - Tim Throne MANULIFE Jakarta | Peluang Bisnis untuk Ibu",
    description: "Bergabung dengan Tim Throne yang dipimpin Risca Agustine. Peluang bisnis asuransi MANULIFE untuk ibu rumah tangga di Jakarta yang ingin penghasilan tambahan.",
    type: "website",
    locale: "id_ID",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <WebGLHeroSection />
        <TestimonialSection />
        <AboutMeSection />
        <ThreeSectionLayout />

        {/* <HowItWorks /> */}
        {/* <DigitalSerenity /> */}
        {/* <FAQ /> */}
        <CTA />
        <Footer />
      </main>
    </>
  );
}
