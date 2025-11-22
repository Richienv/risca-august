"use client";

import React from 'react';
import Link from 'next/link';
import { LiquidGlassContainer } from '@/components/ui/liquid-glass-container';
import { WebGLShader } from '@/components/ui/web-gl-shader';

const BenefitsPage = () => {
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
            Bonus Achievement Eksklusif
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto" style={{ textShadow: '0 0 10px rgba(236, 72, 153, 0.1)' }}>
            Raih bonus-bonus luar biasa dengan mencapai target tertentu. Kerja bukan hanya untuk untung orang, tapi juga melindungi keluarga dari hal yang tidak diinginkan seperti penyakit kritis. License dan sistem GRATIS dari kami!
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="relative z-20 px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Allowance */}
          <LiquidGlassContainer className="rounded-3xl overflow-hidden bg-black/40 backdrop-blur-md hover:bg-black/50 hover:transform hover:scale-105 transition-all duration-300" colorOverlay="none">
            <div className="p-8 hover:brightness-110 transition-all duration-500">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-white mb-4">Allowance Bulanan</h3>
              <p className="text-white/80 mb-6">Dapatkan allowance bulanan yang kompetitif untuk mendukung perjalanan karier kamu. Semakin tinggi performa, semakin besar allowance yang kamu terima!</p>
              <div className="text-3xl font-bold text-white/90">Rp 3-12 Juta</div>
              <div className="text-white/60 text-sm">Per bulan sesuai performa</div>
            </div>
          </LiquidGlassContainer>

          {/* Quarterly Bonus */}
          <LiquidGlassContainer className="rounded-3xl overflow-hidden bg-black/40 backdrop-blur-md hover:bg-black/50 hover:transform hover:scale-105 transition-all duration-300" colorOverlay="none">
            <div className="p-8 hover:brightness-110 transition-all duration-500">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-white mb-4">Bonus Per 3 Bulan</h3>
              <p className="text-white/80 mb-6">Raih bonus triwulanan spektakuler berdasarkan pencapaian target kamu. Konsistensi adalah kunci untuk mendapatkan bonus maksimal!</p>
              <div className="text-3xl font-bold text-white/90">10-30%</div>
              <div className="text-white/60 text-sm">Dari total performa triwulanan</div>
            </div>
          </LiquidGlassContainer>

          {/* Revenue Bonus */}
          <LiquidGlassContainer className="rounded-3xl overflow-hidden bg-black/40 backdrop-blur-md hover:bg-black/50 hover:transform hover:scale-105 transition-all duration-300" colorOverlay="none">
            <div className="p-8 hover:brightness-110 transition-all duration-500">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-white mb-4">Bonus dari Omset</h3>
              <p className="text-white/80 mb-6">Dapatkan 5% dari total omset yang kamu hasilkan! Semakin besar omset, semakin besar penghasilan tambahan kamu.</p>
              <div className="text-3xl font-bold text-white/90">5%</div>
              <div className="text-white/60 text-sm">Dari total omset</div>
            </div>
          </LiquidGlassContainer>

          {/* Referral Bonus */}
          <LiquidGlassContainer className="rounded-3xl overflow-hidden bg-black/40 backdrop-blur-md hover:bg-black/50 hover:transform hover:scale-105 transition-all duration-300" colorOverlay="none">
            <div className="p-8 hover:brightness-110 transition-all duration-500">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  <path d="M6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-white mb-4">Bonus Referral</h3>
              <p className="text-white/80 mb-6">Ajak teman atau keluarga untuk bergabung dan dapatkan bonus referral yang menggiurkan! Bangun network sambil dapat cuan.</p>
              <div className="text-3xl font-bold text-white/90">25%</div>
              <div className="text-white/60 text-sm">Dari setiap referral yang join</div>
            </div>
          </LiquidGlassContainer>

          {/* Trip Rewards */}
          <LiquidGlassContainer className="rounded-3xl overflow-hidden bg-black/40 backdrop-blur-md hover:bg-black/50 hover:transform hover:scale-105 transition-all duration-300" colorOverlay="none">
            <div className="p-8 hover:brightness-110 transition-all duration-500">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732L14.146 12.8l-1.179 4.456a1 1 0 01-1.934 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732L9.854 7.2l1.179-4.456A1 1 0 0112 2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-white mb-4">Bonus Trip Gratis</h3>
              <p className="text-white/80 mb-6">Achieve target tertentu dan nikmati trip gratis ke berbagai destinasi impian! Dari Asia sampai Eropa, ALL EXPENSES PAID!</p>
              <div className="text-3xl font-bold text-white/90">Asia - Eropa ✈️</div>
              <div className="text-white/60 text-sm">All-paid trip untuk top performers</div>
            </div>
          </LiquidGlassContainer>

          {/* Special Allowance */}
          <LiquidGlassContainer className="rounded-3xl overflow-hidden bg-black/40 backdrop-blur-md hover:bg-black/50 hover:transform hover:scale-105 transition-all duration-300" colorOverlay="none">
            <div className="p-8 hover:brightness-110 transition-all duration-500">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-white mb-4">Allowance Khusus</h3>
              <p className="text-white/80 mb-6">Punya background di insurance atau bank? Dapatkan allowance khusus sebagai apresiasi atas pengalaman dan expertise kamu!</p>
              <div className="text-3xl font-bold text-white/90">Bonus Ekstra 🎯</div>
              <div className="text-white/60 text-sm">Untuk background insurance & banking</div>
            </div>
          </LiquidGlassContainer>

        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-20 px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 py-16">
        <div className="text-center bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-12">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">Siap Merasakan Semua Benefit Ini?</h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Bergabung dengan ribuan member yang udah merasakan kehidupan beda level. Opportunity terbatas - jangan sampai nyesel karena telat ambil keputusan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Gabung Sekarang
            </button>
            <button className="border border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors">
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BenefitsPage;