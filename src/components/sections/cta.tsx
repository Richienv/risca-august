"use client";

import Section from "@/components/section";
import Link from "next/link";
import { GradientBlur } from "@/components/ui/gradient-blur";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export default function CtaSection() {
  const cardRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const z = useTransform(scrollYProgress, [0, 0.5], [-100, 0]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const { width, height, left, top } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const centerX = width / 2;
    const centerY = height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (card) {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    }
  };

  return (
    <Section className="py-1">
      <GradientBlur
        className="bottom-[10%] right-[10%]" 
        size="large" 
        position="right" 
        intensity="high" 
      />
      <GradientBlur
        className="bottom-[10%] right-[10%]" 
        size="large" 
        position="left" 
        intensity="high" 
      />

      <motion.div
        ref={sectionRef}
        style={{ 
          perspective: 1000,
          opacity,
          scale,
          rotateX,
          z,
          transformStyle: "preserve-3d",
        }}
        initial={{ 
          opacity: 0.3,
          rotateX: 15,
          z: -100,
          scale: 0.9
        }}
        animate={{ 
          opacity: 1,
          rotateX: 0,
          z: 0,
          scale: 1
        }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 100
        }}
      >
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "w-full max-w-4xl mx-auto relative rounded-xl overflow-hidden",
            "bg-gradient-to-br from-blue-950 via-purple-900 to-blue-900",
            "before:absolute before:inset-0",
            "before:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.25),transparent_70%)]",
            "after:absolute after:inset-0",
            "after:bg-[radial-gradient(farthest-corner_at_50%_50%,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0.1)_50%,transparent_100%)]",
            "shadow-[0_8px_32px_rgb(0_0_0/0.3),inset_0_2px_4px_rgba(255,255,255,0.3)]",
            "transition-all duration-300 ease-out",
            "hover:shadow-[0_16px_48px_rgb(0_0_0/0.4),inset_0_2px_6px_rgba(255,255,255,0.4)]",
            "[&>div]:relative [&>div]:z-10",
            "metallic-glow"
          )}
        >
          <motion.div 
            className="rounded-xl py-11 px-6 text-center backdrop-blur-[2px]"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <motion.h2 
              className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3 text-white"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Jangan Biarkan Rasa Takut Mendikte Masa Depanmu!
            </motion.h2>
            <motion.blockquote 
              className="text-sm md:text-base lg:text-lg italic text-slate-200 mb-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              The best time to plant a tree was 20 years ago. The second best time is now.
            </motion.blockquote>
          </motion.div>
        </div>

        <motion.div 
          className="mt-8 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link href="/contact">
            <RainbowButton 
              className="text-sm md:text-base font-semibold px-6 py-3"
            >
              Join Now
            </RainbowButton>
          </Link>
        </motion.div>
      </motion.div>
    </Section>
  );
}
