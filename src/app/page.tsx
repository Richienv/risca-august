import CTA from "@/components/sections/cta";
import Footer from "@/components/sections/footer";
import SolutionSection from "@/components/sections/solution";
import Pricing2 from "@/components/sections/pricing2";
import AboutMeSection from "@/components/sections/abous-me";
import TestimonialSection from "@/components/sections/testimonial-section";
import Navbar from "@/components/navbar";
import WebGLHeroSection from "@/components/sections/webgl-hero";
import HowItWorksDetailsSection from "@/components/sections/how-it-works-details";
import IncomeBreakdownSection from "@/components/sections/income-breakdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Risca Agustine - Financial Consultant & Career Opportunity | Peluang Bisnis untuk Ibu",
  description: "Bergabung dengan Tim Risca Agustine. Peluang karir sebagai Financial Consultant khusus untuk ibu rumah tangga yang ingin mengoptimalkan waktu dan meraih penghasilan tambahan. Program mentoring dan training eksklusif.",
  keywords: [
    "risca agustine",
    "financial consultant",
    "business partner",
    "peluang bisnis ibu rumah tangga",
    "konsultan keuangan jakarta",
    "penghasilan tambahan ibu",
    "mentoring bisnis jakarta",
    "bisnis sambilan ibu",
    "tim bisnis jakarta",
    "ibu produktif jakarta"
  ],
  openGraph: {
    title: "Risca Agustine - Financial Consultant & Career Opportunity | Peluang Bisnis untuk Ibu",
    description: "Bergabung dengan Tim Risca Agustine. Peluang karir sebagai Financial Consultant untuk ibu rumah tangga di Jakarta yang ingin penghasilan tambahan.",
    type: "website",
    locale: "id_ID",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col justify-between bg-black">
        <WebGLHeroSection />
        <TestimonialSection />
        <AboutMeSection />
        <HowItWorksDetailsSection />
        <IncomeBreakdownSection />
        <SolutionSection />
        <Pricing2 />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
