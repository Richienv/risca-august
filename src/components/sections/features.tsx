import Section from "@/components/section";
import { BlueGradientSeparator } from "@/components/blue-gradient-separator";
import Image from "next/image";

const data = [
  {
    id: 1,
    title: "Kontes Logam Mulia Setiap Bulan",
    content: "Setiap deals yang kamu berhasil close, you have a chance to get Logam Mulia up to 5 gram setiap minggu!",
    image: "/goldd.jpg",
    value: "Value: 50jt+ per tahun"
  },
  {
    id: 2,
    title: "Rewards and Networking Opportunity dari Aku Setiap Minggu!",
    content: "Kalau kamu berhasil mencapai target kamu, Aku bakal kasih kamu reward VIP Dinner with Champions (Millionaire Dinner) & Personal Rewards up to Rp 10.000.000, and more!",
    image: "/minggu.jpg",
    value: "Value: 15jt+ per tahun"
  },
  {
    id: 3,
    title: "Closing With Mentors",
    content: "Aku bakal ikut kamu to meet your potential clients so that you can close deals faster! Kamu gaperlu pusing untuk nemuin klien sendiri kamu cukup observe and learn!",
    image: "/ipad.jpg",
    value: "Value: 50jt+ per tahun"
  },
  {
    id: 4,
    title: "Kelas Pengembangan Diri dari Speaker Ternama",
    content: "Kita always invite the top speakers ternama to share pengalaman dan tips suksesnya, kamu bisa ikut kelas ini gratis menggunakan akses komunitas kami!",
    image: "/kelas.png",
    value: "Value: 25jt+ per tahun"
  },
];

export default function FeaturesSection() {
  return (
    <div className="relative overflow-hidden w-full">
      <BlueGradientSeparator />
      
      {/* Lighter center radial gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-600/20 via-purple-600/10 to-red-600/20" />
      
      <Section className="py-1 relative">
        <div className="relative z-10">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 md:mb-4">
              Bonus Value yang akan kamu dapatkan saat bekerja sama dengan kami
            </h2>
            <hr className="w-20 md:w-24 mx-auto border-t-2 border-primary mb-3 md:mb-4" />
          </div>
          <div className="space-y-12">
            {data.map((item, index) => (
              <div key={item.id} className="relative">
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
                  <div className="w-full md:w-1/2">
                    <div className="relative">
                      {/* Lighter glow effect */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/60 via-purple-600/60 to-red-600/60 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition duration-1000"></div>
                      <div className="relative aspect-video rounded-xl overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute bottom-4 left-4">
                          <div className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500/90 via-blue-600/90 to-blue-700/90">
                            <span className="text-sm font-semibold text-white">
                              {item.value}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 space-y-4">
                    <h3 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-gray-100 via-gray-300 to-gray-400 bg-clip-text text-transparent">
                      {item.title}
                    </h3>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
                
                {index !== data.length - 1 && (
                  <div className="absolute -bottom-6 left-0 right-0 w-full">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-500/20 to-transparent my-4 
                      [mask-image:linear-gradient(to_right,transparent,black_25%,black_75%,transparent)] 
                      [mask-size:100%_8px] [mask-repeat:repeat-x] [border-style:dashed]"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>
      <BlueGradientSeparator />
    </div>
  );
}
