import CTA from "@/components/sections/cta";
import FAQ from "@/components/sections/faq";
import Features from "@/components/sections/features";
import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import HowItWorks from "@/components/sections/how-it-works";
import Pricing from "@/components/sections/pricing";
import ProblemSection from "@/components/sections/problem";
import PerubahanSection from "@/components/sections/perubahan";
import SolutionSection from "@/components/sections/solution";
import Testimonials from "@/components/sections/testimonials";
import TestimonialsCarousel from "@/components/sections/testimonials-carousel";
import AboutMeSection from "@/components/sections/abous-me";
import DigitalSerenity from "@/components/digital-seranity";
import { BlueGradientSeparator } from "@/components/blue-gradient-separator";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <PerubahanSection />
      <DigitalSerenity />
      <AboutMeSection />
      <BlueGradientSeparator />
      <SolutionSection />
      <HowItWorks />
      <TestimonialsCarousel />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
