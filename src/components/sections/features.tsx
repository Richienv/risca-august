"use client";

import Section from "@/components/section";
import { BlueGradientSeparator } from "@/components/blue-gradient-separator";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const data = [
  {
    id: 1,
    title: "Kontes Logam Mulia, iPad, dan Uang Tunai Setiap Minggu",
    content: "Setiap closing kamu akan mendapatkan kesempatan mengikuti undian-undian berhadiah tiap minggu!",
    image: "/goldd.png",
  },
  {
    id: 2,
    title: "Eksklusif Private Events & VIP Dinner with Champions",
    content: "Kamu akan mendapatkan special invitation untuk menghadiri Special Awardee Night, event apresiasi achievement kamu yang juga membantu memperluas network kamu!",
    image: "/event.png",
  },
  {
    id: 3,
    title: "Closing With Mentors",
    content: "Aku bakal ikut kamu untuk ketemu calon klien potensial supaya kamu bisa closing lebih cepat! So, kamu gak perlu takut bekerja sendirian.",
    image: "/ipad.jpg",
  },
  {
    id: 4,
    title: "Kelas Training dan Kelas Pengembangan Diri dari Speaker Ternama",
    content: "Komunitas kita always invite the top speakers ternama to share pengalaman dan tips suksesnya, beda tim beda hasil.",
    image: "/kelas.png",
  },
];

function FeatureCard({ item, index }: { item: typeof data[0], index: number }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const z = useTransform(scrollYProgress, [0, 0.5], [-100, 0]);

  return (
    <motion.div 
      ref={cardRef}
      className="relative"
      style={{ 
        perspective: 1000,
        opacity,
        scale,
        rotateX,
        z,
        transformStyle: "preserve-3d",
      }}
      initial={{ 
        opacity: 0.3,
        rotateX: 15,
        z: -100,
        scale: 0.9
      }}
      animate={{ 
        opacity: 1,
        rotateX: 0,
        z: 0,
        scale: 1
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        type: "spring",
        stiffness: 100
      }}
    >
      <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
        <div className="w-full lg:w-2/5">
          <div className="relative">
            {/* Keep the colorful glow effects */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-800/30 via-purple-800/30 to-red-800/30 rounded-xl blur-2xl animate-pulse"></div>
            <div className="absolute -inset-4 bg-gradient-to-br from-purple-900/20 to-blue-800/20 rounded-xl blur-3xl animate-pulse delay-75"></div>
            <div className="absolute -inset-4 bg-gradient-to-r from-red-800/20 via-purple-900/20 to-blue-900/20 rounded-xl blur-2xl animate-pulse delay-150"></div>
            
            <div className="relative aspect-[4/3] w-full p-[2px] rounded-lg bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
              <div className="relative h-full w-full overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-3/5 text-left px-4 lg:px-8 space-y-4">
          {/* Updated to silver gradient text */}
          <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold bg-gradient-to-r from-gray-200 via-gray-400 to-gray-300 bg-clip-text text-transparent">
            {item.title}
          </h3>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
            {item.content}
          </p>
        </div>
      </div>
      
      {index !== data.length - 1 && (
        <div className="absolute -bottom-8 lg:-bottom-12 left-0 right-0 w-full">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-500/20 to-transparent 
            [mask-image:linear-gradient(to_right,transparent,black_25%,black_75%,transparent)] 
            [mask-size:100%_8px] [mask-repeat:repeat-x]"></div>
        </div>
      )}
    </motion.div>
  );
}

export default function FeaturesSection() {
  return (
    <div className="relative overflow-hidden w-full">
      <BlueGradientSeparator />
      
      <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 via-purple-900/10 to-red-900/20" />
      
      <Section className="py-1 relative">
        <div className="relative z-10">
          <div className="text-center mb-16 lg:mb-24 px-4">
            {/* Updated main title to match solution.tsx size */}
            <motion.h2 
              className="text-xl lg:text-2xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Bonus Value yang akan kamu dapatkan saat kita kerja bareng
            </motion.h2>
            <div className="w-24 lg:w-32 h-0.5 mx-auto bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 mb-6"></div>
          </div>
          <div className="space-y-16 lg:space-y-24">
            {data.map((item, index) => (
              <FeatureCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </Section>
      <BlueGradientSeparator />
    </div>
  );
}
