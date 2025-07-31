"use client";

import { motion } from "framer-motion";
import OverlappingImages from "@/components/overlapping-images";

const transformations = [
  {
    title: "Train to Sell",
    description: "Dapatkan pelatihan penjualan terlengkap yang akan mengubah cara kamu menjual. Dari teknik dasar hingga strategi advanced yang terbukti meningkatkan closing rate hingga 300%.",
  },
  {
    title: "Teach How to Get Client",
    description: "Pelajari sistem mendapatkan klien yang sudah terbukti berhasil. Mulai dari prospecting, lead generation, hingga cara membangun pipeline yang konsisten menghasilkan klien baru.",
  },
  {
    title: "Master Client Relationship",
    description: "Kuasai seni membangun hubungan jangka panjang dengan klien. Belajar cara meningkatkan lifetime value dan menciptakan repeat customers yang loyal.",
  },
  {
    title: "Handle Objection",
    description: "Atasi segala bentuk penolakan dengan percaya diri. Pelajari framework yang tepat untuk mengubah setiap objection menjadi kesempatan closing yang menguntungkan.",
  },
  {
    title: "Financial Planning",
    description: "Rencanakan keuangan bisnis dan personal dengan strategi yang sustainable. Belajar cara mengelola cash flow, investasi, dan mencapai financial freedom.",
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
      className="bg-black rounded-2xl p-6 lg:p-8 mb-6 lg:mb-8 border border-red-500/20 hover:border-red-500/30 transition-all duration-300 relative overflow-hidden group"
      style={{
        position: 'relative',
      }}
    >
      {/* Corner accent elements - matching digital-seranity.tsx */}
      <div 
        className="absolute top-2 left-2 w-10 h-10 border border-red-500/20 bg-red-500/5 opacity-100 transition-all duration-300 group-hover:opacity-75"
        style={{
          animationDelay: '0.1s',
        }}
      >
        <div className="absolute top-0 left-0 w-2 h-2 bg-red-500 opacity-30 rounded-full"></div>
      </div>
      
      <div 
        className="absolute top-2 right-2 w-10 h-10 border border-red-500/20 bg-red-500/5 opacity-100 transition-all duration-300 group-hover:opacity-75"
        style={{
          animationDelay: '0.2s',
        }}
      >
        <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 opacity-30 rounded-full"></div>
      </div>
      
      <div 
        className="absolute bottom-2 left-2 w-10 h-10 border border-red-500/20 bg-red-500/5 opacity-100 transition-all duration-300 group-hover:opacity-75"
        style={{
          animationDelay: '0.3s',
        }}
      >
        <div className="absolute bottom-0 left-0 w-2 h-2 bg-red-500 opacity-30 rounded-full"></div>
      </div>
      
      <div 
        className="absolute bottom-2 right-2 w-10 h-10 border border-red-500/20 bg-red-500/5 opacity-100 transition-all duration-300 group-hover:opacity-75"
        style={{
          animationDelay: '0.4s',
        }}
      >
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-red-500 opacity-30 rounded-full"></div>
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
            Solusi Lengkap Untuk Kesuksesan Penjualan
          </motion.h2>
          <motion.p
            className="text-sm lg:text-base font-light leading-relaxed text-white/70 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Temukan solusi komprehensif yang dirancang khusus untuk mentransformasi kemampuan penjualan kamu dan membuka peluang bisnis yang tak terbatas.
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
