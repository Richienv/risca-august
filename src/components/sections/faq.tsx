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
    answer: "Alife by Vision adalah komunitas bisnis yang fokus pada pengembangan diri dan kesuksesan finansial. Kami menggabungkan peluang bisnis asuransi dengan mentorship, networking, dan event-event eksklusif untuk membantu anggota kami mencapai potensi penuh mereka."
  },
  {
    question: "Apakah saya perlu pengalaman di bidang asuransi?",
    answer: "Tidak, Anda tidak perlu pengalaman sebelumnya di bidang asuransi. Kami menyediakan pelatihan komprehensif dan dukungan berkelanjutan untuk membantu Anda memulai dan mengembangkan bisnis Anda."
  },
  {
    question: "Bagaimana cara bergabung dengan Alife?",
    answer: "Untuk bergabung, Anda cukup mengisi formulir pendaftaran di website kami. Tim kami akan menghubungi Anda dalam waktu 15 menit untuk membahas lebih lanjut dan mengundang Anda ke event pertama."
  },
  {
    question: "Apa keuntungan bergabung dengan Alife dibandingkan bekerja 9-5?",
    answer: "Alife menawarkan kebebasan waktu, potensi penghasilan tak terbatas, pengembangan diri, networking luas, dan peluang bisnis yang tidak Anda dapatkan dalam pekerjaan 9-5 biasa."
  },
  {
    question: "Apakah ada biaya untuk bergabung dengan Alife?",
    answer: "Informasi mengenai biaya keanggotaan akan dibahas secara detail saat sesi konsultasi personal dengan tim kami. Kami menawarkan berbagai paket yang dapat disesuaikan dengan kebutuhan dan tujuan Anda."
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
        <p className="text-xs md:text-sm text-muted-foreground">
          Masih punya pertanyaan? Hubungi kami di{" "}
          <a href={`mailto:${siteConfig.links.email}`} className="text-primary underline">
            {siteConfig.links.email}
          </a>
        </p>
      </div>
    </Section>
  );
}
