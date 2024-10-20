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
    <>
      <BlueGradientSeparator />
      <Section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-4">Fitur Unggulan Alife</h2>
          <hr className="w-24 mx-auto border-t-2 border-primary mb-4" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Bergabunglah dengan Alife dan nikmati berbagai fitur yang akan mendukung pertumbuhan pribadi dan bisnis Anda.
          </p>
        </div>
        <Features collapseDelay={5000} linePosition="bottom" data={data} />
      </Section>
    </>
  );
}
