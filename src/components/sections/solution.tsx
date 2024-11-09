"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

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
  isLast 
}: { 
  number: string; 
  title: string; 
  description: string; 
  imageUrl: string; 
  isLast: boolean; 
}) {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-16 lg:mb-24 relative">
      {/* Image on the left - Removed grayscale filter */}
      <div className="w-full lg:w-2/5">
        <div className="relative aspect-[4/3] w-full p-[2px] rounded-lg bg-gradient-to-br from-gray-400 via-gray-600 to-gray-800">
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

      {/* Vertical dashed line */}
      <div className="hidden lg:block w-px h-full absolute left-[40%] top-0">
        <div className="w-px h-full bg-gradient-to-b from-transparent via-gray-500/20 to-transparent 
          [mask-image:linear-gradient(to_bottom,transparent_0%,black_25%,black_75%,transparent_100%)] 
          [mask-size:1px_8px] [mask-repeat:repeat]">
        </div>
      </div>

      {/* Content on the right */}
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

      {/* Bottom line for non-last items */}
      {!isLast && (
        <div className="w-full h-px absolute -bottom-8 lg:-bottom-12 left-0">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-500/20 to-transparent"></div>
        </div>
      )}
    </div>
  );
}

export default function SolutionSection() {
  return (
    <div className="relative overflow-hidden w-full">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-600/10 via-purple-600/5 to-pink-600/10"></div>
      
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
            className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto"
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
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <FeatureCard 
                number={(index + 1).toString().padStart(2, '0')} 
                title={feature.title} 
                description={feature.description} 
                imageUrl={feature.image} 
                isLast={index === transformations.length - 1} 
              />
            </motion.div>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="text-center mt-8 lg:mt-16">
          <motion.button
            className="px-8 py-3 text-lg lg:text-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-full font-semibold hover:opacity-90 transition-opacity shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Gabung Sekarang!
          </motion.button>
        </div>
      </div>
    </div>
  );
}
