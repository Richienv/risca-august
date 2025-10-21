"use client";

import React from 'react';
import Link from 'next/link';
import { LiquidGlassContainer } from '@/components/ui/liquid-glass-container';
import { LiquidButton } from '@/components/ui/liquid-glass-button';

const ThreeSectionLayout = () => {
  return (
    <section className="relative w-full py-16 md:py-24">
      {/* Overlay for slight dimming effect */}
      <div className="absolute inset-0 bg-black/40 z-10 w-full" />
      
      <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8">
        {/* Header with Button */}
        <div className="flex justify-start items-center gap-8 mb-8">

        </div>

        {/* Apple-style unified section */}
        <LiquidGlassContainer 
          className="w-full rounded-3xl overflow-hidden"
          colorOverlay="none"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          
          {/* Left Section - Benefits */}
          <Link href="/benefits" className="block">
            <div className="flex flex-col h-[700px] md:h-[750px] hover:brightness-110 transition-all duration-500 p-10 md:p-12 group cursor-pointer relative border-r border-white/10 lg:border-r lg:border-white/10">
              
              {/* Main Heading with Pink Gradient */}
              <div className="text-center mt-6 mb-5">
                <h3 
                  className="text-2xl md:text-3xl font-bold leading-tight tracking-tighter"
                  style={{
                    background: 'linear-gradient(90deg, #ffffff 0%, #ec4899 50%, #ffffff 100%)',
                    backgroundSize: '200% 100%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    animation: 'gradient-shift 3s linear infinite'
                  }}
                >
                  Mau Join? Ada Bonus Ngga?
                </h3>
              </div>

              {/* Subheading */}
              <div className="text-center mb-6">
                <p className="text-white/80 text-sm md:text-base">
                  Dapatkan reward & benefit eksklusif
                </p>
              </div>

              {/* Button */}
              <div className="text-center mb-8">
                <LiquidButton size="lg" className="text-white font-semibold">
                  Pelajari Lebih Lanjut
                </LiquidButton>
              </div>

              {/* Supporting Image - Reaches Bottom Edge */}
              <div className="flex-1 flex items-end justify-center relative overflow-hidden -mb-6 md:-mb-8">
                <div className="w-[400px] h-[700px] relative">
                  <img 
                    src="/images/new2.png" 
                    alt="Orang yang merayakan dengan bonus dan penghargaan" 
                    className="w-full h-full object-contain object-bottom"
                  />
                </div>
              </div>

            </div>
          </Link>

          {/* Middle Section - Solution */}
          <Link href="/solution" className="block">
            <div className="flex flex-col h-[700px] md:h-[750px] hover:brightness-110 transition-all duration-500 p-10 md:p-12 group cursor-pointer relative border-r border-white/10 lg:border-r lg:border-white/10">
              
              {/* Main Heading with Pink Gradient */}
              <div className="text-center mt-6 mb-5">
                <h3 
                  className="text-2xl md:text-3xl font-bold leading-tight tracking-tighter"
                  style={{
                    background: 'linear-gradient(90deg, #ffffff 0%, #ec4899 50%, #ffffff 100%)',
                    backgroundSize: '200% 100%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    animation: 'gradient-shift 3s linear infinite'
                  }}
                >
                  Kerjaannya Gimana?
                </h3>
              </div>

              {/* Subheading */}
              <div className="text-center mb-6">
                <p className="text-white/80 text-sm md:text-base">
                  Sistem kerja fleksibel & mentoring
                </p>
              </div>

              {/* Button */}
              <div className="text-center mb-8">
                <LiquidButton size="lg" className="text-white font-semibold">
                  Lihat Sistem Kerja
                </LiquidButton>
              </div>

              {/* Supporting Image - Reaches Bottom Edge */}
              <div className="flex-1 flex items-end justify-center relative overflow-hidden -mb-6 md:-mb-8">
                <div className="w-[400px] h-[700px] relative">
                  <img 
                    src="/images/new3.png" 
                    alt="Orang-orang bekerja dan berkolaborasi" 
                    className="w-full h-full object-contain object-bottom"
                  />
                </div>
              </div>

            </div>
          </Link>

          {/* Right Section - Income Breakdown */}
          <Link href="/income-breakdown" className="block">
            <div className="flex flex-col h-[700px] md:h-[750px] hover:brightness-110 transition-all duration-500 p-10 md:p-12 group cursor-pointer relative">
              
              {/* Main Heading with Pink Gradient */}
              <div className="text-center mt-6 mb-5">
                <h3 
                  className="text-2xl md:text-3xl font-bold leading-tight tracking-tighter"
                  style={{
                    background: 'linear-gradient(90deg, #ffffff 0%, #ec4899 50%, #ffffff 100%)',
                    backgroundSize: '200% 100%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    animation: 'gradient-shift 3s linear infinite'
                  }}
                >
                  Hasil Income Gimana?
                </h3>
              </div>

              {/* Subheading */}
              <div className="text-center mb-6">
                <p className="text-white/80 text-sm md:text-base">
                  Kalkulasi income real & tier system
                </p>
              </div>

              {/* Button */}
              <div className="text-center mb-8">
                <LiquidButton size="lg" className="text-white font-semibold">
                  Lihat Kalkulasi Income
                </LiquidButton>
              </div>

              {/* Supporting Image - Reaches Bottom Edge */}
              <div className="flex-1 flex items-end justify-center relative overflow-hidden -mb-6 md:-mb-8">
                <div className="w-[400px] h-[700px] relative">
                  <img 
                    src="/images/new4.png" 
                    alt="Orang menghitung pendapatan dan pertumbuhan keuangan" 
                    className="w-full h-full object-contain object-bottom"
                  />
                </div>
              </div>

            </div>
          </Link>

          </div>
        </LiquidGlassContainer>
      </div>
    </section>
  );
};

export default ThreeSectionLayout;