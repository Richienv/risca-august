"use client";

import { Card, CardContent } from '@/components/card-8'
import { motion } from 'framer-motion'

const transformations = [
  {
    title: "Hari 1–10",
    subtitle: "Nyalakan Mimpi & Siapkan Diri",
    description: "Temukan alasan terbesarmu. Kenali peluang bisnisnya. Dapatkan arahan langsung dari mentor dan komunitas support yang siap bantu kamu sukses dari awal.",
    image: "/images/first-step.png"
  },
  {
    title: "Hari 11–20",
    subtitle: "Closing Pertamamu",
    description: "Belajar cara presentasi yang mudah dipahami. Mulai cerita ke orang terdekat. Dengan panduan mentor, kamu akan closing 1–2 klien pertamamu dan capai ALP hingga 50–100 juta. Di sini kamu mulai merasakan income nyata.",
    image: "/images/deal.png"
  },
  {
    title: "Hari 21–30",
    subtitle: "Bangun Kredibilitas & Magnet Sosial",
    description: "Posting testimoni, share progres kamu, dan mulai bangun personal branding. Orang mulai percaya, bertanya, dan tertarik ikut.",
    image: "/images/branding.png"
  },
  {
    title: "Hari 31–40",
    subtitle: "Gandakan Hasilmu",
    description: "Teruskan pola yang berhasil. Closing rutin. Targetmu adalah tembus 150–200 juta ALP dari penjualan pribadi. Income makin terasa.",
    image: "/images/meetmeet.png"
  },
  {
    title: "Hari 41–50",
    subtitle: "Rekrut Tim Pertamamu",
    description: "Sudah ada yang tertarik ikut? Sekarang saatnya kamu latih 2 orang untuk jadi BE. Ajak mereka duplikasi sistem yang kamu pakai.",
    image: "/images/cheers.png"
  },
  {
    title: "Hari 51–60",
    subtitle: "Jadi Leader Kecil",
    description: "Bantu tim kamu closing. Jalankan sesi mentoring sederhana. Kamu sekarang bukan cuma penjual, tapi pembimbing.",
    image: "/images/speach.png"
  },
  {
    title: "Hari 61–70",
    subtitle: "Bangun Struktur Menuju BP",
    description: "Gabungkan hasil pribadi dan tim. Kamu sekarang makin dekat ke 300 juta ALP. Income bisa tembus Rp 4–5 juta/bulan.",
    image: "/images/study.png"
  },
  {
    title: "Hari 71–80",
    subtitle: "Kunci Posisi BP",
    description: "Pastikan semua syarat terpenuhi (Option 1/2/3). Validasi income, buat sistem kerja tim, dan siapkan langkah scale-up.",
    image: "/images/checklist.png"
  },
  {
    title: "Hari 81–90",
    subtitle: "Tampil & Jadi Role Model",
    description: "Ceritakan perjalananmu. Rekrut BE baru. Duplikasi pola suksesmu. Sekarang kamu bukan cuma punya penghasilan — tapi juga punya bisnis.",
    image: "/images/confident.png"
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
                            90 Hari Menuju Versi Terbaik Diri Kamu
                        </motion.h1>
                        <p className="text-sm lg:text-base font-light leading-relaxed text-slate-300 max-w-3xl mx-auto">
                            Mulai dari nol, kamu akan dibimbing untuk closing pertama dalam 2 minggu, bangun tim dalam 2 bulan, dan capai posisi Business Partner dalam 90 hari. Tanpa pengalaman? Bukan masalah. Asal niat dan komitmen, hasilnya bisa kamu rasakan cepat.
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
                                                        <p className="text-sm sm:text-base lg:text-lg font-medium text-white leading-tight">
                                                            {transformation.subtitle}
                                                        </p>
                                                    </div>
                                                    
                                                    {/* Story with Numbers */}
                                                    <div className="text-white mb-3 sm:mb-5 lg:mb-8 flex-1">
                                                        <p className="text-xs sm:text-sm lg:text-base text-white/80 leading-relaxed font-light">
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
                                                            <p className="text-xs sm:text-xs lg:text-sm text-white/70 font-light">90 Hari Program</p>
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
                </div>
            </div>
        </section>
    )
}
