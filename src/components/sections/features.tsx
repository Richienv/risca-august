"use client";

import Section from "@/components/section";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Star, Trophy, Users, Zap, BookOpen, Target, Handshake, Gift, Crown } from "lucide-react";
import { Spotlight } from "@/components/spotlight-new";

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
              className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
            >
              <span className="text-white/80 text-lg font-mono font-bold">
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

        {/* Subtle hover glow effect */}
        <div className="absolute inset-0 rounded-3xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
}

export default function FeaturesSection() {
  return (
    <div className="relative w-full bg-black overflow-hidden">
      {/* Pink Spotlight Effects */}
      <Spotlight 
        gradientFirst={`radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(236, 72, 153, 0.12) 0%, rgba(219, 39, 119, 0.06) 50%, transparent 80%)`}
        gradientSecond={`radial-gradient(50% 50% at 50% 50%, rgba(236, 72, 153, 0.08) 0%, rgba(219, 39, 119, 0.04) 80%, transparent 100%)`}
        gradientThird={`radial-gradient(50% 50% at 50% 50%, rgba(219, 39, 119, 0.06) 0%, rgba(236, 72, 153, 0.03) 80%, transparent 100%)`}
        translateY={-210}
        width={430}
        height={870}
        smallWidth={190}
        duration={11}
        xOffset={55}
      />
      
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
                Kerja Keras = Reward Besar
              </h2>
              <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mb-6"></div>
              <motion.h1 
                className="text-center text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl whitespace-normal px-4 sm:px-6 md:px-8 lg:px-10 max-w-full mx-auto text-white relative mb-4"
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
                GAK CUMA DUIT DOANG
              </motion.h1>
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
