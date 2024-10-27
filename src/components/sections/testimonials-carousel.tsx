"use client";

import Section from "@/components/section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ShineBorder from "@/components/ui/shine-border";
import Safari from "@/components/safari";
import { BlueGradientSeparator } from "@/components/blue-gradient-separator";
import { GradientBlur } from "@/components/ui/gradient-blur";

const bonuses = [
  {
    title: "Exclusive Podcast",
    description: "Dengerin cerita dari entrepreneurs sukses langsung dari mereka!",
    image: "/perubahan1.png",
  },
  {
    title: "Free Exclusive Trip",
    description: "Enjoy perjalanan gratis bersama komunitas asik.",
    image: "/perubahan2.png",
  },
  {
    title: "Personal Development Classes",
    description: "Upgrade skill bisnismu dengan mentorship terbaik.",
    image: "/perubahan3.png",
  },
  {
    title: "Broad Network",
    description: "Bertemu dengan para pebisnis muda di seluruh Indonesia.",
    image: "/perubahan1.png",
  },
  {
    title: "Private Events",
    description: "Nikmati event-event seru yang eksklusif hanya untuk members.",
    image: "/perubahan2.png",
  },
];

export default function BonusCarousel() {
  return (
    <>
      <BlueGradientSeparator />
      <Section className="py-8 md:py-12 relative overflow-hidden">
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
        
        <div className="relative z-10">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 md:mb-4">Kerja Keras Kamu Akan Sangat di Apresiasi.</h2>
            <hr className="w-20 md:w-24 mx-auto border-t-2 border-primary mb-3 md:mb-4" />
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-xs sm:max-w-sm md:max-w-2xl mx-auto px-4 md:px-0">
              Your effort, your reward. Semakin giat kamu bekerja, semakin besar penghasilan yang bisa kamu capai.
            </p>
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-xs sm:max-w-sm md:max-w-3xl lg:max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-1 md:-ml-2">
              {bonuses.map((bonus, index) => (
                <CarouselItem key={index} className="pl-1 md:pl-2 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="flex flex-col">
                    <ShineBorder 
                      borderRadius={12} 
                      borderWidth={1} 
                      color={["#ffffff", "#e0e0e0"]}
                      className="mb-2"
                    >
                      <Safari
                        src={bonus.image}
                        url="https://alife.vision"
                        className="w-full h-48 lg:h-56 object-cover rounded-lg"
                      />
                    </ShineBorder>
                    <div>
                      <h4 className="text-base md:text-lg font-semibold mb-1">{bonus.title}</h4>
                      <p className="text-xs md:text-sm text-muted-foreground">{bonus.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4 md:mt-8 space-x-2 md:space-x-4">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </Section>
    </>
  );
}
