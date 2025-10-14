import ReasonJoinSection from "@/components/sections/reason-join";
import Navbar from "@/components/navbar";
import Footer from "@/components/sections/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "6 Alasan Kuat Kenapa Harus Gabung Bisnis Asuransi Sekarang - Tim Throne Allianz Jakarta",
  description: "Discover 6 alasan mengapa bisnis asuransi adalah pilihan terbaik: Income bisa diwariskan, sekali deal cuan seumur hidup, mentoring billionaire, bonus trip gratis ke London/Jepang, dan rewards berlimpah. Join sekarang!",
  keywords: [
    "bisnis asuransi",
    "income seumur hidup", 
    "passive income",
    "komisi residual",
    "mentoring billionaire",
    "bonus trip gratis",
    "tim throne allianz",
    "free ipad",
    "override bonus",
    "penghasilan bisa diwariskan"
  ],
  openGraph: {
    title: "6 Alasan Kuat Gabung Bisnis Asuransi - Income Seumur Hidup + Bonus Trip Gratis",
    description: "Income bisa diwariskan, sekali deal cuan seumur hidup, mentoring dari billionaire, bonus trip ke London/Jepang/Taiwan, free iPad & rewards berlimpah!",
    type: "website",
    locale: "id_ID",
  },
};

export default function ReasonJoinPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col">
        <ReasonJoinSection />
        <Footer />
      </main>
    </>
  );
}