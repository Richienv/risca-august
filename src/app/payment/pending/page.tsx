'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Clock } from 'lucide-react'
import Link from 'next/link'

export default function PaymentPendingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <Card className="w-full max-w-md bg-black border-gray-800">
        <CardHeader>
          <CardTitle className="flex items-center justify-center gap-2 text-yellow-400">
            <Clock className="h-6 w-6" />
            Pembayaran Pending
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-center">
          <div>
            <p className="text-gray-300 mb-4">
              Pembayaran Anda sedang diproses dan menunggu konfirmasi.
            </p>
            <p className="text-sm text-gray-400">
              Kami akan mengirimkan notifikasi ke email Anda begitu pembayaran dikonfirmasi.
            </p>
          </div>

          <div className="bg-yellow-900/30 border border-yellow-700/30 rounded-lg p-4">
            <p className="text-sm text-yellow-300">
              <strong>Catatan:</strong> Proses konfirmasi dapat memakan waktu hingga 24 jam 
              tergantung metode pembayaran yang dipilih.
            </p>
          </div>

          <div className="space-y-3">
            <Link href="/">
              <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white border-0">
                Kembali ke Beranda
              </Button>
            </Link>
          </div>

          <div className="text-xs text-gray-400">
            <p>Butuh bantuan?</p>
            <p>Hubungi customer service kami untuk informasi lebih lanjut</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}