"use client";

import Section from "@/components/section";
import { motion } from "framer-motion";
import { useRef } from "react";

const data = [
  {
    id: 1,
    testimonial: "Surianto (Acai) - Kunci keberhasilan adalah berani mengambil risiko dan tidak takut gagal.",
    story: "Kapasitas manusia tidak akan bertambah berkembang bila ada rasa takut gagal di dalamnya. Surianto membuktikan bahwa keberanian mengambil risiko dan konsistensi adalah fondasi kesuksesan yang sesungguhnya.",
    memberName: "Surianto (Acai)",
    memberRole: "Ex-Salesman • High Achiever",
    images: [
      "/images/surianto.jpeg",
      "/images/surianto.jpeg",
      "/images/surianto.jpeg"
    ]
  },
  {
    id: 2,
    testimonial: "Eddy - Dulu cuma bermimpi punya penghasilan besar, sekarang syukur sudah bisa mencapainya.",
    story: "Hadiah sesungguhnya bukan hanya angka penghasilan — tetapi pertumbuhan, perjalanan, dan kesempatan membantu orang lain melindungi hal yang paling berharga. Sekarang misi saya jelas: tidak hanya dilihat, tetapi dipercaya, diingat, dan dicari.",
    memberName: "Eddy",
    memberRole: "Ex-S2 Arsitek • Top Leader",
    images: [
      "/images/eddy.png",
      "/images/eddy.png",
      "/images/eddy.png"
    ]
  },
  {
    id: 3,
    testimonial: "Suci Lestari - Dari karyawan biasa jadi entrepreneur — sekarang hidup dengan kebebasan yang dulu cuma bisa dibayangkan.",
    story: "Dulu hanya pekerja 9-5 biasa, sekarang bisa membangun bisnis dari mana saja, kapan saja. Penghasilan impian, gaya hidup impian — semua dimulai dari satu keputusan kecil. Bekerja dari mana saja, hidup dengan tujuan yang jelas.",
    memberName: "Suci Lestari",
    memberRole: "Ex-Corporate • Business Partner",
    images: [
      "/images/sucilestari.jpeg",
      "/images/sucilestari.jpeg",
      "/images/sucilestari.jpeg"
    ]
  },
  {
    id: 4,
    testimonial: "Soehartono & Athena - Dari Moscow sampai Paris, dari Korea sampai Taiwan — mimpi tidak mengenal batas.",
    story: "Perjalanan mereka telah membawa ke seluruh dunia - Moscow, Paris, Korea Selatan, Taiwan, Shangrila South China, Prague, Italy. Bukti nyata apa yang mungkin terjadi ketika Anda berkomitmen pada keunggulan dalam bisnis ini.",
    memberName: "Soehartono & Athena",
    memberRole: "Ex-Manager & Ibu RT • Global Traveler",
    images: [
      "/images/s-h.jpeg",
      "/images/s-h.jpeg",
      "/images/s-h.jpeg"
    ]
  },
  {
    id: 5,
    testimonial: "Elya - Bersyukur bisa berkembang, diberkati untuk melindungi sesama.",
    story: "Saya bersyukur mendapat kesempatan berkembang di bisnis ini — tidak hanya sebagai profesional, tetapi sebagai manusia. Melalui asuransi, saya bisa melayani orang lain, melindungi hal yang paling berharga, dan berbagi berkat masa depan yang terjamin. Perjalanan: Taiwan, Turkey, Korea, Bali dan masih banyak lagi.",
    memberName: "Elya",
    memberRole: "Ex-Beauty Entrepreneur • Business Partner",
    images: [
      "/images/elya.png",
      "/images/elya.png",
      "/images/elya.png"
    ]
  }
];

function FeatureCard({ item, index }: { item: typeof data[0], index: number }) {
  return (
    <motion.div
      className="relative group cursor-pointer"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
    >
      {/* Card with vertical layout */}
      <div className="relative w-full bg-gradient-to-br from-black/50 via-black/40 to-yellow-900/10 backdrop-blur-sm rounded-lg lg:rounded-xl p-4 sm:p-5 transition-all duration-500 hover:border-yellow-400/30 border border-yellow-400/10" style={{ boxShadow: '0 0 15px rgba(251, 191, 36, 0.1)' }}>

        {/* Image Carousel Section */}
        <div className="w-full aspect-square relative overflow-hidden rounded-lg mb-3 sm:mb-4">
          <div className="flex h-full gap-1 sm:gap-2 lg:gap-3">
            {/* Show only the first image, no movement */}
            <div className="flex-shrink-0 w-full h-full relative">
              <img
                src={item.images[0]}
                alt={`Feature 1`}
                className="w-full h-full object-cover object-top rounded-md lg:rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-md lg:rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Testimonial Content */}
        <div className="space-y-2 sm:space-y-3">
          {/* Main Quote */}
          <div className="relative">
            <svg className="w-4 h-4 text-yellow-400/50 mb-2" fill="currentColor" viewBox="0 0 32 32" style={{ filter: 'drop-shadow(0 0 6px rgba(251, 191, 36, 0.4))' }}>
              <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14h-4c0-2.2 1.8-4 4-4V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-4c0-2.2 1.8-4 4-4V8z" />
            </svg>
            <p className="text-sm sm:text-base lg:text-lg font-medium leading-relaxed text-white mb-3" style={{ textShadow: '0 0 10px rgba(251, 191, 36, 0.2)' }}>
              "{item.testimonial}"
            </p>
          </div>

          {/* Story */}
          <div className="relative">
            <p className="text-xs sm:text-sm lg:text-base font-light leading-relaxed text-white/70">
              {item.story}
            </p>
          </div>

          {/* Member Attribution */}
          <div className="pt-2 border-t border-yellow-400/20">
            <p className="text-sm font-medium text-white mb-1" style={{ textShadow: '0 0 8px rgba(251, 191, 36, 0.2)' }}>
              {item.memberName}
            </p>
            <p className="text-xs text-yellow-300/70 font-light" style={{ textShadow: '0 0 6px rgba(251, 191, 36, 0.1)' }}>
              {item.memberRole}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturesSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center bg-black overflow-hidden">
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 lg:py-24 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-8 lg:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xs sm:text-sm font-mono font-light text-slate-300 uppercase tracking-[0.2em] opacity-80 mb-2 sm:mb-4">
                Kerja Keras = Reward Besar
              </h2>
              <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-pink-500/60 to-transparent mx-auto mb-3 sm:mb-6"></div>
              <motion.h1
                className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tighter whitespace-normal max-w-full mx-auto text-white relative mb-2 sm:mb-4"
                style={{
                  background: 'linear-gradient(90deg, #ffffff 0%, #ec4899 50%, #ffffff 100%)',
                  backgroundSize: '200% 100%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
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
                GAK CUMA DUIT DOANG
              </motion.h1>
              <p className="text-base sm:text-lg font-light leading-relaxed text-slate-300 max-w-3xl mx-auto">
                Benefit gila yang gak bakal lo dapet di tempat lain. Ini yang bikin member kita beda dari yang lain.
              </p>
            </motion.div>
          </div>

          {/* Compact grid layout for better mobile experience - adjusted for 5 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
            {data.map((item, index) => (
              <div key={item.id}>
                <FeatureCard item={item} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
