"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/card-1';
import { cn } from '@/lib/utils';
import { MousePointer, Phone, Users, LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { Spotlight } from '@/components/spotlight-new';
import Link from 'next/link';

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
    <section className="relative bg-black py-16 md:py-32 overflow-hidden">
      {/* Pink Spotlight Effects */}
      <Spotlight 
        gradientFirst={`radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(236, 72, 153, 0.12) 0%, rgba(219, 39, 119, 0.06) 50%, transparent 80%)`}
        gradientSecond={`radial-gradient(50% 50% at 50% 50%, rgba(236, 72, 153, 0.08) 0%, rgba(219, 39, 119, 0.04) 80%, transparent 100%)`}
        gradientThird={`radial-gradient(50% 50% at 50% 50%, rgba(219, 39, 119, 0.06) 0%, rgba(236, 72, 153, 0.03) 80%, transparent 100%)`}
        translateY={-160}
        width={380}
        height={750}
        smallWidth={140}
        duration={16}
        xOffset={50}
      />
      
      <div className="relative z-10 w-full px-6 md:px-10 lg:px-16 xl:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs sm:text-sm font-mono font-light text-white/70 uppercase tracking-[0.2em] opacity-80 mb-4">
            Waktunya Kamu Buat Coba Yang Baru.
          </h2>
          <div   className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-30 mx-auto mb-6"></div>
          <motion.h1 
            className="text-center text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl whitespace-normal px-4 sm:px-6 md:px-8 lg:px-10 max-w-full mx-auto text-white relative mb-6"
            style={{
              background: 'linear-gradient(90deg, #ffffff 0%, #9d1152 50%, #ffffff 100%)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear'
            }}
          >
            GIMANA CARA JOIN BISNISNYA?
          </motion.h1>
          <p className="text-sm lg:text-base font-light leading-relaxed text-white/70 max-w-2xl mx-auto">
            3 langkah doang, lo udah bisa mulai dapetin 10 juta. Gak ribet, gak lama, langsung action.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="space-y-6 sm:space-y-8 lg:space-y-16">
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

        {/* Single CTA Button at the end */}
        <div className="mt-12 sm:mt-16 text-center">
          <Link href="/contact">
            <button className="bg-gradient-to-r from-pink-600 to-pink-500 text-white px-8 py-4 sm:px-12 sm:py-6 rounded-full font-medium hover:from-pink-500 hover:to-pink-400 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-pink-500/25 text-sm sm:text-lg tracking-wide uppercase">
              MULAI SEKARANG
            </button>
          </Link>
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
      "grid grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-6 lg:gap-12 items-center",
      !isEven && "lg:grid-flow-col-dense"
    )}>
      {/* Content Side */}
      <div className={cn("space-y-3 sm:space-y-4 lg:space-y-6", !isEven && "lg:col-start-2")}>
        {/* Small subtitle with icon */}
        <div className="flex items-center gap-2 sm:gap-3 text-white/60 font-mono font-light uppercase tracking-[0.2em] opacity-80">
          <Icon className="size-4 sm:size-5" />
          <span className="text-xs">Langkah {title.charAt(0)}</span>
        </div>
        
        {/* Large title - more compact on mobile */}
        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-extralight leading-tight tracking-tight text-white">
          {title.replace(/^\d+\.\s*/, '')}
        </h3>
        
        {/* Description - more compact on mobile */}
        <p className="text-xs sm:text-sm lg:text-base font-light leading-snug sm:leading-relaxed text-white/70">
          {description}
        </p>
      </div>

      {/* Image Side */}
      <div className={cn("relative", !isEven && "lg:col-start-1")}>
        {/* Corner accent elements - smaller on mobile */}
        <div className="absolute top-1 left-1 sm:top-2 sm:left-2 w-6 h-6 sm:w-10 sm:h-10 border border-red-500/20 bg-red-500/5 z-10">
          <div className="absolute top-0 left-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 opacity-30 rounded-full"></div>
        </div>
        
        <div className="absolute top-1 right-1 sm:top-2 sm:right-2 w-6 h-6 sm:w-10 sm:h-10 border border-red-500/20 bg-red-500/5 z-10">
          <div className="absolute top-0 right-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 opacity-30 rounded-full"></div>
        </div>
        
        <div className="absolute bottom-1 left-1 sm:bottom-2 sm:left-2 w-6 h-6 sm:w-10 sm:h-10 border border-red-500/20 bg-red-500/5 z-10">
          <div className="absolute bottom-0 left-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 opacity-30 rounded-full"></div>
        </div>
        
        <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 w-6 h-6 sm:w-10 sm:h-10 border border-red-500/20 bg-red-500/5 z-10">
          <div className="absolute bottom-0 right-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 opacity-30 rounded-full"></div>
        </div>

        {/* Image container - more compact aspect ratio on mobile */}
        <div className="aspect-[3/2] sm:aspect-[4/3] rounded-lg overflow-hidden bg-white/5 border border-red-500/20">
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
