'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { XCircle } from 'lucide-react'
import Link from 'next/link'

export default function PaymentErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <Card className="w-full max-w-md bg-black border-gray-800">
        <CardHeader>
          <CardTitle className="flex items-center justify-center gap-2 text-red-400">
            <XCircle className="h-6 w-6" />
            Pembayaran Gagal
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-center">
          <div>
            <p className="text-gray-300 mb-4">
              Maaf, terjadi kesalahan saat memproses pembayaran Anda.
            </p>
            <p className="text-sm text-gray-400">
              Silakan coba lagi atau hubungi customer service jika masalah berlanjut.
            </p>
          </div>

          <div className="space-y-3">
            <Link href="/#pricing-section">
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white border-0">
                Coba Lagi
              </Button>
            </Link>
            
            <Link href="/">
              <Button variant="outline" className="w-full bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white">
                Kembali ke Beranda
              </Button>
            </Link>
          </div>

          <div className="text-xs text-gray-400">
            <p>Butuh bantuan?</p>
            <p>Hubungi customer service kami</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}