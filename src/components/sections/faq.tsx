"use client";

import Section from "@/components/section";
import { motion } from "framer-motion";
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function FAQ() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center bg-black overflow-hidden">
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 lg:py-24 max-w-7xl">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-xs sm:text-sm font-mono font-light text-slate-300 uppercase tracking-[0.2em] opacity-80 mb-4">
              Masih Ada Yang Ditanyain?
            </h2>
            <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-pink-500/60 to-transparent mx-auto mb-6"></div>
            <motion.h1 
              className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tighter whitespace-normal max-w-full mx-auto text-white relative mb-4"
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
              FAQ
            </motion.h1>
            <p className="text-base sm:text-lg font-light leading-relaxed text-slate-300 max-w-3xl mx-auto mb-8">
               Jawaban lengkap buat yang masih ragu-ragu
            </p>
          </div>
          
          {/* Call to Action Buttons */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/faq"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-pink-400 hover:to-rose-500 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-500/20 group"
              >
                <span>Lihat Semua FAQ</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              
              <Link 
                href="/pricing"
                className="inline-flex items-center gap-3 bg-transparent border-2 border-pink-500 text-pink-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-pink-500/10 hover:border-pink-400 hover:text-pink-300 transition-all duration-300 hover:transform hover:-translate-y-1 group"
              >
                <span>Langsung Mulai</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 mt-4">
              Temukan jawaban atas semua pertanyaan tentang program kami
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}