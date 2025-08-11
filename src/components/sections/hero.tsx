"use client";

import { motion } from "framer-motion";

import { Icons } from "@/components/icons";
import { Spotlight } from "@/components/spotlight-new";
import { AvatarCircles } from "@/components/head-avatars";
import Link from "next/link";
import { Play } from "lucide-react";


const ease = [0.16, 1, 0.3, 1];

function HeroLogo() {
  return (
    <motion.div
      className="absolute top-6 left-6 z-20"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease }}
    >
      <div className="text-white font-bold text-2xl tracking-tight">
        CINOM
      </div>
    </motion.div>
  );
}

function HeroPill() {
  return (
    <motion.div
      className="inline-flex h-6 items-center justify-between rounded-full border border-primary/20 bg-gradient-aura-subtle backdrop-blur-sm transition-all ease-in hover:cursor-pointer hover:bg-primary/10 group gap-1 aura-border hover:aura-glow"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease }}
      whileHover={{ scale: 1.05 }}
    >
    </motion.div>
  );
}

function HeroTitles() {
  return (
    <div className="flex w-full max-w-5xl flex-col space-y-4 overflow-hidden pt-4">
      <motion.div
        initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.2,
        }}
      >
        <motion.h1
          className="text-center text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl whitespace-normal px-4 sm:px-6 md:px-8 lg:px-10 max-w-full mx-auto text-white relative"
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
          JANGAN SAMPAI KAMU KETINGGALAN LAGI
        </motion.h1>
      </motion.div>
      
      <motion.p
        className="mb-6 text-lg tracking-tight text-muted-foreground md:text-xl text-balance text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.4,
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <span className="text-foreground/80">Udah capek liat temen-temen kamu pada sukses sementara kamu masih di tempat yang sama? Sekarang udah sadar skeptis gabawa kamu kemana mana?</span>
      </motion.p>

      {/* CTA Button moved here - below subheading */}
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8, ease }}
      >
        <Link href="/contact">
          <button className="bg-gradient-to-r from-pink-600 to-pink-500 text-white px-8 py-4 rounded-full font-medium hover:from-pink-500 hover:to-pink-400 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-pink-500/25 text-sm sm:text-lg tracking-wide">
            Saya Mau Perubahan
          </button>
        </Link>
      </motion.div>
      

    </div>
  );
}

function HeroTestimonial() {
  return (
    <motion.div
      className="flex flex-col items-center space-y-8 max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.0, duration: 0.8, ease }}
    >
      {/* Testimonial Quote Container */}
      <div className="text-center px-6">
        <blockquote className="text-lg md:text-xl text-white/90 font-light leading-relaxed italic">
          "Gue yang dulu skeptis banget, sekarang udah ngerasain sendiri gimana rasanya dapet 15 juta dalam 4 bulan. Sistemnya beneran work dan mentornya supportive banget."
        </blockquote>
      </div>
      
      {/* Gradient Line Separator */}
      <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      
      {/* Author Info Container */}
      <div className="flex items-center space-x-4">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
          alt="Reza Pratama"
          className="w-12 h-12 rounded-full border-2 border-white/20"
        />
        <div className="text-left">
          <div className="text-white font-medium">Reza Pratama</div>
          <div className="text-white/60 text-sm">Member since 2023</div>
        </div>
      </div>
    </motion.div>
  );
}

function HeroAvatars() {
  const avatarUrls = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face", 
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
  ];

  return (
    <motion.div
      className="flex flex-col items-center space-y-3 mt-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.4, duration: 0.8, ease }}
    >
      {/* Smaller Avatar Circles */}
      <div className="transform scale-75">
        <AvatarCircles
          avatarUrls={avatarUrls}
          numPeople={1995}
          className="justify-center"
        />
      </div>
      <p className="text-xs text-white/50 text-center">
        Join 2000+ Gen-Z yang udah buktiin sendiri
      </p>
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
      <div className="relative w-full max-w-4xl mt-12">
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
    <section id="hero" className="relative overflow-hidden w-full min-h-screen flex items-center justify-center bg-background">
      {/* Logo in top left */}
      <HeroLogo />
      
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
          <div className="relative flex w-full flex-col items-center justify-center space-y-12">
            <HeroPill />
            <HeroTitles />
            <HeroVideo />
            <HeroTestimonial />
            <HeroAvatars />
          </div>
        </div>
      </div>
    </section>
  );
}
