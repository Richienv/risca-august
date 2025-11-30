"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Star, Trophy, Target, ShieldCheck } from 'lucide-react';
import { LiquidButton } from '@/components/ui/liquid-glass-button';
import { cn } from '@/lib/utils';

const roadmapSteps = [
    {
        id: 1,
        step: "STEP 1",
        days: "Hari 1–10",
        title: "Fondasi & Lisensi Profesional",
        goal: "Goal: Kamu punya lisensi + dasar pengetahuan produk proteksi dan investasi.",
        content: [
            "Proses lisensi untuk bekerja secara profesional",
            "Belajar dasar proteksi, kebutuhan finansial, dan investasi",
            "Pengenalan sistem kerja praktis yang bisa dilakukan via HP",
            "Onboarding 1-on-1 dengan mentor"
        ],
        result: "Hasil akhir: Kamu siap secara legal dan memahami fondasi bisnisnya.",
        icon: ShieldCheck,
        image: "/images/first-step.png",
        className: "md:col-span-2 md:row-span-2"
    },
    {
        id: 2,
        step: "STEP 2",
        days: "Hari 11–30",
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
        icon: Target,
        image: "/images/branding.png",
        className: "md:col-span-1 md:row-span-1"
    },
    {
        id: 3,
        step: "STEP 3",
        days: "Hari 31–60",
        title: "Penguasaan Sistem & Produksi Pertama",
        goal: "", // No explicit goal in script for step 3
        content: [
            "Pola kerja harian yang jelas dan terstruktur",
            "Teknik follow-up yang sopan dan tidak mengganggu",
            "Praktik konsultasi dan closing didampingi mentor",
            "Review dan evaluasi ritme kerjamu",
            "Optimasi konten (untuk yang menjalankan strategi online)",
            "Penekanan pada konsistensi: lakukan pola kerja yang sama setiap hari"
        ],
        result: "Hasil akhir: Kamu mencapai produksi pertama dan siap naik level. Kuncinya: konsisten, ulangi polanya setiap hari, dan kamu akan melihat hasilnya.",
        icon: Trophy,
        image: "/images/checklist.png",
        className: "md:col-span-1 md:row-span-1"
    }
];

const BentoCard = ({ item, index }: { item: typeof roadmapSteps[0], index: number }) => {
    const isLarge = index === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={cn(
                "group relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur-sm transition-all duration-500 hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]",
                item.className
            )}
        >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

            {/* Image Decoration */}
            <div className={cn(
                "absolute transition-all duration-700 ease-out pointer-events-none z-0",
                isLarge
                    ? "top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] opacity-20 group-hover:opacity-40 group-hover:scale-110"
                    : "-bottom-8 -right-8 w-40 h-40 opacity-10 group-hover:opacity-20 rotate-12 group-hover:rotate-6 group-hover:scale-110"
            )}>
                <img src={item.image} alt={item.title} className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(245,158,11,0.3)]" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 h-full flex flex-col p-6 sm:p-8">
                {/* Header: Step & Icon */}
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 mb-2">
                            <span className="text-[10px] font-bold text-amber-500 tracking-wider uppercase">
                                {item.days}
                            </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white/10 group-hover:text-amber-500/20 transition-colors duration-500">
                            {item.step}
                        </h3>
                    </div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/5 flex items-center justify-center border border-amber-500/20 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
                        <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
                    </div>
                </div>

                {/* Main Content */}
                <div className="mt-2 space-y-4">
                    <h4 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-400 transition-colors leading-tight">
                        {item.title}
                    </h4>

                    {/* Goal */}
                    {item.goal && (
                        <p className="text-sm text-amber-200/80 italic border-l-2 border-amber-500/30 pl-3">
                            {item.goal}
                        </p>
                    )}

                    {/* Bullet Points */}
                    <ul className="space-y-2">
                        {item.content.map((point, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-white/70 group-hover:text-white/90 transition-colors">
                                <span className="w-1 h-1 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Result */}
                    <div className="pt-4 mt-2 border-t border-white/10">
                        <p className="text-xs sm:text-sm font-medium text-white/90">
                            <span className="text-amber-500">Hasil akhir: </span>
                            {item.result.replace("Hasil akhir:", "")}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default function SolutionSection() {
    return (
        <section className="relative w-full overflow-hidden py-20 lg:py-32 bg-black">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-900/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* Header */}
                <div className="text-center mb-16 lg:mb-24">
                    <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-amber-500/60 to-transparent mx-auto mb-6"></div>
                    <motion.h1
                        className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter whitespace-normal max-w-4xl mx-auto text-white relative mb-6"
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
                    <p className="text-base sm:text-lg font-light leading-relaxed text-white/70 max-w-2xl mx-auto">
                        3 Fase krusial untuk mengubah hidupmu. Sistem yang teruji, terukur, dan bisa diduplikasi oleh siapa saja.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16 max-w-6xl mx-auto">
                    {/* Left Column - Large Card */}
                    <BentoCard item={roadmapSteps[0]} index={0} />

                    {/* Right Column - Stacked Cards */}
                    <div className="md:col-span-1 flex flex-col gap-6 lg:gap-8">
                        <BentoCard item={roadmapSteps[1]} index={1} />
                        <BentoCard item={roadmapSteps[2]} index={2} />
                    </div>
                </div>

                {/* Affirmation & Call to Action */}
                <div className="text-center max-w-3xl mx-auto">
                    <div className="mb-10 p-6 rounded-2xl bg-amber-900/10 border border-amber-500/20 backdrop-blur-sm">
                        <p className="text-lg sm:text-xl text-white font-medium italic">
                            "Konsistensi dan pengulangan adalah kunci. Bukan tentang seberapa cepat kamu mulai, tetapi seberapa stabil kamu menjalankan sistemnya."
                        </p>
                    </div>

                    <Link href="/solution" className="inline-block group">
                        <LiquidButton
                            size="lg"
                            className="text-white font-semibold px-10 py-5 text-lg bg-amber-600 hover:bg-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_40px_rgba(245,158,11,0.5)] transition-all duration-300"
                        >
                            <span className="flex items-center gap-3">
                                <span>Mulai Roadmap 60 Harimu</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                            </span>
                        </LiquidButton>
                    </Link>
                    <p className="text-xs sm:text-sm text-gray-500 mt-6 font-mono tracking-wide">
                        *LIMITED SLOTS FOR MENTORING BATCH
                    </p>
                </div>
            </div>
        </section>
    );
}
