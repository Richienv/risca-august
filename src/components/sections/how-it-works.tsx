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
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-extralight leading-tight tracking-tight mb-4 text-white">
            Caranya Gampang Banget
          </h2>
          <p className="text-sm lg:text-base font-light leading-relaxed text-white/70 max-w-2xl mx-auto">
            3 langkah doang, lo udah bisa mulai dapetin 10 juta. Gak ribet, gak lama, langsung action.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {stepsData.map((step, index) => (
            <StepCard
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              imageSrc={step.imageSrc}
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
}

const StepCard = ({ icon: Icon, title, description, imageSrc }: StepCardProps) => (
  <Card className="bg-black border-red-500/20 hover:border-red-500/30 transition-all duration-300 relative group">
    {/* Corner accent elements - matching digital-seranity.tsx */}
    <div className="absolute top-2 left-2 w-10 h-10 border border-red-500/20 bg-red-500/5 opacity-100 transition-all duration-300 group-hover:opacity-75">
      <div className="absolute top-0 left-0 w-2 h-2 bg-red-500 opacity-30 rounded-full"></div>
    </div>
    
    <div className="absolute top-2 right-2 w-10 h-10 border border-red-500/20 bg-red-500/5 opacity-100 transition-all duration-300 group-hover:opacity-75">
      <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 opacity-30 rounded-full"></div>
    </div>
    
    <div className="absolute bottom-2 left-2 w-10 h-10 border border-red-500/20 bg-red-500/5 opacity-100 transition-all duration-300 group-hover:opacity-75">
      <div className="absolute bottom-0 left-0 w-2 h-2 bg-red-500 opacity-30 rounded-full"></div>
    </div>
    
    <div className="absolute bottom-2 right-2 w-10 h-10 border border-red-500/20 bg-red-500/5 opacity-100 transition-all duration-300 group-hover:opacity-75">
      <div className="absolute bottom-0 right-0 w-2 h-2 bg-red-500 opacity-30 rounded-full"></div>
    </div>

    <CardHeader>
      <div className="flex items-center gap-2 text-white/60 font-mono font-light mb-2 uppercase tracking-[0.2em] opacity-80">
        <Icon className="size-4" />
        Langkah {title.charAt(0)}
      </div>
      <CardTitle className="text-xl font-extralight leading-tight tracking-tight text-white">
        {title}
      </CardTitle>
      <CardDescription className="text-sm font-light leading-relaxed text-white/60">
        {description}
      </CardDescription>
    </CardHeader>

    <CardContent>
      <div className="aspect-[4/3] rounded-lg overflow-hidden bg-white/5">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
    </CardContent>
  </Card>
);
