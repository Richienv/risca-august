import TestimonialsCarousel from "@/components/sections/testimonials-carousel";
import Footer from "@/components/sections/footer";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Testimonials - Kisah Sukses Komunitas Asuransi | Risca Agustine",
  description: "Baca kisah sukses nyata dari anggota komunitas asuransi Tim Throne. Dari penghasilan jutaan hingga milyaran rupiah per bulan, buktikan sendiri transformasi hidup mereka.",
  openGraph: {
    title: "Testimonials - Kisah Sukses Komunitas Asuransi",
    description: "Kisah sukses nyata anggota komunitas asuransi dengan penghasilan jutaan hingga milyaran rupiah per bulan.",
    type: "website",
    locale: "id_ID",
  },
};

export default function TestimonialsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Navigation Back Button */}
      <div className="bg-black py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-white hover:text-yellow-400 transition-colors duration-200 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="text-sm font-medium">Kembali ke Beranda</span>
          </Link>
        </div>
      </div>

      {/* Testimonials Content */}
      <TestimonialsCarousel />
      
      {/* Footer */}
      <Footer />
    </main>
  );
}