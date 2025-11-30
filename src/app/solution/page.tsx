"use client";

import { motion } from 'framer-motion'
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Footer from "@/components/sections/footer";
import { LiquidGlassContainer } from '@/components/ui/liquid-glass-container';
import { WebGLShader } from '@/components/ui/web-gl-shader';

const roadmapSteps = [
    {
        step: "STEP 1",
        period: "Hari 1–10",
        title: "Fondasi & Lisensi Profesional",
        goal: "Goal: Kamu punya lisensi + dasar pengetahuan produk proteksi dan investasi.",
        content: [
            "Proses lisensi untuk bekerja secara profesional",
            "Belajar dasar proteksi, kebutuhan finansial, dan investasi",
            "Pengenalan sistem kerja praktis yang bisa dilakukan via HP",
            "Onboarding 1-on-1 dengan mentor"
        ],
        result: "Hasil akhir: Kamu siap secara legal dan memahami fondasi bisnisnya.",
        image: "/images/first-step.png"
    },
    {
        step: "STEP 2",
        period: "Hari 11–30",
        title: "Skill Dasar Presentasi & Edukasi",
        goal: "Goal: Kamu bisa menjelaskan produk dasar health & investment sesuai kebutuhan klien.",
        content: [
            "Script presentasi singkat yang mudah dipahami",
            "Cara membuka percakapan tanpa kesan jualan",
            "Roleplay dengan mentor",
            "Teknik closing yang halus dan elegan",
            "Mulai dari circle terdekat untuk bangun kepercayaan"
        ],
        result: "Hasil akhir: Kamu bisa presentasi, edukasi, dan mulai mendapatkan klien pertamamu.",
        image: "/images/branding.png"
    },
    {
        step: "STEP 3",
        period: "Hari 31–60",
        title: "Penguasaan Sistem & Produksi Pertama",
        goal: "",
        content: [
            "Pola kerja harian yang jelas dan terstruktur",
            "Teknik follow-up yang sopan dan tidak mengganggu",
            "Praktik konsultasi dan closing didampingi mentor",
            "Review dan evaluasi ritme kerjamu",
            "Optimasi konten (untuk yang menjalankan strategi online)",
            "Penekanan pada konsistensi: lakukan pola kerja yang sama setiap hari"
        ],
        result: "Hasil akhir: Kamu mencapai produksi pertama dan siap naik level. Kuncinya: konsisten, ulangi polanya setiap hari, dan kamu akan melihat hasilnya.",
        image: "/images/checklist.png"
    }
];

export default function SolutionDetailsPage() {
    return (
        <>
            {/* Navigation Back Button */}
            <div className="bg-black py-4 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-white hover:text-amber-400 transition-colors"
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
                                <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-amber-500/60 to-transparent mx-auto mb-6"></div>
                                <motion.h1
                                    className="text-center text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl whitespace-normal px-4 sm:px-6 md:px-8 lg:px-10 max-w-full mx-auto text-white relative mb-4"
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
                                    Roadmap Karir 60 Hari
                                </motion.h1>
                                <p className="text-sm lg:text-base font-light leading-relaxed text-slate-300 max-w-4xl mx-auto" style={{ textShadow: '0 0 10px rgba(217, 119, 6, 0.1)' }}>
                                    Roadmap karir yang jelas dan terukur. Setiap fase dirancang untuk memastikan pertumbuhan income dan kapasitas diri Anda.
                                </p>
                            </div>

                            {/* Full Width Layout */}
                            <div className="relative z-10 w-full">
                                <div className="space-y-8 lg:space-y-12 w-full">

                                    {roadmapSteps.map((step, index) => (
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
                                                    <div className={`flex flex-col lg:flex-row items-stretch w-full ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                                        }`}>
                                                        {/* Image Side - Portrait Format */}
                                                        <div className="w-full lg:w-2/5 xl:w-1/3 flex-shrink-0 relative min-h-[300px] lg:min-h-full">
                                                            <div className="absolute inset-0 p-4 lg:p-6">
                                                                <div className="w-full h-full flex items-center justify-center rounded-xl overflow-hidden bg-gradient-to-b from-amber-500/10 to-transparent">
                                                                    <img
                                                                        src={step.image}
                                                                        alt={step.title}
                                                                        className="w-full h-full object-contain max-w-[300px] lg:max-w-full"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* Text Side */}
                                                        <div className="flex-1 w-full lg:w-3/5 xl:w-2/3">
                                                            <div className="p-6 sm:p-8 lg:p-12 xl:p-16 h-full flex flex-col text-left">

                                                                {/* Phase Info Section - Top */}
                                                                <div className="flex items-center space-x-3 mb-6">
                                                                    <div className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                                                                        <span className="text-amber-400 text-sm font-bold tracking-wider">
                                                                            {step.step}
                                                                        </span>
                                                                    </div>
                                                                    <div className="h-px w-8 bg-amber-500/30"></div>
                                                                    <p className="text-sm lg:text-base text-white/70 font-light tracking-wide">{step.period}</p>
                                                                </div>

                                                                {/* Title */}
                                                                <div className="mb-6">
                                                                    <h4 className="text-2xl lg:text-3xl font-bold text-white mb-2 leading-tight">
                                                                        {step.title}
                                                                    </h4>
                                                                </div>

                                                                {/* Content */}
                                                                <div className="space-y-6 flex-1">
                                                                    {step.goal && (
                                                                        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                                                            <p className="text-white/90 font-medium italic">
                                                                                {step.goal}
                                                                            </p>
                                                                        </div>
                                                                    )}

                                                                    <div className="space-y-3">
                                                                        <h5 className="text-amber-400 font-semibold text-sm uppercase tracking-wider">Isi Materi:</h5>
                                                                        <ul className="space-y-2">
                                                                            {step.content.map((item, i) => (
                                                                                <li key={i} className="flex items-start gap-3 text-white/80 font-light">
                                                                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                                                                                    <span>{item}</span>
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>

                                                                    <div className="pt-4 border-t border-white/10">
                                                                        <p className="text-white font-medium">
                                                                            {step.result}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </LiquidGlassContainer>
                                        </motion.div>
                                    ))}

                                </div>

                                {/* Penegasan Section */}
                                <div className="mt-16 sm:mt-24 text-center max-w-3xl mx-auto px-4">
                                    <div className="p-8 rounded-3xl bg-gradient-to-b from-amber-900/20 to-black border border-amber-500/30 backdrop-blur-sm">
                                        <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                                            Konsistensi dan pengulangan adalah kunci.
                                        </h3>
                                        <p className="text-white/70 text-lg leading-relaxed">
                                            Bukan tentang seberapa cepat kamu mulai, tetapi seberapa stabil kamu menjalankan sistemnya.
                                        </p>
                                    </div>

                                    {/* CTA Button */}
                                    <div className="mt-12">
                                        <Link href="/checkout?package=paid">
                                            <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gradient-to-r from-amber-600 to-amber-500 rounded-full hover:from-amber-500 hover:to-amber-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 shadow-[0_0_20px_rgba(217,119,6,0.3)] hover:shadow-[0_0_30px_rgba(217,119,6,0.5)] hover:scale-105">
                                                <span>Mulai Roadmap 60 Harimu</span>
                                                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                                            </button>
                                        </Link>
                                    </div>
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