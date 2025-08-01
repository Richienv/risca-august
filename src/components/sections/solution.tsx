"use client";

import { motion } from "framer-motion";
import OverlappingImages from "@/components/overlapping-images";

const transformations = [
  {
    title: "Jual Tanpa Ngegombal",
    description: "Lupain teknik jual kuno yang cringe. Lo bakal dapet sistem jual yang natural dan powerfull, bikin closing rate naik 300% tanpa keliatan kayak sales norak.",
  },
  {
    title: "Dapetin Client Autopilot",
    description: "Sistem rahasia dapetin client yang jalan sendiri. Lo gak perlu lagi kejar-kejaran prospek. Mereka yang bakal dateng sendiri dan minta dilayani.",
  },
  {
    title: "Bikin Mereka Nagih",
    description: "Rahasia bikin client ketagihan sama lo sampai mereka gak mau pindah ke yang lain. Repeat order dan referral bakal ngalir terus tanpa lo minta.",
  },
  {
    title: "Ubah 'Gak' Jadi 'Iya'",
    description: "Framework khusus ngatasin semua alasan penolakan client. Yang tadinya bilang 'mikir dulu' bakal langsung bilang 'gimana caranya mulai?'",
  },
  {
    title: "10 Juta dalam 5 Bulan",
    description: "Sistem financial planning yang udah terbukti bikin 2000+ member komunitas dapet 10-50 juta dalam 5 bulan pertama. Ini bukan teori, ini hasil nyata.",
  },
];

function FeatureCard({ 
  title, 
  description, 
  isLast,
  index
}: { 
  title: string; 
  description: string; 
  isLast: boolean;
  index: number;
}) {
  return (
    <div 
      className="relative overflow-hidden group rounded-2xl p-6 lg:p-8 mb-6 lg:mb-8 transition-all duration-500"
      style={{
        background: 'linear-gradient(135deg, rgba(15, 15, 15, 0.95) 0%, rgba(0, 0, 0, 0.98) 50%, rgba(20, 5, 5, 0.95) 100%)',
        border: '1px solid transparent',
        backgroundImage: 'linear-gradient(135deg, rgba(15, 15, 15, 0.95) 0%, rgba(0, 0, 0, 0.98) 50%, rgba(20, 5, 5, 0.95) 100%), linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(220, 38, 38, 0.1), rgba(239, 68, 68, 0.2))',
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
      }}
    >
      {/* Corner Gradient Overlays */}
      <div className="absolute top-0 left-0 w-20 h-20 opacity-30 group-hover:opacity-50 transition-opacity duration-500"
           style={{
             background: 'radial-gradient(circle at 0% 0%, rgba(239, 68, 68, 0.4) 0%, rgba(220, 38, 38, 0.2) 40%, transparent 70%)',
           }}></div>
      <div className="absolute top-0 right-0 w-20 h-20 opacity-30 group-hover:opacity-50 transition-opacity duration-500"
           style={{
             background: 'radial-gradient(circle at 100% 0%, rgba(239, 68, 68, 0.4) 0%, rgba(220, 38, 38, 0.2) 40%, transparent 70%)',
           }}></div>
      <div className="absolute bottom-0 left-0 w-20 h-20 opacity-30 group-hover:opacity-50 transition-opacity duration-500"
           style={{
             background: 'radial-gradient(circle at 0% 100%, rgba(239, 68, 68, 0.4) 0%, rgba(220, 38, 38, 0.2) 40%, transparent 70%)',
           }}></div>
      <div className="absolute bottom-0 right-0 w-20 h-20 opacity-30 group-hover:opacity-50 transition-opacity duration-500"
           style={{
             background: 'radial-gradient(circle at 100% 100%, rgba(239, 68, 68, 0.4) 0%, rgba(220, 38, 38, 0.2) 40%, transparent 70%)',
           }}></div>
      
      {/* Enhanced Corner Glow Effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
           style={{
             boxShadow: 'inset 0 0 50px rgba(239, 68, 68, 0.1), 0 0 30px rgba(239, 68, 68, 0.05)',
           }}></div>
      {/* Enhanced Corner accent elements with gradient backgrounds */}
      <div 
        className="absolute top-2 left-2 w-10 h-10 border border-red-500/30 opacity-80 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110 rounded"
        style={{
          background: 'radial-gradient(circle, rgba(239, 68, 68, 0.15) 0%, rgba(220, 38, 38, 0.08) 60%, transparent 100%)',
          animationDelay: '0.1s',
        }}
      >
        <div className="absolute top-0 left-0 w-2 h-2 bg-red-500 opacity-60 rounded-full animate-pulse"></div>
      </div>
      
      <div 
        className="absolute top-2 right-2 w-10 h-10 border border-red-500/30 opacity-80 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110 rounded"
        style={{
          background: 'radial-gradient(circle, rgba(239, 68, 68, 0.15) 0%, rgba(220, 38, 38, 0.08) 60%, transparent 100%)',
          animationDelay: '0.2s',
        }}
      >
        <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 opacity-60 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>
      
      <div 
        className="absolute bottom-2 left-2 w-10 h-10 border border-red-500/30 opacity-80 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110 rounded"
        style={{
          background: 'radial-gradient(circle, rgba(239, 68, 68, 0.15) 0%, rgba(220, 38, 38, 0.08) 60%, transparent 100%)',
          animationDelay: '0.3s',
        }}
      >
        <div className="absolute bottom-0 left-0 w-2 h-2 bg-red-500 opacity-60 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div 
        className="absolute bottom-2 right-2 w-10 h-10 border border-red-500/30 opacity-80 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110 rounded"
        style={{
          background: 'radial-gradient(circle, rgba(239, 68, 68, 0.15) 0%, rgba(220, 38, 38, 0.08) 60%, transparent 100%)',
          animationDelay: '0.4s',
        }}
      >
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-red-500 opacity-60 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-12 relative z-10">
        {/* Left side - Text content */}
        <div className="w-full lg:w-3/5 order-2 lg:order-1">
          <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extralight leading-tight tracking-tight mb-3 lg:mb-4 text-white">
            {title}
          </h3>
          <p className="text-sm sm:text-base lg:text-lg font-light leading-relaxed text-white/70 max-w-xl">
            {description}
          </p>
        </div>

        {/* Right side - Overlapping Images */}
        <div className="w-full lg:w-2/5 flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="w-full max-w-sm lg:max-w-md h-52 sm:h-64 lg:h-72">
            <OverlappingImages solutionIndex={index} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SolutionSection() {
  return (
    <div className="relative w-full bg-black">
      <div className="relative z-10 py-20 lg:py-28">
        {/* Section Header */}
        <div className="text-left mb-12 lg:mb-16 px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.h2 
            className="text-2xl lg:text-3xl xl:text-4xl font-extralight leading-tight tracking-tight mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ini Dia Rahasianya
          </motion.h2>
          <motion.p
            className="text-sm lg:text-base font-light leading-relaxed text-white/70 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Kenapa mereka bisa 10 juta dalam 5 bulan sementara lo masih stuck? Ini sistem tersembunyi yang bikin ribuan Gen-Z Indonesia berhasil financial freedom di usia muda.
          </motion.p>
        </div>
        
        {/* Features List with more generous spacing */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-6 lg:space-y-8">
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
                isLast={index === transformations.length - 1}
                index={index}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
