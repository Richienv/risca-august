'use client'

import { Check, Star } from 'lucide-react'
import { PackageType, PACKAGES } from '@/types/payment'
import Link from 'next/link'
import { LiquidGlassContainer } from '@/components/ui/liquid-glass-container'
import { LiquidButton } from '@/components/ui/liquid-glass-button'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'


export default function Pricing() {
    const renderPackageCard = (packageType: PackageType, isRecommended: boolean = false) => {
        const packageInfo = PACKAGES[packageType]

        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: isRecommended ? 0.2 : 0 }}
                className={cn(
                    "relative flex flex-col",
                    isRecommended ? 'lg:scale-105 z-10' : 'z-0'
                )}
            >
                {isRecommended && (
                    <div className="absolute -top-4 left-0 right-0 flex justify-center z-20">
                        <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold text-black bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.4)]">
                            <Star className="w-3 h-3 fill-black" />
                            MOST POPULAR
                        </span>
                    </div>
                )}

                <div className={cn(
                    "h-full rounded-3xl overflow-hidden transition-all duration-300 border",
                    isRecommended
                        ? "bg-black/60 border-amber-500/50 shadow-[0_0_30px_rgba(245,158,11,0.15)]"
                        : "bg-black/40 border-white/10 hover:border-amber-500/30"
                )}>
                    {/* Card Header */}
                    <div className="p-8 pb-0 text-center relative overflow-hidden">
                        {/* Background Glow */}
                        <div className={cn(
                            "absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 blur-[60px] rounded-full pointer-events-none opacity-20",
                            isRecommended ? "bg-amber-500" : "bg-white"
                        )} />

                        <h3 className={cn(
                            "text-xl font-bold mb-2 relative z-10",
                            isRecommended ? "text-amber-400" : "text-white"
                        )}>
                            {packageInfo.name}
                        </h3>

                        <div className="mb-2 relative z-10">
                            <span className={cn(
                                "text-4xl font-bold tracking-tight",
                                isRecommended
                                    ? "text-transparent bg-clip-text bg-gradient-to-b from-amber-200 to-amber-500"
                                    : "text-white"
                            )}>
                                {packageInfo.monthlyPrice}
                            </span>
                        </div>

                        <p className="text-white/60 text-sm relative z-10 min-h-[40px]">
                            {packageInfo.description}
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="px-8 py-6">
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    </div>

                    {/* Features List */}
                    <div className="px-8 pb-8 flex-1 flex flex-col">
                        <div className="space-y-4 flex-1">
                            {/* Kriteria Section */}
                            <div>
                                <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">
                                    Kriteria
                                </h4>
                                <ul className="space-y-3">
                                    {packageInfo.features.slice(0, 4).map((item, index) => (
                                        <li key={index} className="flex items-start gap-3 text-sm text-white/80">
                                            <Check className={cn(
                                                "w-4 h-4 mt-0.5 flex-shrink-0",
                                                isRecommended ? "text-amber-500" : "text-white/40"
                                            )} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Benefits Section */}
                            <div className="pt-4">
                                <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">
                                    Benefit
                                </h4>
                                <ul className="space-y-3">
                                    {packageInfo.features.slice(4).map((item, index) => (
                                        <li key={index} className="flex items-start gap-3 text-sm text-white/80">
                                            <Check className={cn(
                                                "w-4 h-4 mt-0.5 flex-shrink-0",
                                                isRecommended ? "text-amber-500" : "text-white/40"
                                            )} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Action Button */}
                        <div className="mt-8 pt-6 border-t border-white/5">
                            <Link href={packageType === 'free' ? '/contact' : `/checkout?package=${packageType}`} className="block">
                                <button className={cn(
                                    "w-full py-4 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 group",
                                    isRecommended
                                        ? "bg-gradient-to-r from-amber-600 to-amber-500 text-white shadow-lg hover:shadow-amber-500/25 hover:scale-[1.02]"
                                        : "bg-white/10 text-white hover:bg-white/20"
                                )}>
                                    {packageType === 'free' ? 'Daftar Gratis' : 'Join Business Partner'}
                                    {isRecommended && <Star className="w-4 h-4 fill-white/20 group-hover:fill-white transition-colors" />}
                                </button>
                            </Link>
                            {packageType === 'paid' && (
                                <p className="text-center text-[10px] text-white/40 mt-3">
                                    *Fee dikembalikan 100% jika capai target
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        )
    }

    return (
        <section id="pricing-section" className="relative w-full py-20 md:py-32 bg-black overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-900/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-amber-500 font-mono text-xs md:text-sm tracking-[0.2em] uppercase mb-4">
                        Join The Movement
                    </h2>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Pilihan Bergabung <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-500 to-amber-200">
                            Dengan Kami
                        </span>
                    </h1>
                    <p className="text-white/60 max-w-2xl mx-auto text-base md:text-lg">
                        Dua jalur berbeda untuk memulai perjalanan sukses Anda. Pilih yang sesuai dengan visi dan komitmen Anda saat ini.
                    </p>
                </div>

                <div className="grid gap-8 lg:gap-8 grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto items-start">
                    {renderPackageCard('free')}
                    {renderPackageCard('paid', true)}
                </div>

                {/* Bottom Quote */}
                <div className="mt-20 text-center">
                    <div className="inline-block p-px rounded-2xl bg-gradient-to-r from-transparent via-amber-500/50 to-transparent">
                        <div className="bg-black/80 backdrop-blur-xl rounded-2xl px-8 py-6 max-w-3xl">
                            <p className="text-white/80 text-lg italic font-light">
                                "Bayangin hidupmu 1-5 tahun kedepan menjadi apa?… semua mulai dari satu keputusan hari ini."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}