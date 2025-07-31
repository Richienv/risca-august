"use client";

import Section from "@/components/section";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Star, Trophy, Users, Zap } from "lucide-react";

const data = [
  {
    id: 1,
    title: "Kontes Logam Mulia, iPad, dan Uang Tunai Setiap Minggu",
    content: "Setiap closing kamu akan mendapatkan kesempatan mengikuti undian-undian berhadiah tiap minggu!",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=1200&fit=crop&q=80",
    icon: Trophy,
    size: "large"
  },
  {
    id: 2,
    title: "Eksklusif Private Events & VIP Dinner with Champions",
    content: "Kamu akan mendapatkan special invitation untuk menghadiri Special Awardee Night, event apresiasi achievement kamu yang juga membantu memperluas network kamu!",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=1000&fit=crop&q=80",
    icon: Star,
    size: "medium"
  },
  {
    id: 3,
    title: "Closing With Mentors",
    content: "Aku bakal ikut kamu untuk ketemu calon klien potensial supaya kamu bisa closing lebih cepat! So, kamu gak perlu takut bekerja sendirian.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=900&fit=crop&q=80",
    icon: Users,
    size: "small"
  },
  {
    id: 4,
    title: "Kelas Training dan Kelas Pengembangan Diri dari Speaker Ternama",
    content: "Komunitas kita always invite the top speakers ternama to share pengalaman dan tips suksesnya, beda tim beda hasil.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=1200&fit=crop&q=80",
    icon: Zap,
    size: "large"
  },
];

function FeatureCard({ item, index }: { item: typeof data[0], index: number }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const IconComponent = item.icon;
  
  const getCardHeight = () => {
    switch (item.size) {
      case 'large': return 'h-96 md:h-[28rem]';
      case 'medium': return 'h-80 md:h-96';
      case 'small': return 'h-72 md:h-80';
      default: return 'h-80 md:h-96';
    }
  };

  return (
    <motion.div 
      ref={cardRef}
      className={`relative group cursor-pointer ${getCardHeight()}`}
      style={{ y, opacity }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.02,
        rotateX: 2,
        rotateY: 2,
        transition: { duration: 0.3 }
      }}
    >
      {/* Glass morphism card with image background */}
      <div className="relative w-full h-full rounded-3xl overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={item.image}
            alt={item.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-700 group-hover:scale-110"
          />
          {/* Dark overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/70 transition-all duration-500" />
        </div>

        {/* Glass morphism overlay */}
        <div className="absolute inset-0 backdrop-blur-[2px] bg-white/5 border border-white/10 rounded-3xl">
          {/* Content container */}
          <div className="relative h-full p-8 flex flex-col justify-end">
            {/* Floating icon */}
            <div className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <IconComponent className="w-6 h-6 text-white" />
            </div>

            {/* Text content */}
            <div className="space-y-4">
              <motion.h3 
                className="text-2xl md:text-3xl font-light text-white leading-tight"
                style={{ fontFamily: 'Georgia, serif' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {item.title}
              </motion.h3>
              
              <motion.p 
                className="text-sm md:text-base text-white/90 leading-relaxed font-light"
                style={{ fontFamily: 'system-ui, sans-serif' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                {item.content}
              </motion.p>

              {/* Number indicator */}
              <motion.div 
                className="absolute top-6 left-6 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
              >
                <span className="text-white text-sm font-mono font-bold">
                  {String(item.id).padStart(2, '0')}
                </span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 rounded-3xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
}

export default function FeaturesSection() {
  return (
    <div className="relative w-full bg-gradient-to-br from-red-950 via-black to-red-900 overflow-hidden">
      {/* Red grid pattern background - matching digital-seranity.tsx */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <pattern id="featuresGridRed" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(220, 38, 38, 0.1)" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#featuresGridRed)" />
      </svg>
      
      <Section className="py-20 md:py-32 relative">
        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-16 lg:mb-24 px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xs sm:text-sm font-mono font-light text-slate-300 uppercase tracking-[0.2em] opacity-80 mb-4">
                Premium Experiences
              </h2>
              <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-30 mx-auto mb-6"></div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight leading-tight tracking-tight text-slate-50 mb-4">
                Premium
                <span className="block font-thin text-xl sm:text-2xl md:text-3xl lg:text-4xl text-slate-300 mt-2 leading-relaxed tracking-wide">
                  Experiences
                </span>
              </h1>
              <p className="text-sm lg:text-base font-light leading-relaxed text-slate-300 max-w-3xl mx-auto">
                Rasakan pengalaman eksklusif yang dirancang khusus untuk mengakselerasi kesuksesan Anda
              </p>
            </motion.div>
          </div>

          {/* Masonry grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto px-4">
            {data.map((item, index) => (
              <div 
                key={item.id} 
                className={`${
                  index === 1 ? 'md:mt-12' : 
                  index === 2 ? 'lg:mt-24' : 
                  index === 3 ? 'md:mt-8 lg:mt-16' : ''
                }`}
              >
                <FeatureCard item={item} index={index} />
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
