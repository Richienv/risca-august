"use client";

import { useState } from 'react';
import { motion } from "framer-motion";
import { BorderBeam } from "@/components/magicui/border-beam";
import { GradientBlur } from "@/components/ui/gradient-blur";

const testimonial = {
  name: "Founder Alife",
  videoUrl: "https://youtu.be/nF1lLyIv0HM",
  quote: "Jangan percaya omongan! Lihat sendiri aja testimony mereka yang sudah mengubah hidupnya.",
};

function TestimonialCard({ name, videoUrl, quote }: { 
  name: string; 
  videoUrl: string;
  quote: string;
}) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    const centerX = width / 2;
    const centerY = height / 2;
    const rotateX = ((y - centerY) / centerY) * -10; // Reduced tilt amount
    const rotateY = ((x - centerX) / centerX) * 10;
    setRotateX(rotateX);
    setRotateY(rotateY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      className="relative w-full"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px',
      }}
    >
      {/* Card container with metallic gradient background */}
      <motion.div
        className="relative w-full overflow-hidden rounded-xl border border-white/5 shadow-2xl"
        style={{
          background: `
            linear-gradient(135deg, 
              rgba(20, 20, 20, 0.98) 0%,
              rgba(12, 12, 12, 0.99) 50%,
              rgba(8, 8, 8, 1) 100%
            )`,
          boxShadow: `
            0 0 0 1px rgba(255, 255, 255, 0.03),
            0 4px 6px -1px rgba(0, 0, 0, 0.3),
            0 2px 4px -1px rgba(0, 0, 0, 0.2),
            inset 0 1px 1px rgba(255, 255, 255, 0.03)
          `,
          rotateX,
          rotateY,
          transition: 'transform 0.2s ease-out',
        }}
      >
        <BorderBeam colorFrom="#333333" colorTo="#111111" />
        
        {/* Radial blur effects */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-800/30 via-purple-800/30 to-purple-900/30 rounded-xl blur-2xl animate-pulse"></div>
        <div className="absolute -inset-4 bg-gradient-to-br from-purple-900/20 to-blue-800/20 rounded-xl blur-3xl animate-pulse delay-75"></div>
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-800/20 via-purple-900/20 to-blue-900/20 rounded-xl blur-2xl animate-pulse delay-150"></div>
        
        <div className="flex flex-col w-full backdrop-blur-sm">
          {/* Video section first */}
          <div className="relative p-4">
            <div className="aspect-video w-full relative z-10">
              <iframe
                src={videoUrl.replace('youtu.be/', 'youtube.com/embed/')}
                title={`${name}'s testimonial`}
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-xl shadow-2xl ring-1 ring-white/10"
              ></iframe>
            </div>
          </div>

          {/* Quote section */}
          <div className="relative p-6 text-center">
            <blockquote className="relative mb-6">
              <div className='absolute -top-4 -left-2 text-4xl text-white/20 font-serif'>&ldquo;</div>
              <p className="text-lg md:text-xl italic text-white font-light relative z-10 px-4">
                {quote}
              </p>
              <div className='absolute -bottom-4 -right-2 text-4xl text-white/20 font-serif rotate-180'>&rdquo;</div>
            </blockquote>

            {/* Name at the bottom */}
            <div className="text-center">
              <p className="text-sm text-white/80">{name}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function TestimonialSection() {
  return (
    <div className="relative overflow-hidden w-full">
      {/* Gradient Blurs */}
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

      {/* Radial gradient blurs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-2/3 h-2/3 bg-gradient-radial from-blue-500/20 to-transparent opacity-60 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gradient-radial from-purple-500/20 to-transparent opacity-60 blur-[100px] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-gradient-radial from-red-500/20 to-transparent opacity-60 blur-[100px] rounded-full"></div>
      </div>
      
      <div className="relative z-10 py-16 md:py-24">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 md:mb-3">Kata Kata Cici Cici Miliarder Viral!</h2>
          <div className="w-20 h-0.5 mx-auto bg-gradient-to-r from-blue-400 to-blue-600 mb-3 md:mb-4"></div>
        </div>
        
        {/* Video container with increased max width */}
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <TestimonialCard {...testimonial} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
