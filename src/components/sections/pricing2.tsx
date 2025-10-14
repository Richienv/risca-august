'use client'

import { Check } from 'lucide-react'
import { PackageType, PACKAGES } from '@/types/payment'
import Link from 'next/link'
import { LiquidGlassContainer } from '@/components/ui/liquid-glass-container'
import { LiquidButton } from '@/components/ui/liquid-glass-button'
import { WebGLShader } from '@/components/ui/web-gl-shader'

export default function Pricing() {
    const renderPackageCard = (packageType: PackageType, isRecommended: boolean = false) => {
        const packageInfo = PACKAGES[packageType]
        
        return (
            <div className={`relative ${isRecommended ? 'scale-105' : ''}`}>
                {isRecommended && (
                    <span className="absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full px-3 py-1 text-xs font-medium text-white z-30" style={{
                        background: 'linear-gradient(90deg, #ffffff 0%, #ec4899 50%, #ffffff 100%)',
                        backgroundSize: '200% 100%',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        textShadow: '0 0 15px rgba(236, 72, 153, 0.6)',
                        filter: 'drop-shadow(0 0 8px rgba(236, 72, 153, 0.4))'
                    }}>Rekomendasi</span>
                )}
                
                <LiquidGlassContainer className="h-full rounded-3xl overflow-hidden bg-black/40 backdrop-blur-md hover:bg-black/50 transition-all duration-300" colorOverlay="none">
                    <div className="flex flex-col h-full p-8 lg:p-10 hover:brightness-110 transition-all duration-500">
                        <div className="text-center mb-6">
                            <h3 className="text-xl lg:text-2xl font-bold mb-4" style={{
                                background: 'linear-gradient(90deg, #ffffff 0%, #ec4899 50%, #ffffff 100%)',
                                backgroundSize: '200% 100%',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                animation: 'gradient-shift 3s linear infinite'
                            }}>{packageInfo.name}</h3>
                            
                            <div className="mb-4">
                                <span className="text-2xl lg:text-3xl xl:text-4xl font-bold" style={{
                                    background: 'linear-gradient(90deg, #ffffff 0%, #ec4899 50%, #ffffff 100%)',
                                    backgroundSize: '200% 100%',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    textShadow: '0 0 15px rgba(236, 72, 153, 0.4)'
                                }}>{packageInfo.monthlyPrice}</span>
                            </div>
                            
                            <p className="text-white/80 text-sm lg:text-base mb-6" style={{ textShadow: '0 0 10px rgba(236, 72, 153, 0.1)' }}>
                                {packageInfo.description}
                            </p>
                        </div>

                        <div className="space-y-4 lg:space-y-6 flex-1">
                            <hr className="border-dashed border-white/30" />
                            
                            {/* Kriteria Bergabung */}
                            <div className="text-center mb-4">
                                <h4 className="text-sm lg:text-base font-semibold text-white/90 mb-3">Kriteria Bergabung:</h4>
                            </div>
                            <ul className="space-y-3 lg:space-y-4 text-sm lg:text-base mb-6">
                                {packageInfo.features.slice(0, 7).map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <Check className="size-4 lg:size-5 text-pink-400 flex-shrink-0 mt-0.5" style={{ 
                                            filter: 'drop-shadow(0 0 4px rgba(236, 72, 153, 0.6))' 
                                        }} />
                                        <span className="flex-1 text-white/90">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <hr className="border-dashed border-white/30" />
                            
                            {/* Apa yang perlu dilakukan / Apa yang akan didapat */}
                            <div className="text-center mb-4">
                                <h4 className="text-sm lg:text-base font-semibold text-white/90 mb-3">
                                    {packageType === 'free' ? 'Apa yang kamu perlu lakukan:' : 'Apa yang akan kamu dapatkan:'}
                                </h4>
                            </div>
                            
                            {packageType === 'free' ? (
                                <div className="bg-pink-500/10 border border-pink-400/20 rounded-lg p-4 mb-4">
                                    <p className="text-white/90 text-sm lg:text-base text-center">
                                        Ajak 2 orang lain untuk sign-in, maka kalian bertiga akan mendapat akses gratis untuk bergabung!
                                    </p>
                                </div>
                            ) : (
                                <ul className="space-y-3 lg:space-y-4 text-sm lg:text-base mb-4">
                                    {packageInfo.features.slice(7).map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <Check className="size-4 lg:size-5 text-pink-400 flex-shrink-0 mt-0.5" style={{ 
                                                filter: 'drop-shadow(0 0 4px rgba(236, 72, 153, 0.6))' 
                                            }} />
                                            <span className="flex-1 text-white/90">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        <div className="mt-8">
                            <Link href={packageType === 'free' ? '/contact' : `/checkout?package=${packageType}`} className="block">
                                <LiquidButton 
                                    size="lg" 
                                    className="w-full text-white font-semibold"
                                >
                                    {packageType === 'free' ? 'Daftar Gratis' : 'Commit Sekarang'}
                                </LiquidButton>
                            </Link>
                        </div>
                    </div>
                </LiquidGlassContainer>
            </div>
        )
    }
    
    return (
        <section id="pricing-section" className="relative w-full py-16 md:py-24">
            {/* WebGL Shader Background */}
            <div className="absolute inset-0 z-0">
                <WebGLShader />
            </div>
            
            {/* Overlay for slight dimming effect */}
            <div className="absolute inset-0 bg-black/40 z-10 w-full" />
            
            <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8">
                <div className="w-full space-y-6 text-center mb-8 md:mb-16">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-light" style={{
                        fontFamily: 'Georgia, "Times New Roman", Times, serif',
                        background: 'linear-gradient(90deg, #ffffff 0%, #ec4899 50%, #ffffff 100%)',
                        backgroundSize: '200% 100%',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        animation: 'gradient-shift 3s linear infinite'
                    }}>Pilihan Bergabung dengan Kami</h1>
                    <p className="text-sm lg:text-base xl:text-lg max-w-4xl mx-auto text-white/80" style={{ 
                        textShadow: '0 0 10px rgba(236, 72, 153, 0.1)' 
                    }}>Dua pilihan untuk memulai perjalanan sukses Anda bersama kami. Pilih yang sesuai dengan kesiapan dan komitmen Anda.</p>
                </div>

                <div className="grid gap-8 lg:gap-12 grid-cols-1 md:grid-cols-2 w-full max-w-6xl mx-auto">
                    {renderPackageCard('free')}
                    {renderPackageCard('paid', true)}
                </div>
                
                {/* Main motivational quote */}
                <div className="mt-12 md:mt-16 max-w-4xl mx-auto">
                    <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-400/30 rounded-lg p-6 lg:p-8">
                        <p className="text-white/95 text-lg lg:text-xl text-center font-medium italic">
                            "Kamu tidak akan pernah melihat cara paling jelas untuk menghasilkan uang sampai kamu melihat kalkulasinya!"
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}