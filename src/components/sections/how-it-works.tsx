"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section className="relative w-full bg-black overflow-hidden">
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-2 sm:px-4 lg:px-6 py-16 sm:py-20 lg:py-24 max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-xs sm:text-sm font-mono font-light text-white/70 uppercase tracking-[0.2em] opacity-80 mb-4">
              90 Hari Battle Pass Insurance Path
            </h2>
            <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-pink-500/60 to-transparent mx-auto mb-6"></div>
            <motion.h1 
              className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tighter whitespace-normal max-w-full mx-auto text-white relative mb-6"
              style={{
                background: 'linear-gradient(90deg, #ffffff 0%, #ec4899 50%, #ffffff 100%)',
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
              Apa yang Bakal Kamu Dapatkan Saat Join
            </motion.h1>
            <p className="text-base sm:text-lg font-light leading-relaxed text-white/70 max-w-3xl mx-auto mb-8">
              Battle pass 90 hari versi insurance path yang realistis, step by step sesuai milestone di bisnis ini. Reward ditempatkan di titik besar dengan "apa yang kamu capai" sesuai alur asuransi.
            </p>
          </div>

          {/* Call to Action Button */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/how-it-works"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-pink-400 hover:to-rose-500 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-500/20 group"
              >
                <span>Lihat Battle Pass Lengkap 90 Hari</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              
              <Link 
                href="/pricing"
                className="inline-flex items-center gap-3 bg-transparent border-2 border-pink-500 text-pink-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-pink-500/10 hover:border-pink-400 hover:text-pink-300 transition-all duration-300 hover:transform hover:-translate-y-1 group"
              >
                <span>Dapatkan Rewards Ini</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 mt-3">
              Jelajahi timeline reward dan milestone yang menanti
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
