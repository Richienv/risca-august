"use client";

import { motion } from "framer-motion";

import { Icons } from "@/components/icons";
import HeroVideoDialog from "@/components/magicui/hero-video";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { RainbowButton } from "@/components/ui/rainbow-button";
import Particles from "@/components/ui/particles";
import RetroGrid from "@/components/ui/retro-grid";
import ShineBorder from "@/components/ui/shine-border";

const ease = [0.16, 1, 0.3, 1];

function HeroPill() {
  return (
    <motion.div
      className="inline-flex h-7 items-center justify-between rounded-full border border-neutral-200 bg-white/10 px-3 text-xs backdrop-blur-sm transition-all ease-in hover:cursor-pointer hover:bg-white/20 group gap-1 dark:border-neutral-800 dark:bg-black/10 dark:hover:bg-black/20"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease }}
    >
      <Link href="/blog/introducing-alife-by-vision" className="flex items-center">
        <p
          style={{ "--shimmer-width": "100px" } as React.CSSProperties}
          className="mx-auto max-w-md text-neutral-600/80 dark:text-neutral-400/80 animate-shimmer bg-clip-text bg-[length:var(--shimmer-width)_100%] bg-no-repeat [background-position:0_0] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite] bg-gradient-to-r from-neutral-100 via-neutral-900/80 via-50% to-neutral-100 dark:from-neutral-900 dark:via-neutral-100/80 dark:to-neutral-900 inline-flex items-center justify-center"
        >
          <span>✨ Introducing Alife by Vision</span>
        </p>
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
        >
          <path
            d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    </motion.div>
  );
}

function HeroTitles() {
  return (
    <div className="flex w-full max-w-4xl flex-col space-y-4 overflow-hidden pt-8">
      <motion.h1
        className="bg-gradient-to-br from-foreground from-30% to-foreground/40 bg-clip-text text-center text-4xl font-medium leading-tight tracking-tighter text-transparent sm:text-5xl md:text-6xl lg:text-7xl whitespace-nowrap"
        initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.2,
        }}
      >
        Sukses di Usia Muda!
      </motion.h1>
      <motion.p
        className="mb-12 text-base tracking-tight text-muted-foreground md:text-lg text-balance text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.4,
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        Your Life, Your Way. Bukan cuma kerja 9-5, di sini kamu bisa bangun bisnismu sendiri sambil membantu melindungi orang-orang terdekatmu dengan asuransi.
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
        <Link href="/join" className="w-full sm:w-auto">
          <RainbowButton className="w-full sm:w-auto">
            Join Our Community
          </RainbowButton>
        </Link>
      </motion.div>
      <motion.p
        className="mt-5 text-sm text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.8 }}
      >
       
      </motion.p>
    </>
  );
}

function HeroImage() {
  return (
    <motion.div
      className="relative mx-auto flex w-full flex-col items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 1, ease }}
    >
      <div className="relative w-full max-w-5xl mt-16">
        {/* Blue glow effect on top */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-full h-40 bg-blue-500 opacity-30 blur-[100px] rounded-full"></div>
        
        <ShineBorder 
          borderRadius={16} 
          borderWidth={1} 
          color={["#3b82f6", "#10b981"]} 
          className="relative z-10 w-full"
        >
          <div className="rounded-[calc(1.5rem-1px)] bg-background overflow-hidden w-full pt-[56.25%] relative">
            <iframe
              src="https://www.youtube.com/embed/LO4LQ6aaGUk?si=qD74pu3ZHe4sPr4P&autoplay=1&mute=1&start=30"
              title="Alife by Vision Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        </ShineBorder>
        
        {/* Radial gradient blur below the video */}
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-full h-80 bg-gradient-radial from-primary/30 to-transparent opacity-50 blur-[100px] rounded-full"></div>
      </div>
      <motion.div
        className="mt-8 w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.8, ease }}
      >
        <Link href="/join" className="w-full">
          <RainbowButton className="w-full">
            Join Our Community
          </RainbowButton>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default function Hero2() {
  return (
    <section id="hero" className="relative overflow-hidden w-full">
      <div className="absolute inset-0 -z-10 w-full h-full">
        <RetroGrid className="absolute top-0 left-0 right-0 bottom-0 w-full h-full" />
      </div>
      <Particles
        className="absolute inset-0 -z-10"
        quantity={300}  // Increased from 200 to 300
        staticity={20}
        color="#8b5cf6"
      />
      <div className="relative py-20 sm:py-24 md:py-28 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex w-full flex-col items-center justify-start">
            <HeroPill />
            <HeroTitles />
            <HeroImage />
          </div>
        </div>
      </div>
    </section>
  );
}
