"use client";

import Marquee from "@/components/magicui/marquee";
import Section from "@/components/section";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";


export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "bg-primary/20 p-1 py-0.5 font-bold text-primary dark:bg-primary/20 dark:text-primary",
        className
      )}
    >
      {children}
    </span>
  );
};

export interface TestimonialCardProps {
  name: string;
  role: string;
  img?: string;
  description: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export const TestimonialCard = ({
  description,
  name,
  img,
  role,
  className,
  ...props
}: TestimonialCardProps) => (
  <div
    className={cn(
      "mb-4 flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4",
      "border border-neutral-200 bg-white",
      "dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className
    )}
    {...props}
  >
    <div className="select-none text-sm font-normal text-neutral-700 dark:text-neutral-400">
      {description}
      <div className="flex flex-row py-1">
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
      </div>
    </div>

    <div className="flex w-full select-none items-center justify-start gap-5">
      <Image
        width={40}
        height={40}
        src={img || ""}
        alt={name}
        className="h-10 w-10 rounded-full ring-1 ring-border ring-offset-4"
      />

      <div>
        <p className="font-medium text-neutral-500">{name}</p>
        <p className="text-xs font-normal text-neutral-400">{role}</p>
      </div>
    </div>
  </div>
);

const testimonials = [
  {
    name: "Rani Wijaya",
    role: "Entrepreneur Muda",
    img: "https://randomuser.me/api/portraits/women/12.jpg",
    description: (
      <p>
        Bergabung dengan Alife adalah keputusan terbaik untuk karir saya.
        <Highlight>
          Komunitas yang supportif dan peluang networking luar biasa!
        </Highlight>{" "}
        Saya belajar banyak dan bisnis saya berkembang pesat.
      </p>
    ),
  },
  {
    name: "Budi Santoso",
    role: "Digital Marketer",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    description: (
      <p>
        Alife bukan hanya tentang asuransi, tapi juga pengembangan diri.
        <Highlight>Event-event eksklusifnya sangat bermanfaat</Highlight> untuk
        meningkatkan skill dan memperluas jaringan bisnis saya.
      </p>
    ),
  },
  {
    name: "Siti Nurhaliza",
    role: "Financial Advisor",
    img: "https://randomuser.me/api/portraits/women/67.jpg",
    description: (
      <p>
        Mentorship di Alife luar biasa membantu.
        <Highlight>
          Saya mendapat bimbingan langsung dari para expert di industri
        </Highlight>{" "}
        yang membantu saya mengembangkan karir dengan cepat.
      </p>
    ),
  },
  {
    name: "Arief Pratama",
    role: "Tech Startup Founder",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    description: (
      <p>
        Alife memberikan platform yang sempurna untuk para entrepreneur muda.
        <Highlight>
          Kolaborasi dan peluang bisnis yang tercipta di sini sangat berharga
        </Highlight>{" "}
        bagi perkembangan startup saya.
      </p>
    ),
  },
  {
    name: "Dewi Lestari",
    role: "Content Creator",
    img: "https://randomuser.me/api/portraits/women/89.jpg",
    description: (
      <p>
        Sebagai content creator, networking adalah segalanya. Alife membuka
        pintu ke
        <Highlight>
          berbagai kolaborasi menarik dan proyek-proyek kreatif
        </Highlight>{" "}
        yang memperluas audiens saya.
      </p>
    ),
  },
];

export default function Testimonials() {
  return (
    <Section className="py-1 md:py-1 max-w-8xl">
      <div className="text-center mb-8 md:mb-10">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 md:mb-3">Dari Mereka yang Berani Berubah</h2>
        <hr className="w-16 md:w-20 mx-auto border-t-2 border-primary mb-2 md:mb-3" />
        <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-xl mx-auto px-4 md:px-0">
          Dengarkan pengalaman langsung dari anggota komunitas Alife yang telah merasakan manfaatnya.
        </p>
      </div>
      <div className="relative mt-4 max-h-[70vh] overflow-hidden">
        <div className="gap-2 md:columns-3 xl:columns-3 2xl:columns-3">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <Marquee
                vertical
                key={i}
                className={cn({
                  "[--duration:50s]": i === 1,
                  "[--duration:25s]": i === 0,
                  "[--duration:60s]": i === 2,
                })}
              >
                {testimonials.map((card, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: Math.random() * 0.5,
                      duration: 0.8,
                    }}
                  >
                    <TestimonialCard {...card} className="mb-2" />
                  </motion.div>
                ))}
              </Marquee>
            ))}
        </div>
        
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/5 w-full bg-gradient-to-t from-background from-20%"></div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/5 w-full bg-gradient-to-b from-background from-20%"></div>
      </div>
    </Section>
  );
}
