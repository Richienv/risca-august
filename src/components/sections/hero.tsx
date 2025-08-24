"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

import { Spotlight } from "@/components/spotlight-new";
import Link from "next/link";


const ease = [0.16, 1, 0.3, 1];

function HeroTitles() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollSpeed = 0.5; // pixels per tick
    let frameId: number;

    const step = () => {
      if (!scrollContainer) return;

      scrollContainer.scrollTop += scrollSpeed;

      if (
        scrollContainer.scrollTop >= scrollContainer.scrollHeight / 3
      ) {
        // Reset to top when we've scrolled through 1/3 (one set of cards)
        scrollContainer.scrollTop = 0;
      }

      frameId = requestAnimationFrame(step);
    };

    frameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(frameId);
  }, []);

  const paymentImages = [
    {
      type: "bri",
      amount: "Rp 425.128.328",
      label: "BRImo",
      subtitle: "Online Bill Payment Rp. 425.128.328 for MV-5779",
      time: "2 menit yang lalu",
      status: "success"
    },
    {
      type: "bca", 
      amount: "Rp 234.876.234",
      label: "MyBCA",
      subtitle: "Online Instant Transfer Rp. 234.876.234",
      time: "5 menit yang lalu",
      status: "success"
    },
    {
      type: "dana",
      amount: "Rp 156.789.123",
      label: "DANA",
      subtitle: "Transfer dari DANA Rp. 156.789.123",
      time: "8 menit yang lalu",
      status: "success"
    },
    {
      type: "gopay",
      amount: "Rp 98.456.789",
      label: "GoPay",
      subtitle: "Pembayaran GoPay berhasil Rp. 98.456.789",
      time: "12 menit yang lalu",
      status: "success"
    },
    {
      type: "paypal",
      amount: "$4.267",
      label: "PayPal", 
      subtitle: "You received a payment of $4.267",
      time: "15 menit yang lalu",
      status: "success"
    },
    {
      type: "mandiri",
      amount: "Rp 312.567.890",
      label: "Livin'",
      subtitle: "Transfer Mandiri Online Rp. 312.567.890",
      time: "18 menit yang lalu",
      status: "success"
    }
  ];

  return (
    <div className="flex w-full max-w-4xl flex-col text-center mb-8 relative">
      {/* Notification Carousel - positioned at the very top with ceiling-to-tagline flow */}
      {/* Mobile height: h-32 | Desktop height: sm:h-96 */}
      <div 
        ref={scrollRef}
        className="relative w-full max-w-[180px] sm:max-w-md h-[300px] sm:h-[400px] z-20 mt-[-25rem] sm:mt-[-12rem] mx-auto opacity-70 sm:opacity-100"
        style={{
          overflowY: "scroll",
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        <div className="flex flex-col space-y-0.5 sm:space-y-2 py-2">
          {/* Render cards multiple times to ensure scrollable content */}
          {[...paymentImages, ...paymentImages, ...paymentImages].map((payment, index) => (
            <div
              key={`${payment.type}-${index}`}
              className="backdrop-blur-sm rounded-md sm:rounded-xl p-1 sm:p-3 border border-gray-300/20 flex-shrink-0 shadow-lg"
              style={{ backgroundColor: '#E3E4E3' }}
            >
              <div className="flex items-start">
                <div className="flex items-center space-x-1.5 sm:space-x-3 flex-1">
                  <div className={`w-5 h-5 sm:w-8 sm:h-8 rounded-sm sm:rounded-lg flex items-center justify-center text-white font-bold text-[7px] sm:text-xs shadow-md ${
                    payment.type === 'bri' ? 'bg-gradient-to-br from-blue-600 to-blue-700' : 
                    payment.type === 'bca' ? 'bg-gradient-to-br from-blue-700 to-blue-800' :
                    payment.type === 'dana' ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                    payment.type === 'gopay' ? 'bg-gradient-to-br from-green-600 to-green-700' :
                    payment.type === 'paypal' ? 'bg-gradient-to-br from-blue-600 to-blue-700' :
                    payment.type === 'mandiri' ? 'bg-gradient-to-br from-orange-600 to-orange-700' : 'bg-gray-600'
                  }`}>
                    {payment.type === 'bri' ? 'BRI' : 
                     payment.type === 'bca' ? 'BCA' :
                     payment.type === 'dana' ? 'D' :
                     payment.type === 'gopay' ? 'G' :
                     payment.type === 'paypal' ? 'P' :
                     payment.type === 'mandiri' ? 'M' : 'X'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-0.5 sm:space-x-1">
                        <div className="text-gray-900 font-semibold text-[10px] sm:text-sm">{payment.label}</div>
                        <div className="text-gray-600 text-[10px] sm:text-sm">•</div>
                      </div>
                      <div className="text-gray-600 text-[4px] sm:text-sm">{payment.time}</div>
                    </div>
                    <div className="text-gray-700 text-[6px] sm:text-sm font-medium truncate pr-1 text-left">{payment.subtitle}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle Tag - Apple style with reduced top margin for closer spacing */}
      <motion.div
        className="flex justify-center mb-4 mt-2 relative z-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.2,
        }}
      >
        <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-700/50 text-gray-300 px-2 py-1 sm:px-3 sm:py-1.5 rounded-md text-[10px] sm:text-xs font-medium">
          87% member <span className="text-orange-400 font-semibold">Capai Income Pertamanya &lt; 21 Hari</span>
        </div>
      </motion.div>

      {/* Title - positioned after notifications */}
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.3,
        }}
        className="mb-3"
      >
        <motion.h1
          className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter whitespace-normal px-6 sm:px-8 md:px-12 lg:px-16 max-w-full mx-auto relative"
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
      
      {/* Subtitle - closer to title */}
      <motion.p
        className="text-xs sm:text-lg tracking-tight text-gray-300 text-balance text-center max-w-2xl mx-auto mb-6"
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

      {/* CTA Buttons - separated from group */}
      <motion.div
        className="flex justify-center items-center gap-3 sm:gap-4"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <button 
          onClick={() => {
            const pricingSection = document.getElementById('pricing-section');
            if (pricingSection) {
              pricingSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="bg-gradient-to-r from-pink-600 to-pink-500 text-white px-3 py-1.5 sm:px-6 sm:py-2.5 rounded-md sm:rounded-lg font-small sm:font-semibold hover:from-pink-500 hover:to-pink-400 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-[11px] sm:text-sm"
        >
          Saya Mau Perubahan
        </button>
        <Link href="/contact">
          <button className="bg-transparent border border-gray-600 text-gray-300 px-3 py-1.5 sm:px-6 sm:py-2.5 rounded-md sm:rounded-lg font-medium sm:font-semibold hover:border-gray-500 hover:text-white hover:scale-105 transition-all duration-300 text-[11px] sm:text-sm">
            Gabung Komunitas
          </button>
        </Link>
      </motion.div>

      {/* Limited Offer Text */}
      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="text-white font-bold text-base sm:text-lg mb-2">
          Limited Slots
        </p>
        <p className="text-gray-400 text-[9px] sm:text-xs">
          Penawaran Terbatas:
        </p>
        <p className="text-white font-medium text-[9px] sm:text-xs">
          FREE iPad Untuk 10 Orang Tercepat Selesaikan Challange Pertama.
        </p>
      </motion.div>
    </div>
  );
}

function HeroVideo() {
  return (
    <motion.div
      className="relative mx-auto flex w-full flex-col items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 1, ease }}
    >
      <div className="relative w-full max-w-4xl mt-8">
        {/* Video Container */}
        <div className="relative w-full">
          {/* Video Container with thick transparent border */}
          <motion.div
            className="relative z-50 aspect-video w-full overflow-hidden rounded-2xl"
            style={{ 
              isolation: 'isolate',
              transform: 'translateZ(0)', // Force hardware acceleration
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Thick transparent border frame */}
            <div className="absolute inset-0 z-60 rounded-2xl border-8 border-white/20 backdrop-blur-sm pointer-events-none"></div>
            
            {/* YouTube embedded video */}
            <div className="relative w-full h-full bg-black rounded-xl overflow-hidden group cursor-pointer">
              {/* YouTube Embed */}
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/pxGM_TOgHuM?si=FuvN40zntrmZNYfg&autoplay=0&mute=1&controls=1&showinfo=0&rel=0"
                title="YouTube video preview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{
                  filter: 'none !important',
                  transform: 'translateZ(0)',
                }}
              />
              
              {/* Custom overlay for styling (optional) */}
              <div className="absolute inset-0 bg-transparent pointer-events-none z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden w-full min-h-[80vh] sm:min-h-screen flex items-end sm:items-center justify-center bg-background pt-8 sm:pt-0 pb-8">
      {/* Spotlight Effects - More subtle on mobile, positioned behind */}
      <div className="absolute inset-0 z-0">
        <Spotlight 
          gradientFirst={`radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(236, 72, 153, 0.08) 0%, rgba(219, 39, 119, 0.05) 30%, rgba(236, 72, 153, 0.02) 60%, transparent 90%)`}
          gradientSecond={`radial-gradient(50% 50% at 50% 50%, rgba(236, 72, 153, 0.06) 0%, rgba(219, 39, 119, 0.03) 50%, rgba(236, 72, 153, 0.01) 80%, transparent 100%)`}
          gradientThird={`radial-gradient(50% 50% at 50% 50%, rgba(219, 39, 119, 0.05) 0%, rgba(236, 72, 153, 0.02) 60%, transparent 90%)`}
          translateY={-300}
          width={600}
          height={1200}
          smallWidth={250}
          duration={8}
          xOffset={50}
        />
      </div>
      
      {/* Main Content - Centered */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-8 sm:px-12 lg:px-16">
          <div className="relative flex w-full flex-col items-center justify-center pt-0">
            {/* Main content */}
            <div className="w-full flex flex-col items-center space-y-1">
              {/* Main Title and Subtitle with integrated notifications */}
              <HeroTitles />
              
              {/* Video at the bottom */}
              <HeroVideo />
              
              {/* Star Rating Section - Below the video */}
              <div className="mt-8 flex justify-center">
                <div className="text-center">
                  {/* Star Rating */}
                  <div className="flex items-center gap-0.5 mb-1 justify-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-2 h-2 text-orange-400 fill-current"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-1 text-white font-semibold text-[8px]">4.8/5</span>
                  </div>
                  
                  {/* Rating Text */}
                  <p className="text-gray-300 text-[7px]">
                    Rated excellent: 5000+ students
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
