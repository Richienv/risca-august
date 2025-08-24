import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Check } from 'lucide-react'

export default function Pricing() {
    return (
        <section id="pricing-section" className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mx-auto max-w-2xl space-y-6 text-left">
                    <h1 className="text-left text-2xl font-semibold lg:text-3xl">Paket Keanggotaan Asuransi</h1>
                    <p className="text-sm lg:text-base">Pilih paket yang sesuai dengan kemampuan dan target income bulanan Anda. Semua paket mendapat asuransi pribadi dan keluarga plus bonus menarik.</p>
                </div>

                <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-3">
                    <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="font-medium text-sm">Starter Package</CardTitle>
                            <span className="my-3 block text-lg font-semibold">Rp 10 Jt / bulan</span>
                            <CardDescription className="text-xs">Paket Pemula</CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />

                            <ul className="list-outside space-y-3 text-xs">
                                {['Asuransi Pribadi & Keluarga', 'Income Rp 2.335.000/bulan', 'Komisi 23,35% dari paket', 'Durasi 2 tahun', 'Target 4 orang referral', 'Bonus Logam Mulia 5 Gram (10 Jt)', 'Bonus iPad (6 Jt)', 'Total Bonus 16 Jt dalam 1-3 bulan'].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-2">
                                        <Check className="size-2" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>

                        <CardFooter className="mt-auto">
                            <Button
                                asChild
                                variant="default"
                                className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white border-0 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                                <Link href="">Pilih Paket</Link>
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card className="relative">
                        <span className="bg-linear-to-br/increasing absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full from-purple-400 to-amber-300 px-3 py-1 text-xs font-medium text-amber-950 ring-1 ring-inset ring-white/20 ring-offset-1 ring-offset-gray-950/5">Popular</span>

                        <div className="flex flex-col">
                            <CardHeader>
                                <CardTitle className="font-medium text-sm">Professional Package</CardTitle>
                                <span className="my-3 block text-lg font-semibold">Rp 17 Jt / bulan</span>
                                <CardDescription className="text-xs">Paket Profesional</CardDescription>
                            </CardHeader>

                            <CardContent className="space-y-4">
                                <hr className="border-dashed" />
                                <ul className="list-outside space-y-3 text-xs">
                                    {['Asuransi Pribadi & Keluarga', 'Income Rp 3.969.500/bulan', 'Komisi 23,35% dari paket', 'Durasi 2 tahun', 'Target 2 orang referral', 'Bonus Logam Mulia 5 Gram (10 Jt)', 'Bonus iPad (6 Jt)', 'Total Bonus 16 Jt dalam 1-3 bulan', 'Income lebih stabil', 'Target referral lebih sedikit'].map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center gap-2">
                                            <Check className="size-2" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>

                            <CardFooter>
                                <Button
                                    asChild
                                    className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white border-0 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                                    <Link href="">Pilih Paket</Link>
                                </Button>
                            </CardFooter>
                        </div>
                    </Card>

                    <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="font-medium text-sm">Premium Package</CardTitle>
                            <span className="my-3 block text-lg font-semibold">Rp 25 Jt / bulan</span>
                            <CardDescription className="text-xs">Paket Premium</CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />

                            <ul className="list-outside space-y-3 text-xs">
                                {['Asuransi Pribadi & Keluarga', 'Income Rp 5.837.500/bulan', 'Komisi 23,35% dari paket', 'Durasi 2 tahun', 'Tanpa target referral', 'Bonus Logam Mulia 5 Gram (10 Jt)', 'Bonus iPad (6 Jt)', 'Total Bonus 16 Jt dalam 1-3 bulan', 'Income tertinggi', 'Paling mudah dicapai'].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-2">
                                        <Check className="size-2" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>

                        <CardFooter className="mt-auto">
                            <Button
                                asChild
                                variant="default"
                                className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white border-0 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                                <Link href="">Pilih Paket</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    )
}