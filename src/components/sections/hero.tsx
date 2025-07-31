"use client";

import { motion } from "framer-motion";

import { Icons } from "@/components/icons";
import { Spotlight } from "@/components/spotlight-new";
import Link from "next/link";
import { Play } from "lucide-react";


const ease = [0.16, 1, 0.3, 1];

function HeroPill() {
  return (
    <motion.div
      className="inline-flex h-7 items-center justify-between rounded-full border border-primary/20 bg-gradient-aura-subtle backdrop-blur-sm transition-all ease-in hover:cursor-pointer hover:bg-primary/10 group gap-1 aura-border hover:aura-glow"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease }}
      whileHover={{ scale: 1.05 }}
    >
      <p className="mx-auto max-w-md text-foreground/90 shimmer px-3">
        <span>Premium Business Templates & Solutions</span>
      </p>
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
          ELEVATE YOUR BUSINESS
        </motion.h1>
      </motion.div>
      <motion.p
        className="mb-8 text-lg tracking-tight text-muted-foreground md:text-xl text-balance text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.4,
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <span className="text-foreground/80">Transform your vision into reality with our premium business templates and professional solutions designed for modern entrepreneurs.</span>
      </motion.p>
    </div>
  );
}

function HeroCTA() {
  return (
    <>
      <motion.div
        className="mx-auto mt-6 flex w-full max-w-2xl flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease }}
      >
        <Link href="/contact" className="w-full sm:w-auto">
          <motion.button
            className="w-full sm:w-auto bg-gradient-to-r from-gradient-start to-gradient-end text-white px-8 py-3 rounded-lg font-semibold aura-glow hover:aura-glow-intense hover:scale-110 transition-all duration-300 shimmer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Started Today
          </motion.button>
        </Link>
      </motion.div>
      <motion.p
        className="mt-5 text-sm text-muted-foreground text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.8 }}
      >
        Join thousands of successful entrepreneurs
      </motion.p>
    </>
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
      {/* Spotlight Effects */}
      <Spotlight 
        gradientFirst={`radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsl(var(--gradient-start) / 0.12) 0%, hsl(var(--gradient-mid) / 0.06) 50%, hsl(var(--gradient-end) / 0) 80%)`}
        gradientSecond={`radial-gradient(50% 50% at 50% 50%, hsl(var(--gradient-start) / 0.08) 0%, hsl(var(--gradient-mid) / 0.04) 80%, transparent 100%)`}
        gradientThird={`radial-gradient(50% 50% at 50% 50%, hsl(var(--gradient-end) / 0.06) 0%, hsl(var(--gradient-start) / 0.03) 80%, transparent 100%)`}
        translateY={-250}
        width={480}
        height={1200}
        smallWidth={200}
        duration={8}
        xOffset={80}
      />
      
      {/* Main Content - Centered */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex w-full flex-col items-center justify-center space-y-8">
            <HeroPill />
            <HeroTitles />
            <HeroVideo />
            <motion.div
              className="w-full max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8, ease }}
            >
              <HeroCTA />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
