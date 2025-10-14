import Pricing2 from "@/components/sections/pricing2";
import Footer from "@/components/sections/footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paket Asuransi - Cashback & Rewards | Risca Agustine",
  description: "Pilih paket asuransi terbaik dengan cashback 100% dan rewards menarik. Dapatkan proteksi gratis plus income bulanan dari Tim Throne Allianz Jakarta.",
  openGraph: {
    title: "Paket Asuransi - Cashback & Rewards",
    description: "Pilih paket asuransi dengan cashback 100% dan rewards menarik. Proteksi gratis plus income bulanan.",
    type: "website",
    locale: "id_ID",
  },
};

export default function PricingPage() {
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

      {/* Pricing Content */}
      <Pricing2 />
      
      {/* Footer */}
      <Footer />
    </main>
  );
}