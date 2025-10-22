"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const AppleStyleSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-black overflow-hidden">
      <div className="container mx-auto px-2 sm:px-4 lg:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          
          {/* Left Side - About Me (Dark Theme) */}
          <div className="relative bg-black flex flex-col justify-center p-8 lg:p-12 xl:p-16">
            <div className="max-w-lg mx-auto lg:mx-0">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-4 leading-tight tracking-tighter">
                3 Alasan Untuk Kamu Pikirkan
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white mb-6 leading-tight tracking-tighter">
                Kenapa harus Cobain Bisnis Asuransi.
              </h2>
              <p className="text-base font-light leading-relaxed text-gray-300 mb-8">
                Dari sekian banyak pilihan bisnis yang ada, kenapa harus asuransi? 
                Ini 3 alasan kuat yang bisa jadi pertimbangan kamu untuk mulai.
              </p>
              
              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link 
                  href="/about"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-pink-400 hover:to-rose-500 transition-all duration-300 hover:transform hover:-translate-y-0.5 group"
                >
                  <span>Lihat 3 Alasan</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side - Solution (Dark Theme) */}
          <div className="relative bg-black flex flex-col justify-center p-8 lg:p-12 xl:p-16">
            <div className="max-w-lg mx-auto lg:mx-0">
              <motion.h1 
                className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tighter mb-4"
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
                60 Hari Menuju Business Partner
              </motion.h1>
              <p className="text-base font-light leading-relaxed text-slate-300 mb-8">
                Program sistematis 60 hari: ketemu 2 orang setiap hari, capai rasio closing 4:1, raih omzet Rp 360 juta dalam 8 minggu.
              </p>
              
              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link 
                  href="/solution"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-pink-400 hover:to-rose-500 transition-all duration-300 hover:transform hover:-translate-y-0.5 group"
                >
                  <span>Lihat Program 60 Hari</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>

              {/* Small Terms Note */}
              <div className="mt-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-lg px-4 py-3">
                  <p className="text-white/70 text-xs">
                    <strong className="text-white">Catatan:</strong> FYP = pembayaran 1 bulan dihitung omzet 12 bulan
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AppleStyleSection;