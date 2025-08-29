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
                            Jangan Cuman Percaya Kata Saya
                        </motion.h1>
                        <p className="text-xs sm:text-lg font-light leading-relaxed text-slate-300 max-w-3xl mx-auto">
                            Lihat mereka yang udah merubah karir mereka dari pekerja biasa jadi pengusaha yang penghasilan pasifnya puluhan ratusan hingga milyaran rupiah setiap bulannya
                        </p>
                    </div>
                    
                    <div className="relative z-10 w-full">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                        
                        {/* Card 1 - Yovina Salim */}
                        <Card className="relative col-span-1 overflow-hidden bg-black/40 backdrop-blur-md border-white/10 hover:border-white/20 transition-all duration-300 group hover:bg-black/50">
                            <CardContent className="relative z-10 p-5 sm:p-8 flex flex-col">
                                {/* Quote Icon */}
                                <div className="mb-5 sm:mb-8">
                                    <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500" strokeWidth={2} />
                                </div>
                                
                                {/* Main Quote */}
                                <div className="mb-5 sm:mb-8">
                                    <p className="text-sm sm:text-lg font-medium text-white leading-tight">
                                        "Dulu aku hanya sibuk lindungi mimpi orang lain, sekarang saatnya aku wujudkan mimpiku sendiri."
                                    </p>
                                </div>
                                
                                {/* Story with Numbers */}
                                <div className="text-white mb-5 sm:mb-8">
                                    <p className="text-xs sm:text-base text-white/80 leading-relaxed font-light">
                                        Berawal dari kerja keras & konsistensi, Yovina berhasil capai reward perjalanan gratis tak terlupakan bersama Allianz Vision. Dari mimpi jadi nyata — dan ini baru permulaan.
                                    </p>
                                </div>
                                
                                {/* Profile Section */}
                                <div className="flex items-center space-x-3 sm:space-x-5">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg overflow-hidden flex-shrink-0">
                                        <img 
                                            src="/images/yovina.jpeg"
                                            alt="Yovina Salim"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-sm sm:text-base font-semibold text-white">Yovina Salim</h3>
                                        <p className="text-xs sm:text-sm text-white/70 font-light">Joined 2024</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Card 2 - Hartono & Athena */}
                        <Card className="relative col-span-1 overflow-hidden bg-black/40 backdrop-blur-md border-white/10 hover:border-white/20 transition-all duration-300 group hover:bg-black/50">
                            <CardContent className="relative z-10 p-5 sm:p-8 flex flex-col">
                                {/* Quote Icon */}
                                <div className="mb-5 sm:mb-8">
                                    <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500" strokeWidth={2} />
                                </div>
                                
                                {/* Main Quote */}
                                <div className="mb-5 sm:mb-8">
                                    <p className="text-sm sm:text-lg font-medium text-white leading-tight">
                                        "Dari nol hingga berprestasi bersama Allianz — inilah perjalanan hidup kami."
                                    </p>
                                </div>
                                
                                {/* Story with Numbers */}
                                <div className="text-white mb-5 sm:mb-8">
                                    <p className="text-xs sm:text-base text-white/80 leading-relaxed font-light">
                                        Memulai di tahun 2021 hanya dengan harapan hidup lebih baik, Hartono & Athena kini menikmati hasil luar biasa. Allianz membuka pintu mimpi yang lebih besar, hingga kini penghasilan mereka mencapai 1 miliar/tahun.
                                    </p>
                                </div>
                                
                                {/* Profile Section */}
                                <div className="flex items-center space-x-3 sm:space-x-5">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg overflow-hidden flex-shrink-0">
                                        <img 
                                            src="/images/hartono-athena.jpg"
                                            alt="Hartono"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-sm sm:text-base font-semibold text-white">Hartono & Athena</h3>
                                        <p className="text-xs sm:text-sm text-white/70 font-light">Joined 2021</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Card 3 - Ayu Rahayu */}
                        <Card className="relative col-span-1 overflow-hidden bg-black/40 backdrop-blur-md border-white/10 hover:border-white/20 transition-all duration-300 group hover:bg-black/50">
                            <CardContent className="relative z-10 p-5 sm:p-8 flex flex-col">
                                {/* Quote Icon */}
                                <div className="mb-5 sm:mb-8">
                                    <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500" strokeWidth={2} />
                                </div>
                                
                                {/* Main Quote */}
                                <div className="mb-5 sm:mb-8">
                                    <p className="text-sm sm:text-lg font-medium text-white leading-tight">
                                        "Awalnya cuma iseng join… sekarang satu per satu mimpi terwujud."
                                    </p>
                                </div>
                                
                                {/* Story with Numbers */}
                                <div className="text-white mb-5 sm:mb-8">
                                    <p className="text-xs sm:text-base text-white/80 leading-relaxed font-light">
                                        Dari sekadar ingin punya proteksi sendiri, Ayu menemukan panggilan lebih besar: membantu orang lain lindungi yang mereka cintai. Perjalanan itu bukan hanya membawa dampak bagi banyak orang, tapi juga wujudkan mimpinya — keliling dunia, beli mobil & rumah impian, hingga jadi berkat bagi sesama.
                                    </p>
                                </div>
                                
                                {/* Profile Section */}
                                <div className="flex items-center space-x-3 sm:space-x-5">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg overflow-hidden flex-shrink-0">
                                        <img 
                                            src="/images/ayu.jpeg"
                                            alt="Ayu Rahayu"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-sm sm:text-base font-semibold text-white">Ayu Rahayu</h3>
                                        <p className="text-xs sm:text-sm text-white/70 font-light">Joined 2022</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>


                        {/* Card 5 - Eni Rofikoh */}
                        <Card className="relative col-span-1 overflow-hidden bg-black/40 backdrop-blur-md border-white/10 hover:border-white/20 transition-all duration-300 group hover:bg-black/50">
                            <CardContent className="relative z-10 p-5 sm:p-8 flex flex-col">
                                {/* Quote Icon */}
                                <div className="mb-5 sm:mb-8">
                                    <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500" strokeWidth={2} />
                                </div>
                                
                                {/* Main Quote */}
                                <div className="mb-5 sm:mb-8">
                                    <p className="text-sm sm:text-lg font-medium text-white leading-tight">
                                        "Dulu harus tunggu usaha jalan dulu baru terasa hasilnya… sekarang percepatan income benar-benar nyata."
                                    </p>
                                </div>
                                
                                {/* Story with Numbers */}
                                <div className="text-white mb-5 sm:mb-8">
                                    <p className="text-xs sm:text-base text-white/80 leading-relaxed font-light">
                                        Sejak bergabung di Allianz tahun 2023, Eni merasakan hidup yang lebih bebas: bisa sering traveling dengan uang sendiri, atur jam kerja sesuka hati, dan punya lebih banyak waktu berkualitas bersama keluarga. Dengan kerja keras & pantang menyerah, Tuhan selalu buka jalan menuju impian.
                                    </p>
                                </div>
                                
                                {/* Profile Section */}
                                <div className="flex items-center space-x-3 sm:space-x-5">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg overflow-hidden flex-shrink-0">
                                        <img 
                                            src="/images/eni.jpeg"
                                            alt="Eni Rofikoh"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-sm sm:text-base font-semibold text-white">Eni Rofikoh</h3>
                                        <p className="text-xs sm:text-sm text-white/70 font-light">Joined 2023</p>
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