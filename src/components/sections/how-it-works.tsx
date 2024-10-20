"use client";

import Features from "@/components/features-vertical";
import Section from "@/components/section";
import { ClipboardEdit, PhoneCall, Calendar } from "lucide-react";
import { BlueGradientSeparator } from "@/components/blue-gradient-separator";
import { GridPattern } from "@/components/ui/animated-grid";

const data = [
  {
    id: 1,
    title: "Isi Formulir",
    content: "Cukup isi formulir singkat dengan informasi dasar Anda. Proses ini hanya memakan waktu beberapa menit.",
    image: "/dashboard.png",
    icon: <ClipboardEdit className="w-6 h-6 text-primary" />,
  },
  {
    id: 2,
    title: "Kami Akan Menghubungi Anda",
    content: "Tim kami akan menghubungi Anda dalam waktu kurang dari 15 menit untuk membahas lebih lanjut tentang peluang dan manfaat bergabung dengan Alife.",
    image: "/dashboard.png",
    icon: <PhoneCall className="w-6 h-6 text-primary" />,
  },
  {
    id: 3,
    title: "Undangan Event Pertama",
    content: "Setelah berbicara dengan tim kami, Anda akan langsung diundang ke event pertama Alife, di mana Anda bisa mulai networking dan belajar.",
    image: "/dashboard.png",
    icon: <Calendar className="w-6 h-6 text-primary" />,
  },
];

export default function HowItWorks() {
  return (
    <>
      <BlueGradientSeparator />
      <Section className="py-12 relative overflow-hidden">
        <GridPattern
          width={40}
          height={40}
          x={-1}
          y={-1}
          strokeDasharray="8 4"
          className="absolute inset-0 h-full w-full fill-blue-400/10 stroke-blue-400/20"
          maxOpacity={0.2}
          numSquares={30}
        />
        
        <div className="relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-4">Cara Bergabung</h2>
            <hr className="w-24 mx-auto border-t-2 border-primary mb-4" />
          </div>
          <div className="lg:overflow-x-visible px-4 sm:px-8 md:px-16 lg:px-24">
            <Features 
              data={data} 
              customTitleClassName="text-left whitespace-nowrap text-lg lg:text-xl font-semibold mb-1 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent"
              customContentClassName="text-sm text-muted-foreground"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
