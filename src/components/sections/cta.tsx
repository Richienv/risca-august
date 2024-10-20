import { Icons } from "@/components/icons";
import Section from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import ShineBorder from "@/components/ui/shine-border";

export default function CtaSection() {
  return (
    <Section className="py-20">
      <ShineBorder 
        borderRadius={16} 
        borderWidth={2} 
        color={["#3b82f6", "#10b981"]} 
        className="w-full max-w-4xl mx-auto"
      >
        <div className="bg-gradient-to-br from-black to-blue-900 rounded-xl py-16 px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-4 text-white">Siap Untuk Memulai?</h2>
          <p className="text-xl text-white/90 mb-8">
            Bergabunglah dengan Alife dan mulai perjalanan menuju kesuksesan Anda!
          </p>
          <Link
            href="/join"
            className={cn(
              buttonVariants({ variant: "secondary", size: "lg" }),
              "w-full sm:w-auto bg-white text-blue-900 hover:bg-blue-100 hover:text-blue-950 flex items-center justify-center gap-2 text-lg font-semibold px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300"
            )}
          >
            <Icons.logo className="h-6 w-6" />
            Mulai Sekarang
          </Link>
        </div>
      </ShineBorder>
    </Section>
  );
}
