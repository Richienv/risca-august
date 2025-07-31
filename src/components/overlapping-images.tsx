"use client";

import { useState, useEffect } from 'react';

export default function OverlappingImages({ solutionIndex }: { solutionIndex: number }) {
  const [topImageIndex, setTopImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const imagePairs = [
    // Train to Sell
    {
      image1: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80&fit=crop&crop=faces",
      image2: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&q=80&fit=crop&crop=faces",
    },
    // Get Client
    {
      image1: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&q=80&fit=crop&crop=faces",
      image2: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&q=80&fit=crop&crop=faces",
    },
    // Client Relationship
    {
      image1: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=400&q=80&fit=crop&crop=faces",
      image2: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80&fit=crop&crop=faces",
    },
    // Handle Objection
    {
      image1: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80&fit=crop&crop=faces",
      image2: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&q=80&fit=crop&crop=faces",
    },
    // Financial Planning
    {
      image1: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&q=80&fit=crop&crop=faces",
      image2: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&fit=crop&crop=faces",
    },
  ];

  const pair = imagePairs[solutionIndex] || imagePairs[0];

  // Continuous cycling effect
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setTopImageIndex(prev => prev === 0 ? 1 : 0);
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div 
      className="relative w-full h-full flex items-center justify-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* First Image - with dynamic z-index and enhanced detachment */}
      <div 
        className={`absolute w-32 h-44 sm:w-40 sm:h-56 lg:w-48 lg:h-64 rounded-lg overflow-hidden transform transition-all duration-700 ease-in-out ${
          topImageIndex === 0 
            ? '-rotate-6 translate-x-6 translate-y-2 sm:translate-x-8 sm:translate-y-3 z-30 scale-105 shadow-2xl' 
            : '-rotate-3 translate-x-3 translate-y-1 sm:translate-x-4 sm:translate-y-2 z-10 scale-100 shadow-lg'
        }`}
        style={{
          background: `url(${pair.image1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          boxShadow: topImageIndex === 0 
            ? '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 30px rgba(239, 68, 68, 0.2)'
            : '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
        }}
      >
        {/* Enhanced grain/film overlay */}
        <div 
          className="absolute inset-0 opacity-20 mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        ></div>
        {/* Enhanced vignette with red tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/30"></div>
        {/* Glow effect when on top */}
        {topImageIndex === 0 && (
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-transparent opacity-40"></div>
        )}
      </div>

      {/* Second Image - with dynamic z-index and enhanced detachment */}
      <div 
        className={`absolute w-32 h-44 sm:w-40 sm:h-56 lg:w-48 lg:h-64 rounded-lg overflow-hidden transform transition-all duration-700 ease-in-out ${
          topImageIndex === 1 
            ? 'rotate-6 -translate-x-6 -translate-y-2 sm:-translate-x-8 sm:-translate-y-3 z-30 scale-105 shadow-2xl' 
            : 'rotate-2 -translate-x-3 -translate-y-1 sm:-translate-x-4 sm:-translate-y-2 z-20 scale-100 shadow-lg'
        }`}
        style={{
          background: `url(${pair.image2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          boxShadow: topImageIndex === 1 
            ? '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 30px rgba(239, 68, 68, 0.2)'
            : '0 15px 30px -8px rgba(0, 0, 0, 0.4)',
        }}
      >
        {/* Enhanced grain/film overlay */}
        <div 
          className="absolute inset-0 opacity-20 mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        ></div>
        {/* Enhanced vignette with red tint */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/30"></div>
        {/* Glow effect when on top */}
        {topImageIndex === 1 && (
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-transparent opacity-40"></div>
        )}
      </div>

      {/* Enhanced ambient shadow behind images */}
      <div className="absolute inset-0 bg-black/10 rounded-xl blur-2xl scale-125 -z-10 transition-all duration-700"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 -z-5">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-red-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-red-400/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-0.5 h-0.5 bg-red-400/40 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>
    </div>
  );
}