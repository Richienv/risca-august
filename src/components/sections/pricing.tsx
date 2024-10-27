"use client";

import React from 'react';
import Section from "@/components/section";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import Link from "next/link";
import ShinyButton from "@/components/ui/shiny-button";
import GridPattern from "@/components/ui/grid-pattern";
import ShineBorder from "@/components/ui/shine-border";
import { GradientBlur } from "@/components/ui/gradient-blur";


const comparisonData = [
  {
    feature: "Kebebasan Waktu",
    job: false,
    alife: true,
  },
  {
    feature: "Potensi Penghasilan Tak Terbatas",
    job: false,
    alife: true,
  },
  {
    feature: "Pengembangan Diri",
    job: false,
    alife: true,
  },
  {
    feature: "Networking Luas",
    job: false,
    alife: true,
  },
  {
    feature: "Personal Growth",
    job: false,
    alife: true,
  },
  {
    feature: "Jadwal Kerja Fleksibel",
    job: false,
    alife: true,
  },
];

export default function ComparisonSection() {
  return (
    
    <Section className="py-1 relative overflow-hidden">
       <GradientBlur
          className="bottom-[10%] right-[10%]" 
          size="large" 
          position="right" 
          intensity="high" 
        />

        <GradientBlur
          className="top-[30%] left-[10%]" 
          size="large" 
          position="right" 
          intensity="high" 
        /> 
      {/* Grid Pattern Background */}
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        strokeDasharray="8 4"
        className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-200 dark:fill-neutral-800 dark:stroke-neutral-700 [mask-image:radial-gradient(white,transparent_85%)]"
      />

      {/* Radial gradient blurs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-2/3 h-2/3 bg-gradient-radial from-blue-500/20 to-transparent opacity-60 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gradient-radial from-purple-500/20 to-transparent opacity-60 blur-[100px] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-gradient-radial from-red-500/20 to-transparent opacity-60 blur-[100px] rounded-full"></div>
      </div>

      <div className="relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3">Bandingkan Peluangmu</h2>
          <hr className="w-20 md:w-24 mx-auto border-t-2 border-primary mb-3" />
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4 md:px-0">
            Lihat perbedaan antara pekerjaan 9-5 biasa dengan peluang bisnis di Alife
          </p>
        </div>
        <ShineBorder borderRadius={16} borderWidth={1} color={["#ffffff", "#e0e0e0"]} className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-4 bg-background/40 backdrop-blur-md rounded-lg p-4 md:p-6">
            <div className="text-sm md:text-base font-semibold">Fitur</div>
            <div className="text-sm md:text-base font-semibold text-center">9-5</div>
            <div className="text-sm md:text-base font-semibold text-center">Bisnis</div>
            {comparisonData.map((item, index) => (
              <React.Fragment key={index}>
                <div className="text-xs md:text-sm py-2">{item.feature}</div>
                <div className="flex justify-center items-center">
                  {item.job ? <Check className="text-green-500 h-4 w-4 md:h-5 md:w-5" /> : <X className="text-red-500 h-4 w-4 md:h-5 md:w-5" />}
                </div>
                <div className="flex justify-center items-center">
                  {item.alife ? <Check className="text-green-500 h-4 w-4 md:h-5 md:w-5" /> : <X className="text-red-500 h-4 w-4 md:h-5 md:w-5" />}
                </div>
              </React.Fragment>
            ))}
          </div>
        </ShineBorder>
        <motion.div 
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/contact">
            <ShinyButton className="px-6 py-2 text-sm md:text-base bg-gradient-to-r from-red-700 to-blue-800 text-white hover:from-red-800 hover:to-blue-900">
              Mulai Peluang Bisnismu Sekarang
            </ShinyButton>
          </Link>
        </motion.div>
      </div>
    </Section>
  );
}
