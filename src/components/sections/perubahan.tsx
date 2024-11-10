"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BlueGradientSeparator } from "@/components/blue-gradient-separator";
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useScroll, useTransform } from "framer-motion";

const alifeBenefits = [
  {
    image: "/mdit.jpeg",
    title: "",
    videoUrl: "https://youtu.be/sTCqp3AOaVw",
  },
  {
    image: "/mind.jpeg",
    title: "Connection",
    videoUrl: "https://youtu.be/sTCqp3AOaVw",
  },
  {
    image: "/concert.jpeg",
    title: "Experience",
    videoUrl: "https://youtu.be/nF1lLyIv0HM",
  },
  {
    image: "/event.jpeg",
    title: "Experience",
    videoUrl: "https://youtu.be/nF1lLyIv0HM",
  },
];

export default function WhatIsAlifeSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: videoRef,
    offset: ["start end", "end start"]
  });

  // Transform values for 3D effect
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const z = useTransform(scrollYProgress, [0, 0.5], [-100, 0]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? alifeBenefits.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === alifeBenefits.length - 1 ? 0 : prev + 1));
  };

  // Calculate visible images (current, previous, and next)
  const visibleImages = [
    alifeBenefits[(currentIndex - 1 + alifeBenefits.length) % alifeBenefits.length],
    alifeBenefits[currentIndex],
    alifeBenefits[(currentIndex + 1) % alifeBenefits.length],
  ];

  return (
    <div className="relative overflow-hidden w-full perspective-1000">
      <div className="relative z-10 py-8">
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold mb-4">
            We welcome you, to join our community!
          </h2>
          <div className="w-40 h-0.5 mx-auto bg-gradient-to-r from-blue-400 to-blue-600"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {/* Video Display with 3D Animation */}
          <motion.div 
            ref={videoRef}
            className="relative"
            style={{ 
              perspective: 1000,
              opacity,
              scale,
              rotateX,
              z,
              transformStyle: "preserve-3d",
            }}
            initial={{ 
              opacity: 0.3,
              rotateX: 15,
              z: -100,
              scale: 0.9
            }}
            animate={{ 
              opacity: 1,
              rotateX: 0,
              z: 0,
              scale: 1
            }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
          >
            {/* Animated gradient shadows */}
            <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/30 via-blue-400/30 to-blue-300/30 rounded-xl blur-2xl animate-pulse"></div>
            <div className="absolute -inset-3 bg-gradient-to-br from-blue-600/20 to-blue-400/20 rounded-xl blur-3xl animate-pulse delay-75"></div>
            <div className="absolute -inset-3 bg-gradient-to-r from-blue-400/20 via-blue-500/20 to-blue-600/20 rounded-xl blur-2xl animate-pulse delay-150"></div>
            
            {/* Rotating gradient border */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-xl opacity-30 animate-spin-slow"></div>
            
            {/* Video container */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-background/90 backdrop-blur-sm border border-white/10 shadow-2xl">
              <iframe
                src={alifeBenefits[currentIndex].videoUrl.replace('youtu.be/', 'youtube.com/embed/')}
                title={alifeBenefits[currentIndex].title}
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  {alifeBenefits[currentIndex].title}
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Gradient Separator */}
          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
            </div>
          </div>

          {/* Bottom Grid with Navigation - Updated for single row sliding */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Images Carousel */}
            <div className="overflow-hidden px-12">
              <div className="flex gap-4 transition-transform duration-300 ease-in-out">
                {visibleImages.map((item, index) => (
                  <motion.div
                    key={index}
                    className={`relative w-1/3 aspect-[4/3] cursor-pointer overflow-hidden rounded-lg transition-all flex-shrink-0
                      ${index === 1 ? 'ring-2 ring-blue-500' : 'opacity-80 hover:opacity-100'}`}
                    onClick={() => setCurrentIndex((currentIndex + index - 1 + alifeBenefits.length) % alifeBenefits.length)}
                    initial={{ opacity: 0, x: index === 0 ? -20 : index === 2 ? 20 : 0 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2 sm:p-3">
                      <h4 className="text-xs sm:text-sm font-medium text-white">
                        {item.title}
                      </h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Image indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {alifeBenefits.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-blue-500' : 'bg-gray-400/50'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>

          <motion.div className="relative mt-8 w-full max-w-3xl mx-auto">
            {/* First paragraph with normal styling */}
            <p className="text-md md:text-md text-center font-sans leading-relaxed text-white/80 mb-8">
              Bukan sekedar kerja, tapi panggilan hidup! bergabunglah dengan team saya dan kerja di tempat yang bikin kamu passionate, bareng komunitas yang vibesnya sama. Bersama saya dan alife kamu akan dibimbing untuk membangun personal brand dan bisnis yang sustainable.
            </p>

            {/* Quote styled section */}
            <div className="relative px-8 py-6">
              {/* Quote marks */}
              <div className="absolute -top-4 -left-2 text-4xl text-blue-500/20 font-serif">"</div>
              <div className="absolute -bottom-4 -right-2 text-4xl text-blue-500/20 font-serif rotate-180">"</div>
              
              {/* Quote text */}
              <p className="text-lg md:text-xl italic text-center font-light relative z-10">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Sekarang Saatnya kamu bersinar! Don't miss out! Aku percaya kamu pasti bisa achieve the same success as us!
                </span>
              </p>
            </div>

            {/* Bottom gradient effects */}
            <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none">
              {/* Dark blue/purple gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent blur-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent blur-3xl"></div>
              
              {/* Animated pulse effects */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-800/10 via-purple-800/10 to-blue-800/10 rounded-xl blur-2xl animate-pulse"></div>
              <div className="absolute -inset-4 bg-gradient-to-br from-purple-900/10 to-blue-800/10 rounded-xl blur-3xl animate-pulse delay-75"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-800/10 via-purple-900/10 to-blue-800/10 rounded-xl blur-2xl animate-pulse delay-150"></div>
            </div>
          </motion.div>
          <BlueGradientSeparator />
        </div>
      </div>
    </div>
  );
}
