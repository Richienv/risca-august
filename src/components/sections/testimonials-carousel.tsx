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
                        
                        {/* Card 1 - Marshel Yap */}
                        <Card className="relative col-span-1 overflow-hidden bg-black/40 backdrop-blur-md border-white/10 hover:border-white/20 transition-all duration-300 group hover:bg-black/50">
                            <CardContent className="relative z-10 p-5 sm:p-8 flex flex-col">
                                {/* Quote Icon */}
                                <div className="mb-5 sm:mb-8">
                                    <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" strokeWidth={2} />
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

                        {/* Card 2 - Bambang Sudianto + Silfianty */}
                        <Card className="relative col-span-1 overflow-hidden bg-black/40 backdrop-blur-md border-white/10 hover:border-white/20 transition-all duration-300 group hover:bg-black/50">
                            <CardContent className="relative z-10 p-5 sm:p-8 flex flex-col">
                                {/* Quote Icon */}
                                <div className="mb-5 sm:mb-8">
                                    <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" strokeWidth={2} />
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

                        {/* Card 3 - Suci Lestari */}
                        <Card className="relative col-span-1 overflow-hidden bg-black/40 backdrop-blur-md border-white/10 hover:border-white/20 transition-all duration-300 group hover:bg-black/50">
                            <CardContent className="relative z-10 p-5 sm:p-8 flex flex-col">
                                {/* Quote Icon */}
                                <div className="mb-5 sm:mb-8">
                                    <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" strokeWidth={2} />
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


                        {/* Card 4 - Eddy */}
                        <Card className="relative col-span-1 overflow-hidden bg-black/40 backdrop-blur-md border-white/10 hover:border-white/20 transition-all duration-300 group hover:bg-black/50">
                            <CardContent className="relative z-10 p-5 sm:p-8 flex flex-col">
                                {/* Quote Icon */}
                                <div className="mb-5 sm:mb-8">
                                    <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" strokeWidth={2} />
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
                                        "Dulu cuma bermimpi punya penghasilan besar, sekarang syukur sudah bisa mencapainya."
                                    </motion.p>
                                </div>
                                
                                {/* Story */}
                                <div className="text-white mb-5 sm:mb-8">
                                    <p className="text-xs sm:text-base text-white/80 leading-relaxed font-light">
                                        Hadiah sesungguhnya bukan hanya angka penghasilan — tetapi pertumbuhan, perjalanan, dan kesempatan membantu orang lain melindungi hal yang paling berharga. Sekarang misi saya jelas: tidak hanya dilihat, tetapi dipercaya, diingat, dan dicari.
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
                                        <span className="font-medium">Penghasilan:</span> 100+ jt/bulan
                                    </motion.div>
                                </div>
                                
                                {/* Profile Section */}
                                <div className="flex items-center space-x-3 sm:space-x-5">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg overflow-hidden flex-shrink-0">
                                        <img 
                                            src="/images/eddy.jpeg"
                                            alt="Eddy"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-sm sm:text-base font-semibold text-white">Eddy</h3>
                                        <p className="text-xs sm:text-sm text-white/70 font-light">Ex-S2 Arsitek</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Card 5 - Surianto (Acai) */}
                        <Card className="relative col-span-1 overflow-hidden bg-black/40 backdrop-blur-md border-white/10 hover:border-white/20 transition-all duration-300 group hover:bg-black/50">
                            <CardContent className="relative z-10 p-5 sm:p-8 flex flex-col">
                                {/* Quote Icon */}
                                <div className="mb-5 sm:mb-8">
                                    <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" strokeWidth={2} />
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
                                        "Kunci keberhasilan adalah berani mengambil risiko dan tidak takut gagal."
                                    </motion.p>
                                </div>
                                
                                {/* Story */}
                                <div className="text-white mb-5 sm:mb-8">
                                    <p className="text-xs sm:text-base text-white/80 leading-relaxed font-light">
                                        Kapasitas manusia tidak akan bertambah berkembang bila ada rasa takut gagal di dalamnya. Surianto membuktikan bahwa keberanian mengambil risiko dan konsistensi adalah fondasi kesuksesan yang sesungguhnya.
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
                                            src="/images/surianto.jpeg"
                                            alt="Surianto (Acai)"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-sm sm:text-base font-semibold text-white">Surianto (Acai)</h3>
                                        <p className="text-xs sm:text-sm text-white/70 font-light">Ex-Salesman</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Card 6 - Elya */}
                        <Card className="relative col-span-1 overflow-hidden bg-black/40 backdrop-blur-md border-white/10 hover:border-white/20 transition-all duration-300 group hover:bg-black/50">
                            <CardContent className="relative z-10 p-5 sm:p-8 flex flex-col">
                                {/* Quote Icon */}
                                <div className="mb-5 sm:mb-8">
                                    <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" strokeWidth={2} />
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
                                        "Bersyukur bisa berkembang, diberkati untuk melindungi sesama."
                                    </motion.p>
                                </div>
                                
                                {/* Story */}
                                <div className="text-white mb-5 sm:mb-8">
                                    <p className="text-xs sm:text-base text-white/80 leading-relaxed font-light">
                                        Saya bersyukur mendapat kesempatan berkembang di bisnis ini — tidak hanya sebagai profesional, tetapi sebagai manusia. Melalui asuransi, saya bisa melayani orang lain, melindungi hal yang paling berharga, dan berbagi berkat masa depan yang terjamin. Perjalanan: Taiwan, Turkey, Korea, Bali dan masih banyak lagi.
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
                                        <span className="font-medium">Penghasilan:</span> 50 jt/bulan
                                    </motion.div>
                                </div>
                                
                                {/* Profile Section */}
                                <div className="flex items-center space-x-3 sm:space-x-5">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg overflow-hidden flex-shrink-0">
                                        <img 
                                            src="/images/elya.jpeg"
                                            alt="Elya"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-sm sm:text-base font-semibold text-white">Elya</h3>
                                        <p className="text-xs sm:text-sm text-white/70 font-light">Ex-Beauty Entrepreneur</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Card 7 - Soehartono & Athena */}
                        <Card className="relative col-span-1 overflow-hidden bg-black/40 backdrop-blur-md border-white/10 hover:border-white/20 transition-all duration-300 group hover:bg-black/50">
                            <CardContent className="relative z-10 p-5 sm:p-8 flex flex-col">
                                {/* Quote Icon */}
                                <div className="mb-5 sm:mb-8">
                                    <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" strokeWidth={2} />
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
                                        "Dari Moscow sampai Paris, dari Korea sampai Taiwan — mimpi tidak mengenal batas."
                                    </motion.p>
                                </div>
                                
                                {/* Story */}
                                <div className="text-white mb-5 sm:mb-8">
                                    <p className="text-xs sm:text-base text-white/80 leading-relaxed font-light">
                                        Perjalanan mereka telah membawa ke seluruh dunia - Moscow, Paris, Korea Selatan, Taiwan, Shangrila South China, Prague, Italy. Bukti nyata apa yang mungkin terjadi ketika Anda berkomitmen pada keunggulan dalam bisnis ini.
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
                                        <span className="font-medium">Penghasilan:</span> 83 jt/bulan
                                    </motion.div>
                                </div>
                                
                                {/* Profile Section */}
                                <div className="flex items-center space-x-3 sm:space-x-5">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg overflow-hidden flex-shrink-0">
                                        <img 
                                            src="/images/s-h.jpeg"
                                            alt="Soehartono & Athena"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-sm sm:text-base font-semibold text-white">Soehartono & Athena</h3>
                                        <p className="text-xs sm:text-sm text-white/70 font-light">Ex-Manager & Ibu RT</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Card 8 - Vicki Aditya */}
                        <Card className="relative col-span-1 overflow-hidden bg-black/40 backdrop-blur-md border-white/10 hover:border-white/20 transition-all duration-300 group hover:bg-black/50">
                            <CardContent className="relative z-10 p-5 sm:p-8 flex flex-col">
                                {/* Quote Icon */}
                                <div className="mb-5 sm:mb-8">
                                    <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" strokeWidth={2} />
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
                                        "Ora et Labora, inilah panggilan hidup saya."
                                    </motion.p>
                                </div>
                                
                                {/* Story */}
                                <div className="text-white mb-5 sm:mb-8">
                                    <p className="text-xs sm:text-base text-white/80 leading-relaxed font-light">
                                        Perjalanan asuransi ini tidak hanya membantu saya memenuhi impian pribadi, tetapi yang lebih penting, memberikan kehormatan untuk mendidik dan memberdayakan sesama Indonesia. Saya sangat bersyukur untuk komunitas yang terus membuat saya berkembang, dan tetap berkomitmen memimpin dengan kerendahan hati, integritas, dan hati yang penuh syukur.
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
                                        <span className="font-medium">Penghasilan:</span> 100+ jt/bulan
                                    </motion.div>
                                </div>
                                
                                {/* Profile Section */}
                                <div className="flex items-center space-x-3 sm:space-x-5">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg overflow-hidden flex-shrink-0">
                                        <img 
                                            src="/images/vickiaditya.jpeg"
                                            alt="Vicki Aditya"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-sm sm:text-base font-semibold text-white">Vicki Aditya</h3>
                                        <p className="text-xs sm:text-sm text-white/70 font-light">Joined 2018</p>
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