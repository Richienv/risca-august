"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const stepsData = [
  {
    title: "Hari 1–10 — Nyalakan Mimpi & Siapkan Diri",
    description: "Di 10 hari pertama, aku mulai buka pikiran. Aku tanya ke diriku sendiri: kenapa aku harus sukses? Aku ikut sesi bareng mentor, kenalan sama tim yang supportive banget, dan nulis target penghasilan pertamaku.",
    imageSrc: "/images/1.png"
  },
  {
    title: "Hari 11–20 — Closing Pertamaku",
    description: "Aku belajar cara jelasin produk Allianz dengan bahasa yang sederhana. Mentor dampingin aku latihan ngomong, roleplay, dan akhirnya aku dapet closing pertama. Rasanya campur aduk — deg-degan, tapi bangga banget.",
    imageSrc: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500&h=400&fit=crop"
  },
  {
    title: "Hari 21–30 — Percaya Diri & Kuasai Ceritaku",
    description: "Aku belum posting apa-apa di medsos, tapi aku mulai nulis cerita kenapa aku jalanin ini semua. Aku latihan ngomong ke teman dan keluarga. Pelan-pelan aku mulai percaya diri.",
    imageSrc: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=500&h=400&fit=crop"
  },
  {
    title: "Hari 31–40 — Gandakan Hasilku",
    description: "Setelah berhasil closing, aku ulangi langkah yang sama. Aku presentasi lebih banyak, follow up lebih serius. Closing kedua dan ketiga pun datang. Aku capai total ALP di atas 150 juta.",
    imageSrc: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=500&h=400&fit=crop"
  },
  {
    title: "Hari 41–50 — Rekrut Tim Pertamaku",
    description: "Ada teman yang tanya-tanya, akhirnya aku ajak join. Aku cerita jujur tentang pengalamanku. Dalam 10 hari ini, aku rekrut 2 orang dan mulai bimbing mereka langkah demi langkah.",
    imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=400&fit=crop"
  },
  {
    title: "Hari 51–60 — Latih & Dukung Tim Kecilku",
    description: "Aku ajarin mereka cara presentasi, bantu latihan, dan bikin grup kecil bareng. Rasanya seru banget bisa bantu orang lain mulai dari nol. Sekarang aku gak jalan sendiri — aku punya tim.",
    imageSrc: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&h=400&fit=crop"
  },
  {
    title: "Hari 61–70 — Bangun Struktur Menuju BP",
    description: "Aku gabungkan hasil pribadiku dan ALP tim. Kita saling support dan saling pantau progres. Aku bener-bener seriusin target 300 juta ALP. Di sini aku makin semangat karena semuanya udah makin dekat.",
    imageSrc: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=500&h=400&fit=crop"
  },
  {
    title: "Hari 71–80 — Kunci Kualifikasi BP",
    description: "Hari-hari ini aku full action. Tutup sisa kekurangan, bantu tim closing, dan validasi income-ku bareng mentor. Pas targetnya tercapai, aku nangis kecil. Ternyata aku beneran bisa.",
    imageSrc: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=400&fit=crop"
  },
  {
    title: "Hari 81–90 — Naik Level & Duplikasi",
    description: "Aku mulai sharing perjalanan aku. Aku bikin video singkat, cerita di WA, dan bantu tim aku mulai 90 hari versi mereka. Sekarang aku bukan cuma punya penghasilan — aku punya dampak.",
    imageSrc: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=400&fit=crop"
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
            Program 90 Hari Menuju BP Allianz
          </motion.h1>
          <p className="text-sm lg:text-base font-light leading-relaxed text-white/70 max-w-2xl mx-auto">
            Transformasi nyata yang aku jalani sendiri dari nol sampai jadi BP dalam waktu 90 hari. Cocok buat ibu rumah tangga atau siapa pun yang pengen bangun penghasilan dari rumah. Ini perjalanan aku — dan kamu juga bisa.
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
