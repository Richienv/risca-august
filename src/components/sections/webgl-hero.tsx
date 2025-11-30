"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

function HeroTitles() {
  return (
    <div className="text-center lg:text-left relative z-30">
      {/* Subtle Tag */}
      <motion.div
        className="flex justify-center lg:justify-start mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.2,
        }}
      >
        <div className="bg-amber-500/10 backdrop-blur-md border border-amber-500/20 text-amber-200 px-4 py-2 rounded-full text-xs sm:text-sm font-medium flex items-center gap-2 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          87% member <span className="text-amber-400 font-bold">Capai Income Pertamanya &lt; 21 Hari</span>
        </div>
      </motion.div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.3,
        }}
        className="mb-6"
      >
        <motion.h1
          className="text-center lg:text-left text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight font-bold text-white mb-6"
        >
          Mulai Side Career dengan <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-500 to-amber-200 animate-gradient-x">
            Sistem & Mentor yang Jelas
          </span>
        </motion.h1>
      </motion.div>

      {/* Subtitle */}
      <motion.p
        className="text-base sm:text-lg md:text-xl leading-relaxed text-white/70 text-center lg:text-left mb-8 max-w-2xl mx-auto lg:mx-0"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.4,
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        Income real dari tim kami &gt; perjalanan karier nyata dari anak muda yang berani mulai. Bukan sekadar janji, tapi bukti nyata.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <Link href="/pricing" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto bg-gradient-to-r from-amber-600 to-amber-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-amber-500 hover:to-amber-400 hover:scale-[1.02] transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] flex items-center justify-center gap-2 group relative overflow-hidden">
            <span className="relative z-10">Saya Mau Perubahan</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 skew-y-12" />
          </button>
        </Link>
        <Link href="/contact" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2">
            <PlayCircle className="w-5 h-5 text-amber-500" />
            Gabung Komunitas
          </button>
        </Link>
      </motion.div>
    </div>
  );
}

export default function WebGLHeroSection() {
  return (
    <section className="relative w-full flex flex-col justify-center overflow-hidden bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-amber-600/20 blur-[120px] rounded-full opacity-50 animate-pulse-slow" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-amber-800/20 blur-[120px] rounded-full opacity-50 animate-pulse-slow delay-1000" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 w-full pt-24 pb-12 lg:pt-32 lg:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

            {/* Left Column: Text Content */}
            <div className="w-full lg:w-1/2">
              <HeroTitles />
            </div>

            {/* Right Column: Video/Visual */}
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                delay: 0.4,
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-amber-300 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />

                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/50 backdrop-blur-xl shadow-2xl">
                  <div className="aspect-[16/9] relative">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src="https://www.youtube.com/embed/DfVbBunX7PU?autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1&controls=0&loop=1&playlist=DfVbBunX7PU"
                      title="YouTube video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                    {/* Video Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Video Caption/Stats */}
                  <div className="p-4 sm:p-6 flex items-center justify-between bg-white/5 border-t border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-gray-800 flex items-center justify-center text-[10px] text-white overflow-hidden">
                            <div className="w-full h-full bg-gradient-to-br from-amber-500 to-amber-700" />
                          </div>
                        ))}
                      </div>
                      <div className="text-sm text-white/80">
                        <span className="font-bold text-white">1,200+</span> Member Bergabung
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-amber-400 font-bold">4.9</span>
                      <div className="flex text-amber-500">
                        {[1, 2, 3, 4, 5].map(i => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Bottom Stats/Social Proof */}
          <motion.div
            className="mt-16 lg:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 border-t border-white/10 pt-8 sm:pt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            {[
              { label: "Total Member", value: "1.2K+" },
              { label: "Success Rate", value: "87%" },
              { label: "Mentor Expert", value: "15+" },
              { label: "Rating", value: "4.9/5" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-white/50 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}