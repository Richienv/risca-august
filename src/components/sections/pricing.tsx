"use client";

import React, { useState, useEffect } from 'react';
import Section from "@/components/section";
import { motion, useScroll, useTransform } from "framer-motion";
import { Clock, TrendingUp, Users, Zap, Briefcase, Star, Target, Sparkles } from "lucide-react";
import Link from "next/link";
import { Spotlight } from "@/components/spotlight-new";

const jobData = [
  {
    icon: Clock,
    title: "Terikat Waktu",
    description: "Lo cuma jadi robot yang ngikutin aturan bos",
    value: "9-5 setiap hari",
    color: "text-gray-400"
  },
  {
    icon: Briefcase,
    title: "Gaji Pas-pasan",
    description: "Penghasilan stagnan, gak pernah naik signifikan",
    value: "3-8 juta",
    color: "text-gray-400"
  },
  {
    icon: Target,
    title: "Naik Gaji Lama Banget",
    description: "Nunggu kenaikan gaji kayak nunggu hujan di musim kemarau",
    value: "5-10%/tahun",
    color: "text-gray-400"
  },
  {
    icon: Zap,
    title: "Burnout Terus",
    description: "Mental lelah, fisik drop, tapi tetep harus masuk",
    value: "Stress 24/7",
    color: "text-gray-400"
  },
  {
    icon: Star,
    title: "Gak Ada Me Time",
    description: "Hidup cuma kerja-tidur-kerja, passion terlupakan",
    value: "0 jam bebas",
    color: "text-gray-400"
  },
  {
    icon: Users,
    title: "Toxic Environment",
    description: "Lingkungan kerja penuh intrik dan backstabbing",
    value: "Drama endless",
    color: "text-gray-400"
  },
];

const businessData = [
  {
    icon: Sparkles,
    title: "Bebas Total",
    description: "Bangun siang, kerja dari mana aja, nobody's boss",
    value: "Kapan aja lo mau",
    color: "text-white/80"
  },
  {
    icon: TrendingUp,
    title: "10 Juta dalam 3 bulan",
    description: "Income sustainable yang bisa lo raih dalam waktu singkat",
    value: "10-100 juta+",
    color: "text-white/90"
  },
  {
    icon: Users,
    title: "Growth Gila-gilaan",
    description: "Penghasilan naik exponential, bukan linear kayak karyawan",
    value: "500%+/tahun",
    color: "text-white/80"
  },
  {
    icon: Star,
    title: "Work-Life Balance Sempurna",
    description: "Kerja dari Bali, nongkrong sambil duit masuk",
    value: "Freedom 100%",
    color: "text-white/80"
  },
  {
    icon: Target,
    title: "Multiple Income Streams",
    description: "Passive income dari berbagai channel bisnis",
    value: "5+ revenue",
    color: "text-white/90"
  },
  {
    icon: Zap,
    title: "Energy Level Max",
    description: "Semangat maksimal karena ngerjain passion lo",
    value: "High energy",
    color: "text-white/80"
  },
];

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (count < target) {
        setCount(count + Math.ceil(target / 50));
      }
    }, 30);
    return () => clearTimeout(timer);
  }, [count, target]);

  return <span>{Math.min(count, target)}{suffix}</span>;
}

function ComparisonCard({ data, side, index }: { 
  data: typeof jobData[0]; 
  side: 'left' | 'right'; 
  index: number;
}) {
  const IconComponent = data.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: side === 'left' ? -100 : 100, rotateY: side === 'left' ? -15 : 15 }}
      whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        type: "spring",
        stiffness: 100 
      }}
      whileHover={{ 
        scale: 1.02, 
        y: -5,
        transition: { duration: 0.3 }
      }}
      viewport={{ once: true }}
      className={`
        group relative p-2 sm:p-6 rounded-xl sm:rounded-2xl backdrop-blur-md border transition-all duration-500 aspect-square flex flex-col justify-between
        ${side === 'left' 
          ? 'bg-black/60 sm:bg-gray-900/60 border-gray-800/50 sm:border-gray-700/50 hover:bg-black/70 sm:hover:bg-gray-800/70' 
          : 'bg-black/20 sm:bg-white/10 border-gray-600/30 sm:border-white/20 hover:border-gray-400/40 sm:hover:border-white/30'
        }
      `}
    >
      {/* Icon and title section */}
      <div className="flex items-start justify-between">
        <div className={`
          w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center
          backdrop-blur-md border transition-all duration-300 group-hover:scale-110
          ${side === 'left' 
            ? 'bg-gray-800/80 border-gray-600/50' 
            : 'bg-white/20 border-white/30'
          }
        `}>
          <IconComponent className={`w-4 h-4 sm:w-5 sm:h-5 ${data.color}`} />
        </div>
        
        {/* Number badge - hidden on mobile */}
        <div className={`
          hidden sm:block text-xs px-2 py-1 rounded-full font-mono
          ${side === 'left' ? 'bg-gray-700/50 text-gray-300' : 'bg-white/10 text-white/70'}
        `}>
          #{String(index + 1).padStart(2, '0')}
        </div>
      </div>

      {/* Content section - minimalist on mobile */}
      <div className="flex-1 flex flex-col justify-center space-y-1 sm:space-y-3">
        <h3 className={`
          text-xs sm:text-lg font-medium sm:font-semibold leading-tight
          ${side === 'left' ? 'text-slate-300' : 'text-white'}
        `}>
          {data.title}
        </h3>
        
        {/* Hide description on mobile for minimalism */}
        <p className={`
          hidden sm:block text-xs leading-relaxed line-clamp-3
          ${side === 'left' ? 'text-slate-400' : 'text-white/70'}
        `}>
          {data.description}
        </p>
      </div>

      {/* Value section - simplified on mobile */}
      <div className="space-y-1">
        <div className={`
          text-xs font-mono font-bold
          ${side === 'left' ? 'text-slate-200' : 'text-white'}
        `}>
          {data.value}
        </div>

        {/* Progress bar - hidden on mobile for cleaner look */}
        <div className="hidden sm:block w-full bg-gray-700/50 rounded-full h-1 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: side === 'left' ? '25%' : '85%' }}
            transition={{ duration: 1, delay: index * 0.2 }}
            className={`
              h-full rounded-full
              ${side === 'left' 
                ? 'bg-gradient-to-r from-gray-500 to-gray-400' 
                : 'bg-gradient-to-r from-white/80 to-white/60'
              }
            `}
          />
        </div>
      </div>

      {/* Hover glow effect */}
      <div className={`
        absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500
        ${side === 'left' 
          ? 'bg-gray-700/10' 
          : 'bg-white/5'
        }
      `} />
    </motion.div>
  );
}

function FloatingShape({ delay }: { delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0, 0.3, 0],
        scale: [0, 1, 0],
        rotate: [0, 180, 360],
        x: [0, 100, -50, 0],
        y: [0, -100, 50, 0]
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
      className="absolute w-16 h-16 bg-gradient-to-br from-black/20 to-black/40 rounded-xl backdrop-blur-sm"
    />
  );
}

export default function ComparisonSection() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div className="relative w-full bg-black overflow-hidden">
      {/* Pink Spotlight Effects */}
      <Spotlight 
        gradientFirst={`radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(236, 72, 153, 0.12) 0%, rgba(219, 39, 119, 0.06) 50%, transparent 80%)`}
        gradientSecond={`radial-gradient(50% 50% at 50% 50%, rgba(236, 72, 153, 0.08) 0%, rgba(219, 39, 119, 0.04) 80%, transparent 100%)`}
        gradientThird={`radial-gradient(50% 50% at 50% 50%, rgba(219, 39, 119, 0.06) 0%, rgba(236, 72, 153, 0.03) 80%, transparent 100%)`}
        translateY={-240}
        width={460}
        height={920}
        smallWidth={200}
        duration={9}
        xOffset={65}
      />
      
      <Section className="py-20 md:py-32 relative">
        <motion.div style={{ y }} className="relative z-10">
          
          {/* Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xs sm:text-sm font-mono font-light text-slate-300 uppercase tracking-[0.2em] opacity-80 mb-4">
                Mau Kayak Gimana?
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
                MAU STUCK SELAMANYA ATAU BREAKOUT?
              </motion.h1>
              
              <p className="text-sm lg:text-base font-light leading-relaxed text-slate-300 max-w-3xl mx-auto">
                Lo mau jadi yang masih <span className="text-gray-400 line-through">ngeluh soal gaji</span> 
                <br />atau yang udah <span className="text-white/90 font-semibold">flexing 10 juta?</span>
              </p>
            </motion.div>
          </div>

          {/* Compact grid comparison */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-7xl mx-auto px-4">
            
            {/* Left side - Job */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center lg:text-left mb-8"
              >
                <h3 className="text-2xl sm:text-3xl font-extralight text-slate-300 mb-2 tracking-tight leading-tight">
                  STUCK ZONE
                </h3>
                <p className="text-slate-400 text-sm font-light">Hidup gitu-gitu aja terus</p>
              </motion.div>
              
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                {jobData.map((item, index) => (
                  <ComparisonCard 
                    key={index} 
                    data={item} 
                    side="left" 
                    index={index} 
                  />
                ))}
              </div>
            </div>

            {/* Right side - Business */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center lg:text-right mb-8"
              >
                <h3 className="text-2xl sm:text-3xl font-extralight text-white/90 mb-2 tracking-tight leading-tight">
                  FREEDOM ZONE
                </h3>
                <p className="text-white/70 text-sm font-light">Hidup bebas, duit ngalir</p>
              </motion.div>
              
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                {businessData.map((item, index) => (
                  <ComparisonCard 
                    key={index} 
                    data={item} 
                    side="right" 
                    index={index} 
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <Link href="/contact">
              <button className="bg-gradient-to-r from-pink-600 to-pink-500 text-white px-8 py-4 sm:px-12 sm:py-6 rounded-full font-medium hover:from-pink-500 hover:to-pink-400 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-pink-500/25 text-sm sm:text-lg tracking-wide uppercase">
                GUE MAU KELUAR DARI STUCK ZONE
              </button>
            </Link>
            
            <p className="mt-6 text-slate-400 text-xs font-mono tracking-wide">
              ⚡ 2000+ Gen-Z udah breakout, kapan lo?
            </p>
          </motion.div>
        </motion.div>
      </Section>
    </div>
  );
}
