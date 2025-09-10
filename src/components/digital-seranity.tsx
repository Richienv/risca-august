"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

const DigitalSerenity = () => {
  return (
    <div className="w-full h-[35vh] bg-black text-slate-100 font-primary overflow-hidden relative">
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-6 py-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Title */}
          <motion.h1 
            className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter text-white mb-8"
            style={{
              background: 'linear-gradient(90deg, #ffffff 0%, #fbbf24 50%, #ffffff 100%)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 20px rgba(251, 191, 36, 0.5), 0 0 40px rgba(251, 191, 36, 0.3)',
              filter: 'drop-shadow(0 0 10px rgba(251, 191, 36, 0.4))'
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
            <Link href="#pricing-section">
              <button className="bg-gradient-to-r from-yellow-500 to-amber-400 hover:from-yellow-400 hover:to-amber-300 text-amber-950 font-semibold px-4 py-2 rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-xs sm:text-sm" style={{ 
                boxShadow: '0 0 20px rgba(251, 191, 36, 0.3)',
                textShadow: '0 0 8px rgba(0, 0, 0, 0.3)'
              }}>
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
