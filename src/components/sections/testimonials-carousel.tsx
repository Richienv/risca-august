"use client";

import { Card, CardContent } from '@/components/card-8'
import { motion } from 'framer-motion'
import { Spotlight } from '@/components/spotlight-new'
import { Quote } from 'lucide-react'

export default function BonusCarousel() {
    return (
        <section className="relative bg-black py-12 md:py-20 overflow-hidden">
            {/* Pink Spotlight Effects */}
            <Spotlight 
                gradientFirst={`radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(236, 72, 153, 0.12) 0%, rgba(219, 39, 119, 0.06) 50%, transparent 80%)`}
                gradientSecond={`radial-gradient(50% 50% at 50% 50%, rgba(236, 72, 153, 0.08) 0%, rgba(219, 39, 119, 0.04) 80%, transparent 100%)`}
                gradientThird={`radial-gradient(50% 50% at 50% 50%, rgba(219, 39, 119, 0.06) 0%, rgba(236, 72, 153, 0.03) 80%, transparent 100%)`}
                translateY={-190}
                width={400}
                height={850}
                smallWidth={170}
                duration={13}
                xOffset={45}
            />
            
            <div className="mx-auto w-full px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-40 relative z-10">
                <div className="relative">
                    {/* Heading Section - focusing on real testimonials */}
                    <div className="text-center mb-12">
                        <h2 className="text-xs sm:text-sm font-mono font-light text-slate-300 uppercase tracking-[0.2em] opacity-80 mb-4">
                            Mereka yang Dulunya Sama Seperti Kamu
                        </h2>
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
                            Jangan Cuman Percaya Kata Saya - Buktikan, Rasakan
                        </motion.h1>
                        <p className="text-sm lg:text-base font-light leading-relaxed text-slate-300 max-w-3xl mx-auto">
                            Lihat mereka yang udah merubah karir mereka dari pekerja biasa jadi pengusaha yang penghasilan pasifnya puluhan ratusan hingga milyaran rupiah setiap bulannya
                        </p>
                    </div>
                    
                    <div className="relative z-10 w-full">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
                        {/* Card 1 */}
                        <Card className="relative col-span-1 overflow-hidden bg-black/40 backdrop-blur-md border-white/10 hover:border-white/20 transition-all duration-300 group hover:bg-black/50">
                            <CardContent className="relative z-10 p-5 sm:p-8 flex flex-col">
                                {/* Quote Icon */}
                                <div className="mb-5 sm:mb-8">
                                    <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500" strokeWidth={2} />
                                </div>
                                
                                {/* Main Quote */}
                                <div className="mb-5 sm:mb-8">
                                    <p className="text-base sm:text-lg font-medium text-white leading-tight">
                                        "Berkat bisnis asuransi saya bisa beli mobil untuk keluarga saya."
                                    </p>
                                </div>
                                
                                {/* Story */}
                                <div className="text-white mb-5 sm:mb-8">
                                    <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light">
                                        Fresh-grad yang dulu nganggur 8 bulan karena susah cari kerja. Sekarang dalam 6 bulan income 25 juta per bulan dari bisnis ini. eli mobil impian bisa bantu parent.
                                    </p>
                                </div>
                                
                                {/* Profile Section */}
                                <div className="flex items-center space-x-3 sm:space-x-5">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg overflow-hidden flex-shrink-0">
                                        <img 
                                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face" 
                                            alt="Ahmad Rizki"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-sm sm:text-base font-semibold text-white">Ahmad Rizki</h3>
                                        <p className="text-xs sm:text-sm text-white/70 font-light">Ex Fresh Graduate</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Card 2 */}
                        <Card className="relative col-span-1 overflow-hidden bg-black/40 backdrop-blur-md border-white/10 hover:border-white/20 transition-all duration-300 group hover:bg-black/50">
                            <CardContent className="relative z-10 p-5 sm:p-8 flex flex-col">
                                {/* Quote Icon */}
                                <div className="mb-5 sm:mb-8">
                                    <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500" strokeWidth={2} />
                                </div>
                                
                                {/* Main Quote */}
                                <div className="mb-5 sm:mb-8">
                                    <p className="text-base sm:text-lg font-medium text-white leading-tight">
                                        "Berkat asuransi sekarang saya punya team 50+ orang dengan income 35 juta per bulan."
                                    </p>
                                </div>
                                
                                {/* Story */}
                                <div className="text-white mb-5 sm:mb-8">
                                    <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light">
                                        Ibu rumah tangga yang dulu cuma andalin gaji suami buat hidup sehari-hari. Udah buka usaha sampingan dan investasi properti.
                                    </p>
                                </div>
                                
                                {/* Profile Section */}
                                <div className="flex items-center space-x-3 sm:space-x-5">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg overflow-hidden flex-shrink-0">
                                        <img 
                                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop&crop=face"
                                            alt="Sari Wulandari"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-sm sm:text-base font-semibold text-white">Sari Wulandari</h3>
                                        <p className="text-xs sm:text-sm text-white/70 font-light">Ex Ibu Rumah Tangga</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Card 3 */}
                        <Card className="relative col-span-1 overflow-hidden bg-black/40 backdrop-blur-md border-white/10 hover:border-white/20 transition-all duration-300 group hover:bg-black/50">
                            <CardContent className="relative z-10 p-5 sm:p-8 flex flex-col">
                                {/* Quote Icon */}
                                <div className="mb-5 sm:mb-8">
                                    <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500" strokeWidth={2} />
                                </div>
                                
                                {/* Main Quote */}
                                <div className="mb-5 sm:mb-8">
                                    <p className="text-base sm:text-lg font-medium text-white leading-tight">
                                        "Berkat bisnis asuransi saya resign dengan tenang dan income 40 juta per bulan."
                                    </p>
                                </div>
                                
                                {/* Story */}
                                <div className="text-white mb-5 sm:mb-8">
                                    <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light">
                                        Mantan karyawan bank yang bosan kerja 9-5 dengan gaji pas-pasan. Nekat resign dan ikut sistem ini dengan kebebasan waktu penuh.
                                    </p>
                                </div>
                                
                                {/* Profile Section */}
                                <div className="flex items-center space-x-3 sm:space-x-5">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg overflow-hidden flex-shrink-0">
                                        <img 
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face" 
                                            alt="Budi Santoso"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-sm sm:text-base font-semibold text-white">Budi Santoso</h3>
                                        <p className="text-xs sm:text-sm text-white/70 font-light">Ex Karyawan Bank</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Card 4 */}
                        <Card className="relative col-span-1 overflow-hidden bg-black/40 backdrop-blur-md border-white/10 hover:border-white/20 transition-all duration-300 group hover:bg-black/50">
                            <CardContent className="relative z-10 p-5 sm:p-8 flex flex-col">
                                {/* Quote Icon */}
                                <div className="mb-5 sm:mb-8">
                                    <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500" strokeWidth={2} />
                                </div>
                                
                                {/* Main Quote */}
                                <div className="mb-5 sm:mb-8">
                                    <p className="text-base sm:text-lg font-medium text-white leading-tight">
                                        "Sekarang income pasif 20 juta per bulan sambil kuliah S2."
                                    </p>
                                </div>
                                
                                {/* Story */}
                                <div className="text-white mb-5 sm:mb-8">
                                    <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light">
                                        Dulu kerja shift malam di pabrik dengan kondisi yang melelahkan. Sekarang punya waktu buat keluarga dan bisa fokus pendidikan.
                                    </p>
                                </div>
                                
                                {/* Profile Section */}
                                <div className="flex items-center space-x-3 sm:space-x-5">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg overflow-hidden flex-shrink-0">
                                        <img 
                                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face" 
                                            alt="Maya Indira"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-sm sm:text-base font-semibold text-white">Maya Indira</h3>
                                        <p className="text-xs sm:text-sm text-white/70 font-light">Ex Pekerja Pabrik</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Card 5 */}
                        <Card className="relative col-span-1 overflow-hidden bg-black/40 backdrop-blur-md border-white/10 hover:border-white/20 transition-all duration-300 group hover:bg-black/50">
                            <CardContent className="relative z-10 p-5 sm:p-8 flex flex-col">
                                {/* Quote Icon */}
                                <div className="mb-5 sm:mb-8">
                                    <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500" strokeWidth={2} />
                                </div>
                                
                                {/* Main Quote */}
                                <div className="mb-5 sm:mb-8">
                                    <p className="text-base sm:text-lg font-medium text-white leading-tight">
                                        "Dari introvert jadi punya komunitas 200+ member dan income 30 juta per bulan."
                                    </p>
                                </div>
                                
                                {/* Story */}
                                <div className="text-white mb-5 sm:mb-8">
                                    <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light">
                                        Dulunya introvert dan susah networking. Lewat sistem ini belajar membangun komunitas dari kolaborasi bisnis asuransi.
                                    </p>
                                </div>
                                
                                {/* Profile Section */}
                                <div className="flex items-center space-x-3 sm:space-x-5">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg overflow-hidden flex-shrink-0">
                                        <img 
                                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face" 
                                            alt="Rian Pratama"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-sm sm:text-base font-semibold text-white">Rian Pratama</h3>
                                        <p className="text-xs sm:text-sm text-white/70 font-light">Ex Introvert</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Card 6 */}
                        <Card className="relative col-span-1 overflow-hidden bg-black/40 backdrop-blur-md border-white/10 hover:border-white/20 transition-all duration-300 group hover:bg-black/50">
                            <CardContent className="relative z-10 p-5 sm:p-8 flex flex-col">
                                {/* Quote Icon */}
                                <div className="mb-5 sm:mb-8">
                                    <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500" strokeWidth={2} />
                                </div>
                                
                                {/* Main Quote */}
                                <div className="mb-5 sm:mb-8">
                                    <p className="text-base sm:text-lg font-medium text-white leading-tight">
                                        "Dari minta uang jajan ke orangtua, sekarang bayar kuliah sendiri dengan income 15 juta per bulan."
                                    </p>
                                </div>
                                
                                {/* Story */}
                                <div className="text-white mb-5 sm:mb-8">
                                    <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light">
                                        Mahasiswa yang dulu selalu minta uang jajan ke orangtua. Sekarang justru bisa bantu sambil tetap fokus belajar.
                                    </p>
                                </div>
                                
                                {/* Profile Section */}
                                <div className="flex items-center space-x-3 sm:space-x-5">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg overflow-hidden flex-shrink-0">
                                        <img 
                                            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop&crop=face" 
                                            alt="Putri Maharani"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-sm sm:text-base font-semibold text-white">Putri Maharani</h3>
                                        <p className="text-xs sm:text-sm text-white/70 font-light">Mahasiswa</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Card 7 */}
                        <Card className="relative col-span-1 overflow-hidden bg-black/40 backdrop-blur-md border-white/10 hover:border-white/20 transition-all duration-300 group hover:bg-black/50">
                            <CardContent className="relative z-10 p-5 sm:p-8 flex flex-col">
                                {/* Quote Icon */}
                                <div className="mb-5 sm:mb-8">
                                    <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500" strokeWidth={2} />
                                </div>
                                
                                {/* Main Quote */}
                                <div className="mb-5 sm:mb-8">
                                    <p className="text-base sm:text-lg font-medium text-white leading-tight">
                                        "Income 22 juta per bulan tanpa harus keluar rumah, quality time sama keluarga."
                                    </p>
                                </div>
                                
                                {/* Story */}
                                <div className="text-white mb-5 sm:mb-8">
                                    <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light">
                                        Driver ojek online yang dulu capek keliling kota demi income harian. Sekarang bisa fokus keluarga dengan bisnis asuransi.
                                    </p>
                                </div>
                                
                                {/* Profile Section */}
                                <div className="flex items-center space-x-3 sm:space-x-5">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg overflow-hidden flex-shrink-0">
                                        <img 
                                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face" 
                                            alt="Dimas Prasetyo"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-sm sm:text-base font-semibold text-white">Dimas Prasetyo</h3>
                                        <p className="text-xs sm:text-sm text-white/70 font-light">Ex Driver Ojol</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Card 8 */}
                        <Card className="relative col-span-1 overflow-hidden bg-black/40 backdrop-blur-md border-white/10 hover:border-white/20 transition-all duration-300 group hover:bg-black/50">
                            <CardContent className="relative z-10 p-5 sm:p-8 flex flex-col">
                                {/* Quote Icon */}
                                <div className="mb-5 sm:mb-8">
                                    <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500" strokeWidth={2} />
                                </div>
                                
                                {/* Main Quote */}
                                <div className="mb-5 sm:mb-8">
                                    <p className="text-base sm:text-lg font-medium text-white leading-tight">
                                        "Dalam 8 bulan berhasil build passive income 18 juta per bulan dan resign dengan tenang."
                                    </p>
                                </div>
                                
                                {/* Story */}
                                <div className="text-white mb-5 sm:mb-8">
                                    <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light">
                                        Karyawan kontrak yang dulu hidup dalam ketidakpastian kerja. Sekarang punya stabilitas finansial dari bisnis asuransi.
                                    </p>
                                </div>
                                
                                {/* Profile Section */}
                                <div className="flex items-center space-x-3 sm:space-x-5">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg overflow-hidden flex-shrink-0">
                                        <img 
                                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop&crop=face" 
                                            alt="Indah Sari"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-sm sm:text-base font-semibold text-white">Indah Sari</h3>
                                        <p className="text-xs sm:text-sm text-white/70 font-light">Ex Karyawan Kontrak</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Card 9 */}
                        <Card className="relative col-span-1 overflow-hidden bg-black/40 backdrop-blur-md border-white/10 hover:border-white/20 transition-all duration-300 group hover:bg-black/50">
                            <CardContent className="relative z-10 p-5 sm:p-8 flex flex-col">
                                {/* Quote Icon */}
                                <div className="mb-5 sm:mb-8">
                                    <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500" strokeWidth={2} />
                                </div>
                                
                                {/* Main Quote */}
                                <div className="mb-5 sm:mb-8">
                                    <p className="text-base sm:text-lg font-medium text-white leading-tight">
                                        "Income 28 juta per bulan dan warung jadi lebih ramai karena networking yang terbangun."
                                    </p>
                                </div>
                                
                                {/* Story */}
                                <div className="text-white mb-5 sm:mb-8">
                                    <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light">
                                        Pemilik warung kecil yang dulu omzet stagnan dan kewalahan persaingan. Sekarang berkembang pesat dengan komunitas asuransi.
                                    </p>
                                </div>
                                
                                {/* Profile Section */}
                                <div className="flex items-center space-x-3 sm:space-x-5">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg overflow-hidden flex-shrink-0">
                                        <img 
                                            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop&crop=face" 
                                            alt="Arif Rahman"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-sm sm:text-base font-semibold text-white">Arif Rahman</h3>
                                        <p className="text-xs sm:text-sm text-white/70 font-light">Pemilik Warung</p>
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
