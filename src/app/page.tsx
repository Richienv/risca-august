import CTA from "@/components/sections/cta";
import FAQ from "@/components/sections/faq";
import Features from "@/components/sections/features";
import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import { HeroSection } from "@/components/sections/hook";
import HowItWorks from "@/components/sections/how-it-works";
import Pricing from "@/components/sections/pricing";
import ProblemSection from "@/components/sections/problem";
import PerubahanSection from "@/components/sections/perubahan";
import SolutionSection from "@/components/sections/solution";
import Pricing2 from "@/components/sections/pricing2";
import TestimonialsCarousel from "@/components/sections/testimonials-carousel";
import AboutMeSection from "@/components/sections/abous-me";
import DigitalSerenity from "@/components/digital-seranity";
import { BlueGradientSeparator } from "@/components/blue-gradient-separator";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

      <Hero />
      <AboutMeSection />
      <TestimonialsCarousel />

      <SolutionSection />

      <HowItWorks />
      <DigitalSerenity />
      <Features />
      <Pricing2 />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
