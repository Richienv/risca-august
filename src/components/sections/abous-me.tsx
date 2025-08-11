"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Spotlight } from "@/components/spotlight-new";

interface Ripple {
  id: number;
  x: number;
  y: number;
}

const AboutMeSection = () => {
  const [mounted, setMounted] = useState(false);
  const [mouseGradientStyle, setMouseGradientStyle] = useState({
    left: '0px',
    top: '0px',
    opacity: 0,
  });
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [scrolled, setScrolled] = useState(false);
  const floatingElementsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const animateWords = () => {
      const wordElements = document.querySelectorAll('.word-animate');
      wordElements.forEach(word => {
        const delay = parseInt(word.getAttribute('data-delay') || '0') || 0;
        setTimeout(() => {
          if (word && word instanceof HTMLElement) word.style.animation = 'word-appear 0.8s ease-out forwards';
        }, delay);
      });
    };
    const timeoutId = setTimeout(animateWords, 500);
    return () => clearTimeout(timeoutId);
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      setMouseGradientStyle({
        left: `${e.clientX}px`,
        top: `${e.clientY}px`,
        opacity: 1,
      });
    };
    const handleMouseLeave = () => {
      setMouseGradientStyle(prev => ({ ...prev, opacity: 0 }));
    };
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;
    
    const handleClick = (e: MouseEvent) => {
      const newRipple = { id: Date.now(), x: e.clientX, y: e.clientY };
      setRipples(prev => [...prev, newRipple]);
      setTimeout(() => setRipples(prev => prev.filter(r => r.id !== newRipple.id)), 1000);
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [mounted]);
  
  useEffect(() => {
    if (!mounted) return;
    
    const wordElements = document.querySelectorAll('.word-animate');
    const handleMouseEnter = (e: Event) => { 
      const target = e.target as HTMLElement;
      if (target) target.style.textShadow = '0 0 20px rgba(239, 68, 68, 0.5)'; 
    };
    const handleMouseLeave = (e: Event) => { 
      const target = e.target as HTMLElement;
      if (target) target.style.textShadow = 'none'; 
    };
    wordElements.forEach(word => {
      word.addEventListener('mouseenter', handleMouseEnter);
      word.addEventListener('mouseleave', handleMouseLeave);
    });
    return () => {
      wordElements.forEach(word => {
        if (word) {
          word.removeEventListener('mouseenter', handleMouseEnter);
          word.removeEventListener('mouseleave', handleMouseLeave);
        }
      });
    };
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;
    
    const elements = document.querySelectorAll('.floating-element-animate');
    floatingElementsRef.current = Array.from(elements) as HTMLElement[];
    const handleScroll = () => {
      if (!scrolled) {
        setScrolled(true);
        floatingElementsRef.current.forEach((el, index) => {
          setTimeout(() => {
            if (el && el instanceof HTMLElement) {
              el.style.animationPlayState = 'running';
              el.style.opacity = ''; 
            }
          }, (parseFloat(el.style.animationDelay || "0") * 1000) + index * 100);
        });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled, mounted]);

  const pageStyles = `
    #mouse-gradient-react {
      position: fixed;
      pointer-events: none;
      border-radius: 9999px; /* rounded-full */
      background-image: radial-gradient(circle, rgba(236, 72, 153, 0.08), rgba(219, 39, 119, 0.06), transparent 70%); /* pink-500/8, pink-600/6 */
      transform: translate(-50%, -50%);
      will-change: left, top, opacity;
      transition: left 70ms linear, top 70ms linear, opacity 300ms ease-out;
    }
    @keyframes word-appear { 0% { opacity: 0; transform: translateY(30px) scale(0.8); filter: blur(10px); } 50% { opacity: 0.8; transform: translateY(10px) scale(0.95); filter: blur(2px); } 100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); } }
    @keyframes grid-draw { 0% { stroke-dashoffset: 1000; opacity: 0; } 50% { opacity: 0.3; } 100% { stroke-dashoffset: 0; opacity: 0.15; } }
    @keyframes pulse-glow { 0%, 100% { opacity: 0.1; transform: scale(1); } 50% { opacity: 0.3; transform: scale(1.1); } }
    .word-animate { display: inline-block; opacity: 0; margin: 0 0.1em; transition: color 0.3s ease, transform 0.3s ease; }
    .word-animate:hover { color: #fca5a5; /* red-300 */ transform: translateY(-2px); }
    .grid-line { stroke: #dc2626; /* red-600 */ stroke-width: 0.5; opacity: 0; stroke-dasharray: 5 5; stroke-dashoffset: 1000; animation: grid-draw 2s ease-out forwards; }
    .detail-dot { fill: #ef4444; /* red-500 */ opacity: 0; animation: pulse-glow 3s ease-in-out infinite; }
    .corner-element-animate { position: absolute; width: 40px; height: 40px; border: 1px solid rgba(239, 68, 68, 0.2); opacity: 0; animation: word-appear 1s ease-out forwards; }
    .text-decoration-animate { position: relative; }
    .text-decoration-animate::after { content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 1px; background: linear-gradient(90deg, transparent, #ef4444, transparent); animation: underline-grow 2s ease-out forwards; animation-delay: 2s; }
    @keyframes underline-grow { to { width: 100%; } }
    .floating-element-animate { position: absolute; width: 2px; height: 2px; background: #ef4444; border-radius: 50%; opacity: 0; animation: float 4s ease-in-out infinite; animation-play-state: paused; }
    @keyframes float { 0%, 100% { transform: translateY(0) translateX(0); opacity: 0.2; } 25% { transform: translateY(-10px) translateX(5px); opacity: 0.6; } 50% { transform: translateY(-5px) translateX(-3px); opacity: 0.4; } 75% { transform: translateY(-15px) translateX(7px); opacity: 0.8; } }
    .ripple-effect { position: fixed; width: 4px; height: 4px; background: rgba(239, 68, 68, 0.6); border-radius: 50%; transform: translate(-50%, -50%); pointer-events: none; animation: pulse-glow 1s ease-out forwards; z-index: 9999; }
  `;

  if (!mounted) {
    return (
      <div className="w-full min-h-screen bg-gradient-to-bl from-red-950 via-black to-red-900 text-slate-100 font-primary overflow-hidden relative">
        <div className="container mx-auto px-6 py-20 sm:px-8 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Column - Text */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xs sm:text-sm font-mono font-light text-slate-300 uppercase tracking-[0.2em] opacity-80 mb-4">
                  Masih Gapercaya?
                </h2>
                <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-30 mb-6"></div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight leading-tight tracking-tight text-slate-50 mb-6">
                  Berani
                  <span className="block font-thin text-xl sm:text-2xl md:text-3xl lg:text-4xl text-slate-300 mt-2 leading-relaxed tracking-wide">
                    Ngomong Gini?
                  </span>
                </h1>
              </div>
              
              <div className="space-y-6 text-slate-300">
                <p className="text-sm lg:text-base font-light leading-relaxed">
                  Aku Risca atau .
                </p>
                <p className="text-sm lg:text-base font-light leading-relaxed">
                  3 tahun lalu, aku hanyalah ibu rumah tangga pemalu, gaptek, dan tanpa latar pendidikan tinggi. Tapi aku punya mimpi: Mau kasih yang terbaik buat keluarga aku, aku pengen banggain mereka.
                </p>
                <p className="text-sm lg:text-base font-light leading-relaxed">
                  Aku pernah coba banyak usaha—jualan online, pulsa, tiket, bahkan trading—tapi selalu mentok. Sampai aku temukan sistem bisnis yang bukan cuma kasih income, tapi bawa transformasi hidup yang nyata.
                </p>
                <p className="text-sm lg:text-base font-light leading-relaxed">
                  Hari ini aku membangun komunitas perempuan di berbagai kota, bantu mereka bangun bisnis sendiri, dan temukan potensi yang dulu mereka pikir nggak ada. Let me guide you — lewat sistem yang terbukti bantu banyak ibu seperti aku berubah dari "biasa" jadi "bermakna".
                </p>
              </div>
              
              <div className="pt-6">
                <span className="text-lg md:text-xl font-light text-red-300 font-mono tracking-wide">
                  "Jangan biarkan sifat pemalu menahan langkahmu. Kesuksesan bukan soal siapa kamu dulu, tapi keputusanmu hari ini."
                </span>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="aspect-[3/4] relative rounded-lg overflow-hidden">
                <Image
                  src="/images/cinom-potrait.png"
                  alt="Risca Agustine - Community Leader and Mentor"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-950/20 via-transparent to-transparent" />
              </div>
              
              {/* Corner decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border-l-2 border-b-2 border-red-500/30"></div>
              <div className="absolute -top-4 -right-4 w-16 h-16 border-t-2 border-r-2 border-red-500/30"></div>
            </div>
          </div>
          
          {/* Bottom quote */}
          <div className="mt-16 text-center">
            <div className="h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent my-8"></div>
            <p className="text-lg md:text-xl font-light text-red-300 max-w-3xl mx-auto font-mono tracking-wide">
              "Sekarang giliranmu menulis cerita hidupmu sendiri."
            </p>
            <div className="h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent my-8"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <style>{pageStyles}</style>
      <div className="w-full min-h-screen bg-gradient-to-bl from-red-950 via-black to-red-900 text-slate-100 font-primary overflow-hidden relative">
        
        {/* Pink Spotlight Effects */}
        <Spotlight 
          gradientFirst={`radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(236, 72, 153, 0.12) 0%, rgba(219, 39, 119, 0.06) 50%, transparent 80%)`}
          gradientSecond={`radial-gradient(50% 50% at 50% 50%, rgba(236, 72, 153, 0.08) 0%, rgba(219, 39, 119, 0.04) 80%, transparent 100%)`}
          gradientThird={`radial-gradient(50% 50% at 50% 50%, rgba(219, 39, 119, 0.06) 0%, rgba(236, 72, 153, 0.03) 80%, transparent 100%)`}
          translateY={-180}
          width={420}
          height={900}
          smallWidth={160}
          duration={12}
          xOffset={40}
        />
        
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <pattern id="gridAboutResponsive" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(220, 38, 38, 0.1)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gridAboutResponsive)" />
          <line x1="0" y1="20%" x2="100%" y2="20%" className="grid-line" style={{ animationDelay: '0.5s' }} />
          <line x1="0" y1="80%" x2="100%" y2="80%" className="grid-line" style={{ animationDelay: '1s' }} />
          <line x1="20%" y1="0" x2="20%" y2="100%" className="grid-line" style={{ animationDelay: '1.5s' }} />
          <line x1="80%" y1="0" x2="80%" y2="100%" className="grid-line" style={{ animationDelay: '2s' }} />
          <line x1="50%" y1="0" x2="50%" y2="100%" className="grid-line" style={{ animationDelay: '2.5s', opacity: '0.05' }} />
          <line x1="0" y1="50%" x2="100%" y2="50%" className="grid-line" style={{ animationDelay: '3s', opacity: '0.05' }} />
          <circle cx="20%" cy="20%" r="2" className="detail-dot" style={{ animationDelay: '3s' }} />
          <circle cx="80%" cy="20%" r="2" className="detail-dot" style={{ animationDelay: '3.2s' }} />
          <circle cx="20%" cy="80%" r="2" className="detail-dot" style={{ animationDelay: '3.4s' }} />
          <circle cx="80%" cy="80%" r="2" className="detail-dot" style={{ animationDelay: '3.6s' }} />
          <circle cx="50%" cy="50%" r="1.5" className="detail-dot" style={{ animationDelay: '4s' }} />
        </svg>

        {/* Responsive Corner Elements */}
        <div className="corner-element-animate top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8" style={{ animationDelay: '4s' }}>
          <div className="absolute top-0 left-0 w-2 h-2 bg-red-500 opacity-30 rounded-full"></div>
        </div>
        <div className="corner-element-animate top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8" style={{ animationDelay: '4.2s' }}>
          <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 opacity-30 rounded-full"></div>
        </div>
        <div className="corner-element-animate bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8" style={{ animationDelay: '4.4s' }}>
          <div className="absolute bottom-0 left-0 w-2 h-2 bg-red-500 opacity-30 rounded-full"></div>
        </div>
        <div className="corner-element-animate bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8" style={{ animationDelay: '4.6s' }}>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-red-500 opacity-30 rounded-full"></div>
        </div>

        <div className="floating-element-animate" style={{ top: '25%', left: '15%', animationDelay: '0.5s' }}></div>
        <div className="floating-element-animate" style={{ top: '60%', left: '85%', animationDelay: '1s' }}></div>
        <div className="floating-element-animate" style={{ top: '40%', left: '10%', animationDelay: '1.5s' }}></div>
        <div className="floating-element-animate" style={{ top: '75%', left: '90%', animationDelay: '2s' }}></div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-6 py-20 sm:px-8 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Column - Text */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xs sm:text-sm font-mono font-light text-slate-300 uppercase tracking-[0.2em] opacity-80 mb-4">
                  <span className="word-animate" data-delay="0">Meet</span>
                  <span className="word-animate" data-delay="300">Risca</span>
                  <span className="word-animate" data-delay="600">Agustine</span>
                </h2>
                <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-30 mb-6"></div>
                <motion.h1 
                  className="text-left text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl whitespace-normal text-white relative mb-6 text-decoration-animate"
                  style={{
                    background: 'linear-gradient(90deg, #ffffff 0%, #9d1152 50%, #ffffff 100%)',
                    backgroundSize: '200% 100%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                >
                  AKU SIAPA?
                </motion.h1>
              </div>
              
              <div className="space-y-6 text-slate-300">
                <p className="text-sm lg:text-base font-light leading-relaxed opacity-0" style={{ animation: 'word-appear 0.8s ease-out forwards', animationDelay: '1.6s' }}>
                  <span className="word-animate" data-delay="1600">Aku</span>
                  <span className="word-animate" data-delay="1800">Risca</span>
                  <span className="word-animate" data-delay="2000">atau</span>
                  <span className="word-animate" data-delay="2200">Cinom.</span>
                </p>
                <p className="text-sm lg:text-base font-light leading-relaxed opacity-0" style={{ animation: 'word-appear 0.8s ease-out forwards', animationDelay: '2.4s' }}>
                  3 tahun lalu, aku hanyalah ibu rumah tangga pemalu, gaptek, dan tanpa latar pendidikan tinggi. Tapi aku punya mimpi: Mau kasih yang terbaik buat keluarga, aku pengen banggain mereka.
                </p>
                <p className="text-sm lg:text-base font-light leading-relaxed opacity-0" style={{ animation: 'word-appear 0.8s ease-out forwards', animationDelay: '2.8s' }}>
                  Aku coba banyak usaha buat bisa sukses jualan online, pulsa, tiket, bahkan trading—tapi selalu mentok. Udah mau nyerah tapi temen aku datang out of no-where dan kenalin aku sistem bisnis yang menurut aku bener-bener to good to be true.
                </p>
                <p className="text-sm lg:text-base font-light leading-relaxed opacity-0" style={{ animation: 'word-appear 0.8s ease-out forwards', animationDelay: '3.2s' }}>
                  Long story short, aku kosongkan gelas dan belajar dari 0. Sekarang aku punya team besar to run business together, di dalam komunitas yang menghasilkan ratusan sampe milyaran rupiah. Yes kalau kamu ngga percaya please I invite you to see yourself.
                </p>
              </div>
              
              <div className="pt-6 opacity-0" style={{ animation: 'word-appear 0.8s ease-out forwards', animationDelay: '3.6s' }}>
                <span 
                  className="text-lg md:text-xl font-bold font-mono tracking-wide relative"
                  style={{
                    background: 'linear-gradient(90deg, #fbbf24 0%, #f59e0b 25%, #d97706 50%, #92400e 75%, #fbbf24 100%)',
                    backgroundSize: '200% 100%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    animation: 'metallic-flow 3s linear infinite'
                  }}
                >
                  "Fear is Temporary, Regret is Forever."
                </span>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative opacity-0" style={{ animation: 'word-appear 0.8s ease-out forwards', animationDelay: '1.2s' }}>
              <div className="aspect-[3/4] relative rounded-lg overflow-hidden">
                <Image
                  src="/images/cinom-potrait.png"
                  alt="Risca Agustine - Community Leader and Mentor"
                  fill
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-950/20 via-transparent to-transparent" />
              </div>
              
              {/* Corner decorative elements */}
              <div className="corner-element-animate -bottom-4 -left-4 w-16 h-16 border-l-2 border-b-2 border-red-500/30" style={{ animationDelay: '3.6s' }}>
                <div className="absolute bottom-0 left-0 w-2 h-2 bg-red-500 opacity-30 rounded-full"></div>
              </div>
              <div className="corner-element-animate -top-4 -right-4 w-16 h-16 border-t-2 border-r-2 border-red-500/30" style={{ animationDelay: '3.8s' }}>
                <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 opacity-30 rounded-full"></div>
              </div>
            </div>
          </div>
          
          {/* Bottom quote */}
          <div className="mt-16 text-center opacity-0" style={{ animation: 'word-appear 0.8s ease-out forwards', animationDelay: '4s' }}>
            <div className="h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent my-8"></div>
            <p 
              className="text-lg md:text-xl font-bold max-w-3xl mx-auto font-mono tracking-wide"
              style={{
                background: 'linear-gradient(90deg, #fbbf24 0%, #f59e0b 25%, #d97706 50%, #92400e 75%, #fbbf24 100%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'metallic-flow 3s linear infinite'
              }}
            >
              Yuk kosongin gelas, kita sukses bareng-bareng.
            </p>
            <div className="h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent my-8"></div>
          </div>
        </div>

        {/* Responsive Mouse Gradient Size & Blur */}
        <div 
          id="mouse-gradient-react"
          className="w-60 h-60 blur-xl sm:w-80 sm:h-80 sm:blur-2xl md:w-96 md:h-96 md:blur-3xl"
          style={{
            left: mouseGradientStyle.left,
            top: mouseGradientStyle.top,
            opacity: mouseGradientStyle.opacity,
          }}
        ></div>

        {ripples.map(ripple => (
          <div
            key={ripple.id}
            className="ripple-effect"
            style={{ left: `${ripple.x}px`, top: `${ripple.y}px` }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default AboutMeSection;