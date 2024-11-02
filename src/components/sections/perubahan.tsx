"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { BlueGradientSeparator } from "@/components/blue-gradient-separator";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const alifeBenefits = [
  {
    image: "/mdit.jpeg",
    title: "Community Event 1",
  },
  {
    image: "/lunch.jpeg",
    title: "Community Event 2",
  },
  {
    image: "/event.jpeg",
    title: "Community Event 3",
  },
  {
    image: "/welcome.jpeg",
    title: "Community Event 4",
  },
  {
    image: "/baloon.jpeg",
    title: "Community Event 4",
  },
];

export default function WhatIsAlifeSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const handlePreviousGrid = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNextGrid = () => {
    setStartIndex((prev) => 
      Math.min(prev + 1, alifeBenefits.length - visibleCount)
    );
  };

  const visibleBenefits = alifeBenefits.slice(startIndex, startIndex + visibleCount);

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

          {/* Bottom Grid with Navigation */}
          <div className="relative">
            {/* Thumbnails Container */}
            <div className="overflow-x-auto scrollbar-hide -mx-4 px-4">
              <div className="flex gap-2 sm:gap-4">
                {visibleBenefits.map((item, index) => (
                  <div
                    key={startIndex + index}
                    className={`relative flex-shrink-0 w-[calc(33.333%-0.5rem)] min-w-[180px] sm:min-w-[220px] aspect-[4/3] 
                      cursor-pointer overflow-hidden rounded-lg transition-all
                      ${currentIndex === startIndex + index ? 'ring-2 ring-blue-500' : 'opacity-80 hover:opacity-100'}`}
                    onClick={() => setCurrentIndex(startIndex + index)}
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

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between pointer-events-none">
              <button
                onClick={handlePreviousGrid}
                className={`p-1.5 sm:p-2 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 
                  transition-colors pointer-events-auto transform -translate-x-1/2
                  ${startIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
                disabled={startIndex === 0}
                aria-label="Previous images"
              >
                <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </button>
              <button
                onClick={handleNextGrid}
                className={`p-1.5 sm:p-2 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 
                  transition-colors pointer-events-auto transform translate-x-1/2
                  ${startIndex >= alifeBenefits.length - visibleCount ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
                disabled={startIndex >= alifeBenefits.length - visibleCount}
                aria-label="Next images"
              >
                <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </button>
            </div>
          </div>

          <motion.p 
            className="text-sm sm:text-md max-w-3xl mx-auto mt-8 sm:mt-12 text-center font-sans leading-relaxed"
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
            Kami membuka kesempatan untuk kalian yang ingin meraih kebebasan dan pertumbuhan finansial Kalau kamu ambisius tapi masih ragu untuk memulai, this is your moment!
          </motion.p>
          <BlueGradientSeparator />
        </div>
      </div>
    </div>
  );
}
