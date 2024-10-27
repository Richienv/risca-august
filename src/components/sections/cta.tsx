import Section from "@/components/section";
import Link from "next/link";
import ShineBorder from "@/components/ui/shine-border";
import { GradientBlur } from "@/components/ui/gradient-blur";
import { RainbowButton } from "@/components/ui/rainbow-button";

export default function CtaSection() {
  return (
    <Section className="py-1">
       <GradientBlur
          className="bottom-[10%] right-[10%]" 
          size="large" 
          position="right" 
          intensity="high" 
        />
         <GradientBlur
          className="bottom-[10%] right-[10%]" 
          size="large" 
          position="left" 
          intensity="high" 
        />
      <ShineBorder 
        borderRadius={16} 
        borderWidth={2} 
        color={["#ef4444", "#3b82f6"]} 
        className="w-full max-w-4xl mx-auto"
      >
        <div className="bg-black rounded-xl py-11 px-6 text-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3 text-white">Jangan Biarkan Rasa Takut Mendikte Masa Depanmu!</h2>
          <blockquote className="text-sm md:text-base lg:text-lg italic text-silver-300 mb-4 shine">
            "The best time to plant a tree was 20 years ago. The second best time is now."
          </blockquote>
        </div>
      </ShineBorder>
      <div className="mt-8 text-center">
        <Link href="/contact">
          <RainbowButton className="text-sm md:text-base font-semibold px-6 py-3">
            Join Now
          </RainbowButton>
        </Link>
      </div>
    </Section>
  );
}
