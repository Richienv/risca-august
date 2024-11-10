"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { GradientBlur } from "@/components/ui/gradient-blur";
import { useRef } from 'react';

const transformations = [
  {
    title: "Kita Ajarkan Semua Skills & Techniques For Success!",
    description: "Kamu akan mendapatkan akses eksklusif ke kelas training kita, yang terdiri dari lebih dari 1000+ anggota dan aku siap membantu kamu dalam setiap langkah bisnis!",
    image: "/belajar.png",
  },
  {
    title: "More then a business. Private events, High-Value Connection and Resources",
    description: "Kehidupan di luar bisnis ini akan super beneficial, karena kamu akan mendapatkan akses eksklusif ke komunitas kita, private event, high-value connection, dan resources yang bisa membantu kamu dalam bisnis dan hidup!",
    image: "/link.png",
  },
  {
    title: "We Create Blueprint For Success! You Just Follow Need to Do!",
    description: "Kamu gak perlu takut gagal karena bisnis ini sudah punya sistem yang terbukti sukses. Banyak yang sudah berhasil dan sekarang gilirannya kamu! This system works, yang penting kamu mau coba dan konsisten.",
    image: "/cheers.jpeg",
  },
  {
    title: "No Risk, But So Much To Gain!",
    description: "Bisnis ini benar-benar minim resiko. Nothing to lose, everything to gain! Kamu cuma perlu berani coba, dan kamu akan lihat sendiri perubahan besar yang bisa terjadi dalam hidup kamu.",
    image: "/gain.png",
  },
];

function FeatureCard({ 
  number, 
  title, 
  description, 
  imageUrl, 
  isLast,
  index
}: { 
  number: string; 
  title: string; 
  description: string; 
  imageUrl: string; 
  isLast: boolean;
  index: number;
}) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // Transform values for 3D effect
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const z = useTransform(scrollYProgress, [0, 0.5], [-100, 0]);

  return (
    <motion.div 
      ref={cardRef}
      className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-16 lg:mb-24 relative"
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
        delay: index * 0.2,
        type: "spring",
        stiffness: 100
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Image container with radial effects */}
      <div className="w-full lg:w-2/5">
        <div className="relative">
          {/* Radial blur effects behind image - Updated with darker colors */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-800/30 via-purple-800/30 to-purple-900/30 rounded-xl blur-2xl animate-pulse"></div>
          <div className="absolute -inset-4 bg-gradient-to-br from-purple-900/20 to-blue-800/20 rounded-xl blur-3xl animate-pulse delay-75"></div>
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-800/20 via-purple-900/20 to-blue-900/20 rounded-xl blur-2xl animate-pulse delay-150"></div>
          
          {/* Image container with darker gradient border */}
          <div className="relative aspect-[4/3] w-full p-[2px] rounded-lg bg-gradient-to-br from-blue-900 via-purple-900 to-blue-950">
            <div className="relative h-full w-full overflow-hidden rounded-lg">
              <Image
                src={imageUrl}
                alt={title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Rest of the card content remains the same */}
      <div className="hidden lg:block w-px h-full absolute left-[40%] top-0">
        <div className="w-px h-full bg-gradient-to-b from-transparent via-gray-500/20 to-transparent 
          [mask-image:linear-gradient(to_bottom,transparent_0%,black_25%,black_75%,transparent_100%)] 
          [mask-size:1px_8px] [mask-repeat:repeat]">
        </div>
      </div>

      <div className="w-full lg:w-3/5 text-left px-4 lg:px-8">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            {number}
          </span>
          <div className="h-px lg:h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 opacity-50"></div>
        </div>
        <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>

      {!isLast && (
        <div className="w-full h-px absolute -bottom-8 lg:-bottom-12 left-0">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-500/20 to-transparent"></div>
        </div>
      )}
    </motion.div>
  );
}

export default function SolutionSection() {
  return (
    <div className="relative overflow-hidden w-full perspective-1000">
      <div className="relative z-10 py-16 lg:py-24">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24 px-4">
          <motion.h2 
            className="text-2xl lg:text-2xl xl:text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Kenapa pilih ikut bisnis Alife?
          </motion.h2>
          <div className="w-24 lg:w-32 h-0.5 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-6"></div>
          <motion.p
            className="text-sm tracking-tight text-muted-foreground md:text-base text-balance text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Kami pengen open door untuk kamu, dan buat kamu realise what is possible with Alife!
          </motion.p>
        </div>
        
        {/* Features Grid */}
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {transformations.map((feature, index) => (
            <FeatureCard 
              key={index}
              number={(index + 1).toString().padStart(2, '0')} 
              title={feature.title} 
              description={feature.description} 
              imageUrl={feature.image} 
              isLast={index === transformations.length - 1}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
