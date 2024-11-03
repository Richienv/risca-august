"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BlueGradientSeparator } from "@/components/blue-gradient-separator";
import { useState } from "react";

const alifeBenefits = [
  {
    image: "/mdit.jpeg",
    title: "Empowerment",
  },
  {
    image: "/lunch.jpeg",
    title: "Connection",
  },
  {
    image: "/event.jpeg",
    title: "Experience",
  },
];

export default function WhatIsAlifeSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="relative overflow-hidden w-full">
      <div className="relative z-10 py-8">
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold mb-4">
            We welcome you, to join our community!
          </h2>
          <div className="w-40 h-0.5 mx-auto bg-gradient-to-r from-blue-400 to-blue-600"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {/* Featured Image Display */}
          <div className="relative">
            <div className="aspect-[16/9] w-full relative overflow-hidden rounded-xl">
              <Image
                src={alifeBenefits[currentIndex].image}
                alt={alifeBenefits[currentIndex].title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 ease-in-out"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  {alifeBenefits[currentIndex].title}
                </h3>
              </div>
            </div>
          </div>

          {/* Gradient Separator */}
          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
            </div>
          </div>

          {/* Bottom Grid - Fixed 3 items */}
          <div className="relative">
            <div className="grid grid-cols-3 gap-4">
              {alifeBenefits.map((item, index) => (
                <div
                  key={index}
                  className={`relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg transition-all
                    ${currentIndex === index ? 'ring-2 ring-blue-500' : 'opacity-80 hover:opacity-100'}`}
                  onClick={() => setCurrentIndex(index)}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2 sm:p-3">
                    <h4 className="text-xs sm:text-sm font-medium text-white">
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.p 
            className="text-md md:text-md max-w-3xl mx-auto mt-8 sm:mt-12 text-center font-sans leading-relaxed"
            style={{
              background: "linear-gradient(to right, #ffffff, #e0e0e0)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <BlueGradientSeparator />
            Bergabunglah dengan success team kami untuk unleash your true potential! Kami akan membimbing kamu membangun personal brand dan bisnis yang sustainable. Ratusan orang sudah berhasil, now it's your turn to shine! Don't miss out on this life-changing opportunity - kamu pasti bisa achieve the same success as us! 🚀
          </motion.p>
          <BlueGradientSeparator />
        </div>
      </div>
    </div>
  );
}
