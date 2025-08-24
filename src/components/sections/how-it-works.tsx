"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const stepsData = [
  {
    title: "Hari ke 1-12 — Fundamental Bisnis Asuransi",
    description: "Memulai dari nol dengan modal nekat. Belajar dasar industri, jenis produk, dan mindset yang benar sebagai agen professional.",
    imageSrc: "/images/1.png"
  },
  {
    title: "Hari ke 13-24 — Teknik Closing dan Persuasi",
    description: "Master script closing yang proven, teknik handling objection, dan cara bikin client percaya. Ini yang bedain kamu dari agen biasa.",
    imageSrc: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500&h=400&fit=crop"
  },
  {
    title: "Hari ke 25-36 — Membangun Profit Konsisten",
    description: "Scale up income dengan strategi client premium, portfolio management yang profitable, dan teknik upselling natural.",
    imageSrc: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=500&h=400&fit=crop"
  },
  {
    title: "Hari ke 37-48 — Strategi Digital Marketing",
    description: "Leverage social media, build personal brand yang kuat, dan convert follower jadi paying client dengan sistem proven.",
    imageSrc: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=500&h=400&fit=crop"
  },
  {
    title: "Hari ke 49-60 — Advanced Sales Psychology",
    description: "Psychology of selling, advanced negotiation, dan handle big ticket clients. Transform dari sales jadi trusted advisor.",
    imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=400&fit=crop"
  },
  {
    title: "Hari ke 61-84 — Ekspansi ke Pasar International",
    description: "Handle international clients, ekspor produk asuransi, compliance, dan komunikasi cross-border yang effective.",
    imageSrc: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&h=400&fit=crop"
  },
  {
    title: "Hari ke 85-90 — Sistem Passive Income",
    description: "Putting it all together. Build sistem bisnis yang jalan sendiri dan generate passive income konsisten dengan mentorship intensif.",
    imageSrc: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=500&h=400&fit=crop"
  }
];

export default function HowItWorks() {
  const [activeSteps, setActiveSteps] = useState<number[]>([]);

  const handleStepInView = (index: number, inView: boolean) => {
    setActiveSteps(prev => {
      if (inView && !prev.includes(index)) {
        return [...prev, index];
      } else if (!inView && prev.includes(index)) {
        return prev.filter(step => step !== index);
      }
      return prev;
    });
  };

  return (
    <section className="relative bg-black py-16 md:py-32 overflow-hidden">
      
      <div className="relative z-10 w-full px-12 md:px-20 lg:px-32 xl:px-40">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-xs sm:text-sm font-mono font-light text-white/70 uppercase tracking-[0.2em] opacity-80 mb-4">
            Jangan Takut Ayo Mulai.
          </h2>
          <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-30 mx-auto mb-6"></div>
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
            Proses 90 hari Kamu Kedepan
          </motion.h1>
          <p className="text-sm lg:text-base font-light leading-relaxed text-white/70 max-w-2xl mx-auto">
            Setiap hari ada progress baru, setiap minggu ada breakthrough. Ini bukan cuma training, tapi transformasi total mindset dan skill kamu.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Single continuous timeline line - pink theme */}
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-500/60 via-pink-400/40 to-pink-500/60"></div>
            
            {/* Timeline Steps */}
            <div className="space-y-6 sm:space-y-8">
              {stepsData.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      duration: 0.6,
                      ease: "easeInOut"
                    }
                  }}
                  onViewportEnter={() => handleStepInView(index, true)}
                  onViewportLeave={() => handleStepInView(index, false)}
                  viewport={{ once: false, margin: "-30%" }}
                  className="relative flex items-start"
                >
                  {/* Badge instead of circle */}
                  <div className="absolute left-0 flex-shrink-0">
                    {/* Background circle to create gap in line */}
                    <div className="absolute w-10 h-10 bg-black rounded-full -left-1.5 -top-1.5 z-10"></div>
                    {/* Badge image */}
                    <motion.div 
                      className="w-7 h-7 z-20 relative flex items-center justify-center"
                      animate={{
                        scale: activeSteps.includes(index) ? [1, 1.1, 1] : 1,
                        rotate: activeSteps.includes(index) ? [0, 5, -5, 0] : 0
                      }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      <Image
                        src="/images/badge.png"
                        alt="Step badge"
                        width={28}
                        height={28}
                        className={`transition-all duration-500 ${
                          activeSteps.includes(index) ? 'opacity-100 brightness-110' : 'opacity-70 brightness-75'
                        }`}
                      />
                    </motion.div>
                  </div>
                  
                  {/* Content Card */}
                  <div className="ml-8 flex-1 bg-gradient-to-br from-black/50 via-black/40 to-orange-900/10 backdrop-blur-sm rounded-lg p-4 sm:p-5">
                    <div className="space-y-1">
                      {/* Small Tag */}
                      <p className="text-[10px] sm:text-xs font-mono text-orange-400 uppercase tracking-wider">
                        {step.title.split(' — ')[0]}
                      </p>
                      
                      {/* Bold Title */}
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold leading-tight text-white mb-1">
                        {step.title.split(' — ')[1]}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-xs sm:text-sm font-light leading-relaxed text-white/70 max-w-lg">
                        {step.description}
                      </p>
                      
                      {/* Image */}
                      <div className="mt-4 w-full max-w-xs h-40 sm:h-48 rounded-lg overflow-hidden">
                        <img
                          src={step.imageSrc}
                          alt={step.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
