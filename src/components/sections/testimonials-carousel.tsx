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
                        <p className="text-sm lg:text-base font-light leading-relaxed text-slate-300 max-w-3xl mx-auto">
                            Lihat mereka yang udah merubah karir mereka dari pekerja biasa jadi pengusaha yang penghasilan pasifnya puluhan ratusan hingga milyaran rupiah setiap bulannya
                        </p>
                    </div>
                    
                    <div className="relative z-10 w-full">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
                        
                        {/* Card 1 - Housewife */}
                        <Card className="relative col-span-1 overflow-hidden bg-black/40 backdrop-blur-md border-white/10 hover:border-white/20 transition-all duration-300 group hover:bg-black/50">
                            <CardContent className="relative z-10 p-5 sm:p-8 flex flex-col">
                                {/* Quote Icon */}
                                <div className="mb-5 sm:mb-8">
                                    <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500" strokeWidth={2} />
                                </div>
                                
                                {/* Main Quote */}
                                <div className="mb-5 sm:mb-8">
                                    <p className="text-base sm:text-lg font-medium text-white leading-tight">
                                        "Dulu aku paling nyinyir tiap ditawarin… sekarang aku yang ngajak orang join."
                                    </p>
                                </div>
                                
                                {/* Story with Numbers */}
                                <div className="text-white mb-5 sm:mb-8">
                                    <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light">
                                        Ibu rumah tangga yang skeptis dan sering nolak ajakan bisnis. Sekarang income 15 juta/bulan dan punya team 25 orang. Baru 8 bulan join sudah beli mobil cash.
                                    </p>
                                </div>
                                
                                {/* Profile Section */}
                                <div className="flex items-center space-x-3 sm:space-x-5">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg overflow-hidden flex-shrink-0">
                                        <img 
                                            src="https://images.unsplash.com/photo-1494790108755-2616b332e234?w=400&h=500&fit=crop&crop=face"
                                            alt="Nina Sari"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-sm sm:text-base font-semibold text-white">Nina Sari</h3>
                                        <p className="text-xs sm:text-sm text-white/70 font-light">Ex Ibu Rumah Tangga</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Card 2 - Housewife */}
                        <Card className="relative col-span-1 overflow-hidden bg-black/40 backdrop-blur-md border-white/10 hover:border-white/20 transition-all duration-300 group hover:bg-black/50">
                            <CardContent className="relative z-10 p-5 sm:p-8 flex flex-col">
                                {/* Quote Icon */}
                                <div className="mb-5 sm:mb-8">
                                    <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500" strokeWidth={2} />
                                </div>
                                
                                {/* Main Quote */}
                                <div className="mb-5 sm:mb-8">
                                    <p className="text-base sm:text-lg font-medium text-white leading-tight">
                                        "Bisnis suami bangkrut — justru dari sini aku bangkit."
                                    </p>
                                </div>
                                
                                {/* Story with Numbers */}
                                <div className="text-white mb-5 sm:mb-8">
                                    <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light">
                                        Saat usaha suami tutup dan hutang 200 juta, dia mulai dari nol. 10 bulan kemudian income 28 juta/bulan, lunasi semua hutang dan buka toko baru.
                                    </p>
                                </div>
                                
                                {/* Profile Section */}
                                <div className="flex items-center space-x-3 sm:space-x-5">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg overflow-hidden flex-shrink-0">
                                        <img 
                                            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&crop=face"
                                            alt="Maya Dewi"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-sm sm:text-base font-semibold text-white">Maya Dewi</h3>
                                        <p className="text-xs sm:text-sm text-white/70 font-light">Ex Ibu Rumah Tangga</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Card 3 - Housewife */}
                        <Card className="relative col-span-1 overflow-hidden bg-black/40 backdrop-blur-md border-white/10 hover:border-white/20 transition-all duration-300 group hover:bg-black/50">
                            <CardContent className="relative z-10 p-5 sm:p-8 flex flex-col">
                                {/* Quote Icon */}
                                <div className="mb-5 sm:mb-8">
                                    <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500" strokeWidth={2} />
                                </div>
                                
                                {/* Main Quote */}
                                <div className="mb-5 sm:mb-8">
                                    <p className="text-base sm:text-lg font-medium text-white leading-tight">
                                        "Awalnya coba-coba, sekarang jadi sumber nafkah utama keluarga."
                                    </p>
                                </div>
                                
                                {/* Story with Numbers */}
                                <div className="text-white mb-5 sm:mb-8">
                                    <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light">
                                        Iseng ikut training, sekarang penghasilannya 35 juta/bulan melebihi suami yang kerja di bank. Dalam 14 bulan sudah punya rumah kedua untuk investasi.
                                    </p>
                                </div>
                                
                                {/* Profile Section */}
                                <div className="flex items-center space-x-3 sm:space-x-5">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg overflow-hidden flex-shrink-0">
                                        <img 
                                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face"
                                            alt="Rina Wijaya"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-sm sm:text-base font-semibold text-white">Rina Wijaya</h3>
                                        <p className="text-xs sm:text-sm text-white/70 font-light">Ex Ibu Rumah Tangga</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Card 4 - Housewife */}
                        <Card className="relative col-span-1 overflow-hidden bg-black/40 backdrop-blur-md border-white/10 hover:border-white/20 transition-all duration-300 group hover:bg-black/50">
                            <CardContent className="relative z-10 p-5 sm:p-8 flex flex-col">
                                {/* Quote Icon */}
                                <div className="mb-5 sm:mb-8">
                                    <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500" strokeWidth={2} />
                                </div>
                                
                                {/* Main Quote */}
                                <div className="mb-5 sm:mb-8">
                                    <p className="text-base sm:text-lg font-medium text-white leading-tight">
                                        "Aku pikir ini cuma kerjaan iseng… ternyata ini panggilan hidupku."
                                    </p>
                                </div>
                                
                                {/* Story with Numbers */}
                                <div className="text-white mb-5 sm:mb-8">
                                    <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light">
                                        Mulai sambilan saat anak masih kecil, sekarang tim 40+ orang dengan income 42 juta/bulan. Sudah bantu 200+ keluarga dapat proteksi asuransi.
                                    </p>
                                </div>
                                
                                {/* Profile Section */}
                                <div className="flex items-center space-x-3 sm:space-x-5">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg overflow-hidden flex-shrink-0">
                                        <img 
                                            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop&crop=face"
                                            alt="Sinta Maharani"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-sm sm:text-base font-semibold text-white">Sinta Maharani</h3>
                                        <p className="text-xs sm:text-sm text-white/70 font-light">Ex Ibu Rumah Tangga</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Card 5 - Gen-X Ex Corporate */}
                        <Card className="relative col-span-1 overflow-hidden bg-black/40 backdrop-blur-md border-white/10 hover:border-white/20 transition-all duration-300 group hover:bg-black/50">
                            <CardContent className="relative z-10 p-5 sm:p-8 flex flex-col">
                                {/* Quote Icon */}
                                <div className="mb-5 sm:mb-8">
                                    <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500" strokeWidth={2} />
                                </div>
                                
                                {/* Main Quote */}
                                <div className="mb-5 sm:mb-8">
                                    <p className="text-base sm:text-lg font-medium text-white leading-tight">
                                        "Gengsi hampir bikin aku lewatin peluang terbesar dalam hidupku."
                                    </p>
                                </div>
                                
                                {/* Story with Numbers */}
                                <div className="text-white mb-5 sm:mb-8">
                                    <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light">
                                        15 tahun di corporate, gaji 18 juta mandek. Nekat resign umur 45, sekarang income 65 juta/bulan dari asuransi. Dana pensiun terkumpul 800 juta dalam 18 bulan.
                                    </p>
                                </div>
                                
                                {/* Profile Section */}
                                <div className="flex items-center space-x-3 sm:space-x-5">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg overflow-hidden flex-shrink-0">
                                        <img 
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face"
                                            alt="Bambang Sutrisno"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-sm sm:text-base font-semibold text-white">Bambang Sutrisno</h3>
                                        <p className="text-xs sm:text-sm text-white/70 font-light">Ex General Manager</p>
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