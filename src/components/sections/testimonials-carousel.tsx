"use client";

import { Card, CardContent } from '@/components/card-8'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

export default function BonusCarousel() {
    return (
        <section className="relative bg-black py-12 md:py-20 overflow-hidden">
            <div className="mx-auto w-full px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-40 relative z-10">
                <div className="relative">
                    {/* Heading Section - focusing on real testimonials */}
                    <div className="text-center mb-12">
                        <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent mx-auto mb-6" style={{ filter: 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.6))' }}></div>
                        <motion.h1 
                            className="text-center text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl whitespace-normal px-4 sm:px-6 md:px-8 lg:px-10 max-w-full mx-auto text-white relative mb-4"
                            style={{
                                background: 'linear-gradient(90deg, #ffffff 0%, #fbbf24 50%, #ffffff 100%)',
                                backgroundSize: '200% 100%',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                textShadow: '0 0 20px rgba(251, 191, 36, 0.5), 0 0 40px rgba(251, 191, 36, 0.3)',
                                filter: 'drop-shadow(0 0 10px rgba(251, 191, 36, 0.4))'
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
                            Jangan Cuman Percaya Kata Saya
                        </motion.h1>
                        <p className="text-xs sm:text-lg font-light leading-relaxed text-slate-300 max-w-3xl mx-auto" style={{ textShadow: '0 0 15px rgba(251, 191, 36, 0.2)' }}>
                            Lihat mereka yang udah merubah karir mereka dari pekerja biasa jadi pengusaha yang penghasilan pasifnya puluhan ratusan hingga milyaran rupiah setiap bulannya
                        </p>
                    </div>
                    
                    <div className="relative z-10 w-full">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                        
                        {/* Card 1 - Bambang Sudianto + Silfianty (Top Income: 1 Milyar/bulan) */}
                        <Card className="relative col-span-1 overflow-hidden bg-black/40 backdrop-blur-md border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 group hover:bg-black/50" style={{ boxShadow: '0 0 20px rgba(251, 191, 36, 0.1)' }}>
                            <CardContent className="relative z-10 p-5 sm:p-8 flex flex-col">
                                {/* Quote Icon */}
                                <div className="mb-5 sm:mb-8">
                                    <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" strokeWidth={2} style={{ filter: 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.6))' }} />
                                </div>
                                
                                {/* Main Quote */}
                                <div className="mb-5 sm:mb-8">
                                    <motion.p 
                                        className="text-sm sm:text-lg font-medium leading-tight"
                                        style={{
                                            background: 'linear-gradient(90deg, #ffffff 0%, #fbbf24 50%, #ffffff 100%)',
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
                                        "Siapapun dan apapun kondisi kita saat ini, jangan pernah takut untuk bermimpi besar."
                                    </motion.p>
                                </div>
                                
                                {/* Story */}
                                <div className="text-white mb-5 sm:mb-8">
                                    <p className="text-xs sm:text-base text-white/80 leading-relaxed font-light">
                                        Percaya, Fokus dan Konsisten adalah kunci utama meraih impian. Sejak bergabung tahun 2003, mereka membuktikan perjalanan luar biasa dari nol hingga mencapai puncak kesuksesan dengan dedikasi yang tidak pernah surut.
                                    </p>
                                </div>

                                {/* Income */}
                                <div className="text-white mb-5 sm:mb-8">
                                    <motion.div 
                                        className="text-xs sm:text-sm font-semibold"
                                        style={{
                                            background: 'linear-gradient(90deg, #ffffff 0%, #fbbf24 50%, #ffffff 100%)',
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
                                        <span className="font-medium">Penghasilan:</span> 1 Milyar/bulan
                                    </motion.div>
                                </div>
                                
                                {/* Profile Section */}
                                <div className="flex items-center space-x-3 sm:space-x-5">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg overflow-hidden flex-shrink-0">
                                        <img 
                                            src="/images/bambangsilfi.jpeg"
                                            alt="Bambang Sudianto + Silfianty"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-sm sm:text-base font-semibold text-white">Bambang + Silfianty</h3>
                                        <p className="text-xs sm:text-sm text-white/70 font-light">Ex-Purchasing PT. Pepsi Cola</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Card 2 - Suci Lestari (150 jt/bulan) */}
                        <Card className="relative col-span-1 overflow-hidden bg-black/40 backdrop-blur-md border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 group hover:bg-black/50" style={{ boxShadow: '0 0 20px rgba(251, 191, 36, 0.1)' }}>
                            <CardContent className="relative z-10 p-5 sm:p-8 flex flex-col">
                                {/* Quote Icon */}
                                <div className="mb-5 sm:mb-8">
                                    <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" strokeWidth={2} style={{ filter: 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.6))' }} />
                                </div>
                                
                                {/* Main Quote */}
                                <div className="mb-5 sm:mb-8">
                                    <motion.p 
                                        className="text-sm sm:text-lg font-medium leading-tight"
                                        style={{
                                            background: 'linear-gradient(90deg, #ffffff 0%, #fbbf24 50%, #ffffff 100%)',
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
                                        "Dari karyawan biasa jadi entrepreneur — sekarang hidup dengan kebebasan yang dulu cuma bisa dibayangkan."
                                    </motion.p>
                                </div>
                                
                                {/* Story */}
                                <div className="text-white mb-5 sm:mb-8">
                                    <p className="text-xs sm:text-base text-white/80 leading-relaxed font-light">
                                        Dulu hanya pekerja 9-5 biasa, sekarang bisa membangun bisnis dari mana saja, kapan saja. Penghasilan impian, gaya hidup impian — semua dimulai dari satu keputusan kecil. Bekerja dari mana saja, hidup dengan tujuan yang jelas.
                                    </p>
                                </div>

                                {/* Income */}
                                <div className="text-white mb-5 sm:mb-8">
                                    <motion.div 
                                        className="text-xs sm:text-sm font-semibold"
                                        style={{
                                            background: 'linear-gradient(90deg, #ffffff 0%, #fbbf24 50%, #ffffff 100%)',
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
                                        <span className="font-medium">Penghasilan:</span> 150 jt/bulan
                                    </motion.div>
                                </div>
                                
                                {/* Profile Section */}
                                <div className="flex items-center space-x-3 sm:space-x-5">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg overflow-hidden flex-shrink-0">
                                        <img 
                                            src="/images/sucilestari.jpeg"
                                            alt="Suci Lestari"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-sm sm:text-base font-semibold text-white">Suci Lestari</h3>
                                        <p className="text-xs sm:text-sm text-white/70 font-light">Ex-Corporate</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Card 3 - Marshel Yap (120 jt/bulan) */}
                        <Card className="relative col-span-1 overflow-hidden bg-black/40 backdrop-blur-md border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 group hover:bg-black/50" style={{ boxShadow: '0 0 20px rgba(251, 191, 36, 0.1)' }}>
                            <CardContent className="relative z-10 p-5 sm:p-8 flex flex-col">
                                {/* Quote Icon */}
                                <div className="mb-5 sm:mb-8">
                                    <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" strokeWidth={2} style={{ filter: 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.6))' }} />
                                </div>
                                
                                {/* Main Quote */}
                                <div className="mb-5 sm:mb-8">
                                    <motion.p 
                                        className="text-sm sm:text-lg font-medium leading-tight"
                                        style={{
                                            background: 'linear-gradient(90deg, #ffffff 0%, #fbbf24 50%, #ffffff 100%)',
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
                                        "Dulu ga pernah nyangka, dari keluarga menengah ke bawah yang bahkan ga punya rumah sendiri."
                                    </motion.p>
                                </div>
                                
                                {/* Story */}
                                <div className="text-white mb-5 sm:mb-8">
                                    <p className="text-xs sm:text-base text-white/80 leading-relaxed font-light">
                                        Marshel membuktikan bahwa latar belakang tidak menentukan masa depan. Dari keluarga yang dulu tidak punya rumah sendiri, kini bisa menikmati perjalanan ke Asia & Eropa setiap tahun. Yang dulu hanya impian kini jadi kenyataan indah.
                                    </p>
                                </div>

                                {/* Income */}
                                <div className="text-white mb-5 sm:mb-8">
                                    <motion.div 
                                        className="text-xs sm:text-sm font-semibold"
                                        style={{
                                            background: 'linear-gradient(90deg, #ffffff 0%, #fbbf24 50%, #ffffff 100%)',
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
                                        <span className="font-medium">Penghasilan:</span> 120 jt/bulan
                                    </motion.div>
                                </div>
                                
                                {/* Profile Section */}
                                <div className="flex items-center space-x-3 sm:space-x-5">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg overflow-hidden flex-shrink-0">
                                        <img 
                                            src="/images/marsel-yap.jpeg"
                                            alt="Marshel Yap"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-sm sm:text-base font-semibold text-white">Marshel Yap</h3>
                                        <p className="text-xs sm:text-sm text-white/70 font-light">Ex-Marketing</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}