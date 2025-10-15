"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { WebGLShader } from "@/components/ui/web-gl-shader";

const ease = [0.16, 1, 0.3, 1];

// Payment Carousel Component - copied from Hero
function PaymentCarousel() {
  const paymentImages = [
    {
      type: "bri",
      amount: "Rp 425.128.328",
      label: "BRImo",
      subtitle: "Online Bill Payment Rp. 425.128.328 for MV-5779",
      time: "2 menit yang lalu",
      status: "success",
      icon: "/images/brimo2.png"
    },
    {
      type: "bca", 
      amount: "Rp 234.876.234",
      label: "MyBCA",
      subtitle: "Online Instant Transfer Rp. 234.876.234",
      time: "5 menit yang lalu",
      status: "success",
      icon: "/images/myBCA.png"
    },
    {
      type: "dana",
      amount: "Rp 156.789.123",
      label: "DANA",
      subtitle: "Transfer dari DANA Rp. 156.789.123",
      time: "8 menit yang lalu",
      status: "success",
      icon: "/images/dana.png"
    },
    {
      type: "mandiri",
      amount: "Rp 312.567.890",
      label: "Livin'",
      subtitle: "Transfer Mandiri Online Rp. 312.567.890",
      time: "12 menit yang lalu",
      status: "success",
      icon: "/images/livinMandiri.png"
    },
    {
      type: "ovo",
      amount: "Rp 189.432.567",
      label: "OVO",
      subtitle: "Transfer OVO Premium Rp. 189.432.567",
      time: "15 menit yang lalu",
      status: "success",
      icon: "/images/dana.png"
    },
    {
      type: "gopay",
      amount: "Rp 278.654.321",
      label: "GoPay",
      subtitle: "Transfer GoPay Plus Rp. 278.654.321",
      time: "18 menit yang lalu",
      status: "success",
      icon: "/images/myBCA.png"
    },
    {
      type: "shopeepay",
      amount: "Rp 345.123.789",
      label: "ShopeePay",
      subtitle: "Transfer ShopeePay Rp. 345.123.789",
      time: "22 menit yang lalu",
      status: "success",
      icon: "/images/brimo2.png"
    }
  ];

  return (
    <div className="h-full overflow-hidden">
        <div className="flex flex-col space-y-2">
          {/* Payment cards */}
          {paymentImages.map((payment, index) => (
            <div
              key={`${payment.type}-${index}`}
              className="backdrop-blur-sm rounded-lg p-2 border border-gray-300/20 flex-shrink-0 shadow-lg"
              style={{ backgroundColor: '#E3E4E3' }}
            >
              <div className="flex items-start">
                <div className="flex items-center space-x-3 flex-1">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center shadow-md bg-white p-1">
                    <Image
                      src={payment.icon}
                      alt={payment.label}
                      width={32}
                      height={32}
                      className="w-full h-full object-contain rounded-sm"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <div className="text-gray-900 font-semibold text-[11px]">{payment.label}</div>
                        <div className="text-gray-600 text-[11px]">•</div>
                      </div>
                      <div className="text-gray-600 text-[10px]">{payment.time}</div>
                    </div>
                    <div className="text-gray-700 text-[11px] font-medium truncate pr-1 text-left">{payment.subtitle}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}

function HeroTitles() {
  return (
    <div className="text-center lg:text-left">
      {/* Subtle Tag */}
      <motion.div
        className="flex justify-center lg:justify-start mb-4 lg:mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.2,
        }}
      >
        <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-700/50 text-gray-300 px-2 py-1 sm:px-3 sm:py-1.5 rounded-md text-[12px] sm:text-[14px] font-medium">
          87% member <span className="text-orange-400 font-semibold">Capai Income Pertamanya &lt; 21 Hari</span>
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
        className="mb-4 lg:mb-6"
      >
        <motion.h1
          className="text-center lg:text-left text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] xl:text-[64px] leading-tight tracking-tighter font-bold"
          style={{
            background: 'linear-gradient(90deg, #ffffff 0%, #ec4899 50%, #ffffff 100%)',
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
          Dalam 14 Hari, Buat Income Pasif (Jutaan)
        </motion.h1>
      </motion.div>
      
      {/* Subtitle */}
      <motion.p
        className="text-[14px] sm:text-[16px] leading-relaxed text-gray-300 text-center lg:text-left mb-6 lg:mb-8"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.4,
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        Bikin passive income dari asuransi, disertai pelatihan dan rewards worth ratusan juta, membuat kamu ubah waktu kamu jadi uang dalam waktu cepat!
      </motion.p>

      {/* CTA Buttons - moved here below subtitle */}
      <motion.div
        className="flex justify-center lg:justify-start items-center gap-2 sm:gap-3 lg:gap-4"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <Link href="/pricing">
          <button className="bg-gradient-to-r from-pink-600 to-pink-500 text-white px-3 py-2 sm:px-4 sm:py-2.5 lg:px-6 lg:py-3 rounded-lg font-semibold hover:from-pink-500 hover:to-pink-400 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-[12px] sm:text-[14px] lg:text-[16px]">
            Saya Mau Peruabahan
          </button>
        </Link>
        <Link href="/contact">
          <button className="bg-transparent border border-gray-600 text-gray-300 px-3 py-2 sm:px-4 sm:py-2.5 lg:px-6 lg:py-3 rounded-lg font-semibold hover:border-gray-500 hover:text-white hover:scale-105 transition-all duration-300 text-[12px] sm:text-[14px] lg:text-[16px]">
            Gabung Komunitas
          </button>
        </Link>
      </motion.div>
    </div>
  );
}

export default function WebGLHeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden">
      {/* WebGL Shader Background */}
      <div className="absolute inset-0 z-0">
        <WebGLShader />
      </div>
      
      {/* Overlay for slight dimming effect */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      
      {/* Main Content - Centered */}
      <div className="relative z-20 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8 sm:pt-24 sm:pb-12 lg:pt-28 lg:pb-16 max-w-7xl">
          <div className="relative flex w-full flex-col items-center justify-center">
            
            {/* Main Section: Title + Content */}
            <motion.div 
              className="w-full mb-8 lg:mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="flex justify-center">
                <div className="w-full max-w-4xl">
                  <HeroTitles />
                </div>
              </div>
            </motion.div>

            {/* Video Section - Now below buttons */}
            <motion.div 
              className="w-full mb-8 lg:mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.8,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="flex justify-center">
                <div className="w-full max-w-sm lg:max-w-md">
                  <div className="rounded-2xl aspect-[9/16] p-4 lg:p-6 overflow-hidden">
                    <div className="relative w-full h-full rounded-xl overflow-hidden">
                      <iframe
                        className="absolute inset-0 w-full h-full rounded-xl"
                        src="https://www.youtube.com/embed/Bm2s0_oO_A4?autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1"
                        title="YouTube video"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bottom Section: Additional Content Only */}
            <div className="w-full flex flex-col items-center space-y-4 lg:space-y-6">
              
              {/* Star Rating Section - Above Limited Slots */}
              <div className="w-full flex justify-center">
                <div className="text-center">
                  {/* Star Rating */}
                  <div className="flex items-center gap-0.5 mb-1 justify-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400 fill-current"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-1 text-white font-semibold text-[14px] sm:text-[14px]">4.8/5</span>
                  </div>
                </div>
              </div>

              {/* Limited Offer Text */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-white text-[18px] sm:text-[20px] lg:text-[22px] font-bold mb-1">
                  Limited Slots
                </p>
                <p className="text-white text-[14px] sm:text-[16px] font-medium mb-4 lg:mb-6">
                  FREE iPad Untuk 10 Orang Tercepat Capai Misi.
                </p>
              </motion.div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}