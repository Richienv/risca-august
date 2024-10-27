import Features from "@/components/features-horizontal";
import Section from "@/components/section";
import { Rocket, Users, Headphones, Gift } from "lucide-react";
import { BlueGradientSeparator } from "@/components/blue-gradient-separator";

const data = [
  {
    id: 1,
    title: "Komunitas Supportif",
    content: "Bergabung dengan komunitas yang fokus pada pengembangan diri dan kesuksesan bisnis.",
    image: "/dashboard.png",
    icon: <Users className="h-6 w-6 text-primary" />,
  },
  {
    id: 2,
    title: "Mentorship Eksklusif",
    content: "Dapatkan bimbingan langsung dari para entrepreneur sukses di Indonesia.",
    image: "/dashboard.png",
    icon: <Headphones className="h-6 w-6 text-primary" />,
  },
  {
    id: 3,
    title: "Peluang Bisnis",
    content: "Akses ke berbagai peluang bisnis dan kolaborasi dengan sesama anggota komunitas.",
    image: "/dashboard.png",
    icon: <Rocket className="h-6 w-6 text-primary" />,
  },
  {
    id: 4,
    title: "Event Eksklusif",
    content: "Ikuti berbagai event menarik, dari workshop hingga perjalanan networking.",
    image: "/dashboard.png",
    icon: <Gift className="h-6 w-6 text-primary" />,
  },
];

export default function FeaturesSection() {
  return (
    <div className="relative overflow-hidden w-full">
      <BlueGradientSeparator />
      
      {/* Enhanced radial gradient background */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-600/30 via-purple-600/20 to-red-600/30" />
      
      {/* Additional circular gradients for more pop */}
      <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-gradient-radial from-blue-500/40 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 bg-gradient-radial from-red-500/40 to-transparent rounded-full blur-3xl" />
      
      {/* Softer side gradients with masking and subtle trimming at top/bottom */}
      <div className="absolute left-0 top-0 bottom-0 w-64 bg-gradient-to-r from-blue-500/50 to-transparent [mask-image:linear-gradient(to_right,black,transparent)] [mask-image:radial-gradient(ellipse_at_left,black_10%,transparent_70%)]" />
      <div className="absolute right-0 top-0 bottom-0 w-64 bg-gradient-to-l from-red-500/50 to-transparent [mask-image:linear-gradient(to_left,black,transparent)] [mask-image:radial-gradient(ellipse_at_right,black_10%,transparent_70%)]" />

      <Section className="py-1 relative">
        <div className="relative z-10">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 md:mb-4">Kamu Tidak Perlu Takut, Kami Siap Membantu!</h2>
            <hr className="w-20 md:w-24 mx-auto border-t-2 border-primary mb-3 md:mb-4" />
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-xs sm:max-w-sm md:max-w-xl mx-auto px-4 md:px-0">
              We will take you by the hand and show you the ropes. Our goal is to help you become the leader you are meant to be!
            </p>
          </div>
          <Features collapseDelay={5000} linePosition="bottom" data={data} />
        </div>
      </Section>
      <BlueGradientSeparator />
    </div>
  );
}
