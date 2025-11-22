"use client";

import { Card, CardContent } from '@/components/card-8'
import { motion } from 'framer-motion'
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Footer from "@/components/sections/footer";
import { Metadata } from "next";
import { LiquidGlassContainer } from '@/components/ui/liquid-glass-container';
import { WebGLShader } from '@/components/ui/web-gl-shader';

const transformations = [
    {
        title: "Fase 1",
        subtitle: "Temukan Alasan & Persiapan",
        description: "Temukan alasan terbesar kamu mulai bisnis ini, tentukan apa yang mau kamu capai dari Bisnis ini dan kapan akan mendapatkan itu? Lalu siapkan waktu serta mindset belajar untuk kuasai 1–2 program yang bisa bantu banyak keluarga aman secara finansial.",
        image: "/images/first-step.png"
    },
    {
        title: "Fase 2",
        subtitle: "Datangi Keluarga & Sahabat",
        description: "Datangi keluarga dan sahabat yang ingin kamu jaga, lalu ceritakan program yang bisa bantu jaga stabilitas keuangan mereka. Mulai dari orang terdekat yang kamu sayangi.",
        image: "/images/deal.png"
    },
    {
        title: "Fase 3",
        subtitle: "Ngobrol Ganti Cerita Program",
        description: "Ngobrol ganti cerita program dari Manulife. Jelaskan bagaimana program ini bisa memberikan perlindungan jiwa, kesehatan, dana pendidikan anak, dan dana pensiun. Fokus pada manfaat nyata untuk keluarga mereka.",
        image: "/images/branding.png"
    },
    {
        title: "Fase 4",
        subtitle: "Ajak Kerabat dengan Bonus Referral",
        description: "Di fase ini juga bisa sambil mengajak kerabat yang ingin mendapat bisnis simple dengan referensi 25% setiap orang. Bangun network sambil dapat cuan!",
        image: "/images/meetmeet.png"
    },
    {
        title: "Fase 5",
        subtitle: "Konsistensi & Momentum",
        description: "Terus konsisten dengan pola yang sudah berjalan. Posting testimoni dan share progress. Orang mulai percaya dan tertarik ikut bergabung dengan kamu.",
        image: "/images/cheers.png"
    },
    {
        title: "Fase 6",
        subtitle: "Bantu Tim Closing - Duplikasi Dimulai",
        description: "Bantu tim kamu closing, kamu akan mendapatkan bonus 25% sejak pertama closing. Bisnis duplikasi mulai terjadi - ini adalah kunci passive income jangka panjang!",
        image: "/images/speach.png"
    },
    {
        title: "Fase 7",
        subtitle: "Duplikasi Sempurna = Passive Income",
        description: "Tim yang kamu ajak akan menjadi kamu selanjutnya. Duplikasi sempurna akan menjadi passive income. Saat kita tiada, bisnis bisa diwariskan untuk keluarga sebagai legacy.",
        image: "/images/study.png"
    },
    {
        title: "Fase 8",
        subtitle: "Raih Semua Bonus",
        description: "Allowance 3-12 juta/bulan, Bonus triwulanan 10-30%, Bonus 5% dari omset, Bonus referral 25%, dan Trip gratis Asia-Eropa untuk top performers. Semua menunggumu!",
        image: "/images/checklist.png"
    },
    {
        title: "Fase 9",
        subtitle: "Rekrut Tanpa Modal & Resiko",
        description: "Ajak orang-orang yang mau bisnis tanpa modal, tanpa resiko, dibimbing untuk punya passive income. Sistem sudah terbukti berhasil, tinggal duplikasi!",
        image: "/images/confident.png"
    },
    {
        title: "Fase 10",
        subtitle: "Hadiah Khusus Business Partner",
        description: "Hadiah khusus kalau status Business Partner dalam waktu 60 hari sejak keluar kode agen: CASH 10.000.000! Ini bukan mimpi - ini hasil kerja keras dan konsistensimu!",
        image: "/images/ipad.png"
    },
];

export default function SolutionDetailsPage() {
    return (
        <>
            {/* Navigation Back Button */}
            <div className="bg-black py-4 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-white hover:text-pink-400 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span className="text-sm font-medium">Kembali ke Beranda</span>
                    </Link>
                </div>
            </div>

            <section className="relative overflow-hidden py-12 md:py-20">
                {/* WebGL Shader Background */}
                <div className="absolute inset-0 z-0">
                    <WebGLShader />
                </div>

                {/* Overlay for slight dimming effect */}
                <div className="absolute inset-0 bg-black/40 z-10" />

                <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 relative z-20">
                    <LiquidGlassContainer className="rounded-3xl overflow-hidden bg-black/40 backdrop-blur-md hover:bg-black/50 transition-all duration-300" colorOverlay="none">
                        <div className="p-6 lg:p-8 xl:p-12">
                            {/* Heading Section */}
                            <div className="text-center mb-12">
                                <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-pink-500/60 to-transparent mx-auto mb-6"></div>
                                <motion.h1
                                    className="text-center text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl whitespace-normal px-4 sm:px-6 md:px-8 lg:px-10 max-w-full mx-auto text-white relative mb-4"
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
                                    10 Fase Menuju Business Partner
                                </motion.h1>
                                <p className="text-sm lg:text-base font-light leading-relaxed text-slate-300 max-w-4xl mx-auto" style={{ textShadow: '0 0 10px rgba(236, 72, 153, 0.1)' }}>
                                    Program sistematis 60 hari: ketemu 2 orang setiap hari, capai rasio closing 4:1, raih omzet Rp 360 juta dalam 8 minggu, dan dapatkan komisi hingga Rp 6,9 juta per bulan. Bonus: promosi ke Business Partner!
                                </p>
                            </div>

                            {/* Full Width Layout */}
                            <div className="relative z-10 w-full">
                                <div className="space-y-8 lg:space-y-12 w-full">

                                    {transformations.map((transformation, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 40 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.8, delay: index * 0.1 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                            className="w-full"
                                        >
                                            {/* Full Width Card Container */}
                                            <LiquidGlassContainer className="w-full rounded-3xl overflow-hidden bg-black/30 backdrop-blur-md hover:bg-black/40 transition-all duration-300" colorOverlay="none">
                                                <div className="p-0 w-full">
                                                    <div className={`flex flex-col lg:flex-row items-center w-full ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                                        }`}>
                                                        {/* Image Side - Portrait Format */}
                                                        <div className="w-full lg:w-2/5 xl:w-1/3 flex-shrink-0">
                                                            <div className="w-full aspect-[3/4] lg:aspect-[4/5] p-4 lg:p-6">
                                                                <div className="w-full h-full flex items-center justify-center rounded-xl overflow-hidden">
                                                                    <img
                                                                        src={transformation.image}
                                                                        alt={transformation.subtitle}
                                                                        className="w-full h-full object-contain max-w-[300px] lg:max-w-full"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* Text Side */}
                                                        <div className="flex-1 w-full lg:w-3/5 xl:w-2/3">
                                                            <div className="p-6 sm:p-8 lg:p-12 xl:p-16 h-full flex flex-col text-center lg:text-left">

                                                                {/* Phase Info Section - Top */}
                                                                <div className="flex items-center justify-center lg:justify-start space-x-3 mb-6">
                                                                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-pink-500/20 flex items-center justify-center flex-shrink-0">
                                                                        <span className="text-pink-400 text-base lg:text-lg font-bold">
                                                                            {index + 1}
                                                                        </span>
                                                                    </div>
                                                                    <div>
                                                                        <h3 className="text-base lg:text-lg font-semibold text-white">Fase {index + 1}</h3>
                                                                        <p className="text-sm lg:text-base text-white/70 font-light">60 Hari Program</p>
                                                                    </div>
                                                                </div>

                                                                {/* Title */}
                                                                <div className="mb-4 lg:mb-6">
                                                                    <h4 className="text-lg lg:text-xl xl:text-2xl font-bold text-white mb-2">
                                                                        {transformation.title}
                                                                    </h4>
                                                                    {index === transformations.length - 1 ? (
                                                                        <motion.p
                                                                            className="text-xl lg:text-2xl xl:text-3xl leading-tight font-semibold tracking-wide"
                                                                            style={{
                                                                                background: 'linear-gradient(90deg, #fde047 0%, #f59e0b 50%, #fde047 100%)',
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
                                                                            {transformation.subtitle}
                                                                        </motion.p>
                                                                    ) : (
                                                                        <p className="text-xl lg:text-2xl xl:text-3xl leading-tight text-pink-400 font-semibold">
                                                                            {transformation.subtitle}
                                                                        </p>
                                                                    )}
                                                                </div>

                                                                {/* Description */}
                                                                <div className="flex-1">
                                                                    <p className={`text-sm lg:text-base xl:text-lg leading-relaxed ${index === transformations.length - 1
                                                                        ? 'bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent font-semibold'
                                                                        : 'text-white/80 font-light'
                                                                        }`} style={{ textShadow: '0 0 10px rgba(236, 72, 153, 0.1)' }}>
                                                                        {transformation.description}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </LiquidGlassContainer>
                                        </motion.div>
                                    ))}

                                </div>
                            </div>

                        </div>
                    </LiquidGlassContainer>
                </div>
            </section>

            <Footer />
        </>
    )
}