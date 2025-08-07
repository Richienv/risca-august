"use client";

import { motion } from "framer-motion";
import OverlappingImages from "@/components/overlapping-images";
import { Spotlight } from "@/components/spotlight-new";

const transformations = [
  {
    title: "Uang Datang Sendiri",
    description: "Sistem autopilot yang bikin duit ngalir terus tanpa lo harus kerja 24/7. Cukup setup sekali, terus tinggal pantau income bertambah setiap hari. Gak perlu lagi mikirin gimana caranya dapet duit besok, karena sistemnya udah jalan sendiri bahkan waktu lo tidur. Ribuan member udah buktiin sendiri, dari yang dulu stress mikirin tagihan, sekarang santai ngeliat notifikasi transfer masuk terus.",
  },
  {
    title: "Ngomong Dikit, Dapet Banyak",
    description: "Rahasia komunikasi yang bikin orang langsung tertarik tanpa lo harus jadi penjual. Natural, santai, tapi hasilnya gila-gilaan. Lupain teknik ngomong yang ribet dan cringe, ini tentang gimana lo bisa bikin orang penasaran dan mau denger lo lebih lama. Mereka yang dulu skeptis dan cuek, tiba-tiba jadi antusias dan bertanya-tanya. Lo gak perlu jadi orang yang paling pinter ngomong, cukup tau timing dan kata-kata yang tepat.",
  },
  {
    title: "Orang Ketagihan Sama Lo",
    description: "Framework khusus bikin circle lo jadi magnet. Mereka bakal loyal, selalu balik lagi, dan dengan senang hati ngasih lo duit. Ini bukan tentang manipulasi, tapi tentang gimana lo bisa jadi seseorang yang bener-bener valuable dalam hidup mereka. Sampe mereka ngerasa rugi kalo gak ada lo di lingkaran mereka. Yang tadinya cuma kenal biasa, sekarang jadi yang paling dipercaya dan diandalin.",
  },
  {
    title: "Tolakan Jadi Kesempatan",
    description: "Mindset dan teknik rahasia ngubah penolakan jadi peluang emas. Yang tadinya bilang 'nggak' bakal berubah pikiran dan minta dibantu. Setiap 'tidak' yang lo denger itu sebenarnya informasi berharga tentang apa yang mereka butuhkan. Dengan mindset yang tepat, lo bisa ngubah setiap penolakan jadi stepping stone menuju kesuksesan yang lebih besar. Member komunitas sering cerita gimana mereka akhirnya berterima kasih sama orang yang pernah nolak mereka.",
  },
  {
    title: "10 Juta dalam 5 Bulan",
    description: "Blueprint finansial yang udah terbukti work untuk 2000+ member komunitas. Dari nol sampai puluhan juta, tanpa modal gede atau skill khusus. Ini bukan mimpi atau motivasi kosong, ini roadmap konkret dengan step-by-step yang jelas. Lo bakal tau persis apa yang harus dilakuin di bulan pertama, kedua, sampai kelima. Bahkan ada yang lebih cepet dari 5 bulan, tapi kita kasih buffer waktu yang realistis buat lo yang mungkin masih ragu atau takut.",
  },
  {
    title: "Mulai Hari Ini, Hasil Besok",
    description: "Gak perlu nunggu berbulan-bulan buat liat hasil pertama. Member rata-rata udah ngerasain perubahan income dalam 2-3 minggu pertama. Lo cuma perlu ikutin step-by-step yang udah dikasih, tanpa perlu mikir ribet atau analisis berlebihan. Sistemnya udah disederhanakan banget, bahkan anak SMA pun bisa langsung paham dan action. Yang penting lo mau mulai hari ini, sisanya sistem yang akan guide lo sampai berhasil.",
  },
  {
    title: "Gak Perlu Jago Apa-Apa",
    description: "Lupain semua kekhawatiran tentang 'gue gak bisa ini', 'gue gak punya skill itu'. Member paling sukses malah yang dateng tanpa background apapun. Mereka cuma modal nekat dan mau dengerin instruksi. Sistemnya udah dirancang khusus buat orang awam yang gak ngerti bisnis sama sekali. Lo gak perlu jago teknologi, gak perlu pinter ngomong, bahkan gak perlu punya banyak kenalan. Semua yang lo butuhin udah disediain step-by-step.",
  },
  {
    title: "Modal Cuma HP & Wifi",
    description: "Forget semua bisnis yang butuh modal ratusan juta atau sewa tempat mahal-mahal. Lo cuma butuh HP yang udah ada di tangan dan koneksi internet. Bahkan bisa dimulai dari kamar tidur lo sendiri. Gak ada inventory, gak ada barang yang harus dibeli dulu, gak ada resiko rugi besar. Member ada yang mulai cuma modal 50ribu buat paket data, sekarang penghasilannya puluhan juta per bulan. Sesimple itu.",
  },
  {
    title: "Copy-Paste Kesuksesan",
    description: "Lo gak perlu jadi pioneer atau coba-coba sendiri. Semua template, script, dan strategi yang udah terbukti work udah disiapin tinggal copy-paste. Dari cara ngomong, cara approach, sampe cara handle objection, semua udah ada panduannya yang detailed. Lo tinggal ikutin aja, gak perlu mikir kreatif atau inovatif. Ribuan orang udah sukses pake cara yang persis sama, tinggal lo yang belum nyoba aja.",
  },
];

function FeatureCard({ 
  title, 
  description, 
  isLast,
  index
}: { 
  title: string; 
  description: string; 
  isLast: boolean;
  index: number;
}) {
  return (
    <div 
      className="relative overflow-hidden group rounded-2xl p-6 lg:p-8 mb-6 lg:mb-8 transition-all duration-500"
      style={{
        background: 'linear-gradient(135deg, rgba(15, 15, 15, 0.95) 0%, rgba(0, 0, 0, 0.98) 50%, rgba(20, 5, 5, 0.95) 100%)',
        border: '1px solid transparent',
        backgroundImage: 'linear-gradient(135deg, rgba(15, 15, 15, 0.95) 0%, rgba(0, 0, 0, 0.98) 50%, rgba(20, 5, 5, 0.95) 100%), linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(220, 38, 38, 0.1), rgba(239, 68, 68, 0.2))',
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
      }}
    >
      {/* Corner Gradient Overlays */}
      <div className="absolute top-0 left-0 w-20 h-20 opacity-30 group-hover:opacity-50 transition-opacity duration-500"
           style={{
             background: 'radial-gradient(circle at 0% 0%, rgba(239, 68, 68, 0.4) 0%, rgba(220, 38, 38, 0.2) 40%, transparent 70%)',
           }}></div>
      <div className="absolute top-0 right-0 w-20 h-20 opacity-30 group-hover:opacity-50 transition-opacity duration-500"
           style={{
             background: 'radial-gradient(circle at 100% 0%, rgba(239, 68, 68, 0.4) 0%, rgba(220, 38, 38, 0.2) 40%, transparent 70%)',
           }}></div>
      <div className="absolute bottom-0 left-0 w-20 h-20 opacity-30 group-hover:opacity-50 transition-opacity duration-500"
           style={{
             background: 'radial-gradient(circle at 0% 100%, rgba(239, 68, 68, 0.4) 0%, rgba(220, 38, 38, 0.2) 40%, transparent 70%)',
           }}></div>
      <div className="absolute bottom-0 right-0 w-20 h-20 opacity-30 group-hover:opacity-50 transition-opacity duration-500"
           style={{
             background: 'radial-gradient(circle at 100% 100%, rgba(239, 68, 68, 0.4) 0%, rgba(220, 38, 38, 0.2) 40%, transparent 70%)',
           }}></div>
      
      {/* Enhanced Corner Glow Effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
           style={{
             boxShadow: 'inset 0 0 50px rgba(239, 68, 68, 0.1), 0 0 30px rgba(239, 68, 68, 0.05)',
           }}></div>
      {/* Enhanced Corner accent elements with gradient backgrounds */}
      <div 
        className="absolute top-2 left-2 w-10 h-10 border border-red-500/30 opacity-80 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110 rounded"
        style={{
          background: 'radial-gradient(circle, rgba(239, 68, 68, 0.15) 0%, rgba(220, 38, 38, 0.08) 60%, transparent 100%)',
          animationDelay: '0.1s',
        }}
      >
        <div className="absolute top-0 left-0 w-2 h-2 bg-red-500 opacity-60 rounded-full animate-pulse"></div>
      </div>
      
      <div 
        className="absolute top-2 right-2 w-10 h-10 border border-red-500/30 opacity-80 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110 rounded"
        style={{
          background: 'radial-gradient(circle, rgba(239, 68, 68, 0.15) 0%, rgba(220, 38, 38, 0.08) 60%, transparent 100%)',
          animationDelay: '0.2s',
        }}
      >
        <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 opacity-60 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>
      
      <div 
        className="absolute bottom-2 left-2 w-10 h-10 border border-red-500/30 opacity-80 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110 rounded"
        style={{
          background: 'radial-gradient(circle, rgba(239, 68, 68, 0.15) 0%, rgba(220, 38, 38, 0.08) 60%, transparent 100%)',
          animationDelay: '0.3s',
        }}
      >
        <div className="absolute bottom-0 left-0 w-2 h-2 bg-red-500 opacity-60 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div 
        className="absolute bottom-2 right-2 w-10 h-10 border border-red-500/30 opacity-80 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110 rounded"
        style={{
          background: 'radial-gradient(circle, rgba(239, 68, 68, 0.15) 0%, rgba(220, 38, 38, 0.08) 60%, transparent 100%)',
          animationDelay: '0.4s',
        }}
      >
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-red-500 opacity-60 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-12 relative z-10">
        {/* Left side - Text content */}
        <div className="w-full lg:w-3/5 order-2 lg:order-1">
          <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extralight leading-tight tracking-tight mb-3 lg:mb-4 text-white">
            {title}
          </h3>
          <p className="text-sm sm:text-base lg:text-lg font-light leading-relaxed text-white/70 max-w-xl">
            {description}
          </p>
        </div>

        {/* Right side - Overlapping Images */}
        <div className="w-full lg:w-2/5 flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="w-full max-w-sm lg:max-w-md h-52 sm:h-64 lg:h-72">
            <OverlappingImages solutionIndex={index} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SolutionSection() {
  return (
    <div className="relative w-full bg-black overflow-hidden">
      {/* Pink Spotlight Effects */}
      <Spotlight 
        gradientFirst={`radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(236, 72, 153, 0.12) 0%, rgba(219, 39, 119, 0.06) 50%, transparent 80%)`}
        gradientSecond={`radial-gradient(50% 50% at 50% 50%, rgba(236, 72, 153, 0.08) 0%, rgba(219, 39, 119, 0.04) 80%, transparent 100%)`}
        gradientThird={`radial-gradient(50% 50% at 50% 50%, rgba(219, 39, 119, 0.06) 0%, rgba(236, 72, 153, 0.03) 80%, transparent 100%)`}
        translateY={-220}
        width={450}
        height={900}
        smallWidth={180}
        duration={14}
        xOffset={70}
      />
      
      <div className="relative z-10 py-20 lg:py-28">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16 px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.h2 
            className="text-xs sm:text-sm font-mono font-light text-white/70 uppercase tracking-[0.2em] opacity-80 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Kenapa Mereka Sukses?
          </motion.h2>
          <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-30 mx-auto mb-6"></div>
          <motion.h1 
            className="text-center text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl whitespace-normal px-4 sm:px-6 md:px-8 lg:px-10 max-w-full mx-auto text-white relative mb-6"
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
            INI DIA RAHASIANYA
          </motion.h1>
          <motion.p
            className="text-sm lg:text-base font-light leading-relaxed text-white/70 max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Kenapa mereka bisa dapet 10 juta dalam 5 bulan sementara lo masih stuck di zona nyaman? Ini sistem tersembunyi yang bikin ribuan Gen-Z Indonesia achieve financial freedom tanpa perlu jago jualan atau punya modal gede.
            <br /><br />
            Gak ada yang spesial dari mereka. Yang beda cuma mereka tau rahasia ini duluan, dan sekarang hidup mereka udah berubah total. Dari yang dulu cuma bisa bermimpi, sekarang mereka flexing hasil nyata setiap bulan. Lo mau tetap jadi penonton, atau siap jadi yang berikutnya?
          </motion.p>
        </div>
        
        {/* Features List with more generous spacing */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-6 lg:space-y-8">
          {transformations.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <FeatureCard 
                title={feature.title} 
                description={feature.description} 
                isLast={index === transformations.length - 1}
                index={index}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
