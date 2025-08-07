"use client";

import { Avatar, AvatarFallback, AvatarImage } from '@/components/avatar';
import { Card, CardContent } from '@/components/card-2';
import { Marquee } from '@/components/3d-testimonial';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { Spotlight } from '@/components/spotlight-new';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Jojo",
    username: "@jojo",
    body: "Awalnya aku memilih Riscasebagai mentor karena dia yang pertama kali mengenalkan aku ke peluang ini. Gaya mentoring-nya luar biasa – sabar, bisa menyesuaikan dengan tempo belajar aku yang kadang lambat. Sekarang bisa beli apartemen, mobil baru, bahkan umroh pakai uang sendiri.",
    img: "https://images.unsplash.com/photo-1494790108755-2616b612b1dc?w=150&h=150&fit=crop&crop=face",
    country: "🇮🇩 Indonesia",
  },
  {
    name: "Devina Hartono",
    username: "@devina",
    body: "Sebelum bergabung dengan Risca, saya adalah orang yang tidak punya ambisi besar dan selalu menganggap diri introvert. Bersyukur sekali bisa join di Risca, sehingga saya tahu kemampuan-kemampuan yang sebelumnya tidak pernah terpikirkan. Sekarang punya mimpi dan tujuan hidup yang jelas.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    country: "🇮🇩 Indonesia",
  },
  {
    name: "Sharon Gunawan",
    username: "@sharon",
    body: "Riscaorangnya sangat berpengetahuan luas dan tidak pelit berbagi ilmu. Melihat Riscasebagai pemimpin, saya bisa lihat bagaimana dia selalu merawat timnya dan memberi mereka rasa tanggung jawab. Di Risca, saya belajar membangun relasi yang bermakna dengan orang lain.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    country: "🇮🇩 Indonesia",
  },
  {
    name: "Jessica Suwarsono", 
    username: "@jessica",
    body: "Sebagai mantan karyawan korporat, saya benar-benar merasakan perubahan hidup sejak bergabung dengan Risca. Penghasilan yang saya dapatkan selama 4 tahun menjalankan bisnis Risca sudah mencapai dua kali lipat dari gaji terakhir saya di perusahaan.",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    country: "🇮🇩 Indonesia",
  },
  {
    name: "Shanelle",
    username: "@shanelle", 
    body: "Bermain keras, bekerja LEBIH KERAS. Yang paling terasa adalah lingkungannya yang penuh dengan high-achiever. Jadi ada trigger untuk keluar dari zona nyaman, bermimpi besar, dan mencapai lebih banyak lagi. Bonus mentoring dari orang-orang hebat.",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop&crop=face",
    country: "🇮🇩 Indonesia",
  },
  {
    name: "Trisna",
    username: "@trisna",
    body: "Riscaadalah gudang ilmu! Gesit bersama tim, mindset yang terbuka. Perubahan sejak bergabung dengan Risca BANYAK SEKALI! Tapi yang paling saya sadari adalah MIMPI. Saya jadi berani untuk bermimpi lagi. Ternyata mimpi bisa direalisasikan berkat Risca.",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    country: "🇮🇩 Indonesia",
  },
  {
    name: "Joceline",
    username: "@joceline",
    body: "Riscasebagai salah satu partner senior selalu memberikan wawasan tentang menjalankan bisnis. Sangat bersyukur bisa bergabung di bisnis Risca. Selain mendapat teman-teman positif, percepatan income di bisnis ini benar-benar nyata dan terasa.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    country: "🇮🇩 Indonesia",
  },
  {
    name: "Sarchie",
    username: "@sarchie",
    body: "Etos kerja Riscabenar-benar luar biasa. Dia tidak pernah setengah-setengah dalam melakukan sesuatu. Ketika dia serius terhadap sesuatu, hasilnya selalu memuaskan - penuh integritas dan kualitas tinggi.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    country: "🇮🇩 Indonesia",
  },
  {
    name: "Sheila Tang",
    username: "@sheila",
    body: "Akselerasinya sangat cepat, mulai dari menyekolahkan anak ke sekolah internasional hingga membeli aset properti. Semuanya hasil dari kerja keras dan membantu orang lain. Sejak tahun ketiga, tim semakin besar dan berkembang pesat.",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    country: "🇮🇩 Indonesia",
  },
  {
    name: "Rafi Ahmad",
    username: "@rafi",
    body: "Gue dulu karyawan 9-5 yang stuck banget. Income cuma 5 juta sebulan, hidup gitu-gitu aja. Setelah ikut sistem ini, dalam 4 bulan pertama udah bisa 12 juta per bulan. Sekarang bisa traveling sambil kerja, freedom banget!",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    country: "🇮🇩 Indonesia",
  },
  {
    name: "Anya Putri",
    username: "@anyaputri",
    body: "Dulu skeptis banget sama bisnis online. Mikir pasti scam atau MLM. Ternyata salah besar! Ini beneran sistem yang proven. Dalam 6 bulan udah bisa bayar cicilan motor sendiri dan nabung buat wedding. Game changer banget!",
    img: "https://images.unsplash.com/photo-1494790108755-2616b612b1dc?w=150&h=150&fit=crop&crop=face",
    country: "🇮🇩 Indonesia",
  },
  {
    name: "Kevin Pratama",
    username: "@kevinp",
    body: "Fresh graduate yang bingung mau ngapain. Ngelamar kerja susah, kalau dapat gaji kecil. Ikut program ini jadi turning point hidup gue. Sekarang penghasilan udah 15 juta per bulan di umur 22 tahun!",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    country: "🇮🇩 Indonesia",
  },
  {
    name: "Sarah Maharani",
    username: "@sarahmhrn",
    body: "Ibu rumah tangga yang pengen bantu ekonomi keluarga tapi gak bisa ninggalin anak. Sistem ini perfect banget buat work from home. Sekarang bisa contribute 8-10 juta per bulan sambil ngurus keluarga. Suami juga support banget!",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    country: "🇮🇩 Indonesia",
  },
  {
    name: "Dimas Wijaya",
    username: "@dimasw",
    body: "Mahasiswa semester akhir yang butuh uang saku lebih. Awalnya cuma iseng ikut, eh ternyata serius banget hasilnya. Sekarang bisa bayar kuliah sendiri bahkan bantu ortu. Temen-temen pada iri liat lifestyle gue berubah drastis.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    country: "🇮🇩 Indonesia",
  },
  {
    name: "Luna Sari",
    username: "@lunasari",
    body: "Pernah gagal di bisnis lain sampai hutang 20 juta. Desperate banget waktu itu. Sistem ini benar-benar jadi penyelamat. Dalam 8 bulan udah bisa lunasin hutang dan sekarang profit bersih 18 juta per bulan. Hidup jadi tenang lagi!",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    country: "🇮🇩 Indonesia",
  },
  {
    name: "Budi Santoso",
    username: "@budisant",
    body: "Umur 35 tapi masih jadi karyawan biasa. Merasa terlambat buat mulai bisnis. Ternyata gak ada kata terlambat! Sistemnya mudah diikuti even buat yang gaptek kayak gue. Sekarang side income udah 12 juta, mau resign tahun depan!",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    country: "🇮🇩 Indonesia",
  },
  {
    name: "Citra Dewi",
    username: "@citradewi",
    body: "Introvert parah yang susah banget networking. Sistem ini ngajarin gue cara approach orang dengan natural tanpa keliatan pushy. Confidence gue naik drastis, income juga. Dalam 5 bulan udah 14 juta per bulan. Mind blown!",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    country: "🇮🇩 Indonesia",
  },
  {
    name: "Fajar Nugroho",
    username: "@fajarn",
    body: "Karyawan pabrik yang capek fisik mental tiap hari. Gaji UMR tapi tenaga terkuras habis. Ikut program ini jadi harapan baru. Sekarang udah bisa resign dan full time di bisnis ini. Income 20 juta lebih per bulan, kerja santai dari rumah!",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    country: "🇮🇩 Indonesia",
  },
];

function TestimonialCard({ img, name, username, body, country }: (typeof testimonials)[number]) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(cardRef.current, 
        { 
          opacity: 0, 
          y: 50,
          scale: 0.9,
          rotateX: 10
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      const handleMouseEnter = () => {
        gsap.to(cardRef.current, {
          scale: 1.05,
          rotateY: 5,
          z: 50,
          duration: 0.3,
          ease: "power2.out"
        });
      };

      const handleMouseLeave = () => {
        gsap.to(cardRef.current, {
          scale: 1,
          rotateY: 0,
          z: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      };

      cardRef.current.addEventListener('mouseenter', handleMouseEnter);
      cardRef.current.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        if (cardRef.current) {
          cardRef.current.removeEventListener('mouseenter', handleMouseEnter);
          cardRef.current.removeEventListener('mouseleave', handleMouseLeave);
        }
      };
    }
  }, []);

  return (
    <Card ref={cardRef} className="w-50 testimonial-card transform-gpu">
      <CardContent>
        <div className="flex items-center gap-2.5">
          <Avatar className="size-9">
            <AvatarImage src={img} alt={name} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium text-foreground flex items-center gap-1">
              {name} <span className="text-xs">{country}</span>
            </figcaption>
            <p className="text-xs font-medium text-muted-foreground">{username}</p>
          </div>
        </div>
        <blockquote className="mt-3 text-sm text-secondary-foreground">{body}</blockquote>
      </CardContent>
    </Card>
  );
}

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%",
        end: "bottom 40%",
        toggleActions: "play none none reverse"
      }
    });

    tl.fromTo(titleRef.current, 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    )
    .fromTo(subtitleRef.current, 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, 
      "-=0.4"
    )
    .fromTo(containerRef.current, 
      { opacity: 0, scale: 0.95 }, 
      { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }, 
      "-=0.3"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative py-16 md:py-32 bg-gradient-to-br from-red-950 via-black to-red-900 overflow-hidden">
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
      
      {/* Red grid pattern background - matching digital-seranity.tsx */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <pattern id="testimonialsGridRed" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(220, 38, 38, 0.1)" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#testimonialsGridRed)" />
      </svg>
      
      <div className="text-center mb-12 relative z-10">
        <h2 ref={titleRef} className="text-xs sm:text-sm font-mono font-light text-slate-300 uppercase tracking-[0.2em] opacity-80 mb-4">
          Mereka Dulu Seperti Lo
        </h2>
        <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-30 mx-auto mb-6"></div>
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
          SEKARANG BEDA BANGET
        </motion.h1>
        <p ref={subtitleRef} className="text-sm lg:text-base font-light leading-relaxed text-slate-300 max-w-3xl mx-auto">
          Dari yang skeptis sampe akhirnya ngaku "gue salah banget dulu ragu". Ini cerita real dari member yang dulu mikir persis kayak lo sekarang.
        </p>
      </div>
      
      <div className="flex items-center justify-center relative z-10">
        <div ref={containerRef} className="border border-red-500/20 rounded-lg relative flex h-[600px] w-full max-w-[1200px] flex-row items-center justify-center overflow-hidden gap-1.5 [perspective:300px] shadow-2xl bg-black/20 backdrop-blur-sm">
          <div
            className="flex flex-row items-center gap-4"
            style={{
              transform:
                'translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)',
            }}
          >
            {/* Vertical Marquee (downwards) */}
            <Marquee vertical pauseOnHover repeat={3} className="[--duration:40s]">
              {testimonials.map((review) => (
                <TestimonialCard key={review.username} {...review} />
              ))}
            </Marquee>
            {/* Vertical Marquee (upwards) */}
            <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:40s]">
              {testimonials.map((review) => (
                <TestimonialCard key={review.username} {...review} />
              ))}
            </Marquee>
            {/* Vertical Marquee (downwards) */}
            <Marquee vertical pauseOnHover repeat={3} className="[--duration:40s]">
              {testimonials.map((review) => (
                <TestimonialCard key={review.username} {...review} />
              ))}
            </Marquee>
            {/* Vertical Marquee (upwards) */}
            <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:40s]">
              {testimonials.map((review) => (
                <TestimonialCard key={review.username} {...review} />
              ))}
            </Marquee>
            {/* Vertical Marquee (downwards) - Column 5 */}
            <Marquee vertical pauseOnHover repeat={3} className="[--duration:40s]">
              {testimonials.map((review) => (
                <TestimonialCard key={review.username} {...review} />
              ))}
            </Marquee>
            {/* Vertical Marquee (upwards) - Column 6 */}
            <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:40s]">
              {testimonials.map((review) => (
                <TestimonialCard key={review.username} {...review} />
              ))}
            </Marquee>
          </div>
          
          {/* Gradient overlays for vertical marquee */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-red-950"></div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-red-950"></div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-red-950"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-red-950"></div>
        </div>
      </div>
    </div>
  );
}