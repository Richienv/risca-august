"use client";

import Section from "@/components/section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { BlueGradientSeparator } from "@/components/blue-gradient-separator";
import { GradientBlur } from "@/components/ui/gradient-blur";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const bonuses = [
  {
    title: "Give Reward to Your Small Wins",
    description: "We will give you a reward for every small win you achieve.",
    image: "/reward.png",
  },
  {
    title: "Free Exclusive Trip",
    description: "Achieve your goal with us and get a free trip to Europe, Japan, Turkey and more!",
    image: "/tripss.png",
  },
  {
    title: "Exclusive Mentorship",
    description: "Upgrade skill bisnismu dengan mentorship terbaik.",
    image: "/mentor.png",
  },
  {
    title: "Broad Network",
    description: "Bertemu dengan para pebisnis muda di seluruh Indonesia.",
    image: "/bright.png",
  },
  {
    title: "Supportive Community",
    description: "Dapatkan dukungan dari komunitas yang mendukung to unlock your potential.",
    image: "/komunitas.png",
  },
];

export default function BonusCarousel() {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <>
      <BlueGradientSeparator />
      <Section className="py-4 md:py-8 relative overflow-visible">
        <GradientBlur 
          className="top-[10%] left-[10%]" 
          size="medium" 
          position="left" 
          intensity="high" 
        />
        <GradientBlur 
          className="bottom-[10%] right-[10%]" 
          size="large" 
          position="right" 
          intensity="high" 
        />
        
        <div className="relative z-10 w-full overflow-visible">
          <div className="text-center mb-4 md:mb-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2">
             Join Komunitas Yang Pengen Sukses Bareng! Bukan Sukses Sendiri!
            </h2>
            <hr className="w-20 md:w-24 mx-auto border-t-2 border-primary mb-2" />
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-sm sm:max-w-lg md:max-w-3xl mx-auto">
              Bisnis is not a solo journey, it is a journey to success together!
            </p>
          </div>
          <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] overflow-visible">
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}

              className="w-full overflow-visible"
            >
              <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                <CarouselPrevious className="relative translate-x-0 bg-background/80 hover:bg-background/90" />
              </div>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
                <CarouselNext className="relative translate-x-0 bg-background/80 hover:bg-background/90" />
              </div>
              
              <CarouselContent className="overflow-visible">
                {bonuses.map((bonus, index) => (
                  <CarouselItem 
                    key={index} 
                    className="basis-[50%] sm:basis-[40%] md:basis-[40%] lg:basis-[30%] xl:basis-[30%] 2xl:basis-[20%] transition-opacity duration-300 data-[active=false]:opacity-50 px-1"
                  >
                    <div className="relative aspect-[9/16] w-full overflow-hidden rounded-xl group">
                      <Image
                        src={bonus.image}
                        alt={bonus.title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-500 group-hover:scale-105"
                      />
                      
                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6 text-white">
                        <h4 className="text-lg md:text-2xl font-bold mb-2 leading-tight">
                          {bonus.title}
                        </h4>
                        <p className="text-xs md:text-base text-white/90 leading-relaxed">
                          {bonus.description}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </Section>
    </>
  );
}
