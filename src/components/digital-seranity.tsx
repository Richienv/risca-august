"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

const DigitalSerenity = () => {
  return (
    <div className="w-full h-[50vh] bg-black text-slate-100 font-primary overflow-hidden relative">
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-6 py-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Title */}
          <motion.h1 
            className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter text-white mb-8"
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
            MASIH RAGU BUAT COBA?
          </motion.h1>
          
          {/* CTA Button */}
          <div>
            <Link href="/contact">
              <button className="bg-gradient-to-r from-pink-600 to-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:from-pink-500 hover:to-pink-400 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base">
                Saya Siap Mulai Sekarang
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalSerenity;
