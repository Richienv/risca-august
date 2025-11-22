"use client";

import React from 'react';
import Link from 'next/link';
import { LiquidGlassContainer } from '@/components/ui/liquid-glass-container';
import { WebGLShader } from '@/components/ui/web-gl-shader';

const IncomeBreakdownPage = () => {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* WebGL Shader Background */}
      <div className="absolute inset-0 z-0">
        <WebGLShader />
      </div>

      {/* Overlay for slight dimming effect */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Header */}
      <div className="relative z-20 px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 pt-24 pb-8">
        <Link href="/" className="text-white/70 hover:text-white transition-colors">
          ← Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative z-20 px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-light text-white mb-6" style={{
            fontFamily: 'Georgia, "Times New Roman", Times, serif',
            background: 'linear-gradient(90deg, #ffffff 0%, #ec4899 50%, #ffffff 100%)',
            backgroundSize: '200% 100%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'gradient-shift 3s linear infinite'
          }}>
            Berapa Penghasilan yang Bisa Kamu Dapat?
          </h1>
          <p className="text-xl text-white/80 max-w-4xl mx-auto mb-6" style={{ textShadow: '0 0 10px rgba(236, 72, 153, 0.1)' }}>
            Sistem penghasilan yang jelas dan transparan. Kamu dapat uang dari 2 sumber: penjualan pribadi dan hasil tim kamu. Semakin besar tim, semakin besar penghasilan!
          </p>
          <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-white/90 text-sm">
              <strong className="text-yellow-400">APE</strong> = Annualized Premium Equivalent (Nilai premi tahunan dari setiap polis yang kamu jual)
            </p>
          </div>
        </div>
      </section>

      {/* Personal Production Section */}
      <section className="relative z-20 px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 py-16">
        <LiquidGlassContainer className="rounded-3xl overflow-hidden bg-black/40 backdrop-blur-md" colorOverlay="none">
          <div className="p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-8 text-center" style={{
              background: 'linear-gradient(90deg, #ffffff 0%, #ec4899 50%, #ffffff 100%)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'gradient-shift 3s linear infinite'
            }}>
              💰 Penghasilan dari Jualan Sendiri
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Cara Kerjanya</h3>
                <p className="text-white/80 mb-4">Setiap kali kamu berhasil jual polis asuransi, kamu dapat komisi langsung. Semakin banyak kamu jual, semakin besar penghasilan kamu!</p>
                <div className="bg-pink-500/10 border border-pink-400/20 rounded-lg p-4">
                  <p className="text-white font-medium">Contoh: Jual 300 unit dengan tingkat keberhasilan 25% = 75 polis terjual</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Nilai Setiap Polis</h3>
                <p className="text-white/80 mb-4">Setiap polis yang kamu jual punya nilai APE (nilai premi tahunan). Ini yang jadi dasar perhitungan komisi kamu.</p>
                <div className="bg-blue-500/10 border border-blue-400/20 rounded-lg p-4">
                  <p className="text-white font-medium">1 Polis = 1.8 APE (rata-rata)</p>
                </div>
              </div>
            </div>

            {/* Income Breakdown Table */}
            <div className="overflow-x-auto">
              <table className="w-full bg-black/20 rounded-lg">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left p-4 text-white font-semibold">Jenis Penghasilan</th>
                    <th className="text-left p-4 text-white font-semibold">Penjelasan</th>
                    <th className="text-right p-4 text-white font-semibold">Jumlah</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="p-4 text-white/90">Komisi Penjualan</td>
                    <td className="p-4 text-white/80">Uang dari setiap polis yang kamu jual</td>
                    <td className="p-4 text-white/90 font-bold text-right">75 jt</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 text-white/90">Bonus Performa</td>
                    <td className="p-4 text-white/80">Bonus tambahan kalau kamu capai target</td>
                    <td className="p-4 text-white/90 font-bold text-right">22.5 jt</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 text-white/90">Bonus Poin</td>
                    <td className="p-4 text-white/80">Poin yang bisa ditukar jadi uang</td>
                    <td className="p-4 text-white/90 font-bold text-right">5 jt</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-4 text-white/90">Bonus Mentoring</td>
                    <td className="p-4 text-white/80">Bonus kalau kamu bantu anggota baru</td>
                    <td className="p-4 text-white/90 font-bold text-right">5 jt</td>
                  </tr>
                  <tr className="bg-pink-500/20">
                    <td className="p-4 text-white font-bold">Total Per Bulan</td>
                    <td className="p-4 text-white/80">Penghasilan bulanan dari jualan sendiri</td>
                    <td className="p-4 text-white font-bold text-right text-lg">~27.5 jt</td>
                  </tr>
                  <tr className="bg-green-500/20">
                    <td className="p-4 text-white font-bold">Total Per Tahun</td>
                    <td className="p-4 text-white/80">27.5 jt × 12 bulan</td>
                    <td className="p-4 text-white font-bold text-right text-xl">306 jt</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </LiquidGlassContainer>
      </section>

      {/* Group Production Section */}
      <section className="relative z-20 px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 py-16">
        <LiquidGlassContainer className="rounded-3xl overflow-hidden bg-black/40 backdrop-blur-md" colorOverlay="none">
          <div className="p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-8 text-center" style={{
              background: 'linear-gradient(90deg, #ffffff 0%, #ec4899 50%, #ffffff 100%)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'gradient-shift 3s linear infinite'
            }}>
              👥 Penghasilan dari Tim Kamu
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Cara Kerja Tim</h3>
                <p className="text-white/80 mb-4">Ini yang bikin bisnis ini powerful! Setiap kali anggota tim kamu berhasil jual polis, kamu juga dapat bonus. Makin besar tim, makin besar passive income kamu!</p>
                <ul className="text-white/80 space-y-2 mb-4">
                  <li>• Setiap anggota tim rata-rata jual 250 APE</li>
                  <li>• Kamu dapat bonus 25% dari hasil mereka</li>
                  <li>• Bonus ini terus mengalir selama tim aktif</li>
                  <li>• Bisa punya sekitar 20 anggota aktif per tim</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Contoh Perhitungan</h3>
                <div className="space-y-4">
                  <div className="bg-purple-500/10 border border-purple-400/20 rounded-lg p-4">
                    <p className="text-white font-medium">Setiap anggota: ~250 APE</p>
                  </div>
                  <div className="bg-orange-500/10 border border-orange-400/20 rounded-lg p-4">
                    <p className="text-white font-medium">Bonus kamu per anggota: 250 × 25% × 20.5% = 12.81 jt</p>
                  </div>
                  <div className="bg-green-500/10 border border-green-400/20 rounded-lg p-4">
                    <p className="text-white font-bold">Total dari 20 anggota: 20 × 12.81 jt = 256.2 jt per tahun!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </LiquidGlassContainer>
      </section>

      {/* Tier System Section - Simplified */}
      <section className="relative z-20 px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 py-16">
        <LiquidGlassContainer className="rounded-3xl overflow-hidden bg-black/40 backdrop-blur-md" colorOverlay="none">
          <div className="p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-8 text-center" style={{
              background: 'linear-gradient(90deg, #ffffff 0%, #ec4899 50%, #ffffff 100%)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'gradient-shift 3s linear infinite'
            }}>
              📊 Sistem Bonus Bertingkat
            </h2>

            <p className="text-white/80 text-center mb-8 max-w-3xl mx-auto text-lg">
              Semakin tinggi performa kamu, semakin besar persentase bonus yang kamu dapat. Ini contoh perhitungan bonus untuk top performer:
            </p>

            <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-400/30 rounded-lg p-8 max-w-2xl mx-auto">
              <h4 className="text-2xl font-semibold text-white mb-4 text-center">Contoh Perhitungan Bonus:</h4>
              <p className="text-white/90 text-xl text-center mb-2">200 APE × 25% × 20.5% = <span className="font-bold text-pink-400 text-2xl">10.25 APE</span></p>
              <p className="text-white/70 text-center text-sm">(Bonus ini ditambahkan ke total penghasilan kamu)</p>
            </div>

            <div className="mt-8 bg-blue-500/10 border border-blue-400/20 rounded-lg p-6 max-w-3xl mx-auto">
              <p className="text-white/90 text-center">
                <strong className="text-blue-400">Catatan:</strong> Persentase bonus bisa naik sesuai level performa kamu. Makin tinggi level, makin besar bonusnya!
              </p>
            </div>
          </div>
        </LiquidGlassContainer>
      </section>

      {/* Combined Income Summary */}
      <section className="relative z-20 px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 py-16">
        <LiquidGlassContainer className="rounded-3xl overflow-hidden bg-black/40 backdrop-blur-md" colorOverlay="none">
          <div className="p-8 md:p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8" style={{
              background: 'linear-gradient(90deg, #ffffff 0%, #ec4899 50%, #ffffff 100%)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'gradient-shift 3s linear infinite'
            }}>
              💎 Total Penghasilan Potensial
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-blue-500/10 border border-blue-400/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-400 mb-2">Dari Jualan Sendiri</h3>
                <p className="text-3xl font-bold text-white">125 jt</p>
                <p className="text-white/80 text-sm">Per tahun</p>
              </div>

              <div className="bg-green-500/10 border border-green-400/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-400 mb-2">Dari Tim Kamu</h3>
                <p className="text-3xl font-bold text-white">151.5 jt</p>
                <p className="text-white/80 text-sm">Per tahun</p>
              </div>

              <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-400/30 rounded-xl p-6">
                <h3 className="text-xl font-bold text-pink-400 mb-2">Total Per Tahun</h3>
                <p className="text-4xl font-bold text-white">276.5 jt</p>
                <p className="text-white/80 text-sm">Bisa terus bertambah!</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 rounded-lg p-8">
              <h4 className="text-2xl font-bold text-white mb-4">Yang Perlu Kamu Tahu:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <ul className="text-white/90 space-y-2">
                  <li>✅ Rata-rata agent: 8-15 aplikasi per minggu</li>
                  <li>✅ Target minimum: 15 aplikasi per bulan</li>
                  <li>✅ Dapat training & coaching gratis</li>
                </ul>
                <ul className="text-white/90 space-y-2">
                  <li>✅ Hasil nyata dan realistis</li>
                  <li>✅ Sistem bonus yang jelas</li>
                  <li>✅ Penghasilan bisa terus naik tanpa batas!</li>
                </ul>
              </div>
            </div>
          </div>
        </LiquidGlassContainer>
      </section>
    </div>
  );
};

export default IncomeBreakdownPage;