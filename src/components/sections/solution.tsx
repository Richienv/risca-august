"use client";

import { Card, CardContent } from '@/components/card-8'
import { motion } from 'framer-motion'

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

export default function SolutionSection() {
    return (
        <section className="relative bg-black py-12 md:py-20 overflow-hidden">
            <div className="mx-auto w-full px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-40 relative z-10">
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
                            60 Hari Menuju Business Partner
                        </motion.h1>
                        <p className="text-sm lg:text-base font-light leading-relaxed text-slate-300 max-w-3xl mx-auto">
                            Program sistematis 60 hari: ketemu 2 orang setiap hari, capai rasio closing 4:1, raih omzet Rp 360 juta dalam 8 minggu, dan dapatkan komisi hingga Rp 6,9 juta per bulan. Bonus: promosi ke Business Partner!
                        </p>
                    </div>
                    
                    {/* Two Column Layout */}
                    <div className="relative z-10 w-full">
                        <div className="space-y-8 lg:space-y-12">
                        
                        {transformations.map((transformation, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                className={`${
                                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                }`}
                            >
                                {/* Unified Card Container */}
                                <Card className="relative overflow-hidden bg-black/40 backdrop-blur-md border-transparent hover:border-transparent transition-all duration-300 group hover:bg-black/50">
                                    <CardContent className="p-0">
                                        <div className={`flex flex-row items-stretch gap-0 ${
                                            index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                        }`}>
                                            {/* Image Side */}
                                            <div className="w-2/5 sm:w-2/5 lg:w-1/2 relative flex-shrink-0">
                                                <div className="relative overflow-hidden h-full">
                                                    <img 
                                                        src={transformation.image}
                                                        alt={transformation.subtitle}
                                                        className="w-full h-full min-h-[200px] sm:min-h-[280px] lg:h-96 object-cover"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                                    
                                                </div>
                                            </div>

                                            {/* Text Side */}
                                            <div className="flex-1 w-3/5 sm:w-3/5 lg:w-1/2 relative">
                                                <div className="relative z-10 p-4 sm:p-5 lg:p-8 h-full flex flex-col">
                                                    {/* Main Quote/Title */}
                                                    <div className="mb-3 sm:mb-5 lg:mb-8">
                                                        {index === transformations.length - 1 ? (
                                                            <motion.p 
                                                                className="text-sm sm:text-base lg:text-lg leading-tight font-medium tracking-wide"
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
                                                            <p className="text-sm sm:text-base lg:text-lg leading-tight text-white font-medium">
                                                                {transformation.subtitle}
                                                            </p>
                                                        )}
                                                    </div>
                                                    
                                                    {/* Story with Numbers */}
                                                    <div className="text-white mb-3 sm:mb-5 lg:mb-8 flex-1">
                                                        <p className={`text-xs sm:text-sm lg:text-base leading-relaxed font-light ${
                                                            index === transformations.length - 1
                                                                ? 'bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent font-semibold'
                                                                : 'text-white/80'
                                                        }`}>
                                                            {transformation.description}
                                                        </p>
                                                    </div>
                                                    
                                                    {/* Phase Info Section */}
                                                    <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-5">
                                                        <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-lg bg-pink-500/20 flex items-center justify-center flex-shrink-0">
                                                            <span className="text-pink-400 text-xs sm:text-sm lg:text-base font-bold">
                                                                {index + 1}
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <h3 className="text-xs sm:text-sm lg:text-base font-semibold text-white">Fase {index + 1}</h3>
                                                            <p className="text-xs sm:text-xs lg:text-sm text-white/70 font-light">60 Hari Program</p>
                                                        </div>
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
                            <p className="text-white/70 text-xs">
                                <strong className="text-white">Catatan:</strong> ALP = pembayaran 1 bulan dihitung omzet 12 bulan (360jt/tahun = 30jt/bulan) | BE = Business Executive | BP = Business Partner
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
