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
import Image from "next/image";
import { BlueGradientSeparator } from "@/components/blue-gradient-separator";
import { GradientBlur } from "@/components/ui/gradient-blur";

const bonuses = [
  {
    title: "Exclusive Podcast",
    description: "Dengerin cerita dari entrepreneurs sukses langsung dari mereka!",
    image: "/dashboard.png",
  },
  {
    title: "Free Exclusive Trip",
    description: "Enjoy perjalanan gratis bersama komunitas asik.",
    image: "/dashboard.png",
  },
  {
    title: "Personal Development Classes",
    description: "Upgrade skill bisnismu dengan mentorship terbaik.",
    image: "/dashboard.png",
  },
  {
    title: "Broad Network",
    description: "Bertemu dengan para pebisnis muda di seluruh Indonesia.",
    image: "/dashboard.png",
  },
  {
    title: "Private Events",
    description: "Nikmati event-event seru yang eksklusif hanya untuk members.",
    image: "/dashboard.png",
  },
];

export default function BonusCarousel() {
  return (
    <>
      <BlueGradientSeparator />
      <Section className="py-12 relative overflow-hidden">
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
        
        <div className="relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-4">Bonus Yang Akan Kamu Dapatkan</h2>
            <hr className="w-24 mx-auto border-t-2 border-primary mb-4" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Setelah bergabung dengan Alife, nikmati berbagai bonus eksklusif yang akan mempercepat pertumbuhan pribadi dan bisnis Anda.
            </p>
          </div>
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {bonuses.map((bonus, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/2 pt-8 pb-4">
                  <ShineBorder 
                    borderRadius={16} 
                    borderWidth={1} 
                    color={["#f0f0f0", "#e0e0e0"]} 
                    className="h-full w-full"
                  >
                    <div className="p-6 text-center h-[320px] flex flex-col justify-between">
                      <div className="flex flex-col items-center">
                        <div className="mb-4 w-full h-40 relative">
                          <Image
                            src={bonus.image}
                            alt={bonus.title}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                          />
                        </div>
                        <h4 className="text-lg font-semibold mb-2">{bonus.title}</h4>
                        <p className="text-sm text-muted-foreground">{bonus.description}</p>
                      </div>
                    </div>
                  </ShineBorder>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 space-x-4">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </Section>
    </>
  );
}
