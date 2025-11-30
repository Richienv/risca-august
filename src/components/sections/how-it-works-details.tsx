"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const stepsData = [
    {
        title: "Hari ke 1–5 — Lisensi & Sistem Profesional",
        description: "Dapatkan lisensi dari perusahaan untuk bekerja secara profesional. Pelajari materi dasar asuransi via HP (cara kerja polis & manfaat) untuk unlock tahap ini.",
        imageSrc: "/images/system-licence.png",
        colSpan: 1
    },
    {
        title: "Hari ke 6–15 — Paket Pengetahuan Bisnis",
        description: "Terima materi presentasi lengkap & script 'Super Boost' untuk closing. Lakukan roleplay dengan mentor & presentasi pertama ke kerabat untuk unlock.",
        imageSrc: "/images/knowledge-pack.png",
        colSpan: 1
    },
    {
        title: "Hari ke 16–30 — Kit Storytelling & Branding",
        description: "Unlock setelah closing pertama. Panduan menyusun cerita personal yang kuat untuk meyakinkan calon nasabah dengan lebih efektif.",
        imageSrc: "/images/storytelling-kit.png",
        colSpan: 1
    },
    {
        title: "Hari ke 31–45 — Bootcamp Eksklusif",
        description: "Akses training eksklusif strategi 'Advanced Selling' & mindset sukses dari praktisi ahli. Hanya untuk yang sudah mencapai milestone awal.",
        imageSrc: "/images/exclusive-bootcamp.png",
        colSpan: 1
    },
    {
        title: "Hari ke 46–60 — Gaji Pasti & Komisi",
        description: "Nikmati gaji pasti Rp 4.5 jt/bulan (pasti dapat di luar bonus). Dengan target bulanan Rp 4.2 jt/bulan, kamu juga akan dapat komisi QBP/3 bulan. Total income Rp 13 jt + Rp 4.5 jt = Rp 17.5 juta per bulan.",
        imageSrc: "/images/first-income.png",
        colSpan: 1
    },
    {
        title: "Hari ke 61–70 — Bonus Referral Tim",
        description: "Dapatkan bonus referral 25% setiap tim kamu closing. Bangun tim yang solid untuk melipatgandakan penghasilan pasifmu.",
        imageSrc: "/images/bonus_referral_gold.png",
        colSpan: 1
    },
    {
        title: "Hari ke 71–80 — Bonus Cash Rp 5 Juta",
        description: "Raih bonus cash Rp 5 juta jikalau bisa capai target closing Rp 300 juta dalam 2 bulan langsung. Reward spesial untuk performa luar biasa.",
        imageSrc: "/images/bonus_cash_gold.png",
        colSpan: 1
    },
    {
        title: "Hari ke 81–90 — Trip Perjalanan Dunia",
        description: "Grand Reward: Trip perjalanan ke luar negeri (Tiket + Hotel). Syarat: Capai target besar & sukses duplikasi sistem '90 Hari' ke timmu.",
        imageSrc: "/images/trip_world_gold.png",
        colSpan: 1
    }
];

export default function HowItWorksDetailsSection() {
    return (
        <section id="how-it-works" className="relative w-full bg-black py-16 md:py-32 overflow-hidden">
            <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-16">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="text-xs sm:text-sm font-mono font-light text-white/70 uppercase tracking-[0.2em] opacity-80 mb-4">
                        90 Hari Battle Pass Insurance Path
                    </h2>
                    <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-30 mx-auto mb-6"></div>
                    <motion.h1
                        className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter whitespace-normal max-w-4xl mx-auto text-white relative mb-6"
                        style={{
                            background: 'linear-gradient(90deg, #ffffff 0%, #d97706 50%, #ffffff 100%)',
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
                        Apa yang Bakal Kamu Dapatkan Saat Join
                    </motion.h1>
                    <p className="text-sm lg:text-base font-light leading-relaxed text-white/70 max-w-2xl mx-auto">
                        Battle pass 90 hari versi insurance path yang realistis, step by step sesuai milestone di bisnis ini. Reward ditempatkan di titik besar dengan "apa yang kamu capai" sesuai alur asuransi.
                    </p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 max-w-[1600px] mx-auto">
                    {stepsData.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.5,
                                    delay: index * 0.1
                                }
                            }}
                            viewport={{ once: true }}
                            className={cn(
                                "relative flex flex-col justify-between overflow-hidden rounded-xl",
                                "bg-black/40 border border-amber-500/40",
                                "backdrop-blur-sm p-3 md:p-6 h-full"
                            )}
                        >
                            {/* Gold Accent Border Gradient - Always Visible */}
                            <div className="absolute inset-0 z-0 opacity-100 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent pointer-events-none" />

                            <div className="relative z-10 flex flex-col h-full">
                                {/* Header: Tag & Title */}
                                <div className="mb-2 md:mb-4">
                                    <p className="text-[8px] md:text-[10px] font-mono text-amber-500 uppercase tracking-wider mb-1 md:mb-2">
                                        {step.title.split(' — ')[0]}
                                    </p>
                                    <h3 className="text-sm md:text-lg font-bold text-amber-400 leading-tight">
                                        {step.title.split(' — ')[1]}
                                    </h3>
                                </div>

                                {/* Image Area - Portrait Ratio */}
                                <div className="flex-1 flex items-center justify-center my-2 md:my-4 relative w-full aspect-[3/4] overflow-hidden rounded-lg bg-white/10">
                                    <img
                                        src={step.imageSrc}
                                        alt={step.title}
                                        className="w-full h-full object-cover opacity-100"
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                        }}
                                    />
                                </div>

                                {/* Description */}
                                <div className="mt-auto">
                                    <p className="text-[10px] md:text-xs text-white/80 leading-tight md:leading-normal">
                                        {step.description}
                                    </p>

                                    {/* T&C Link */}
                                    <div className="mt-2 md:mt-3 pt-2 md:pt-3 border-t border-white/5">
                                        <span className="text-[8px] md:text-[9px] text-gray-500 hover:text-amber-500 cursor-pointer transition-colors">
                                            T&C berlaku
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
