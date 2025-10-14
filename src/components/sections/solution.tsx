"use client";

import { motion } from 'framer-motion'
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function SolutionSection() {
    return (
        <section className="relative w-full bg-black overflow-hidden py-16 sm:py-20 lg:py-24">
            <div className="relative z-10 w-full">
                <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 max-w-7xl">
                    <div className="relative">
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
                            <p className="text-base sm:text-lg font-light leading-relaxed text-slate-300 max-w-4xl mx-auto mb-8">
                                Program sistematis 60 hari: ketemu 2 orang setiap hari, capai rasio closing 4:1, raih omzet Rp 360 juta dalam 8 minggu, dan dapatkan komisi hingga Rp 6,9 juta per bulan. Bonus: promosi ke Business Partner!
                            </p>
                        </div>
                        
                        {/* Call to Action Button */}
                        <div className="text-center">
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <Link 
                                    href="/solution"
                                    className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-pink-400 hover:to-rose-500 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-500/20 group"
                                >
                                    <span>Lihat Program Lengkap 60 Hari</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                                </Link>
                                
                                <Link 
                                    href="/pricing"
                                    className="inline-flex items-center gap-3 bg-transparent border-2 border-pink-500 text-pink-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-pink-500/10 hover:border-pink-400 hover:text-pink-300 transition-all duration-300 hover:transform hover:-translate-y-1 group"
                                >
                                    <span>Mulai Program Ini</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                                </Link>
                            </div>
                            <p className="text-xs sm:text-sm text-gray-400 mt-3">
                                Pelajari langkah demi langkah menuju kesuksesan
                            </p>
                        </div>

                        {/* Small Terms Note */}
                        <div className="mt-12 text-center">
                            <div className="inline-block bg-white/5 backdrop-blur-sm rounded-lg px-6 py-4 mx-auto">
                                <p className="text-white/70 text-xs lg:text-sm">
                                    <strong className="text-white">Catatan:</strong> ALP = pembayaran 1 bulan dihitung omzet 12 bulan (360jt/tahun = 30jt/bulan) | BE = Business Executive | BP = Business Partner
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
