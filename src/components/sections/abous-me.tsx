"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, DollarSign, TrendingUp, Clock } from 'lucide-react';

const AboutMeSection = () => {

  const cardData = [
    {
      icon: DollarSign,
      title: "Income 3 Digit/Bulan",
      description: "Target realistis untuk leader asuransi berpengalaman dengan sistem yang tepat."
    },
    {
      icon: TrendingUp,
      title: "Karir Tanpa Batas",
      description: "Jenjang karir dari agent sampai regional manager dengan passive income."
    },
    {
      icon: Clock,
      title: "Fleksibilitas Waktu",
      description: "Atur jadual sendiri, kerja dari mana saja, dan tetap dapat hasil maksimal."
    }
  ];

  const wrongPathItems = [
    "Kerja 8 jam sehari cuma buat hidup pas-pasan",
    "Hari demi hari berlalu tanpa pertumbuhan atau prestasi yang kamu bisa banggakan",
    "Kamu lembur, bos kamu yang naik mobil baru",
    "Saat anak sudah besar, kamu bingung: “Aku mau ngapain sekarang?”",
    "Gak punya warisan untuk ditinggalkan"
  ];

  const rightPathItems = [
    "Gak perlu korbankan waktu keluarga demi karier",
    "Gaji kamu bisa setara bahkan melebihi suami, dalam waktu < 6 bulan",
    "Punya dampak nyata, bantu keluarga lain meraih perlindungan keuangan",
    "Mulai bangun masa depan anak & warisan keluarga dari sekarang"
  ];


  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden py-3 sm:py-16 lg:py-32">
      <div className="container mx-auto px-12 sm:px-16 lg:px-24 xl:px-40 2xl:px-56 relative z-10">
        <div className="max-w-none xl:max-w-none 2xl:max-w-none mx-auto">
          
          {/* Title and Subtitle Section */}
          <motion.div 
            className="text-left mb-8 sm:mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold text-white mb-0 leading-tight">
              Masih Bangga Jadi Karyawan?
            </h1>
            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-normal text-white mb-4 sm:mb-8 leading-tight">
              Padahal Hidup Kamu Disetir Orang Lain
            </h2>
            <p className="text-xs sm:text-base lg:text-lg text-gray-400 max-w-2xl leading-relaxed">
              Terus mau sampai kapan kerja buat mimpi orang lain? 
              Waktunya switch jalur — karena gak ada kebebasan di meja kantor.
            </p>
          </motion.div>

          {/* Cards Section */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-20 lg:mb-24"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {cardData.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 text-center hover:bg-white/10 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="w-8 h-8 sm:w-16 sm:h-16 bg-gradient-to-br from-pink-500/20 to-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <IconComponent className="w-4 h-4 sm:w-8 sm:h-8 text-pink-400" />
                  </div>
                  <h3 className="text-sm sm:text-xl lg:text-2xl font-semibold text-white mb-3 sm:mb-4">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-base text-gray-300 leading-relaxed">
                    {card.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
          
          {/* Wrong Path Section */}
          <motion.div 
            className="mb-3 sm:mb-20 lg:mb-24 xl:mb-32"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-base sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold leading-tight mb-4 sm:mb-12 lg:mb-16 text-left">
              <span className="text-white">Fakta seperti ini pernah terlintas di pikiran kamu ngga? - Serem nggasih?</span>
            </h2>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 xl:gap-8 2xl:gap-12 space-y-1 xl:space-y-0 sm:space-y-5 lg:space-y-6 max-w-xl sm:max-w-4xl xl:max-w-none">
              {wrongPathItems.map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-3 sm:space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5">
                    <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" strokeWidth={2.5} />
                  </div>
                  <p className="text-gray-300 text-xs sm:text-base lg:text-lg leading-tight sm:leading-relaxed font-light">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Main Section - Right Path */}
          <div className="space-y-1 sm:space-y-8 xl:space-y-12">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h2 className="text-base sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold leading-tight mb-4 sm:mb-12 lg:mb-16 text-left">
                  <span className="text-white">Kamu Dijalur yang tepat - Bisnis asuransi membebaskanmu </span>
                </h2>
              </motion.div>

              {/* Right Path Checklist */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 xl:gap-8 2xl:gap-12 space-y-1 xl:space-y-0 sm:space-y-5 lg:space-y-6 max-w-xl sm:max-w-4xl xl:max-w-none">
                {rightPathItems.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-3 sm:space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" strokeWidth={2.5} />
                    </div>
                    <p className="text-white text-xs sm:text-base lg:text-lg leading-tight sm:leading-relaxed font-light">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;