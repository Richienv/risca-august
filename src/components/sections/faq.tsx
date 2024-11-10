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
    question: "Apa itu Alife by Vision?",
    answer: "Alife by Vision adalah Agensi Asuransi yang didirikan pada tahun 2019. Kami percaya pada pendekatan win-win, di mana kami memberikan saran dan solusi terbaik untuk kebutuhan finansial klien Alife, sambil memastikan Para Mitra Alife memiliki kehidupan yang sejahtera dan bermakna. Kami adalah tim agen profesional berbakat dengan berbagai keterampilan dan pengalaman. Kami mencintai apa yang kami lakukan, dan kami melakukannya dengan penuh semangat. Kami berharap dapat memperluas kemitraan kami dan memberikan asuransi kesehatan dan jiwa terbaik kepada klien kami."
  },
  {
    question: "Apakah aku perlu pengalaman di bidang asuransi?",
    answer: "Tidak, kamu tidak perlu pengalaman sebelumnya di bidang asuransi. Kami menyediakan pelatihan komprehensif dan dukungan berkelanjutan untuk membantu kamu memulai dan mengembangkan bisnis Anda."
  },
  {
    question: "Apa saja pelengkapan yang dibutuhkan untuk mendukung produktivitas aku selama di bisnis ini?",
    answer: "Dua hal yang penting adalah iPad dan Laptop. Karena itu akan jadi alat utama untuk kamu dalam bisnis ini."
  },
  {
    question: "Apa keuntungan bergabung dengan Alife dibandingkan bekerja 9-5?",
    answer: "Alife menawarkan kebebasan waktu, potensi penghasilan tak terbatas, pengembangan diri, networking luas, dan peluang bisnis yang tidak kamu dapatkan dalam pekerjaan 9-5 biasa."
  },
  {
    question: "Apakah ada biaya untuk bergabung dengan komunitas bisnis Martha?",
    answer: "Informasi mengenai biaya keanggotaan akan dibahas secara detail saat sesi konsultasi personal kita. aku akan melihat komitmen kamu dan kemudian aku akan memberikan solusi terbaik special untuk kamu."
  }
];

export default function FAQ() {
  return (
    <Section className="py-1 md:py-1">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 md:mb-4">Pertanyaan yang Sering Diajukan</h2>
        <hr className="w-20 md:w-24 mx-auto border-t-2 border-primary mb-3 md:mb-4" />
        <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4 md:px-0">
          Temukan jawaban atas pertanyaan umum tentang Alife by Vision
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
