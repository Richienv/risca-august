"use client";

import React from 'react';
import { Card, CardContent } from '@/components/card-8';
import { motion } from 'framer-motion';

const AboutMeSection = () => {

  React.useEffect(() => {
    // Add CSS animations (removed pulse animation)
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
        animation: fadeInLeft 0.6s ease-out forwards;
        opacity: 0;
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
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 relative z-10">
        <div className="max-w-none xl:max-w-none 2xl:max-w-none mx-auto">
          
          {/* Title and Subtitle Section */}
          <div className="mb-8 sm:mb-16 lg:mb-20">
            <h1 className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-white mb-0 leading-tight text-left">
              3 Alasan Untuk Kamu Pikirkan
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
          <div className="space-y-8 lg:space-y-12 px-4 sm:px-8 lg:px-12">
            {cardData.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Unified Card Container */}
                <Card className="relative overflow-hidden bg-black/40 backdrop-blur-md border-transparent hover:border-transparent transition-all duration-300 group hover:bg-black/50">
                  <CardContent className="p-0">
                    <div className={`flex flex-col lg:flex-row items-stretch gap-0 ${
                      index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                    }`}>
                      {/* Image Side */}
                      <div className="w-full lg:w-1/2 relative flex-shrink-0">
                        <div className="relative overflow-hidden h-full px-8 sm:px-12 lg:px-16">
                          <img 
                            src={card.image}
                            alt={card.title}
                            className="w-full h-full min-h-[180px] sm:min-h-[220px] lg:h-72 object-cover rounded-lg"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        </div>
                      </div>

                      {/* Text Side */}
                      <div className="flex-1 w-full lg:w-1/2 relative">
                        <div className="relative z-10 p-4 sm:p-5 lg:p-8 h-full flex flex-col">
                          {/* Title */}
                          <div className="mb-3 sm:mb-5 lg:mb-8">
                            <p className="text-sm sm:text-base lg:text-lg leading-tight text-white font-medium">
                              {card.title}
                            </p>
                          </div>
                          
                          {/* Description */}
                          <div className="text-white mb-3 sm:mb-5 lg:mb-8 flex-1">
                            <p className="text-xs sm:text-sm lg:text-base leading-relaxed font-light text-white/80">
                              {card.description}
                            </p>
                          </div>
                          
                          {/* Phase Info Section */}
                          <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-5">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                              <span className="text-yellow-400 text-xs sm:text-sm lg:text-base font-bold">
                                {index + 1}
                              </span>
                            </div>
                            <div>
                              <h3 className="text-xs sm:text-sm lg:text-base font-semibold text-white">Alasan {index + 1}</h3>
                              <p className="text-xs sm:text-xs lg:text-sm text-white/70 font-light">Bisnis Asuransi</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;