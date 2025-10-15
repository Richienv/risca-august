"use client";

import { motion } from 'framer-motion'
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { LiquidGlassContainer } from '@/components/ui/liquid-glass-container';
import { LiquidButton } from '@/components/ui/liquid-glass-button';
import { WebGLShader } from '@/components/ui/web-gl-shader';

export default function SolutionSection() {
    return (
        <section className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24">
            {/* WebGL Shader Background */}
            <div className="absolute inset-0 z-0">
                <WebGLShader />
            </div>
            
            {/* Overlay for slight dimming effect */}
            <div className="absolute inset-0 bg-black/40 z-10" />
            
            <div className="relative z-20 w-full">
                <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 max-w-7xl">
                    <LiquidGlassContainer className="rounded-3xl overflow-hidden bg-black/40 backdrop-blur-md hover:bg-black/50 transition-all duration-300" colorOverlay="none">
                        <div className="p-8 lg:p-12 xl:p-16">
                            {/* Heading Section */}
                            <div className="text-center mb-12 lg:mb-16">
                                <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-pink-500/60 to-transparent mx-auto mb-6"></div>
                                <motion.h1 
                                    className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tighter whitespace-normal max-w-full mx-auto text-white relative mb-4"
                                    style={{
                                        background: 'linear-gradient(90deg, #ffffff 0%, #ec4899 50%, #ffffff 100%)',
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
                                    50 Hari Menuju Business Partner
                                </motion.h1>
                                <p className="text-base sm:text-lg font-light leading-relaxed text-slate-300 max-w-4xl mx-auto mb-8" style={{ textShadow: '0 0 10px rgba(236, 72, 153, 0.1)' }}>
                                    Program sistematis 60 hari: ketemu 2 orang setiap hari, capai rasio closing 4:1, raih omzet Rp 360 juta dalam 8 minggu, dan dapatkan komisi hingga Rp 6,9 juta per bulan. Bonus: promosi ke Business Partner!
                                </p>
                            </div>
                        
                            {/* Call to Action Button */}
                            <div className="text-center">
                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                    <Link href="/solution" className="block">
                                        <LiquidButton 
                                            size="lg" 
                                            className="text-white font-semibold px-8 py-4 text-lg"
                                        >
                                            <span className="flex items-center gap-3">
                                                <span>Lihat Program Lengkap 60 Hari</span>
                                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                                            </span>
                                        </LiquidButton>
                                    </Link>
                                    
                                    <Link href="/pricing" className="block">
                                        <LiquidButton 
                                            size="lg" 
                                            className="text-white font-semibold px-8 py-4 text-lg bg-transparent border-2 border-pink-500 text-pink-400 hover:bg-pink-500/10 hover:border-pink-400 hover:text-pink-300"
                                        >
                                            <span className="flex items-center gap-3">
                                                <span>Mulai Program Ini</span>
                                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                                            </span>
                                        </LiquidButton>
                                    </Link>
                                </div>
                                <p className="text-xs sm:text-sm text-gray-400 mt-3" style={{ textShadow: '0 0 10px rgba(236, 72, 153, 0.1)' }}>
                                    Pelajari langkah demi langkah menuju kesuksesan
                                </p>
                            </div>

                            {/* Small Terms Note */}
                            <div className="mt-12 text-center">
                                <div className="inline-block bg-white/5 backdrop-blur-sm rounded-lg px-6 py-4 mx-auto">
                                    <p className="text-white/70 text-xs lg:text-sm" style={{ textShadow: '0 0 10px rgba(236, 72, 153, 0.1)' }}>
                                        <strong className="text-white">Catatan:</strong> ALP = pembayaran 1 bulan dihitung omzet 12 bulan (360jt/tahun = 30jt/bulan) | BE = Business Executive | BP = Business Partner
                                    </p>
                                </div>
                            </div>
                        </div>
                    </LiquidGlassContainer>
                </div>
            </div>
        </section>
    )
}
