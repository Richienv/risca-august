"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const AboutMeSection = () => {
  const [currentLine, setCurrentLine] = useState(0);

  const wrongPathItems = [
    "Kamu lebih memakan waktu kerja — untuk menai orang lain",
    "Kamu hukup minta jin untuk bantuanmu, bukannya memberikan dampak",
    "Satu kepercayaan bisa bias membuyar keluh hidup kepercayaanmu",
    "Masih tetap diam, masih harus untuk berlaku"
  ];

  const rightPathItems = [
    "Kamu bisa hasilkan uang tanpa harus punya keahlian khusus — betulinya yang manjakan kamu dengan belajar",
    "Waktu training → kamu bisa langsung praktek dan dapatkan dana",
    "Tanpa skema, tanpa tipu-tipu, kamu bijak untuk mengatur sendiri",
    "Potensi penghasilan tanggung renteng karna kamu bukan bekerja seorang diri"
  ];

  const lineTexts = [
    "Kerja untuk uang",
    "Uang kerja untuk kamu"
  ];

  // Switch between lines every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine(prev => (prev + 1) % lineTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden py-3 sm:py-16 lg:py-32">
      {/* Cloudy Pink/Red Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient clouds using supported gradients */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-500/20 via-pink-600/10 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-gradient-to-bl from-red-500/25 via-red-600/15 to-transparent rounded-full blur-2xl transform translate-x-1/3"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-tr from-pink-400/20 via-pink-500/10 to-transparent rounded-full blur-3xl transform translate-y-1/3"></div>
        <div className="absolute top-2/3 right-1/4 w-64 h-64 bg-gradient-to-tl from-red-400/15 via-red-500/8 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-bl from-pink-600/18 via-pink-700/12 to-transparent rounded-full blur-3xl transform translate-x-1/4"></div>
        
        {/* Additional subtle gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-900/5 via-transparent to-red-900/8"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-red-900/3 via-transparent to-pink-900/6"></div>
        
        {/* Extra atmospheric effects */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-gradient-to-r from-pink-500/12 to-transparent rounded-full blur-2xl transform -translate-x-1/2"></div>
        <div className="absolute bottom-1/3 right-1/3 w-56 h-56 bg-gradient-to-l from-red-500/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-16 xl:px-32 2xl:px-48 relative z-10">
        <div className="max-w-none xl:max-w-none 2xl:max-w-none mx-auto">
          
          {/* Wrong Path Section */}
          <motion.div 
            className="mb-3 sm:mb-20 lg:mb-24 xl:mb-32"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold leading-tight mb-1 sm:mb-8 text-center xl:text-left">
              <span className="text-white">Kamu berada di jalur yang salah — </span>
              <br className="hidden sm:block" />
              <span className="text-gray-400 font-normal text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                jangan mau diperbodoh jadi karyawan
              </span>
            </h2>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 xl:gap-8 2xl:gap-12 space-y-1 xl:space-y-0 sm:space-y-5 lg:space-y-6 max-w-xl sm:max-w-4xl xl:max-w-none">
              {wrongPathItems.map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start space-x-3 sm:space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 mt-1">
                    <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" strokeWidth={2.5} />
                  </div>
                  <p className="text-gray-300 text-[10px] sm:text-sm lg:text-base leading-tight sm:leading-relaxed font-light">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Animation Section */}
          <motion.div 
            className="relative h-16 sm:h-56 lg:h-64 xl:h-80 2xl:h-96 flex items-center justify-center mb-3 sm:mb-20 lg:mb-24 xl:mb-32"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {/* Animated Line Visualization */}
            <div className="relative w-full h-full max-w-md sm:max-w-2xl xl:max-w-6xl 2xl:max-w-7xl">
              
              {/* Top Line - "Kerja untuk uang" */}
              <motion.div
                className="absolute top-1/3 left-0 right-0 flex items-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ 
                  opacity: currentLine === 0 ? 1 : 0.3,
                  x: 0,
                  scale: currentLine === 0 ? 1 : 0.9
                }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex-1 h-0.5 sm:h-px bg-gradient-to-r from-transparent via-green-400 to-transparent relative">
                  <motion.div 
                    className="absolute inset-0 h-0.5 sm:h-px bg-gradient-to-r from-transparent via-green-400 to-transparent"
                    animate={{ 
                      opacity: currentLine === 0 ? [0.5, 1, 0.5] : 0.2,
                      scaleX: currentLine === 0 ? [0.8, 1, 0.8] : 0.6
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: currentLine === 0 ? Infinity : 0,
                      ease: "easeInOut" 
                    }}
                  />
                </div>
                <motion.p 
                  className="ml-3 sm:ml-4 text-green-400 text-xs sm:text-sm xl:text-lg 2xl:text-xl font-medium"
                  animate={{ 
                    opacity: currentLine === 0 ? 1 : 0.5,
                    scale: currentLine === 0 ? 1 : 0.9
                  }}
                >
                  {lineTexts[0]}
                </motion.p>
              </motion.div>

              {/* Bottom Line - "Uang kerja untuk kamu" */}
              <motion.div
                className="absolute bottom-1/3 left-0 right-0 flex items-center"
                initial={{ opacity: 0, x: -50 }}
                animate={{ 
                  opacity: currentLine === 1 ? 1 : 0.3,
                  x: 0,
                  scale: currentLine === 1 ? 1 : 0.9
                }}
                transition={{ duration: 0.8 }}
              >
                <motion.p 
                  className="mr-3 sm:mr-4 text-green-400 text-xs sm:text-sm xl:text-lg 2xl:text-xl font-medium"
                  animate={{ 
                    opacity: currentLine === 1 ? 1 : 0.5,
                    scale: currentLine === 1 ? 1 : 0.9
                  }}
                >
                  {lineTexts[1]}
                </motion.p>
                <div className="flex-1 h-0.5 sm:h-px bg-gradient-to-r from-transparent via-green-400 to-transparent relative">
                  <motion.div 
                    className="absolute inset-0 h-0.5 sm:h-px bg-gradient-to-r from-transparent via-green-400 to-transparent"
                    animate={{ 
                      opacity: currentLine === 1 ? [0.5, 1, 0.5] : 0.2,
                      scaleX: currentLine === 1 ? [0.8, 1, 0.8] : 0.6
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: currentLine === 1 ? Infinity : 0,
                      ease: "easeInOut" 
                    }}
                  />
                </div>
              </motion.div>

              {/* Central connecting element */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <motion.div 
                  className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                />
              </div>
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
                <h2 className="text-sm sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold leading-tight mb-1 sm:mb-8 text-center xl:text-left">
                  <span className="text-white">Kamu dijalur yang tepat — </span>
                  <br className="hidden sm:block" />
                  <span className="text-gray-400 font-normal text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                    bisnis ekspor membebaskanmu
                  </span>
                </h2>
              </motion.div>

              {/* Right Path Checklist */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 xl:gap-8 2xl:gap-12 space-y-1 xl:space-y-0 sm:space-y-5 lg:space-y-6 max-w-xl sm:max-w-4xl xl:max-w-none">
                {rightPathItems.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start space-x-3 sm:space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 mt-1">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" strokeWidth={2.5} />
                    </div>
                    <p className="text-white text-[10px] sm:text-sm lg:text-base leading-tight sm:leading-relaxed font-light">
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