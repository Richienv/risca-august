"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import Footer from "@/components/sections/footer";
import { Metadata } from "next";

const stepsData = [
  {
    title: "Hari ke 1–5 — System & License",
    description: "Kamu akan menerima akses sistem kerja dan lisensi resmi sebagai modal awal. Untuk unlock tahap ini, kamu perlu mempelajari dasar-dasar asuransi melalui materi ringan yang bisa dipelajari dari handphone-mu, termasuk cara kerja polis dan manfaat proteksi.",
    imageSrc: "/images/system-licence.png"
  },
  {
    title: "Hari ke 6–15 — Knowledge Pack",
    description: "Di tahap ini, kamu akan mendapatkan knowledge pack berupa materi presentasi sederhana, script super boost yang akan meningkatkan kemampuan selling-mu secara drastis, dan simulasi roleplay bersama mentor. Untuk unlock, kamu perlu melakukan presentasi pertama kepada teman atau keluarga dengan panduan mentor.",
    imageSrc: "/images/knowledge-pack.png"
  },
  {
    title: "Hari ke 16–30 — Storytelling Kit",
    description: "Kamu akan membuka storytelling kit setelah berhasil melakukan closing pertama. Reward ini membantumu menyusun cerita pribadi tentang alasan memilih bisnis asuransi, yang bisa menjadi senjata saat berbagi dengan calon nasabah.",
    imageSrc: "/images/storytelling-kit.png"
  },
  {
    title: "Hari ke 31–45 — Exclusive Bootcamp",
    description: "Setelah punya hasil awal, kamu akan unlock exclusive bootcamp dari well-known speaker yang akan memberikan insight mendalam tentang strategi advanced selling dan mindset sukses. Bootcamp ini hanya tersedia untuk member yang sudah mencapai milestone ini.",
    imageSrc: "/images/exclusive-bootcamp.png"
  },
  {
    title: "Hari ke 46–60 — First 5 Million/Month Income",
    description: "Tahap ini adalah milestone penting: kamu unlock penghasilan pertamamu sebesar 5 juta/bulan. Untuk mencapainya, kamu perlu menggandakan closing, memperkuat follow-up, dan mengelola pipeline klien dengan konsisten.",
    imageSrc: "/images/first-income.png"
  },
  {
    title: "Hari ke 61–70 — Leadership Pass",
    description: "Kamu unlock leadership pass setelah berhasil melatih tim kecilmu hingga mereka juga bisa closing sendiri. Kamu belajar mengarahkan presentasi, mengatur strategi tim, dan menjaga motivasi mereka.",
    imageSrc: "/images/leadership-pass.png"
  },
  {
    title: "Hari ke 71–80 — Logam Mulia",
    description: "Jika di tahap ini kamu mampu mencapai target produksi tim yang ditentukan, kamu unlock reward berupa logam mulia sebagai simbol pencapaian finansial yang berharga.",
    imageSrc: "/images/logam-mulia.png"
  },
  {
    title: "Hari ke 81–90 — iPad & Trip to Europe",
    description: "Tahap puncak 90 hari ini akan unlock hadiah spesial berupa iPad dan perjalanan ke Eropa (termasuk tiket pesawat & hotel) jika target besarmu tercapai. Untuk mendapatkannya, kamu harus membuktikan duplikasi tim: timmu juga mulai menjalankan '90 hari' mereka, sementara kamu tetap konsisten menjaga produksi pribadi.",
    imageSrc: "/images/ipad-trip-europe.png"
  }
];

export default function HowItWorksDetailsPage() {
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
    <>
      {/* Navigation Back Button */}
      <div className="bg-black py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-white hover:text-orange-400 transition-colors duration-200 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="text-sm font-medium">Kembali ke Beranda</span>
          </Link>
        </div>
      </div>

      <section className="relative bg-black py-16 md:py-32 overflow-hidden">
        
        <div className="relative z-10 w-full px-12 md:px-20 lg:px-32 xl:px-40">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-xs sm:text-sm font-mono font-light text-white/70 uppercase tracking-[0.2em] opacity-80 mb-4">
              90 Hari Battle Pass Insurance Path
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
              Apa yang Bakal Kamu Dapatkan Saat Join
            </motion.h1>
            <p className="text-sm lg:text-base font-light leading-relaxed text-white/70 max-w-2xl mx-auto">
              Battle pass 90 hari versi insurance path yang realistis, step by step sesuai milestone di bisnis ini. Reward ditempatkan di titik besar dengan "apa yang kamu capai" sesuai alur asuransi.
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
                        <img
                          src="/images/badge.png"
                          alt="Step badge"
                          width="28"
                          height="28"
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
                        <p className="text-xs sm:text-sm font-light leading-relaxed text-white/70 max-w-lg mb-2">
                          {step.description}
                        </p>
                        
                        {/* T&C Link - Small, subtle clickable text */}
                        <Link href="/terms-conditions" className="inline-block">
                          <span className="text-[9px] sm:text-[10px] text-gray-500 hover:text-gray-400 cursor-pointer transition-colors duration-200">
                            T&C berlaku
                          </span>
                        </Link>
                        
                        {/* Image */}
                        <div className="mt-4 w-full max-w-xs aspect-[4/6] rounded-lg overflow-hidden">
                          <img
                            src={step.imageSrc}
                            alt={step.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              console.error(`Failed to load image: ${step.imageSrc}`);
                              e.currentTarget.style.display = 'none';
                            }}
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

      <Footer />
    </>
  );
}