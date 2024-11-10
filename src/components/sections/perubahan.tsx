"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BlueGradientSeparator } from "@/components/blue-gradient-separator";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

const alifeBenefits = [
  {
    image: "/mdit.jpeg",
  },
  {
    image: "/mind.jpeg",
  },
  {
    image: "/concert.jpeg",
  },
  {
    image: "/event.jpeg",
  },
  // Duplicate for infinite scroll effect
  {
    image: "/mdit.jpeg",
  },
  {
    image: "/mind.jpeg",
  },
  {
    image: "/concert.jpeg",
  },
  {
    image: "/event.jpeg",
  },
];

export default function WhatIsAlifeSection() {
  const videoRef = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: videoRef,
    offset: ["start end", "end start"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const z = useTransform(scrollYProgress, [0, 0.5], [-100, 0]);

  return (
    <div className="relative overflow-hidden w-full perspective-1000">
      <div className="relative z-10 py-8">
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold mb-4">
            We welcome you, to join our community!
          </h2>
          <div className="w-40 h-0.5 mx-auto bg-gradient-to-r from-blue-400 to-blue-600"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Main Video Display with subtle glow */}
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
            initial={{ opacity: 0.3, rotateX: 15, z: -100, scale: 0.9 }}
            animate={{ opacity: 1, rotateX: 0, z: 0, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            {/* Enhanced glow effects matching ref-per.tsx */}
            <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/30 via-blue-400/30 to-blue-300/30 rounded-xl blur-2xl animate-pulse"></div>
            <div className="absolute -inset-3 bg-gradient-to-br from-blue-600/20 to-blue-400/20 rounded-xl blur-3xl animate-pulse delay-75"></div>
            <div className="absolute -inset-3 bg-gradient-to-r from-blue-400/20 via-blue-500/20 to-blue-600/20 rounded-xl blur-2xl animate-pulse delay-150"></div>
            
            {/* Rotating gradient border */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-xl opacity-30 animate-spin-slow"></div>
            
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-background/90 backdrop-blur-sm border border-white/10 shadow-2xl">
              <iframe
                src="https://youtube.com/embed/sTCqp3AOaVw"
                title="Main Video"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full rounded-xl"
              />
            </div>
          </motion.div>

          {/* Gradient Separator */}
          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50"></div>
            </div>
          </div>

          {/* Infinite Horizontal Scroll Gallery */}
          <div className="relative w-full overflow-hidden">
            {/* Left mask/gradient */}
            <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none" />
            
            {/* Right mask/gradient */}
            <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none" />
            
            <div 
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto scrollbar-hide py-4 w-full max-w-5xl mx-auto"
            >
              <div className="flex gap-4 animate-scroll">
                {alifeBenefits.map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative w-48 sm:w-56 aspect-square flex-shrink-0 overflow-hidden rounded-xl shadow-lg group"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {/* Enhanced glow effects matching ref-per.tsx */}
                    <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/30 via-blue-400/30 to-blue-300/30 rounded-xl blur-2xl animate-pulse"></div>
                    <div className="absolute -inset-3 bg-gradient-to-br from-blue-600/20 to-blue-400/20 rounded-xl blur-3xl animate-pulse delay-75"></div>
                    <div className="absolute -inset-3 bg-gradient-to-r from-blue-400/20 via-blue-500/20 to-blue-600/20 rounded-xl blur-2xl animate-pulse delay-150"></div>
                    
                    {/* Rotating gradient border with increased opacity */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-xl opacity-30 animate-spin-slow"></div>
                    
                    <Image
                      src={item.image}
                      alt="Gallery Image"
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-105 relative z-10"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Quote section with subtle glow */}
          <motion.div className="relative mt-8 w-full max-w-3xl mx-auto">
            {/* Enhanced quote glow effects */}
            <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none">
              {/* Dark blue/purple gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent blur-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent blur-3xl"></div>
              
              {/* Animated pulse effects */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-800/10 via-purple-800/10 to-blue-800/10 rounded-xl blur-2xl animate-pulse"></div>
              <div className="absolute -inset-4 bg-gradient-to-br from-purple-900/10 to-blue-800/10 rounded-xl blur-3xl animate-pulse delay-75"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-800/10 via-purple-900/10 to-blue-800/10 rounded-xl blur-2xl animate-pulse delay-150"></div>
            </div>
            
            <p className="relative z-10 mb-8 text-sm tracking-tight text-muted-foreground md:text-base text-balance text-center">
              <span className="text-white">
                Bukan sekedar kerja, tapi panggilan hidup! bergabunglah dengan team aku dan kerja di tempat yang bikin kamu passionate, bareng komunitas yang vibesnya sama. Bersama saya dan Alife kamu akan dibimbing untuk membangun personal brand dan bisnis yang sustainable.
              </span>
            </p>

            <div className="relative px-8 py-6">
              <div className="absolute -top-4 -left-2 text-4xl text-blue-500/20 font-serif">&ldquo;</div>
              <div className="absolute -bottom-4 -right-2 text-4xl text-blue-500/20 font-serif rotate-180">&rdquo;</div>
              
              <p className="text-sm tracking-tight md:text-base italic text-center font-light relative z-10">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Sekarang Saatnya kamu bersinar! Don&apos;t miss out! Aku percaya kamu pasti bisa achieve the same success as us!
                </span>
              </p>
            </div>
          </motion.div>
          <BlueGradientSeparator />
        </div>
      </div>
    </div>
  );
}
