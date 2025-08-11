"use client";

import { motion } from "framer-motion";
import OverlappingImages from "@/components/overlapping-images";
import { Spotlight } from "@/components/spotlight-new";

const transformations = [
  {
    title: "7 Tahun Komitmen = Income 15 Milyar/bulan.",
    description: "You heard me right. Tangga kesuksesan yang pasti, bukan 7 tahun buat janji promosi tapi hasil yang pasti. Kerjaannya susah banget? Kamu bakal terkejut 'hah gamunkin cuman itu doang!' Sampai kamu lihat sendiri mereka yang berhasil baru bisa percaya. ",
  },
  {
    title: "Script Selling designed by Experts.",
    description: "Kamu bakal di ajarkan how to handle objection, the art to persuade, speak like a leader, how to build your charisma, dan masih banyak lagi. Kenapa? Kita mau sukses bareng gakaya 9-5 yang cuman mau sukses sendiri. Jadi tricks/resource akan kita share buat yang mau to improve.",
  },
  {
    title: "Trained With Mentors 2x Seminggu",
    description: "Aku ngerti pasti di awal kamu takut, tapi aku janji bakal hold your hands tights buat kamu bisa adapt & improve fast. Kamu bakal jadi priority aku dan aku bakal do my best buat kamu bisa ngerasain yang aku rasain sekarang.",
  },
  {
    title: "High-Value Member to Boost Networth Kamu.",
    description: "Aku paham kamu pengen temen/partner baru yang lebih berkualitas. That's why ngga sembarang orang bisa masuk ke bisnis ini. Aku sendiri yang bakal seleksi to make sure our circle have standard of quality. With this semua member di dalam bisa kerja-sama dan create something big together.",
  },
  {
    title: "Freedom to Work Anywhere, Whenever.",
    description: "Dengan training, sistem dan mentor pribadi. Kamu di beri kepercayaan untuk do your work dengan cara kamu dimana aja dan kapan aja. Kenapa? Karena bisnis ini driven by result bukan berapa jam kamu kerja seperti 9-5. ",
  },
  {
    title: "Mulai Hari Ini, Hasil Besok",
    description: "Gak perlu nunggu berbulan-bulan buat liat hasil pertama. Member rata-rata udah ngerasain perubahan income dalam 2-3 minggu pertama. Lo cuma perlu ikutin step-by-step yang udah dikasih, tanpa perlu mikir ribet atau analisis berlebihan. Sistemnya udah disederhanakan banget, bahkan anak SMA pun bisa langsung paham dan action. Yang penting lo mau mulai hari ini, sisanya sistem yang akan guide lo sampai berhasil.",
  },
  {
    title: "Private  Mentorship",
    description: "Belajar dari mereka yang udah punya hidup yang kamu mau, income milyaran mobil sport, property owner yang kerja nya cuman 2-4 jam sehari. Tanyain semua yang kamu mau dan belajar dari mereka langsung tanpa harus keluar ratusan juta atau cuman nonton dari youtube.",
  },
  {
    title: "Copy-Paste Kesuksesan",
    description: "Lo gak perlu jadi pioneer atau coba-coba sendiri. Dari cara ngomong, cara approach, sampe cara handle objection, semua udah ada panduannya yang detailed. Lo tinggal ikutin aja, gak perlu mikir kreatif atau inovatif.",
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
    <div className="relative w-full bg-black overflow-hidden">
      {/* Pink Spotlight Effects */}
      <Spotlight 
        gradientFirst={`radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(236, 72, 153, 0.12) 0%, rgba(219, 39, 119, 0.06) 50%, transparent 80%)`}
        gradientSecond={`radial-gradient(50% 50% at 50% 50%, rgba(236, 72, 153, 0.08) 0%, rgba(219, 39, 119, 0.04) 80%, transparent 100%)`}
        gradientThird={`radial-gradient(50% 50% at 50% 50%, rgba(219, 39, 119, 0.06) 0%, rgba(236, 72, 153, 0.03) 80%, transparent 100%)`}
        translateY={-220}
        width={450}
        height={900}
        smallWidth={180}
        duration={14}
        xOffset={70}
      />
      
      <div className="relative z-10 py-20 lg:py-28">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16 px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.h2 
            className="text-xs sm:text-sm font-mono font-light text-white/70 uppercase tracking-[0.2em] opacity-80 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Apa Jaminan Untuk Bisa Sukses?
          </motion.h2>
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
           SISTEM YANG UDAH DI-RANCANG PULUHAN TAHUN
          </motion.h1>
          <motion.p
            className="text-sm lg:text-base font-light leading-relaxed text-white/70 max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Yes, bukan aku yang buat sistem ini. Tapi Group of Professional Business Consultant dari Salah Satu Perusahaan Terbesar di Indonesia. Perusahaan dengan omzet puluhan sampai ratusan triliun per tahun buat sistem cuman untuk kamu copy dan implementasi, masih ngga mau?
            <br /><br />
            Gak ada yang spesial. Semua bisa suskses asalkan mau berusaha, sistem di bawah ini aku share dan aku harap kamu pay attention closely.
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
