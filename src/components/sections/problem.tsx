"use client";

import { useState } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { BorderBeam } from "@/components/magicui/border-beam";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Rani",
    role: "Entrepreneur Muda",
    videoUrl: "https://www.youtube.com/embed/JlWA3kvJq9o?si=721YUmg07OppdYY5",
  },
  {
    name: "Budi",
    role: "Digital Marketer",
    videoUrl: "https://www.youtube.com/embed/JlWA3kvJq9o?si=721YUmg07OppdYY5",
  },
  {
    name: "Anita",
    role: "Content Creator",
    videoUrl: "https://www.youtube.com/embed/JlWA3kvJq9o?si=721YUmg07OppdYY5",
  },
  {
    name: "Dian",
    role: "Freelance Designer",
    videoUrl: "https://www.youtube.com/embed/JlWA3kvJq9o?si=721YUmg07OppdYY5",
  },
  {
    name: "Eko",
    role: "Tech Startup Founder",
    videoUrl: "https://www.youtube.com/embed/JlWA3kvJq9o?si=721YUmg07OppdYY5",
  },
];

function TestimonialCard({ name, role, videoUrl }: { name: string; role: string; videoUrl: string }) {
  return (
    <div className="relative h-full overflow-hidden rounded-lg bg-background">
      <BorderBeam colorFrom="#f0f0f0" colorTo="#e0e0e0" />
      <div className="flex flex-col h-full w-full">
        <div className="aspect-video w-full flex-grow">
          <iframe
            src={videoUrl}
            title={`${name}'s testimonial`}
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
        <div className="p-2 bg-background/80 absolute bottom-0 left-0 right-0">
          <h3 className="text-sm font-semibold">{name}</h3>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative overflow-hidden w-full">
      {/* Enhanced radial gradient background */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-600/30 via-purple-600/20 to-red-600/30" />
      
      {/* Additional circular gradients for more pop */}
      <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-gradient-radial from-blue-500/40 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 bg-gradient-radial from-red-500/40 to-transparent rounded-full blur-3xl" />
      
      {/* Softer side gradients with masking and subtle trimming at top/bottom */}
      <div className="absolute left-0 top-0 bottom-0 w-64 bg-gradient-to-r from-blue-500/50 to-transparent [mask-image:linear-gradient(to_right,black,transparent)] [mask-image:radial-gradient(ellipse_at_left,black_10%,transparent_70%)]" />
      <div className="absolute right-0 top-0 bottom-0 w-64 bg-gradient-to-l from-red-500/50 to-transparent [mask-image:linear-gradient(to_left,black,transparent)] [mask-image:radial-gradient(ellipse_at_right,black_10%,transparent_70%)]" />

      <div className="relative z-10 py-1 md:py-20">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 md:mb-3">Ini Kata Mereka</h2>
          <div className="w-20 h-0.5 mx-auto bg-gradient-to-r from-blue-400 to-blue-600 mb-3 md:mb-4"></div>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4 md:px-0">
            Jangan percaya kita, lihat sendiri aja testimoni mereka yang bisa banyak membantu orang dari hasil cuan group
          </p>
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[0, 1, 2].map((offset) => {
              const index = (currentIndex + offset) % testimonials.length;
              return (
                <BlurFade key={index} delay={0.2 * offset} inView>
                  <div className="aspect-[16/10]">
                    <TestimonialCard {...testimonials[index]} />
                  </div>
                </BlurFade>
              );
            })}
          </div>
          <button 
            onClick={prevSlide} 
            className="absolute top-1/2 -left-4 md:-left-16 transform -translate-y-1/2 bg-background/80 p-2 md:p-3 rounded-full shadow-lg"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          <button 
            onClick={nextSlide} 
            className="absolute top-1/2 -right-4 md:-right-16 transform -translate-y-1/2 bg-background/80 p-2 md:p-3 rounded-full shadow-lg"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>
      </div>
    </div>
  );
}
