"use client";

import React from 'react';
import Section from "@/components/section";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import Link from "next/link";
import ShinyButton from "@/components/ui/shiny-button";

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
    feature: "Peluang Bisnis",
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
    <Section className="py-20 relative overflow-hidden">
      {/* Radial gradient blurs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-2/3 h-2/3 bg-gradient-radial from-blue-500/20 to-transparent opacity-60 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gradient-radial from-purple-500/20 to-transparent opacity-60 blur-[100px] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-gradient-radial from-red-500/20 to-transparent opacity-60 blur-[100px] rounded-full"></div>
      </div>

      <div className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-4">Bandingkan Peluangmu</h2>
          <hr className="w-24 mx-auto border-t-2 border-primary mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Lihat perbedaan antara pekerjaan 9-5 biasa dengan peluang bisnis di Alife
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto bg-background/80 backdrop-blur-sm rounded-lg p-6">
          <div className="font-semibold">Fitur</div>
          <div className="font-semibold text-center">Pekerjaan 9-5</div>
          <div className="font-semibold text-center">Bisnis Alife</div>
          {comparisonData.map((item, index) => (
            <React.Fragment key={index}>
              <div className="py-2">{item.feature}</div>
              <div className="flex justify-center items-center">
                {item.job ? <Check className="text-green-500" /> : <X className="text-red-500" />}
              </div>
              <div className="flex justify-center items-center">
                {item.alife ? <Check className="text-green-500" /> : <X className="text-red-500" />}
              </div>
            </React.Fragment>
          ))}
        </div>
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/join">
            <ShinyButton className="px-8 py-3 text-lg bg-gradient-to-r from-red-700 to-blue-800 text-white hover:from-red-800 hover:to-blue-900">
              Mulai Peluang Bisnismu Sekarang
            </ShinyButton>
          </Link>
        </motion.div>
      </div>
    </Section>
  );
}
