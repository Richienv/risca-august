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
          
          {/* Income Benefits */}
          <LiquidGlassContainer className="rounded-3xl overflow-hidden bg-black/40 backdrop-blur-md hover:bg-black/50 hover:transform hover:scale-105 transition-all duration-300" colorOverlay="none">
            <div className="p-8 hover:brightness-110 transition-all duration-500">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-light text-white mb-4">Bonus Income Unlimited</h3>
            <p className="text-white/80 mb-6">Dapatkan bonus penghasilan tanpa batas dengan sistem kami yang GRATIS! Kerja cerdas untuk keluarga, bukan hanya untung orang lain. Target: 5 polis = Bonus iPad Pro!</p>
            <div className="text-3xl font-bold text-white/90">∞ + 🎁</div>
            <div className="text-white/60 text-sm">License & sistem GRATIS</div>
            </div>
          </LiquidGlassContainer>

          {/* Commission Benefits */}
          <LiquidGlassContainer className="rounded-3xl overflow-hidden bg-black/40 backdrop-blur-md hover:bg-black/50 hover:transform hover:scale-105 transition-all duration-300" colorOverlay="none">
            <div className="p-8 hover:brightness-110 transition-all duration-500">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-light text-white mb-4">Bonus Komisi Gila</h3>
            <p className="text-white/80 mb-6">Raih bonus komisi spektakuler dengan license GRATIS dari kami! Lindungi keluarga dari penyakit kritis sambil meraih cuan. Target: 10 polis = Private mentoring 1-on-1!</p>
            <div className="text-3xl font-bold text-white/90">50%+ 🏆</div>
            <div className="text-white/60 text-sm">Komisi + bonus mentoring</div>
            </div>
          </LiquidGlassContainer>

          {/* Bonus Benefits */}
          <LiquidGlassContainer className="rounded-3xl overflow-hidden bg-black/40 backdrop-blur-md hover:bg-black/50 hover:transform hover:scale-105 transition-all duration-300" colorOverlay="none">
            <div className="p-8 hover:brightness-110 transition-all duration-500">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732L14.146 12.8l-1.179 4.456a1 1 0 01-1.934 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732L9.854 7.2l1.179-4.456A1 1 0 0112 2z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-2xl font-light text-white mb-4">Bonus Trip Reward Mewah</h3>
            <p className="text-white/80 mb-6">Bonus traveling gratis ke destinasi impian dengan kerja fleksible - gak nyangkut di kantor! Sistem GRATIS kami bikin lo fokus lindungi keluarga dari hal tak terduga. Target: Top 10% = Trip Eropa!</p>
            <div className="text-3xl font-bold text-white/90">All-Paid ✈️</div>
            <div className="text-white/60 text-sm">Kerja fleksible + trip gratis</div>
            </div>
          </LiquidGlassContainer>

          {/* Training Support */}
          <LiquidGlassContainer className="rounded-3xl overflow-hidden bg-black/40 backdrop-blur-md hover:bg-black/50 hover:transform hover:scale-105 transition-all duration-300" colorOverlay="none">
            <div className="p-8 hover:brightness-110 transition-all duration-500">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.75 2.524z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-light text-white mb-4">Bonus Training Premium</h3>
            <p className="text-white/80 mb-6">Akses bonus training premium dengan license GRATIS! Kerja bukan buat untung orang, tapi melindungi keluarga dari penyakit kritis. Target: 3 bulan konsisten = Sertifikasi internasional!</p>
            <div className="text-3xl font-bold text-white/90">Free 🎓</div>
            <div className="text-white/60 text-sm">License GRATIS + sertifikasi</div>
            </div>
          </LiquidGlassContainer>

          {/* Lifestyle Benefits */}
          <LiquidGlassContainer className="rounded-3xl overflow-hidden bg-black/40 backdrop-blur-md hover:bg-black/50 hover:transform hover:scale-105 transition-all duration-300" colorOverlay="none">
            <div className="p-8 hover:brightness-110 transition-all duration-500">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-2xl font-light text-white mb-4">Bonus Lifestyle Upgrade</h3>
            <p className="text-white/80 mb-6">Bonus upgrade lifestyle dengan kerja fleksible, gak terikat kantor. License & sistem GRATIS kami bantu lo fokus lindungi keluarga dari hal yang tidak diinginkan. Target: 6 bulan konsisten = VIP club access!</p>
            <div className="text-3xl font-bold text-white/90">Elite 👑</div>
            <div className="text-white/60 text-sm">Lifestyle fleksible + VIP access</div>
            </div>
          </LiquidGlassContainer>

          {/* Network Access */}
          <LiquidGlassContainer className="rounded-3xl overflow-hidden bg-black/40 backdrop-blur-md hover:bg-black/50 hover:transform hover:scale-105 transition-all duration-300" colorOverlay="none">
            <div className="p-8 hover:brightness-110 transition-all duration-500">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                <path d="M6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-light text-white mb-4">Bonus Network Exclusive</h3>
            <p className="text-white/80 mb-6">Bonus koneksi dengan top leaders, dengan sistem GRATIS dari kami. Kerja untuk melindungi keluarga dari penyakit kritis, bukan cuma untung orang. Target: 1 tahun = Lifetime VIP network access!</p>
            <div className="text-3xl font-bold text-white/90">VIP 🤝</div>
            <div className="text-white/60 text-sm">Network lifetime + sistem GRATIS</div>
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