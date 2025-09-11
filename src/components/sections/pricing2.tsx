'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import { PackageType, PACKAGES } from '@/types/payment'
import Link from 'next/link'

export default function Pricing() {
    const renderPackageCard = (packageType: PackageType, isPopular: boolean = false) => {
        const packageInfo = PACKAGES[packageType]
        
        return (
            <Card key={packageType} className={`flex flex-col h-full ${isPopular ? 'relative border-yellow-400/30' : 'border-yellow-400/10'} bg-black/20 hover:border-yellow-400/50 transition-all duration-300`} style={{ 
                boxShadow: isPopular ? '0 0 30px rgba(251, 191, 36, 0.2)' : '0 0 15px rgba(251, 191, 36, 0.1)'
            }}>
                {isPopular && (
                    <span className="absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full bg-gradient-to-r from-yellow-400 to-amber-300 px-3 py-1 text-xs font-medium text-amber-950 ring-1 ring-inset ring-yellow-300/20 ring-offset-1 ring-offset-gray-950/5" style={{
                        textShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                        boxShadow: '0 0 15px rgba(251, 191, 36, 0.4)'
                    }}>Popular</span>
                )}
                
                <div className="flex flex-col h-full">
                    <CardHeader className="p-6 lg:p-8">
                        <CardTitle className="font-medium text-base lg:text-lg" style={{ 
                            color: '#fbbf24',
                            textShadow: '0 0 10px rgba(251, 191, 36, 0.3)'
                        }}>{packageInfo.name}</CardTitle>
                        <span className="my-4 block text-xl lg:text-2xl xl:text-3xl font-semibold" style={{
                            background: 'linear-gradient(90deg, #ffffff 0%, #fbbf24 50%, #ffffff 100%)',
                            backgroundSize: '200% 100%',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            textShadow: '0 0 15px rgba(251, 191, 36, 0.4)'
                        }}>{packageInfo.monthlyPrice}</span>
                        <CardDescription className="text-sm lg:text-base" style={{ textShadow: '0 0 8px rgba(251, 191, 36, 0.1)' }}>{packageInfo.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4 lg:space-y-6 p-6 lg:p-8 flex-1">
                        <hr className="border-dashed border-yellow-400/30" />
                        <ul className="list-outside space-y-3 lg:space-y-4 text-sm lg:text-base">
                            {packageInfo.features.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-center gap-3">
                                    <Check className="size-3 lg:size-4 text-yellow-400 flex-shrink-0" style={{ filter: 'drop-shadow(0 0 4px rgba(251, 191, 36, 0.6))' }} />
                                    <span className="flex-1">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>

                    <CardFooter className={`${isPopular ? '' : 'mt-auto'} p-6 lg:p-8`}>
                        <Button
                            asChild
                            className="w-full bg-gradient-to-r from-yellow-500 to-amber-400 hover:from-yellow-400 hover:to-amber-300 text-amber-950 font-semibold border-0 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl py-3 lg:py-4 text-base lg:text-lg"
                            style={{ 
                                boxShadow: '0 0 20px rgba(251, 191, 36, 0.3)',
                                textShadow: '0 0 8px rgba(0, 0, 0, 0.3)'
                            }}
                        >
                            <Link href="#pricing-section">
                                Pilih Paket
                            </Link>
                        </Button>
                    </CardFooter>
                </div>
            </Card>
        )
    }
    return (
        <section id="pricing-section" className="py-16 md:py-32 bg-black">
            <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 relative z-10">
                <div className="w-full">
                    <div className="w-full space-y-6 text-center mb-8 md:mb-20">
                        <h1 className="text-2xl font-semibold lg:text-3xl xl:text-4xl" style={{
                            background: 'linear-gradient(90deg, #ffffff 0%, #fbbf24 50%, #ffffff 100%)',
                            backgroundSize: '200% 100%',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            textShadow: '0 0 20px rgba(251, 191, 36, 0.3)',
                            filter: 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.2))'
                        }}>Paket Asuransi dengan Cashback & Rewards</h1>
                        <p className="text-sm lg:text-base xl:text-lg max-w-4xl mx-auto" style={{ textShadow: '0 0 10px rgba(251, 191, 36, 0.1)' }}>Yang kamu bayar 100% dikembalikan sebagai cashback untuk beli asuransi keluarga. Jadi kamu dapat proteksi gratis PLUS income bulanan dan bonus menarik!</p>
                    </div>

                    <div className="grid gap-6 lg:gap-8 xl:gap-12 grid-cols-1 md:grid-cols-3 w-full min-h-[600px] lg:min-h-[700px]">
                        {renderPackageCard('starter')}
                        {renderPackageCard('professional', true)}
                        {renderPackageCard('premium')}
                    </div>
                </div>
            </div>
        </section>
    )
}