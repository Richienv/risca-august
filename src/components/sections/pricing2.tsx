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
            <Card key={packageType} className={`flex flex-col ${isPopular ? 'relative' : ''}`}>
                {isPopular && (
                    <span className="bg-linear-to-br/increasing absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full from-purple-400 to-amber-300 px-3 py-1 text-xs font-medium text-amber-950 ring-1 ring-inset ring-white/20 ring-offset-1 ring-offset-gray-950/5">Popular</span>
                )}
                
                <div className="flex flex-col">
                    <CardHeader>
                        <CardTitle className="font-medium text-sm">{packageInfo.name}</CardTitle>
                        <span className="my-3 block text-lg font-semibold">{packageInfo.monthlyPrice}</span>
                        <CardDescription className="text-xs">{packageInfo.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                        <hr className="border-dashed" />
                        <ul className="list-outside space-y-3 text-xs">
                            {packageInfo.features.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-center gap-2">
                                    <Check className="size-2" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </CardContent>

                    <CardFooter className={isPopular ? '' : 'mt-auto'}>
                        <Button
                            asChild
                            className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white border-0 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            <Link href={`/checkout?package=${packageType}`}>
                                Pilih Paket
                            </Link>
                        </Button>
                    </CardFooter>
                </div>
            </Card>
        )
    }
    return (
        <section id="pricing-section" className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mx-auto max-w-2xl space-y-6 text-left">
                    <h1 className="text-left text-2xl font-semibold lg:text-3xl">Paket Asuransi dengan Cashback & Rewards</h1>
                    <p className="text-sm lg:text-base">Yang kamu bayar 100% dikembalikan sebagai cashback untuk beli asuransi keluarga. Jadi kamu dapat proteksi gratis PLUS income bulanan dan bonus menarik!</p>
                </div>

                <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-3">
                    {renderPackageCard('starter')}
                    {renderPackageCard('professional', true)}
                    {renderPackageCard('premium')}
                </div>
            </div>
        </section>
    )
}