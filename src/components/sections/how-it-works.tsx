"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/card-1';
import { cn } from '@/lib/utils';
import { MousePointer, Phone, Users, LucideIcon } from 'lucide-react';

const stepsData = [
  {
    icon: MousePointer,
    title: "1. Klik, Isi, Selesai",
    description: "Klik tombol hero, isi form simpel dengan info lo. 2 menit doang udah selesai. Ini langkah pertama lo dapetin sistem 10 juta dalam 5 bulan yang udah bikin ribuan Gen-Z sukses.",
    imageSrc: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80&fit=crop"
  },
  {
    icon: Phone,
    title: "2. Kami yang Hubungin Lo",
    description: "Leader kami langsung hubungin lo dalam 24 jam. Bukan buat jual-jualan, tapi buat mastiin lo cocok sama sistem ini. Kalo match, lo masuk. Kalo enggak, ya udah.",
    imageSrc: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80&fit=crop"
  },
  {
    icon: Users,
    title: "3. Training Langsung Action",
    description: "Welcome to the club! Lo bakal ketemu sama komunitas yang udah proven berhasil. Training pertama langsung praktek, bukan teori doang. Dalam minggu pertama udah keliatan hasilnya.",
    imageSrc: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&q=80&fit=crop"
  }
];

export default function HowItWorks() {
  return (
    <section className="bg-black py-16 md:py-32">
      <div className="w-full px-6 md:px-10 lg:px-16 xl:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs sm:text-sm font-mono font-light text-white/70 uppercase tracking-[0.2em] opacity-80 mb-4">
            Gimana Caranya?
          </h2>
          <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-30 mx-auto mb-6"></div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight leading-tight tracking-tight text-white mb-6">
            Caranya Gampang
            <span className="block font-thin text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/70 mt-2 leading-relaxed tracking-wide">
              Banget
            </span>
          </h1>
          <p className="text-sm lg:text-base font-light leading-relaxed text-white/70 max-w-2xl mx-auto">
            3 langkah doang, lo udah bisa mulai dapetin 10 juta. Gak ribet, gak lama, langsung action.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="space-y-12 lg:space-y-16">
          {stepsData.map((step, index) => (
            <StepCard
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              imageSrc={step.imageSrc}
              isEven={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface StepCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  imageSrc: string;
  isEven: boolean;
}

const StepCard = ({ icon: Icon, title, description, imageSrc, isEven }: StepCardProps) => (
  <div className="relative max-w-7xl mx-auto">
    <div className={cn(
      "grid lg:grid-cols-2 gap-8 lg:gap-12 items-center",
      !isEven && "lg:grid-flow-col-dense"
    )}>
      {/* Content Side */}
      <div className={cn("space-y-6", !isEven && "lg:col-start-2")}>
        {/* Small subtitle with icon */}
        <div className="flex items-center gap-3 text-white/60 font-mono font-light uppercase tracking-[0.2em] opacity-80">
          <Icon className="size-5" />
          <span className="text-xs sm:text-sm">Langkah {title.charAt(0)}</span>
        </div>
        
        {/* Large title */}
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight leading-tight tracking-tight text-white">
          {title.replace(/^\d+\.\s*/, '')}
        </h3>
        
        {/* Description */}
        <p className="text-base lg:text-lg font-light leading-relaxed text-white/70 max-w-xl">
          {description}
        </p>
      </div>

      {/* Image Side */}
      <div className={cn("relative", !isEven && "lg:col-start-1")}>
        {/* Corner accent elements */}
        <div className="absolute top-2 left-2 w-10 h-10 border border-red-500/20 bg-red-500/5 z-10">
          <div className="absolute top-0 left-0 w-2 h-2 bg-red-500 opacity-30 rounded-full"></div>
        </div>
        
        <div className="absolute top-2 right-2 w-10 h-10 border border-red-500/20 bg-red-500/5 z-10">
          <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 opacity-30 rounded-full"></div>
        </div>
        
        <div className="absolute bottom-2 left-2 w-10 h-10 border border-red-500/20 bg-red-500/5 z-10">
          <div className="absolute bottom-0 left-0 w-2 h-2 bg-red-500 opacity-30 rounded-full"></div>
        </div>
        
        <div className="absolute bottom-2 right-2 w-10 h-10 border border-red-500/20 bg-red-500/5 z-10">
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-red-500 opacity-30 rounded-full"></div>
        </div>

        {/* Image container */}
        <div className="aspect-[4/3] rounded-lg overflow-hidden bg-white/5 border border-red-500/20">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
);
