"use client";

import BlurFade from "@/components/magicui/blur-fade";
import Section from "@/components/section";
import { BorderBeam } from "@/components/magicui/border-beam";
import Link from "next/link";
import { cn } from "@/lib/utils";
import ShinyButton from "@/components/ui/shiny-button";
import { GradientBlur } from "@/components/ui/gradient-blur";

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
];

function TestimonialCard({ name, role, videoUrl }: { name: string; role: string; videoUrl: string }) {
  return (
    <div className="relative h-full overflow-hidden rounded-lg bg-background">
      <BorderBeam colorFrom="#f0f0f0" colorTo="#e0e0e0" />
      <div className="flex flex-col h-full w-full">
        <div className="aspect-video w-full">
          <iframe
            src={videoUrl}
            title={`${name}'s testimonial`}
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-t-lg"
          ></iframe>
        </div>
        <div className="p-4">
          <h3 className="text-sm font-semibold">{name}</h3>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialSection() {
  return (
    <Section className="relative overflow-hidden py-20">
      {/* Adjusted Gradient Blurs */}
      <GradientBlur 
        className="top-[10%] left-[10%]" 
        size="small" 
        position="left" 
        intensity="medium" 
      />
      <GradientBlur 
        className="bottom-[10%] right-[10%]" 
        size="small" 
        position="right" 
        intensity="medium" 
      />

      {/* Enhanced sunrise-like radial gradients */}
      <div className="absolute inset-x-0 bottom-0 h-full overflow-hidden">
        <div className="absolute -bottom-1/4 left-1/4 w-1/2 h-full bg-gradient-radial from-orange-300 via-red-300 to-transparent opacity-60 blur-[100px] rounded-full"></div>
        <div className="absolute -bottom-1/4 right-1/4 w-1/2 h-full bg-gradient-radial from-yellow-200 via-orange-300 to-transparent opacity-60 blur-[100px] rounded-full"></div>
      </div>

      <div className="relative z-10">
        <div className="text-center mb-12 relative">
          <h2 className="text-3xl font-semibold mb-4">Ini Kata Mereka</h2>
          <hr className="w-24 mx-auto border-t-2 border-primary mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Jangan percaya kita, lihat sendiri aja testimoni mereka yang bisa banyak membantu orang dari hasil cuan group
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <BlurFade key={index} delay={0.2 + index * 0.2} inView>
              <div className="relative">
                <TestimonialCard {...testimonial} />
              </div>
            </BlurFade>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/join-group">
            <ShinyButton className="px-8 py-3 text-lg">
              Join Our Group
            </ShinyButton>
          </Link>
        </div>
      </div>
    </Section>
  );
}
