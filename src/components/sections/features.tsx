"use client";

import Section from "@/components/section";
import { motion } from "framer-motion";
import { useRef } from "react";

const data = [
  {
    id: 1,
    testimonial: "Gue baru 2 bulan join udah dapet iPad dari weekly contest.",
    story: "Yang gila lagi, setiap closing ada chance dapet logam mulia. Ini yang bikin gue makin semangat, gak cuma duit komisi doang!",
    memberName: "Andi Pratama",
    memberRole: "Top Performer Bulan Ini",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1607863680198-23d4b2565df0?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=300&fit=crop"
    ]
  },
  {
    id: 2,
    testimonial: "VIP dinner kemarin gila sih, ketemu sama C-level executives dari berbagai industry.",
    story: "Networking-nya next level banget, beda sama event biasa. Feeling like a real successful person!",
    memberName: "Sarah Wulandari",
    memberRole: "Special Awardee 2024",
    images: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=500&h=300&fit=crop"
    ]
  },
  {
    id: 3,
    testimonial: "Risca ikut gue meeting sama klien besar kemarin.",
    story: "Dari yang awalnya ragu, klien langsung tertarik. Ini yang gue suka, mentor benar-benar turun tangan bantu kita sukses.",
    memberName: "Budi Santoso",
    memberRole: "Rising Star Member",
    images: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500&h=300&fit=crop"
    ]
  },
  {
    id: 4,
    testimonial: "Training sama speakers yang udah berhasil itu beda banget.",
    story: "Mereka share real experience, bukan teori textbook. Sekarang mindset gue udah berubah total soal bisnis.",
    memberName: "Lisa Permata",
    memberRole: "Fast Track Graduate",
    images: [
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=300&fit=crop"
    ]
  },
  {
    id: 5,
    testimonial: "Konsultasi 1-on-1 setiap minggu itu game changer.",
    story: "Martha personally ngasih feedback ke strategy gue, bahkan sampai review deal yang lagi gue handle. Personal banget!",
    memberName: "Ricky Hakim",
    memberRole: "Platinum Member",
    images: [
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=500&h=300&fit=crop"
    ]
  },
  {
    id: 6,
    testimonial: "Database klien premium dan lead generation tools yang dikasih gratis ini nilai-nya jutaan.",
    story: "Prospecting jadi jauh lebih efektif, conversion rate gue naik 3x lipat!",
    memberName: "Diana Kusuma",
    memberRole: "Tech Savvy Achiever",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&h=300&fit=crop"
    ]
  },
  {
    id: 7,
    testimonial: "Jadi brand ambassador untuk luxury brand itu impian gue dari dulu.",
    story: "Networking dengan brand-brand premium buka peluang bisnis yang gak pernah gue bayangin sebelumnya.",
    memberName: "Kevin Tanoto",
    memberRole: "Brand Ambassador",
    images: [
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=500&h=300&fit=crop"
    ]
  },
  {
    id: 8,
    testimonial: "Bonus bulanan, quarterly incentive, annual awards... sistemnya berlapis banget.",
    story: "Bulan lalu aja total bonus gue hampir sama dengan gaji pokok. Crazy but true!",
    memberName: "Maya Indira",
    memberRole: "Bonus Queen 2024",
    images: [
      "https://images.unsplash.com/photo-1607863680198-23d4b2565df0?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop"
    ]
  }
];

function FeatureCard({ item, index }: { item: typeof data[0], index: number }) {
  return (
    <motion.div 
      className="relative group cursor-pointer"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
    >
      {/* Card with vertical layout */}
      <div className="relative w-full bg-gradient-to-br from-black/50 via-black/40 to-pink-900/10 backdrop-blur-sm rounded-lg lg:rounded-xl p-4 sm:p-5 transition-all duration-500 hover:border-pink-500/30 border border-white/10">
        
        {/* Image Carousel Section */}
        <div className="w-full h-24 sm:h-32 lg:h-48 relative overflow-hidden rounded-lg mb-3 sm:mb-4">
          <motion.div 
            className="flex h-full gap-1 sm:gap-2 lg:gap-3"
            animate={{
              x: [0, '-33.333%']
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop", 
                duration: 10,
                ease: "linear",
              },
            }}
          >
            {/* Render 3 images + 1 duplicate for seamless loop */}
            {item.images.concat(item.images[0]).map((imageSrc, imgIndex) => (
              <div key={imgIndex} className="flex-shrink-0 w-full h-full relative">
                <img 
                  src={imageSrc} 
                  alt={`Feature ${imgIndex + 1}`}
                  className="w-full h-full object-cover rounded-md lg:rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-md lg:rounded-lg"></div>
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* Testimonial Content */}
        <div className="space-y-2 sm:space-y-3">
          {/* Main Quote */}
          <div className="relative">
            <svg className="w-4 h-4 text-pink-400/30 mb-2" fill="currentColor" viewBox="0 0 32 32">
              <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14h-4c0-2.2 1.8-4 4-4V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-4c0-2.2 1.8-4 4-4V8z"/>
            </svg>
            <p className="text-sm sm:text-base lg:text-lg font-medium leading-relaxed text-white mb-3">
              "{item.testimonial}"
            </p>
          </div>
          
          {/* Story */}
          <div className="relative">
            <p className="text-xs sm:text-sm lg:text-base font-light leading-relaxed text-white/70">
              {item.story}
            </p>
          </div>
          
          {/* Member Attribution */}
          <div className="pt-2 border-t border-pink-500/20">
            <p className="text-sm font-medium text-white mb-1">
              {item.memberName}
            </p>
            <p className="text-xs text-pink-300/70 font-light">
              {item.memberRole}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturesSection() {
  return (
    <div className="relative w-full bg-black overflow-hidden">
      
      <Section className="py-8 md:py-32 relative">
        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-8 lg:mb-24 px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xs sm:text-sm font-mono font-light text-slate-300 uppercase tracking-[0.2em] opacity-80 mb-2 sm:mb-4">
                Kerja Keras = Reward Besar
              </h2>
              <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mb-3 sm:mb-6"></div>
              <motion.h1 
                className="text-center text-2xl sm:text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl whitespace-normal px-4 sm:px-6 md:px-8 lg:px-10 max-w-full mx-auto text-white relative mb-2 sm:mb-4"
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
                GAK CUMA DUIT DOANG
              </motion.h1>
              <p className="text-xs sm:text-sm lg:text-base font-light leading-relaxed text-slate-300 max-w-2xl sm:max-w-3xl mx-auto px-2 sm:px-0">
                Benefit gila yang gak bakal lo dapet di tempat lain. Ini yang bikin member kita beda dari yang lain.
              </p>
            </motion.div>
          </div>

          {/* Compact grid layout for better mobile experience */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {data.map((item, index) => (
              <div key={item.id}>
                <FeatureCard item={item} index={index} />
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
