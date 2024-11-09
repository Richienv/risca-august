"use client";

import Features from "@/components/features-vertical";
import Section from "@/components/section";
import { ClipboardEdit, PhoneCall, Calendar } from "lucide-react";
import { BlueGradientSeparator } from "@/components/blue-gradient-separator";
import Ripple from "@/components/ui/ripple";

const data = [
  {
    id: 1,
    title: "1. Isi Formulir Singkat",
    content: "Isi dengan data diri kamu. Process ini quick and simple, hanya butuh beberapa minutes saja.",
    image: "/join.png",
    icon: <ClipboardEdit className="w-8 h-8 sm:w-6 sm:h-6 text-primary" />,
    imageClassName: "aspect-square w-full h-full object-cover",
  },
  {
    id: 2,
    title: "2. Aku akan Hubungi Kamu Personally",
    content: "Aku akan review informasi kamu dan contact within 15 menit untuk discuss lebih lanjut.",
    image: "/contact.png", 
    icon: <PhoneCall className="w-8 h-8 sm:w-6 sm:h-6 text-primary" />,
    imageClassName: "aspect-square w-full h-full object-cover",
  },
  {
    id: 3,
    title: "3. Undangan Event Pertama Kamu",
    content: "Setelah ngobrol dengan aku, kamu akan diundang ke first event kita, dimana kamu bisa mulai networking and learning.",
    image: "/first.png",
    icon: <Calendar className="w-8 h-8 sm:w-6 sm:h-6 text-primary" />,
    imageClassName: "aspect-square w-full h-full object-cover",
  },
];

export default function HowItWorks() {
  return (
    <>
      <BlueGradientSeparator />
      <Section className="py-1 relative overflow-hidden">
        <Ripple 
          className="absolute right-[35%] md:right-[0%] top-[-100%] md:bottom-[-3%] transform translate-x-1/4 translate-y-1/4" 
          mainCircleSize={100}
          numCircles={5}
        />
        
        <div className="relative z-10">
          <div className="text-center mb-2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-1">Cara Bergabung</h2>
            
            <hr className="w-20 md:w-24 mx-auto border-t-2 border-primary mb-1" />
          </div>
          <div className="lg:overflow-x-visible">
            <Features 
              data={data} 
              customTitleClassName="text-left text-xl sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 text-transparent bg-clip-text"
              customContentClassName="text-lg sm:text-base md:text-lg text-muted-foreground"

            />
          </div>
        </div>
      </Section>
    </>
  );
}
