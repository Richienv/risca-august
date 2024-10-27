"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Safari from "@/components/safari";
import ShineBorder from "@/components/ui/shine-border";

const transformations = [
  {
    title: "Gak Perlu Pengalaman, Kita Ajarkan Semua!",
    description: "Kamu gak perlu background atau pengalaman bisnis, karena kita akan bimbing kamu step-by-step. From zero to hero, kamu akan punya mentor yang siap membantu kamu kapan pun kamu butuh!",
    image: "/perubahan1.png",
  },
  {
    title: "Bekerja Dari Mana Saja, Bebas Waktu!",
    description: "Mau kerja dari rumah atau dari pantai? No problem! Kamu bisa atur waktu sesuai kebutuhan kamu. You are the boss of your own schedule. Kebebasan ini yang bikin banyak orang ngerasa lebih bahagia dan hidup mereka berubah 180 derajat!",
    image: "/perubahan2.png",
  },
  {
    title: "Sistem yang Terbukti Sukses!",
    description: "Kamu gak perlu takut gagal karena bisnis ini sudah punya sistem yang terbukti sukses. Banyak yang sudah berhasil dan sekarang gilirannya kamu! This system works, yang penting kamu mau coba dan konsisten.",
    image: "/perubahan3.png",
  },
  {
    title: "Tidak Ada Resiko, 100% Aman Dicoba!",
    description: "Bisnis ini benar-benar minim resiko. Nothing to lose, everything to gain! Kamu cuma perlu berani coba, dan kamu akan lihat sendiri perubahan besar yang bisa terjadi dalam hidup kamu.",
    image: "/perubahan1.png",
  },
];

function FeatureCard({ number, title, description, imageUrl, reverse, isLast }: { number: string; title: string; description: string; imageUrl: string; reverse: boolean; isLast: boolean }) {
  return (
    <div className={cn("flex flex-col lg:flex-row items-start w-full mb-8 lg:mb-12 relative", reverse ? "lg:flex-row-reverse" : "")}>
      <div className="w-full lg:w-[45%] mb-4 lg:mb-0 lg:px-4 relative z-10">
        <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-2 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent">{title}</h3>
        <p className="text-xs md:text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="w-full lg:w-[10%] flex flex-row lg:flex-col items-center justify-start mb-4 lg:mb-0 lg:px-2 relative z-10">
        <div className="text-2xl lg:text-3xl font-bold mr-3 lg:mr-0 lg:mb-2">{number}</div>
        <div className="h-px w-full lg:h-full lg:w-px bg-gradient-to-r lg:bg-gradient-to-b from-white to-gray-300 dark:from-gray-700 dark:to-gray-900"></div>
        {!isLast && <div className="hidden lg:block h-8 w-px bg-gradient-to-b from-white to-gray-300 dark:from-gray-700 dark:to-gray-900"></div>}
      </div>
      <div className="w-full lg:w-[45%] lg:px-4 relative">
        <div className="absolute inset-0 bg-gradient-radial from-blue-500/30 via-purple-500/20 to-red-500/30 blur-2xl opacity-50 -z-10"></div>
        <ShineBorder borderRadius={12} borderWidth={1} color={["#3b82f6", "#10b981"]}>
          <Safari
            src={imageUrl}
            url="https://alife.vision"
            className="w-full h-40 lg:h-48 object-cover rounded-lg"
          />
        </ShineBorder>
      </div>
    </div>
  );
}

export default function SolutionSection() {
  return (
    <div className="relative overflow-hidden w-full">
      <div className="absolute inset-0 bg-gradient-radial from-blue-600/10 via-purple-600/5 to-red-600/10"></div>
      
      <div className="relative z-10 py-12 lg:py-16">
        <div className="text-center mb-8 md:mb-10">
          <motion.h2 
            className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 md:mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Kamu masih ragu?
          </motion.h2>
          <div className="w-16 md:w-20 h-0.5 mx-auto bg-gradient-to-r from-blue-400 to-blue-600 mb-2 md:mb-3"></div>
          <motion.p
            className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-xs sm:max-w-sm md:max-w-2xl mx-auto px-4 md:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Kami cuman butuh komitmen dari kamu, sisanya kita akan ajarkan semua!
          </motion.p>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="lg:flex lg:flex-col lg:items-stretch">
            {transformations.map((feature, index) => (
              <motion.div
                key={index}
                className="lg:flex lg:items-stretch"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
              >
                <FeatureCard 
                  number={(index + 1).toString().padStart(2, '0')} 
                  title={feature.title} 
                  description={feature.description} 
                  imageUrl={feature.image} 
                  reverse={index % 2 !== 0} 
                  isLast={index === transformations.length - 1} 
                />
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-8 lg:mt-12">
          <motion.button
            className="px-6 py-2 bg-blue-600 text-white text-sm md:text-base rounded-full font-semibold hover:bg-blue-700 transition-colors"
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
