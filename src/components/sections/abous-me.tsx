"use client";

import React from 'react';
import Image from 'next/image';

const AboutMeSection = () => {

  React.useEffect(() => {
    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeInLeft {
        from {
          opacity: 0;
          transform: translateX(-20px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      .animate-fade-in-left {
        opacity: 0;
        transform: translateX(-20px);
        will-change: transform, opacity;
      }
      .animate-fade-in-left.in-view {
        animation: fadeInLeft 0.6s ease-out forwards;
      }

      .animate-pulse-icon {
        animation: fadeInIcon 1s ease-out forwards;
        opacity: 0;
      }

      @keyframes fadeInIcon {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      .gold-aura {
        position: relative;
        box-shadow: 
          0 0 30px rgba(255, 215, 0, 0.15),
          0 0 60px rgba(255, 223, 0, 0.1),
          0 0 90px rgba(255, 193, 7, 0.05);
        animation: goldGlowShadow 4s ease-in-out infinite alternate;
      }

      @keyframes goldGlowShadow {
        0% {
          box-shadow: 
            0 0 20px rgba(255, 215, 0, 0.1),
            0 0 40px rgba(255, 223, 0, 0.06),
            0 0 60px rgba(255, 193, 7, 0.03);
        }
        100% {
          box-shadow: 
            0 0 40px rgba(255, 215, 0, 0.2),
            0 0 80px rgba(255, 223, 0, 0.15),
            0 0 120px rgba(255, 193, 7, 0.08);
        }
      }
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
    description: "Income yang kamu punya sekarang kalau terjadi apa-apa akan langsung diteruskan ke ahli waris kamu. Jadi kamu bisa kerja keras dan tahu bahwa hasil kerja keras kamu aman.",
    image: "/images/icon-gold.png"
  },
  {
    title: "Closing Deal Sekali, Income Terus Ngalir",
    description: "Income kamu akan terus ngalir setiap bulannya tanpa reset. Kamu kejar target supaya penghasilan kamu setiap bulan naik instead.",
    image: "/images/gold-rising.png"
  },
  {
    title: "Private Mentoring",
    description: "Kalau kamu benar-benar commit di 3 bulan pertama, ditambah dengan bimbingan private mentoring, peluangmu untuk meraih income pertama sangat besar—hampir bisa dipastikan kamu akan merasakan sukses awal seperti banyak orang sukses di bawah ini.",
    image: "/images/private-mentoring.png"
  }
];

const cardRefs = React.useRef<Array<HTMLDivElement | null>>([]);

React.useEffect(() => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    // Fallback: immediately show if IO not supported
    cardRefs.current.forEach(el => el?.classList.add('in-view'));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          el.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
  );
  cardRefs.current.forEach((el) => el && observer.observe(el));
  return () => observer.disconnect();
}, []);

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
    <section className="relative min-h-screen bg-black text-white overflow-hidden py-3 sm:py-4 lg:py-7">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 xl:px-32 2xl:px-48 relative z-10">
        <div className="max-w-none xl:max-w-none 2xl:max-w-none mx-auto">
          
          {/* Title and Subtitle Section */}
          <div className="mb-8 sm:mb-16 lg:mb-20">
            <h1 className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-white mb-0 leading-tight text-left">Kamu Pikirkan
            </h1>
            <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-normal text-white mb-4 sm:mb-8 leading-tight text-left">
              Kenapa harus Cobain Bisnis Asuransi.
            </h2>
            <p className="text-xs sm:text-base lg:text-lg text-gray-400 max-w-2xl leading-relaxed text-left">
              Dari sekian banyak pilihan bisnis yang ada, kenapa harus asuransi? 
              Ini 3 alasan kuat yang bisa jadi pertimbangan kamu untuk mulai.
            </p>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 xl:gap-12 mb-8 lg:mb-12">
            {cardData.map((card, index) => {
              return (
                <div
                  key={index}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className="gold-aura animate-fade-in-left bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 sm:p-10 hover:bg-white/10 transition-all duration-300 hover:transform hover:-translate-y-2 hover:scale-105 flex flex-col items-center text-center"
                  style={{ animationDelay: `${index * 0.12}s` }}
                >
                  <div className="w-28 h-28 mb-6">
                    <Image 
                      src={card.image}
                      alt={card.title}
                      width={112}
                      height={112}
                      className="w-full h-full object-contain"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-5 gold-glow-text">
                      {card.title}
                    </h3>
                    <p className="text-sm sm:text-lg text-gray-300 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;