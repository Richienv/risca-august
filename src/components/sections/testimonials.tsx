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
        src={img || "/placeholder-avatar.jpg"}
        alt={name}
        className="h-10 w-10 rounded-full ring-1 ring-border ring-offset-4"
        priority={false}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = "/placeholder-avatar.jpg";
        }}
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
    name: "Jojo",
    role: "2 Years Joined",
    img: "/jojo.jpg",
    description: (
      <p>
        Awalnya aku memilih kamu sebagai leader karena kamu yang pertama kali mengenalkan aku ke peluang ini, dan kita sudah lama saling kenal. 
        <Highlight>
          Gaya mentoring kamu juga keren – sabar, bisa menyesuaikan dengan tempo belajar aku yang kadang agak lemot
        </Highlight>
        . Bisa beli Apartemen, mobil baru, umroh pake uang sendiri, bisa dari mana aja dan lewat bisnis ini bisa support hobi naik gunung kapanpun.
      </p>
    ),
  },
  {
    name: "Devina Hartono",
    role: "Alife Partner",
    img: "/devina.jpg",
    description: (
      <p>
        <Highlight>
          Sebelum di Alife, saya adalah orang yang tidak punya ambisi dan selalu labeled myself as an introvert
        </Highlight>
        . Bersyukur banget join di Alife sehingga saya tau kemampuan2 saya yang sebelumnya tidak terpikirkan. Mulai dari punya dreams dan tujuan hidup, skill2 baru seperti leadership & public speaking.
      </p>
    ),
  },
  {
    name: "Sharon Gunawan",
    role: "Alife Partner",
    img: "/sharon.jpg",
    description: (
      <p>
        Martha orang nya very knowledgable dan ga pelit ilmu. 
        <Highlight>
          Watching Martha as a leader, i can see how she always takes care of her team dan memberi mereka sense of responsibility
        </Highlight>
        . Di Alife gw belajar membangun relasi dengan orang, belajar menjadi orang yg lebih baik: belajar ramah, menyapa, care sama orang lain.
      </p>
    ),
  },
  {
    name: "Jessica Suwarsono",
    role: "Alife Partner",
    img: "/jessica.jpg",
    description: (
      <p>
        <Highlight>
          Sebagai seorang eks-corporate aku benar2 merasakan perubahan hidup sejak join Alife
        </Highlight>
        . Income yang aku dapat selama 4 tahun jalanin bisnis Alife sudah mencapai dua kali lipat dari gaji terakhirku di korporat. Yang ketiga komunitas Alife yang seru dan punya visi yang sama.
      </p>
    ),
  },
  {
    name: "Shanelle",
    role: "Alife Partner",
    img: "/shanelle.jpg",
    description: (
      <p>
        Play hard, work HARDER. 
        <Highlight>
          Yang paling berasa adalah lingkungannya yang super high-achiever
        </Highlight>
        . Jadi ada trigger untuk bisa keluar dari zona nyaman, dream big, and achieve more. Bonus mentoring dari manusia-manusia hebat. Bye bye mediocre life!
      </p>
    ),
  },
  {
    name: "Trisna",
    role: "Alife Partner",
    img: "/trisna.jpg",
    description: (
      <p>
        Martha aset ilmu! Gercep sama team, mindset yang terbuka. 
        <Highlight>
          Perubahan sejak Alife BANYAK! Tapi yang paling ak sadari, MIMPI. Ak jadi berani untuk bermimpi lagi
        </Highlight>
        . Ternyata mimpi pun bisa di realisasikan.. karna Alife. 🫶
      </p>
    ),
  },
  {
    name: "Joceline",
    role: "2 Years Joined",
    img: "/joceline.jpg",
    description: (
      <p>
        Atha sebagai salah satu partner yg senior selalu kasih insights2 tentang menjalani bisnis. 
        <Highlight>
          Grateful bgt bisa join di bisnis Alife. Selain dapat teman2 positive, percepatan income di bisnis ini sangat nyata
        </Highlight>
        . Dulu aku orangnya pemalu banget tapi karena punya teman banyak di Alife aku jadi bisa lebih percaya diri.
      </p>
    ),
  },
  {
    name: "Sarchie",
    role: "Alife Partner",
    img: "/sarchie.jpeg",
    description: (
      <p>
        <Highlight>
          Etos kerja Martha benar-benar bagus. Dia tidak pernah setengah-setengah jika melakukan sesuatu. Kalau dia suka, dia suka. Kalau tidak suka, dia tidak melakukannya.
        </Highlight>
        . Dan ketika dia serius terhadap sesuatu, hasilnya juga benar-benar bagus; hasil akhirnya terlihat baik dan penuh integritas, karena saya tahu Martha adalah tipe orang yang ingin bekerja dalam apa pun yang membuat hatinya tenang. Dia juga teman yang hebat dan pendukung yang luar biasa, contoh hampir sempurna dari leader—karena hanya Tuhan yang bisa benar-benar sempurna. Intinya, Martha adalah teladan aku, salah satu tipe yang perlu benar-benar dicontoh dalam hidupnya.
      </p>
    ),
  },
  {
    name: "Sheila Tang",
    role: "6 Years Joined",
    img: "/sheila.jpeg",
    description: (
      <p>
        <Highlight>
          Akselerasinya sangat cepat, dari mulai sekolahkan anak ke sekolah internasional hingga membeli aset, semuanya benar-benar dari kerja keras saya dan membantu orang lain
        </Highlight>
        . Sejak tahun ketiga, dengan tim yang semakin besar, kecepatan pertumbuhan menjadi jauh lebih intens. Komunitas kami sangat mendukung dan positif, kami bisa saling berbagi dan menemukan solusi bersama. Ketika tim kami berkembang dan hidup kami menjadi lebih baik, kami semua bahagia.
      </p>
    ),
  },
  {
    name: "Hesty",
    role: "2 Years Joined",
    img: "/hesty.png",
    description: (
      <p>
        <Highlight>
          Baru 2 tahun gabung, pendapatan saya naik 3-4 kali dibanding saat di perusahaan
        </Highlight>
        . Setelah gabung di Alife, saya dapat pengetahuan dan pengembangan diri yang luar biasa. Teman-teman komunitas saling mendukung di semua aspek hidup—bukan cuma kerja. Ada jalan di sini dengan komunitas bagus dan mentor hebat.
      </p>
    ),
  },
  {
    name: "Debora Simon",
    role: "2 Years Joined",
    img: "/debora.jpeg",
    description: (
      <p>
        <Highlight>
          Alife adalah komunitas yang bagus dan memiliki banyak dampak positif. Semua teman dalam satu tim tanpa banyak persaingan
        </Highlight>
        . Sangat kompak, persaingan sehat yang membuat kami tumbuh bersama. Jaringan pertemanan juga meningkat, dan pengetahuan serta keterampilan kami benar-benar berkembang.
      </p>
    ),
  },
];

// Split testimonials into three groups
const column1Testimonials = [
  testimonials[0], // Jojo
  testimonials[3], // Jessica
  testimonials[6], // Joceline
  testimonials[9], // Hesty
];

const column2Testimonials = [
  testimonials[1], // Devina
  testimonials[4], // Shanelle
  testimonials[7], // Sarchie
  testimonials[10], // Debora
];

const column3Testimonials = [
  testimonials[2], // Sharon
  testimonials[5], // Trisna
  testimonials[8], // Sheila Tang
];

export default function Testimonials() {
  return (
    <Section className="py-1 md:py-1 max-w-8xl">
      <div className="text-center mb-8 md:mb-10">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 md:mb-3">
          Dari Mereka yang Berani Berubah
        </h2>
        <hr className="w-16 md:w-20 mx-auto border-t-2 border-primary mb-2 md:mb-3" />
        <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-xl mx-auto px-4 md:px-0">
          Dengarkan pengalaman langsung dari anggota komunitas Alife yang telah merasakan manfaatnya.
        </p>
      </div>
      
      {/* Mobile View - Single Column Scroll */}
      <div className="md:hidden relative mt-4 max-h-[80vh] overflow-hidden">
        <Marquee
          vertical
          className="group [--duration:40s]" // Increased speed for mobile
        >
          {testimonials.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: Math.random() * 0.3,
                duration: 0.5,
              }}
            >
              <TestimonialCard {...card} className="mb-2 mx-2" />
            </motion.div>
          ))}
        </Marquee>
        
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/5 w-full bg-gradient-to-t from-background from-20%"></div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/5 w-full bg-gradient-to-b from-background from-20%"></div>
      </div>

      {/* Desktop View - Three Columns */}
      <div className="hidden md:block relative mt-4 max-h-[70vh] overflow-hidden">
        <div className="gap-2 columns-3">
          {/* First Column */}
          <Marquee
            vertical
            className="group [--duration:50s]" // Increased speed for desktop
          >
            {column1Testimonials.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: Math.random() * 0.3,
                  duration: 0.5,
                }}
              >
                <TestimonialCard {...card} className="mb-2" />
              </motion.div>
            ))}
          </Marquee>

          {/* Second Column */}
          <Marquee
            vertical
            className="group [--duration:45s]" // Slightly different speed for visual interest
          >
            {column2Testimonials.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: Math.random() * 0.3,
                  duration: 0.5,
                }}
              >
                <TestimonialCard {...card} className="mb-2" />
              </motion.div>
            ))}
          </Marquee>

          {/* Third Column */}
          <Marquee
            vertical
            className="group [--duration:55s]" // Slightly different speed for visual interest
          >
            {column3Testimonials.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: Math.random() * 0.3,
                  duration: 0.5,
                }}
              >
                <TestimonialCard {...card} className="mb-2" />
              </motion.div>
            ))}
          </Marquee>
        </div>
        
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/5 w-full bg-gradient-to-t from-background from-20%"></div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/5 w-full bg-gradient-to-b from-background from-20%"></div>
      </div>
    </Section>
  );
}
