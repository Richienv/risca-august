"use client";

import { Card, CardContent } from '@/components/card-8'
import { motion } from 'framer-motion'
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Footer from "@/components/sections/footer";
import { Metadata } from "next";

const transformations = [
  {
    title: "Hari 1–7",
    subtitle: "Setup & Persiapan Awal",
    description: "Temukan alasan terbesarmu. Kenali peluang bisnisnya. Dapatkan arahan langsung dari mentor dan komunitas support. Target: siapkan mindset dan sistem kerja.",
    image: "/images/first-step.png"
  },
  {
    title: "Hari 8–14",
    subtitle: "Mulai Ketemu 2 Orang Per Hari",
    description: "Aktivitas harian: ketemu 2 orang setiap hari (6 hari kerja = 12 orang per minggu). Belajar cara presentasi sederhana. Fokus pada orang terdekat dulu.",
    image: "/images/deal.png"
  },
  {
    title: "Hari 15–21",
    subtitle: "Closing Pertama: Rasio 4:1",
    description: "Sistem ini mudah: cukup ngobrol sama 12 orang dalam seminggu (2 orang per hari). Dari 12 orang itu, pasti ada 3 yang tertarik beli. Setiap orang yang beli = Rp 15 juta masuk ke kantong kamu. Total seminggu bisa Rp 45 juta!",
    image: "/images/branding.png"
  },
  {
    title: "Hari 22–28",
    subtitle: "Bangun Kredibilitas & Momentum",
    description: "Posting testimoni dan share progress. Teruskan pola: 12 orang per minggu → 3 closing → Rp 45 juta. Orang mulai percaya dan tertarik ikut.",
    image: "/images/meetmeet.png"
  },
  {
    title: "Hari 29–35",
    subtitle: "Konsistensi & Duplikasi Sistem",
    description: "Sudah ada yang tertarik ikut? Mulai latih 1-2 orang untuk jadi BE. Ajak mereka duplikasi sistem yang kamu pakai. Tetap focus pada target pribadi.",
    image: "/images/cheers.png"
  },
  {
    title: "Hari 36–42",
    subtitle: "Jadi Leader & Mentor",
    description: "Bantu tim kamu closing. Jalankan sesi mentoring sederhana. Kamu sekarang bukan cuma penjual, tapi pembimbing. Gabungkan hasil pribadi dan tim.",
    image: "/images/speach.png"
  },
  {
    title: "Hari 43–49",
    subtitle: "Bangun Struktur Menuju BP",
    description: "Sekarang kamu dapat bonus dari tim! Setiap tim kamu closing, kamu juga dapat untung. Semakin bagus performa tim, semakin besar penghasilan kamu. ",
    image: "/images/study.png"
  },
  {
    title: "Hari 50–56",
    subtitle: "Kunci Posisi BP",
    description: "Pastikan semua syarat terpenuhi. Target: 300 juta ALP total, income Rp 6-7 juta per bulan (komisi 23,25%). Hasil tim + hasil pribadi = jalan cepat menuju promosi jadi ultimate leader!",
    image: "/images/checklist.png"
  },
  {
    title: "Hari 57–60",
    subtitle: "Raih Status Business Partner",
    description: "Ceritakan perjalananmu. Rekrut BE baru. Duplikasi pola suksesmu. Sekarang kamu bukan cuma punya penghasilan — tapi juga punya bisnis dan tim yang solid.",
    image: "/images/confident.png"
  },
  {
    title: "Bonus Achievement",
    subtitle: "Hadiah Khusus Business Partner",
    description: "Kamu berhasil! iPad Rp 6 juta + Logam Mulia 5 gram Rp 10 juta menunggumu. Total Rp 16 juta langsung cair ke tanganmu. Ini bukan mimpi - ini hasilnya kerja kerasmu!",
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

            <section className="relative bg-black py-12 md:py-20 overflow-hidden">
                <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 relative z-10">
                    <div className="relative">
                        {/* Heading Section */}
                        <div className="text-center mb-12">
                            <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mb-6"></div>
                            <motion.h1 
                                className="text-center text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl whitespace-normal px-4 sm:px-6 md:px-8 lg:px-10 max-w-full mx-auto text-white relative mb-4"
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
                                50 Hari Menuju Business Partner
                            </motion.h1>
                            <p className="text-sm lg:text-base font-light leading-relaxed text-slate-300 max-w-4xl mx-auto">
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
                                    <Card className="w-full relative overflow-hidden bg-black/40 backdrop-blur-md border-transparent hover:border-transparent transition-all duration-300 group hover:bg-black/50">
                                        <CardContent className="p-0 w-full">
                                            <div className={`flex flex-col lg:flex-row items-center w-full ${
                                                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
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
                                                            <p className={`text-sm lg:text-base xl:text-lg leading-relaxed ${
                                                                index === transformations.length - 1
                                                                    ? 'bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent font-semibold'
                                                                    : 'text-white/80 font-light'
                                                            }`}>
                                                                {transformation.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}

                            </div>
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
            </section>

            <Footer />
        </>
    )
}