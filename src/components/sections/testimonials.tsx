"use client";

import { Card, CardContent } from '@/components/card-8';
import { motion } from 'framer-motion';
import { Spotlight } from '@/components/spotlight-new';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    name: "Jojo",
    role: "Ex Mahasiswa",
    quote: "Awalnya aku memilih Risca sebagai mentor karena dia yang pertama kali mengenalkan aku ke peluang ini.",
    story: "Gaya mentoring-nya luar biasa – sabar, bisa menyesuaikan dengan tempo belajar aku yang kadang lambat. Sekarang bisa beli apartemen, mobil baru, bahkan umroh pakai uang sendiri.",
    img: "https://images.unsplash.com/photo-1494790108755-2616b612b1dc?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Devina Hartono",
    role: "Ex Introvert",
    quote: "Sebelum bergabung dengan Risca, saya adalah orang yang tidak punya ambisi besar dan selalu menganggap diri introvert.",
    story: "Bersyukur sekali bisa join di Risca, sehingga saya tahu kemampuan-kemampuan yang sebelumnya tidak pernah terpikirkan. Sekarang punya mimpi dan tujuan hidup yang jelas.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Sharon Gunawan",
    role: "Team Leader",
    quote: "Risca orangnya sangat berpengetahuan luas dan tidak pelit berbagi ilmu.",
    story: "Melihat Risca sebagai pemimpin, saya bisa lihat bagaimana dia selalu merawat timnya dan memberi mereka rasa tanggung jawab. Di Risca, saya belajar membangun relasi yang bermakna dengan orang lain.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Jessica Suwarsono", 
    role: "Ex Karyawan Korporat",
    quote: "Sebagai mantan karyawan korporat, saya benar-benar merasakan perubahan hidup sejak bergabung dengan Risca.",
    story: "Penghasilan yang saya dapatkan selama 4 tahun menjalankan bisnis Risca sudah mencapai dua kali lipat dari gaji terakhir saya di perusahaan.",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Shanelle",
    role: "High Achiever",
    quote: "Bermain keras, bekerja LEBIH KERAS. Yang paling terasa adalah lingkungannya yang penuh dengan high-achiever.",
    story: "Jadi ada trigger untuk keluar dari zona nyaman, bermimpi besar, dan mencapai lebih banyak lagi. Bonus mentoring dari orang-orang hebat.",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Trisna",
    role: "Dreamer",
    quote: "Risca adalah gudang ilmu! Gesit bersama tim, mindset yang terbuka.",
    story: "Perubahan sejak bergabung dengan Risca BANYAK SEKALI! Tapi yang paling saya sadari adalah MIMPI. Saya jadi berani untuk bermimpi lagi. Ternyata mimpi bisa direalisasikan berkat Risca.",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Joceline",
    role: "Business Partner",
    quote: "Risca sebagai salah satu partner senior selalu memberikan wawasan tentang menjalankan bisnis.",
    story: "Sangat bersyukur bisa bergabung di bisnis Risca. Selain mendapat teman-teman positif, percepatan income di bisnis ini benar-benar nyata dan terasa.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Sarchie",
    role: "Quality Leader",
    quote: "Etos kerja Risca benar-benar luar biasa. Dia tidak pernah setengah-setengah dalam melakukan sesuatu.",
    story: "Ketika dia serius terhadap sesuatu, hasilnya selalu memuaskan - penuh integritas dan kualitas tinggi.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Sheila Tang",
    role: "Property Investor",
    quote: "Akselerasinya sangat cepat, mulai dari menyekolahkan anak ke sekolah internasional hingga membeli aset properti.",
    story: "Semuanya hasil dari kerja keras dan membantu orang lain. Sejak tahun ketiga, tim semakin besar dan berkembang pesat.",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Rafi Ahmad",
    role: "Ex Karyawan 9-5",
    quote: "Gue dulu karyawan 9-5 yang stuck banget. Income cuma 5 juta sebulan, hidup gitu-gitu aja.",
    story: "Setelah ikut sistem ini, dalam 4 bulan pertama udah bisa 12 juta per bulan. Sekarang bisa traveling sambil kerja, freedom banget!",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Anya Putri",
    role: "Ex Skeptis",
    quote: "Dulu skeptis banget sama bisnis online. Mikir pasti scam atau MLM. Ternyata salah besar!",
    story: "Ini beneran sistem yang proven. Dalam 6 bulan udah bisa bayar cicilan motor sendiri dan nabung buat wedding. Game changer banget!",
    img: "https://images.unsplash.com/photo-1494790108755-2616b612b1dc?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Kevin Pratama",
    role: "Fresh Graduate",
    quote: "Fresh graduate yang bingung mau ngapain. Ngelamar kerja susah, kalau dapat gaji kecil.",
    story: "Ikut program ini jadi turning point hidup gue. Sekarang penghasilan udah 15 juta per bulan di umur 22 tahun!",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "SAM",
    role: "Entrepreneur",
    quote: "Membangun Karier sendiri sejak lulus Kuliah",
    story: "Saya memutuskan untuk membangun usaha sendiri setelah lulus kuliah, karena percaya bahwa jalur mandiri memberi ruang lebih besar untuk berkembang dan memaksimalkan potensi, dibanding menunggu waktu di tangga karier korporat. Dari seorang mahasiswa sekarang bisa running bisnis sendiri dimana aja dan punya kebebasan waktu. Join akhir Agustus kemarin earn ~175jt.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face",
  },
];

function TestimonialCard({ name, role, quote, story, img }: (typeof testimonials)[number]) {
  return (
    <Card className="relative w-full overflow-hidden bg-black/40 backdrop-blur-md border-white/10 hover:border-white/20 transition-all duration-300 group hover:bg-black/50">
      <CardContent className="relative z-10 p-4 sm:p-5 lg:p-8 flex flex-col">
        {/* Quote Icon */}
        <div className="mb-4 sm:mb-5 lg:mb-8">
          <Quote className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-pink-500" strokeWidth={2} />
        </div>
        
        {/* Main Quote */}
        <div className="mb-4 sm:mb-5 lg:mb-8">
          <p className="text-sm sm:text-base lg:text-lg font-medium text-white leading-tight">
            "{quote}"
          </p>
        </div>
        
        {/* Story */}
        <div className="text-white mb-4 sm:mb-5 lg:mb-8">
          <p className="text-xs sm:text-sm lg:text-base text-white/80 leading-relaxed font-light">
            {story}
          </p>
        </div>
        
        {/* Profile Section */}
        <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-5">
          <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-lg overflow-hidden flex-shrink-0">
            <img 
              src={img} 
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-xs sm:text-sm lg:text-base font-semibold text-white">{name}</h3>
            <p className="text-xs sm:text-xs lg:text-sm text-white/70 font-light">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Get visible testimonials (3 on desktop, 1 on mobile)
  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      result.push(testimonials[index]);
    }
    return result;
  };

  return (
    <div className="relative py-16 md:py-32 bg-black overflow-hidden">
      {/* Pink Spotlight Effects */}
      <Spotlight 
        gradientFirst={`radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(236, 72, 153, 0.12) 0%, rgba(219, 39, 119, 0.06) 50%, transparent 80%)`}
        gradientSecond={`radial-gradient(50% 50% at 50% 50%, rgba(236, 72, 153, 0.08) 0%, rgba(219, 39, 119, 0.04) 80%, transparent 100%)`}
        gradientThird={`radial-gradient(50% 50% at 50% 50%, rgba(219, 39, 119, 0.06) 0%, rgba(236, 72, 153, 0.03) 80%, transparent 100%)`}
        translateY={-180}
        width={390}
        height={780}
        smallWidth={160}
        duration={17}
        xOffset={30}
      />
      
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-xs sm:text-sm font-mono font-light text-slate-300 uppercase tracking-[0.2em] opacity-80 mb-4">
          Kata - Kata
        </h2>
        <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mb-6"></div>
        <motion.h1 
          className="text-center text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl whitespace-normal px-4 sm:px-6 md:px-8 lg:px-10 max-w-full mx-auto text-white relative mb-4"
          style={{
            background: 'linear-gradient(90deg, #ffffff 0%, #9d1152 50%, #ffffff 100%)',
            backgroundSize: '200% 100%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear'
          }}
        >
          Mereka Udah Mulai
        </motion.h1>
        <p className="text-xs sm:text-sm lg:text-base font-light leading-relaxed text-slate-300 max-w-sm sm:max-w-3xl mx-auto px-0 sm:px-6 lg:px-8">
          Dari yang skeptis sampe akhirnya ngaku "gue salah banget dulu ragu". Ini cerita real dari member yang dulu mikir persis kayak lo sekarang.
        </p>
      </div>
      
      {/* Manual Navigation Carousel */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {getVisibleTestimonials().map((testimonial, index) => (
            <motion.div
              key={`${currentIndex}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${index > 0 ? 'hidden lg:block' : ''}`} // Only show first card on mobile
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>

        {/* Navigation Controls at Bottom */}
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          
          {/* Dot Indicators */}
          <div className="flex gap-2">
            {[0, 1, 2].map((dotIndex) => {
              const testimonialIndex = (currentIndex + dotIndex) % testimonials.length;
              return (
                <button
                  key={dotIndex}
                  onClick={() => setCurrentIndex(testimonialIndex)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    dotIndex === 0 ? 'bg-pink-500' : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${testimonialIndex + 1}`}
                />
              );
            })}
          </div>
          
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}