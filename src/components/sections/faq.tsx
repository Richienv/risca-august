"use client";

import Section from "@/components/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig } from "@/lib/config";
import { motion } from "framer-motion";
import { Spotlight } from "@/components/spotlight-new";

const faqs = [
  {
    question: "Emang bisnis ini tentang apa sih?",
    answer: "Jadi gini, gue punya sistem hidden yang udah ngebuktiin 2000+ Gen-Z bisa dapet 10 juta dalam 5 bulan. Ini bukan asuransi biasa yang lo kenal - ini bisnis yang gue develop khusus buat Gen-Z yang mau breakout dari zona stuck. Lo bakal dapet mentoring langsung dari gue plus akses ke komunitas exclusive yang udah proven berhasil."
  },
  {
    question: "Gue gak ngerti asuransi sama sekali, bisa gak?",
    answer: "Malah bagus! Gue lebih suka ngajarin dari nol daripada benerin mindset yang udah salah. Yang penting lo punya kemauan belajar dan ambisi buat ngubah hidup. Sistemnya udah gue sederhanain banget, bahkan yang gaptek sekalipun bisa."
  },
  {
    question: "Butuh modal gede gak buat mulai?  ",
    answer: "Cuma butuh HP sama laptop doang. Sisanya gue yang provide - dari training, sistem, sampe client lead. Yang penting lo ready action dan konsisten follow sistemnya."
  },
  {
    question: "Kenapa harus ikut lo? Bedanya apa sama kerja kantoran?",
    answer: "Lo mau stuck selamanya sama gaji UMR atau mau freedom total? Di sini lo bisa dapet 10 juta dalam 5 bulan, kerja dari mana aja, kapan aja. Plus networking sama high-achievers, bukan temen kantor yang toxic. Gue udah buktiin sendiri dan sekarang ngajarin lo caranya."
  },
  {
    question: "Berapa bayar buat join komunitas lo?",
    answer: "Nanti gue jelasin detail waktu kita ngobrol personal. Yang jelas investasinya balik berkali-kali lipat. Tapi gue harus liat dulu seberapa serious lo sama commitment-nya. Gue gak mau buang-buang waktu sama yang setengah-setengah."
  }
];

export default function FAQ() {
  return (
    <div className="relative w-full bg-gradient-to-br from-red-950 via-black to-red-900 overflow-hidden">
      {/* Pink Spotlight Effects */}
      <Spotlight 
        gradientFirst={`radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(236, 72, 153, 0.12) 0%, rgba(219, 39, 119, 0.06) 50%, transparent 80%)`}
        gradientSecond={`radial-gradient(50% 50% at 50% 50%, rgba(236, 72, 153, 0.08) 0%, rgba(219, 39, 119, 0.04) 80%, transparent 100%)`}
        gradientThird={`radial-gradient(50% 50% at 50% 50%, rgba(219, 39, 119, 0.06) 0%, rgba(236, 72, 153, 0.03) 80%, transparent 100%)`}
        translateY={-150}
        width={360}
        height={720}
        smallWidth={140}
        duration={18}
        xOffset={25}
      />
      
      {/* Red grid pattern background */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <pattern id="faqGridRed" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(220, 38, 38, 0.1)" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#faqGridRed)" />
      </svg>
      
      <Section className="py-20 md:py-32 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-xs sm:text-sm font-mono font-light text-slate-300 uppercase tracking-[0.2em] opacity-80 mb-4">
            Masih Ada Yang Ditanyain?
          </h2>
          <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-30 mx-auto mb-6"></div>
          <motion.h1 
            className="text-center text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl whitespace-normal px-4 sm:px-6 md:px-8 lg:px-10 max-w-full mx-auto text-white relative mb-4"
            style={{
              background: 'linear-gradient(90deg, #ffffff 0%, #9d1152 50%, #ffffff 100%)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear'
            }}
          >
            FAQ
          </motion.h1>
          <p className="text-sm lg:text-base font-light leading-relaxed text-slate-300 max-w-3xl mx-auto px-4 md:px-0">
            Jawaban lengkap buat yang masih ragu-ragu
          </p>
        </div>
        <div className="mx-auto my-8 max-w-3xl">
          <Accordion
            type="single"
            collapsible
            className="w-full space-y-4"
          >
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="border rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-4 py-4 text-left text-sm md:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-3 text-xs md:text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="text-center mt-8">
        </div>
      </Section>
    </div>
  );
}