import Section from "@/components/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig } from "@/lib/config";

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
    <Section className="py-1 md:py-1">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 md:mb-4">Yang Sering Lo Tanyain</h2>
        <hr className="w-20 md:w-24 mx-auto border-t-2 border-primary mb-3 md:mb-4" />
        <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4 md:px-0">
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
  );
}
