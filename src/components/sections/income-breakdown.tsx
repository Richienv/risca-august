"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, DollarSign, Users, TrendingUp, Wallet, Calculator, Target, Gift } from 'lucide-react';
import { cn } from '@/lib/utils';

// Reusable Collapsible Section Component
const IncomeAccordionItem = ({
    title,
    icon: Icon,
    isOpen,
    onClick,
    children
}: {
    title: string;
    icon: any;
    isOpen: boolean;
    onClick: () => void;
    children: React.ReactNode;
}) => {
    return (
        <div className="mb-4 rounded-2xl overflow-hidden border border-amber-500/20 bg-black/40 backdrop-blur-sm transition-all duration-300 hover:border-amber-500/40">
            <button
                onClick={onClick}
                className={cn(
                    "w-full flex items-center justify-between p-6 text-left transition-colors",
                    isOpen ? "bg-amber-500/10" : "hover:bg-white/5"
                )}
            >
                <div className="flex items-center gap-4">
                    <div className={cn(
                        "p-2 rounded-lg transition-colors",
                        isOpen ? "bg-amber-500 text-black" : "bg-white/10 text-amber-500"
                    )}>
                        <Icon className="w-6 h-6" />
                    </div>
                    <h3 className={cn(
                        "text-xl font-semibold transition-colors",
                        isOpen ? "text-amber-400" : "text-white"
                    )}>
                        {title}
                    </h3>
                </div>
                <div className={cn(
                    "p-1 rounded-full border transition-all duration-300",
                    isOpen ? "border-amber-500 text-amber-500 rotate-180" : "border-white/20 text-white/60"
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
                        <div className="p-6 border-t border-white/10">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const IncomeBreakdownSection = () => {
    const [openSection, setOpenSection] = useState<string | null>("simulation");

    const toggleSection = (section: string) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <div id="income-breakdown" className="relative w-full text-white overflow-hidden py-16 md:py-24 bg-black">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-black/40 z-10" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none z-0" />

            <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-xs sm:text-sm font-mono font-light text-white/70 uppercase tracking-[0.2em] opacity-80 mb-4">
                        Financial Breakdown
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
                        Berapa Penghasilan <br /> Yang Bisa Kamu Dapat?
                    </motion.h1>
                    <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
                        Hitungan transparan tanpa ada yang ditutup-tutupi. Simak simulasi detailnya di bawah ini.
                    </p>
                </div>

                {/* Accordion Sections */}
                <div className="mb-16">
                    {/* 1. Simulation Case Study (The Image Logic) */}
                    <IncomeAccordionItem
                        title="Simulasi Target: 300 Juta (3 Bulan)"
                        icon={Calculator}
                        isOpen={openSection === "simulation"}
                        onClick={() => toggleSection("simulation")}
                    >
                        <div className="space-y-8">
                            {/* Target Breakdown */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                                    <div className="text-white/60 text-sm mb-1">Target 3 Bulan</div>
                                    <div className="text-2xl font-bold text-amber-400">300 Jt</div>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                                    <div className="text-white/60 text-sm mb-1">Target Per Bulan</div>
                                    <div className="text-2xl font-bold text-white">100 Jt</div>
                                </div>
                                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                                    <div className="text-white/60 text-sm mb-1">Target Per Minggu</div>
                                    <div className="text-2xl font-bold text-white">25 Jt</div>
                                </div>
                            </div>

                            {/* Calculation Details */}
                            <div className="max-w-2xl mx-auto">
                                <div className="space-y-6">
                                    <div className="space-y-4">
                                        <h4 className="font-semibold text-white flex items-center gap-2 justify-center">
                                            <DollarSign className="w-4 h-4 text-amber-500" />
                                            Perhitungan Income
                                        </h4>

                                        {/* Komisi */}
                                        <div className="p-6 rounded-xl bg-white/5 border border-white/10 space-y-2">
                                            <div className="flex justify-between items-center text-base text-white/70">
                                                <span>Komisi (Rate 25%)</span>
                                                <span className="font-mono">300 Jt x 25%</span>
                                            </div>
                                            <div className="flex justify-between items-center text-2xl font-bold text-white pt-2 border-t border-white/10 mt-2">
                                                <span>Total Komisi</span>
                                                <span>Rp 75.000.000</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Grand Total */}
                                    <div className="p-6 rounded-xl bg-gradient-to-r from-amber-600 to-amber-800 border border-amber-500/30">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-white/90 font-medium">Total Income (3 Bulan)</span>
                                        </div>
                                        <div className="text-4xl md:text-5xl font-bold text-white font-mono text-center py-2">
                                            Rp 75.000.000
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </IncomeAccordionItem>

                    {/* 2. Fixed Salary & Referral */}
                    <IncomeAccordionItem
                        title="Income Tambahan: Allowance & Referral"
                        icon={Gift}
                        isOpen={openSection === "additional"}
                        onClick={() => toggleSection("additional")}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Gaji Tetap */}
                            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-green-500/20 text-green-400">
                                        <Wallet className="w-5 h-5" />
                                    </div>
                                    <h4 className="text-lg font-bold text-white">Allowance</h4>
                                </div>
                                <div className="text-3xl font-bold text-white mb-2">Rp 5.000.000<span className="text-sm font-normal text-white/50">/bulan</span></div>
                                <p className="text-white/70 text-sm">
                                    Pasti dapat diluar bonus dan komisi. Ini adalah jaring pengaman finansialmu setiap bulan.
                                </p>
                            </div>

                            {/* Referral Bonus */}
                            <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                                        <Users className="w-5 h-5" />
                                    </div>
                                    <h4 className="text-lg font-bold text-white">Bonus Referral Tim</h4>
                                </div>
                                <div className="text-3xl font-bold text-white mb-2">25%<span className="text-sm font-normal text-white/50"> Overriding</span></div>
                                <p className="text-white/70 text-sm">
                                    Dapatkan 25% dari setiap closing yang dilakukan oleh tim kamu. Passive income yang terus mengalir.
                                </p>
                            </div>
                        </div>
                    </IncomeAccordionItem>
                </div>

                {/* Summary Note */}
                <div className="text-center">
                    <p className="text-white/50 text-sm max-w-2xl mx-auto italic">
                        *Simulasi di atas adalah gambaran potensi penghasilan. Hasil nyata bergantung pada kerja keras, konsistensi, dan penerapan sistem yang sudah kami sediakan.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default IncomeBreakdownSection;
