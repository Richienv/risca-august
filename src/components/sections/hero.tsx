"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { Icons } from "@/components/icons";
import { Spotlight } from "@/components/spotlight-new";
import Link from "next/link";
import { Play, Star } from "lucide-react";


const ease = [0.16, 1, 0.3, 1];

// Image carousel component for payment screenshots
function HeroImageCarousel() {
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
    <div className="w-full max-w-xs sm:max-w-md mx-auto mb-4 relative overflow-hidden h-48 sm:h-60">
      <motion.div
        className="flex flex-col space-y-2"
        style={{
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15px, black calc(100% - 15px), transparent 100%)",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 15px, black calc(100% - 15px), transparent 100%)"
        }}
        animate={{ y: [0, -400] }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {/* Duplicate the array for seamless loop */}
        {[...paymentImages, ...paymentImages].map((payment, index) => (
          <div
            key={`${payment.type}-${index}`}
            className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-2 border border-gray-700/50 flex-shrink-0 shadow-lg"
          >
            <div className="flex items-start">
              <div className="flex items-center space-x-2 flex-1">
                <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center text-white font-bold text-[10px] sm:text-xs shadow-md ${
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
                  <div className="flex items-center space-x-1">
                    <div className="text-gray-100 font-semibold text-[11px] sm:text-xs">{payment.label}</div>
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-500 rounded-full"></div>
                    <div className="text-green-400 text-[10px] sm:text-xs font-medium">Berhasil</div>
                  </div>
                  <div className="text-gray-400 text-[10px] sm:text-xs truncate pr-1">{payment.subtitle}</div>
                  <div className="text-gray-500 text-[9px] sm:text-[10px] mt-0.5">{payment.time}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}


// Star ratings component
function HeroRatings() {
  return (
    <motion.div
      className="flex items-center justify-center space-x-1 mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.8, ease }}
    >
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
      <span className="text-white/80 text-sm ml-2">4.8/5</span>
      <span className="text-white/60 text-xs ml-1">(2000+ reviews)</span>
    </motion.div>
  );
}

function HeroTitles() {
  return (
    <div className="flex w-full max-w-4xl flex-col overflow-hidden text-center mb-8">
      {/* Subtle Tag - Apple style */}
      <motion.div
        className="flex justify-center mb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.2,
        }}
      >
        <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-700/50 text-gray-300 px-3 py-1.5 rounded-full text-xs font-medium">
          Omset bulanan: <span className="text-orange-400 font-semibold">$1,429,716.25</span>
        </div>
      </motion.div>

      {/* Title - closer spacing */}
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
          className="text-center text-3xl font-bold leading-tight tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl whitespace-normal px-4 sm:px-6 md:px-8 lg:px-10 max-w-full mx-auto relative"
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
         Hanya 90 hari bisa punya passive income tiap bulan
        </motion.h1>
      </motion.div>
      
      {/* Subtitle - closer to title */}
      <motion.p
        className="text-sm sm:text-lg tracking-tight text-gray-300 text-balance text-center max-w-2xl mx-auto mb-6"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.4,
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        Cuman modal ngomong, nongkrong, dan networking. Bikin passive income dari asuransi tanpa ribet!
      </motion.p>

      {/* CTA Buttons - separated from group */}
      <motion.div
        className="flex justify-center items-center gap-3 sm:gap-4"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <Link href="/contact">
          <button className="bg-gradient-to-r from-pink-600 to-pink-500 text-white px-5 py-2 sm:px-6 sm:py-2.5 rounded-lg font-semibold hover:from-pink-500 hover:to-pink-400 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-xs sm:text-sm">
            Saya Mau Perubahan
          </button>
        </Link>
        <Link href="/signup">
          <button className="bg-transparent border-2 border-gray-600 text-gray-300 px-5 py-2 sm:px-6 sm:py-2.5 rounded-lg font-semibold hover:border-gray-500 hover:text-white hover:scale-105 transition-all duration-300 text-xs sm:text-sm">
            Gabung Komunitas
          </button>
        </Link>
      </motion.div>
    </div>
  );
}

function HeroTestimonial() {
  const testimonials = [
    {
      quote: "Gue yang dulu skeptis banget, sekarang udah ngerasain sendiri gimana rasanya dapet 15 juta dalam 4 bulan. Sistemnya beneran work dan mentornya supportive banget.",
      author: "Reza Pratama",
      role: "Member since 2023",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "Pertama kali dengar soal bisnis asuransi, gue pikir ribet banget. Ternyata setelah ikut mentorship, sekarang gue bisa earning 8-12 juta per bulan cuma dari networking.",
      author: "Sari Wulandari",
      role: "Member since 2024",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "Dari yang tadinya cuma pegawai kantoran biasa, sekarang gue punya passive income yang lebih besar dari gaji. Game changer banget sistem ini!",
      author: "Andi Kurniawan",
      role: "Member since 2023",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000); // Switch every 4 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <motion.div
      className="flex flex-col items-center space-y-4 max-w-xl mx-auto mb-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 0.8, ease }}
    >
      {/* Testimonial Quote Container */}
      <motion.div 
        key={currentIndex}
        className="text-center px-6"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
      >
        <blockquote className="text-base md:text-lg text-gray-300 font-light leading-relaxed italic">
          "{currentTestimonial.quote}"
        </blockquote>
      </motion.div>
      
      {/* Author Info Container */}
      <motion.div 
        key={`author-${currentIndex}`}
        className="flex items-center space-x-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <img
          src={currentTestimonial.avatar}
          alt={currentTestimonial.author}
          className="w-8 h-8 rounded-full border border-gray-600"
        />
        <div className="text-left">
          <div className="text-gray-200 font-medium text-sm">{currentTestimonial.author}</div>
          <div className="text-gray-500 text-xs">{currentTestimonial.role}</div>
        </div>
      </motion.div>

      {/* Dots indicator */}
      <div className="flex space-x-2 mt-4">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-pink-500' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    </motion.div>
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
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden w-full min-h-screen flex items-center justify-center bg-background pt-0">
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex w-full flex-col items-center justify-center pt-0">
            {/* 1. Image Carousel at the top - in its own space */}
            <div className="w-full flex justify-center mb-6">
              <HeroImageCarousel />
            </div>
            
            {/* 2. Main content below carousel */}
            <div className="w-full flex flex-col items-center space-y-8">
              {/* Main Title and Subtitle */}
              <HeroTitles />
              
              {/* Testimonial */}
              <HeroTestimonial />
              
              {/* Video at the bottom */}
              <HeroVideo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
