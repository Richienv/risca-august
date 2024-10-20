"use client";

import Section from "@/components/section";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Safari from "@/components/safari";
import ShineBorder from "@/components/ui/shine-border";
import { GradientBlur } from "@/components/ui/gradient-blur";

const features = [
  {
    number: "01",
    title: "Lebih dari Sekedar Bisnis Asuransi",
    description: "Alife by Vision bukan hanya tentang asuransi, tapi juga tentang membangun komunitas yang empowering dan fun!",
    imageUrl: "/dashboard.png",
  },
  {
    number: "02",
    title: "Pengembangan Diri yang Holistik",
    description: "Dari event seru sampai private class, semuanya ngebantu kamu lebih berkembang dalam bisnis dan personal life!",
    imageUrl: "/dashboard.png",
  },
  {
    number: "03",
    title: "Komunitas yang Supportif",
    description: "Bergabunglah dengan youth-powered community yang fokus pada pengembangan diri dan kesuksesan bisnis!",
    imageUrl: "/dashboard.png",
  },
  {
    number: "04",
    title: "Peluang Networking yang Luas",
    description: "Bertemu dengan para pebisnis muda di seluruh Indonesia dan perluas jaringan profesionalmu.",
    imageUrl: "/dashboard.png",
  },
];

function FeatureCard({ number, title, description, imageUrl, reverse, isLast }: { number: string; title: string; description: string; imageUrl: string; reverse: boolean; isLast: boolean }) {
  return (
    <div className={cn("flex flex-col lg:flex-row items-center w-full mb-6 lg:mb-12", reverse ? "lg:flex-row-reverse" : "")}>
      <div className="w-full lg:w-[38%] mb-4 lg:mb-0">
        <h3 className="text-lg lg:text-xl font-semibold mb-1 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="w-full lg:w-[24%] flex flex-row lg:flex-col items-center justify-center mb-4 lg:mb-0 lg:px-2">
        <div className="text-2xl lg:text-3xl font-bold mr-2 lg:mr-0 lg:mb-2">{number}</div>
        <div className="h-px w-full lg:h-full lg:w-px bg-gradient-to-r lg:bg-gradient-to-b from-white to-gray-300 dark:from-gray-700 dark:to-gray-900"></div>
        {!isLast && <div className="hidden lg:block h-12 w-px bg-gradient-to-b from-white to-gray-300 dark:from-gray-700 dark:to-gray-900"></div>}
      </div>
      <div className="w-full lg:w-[38%]">
        <ShineBorder borderRadius={8} borderWidth={1} color={["#3b82f6", "#10b981"]}>
          <Safari
            src={imageUrl}
            url="https://alife.vision"
            className="w-full h-32 lg:h-40 object-cover rounded-lg"
          />
        </ShineBorder>
      </div>
    </div>
  );
}

export default function SolutionSection() {
  return (
    <Section className="py-6 lg:py-10 relative overflow-hidden">
      <GradientBlur className="top-0" size="large" position="left" intensity="high" />
      <GradientBlur className="bottom-0" size="medium" position="right" intensity="medium" />
      <GradientBlur className="top-1/2 -translate-y-1/2" size="small" position="center" intensity="low" />
      
      <div className="relative z-10">
        <div className="text-center mb-6">
          <h2 className="text-xl lg:text-2xl font-semibold mb-2">Kenapa Pilih Alife</h2>
          <hr className="w-20 mx-auto border-t-2 border-primary" />
        </div>
        <div className="lg:overflow-x-visible px-4 sm:px-8 md:px-16 lg:px-24">
          <div className="w-full">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
              >
                <FeatureCard {...feature} reverse={index % 2 !== 0} isLast={index === features.length - 1} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
