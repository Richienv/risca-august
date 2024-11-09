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
import AvatarCircles from "@/components/avatar-circles";


const ease = [0.16, 1, 0.3, 1];

function HeroPill() {
  return (
    <motion.div
      className="inline-flex h-7 items-center justify-between rounded-full border border-neutral-200 bg-white/10 px-3 text-xs backdrop-blur-sm transition-all ease-in hover:cursor-pointer hover:bg-white/20 group gap-1 dark:border-neutral-800 dark:bg-black/10 dark:hover:bg-black/20"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease }}
    >
      <p
        style={{ "--shimmer-width": "100px" } as React.CSSProperties}
        className="mx-auto max-w-md text-neutral-600/80 dark:text-neutral-400/80 animate-shimmer bg-clip-text bg-[length:var(--shimmer-width)_100%] bg-no-repeat [background-position:0_0] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite] bg-gradient-to-r from-neutral-100 via-neutral-900/80 via-50% to-neutral-100 dark:from-neutral-900 dark:via-neutral-100/80 dark:to-neutral-900 inline-flex items-center justify-center"
      >
        <span>Bisnis Yang Terbukti Mencetak Income Milyaran</span>
      </p>
    </motion.div>
  );
}

function HeroTitles() {
  return (
    <div className="flex w-full max-w-5xl flex-col space-y-4 overflow-hidden pt-4">
      <motion.h1
        className="bg-gradient-to-br from-foreground from-30% to-foreground/40 bg-clip-text text-center text-4xl font-medium leading-tight tracking-tighter text-transparent sm:text-5xl md:text-6xl lg:text-7xl whitespace-normal px-4 sm:px-6 md:px-8 lg:px-10 max-w-full mx-auto"
        initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.2,
        }}
      >
        WAKTUNYA GEN Z MELESAT!
      </motion.h1>
      <motion.p
        className="mb-8 text-sm tracking-tight text-muted-foreground md:text-base text-balance text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.4,
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <span className="text-white">Ngga perlu nunggu tua buat sukses! Disini kamu bisa mulai perjalanan menuju Income Ratusan Juta - Miliaran per Bulan!</span>
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
      <div className="relative w-full max-w-4xl mt-8">
        {/* Blue gradient effects */}
        <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/30 via-blue-400/30 to-blue-300/30 rounded-xl blur-2xl animate-pulse"></div>
        <div className="absolute -inset-3 bg-gradient-to-br from-blue-600/20 to-blue-400/20 rounded-xl blur-3xl animate-pulse delay-75"></div>
        <div className="absolute -inset-3 bg-gradient-to-r from-blue-400/20 via-blue-500/20 to-blue-600/20 rounded-xl blur-2xl animate-pulse delay-150"></div>
        
        {/* Rotating gradient border */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-xl opacity-30 animate-spin-slow"></div>
        
        <ShineBorder 
          borderRadius={8} 
          borderWidth={1} 
          color={["#C0C0C0", "#FFFFFF"]} 
          className="relative z-10 w-full"
        >
          <div className="rounded-[calc(0.5rem-1px)] bg-background overflow-hidden w-full pt-[56.25%] relative">
            <iframe
              src="https://www.youtube.com/embed/Zy8219Uf28Q"
              title="Alife by Vision Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        </ShineBorder>
      </div>
      <motion.div
        className="mt-8 w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.8, ease }}
      >
        <Link href="/contact" className="w-full">
          <RainbowButton className="w-full">
            Join Our Community
          </RainbowButton>
        </Link>
        <div className="mt-6 flex flex-col items-center justify-center">
          <p className="text-xs text-muted-foreground mb-4 text-center">
          Bisnis dengan blueprint yang simple, duplicable, and sustainable, menciptakan royalti sampai 8 generasi, buat kita bisa menikmati passive income seumur hidup.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden w-full">
      <div className="absolute inset-0 -z-10 w-full h-full">
        <RetroGrid className="absolute top-0 left-0 right-0 bottom-0 w-full h-full" />
      </div>
      <Particles
        className="absolute inset-0 -z-10"
        quantity={300}
        staticity={20}
        color="#8b5cf6"
      />
      <div className="relative py-8 sm:py-12 md:py-16 w-full">
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
