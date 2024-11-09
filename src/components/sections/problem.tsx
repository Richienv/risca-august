"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { BorderBeam } from "@/components/magicui/border-beam";
import { GradientBlur } from "@/components/ui/gradient-blur";
import GridPattern from "@/components/ui/grid-pattern";

const testimonial = {
  name: "Founder Alife",
  role: "",
  videoUrl: "https://youtu.be/nF1lLyIv0HM",
};

function TestimonialCard({ name, role, videoUrl }: { name: string; role: string; videoUrl: string }) {
  return (
    <div className="relative w-full">
      {/* Card container with almost black metallic gradient background */}
      <div className="relative w-full overflow-hidden rounded-xl border border-white/5 shadow-2xl"
        style={{
          background: `
            linear-gradient(135deg, 
              rgba(20, 20, 20, 0.98) 0%,
              rgba(12, 12, 12, 0.99) 50%,
              rgba(8, 8, 8, 1) 100%
            )
          `,
          boxShadow: `
            0 0 0 1px rgba(255, 255, 255, 0.03),
            0 4px 6px -1px rgba(0, 0, 0, 0.3),
            0 2px 4px -1px rgba(0, 0, 0, 0.2),
            inset 0 1px 1px rgba(255, 255, 255, 0.03)
          `
        }}
      >
        <BorderBeam colorFrom="#333333" colorTo="#111111" />
        
        {/* Very subtle metallic shine effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-transparent opacity-50 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/3 via-transparent to-black/40 pointer-events-none"></div>
        
        <div className="flex flex-col w-full backdrop-blur-sm">
          {/* Video container */}
          <div className="relative p-4">
            {/* Video iframe */}
            <div className="aspect-video w-full relative z-10">
              <iframe
                src={videoUrl.replace('youtu.be/', 'youtube.com/embed/')}
                title={`${name}'s testimonial`}
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-xl shadow-2xl ring-1 ring-white/10"
              ></iframe>
            </div>
          </div>

          {/* Text content and name below video */}
          <div className="p-6 text-center">
          <p className="text-sm md:text-base lg:text-lg text-white/80 max-w-2xl mx-auto">
              Jangan cuma jadi penonton, kamu juga bisa sukses bareng aku dan komunitas Alife yang solid dan fun!
            </p>
            <br />
            <h3 className="text-lg font-semibold mb-1 text-white/90">{name}</h3>
            <p className="text-sm text-white/60 mb-6">{role}</p>
            
            {/* Description */}
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialSection() {
  return (
    <div className="relative overflow-hidden w-full">
      {/* Grid Pattern Background */}
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        strokeDasharray="8 4"
        className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-200 dark:fill-neutral-800 dark:stroke-neutral-700 [mask-image:radial-gradient(white,transparent_85%)]"
      />

      {/* Gradient Blurs */}
      <GradientBlur
        className="bottom-[10%] right-[10%]" 
        size="large" 
        position="right" 
        intensity="high" 
      />

      <GradientBlur
        className="top-[30%] left-[10%]" 
        size="large" 
        position="right" 
        intensity="high" 
      />

      {/* Radial gradient blurs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-2/3 h-2/3 bg-gradient-radial from-blue-500/20 to-transparent opacity-60 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gradient-radial from-purple-500/20 to-transparent opacity-60 blur-[100px] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-gradient-radial from-red-500/20 to-transparent opacity-60 blur-[100px] rounded-full"></div>
      </div>
      
      <div className="relative z-10 py-16 md:py-24">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 md:mb-3">Kata Kata Cici Cici Miliarder Viral!</h2>
          <div className="w-20 h-0.5 mx-auto bg-gradient-to-r from-blue-400 to-blue-600 mb-3 md:mb-4"></div>
        </div>
        
        {/* Video container with increased max width */}
        <div className="max-w-5xl mx-auto px-4">
          <BlurFade delay={0.2} inView>
            <TestimonialCard {...testimonial} />
          </BlurFade>
        </div>
      </div>
    </div>
  );
}
