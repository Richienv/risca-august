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

const faqs = [
  {
    question: "Bagaimana cara bergabung dengan program ini?",
    answer: "Sangat mudah! Cukup klik tombol daftar di website, isi form dengan lengkap dan submit. Tim kami akan menghubungi kamu dalam 24 jam untuk interview singkat dan proses selanjutnya. Pastikan nomor WA yang kamu masukkan aktif ya!"
  },
  {
    question: "Apakah ada biaya komitmen untuk bergabung?",
    answer: "Khusus untuk 100 orang pertama yang diterima, ada biaya komitmen. Ini untuk memastikan keseriusan peserta dan mengcover biaya training intensif, software premium, dan mentoring personal. Investasi ini akan balik berlipat setelah kamu mulai earning!"
  },
  {
    question: "Apa saja yang diperlukan untuk mulai?",
    answer: "Yang paling penting adalah iPad untuk install software khusus yang kami berikan. Selain itu, koneksi internet stabil, semangat belajar, dan komitmen untuk mengikuti sistem. Semua materi training dan tools sudah kami sediakan lengkap."
  },
  {
    question: "Berapa kali training dalam seminggu?",
    answer: "Training dilaksanakan 2x seminggu via Zoom. Setiap sesi sekitar 2 jam dengan materi yang sangat praktis dan aplikatif. Jadwal fleksibel disesuaikan dengan mayoritas peserta. Ada recording juga jadi kalau ketinggalan bisa catch up."
  },
  {
    question: "Apakah bisnis ini cocok untuk pemula tanpa pengalaman?",
    answer: "Malah bagus! Kami lebih suka mengajar dari nol dengan mindset yang fresh. Yang penting kamu punya semangat belajar dan keinginan kuat untuk berubah. Sistem kami sudah disederhanakan dan ada mentoring langsung dari komunitas yang berpengalaman."
  },
  {
    question: "Berapa lama proses training sampai bisa mulai earning?",
    answer: "Rata-rata dalam 2-4 minggu sudah bisa mulai praktik dan earning pertama. Tergantung seberapa cepat kamu menyerap materi dan menerapkan sistem. Yang rajin training dan praktek biasanya lebih cepat break even dan mulai profit."
  },
  {
    question: "Apakah ada jaminan sukses atau money back guarantee?",
    answer: "Kami tidak bisa jamin 100% sukses karena hasil tergantung usaha masing-masing. Tapi yang pasti, sistem dan mentoring kami sudah terbukti berhasil untuk ribuan orang. Selama kamu ikuti prosesnya dengan konsisten, peluang sukses sangat besar."
  },
  {
    question: "Bisakah saya tetap kerja sambil ikut program ini?",
    answer: "Tentu saja! Bahkan direkomendasikan. Training di malam hari, dan kamu bisa praktek di waktu luang. Banyak member yang masih kerja kantoran tapi udah bisa dapetin income tambahan 5-15 juta per bulan dari program ini."
  },
  {
    question: "Bagaimana sistem pembayaran dan withdrawal earnings?",
    answer: "Semua transaksi menggunakan sistem digital yang aman dan transparan. Withdrawal bisa dilakukan kapan saja minimal 1 juta, langsung masuk ke rekening dalam 1x24 jam. Ada dashboard khusus untuk tracking semua earnings dan transaksi."
  },
  {
    question: "Apakah program ini legal dan aman?",
    answer: "100% legal! Kami adalah komunitas bisnis yang terdaftar resmi. Semua sistem sudah sesuai regulasi dan transparan. Ribuan member kami sudah merasakan manfaatnya tanpa masalah hukum apapun. Kamu bisa cek testimoni dan track record kami."
  },
  {
    question: "Apa bedanya dengan program bisnis online lainnya?",
    answer: "Perbedaan utama adalah sistem mentoring personal dan komunitas yang sangat solid. Kamu tidak sendirian! Ada support 24/7, grup diskusi aktif, dan mentor berpengalaman yang siap bantu. Plus software khusus yang tidak ada di tempat lain."
  },
  {
    question: "Berapa target realistic earning per bulan untuk pemula?",
    answer: "Untuk bulan pertama target 2-5 juta cukup realistic sambil belajar. Bulan kedua bisa naik ke 5-10 juta. Setelah 3 bulan dan sudah mahir sistemnya, 10-25 juta per bulan sangat achievable. Ada yang bahkan lebih, tergantung dedikasi dan konsistensi."
  }
];

export default function FAQ() {
  return (
    <div className="relative w-full bg-black overflow-hidden">
      
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
             lengkap buat yang masih ragu-ragu
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