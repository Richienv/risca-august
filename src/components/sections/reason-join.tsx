"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const AboutMeSection = () => {
  const cardData = [
    {
      title: "Belajar Bareng, Dibimbing Sampai Kamu Bisa",
      description: "Kamu mau belajar step-by-step dari aku dan tim yang sudah membangun bisnis ini dari nol. Semua strategi, arahan, dan materinya sudah aku siapin supaya kamu cepat paham dan nggak bingung harus mulai dari mana.",
      metrics: "Mentoring langsung dari yang sudah berpengalaman",
      image: "/images/reason_mentoring.png"
    },
    {
      title: "Penghasilan Besar + Waktu Fleksibel",
      description: "Cocok buat kamu yang ingin meningkatkan pendapatan, tapi tetap punya waktu untuk keluarga, pekerjaan, kuliah, dan diri sendiri. Semua bisa dijalankan sesuai ritme hidupmu.",
      metrics: "Fleksibilitas penuh sesuai ritme hidup",
      image: "/images/reason_flexible.png"
    },
    {
      title: "Kerja yang Ada Manfaatnya",
      description: "Kita membantu banyak keluarga memiliki perencanaan keuangan yang matang, dana pendidikan anak, dan dana pensiun. Ini kerja yang nggak cuma cuan, tapi benar-benar berdampak dan bermakna untuk orang lain.",
      metrics: "Dampak nyata untuk banyak keluarga",
      image: "/images/reason_meaningful.png"
    },
    {
      title: "Bisa Mulai Dari Nol, Cocok Buat Side Job",
      description: "Nggak perlu pengalaman sebelumnya. Nggak perlu background keuangan. Sistem, pelatihan, materi, dan tools sudah lengkap — kamu tinggal mengikuti alurnya bersama tim.",
      metrics: "Sistem lengkap untuk pemula",
      image: "/images/reason_beginner.png"
    },
    {
      title: "Bukan Cuman Side Job, Ini Karier yang Bisa Tumbuh Bareng Kamu",
      description: "Kamu bisa membangunnya pelan pelan sambil belajar. Karier ini tumbuh mengikuti hidupmu, dan bisa menjadi sumber penghasilan jangka panjang yang bisa kamu temukan di keluarga nanti.",
      metrics: "Legacy yang bisa diwariskan",
      image: "/images/reason_longterm.png"
    }
  ];

  return (
    <section id="reason-join-section" className="relative w-full bg-black py-16 md:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 bg-black"></div>
      <div className="absolute inset-0 bg-black/40 z-10" />

      <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8 xl:px-16">

        {/* Title and Subtitle Section */}
        <div className="text-center mb-20">
          <h2 className="text-xs sm:text-sm font-mono font-light text-white/70 uppercase tracking-[0.2em] opacity-80 mb-4">
            Why Join Us?
          </h2>
          <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-30 mx-auto mb-6"></div>
          <motion.h1
            className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter whitespace-normal max-w-4xl mx-auto text-white relative mb-6"
            style={{
              background: 'linear-gradient(90deg, #ffffff 0%, #d97706 50%, #ffffff 100%)', // Amber-600
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
            Kenapa Harus Gabung Tim Aku?
          </motion.h1>
          <p className="text-sm lg:text-base font-light leading-relaxed text-white/70 max-w-3xl mx-auto">
            Bergabung dengan tim yang sudah terbukti sukses, dengan sistem yang jelas, mentoring langsung, dan peluang penghasilan yang nyata.
            Ini bukan hanya tentang kerja, tapi tentang membangun karier jangka panjang yang bermakna.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-6 max-w-[1800px] mx-auto">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: index * 0.1
                }
              }}
              viewport={{ once: true }}
              className={cn(
                "relative flex flex-col justify-between overflow-hidden rounded-xl",
                "bg-black/40 border border-amber-500/40",
                "backdrop-blur-sm p-3 md:p-6 h-full",
                // Make the last item span full width on mobile if odd number, or adjust as needed. 
                // For 5 items on lg (3 cols), it will be 3 then 2. On xl (5 cols), all in one row.
                // Let's stick to a responsive flow.
                "col-span-1"
              )}
            >
              {/* Gold Accent Border Gradient - Always Visible */}
              <div className="absolute inset-0 z-0 opacity-100 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                {/* Header: Tag & Title */}
                <div className="mb-2 md:mb-4">
                  <p className="text-[8px] md:text-[10px] font-mono text-amber-500 uppercase tracking-wider mb-1 md:mb-2">
                    REASON 0{index + 1}
                  </p>
                  <h3 className="text-sm md:text-lg font-bold text-amber-400 leading-tight">
                    {card.title}
                  </h3>
                </div>

                {/* Image Area - Portrait Ratio */}
                <div className="flex-1 flex items-center justify-center my-2 md:my-4 relative w-full aspect-[3/4] overflow-hidden rounded-lg bg-white/10">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover opacity-100"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>

                {/* Description */}
                <div className="mt-auto">
                  <p className="text-[10px] md:text-xs text-white/80 leading-tight md:leading-normal mb-3">
                    {card.description}
                  </p>

                  {/* Metrics / Footer */}
                  <div className="pt-2 md:pt-3 border-t border-white/5">
                    <span className="text-[9px] md:text-[10px] font-semibold text-amber-500/90 flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-amber-500 inline-block" />
                      {card.metrics}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutMeSection;