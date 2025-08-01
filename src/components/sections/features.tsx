"use client";

import Section from "@/components/section";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Star, Trophy, Users, Zap, BookOpen, Target, Handshake, Gift, Crown } from "lucide-react";

const data = [
  {
    id: 1,
    title: "Hadiah Gila Tiap Minggu",
    content: "Setiap closing dapet kesempatan menang logam mulia, iPad, atau cash! Makin banyak closing, makin besar peluang lo jadi jutawan dadakan.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=1200&fit=crop&q=80",
    icon: Trophy,
    size: "large"
  },
  {
    id: 2,
    title: "Party Khusus Member Doang",
    content: "VIP dinner, private events, dan Special Awardee Night cuma buat member sukses. Networking sambil flexing achievement lo!",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=1000&fit=crop&q=80",
    icon: Star,
    size: "medium"
  },
  {
    id: 3,
    title: "Mentor Ikut Jualan Bareng Lo",
    content: "Gue bakal ikut lo ketemu klien potensial biar closing lebih gampang. Lo gak akan pernah sendirian dalam proses ini.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=900&fit=crop&q=80",
    icon: Users,
    size: "small"
  },
  {
    id: 4,
    title: "Belajar dari yang Udah Kaya",
    content: "Training eksklusif dari top speakers dan mentor yang udah proven berhasil. Ini bukan teori doang, tapi sharing real experience.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=1200&fit=crop&q=80",
    icon: Zap,
    size: "large"
  },
  {
    id: 5,
    title: "Dibimbing Langsung sama Bos",
    content: "Akses eksklusif konsultasi 1-on-1 dengan Martha setiap minggu. Personal mentorship yang gak bakal lo dapet di tempat lain.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=900&fit=crop&q=80",
    icon: BookOpen,
    size: "medium"
  },
  {
    id: 6,
    title: "Tools Canggih Buat Cari Klien",
    content: "Database premium dan lead generation tools yang biasanya bayar mahal, lo dapet gratis. Prospecting jadi lebih efektif dan targeted.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=1000&fit=crop&q=80",
    icon: Target,
    size: "small"
  },
  {
    id: 7,
    title: "Kolaborasi sama Brand Gede",
    content: "Kesempatan jadi brand ambassador dan kolaborasi sama brand-brand premium. Networking level yang beda dari yang lain.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=1200&fit=crop&q=80",
    icon: Handshake,
    size: "large"
  },
  {
    id: 8,
    title: "Bonus Berlapis Sampe Pusing",
    content: "Bonus bulanan, quarterly incentive, annual awards - sistemnya berlapis sampe lo bingung mau ngapain duitnya.",
    image: "https://images.unsplash.com/photo-1607863680198-23d4b2565df0?w=800&h=900&fit=crop&q=80",
    icon: Gift,
    size: "medium"
  },
  {
    id: 9,
    title: "Jadi VIP Member Eksklusif",
    content: "Elite status dengan privilege khusus yang cuma dimiliki top performers. Recognition dan akses eksklusif yang bikin lo beda.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=1100&fit=crop&q=80",
    icon: Crown,
    size: "small"
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
    return 'h-80 md:h-96'; // Uniform height for all cards
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
        y: -8,
        transition: { duration: 0.3 }
      }}
    >
      {/* Clean card without background image */}
      <div className="relative w-full h-full rounded-3xl overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/20 rounded-3xl backdrop-blur-md">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-[0.02]">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id={`cardPattern${item.id}`} width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="1" fill="white" opacity="0.3"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#cardPattern${item.id})`} />
            </svg>
          </div>
        </div>

        {/* Content container */}
        <div className="relative h-full p-8 flex flex-col justify-between">
          {/* Header with icon and number */}
          <div className="flex justify-between items-start mb-6">
            {/* Number indicator */}
            <motion.div 
              className="w-12 h-12 rounded-2xl bg-red-500/20 backdrop-blur-md border border-red-400/30 flex items-center justify-center"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
            >
              <span className="text-red-300 text-lg font-mono font-bold">
                {String(item.id).padStart(2, '0')}
              </span>
            </motion.div>

            {/* Floating icon */}
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <IconComponent className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Text content */}
          <div className="space-y-4 flex-1 flex flex-col justify-center">
            <motion.h3 
              className="text-xl md:text-2xl font-semibold text-white leading-tight"
              style={{ fontFamily: 'system-ui, sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              {item.title}
            </motion.h3>
            
            <motion.p 
              className="text-sm md:text-base text-white/80 leading-relaxed font-light"
              style={{ fontFamily: 'system-ui, sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.5 }}
            >
              {item.content}
            </motion.p>
          </div>
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 rounded-3xl bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
                Ini yang Lo Dapetin
              </h2>
              <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-30 mx-auto mb-6"></div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight leading-tight tracking-tight text-slate-50 mb-4">
                Gak Cuma Duit Doang
                <span className="block font-thin text-xl sm:text-2xl md:text-3xl lg:text-4xl text-slate-300 mt-2 leading-relaxed tracking-wide">
                  Tapi Juga Lifestyle
                </span>
              </h1>
              <p className="text-sm lg:text-base font-light leading-relaxed text-slate-300 max-w-3xl mx-auto">
                Benefit gila yang gak bakal lo dapet di tempat lain. Ini yang bikin member kita beda dari yang lain.
              </p>
            </motion.div>
          </div>

          {/* Clean grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto px-4">
            {data.map((item, index) => (
              <div key={item.id}>
                <FeatureCard item={item} index={index} />
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
