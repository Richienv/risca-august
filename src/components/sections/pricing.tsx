"use client";

import React, { useState, useEffect } from 'react';
import Section from "@/components/section";
import { motion, useScroll, useTransform } from "framer-motion";
import { Clock, TrendingUp, Users, Zap, Briefcase, Star, Target, Sparkles } from "lucide-react";
import Link from "next/link";

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
    color: "text-red-400"
  },
  {
    icon: TrendingUp,
    title: "10 Juta dalam 5 Bulan",
    description: "Income sustainable yang bisa lo raih dalam waktu singkat",
    value: "10-100 juta+",
    color: "text-red-500"
  },
  {
    icon: Users,
    title: "Growth Gila-gilaan",
    description: "Penghasilan naik exponential, bukan linear kayak karyawan",
    value: "500%+/tahun",
    color: "text-red-300"
  },
  {
    icon: Star,
    title: "Work-Life Balance Sempurna",
    description: "Kerja dari Bali, nongkrong sambil duit masuk",
    value: "Freedom 100%",
    color: "text-red-400"
  },
  {
    icon: Target,
    title: "Multiple Income Streams",
    description: "Passive income dari berbagai channel bisnis",
    value: "5+ revenue",
    color: "text-red-500"
  },
  {
    icon: Zap,
    title: "Energy Level Max",
    description: "Semangat maksimal karena ngerjain passion lo",
    value: "High energy",
    color: "text-red-300"
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
        delay: index * 0.2,
        type: "spring",
        stiffness: 100 
      }}
      whileHover={{ 
        scale: 1.05, 
        rotateX: side === 'left' ? -5 : 5,
        rotateY: side === 'left' ? 5 : -5,
        transition: { duration: 0.3 }
      }}
      viewport={{ once: true }}
      className={`
        group relative p-8 rounded-3xl backdrop-blur-md border transition-all duration-500
        ${side === 'left' 
          ? 'bg-gray-900/60 border-gray-700/50 hover:bg-gray-800/70' 
          : 'bg-red-900/40 border-red-500/30 hover:border-red-400/50'
        }
      `}
      style={{ 
        transformStyle: "preserve-3d",
        perspective: "1000px"
      }}
    >
      {/* Floating icon */}
      <div className={`
        absolute -top-6 left-8 w-12 h-12 rounded-2xl flex items-center justify-center
        backdrop-blur-md border transition-all duration-300 group-hover:scale-110
        ${side === 'left' 
          ? 'bg-gray-800/80 border-gray-600/50' 
          : 'bg-red-500/20 border-red-400/30'
        }
      `}>
        <IconComponent className={`w-6 h-6 ${data.color}`} />
      </div>

      {/* Card content */}
      <div className="mt-4 space-y-4">
        <h3 className={`
          text-xl sm:text-2xl font-extralight tracking-tight leading-tight
          ${side === 'left' ? 'text-slate-300' : 'text-red-300'}
        `}>
          {data.title}
        </h3>
        
        <p className={`
          text-xs sm:text-sm font-light leading-relaxed font-mono tracking-wide
          ${side === 'left' ? 'text-slate-400' : 'text-red-200'}
        `}>
          {data.description}
        </p>

        {/* Animated value display */}
        <div className={`
          text-2xl sm:text-3xl font-extralight tracking-wide
          ${side === 'left' ? 'text-slate-100' : 'text-red-400'}
        `}>
          {data.value}
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: side === 'left' ? '30%' : '90%' }}
            transition={{ duration: 1.5, delay: index * 0.3 }}
            className={`
              h-full rounded-full
              ${side === 'left' 
                ? 'bg-gradient-to-r from-gray-500 to-gray-400' 
                : 'bg-gradient-to-r from-red-500 to-red-400'
              }
            `}
          />
        </div>
      </div>

      {/* Glow effect */}
      <div className={`
        absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500
        ${side === 'left' 
          ? 'bg-gray-700/10' 
          : 'bg-red-400/10'
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
    <div className="relative w-full bg-gradient-to-br from-red-950 via-black to-red-900 overflow-hidden">
      {/* Red grid pattern background - matching digital-seranity.tsx */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <pattern id="pricingGridRed" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(220, 38, 38, 0.1)" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pricingGridRed)" />
      </svg>
      
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
              <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-30 mx-auto mb-6"></div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight leading-tight tracking-tight text-slate-50 mb-4">
                MAU STUCK SELAMANYA
                <span className="block font-thin text-xl sm:text-2xl md:text-3xl lg:text-4xl text-slate-300 mt-2 leading-relaxed tracking-wide">
                  ATAU BREAKOUT?
                </span>
              </h1>
              
              <p className="text-sm lg:text-base font-light leading-relaxed text-slate-300 max-w-3xl mx-auto">
                Lo mau jadi yang masih <span className="text-gray-400 line-through">ngeluh soal gaji</span> 
                <br />atau yang udah <span className="text-red-400 font-semibold">flexing 10 juta?</span>
              </p>
            </motion.div>
          </div>

          {/* Split screen comparison */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-7xl mx-auto px-4">
            
            {/* Left side - Job */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center lg:text-left"
              >
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-extralight text-slate-300 mb-4 tracking-tight leading-tight">
                  STUCK ZONE
                </h3>
                <p className="text-slate-400 text-sm lg:text-base font-light leading-relaxed">Hidup gitu-gitu aja terus</p>
              </motion.div>
              
              <div className="space-y-8">
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

            {/* Dividing line */}
            <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-96 bg-gradient-to-b from-transparent via-red-400/50 to-transparent" />

            {/* Right side - Business */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center lg:text-right"
              >
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-extralight text-red-400 mb-4 tracking-tight leading-tight">
                  FREEDOM ZONE
                </h3>
                <p className="text-red-300 text-sm lg:text-base font-light leading-relaxed">Hidup bebas, duit ngalir</p>
              </motion.div>
              
              <div className="space-y-8">
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
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-12 py-6 text-lg font-light text-white bg-gradient-to-r from-red-600 to-red-500 rounded-full overflow-hidden group"
              >
                <span className="relative z-10 font-mono tracking-wide uppercase">GUE MAU KELUAR DARI STUCK ZONE</span>
                
                {/* Button glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
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
