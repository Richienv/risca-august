"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={`relative sticky top-0 z-50 py-4 transition-all duration-300 w-full ${
        scrolled 
          ? "bg-background/80 backdrop-blur-xl aura-border shadow-lg" 
          : "bg-gradient-aura-subtle backdrop-blur-sm"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex justify-center items-center container mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          title="brand-logo"
          className="flex items-center justify-center group"
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gradient-start/20 to-gradient-end/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 aura-glow"></div>
            <Image 
              src="/Risca_logo.png" 
              alt="Header Logo" 
              width={80} 
              height={80} 
              className="w-auto h-12 relative z-10 transition-all duration-300 group-hover:brightness-110" 
            />
          </motion.div>
          <motion.span
            className="ml-3 text-xl font-bold bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end bg-clip-text text-transparent"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Header
          </motion.span>
        </Link>
      </div>
      
      {/* Gradient separator with aura effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gradient-mid/30 to-transparent"></div>
    </motion.header>
  );
}
