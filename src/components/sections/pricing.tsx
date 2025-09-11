"use client";

import React from 'react';
import Section from "@/components/section";
import { motion } from "framer-motion";
import Link from "next/link";

const choiceData = [
  {
    id: "action",
    title: "Orang Yang Mau Melompat Untuk Merubah Hidupnya",
    description: "Berani ambil risiko, keluar dari zona nyaman, dan berjuang untuk masa depan yang lebih baik",
    image: "/images/mau-melompat.png"
  },
  {
    id: "passive", 
    title: "Dan Yang Mau Berdiam Diri.",
    description: "Tetap di zona aman, takut perubahan, dan puas dengan kondisi saat ini",
    image: "/images/berdiam-diri.png"
  }
];

function ChoiceCard({ choice, index }: { choice: typeof choiceData[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className="group relative"
    >
      {/* Main Image Container */}
      <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px] xl:h-[800px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
        <img 
          src={choice.image}
          alt={choice.title}
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>
  );
}

export default function ComparisonSection() {
  return (
    <div className="relative w-full bg-black overflow-hidden">
      
      <Section className="py-20 md:py-32 relative">
        <div className="relative z-10">
          
          {/* Header */}
          <div className="text-center mb-16 lg:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xs sm:text-sm font-mono font-light text-slate-300 uppercase tracking-[0.2em] opacity-80 mb-4">
                di Dunia ini Ada 2 Tipe Orang,
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
                KAMU YANG MANA?
              </motion.h1>
              
              <p className="text-xs sm:text-sm lg:text-base font-light leading-relaxed text-slate-300 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                Setiap orang punya pilihan. Pilihan untuk tetap di zona nyaman atau berani melompat ke kehidupan yang lebih baik.
              </p>
            </motion.div>
          </div>

          {/* Two Choice Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {choiceData.map((choice, index) => (
              <ChoiceCard key={choice.id} choice={choice} index={index} />
            ))}
          </div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 lg:mt-20 text-center"
          >
            <Link href="#pricing-section">
              <button className="bg-gradient-to-r from-pink-600 to-pink-500 text-white px-8 py-4 sm:px-12 sm:py-6 rounded-full font-medium hover:from-pink-500 hover:to-pink-400 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-pink-500/25 text-sm sm:text-lg tracking-wide uppercase">
                SAYA MAU JADI ORANG YANG MELOMPAT
              </button>
            </Link>
            
            <p className="mt-6 text-slate-400 text-xs font-mono tracking-wide">
              ⚡ Ribuan orang sudah melompat, kapan giliran kamu?
            </p>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
