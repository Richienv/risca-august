"use client";

import { Card, CardContent } from '@/components/card-8'
import { motion } from 'framer-motion'
import { Spotlight } from '@/components/spotlight-new'

export default function BonusCarousel() {
    return (
        <section className="relative bg-black py-16 md:py-32 overflow-hidden">
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
            
            <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16 relative z-10">
                <div className="relative">
                    {/* Heading Section - focusing on real testimonials */}
                    <div className="text-center mb-16">
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
                            SEKARANG HIDUP MEREKA BERUBAH TOTAL
                        </motion.h1>
                        <p className="text-sm lg:text-base font-light leading-relaxed text-slate-300 max-w-3xl mx-auto">
                            Cerita nyata dari member yang berani ambil langkah dan sekarang merasakan hasilnya.
                        </p>
                    </div>
                    
                    <div className="relative z-10 max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {/* Card 1 */}
                        <Card className="relative col-span-1 overflow-hidden aspect-[4/5] bg-black/40 backdrop-blur-md border-white/10 hover:border-white/20 transition-all duration-300 group hover:bg-black/50">
                            <div className="absolute inset-0">
                                <img 
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face" 
                                    alt="Ahmad Rizki"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                            </div>
                            <CardContent className="relative z-10 p-4 h-full flex flex-col justify-end">
                                <div className="text-white">
                                    <h3 className="text-lg font-semibold mb-3">Ahmad Rizki</h3>
                                    <p className="text-sm text-white/90 leading-relaxed font-light">
                                        Fresh graduate yang dulu <span className="font-medium">nganggur 8 bulan</span> karena susah cari kerja. Sekarang dalam <span className="font-medium">6 bulan income 25 juta per bulan</span> dari sistem bisnis ini. Udah beli mobil impian dan bisa bantu orangtua.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Card 2 */}
                        <Card className="relative col-span-1 overflow-hidden aspect-[4/5] bg-black/40 backdrop-blur-md border-white/10 hover:border-white/20 transition-all duration-300 group hover:bg-black/50">
                            <div className="absolute inset-0">
                                <img 
                                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop&crop=face"
                                    alt="Sari Wulandari"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                            </div>
                            <CardContent className="relative z-10 p-4 h-full flex flex-col justify-end">
                                <div className="text-white">
                                    <h3 className="text-lg font-semibold mb-3">Sari Wulandari</h3>
                                    <p className="text-sm text-white/90 leading-relaxed font-light">
                                        Ibu rumah tangga yang dulu <span className="font-medium">cuma andalin gaji suami</span> buat hidup sehari-hari. Sekarang punya <span className="font-medium">team 50+ orang dan income 35 juta per bulan</span>. Udah buka usaha sampingan dan investasi properti.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Card 3 */}
                        <Card className="relative col-span-1 overflow-hidden aspect-[4/5] bg-black/40 backdrop-blur-md border-white/10 hover:border-white/20 transition-all duration-300 group hover:bg-black/50">
                            <div className="absolute inset-0">
                                <img 
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face" 
                                    alt="Budi Santoso"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                            </div>
                            <CardContent className="relative z-10 p-4 h-full flex flex-col justify-end">
                                <div className="text-white">
                                    <h3 className="text-lg font-semibold mb-3">Budi Santoso</h3>
                                    <p className="text-sm text-white/90 leading-relaxed font-light">
                                        Mantan karyawan bank yang <span className="font-medium">bosan kerja 9-5 dengan gaji pas-pasan</span>. Nekat resign dan ikut sistem ini. Sekarang <span className="font-medium">income 40 juta per bulan dengan kebebasan waktu</span> penuh.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Card 4 */}
                        <Card className="relative col-span-1 overflow-hidden aspect-[4/5] bg-black/40 backdrop-blur-md border-white/10 hover:border-white/20 transition-all duration-300 group hover:bg-black/50">
                            <div className="absolute inset-0">
                                <img 
                                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face" 
                                    alt="Maya Indira"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                            </div>
                            <CardContent className="relative z-10 p-4 h-full flex flex-col justify-end">
                                <div className="text-white">
                                    <h3 className="text-lg font-semibold mb-3">Maya Indira</h3>
                                    <p className="text-sm text-white/90 leading-relaxed font-light">
                                        Dulu <span className="font-medium">kerja shift malam di pabrik</span> dengan kondisi yang melelahkan. Sekarang <span className="font-medium">income pasif 20 juta per bulan</span> sambil kuliah S2 dan punya waktu buat keluarga.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Card 5 */}
                        <Card className="relative col-span-1 overflow-hidden aspect-[4/5] bg-black/40 backdrop-blur-md border-white/10 hover:border-white/20 transition-all duration-300 group hover:bg-black/50">
                            <div className="absolute inset-0">
                                <img 
                                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face" 
                                    alt="Rian Pratama"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                            </div>
                            <CardContent className="relative z-10 p-4 h-full flex flex-col justify-end">
                                <div className="text-white">
                                    <h3 className="text-lg font-semibold mb-3">Rian Pratama</h3>
                                    <p className="text-sm text-white/90 leading-relaxed font-light">
                                        Dulunya <span className="font-medium">introvert dan susah networking</span>. Lewat sistem ini belajar membangun komunitas hingga <span className="font-medium">200+ member aktif dan income 30 juta per bulan</span> dari kolaborasi bisnis.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Card 6 */}
                        <Card className="relative col-span-1 overflow-hidden aspect-[4/5] bg-black/40 backdrop-blur-md border-white/10 hover:border-white/20 transition-all duration-300 group hover:bg-black/50">
                            <div className="absolute inset-0">
                                <img 
                                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop&crop=face" 
                                    alt="Putri Maharani"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                            </div>
                            <CardContent className="relative z-10 p-4 h-full flex flex-col justify-end">
                                <div className="text-white">
                                    <h3 className="text-lg font-semibold mb-3">Putri Maharani</h3>
                                    <p className="text-sm text-white/90 leading-relaxed font-light">
                                        Mahasiswa yang <span className="font-medium">selalu minta uang jajan ke orangtua</span>. Sekarang justru bisa <span className="font-medium">bantu bayar kuliah sendiri plus income 15 juta per bulan</span> sambil tetap fokus belajar.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Card 7 */}
                        <Card className="relative col-span-1 overflow-hidden aspect-[4/5] bg-black/40 backdrop-blur-md border-white/10 hover:border-white/20 transition-all duration-300 group hover:bg-black/50">
                            <div className="absolute inset-0">
                                <img 
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face" 
                                    alt="Dimas Prasetyo"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                            </div>
                            <CardContent className="relative z-10 p-4 h-full flex flex-col justify-end">
                                <div className="text-white">
                                    <h3 className="text-lg font-semibold mb-3">Dimas Prasetyo</h3>
                                    <p className="text-sm text-white/90 leading-relaxed font-light">
                                        Driver ojek online yang <span className="font-medium">capek keliling kota demi income harian</span>. Sekarang <span className="font-medium">income 22 juta per bulan tanpa harus keluar rumah</span> dan bisa quality time sama keluarga.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Card 8 */}
                        <Card className="relative col-span-1 overflow-hidden aspect-[4/5] bg-black/40 backdrop-blur-md border-white/10 hover:border-white/20 transition-all duration-300 group hover:bg-black/50">
                            <div className="absolute inset-0">
                                <img 
                                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop&crop=face" 
                                    alt="Indah Sari"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                            </div>
                            <CardContent className="relative z-10 p-4 h-full flex flex-col justify-end">
                                <div className="text-white">
                                    <h3 className="text-lg font-semibold mb-3">Indah Sari</h3>
                                    <p className="text-sm text-white/90 leading-relaxed font-light">
                                        Karyawan kontrak yang <span className="font-medium">hidup dalam ketidakpastian kerja</span>. Dalam 8 bulan berhasil <span className="font-medium">build passive income 18 juta per bulan</span> dan sekarang resign dengan tenang.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Card 9 */}
                        <Card className="relative col-span-1 overflow-hidden aspect-[4/5] bg-black/40 backdrop-blur-md border-white/10 hover:border-white/20 transition-all duration-300 group hover:bg-black/50">
                            <div className="absolute inset-0">
                                <img 
                                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop&crop=face" 
                                    alt="Arif Rahman"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                            </div>
                            <CardContent className="relative z-10 p-4 h-full flex flex-col justify-end">
                                <div className="text-white">
                                    <h3 className="text-lg font-semibold mb-3">Arif Rahman</h3>
                                    <p className="text-sm text-white/90 leading-relaxed font-light">
                                        Pemilik warung kecil yang <span className="font-medium">omzet stagnan dan kewalahan persaingan</span>. Sekarang <span className="font-medium">income 28 juta per bulan</span> dan warungnya jadi lebih ramai karena networking yang terbangun.
                                    </p>
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
