"use client";

import React from 'react';
import Image from 'next/image';
import { LiquidGlassContainer } from '@/components/ui/liquid-glass-container';
import { WebGLShader } from '@/components/ui/web-gl-shader';

const AboutMeSection = () => {

  React.useEffect(() => {
    // Add CSS for gold glow text
    const style = document.createElement('style');
    style.textContent = `
      .gold-glow-text {
        color: #FBBF24; /* amber-400 */
        text-shadow:
          0 0 6px rgba(251, 191, 36, 0.45),
          0 0 12px rgba(251, 191, 36, 0.35),
          0 0 20px rgba(251, 191, 36, 0.25);
        animation: goldTextPulse 2.8s ease-in-out infinite;
      }
      @keyframes goldTextPulse {
        0%, 100% {
          text-shadow:
            0 0 6px rgba(251, 191, 36, 0.40),
            0 0 12px rgba(251, 191, 36, 0.30),
            0 0 20px rgba(251, 191, 36, 0.20);
          filter: saturate(100%);
        }
        50% {
          text-shadow:
            0 0 10px rgba(251, 191, 36, 0.60),
            0 0 20px rgba(251, 191, 36, 0.45),
            0 0 32px rgba(251, 191, 36, 0.35);
          filter: saturate(120%);
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

const cardData = [
  {
    title: "Income Bisa Diwariskan",
    description: "Bayangkan penghasilan kamu terus mengalir bahkan setelah pensiun atau nggak aktif lagi! Setiap polis yang pernah kamu jual akan memberikan komisi residual seumur hidup. Contohnya: Kamu jual 100 polis di tahun pertama, setiap tahun kamu tetap dapat komisi dari renewal mereka. Ini bisa kamu wariskan ke anak-anak sebagai passive income yang nggak pernah habis!",
    metrics: "Passive income seumur hidup + bisa diwariskan",
    image: "/images/icon-gold.png"
  },
  {
    title: "Sekali Deal Cuan Seumur Hidup",
    description: "Beda sama sales biasa yang sekali closing langsung habis, di bisnis asuransi sekali kamu closing nasabah, kamu dapat komisi berkali-kali! Contoh: Nasabah bayar premi 5 juta per tahun, kamu dapat komisi 15-25% di tahun pertama, lalu 5-10% setiap tahunnya selama polis aktif. Satu nasabah bisa kasih kamu penghasilan 10-20 tahun!",
    metrics: "15-25% komisi pertama + 5-10% renewal tahunan",
    image: "/images/gold-rising.png"
  },
  {
    title: "Private Mentoring dari Billionaire",
    description: "Kamu nggak akan jalan sendirian! Tim kita punya mentor yang sudah terbukti sukses dengan omzet milyaran. Mereka akan ngajarin semua strategi closing, cara bangun tim, dan rahasia scaling bisnis yang nggak pernah diajarkan di tempat lain. Bayangkan punya akses langsung ke orang yang udah berhasil bangun empire!",
    metrics: "Mentoring eksklusif dari mentor milyaran",
    image: "/images/private-mentoring.png"
  },
  {
    title: "Bonus Seumur Hidup dari Tim",
    description: "Setiap kali anggota tim kamu closing, kamu dapat bonus override! Makin besar tim kamu, makin besar passive income-nya. Contoh: Tim kamu ada 10 orang, masing-masing closing 2 polis per bulan, kamu dapat override 500rb-1juta per polis. Itu 10-20 juta passive income per bulan dari tim!",
    metrics: "500rb-1juta override per closing tim",
    image: "/images/woman.png"
  },
  {
    title: "Achieve Target Dapat Bonus Trip",
    description: "Ini bukan mimpi! Achieve target tertentu, kamu bisa dapet bonus trip ke London, Jepang, atau Taiwan - ALL EXPENSES PAID! Bayangin liburan ke luar negeri gratis sambil networking sama top performers dari seluruh Asia. Tahun lalu ada 50+ agent yang dapet trip gratis. Kamu mau jadi salah satunya?",
    metrics: "2-3x trip gratis per tahun ke London/Jepang/Taiwan",
    image: "/images/medic.png"
  },
  {
    title: "Free iPad & Rewards Berlimpah",
    description: "Setiap achieve milestone, kamu dapat hadiah keren! iPad, iPhone, laptop, bahkan motor dan mobil untuk top achievers. Plus ada bonus cash jutaan rupiah untuk ranking tertentu. Ini bukan cuma bonus biasa, tapi apresiasi nyata untuk kerja keras kamu. Kerja sambil dapat gadget terbaru, siapa yang nggak mau?",
    metrics: "iPad, iPhone, laptop + bonus cash jutaan",
    image: "/images/icon-gold.png"
  }
];

  const wrongPathItems = [
    "Kerja 8 jam sehari cuma buat hidup pas-pasan",
    "Hari demi hari berlalu tanpa pertumbuhan atau prestasi yang kamu bisa banggakan",
    "Kamu lembur, bos kamu yang naik mobil baru",
    "Saat anak sudah besar, kamu bingung: “Aku mau ngapain sekarang?”",
    "Gak punya warisan untuk ditinggalkan"
  ];

  const rightPathItems = [
    "Gak perlu korbankan waktu keluarga demi karier",
    "Gaji kamu bisa setara bahkan melebihi suami, dalam waktu < 6 bulan",
    "Punya dampak nyata, bantu keluarga lain meraih perlindungan keuangan",
    "Mulai bangun masa depan anak & warisan keluarga dari sekarang"
  ];


  return (
    <section id="reason-join-section" className="relative min-h-screen text-white overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">
      {/* WebGL Shader Background */}
      <div className="absolute inset-0 z-0">
        <WebGLShader />
      </div>
      
      {/* Overlay for slight dimming effect */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      
      {/* Main Content */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 relative z-20">
        <div className="w-full">
          
          {/* Title and Subtitle Section */}
          <div className="mb-12 sm:mb-20 lg:mb-24 text-center">
            <h1 className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-white mb-0 leading-tight">
              6 Alasan Kuat Kenapa Kamu Harus
            </h1>
            <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-normal text-white mb-4 sm:mb-8 leading-tight">
              Gabung Bisnis Asuransi Sekarang!
            </h2>
            <p className="text-xs sm:text-base lg:text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Jangan sampai kamu menyesal di masa depan karena melewatkan kesempatan emas ini. Bisnis asuransi bukan cuma soal jual polis, 
              tapi membangun sistem penghasilan jangka panjang yang bisa kamu wariskan ke anak cucu!
            </p>
          </div>

          {/* Cards Section - Optimized for Mobile and Desktop */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-12 w-full">
            {cardData.map((card, index) => {
              return (
                <LiquidGlassContainer
                  key={index}
                  colorOverlay="none"
                  className="w-full rounded-2xl p-4 sm:p-6 lg:p-12 xl:p-16 hover:transform hover:-translate-y-2 transition-all duration-300 bg-black/40 backdrop-blur-md hover:bg-black/50"
                >
                  <div className={`flex flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-16 xl:gap-20 w-full ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}>
                    {/* Image Section - Consistent Aspect Ratio */}
                    <div className="flex-shrink-0 w-full sm:w-80 lg:w-2/5 xl:w-1/3 max-w-sm lg:max-w-md mx-auto lg:mx-0">
                      <div className="w-full aspect-square flex items-center justify-center bg-gradient-to-b from-amber-500/10 to-transparent rounded-xl p-3 sm:p-4">
                        <Image 
                          src={card.image}
                          alt={card.title}
                          width={300}
                          height={300}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="flex-1 text-center lg:text-left w-full">
                      <div className="flex items-center justify-center lg:justify-start space-x-3 mb-4 sm:mb-6">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600 flex items-center justify-center shadow-lg">
                          <span className="text-white text-base sm:text-lg font-bold">
                            {index + 1}
                          </span>
                        </div>
                      </div>
                      
                      <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold mb-3 sm:mb-4 lg:mb-6 gold-glow-text leading-tight">
                        {card.title}
                      </h3>
                      
                      
                      <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-gray-300 leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </LiquidGlassContainer>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;