"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ChevronDown, CheckCircle2, Star } from 'lucide-react';
import { LiquidGlassContainer } from '@/components/ui/liquid-glass-container';
import { LiquidButton } from '@/components/ui/liquid-glass-button';
import { useState } from 'react';
import { cn } from '@/lib/utils';

// Placeholder data for 10 Phases - User to update content
const phases = [
    {
        id: 1,
        title: "Fase 1: The Awakening",
        description: "Menyadari potensi diri dan peluang di industri asuransi. Memahami mindset entrepreneur dan visi jangka panjang.",
        image: "/images/system-licence.png" // Placeholder
    },
    {
        id: 2,
        title: "Fase 2: Foundation Building",
        description: "Mempelajari dasar-dasar produk, sistem, dan cara kerja. Mendapatkan lisensi resmi dan akses ke tools bisnis.",
        image: "/images/knowledge-pack.png" // Placeholder
    },
    {
        id: 3,
        title: "Fase 3: First Selling",
        description: "Melakukan penjualan pertama dengan bimbingan mentor. Merasakan komisi pertama dan membangun kepercayaan diri.",
        image: "/images/storytelling-kit.png" // Placeholder
    },
    {
        id: 4,
        title: "Fase 4: Skill Mastery",
        description: "Mengasah skill komunikasi, handling objection, dan closing. Mengikuti training lanjutan dan roleplay intensif.",
        image: "/images/exclusive-bootcamp.png" // Placeholder
    },
    {
        id: 5,
        title: "Fase 5: Consistent Production",
        description: "Mencapai konsistensi penjualan setiap bulan. Membangun pipeline nasabah yang sehat dan referral system.",
        image: "/images/first-income.png" // Placeholder
    },
    {
        id: 6,
        title: "Fase 6: Team Initiation",
        description: "Mulai merekrut anggota tim pertama. Belajar leadership dasar dan cara menduplikasi kesuksesan diri sendiri.",
        image: "/images/leadership-pass.png" // Placeholder
    },
    {
        id: 7,
        title: "Fase 7: Team Development",
        description: "Mengembangkan tim menjadi produktif. Melakukan mentoring dan coaching rutin untuk anggota tim.",
        image: "/images/logam-mulia.png" // Placeholder
    },
    {
        id: 8,
        title: "Fase 8: Leader of Leaders",
        description: "Mencetak leader baru di dalam tim. Membangun sistem kerja tim yang mandiri dan solid.",
        image: "/images/ipad-trip-europe.png" // Placeholder
    },
    {
        id: 9,
        title: "Fase 9: Business Expansion",
        description: "Memperluas jaringan bisnis dan market. Mencapai target omset grup yang signifikan dan passive income yang stabil.",
        image: "/images/system-licence.png" // Placeholder
    },
    {
        id: 10,
        title: "Fase 10: Business Partner",
        description: "Mencapai puncak karir sebagai Business Partner. Memiliki kebebasan finansial dan waktu sepenuhnya, serta legacy bisnis.",
        image: "/images/knowledge-pack.png" // Placeholder
    }
];

const PhaseAccordionItem = ({ item, isOpen, onClick }: { item: typeof phases[0], isOpen: boolean, onClick: () => void }) => {
    return (
        <motion.div
            initial={false}
            className={cn(
                "border rounded-xl overflow-hidden transition-all duration-300",
                isOpen ? "border-amber-500/50 bg-amber-500/5" : "border-white/10 bg-white/5 hover:border-amber-500/30"
            )}
        >
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between p-4 sm:p-6 text-left"
            >
                <div className="flex items-center gap-4">
                    <div className={cn(
                        "flex items-center justify-center w-10 h-10 rounded-full font-bold text-sm transition-colors",
                        isOpen ? "bg-amber-500 text-black" : "bg-white/10 text-white/50"
                    )}>
                        {item.id}
                    </div>
                    <div>
                        <h3 className={cn(
                            "text-lg sm:text-xl font-bold transition-colors",
                            isOpen ? "text-amber-400" : "text-white"
                        )}>
                            {item.title}
                        </h3>
                    </div>
                </div>
                <div className={cn(
                    "p-2 rounded-full transition-all duration-300",
                    isOpen ? "text-amber-500 rotate-180" : "text-white/50"
                )}>
                    <ChevronDown className="w-5 h-5" />
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="p-4 sm:p-6 pt-0 border-t border-white/5 mt-2">
                            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                                {/* Image Placeholder */}
                                <div className="w-full md:w-1/3 aspect-video rounded-lg overflow-hidden bg-black/50 border border-white/10 relative group">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                </div>

                                {/* Content */}
                                <div className="flex-1 space-y-4">
                                    <p className="text-white/80 leading-relaxed">
                                        {item.description}
                                    </p>
                                    <div className="flex items-center gap-2 text-sm text-amber-500/80">
                                        <Star className="w-4 h-4 fill-amber-500/20" />
                                        <span>Key Milestone</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default function SolutionSection() {
    const [openPhase, setOpenPhase] = useState<number | null>(1);

    const togglePhase = (id: number) => {
        setOpenPhase(openPhase === id ? null : id);
    };

    return (
        <section className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24 bg-black">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none" />
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-amber-500/60 to-transparent mx-auto mb-6"></div>
                    <motion.h1
                        className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter whitespace-normal max-w-full mx-auto text-white relative mb-4"
                        style={{
                            background: 'linear-gradient(90deg, #ffffff 0%, #d97706 50%, #ffffff 100%)', // Amber-600
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
                    <p className="text-base sm:text-lg font-light leading-relaxed text-white/70 max-w-3xl mx-auto mb-12">
                        Roadmap karir yang jelas dan terukur. Setiap fase dirancang untuk memastikan pertumbuhan income dan kapasitas diri Anda.
                    </p>
                </div>

                {/* 10 Phases Accordion */}
                <div className="space-y-4 mb-16">
                    {phases.map((phase) => (
                        <PhaseAccordionItem
                            key={phase.id}
                            item={phase}
                            isOpen={openPhase === phase.id}
                            onClick={() => togglePhase(phase.id)}
                        />
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <Link href="#contact" className="inline-block">
                        <LiquidButton
                            size="lg"
                            className="text-white font-semibold px-8 py-4 text-lg bg-amber-600 hover:bg-amber-500"
                        >
                            <span className="flex items-center gap-3">
                                <span>Mulai Fase Pertamamu</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                            </span>
                        </LiquidButton>
                    </Link>
                    <p className="text-xs sm:text-sm text-gray-400 mt-4">
                        Jangan tunda kesuksesanmu. Ambil langkah pertama sekarang.
                    </p>
                </div>
            </div>
        </section>
    );
}
