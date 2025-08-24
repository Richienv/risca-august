"use client";

import { motion } from "framer-motion";
import OverlappingImages from "@/components/overlapping-images";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const transformations = [
  {
    title: "Hari 1–10 — Nyalakan Mimpi & Siapkan Diri",
    description: "Temukan alasan terbesarmu. Kenali peluang bisnisnya. Dapatkan arahan langsung dari mentor dan komunitas support yang siap bantu kamu sukses dari awal.",
  },
  {
    title: "Hari 11–20 — Closing Pertamamu",
    description: "Belajar cara presentasi yang mudah dipahami. Mulai cerita ke orang terdekat. Dengan panduan mentor, kamu akan closing 1–2 klien pertamamu dan capai ALP hingga 50–100 juta. Di sini kamu mulai merasakan income nyata.",
  },
  {
    title: "Hari 21–30 — Bangun Kredibilitas & Magnet Sosial",
    description: "Posting testimoni, share progres kamu, dan mulai bangun personal branding. Orang mulai percaya, bertanya, dan tertarik ikut.",
  },
  {
    title: "Hari 31–40 — Gandakan Hasilmu",
    description: "Teruskan pola yang berhasil. Closing rutin. Targetmu adalah tembus 150–200 juta ALP dari penjualan pribadi. Income makin terasa.",
  },
  {
    title: "Hari 41–50 — Rekrut Tim Pertamamu",
    description: "Sudah ada yang tertarik ikut? Sekarang saatnya kamu latih 2 orang untuk jadi BE. Ajak mereka duplikasi sistem yang kamu pakai.",
  },
  {
    title: "Hari 51–60 — Jadi Leader Kecil",
    description: "Bantu tim kamu closing. Jalankan sesi mentoring sederhana. Kamu sekarang bukan cuma penjual, tapi pembimbing.",
  },
  {
    title: "Hari 61–70 — Bangun Struktur Menuju BP",
    description: "Gabungkan hasil pribadi dan tim. Kamu sekarang makin dekat ke 300 juta ALP. Income bisa tembus Rp 4–5 juta/bulan.",
  },
  {
    title: "Hari 71–80 — Kunci Posisi BP",
    description: "Pastikan semua syarat terpenuhi (Option 1/2/3). Validasi income, buat sistem kerja tim, dan siapkan langkah scale-up.",
  },
  {
    title: "Hari 81–90 — Tampil & Jadi Role Model",
    description: "Ceritakan perjalananmu. Rekrut BE baru. Duplikasi pola suksesmu. Sekarang kamu bukan cuma punya penghasilan — tapi juga punya bisnis.",
  },
];

function FeatureCard({ 
  title, 
  description, 
  index
}: { 
  title: string; 
  description: string; 
  index: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Array of different images for variety
  const imageUrls = [
    "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop", // Business meeting
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=300&fit=crop", // Charts and analytics
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop", // Office workspace
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop", // Professional portrait
    "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=500&h=300&fit=crop", // Team collaboration
    "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=500&h=300&fit=crop", // Digital marketing
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&h=300&fit=crop", // Business strategy
  ];
  
  const currentImage = imageUrls[index % imageUrls.length];

  return (
    <div className="relative">
      {/* Red glow effect behind the card */}
      <div className="absolute -inset-3 bg-gradient-to-r from-red-600/10 via-red-500/15 to-red-600/10 rounded-lg lg:rounded-xl blur-lg"></div>
      
      {/* Main card */}
      <div 
        className="relative overflow-hidden group rounded-lg lg:rounded-xl p-4 sm:p-6 lg:p-8 mb-3 sm:mb-4 lg:mb-6 transition-all duration-500 bg-black backdrop-blur-sm border border-white/10 hover:border-pink-500/30"
      >
      <div className="flex flex-col lg:flex-row items-start gap-3 sm:gap-4 lg:gap-16 relative z-10">
        {/* Left side - Text content group */}
        <div className="w-full lg:w-3/5 order-2 lg:order-1 text-center lg:text-left">
          {/* Text and icon grouped together */}
          <div className="space-y-2 sm:space-y-3 lg:space-y-6">
            {/* Main title - Day range */}
            <div>
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-extralight leading-tight tracking-tight text-white mb-1 sm:mb-2 lg:mb-3">
                {title.split(' — ')[0]}
              </h2>
              <h3 className="text-xs sm:text-sm lg:text-base font-light text-white/80 leading-relaxed">
                {title.split(' — ')[1]}
              </h3>
            </div>
            
            {/* Arrow button grouped with text */}
            <div className="flex justify-center lg:justify-start">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsExpanded(!isExpanded);
                }}
                className="flex items-center justify-center transition-all duration-300"
              >
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-3 h-3 sm:w-3 sm:h-3 lg:w-5 lg:h-5 text-pink-400" />
                </motion.div>
              </button>
            </div>
          </div>
          
          {/* Expandable description */}
          <motion.div
            initial={false}
            animate={{
              height: isExpanded ? "auto" : 0,
              opacity: isExpanded ? 1 : 0
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden mt-2"
          >
            <div className="pt-2 sm:pt-3 lg:pt-4 border-t border-white/10">
              <p className="text-xs sm:text-sm lg:text-base font-light leading-snug sm:leading-relaxed text-white/75 max-w-2xl">
                {description}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right side - Image group with more spacing */}
        <div className="w-full lg:w-2/5 flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="w-full max-w-xs sm:max-w-sm lg:max-w-lg h-32 sm:h-40 lg:h-72 relative overflow-hidden rounded-lg lg:rounded-xl shadow-xl lg:shadow-2xl">
            <motion.div 
              className="flex h-full gap-1 sm:gap-2 lg:gap-3"
              animate={{
                x: [0, '-33.333%']
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop", 
                  duration: 10,
                  ease: "linear",
                },
              }}
            >
              {/* First set of 3 images */}
              <div className="flex-shrink-0 w-full h-full relative">
                <img 
                  src={currentImage} 
                  alt={`Training phase ${index + 1}`}
                  className="w-full h-full object-cover rounded-md lg:rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-md lg:rounded-lg"></div>
              </div>
              <div className="flex-shrink-0 w-full h-full relative">
                <img 
                  src={imageUrls[(index + 1) % imageUrls.length]} 
                  alt={`Training content ${index + 1}`}
                  className="w-full h-full object-cover rounded-md lg:rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-md lg:rounded-lg"></div>
              </div>
              <div className="flex-shrink-0 w-full h-full relative">
                <img 
                  src={imageUrls[(index + 2) % imageUrls.length]} 
                  alt={`Training materials ${index + 1}`}
                  className="w-full h-full object-cover rounded-md lg:rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-md lg:rounded-lg"></div>
              </div>
              {/* Duplicate first image for seamless loop */}
              <div className="flex-shrink-0 w-full h-full relative">
                <img 
                  src={currentImage} 
                  alt={`Training phase ${index + 1}`}
                  className="w-full h-full object-cover rounded-md lg:rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-md lg:rounded-lg"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default function SolutionSection() {
  return (
    <div className="relative w-full bg-black overflow-hidden">
      
      <div className="relative z-10 py-20 lg:py-28">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16 px-6 lg:px-8 max-w-7xl mx-auto">

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
            90 Hari Menuju BP Allianz
          </motion.h1>
          <motion.p
            className="text-sm lg:text-base font-light leading-relaxed text-white/70 max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
           Mulai dari nol, kamu akan dibimbing untuk closing pertama dalam 2 minggu, bangun tim dalam 2 bulan, dan capai posisi Business Partner dalam 90 hari. Tanpa pengalaman? Bukan masalah. Asal niat dan komitmen, hasilnya bisa kamu rasakan cepat.

          </motion.p>
        </div>
        
        {/* Features List with more generous spacing */}
        <div className="max-w-5xl mx-auto px-12 sm:px-16 lg:px-20 xl:px-24 space-y-4 sm:space-y-6 lg:space-y-8">
          {transformations.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <FeatureCard 
                title={feature.title} 
                description={feature.description} 
                index={index}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
