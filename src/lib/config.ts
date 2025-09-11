import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

interface SiteConfig {
  name: string;
  description: string;
  url: string;
  keywords: string[];
  header: any[];
  footer: any[];
  socials: any[];
  links: {
    email: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Risca Agustine - Tim Throne Allianz",
  description: "Peluang bisnis asuransi Allianz untuk ibu rumah tangga di Jakarta. Bergabung dengan Tim Throne yang dipimpin Risca Agustine dan raih penghasilan tambahan dengan waktu fleksibel.",
  url: "https://risca-agustine.com",
  keywords: [
    "risca agustine",
    "tim throne",
    "allianz jakarta", 
    "asuransi allianz",
    "bisnis asuransi jakarta",
    "peluang bisnis ibu rumah tangga",
    "agen asuransi jakarta",
    "penghasilan tambahan ibu",
    "bisnis sambilan ibu",
    "asuransi jiwa allianz",
    "mentor asuransi jakarta",
    "tim asuransi jakarta",
    "ibu produktif jakarta",
    "bisnis fleksibel ibu"
  ],
  header: [
    // Add your header items here
    // Example:
    // { label: 'Home', href: '/' },
    // { trigger: 'Services', content: { /* ... */ } },
  ],
  footer: [
    {
      title: "Company",
      links: [
        { text: "About Us", href: "/about" },
        { text: "Services", href: "/services" },
        { text: "Portfolio", href: "/portfolio" },
        { text: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { text: "Business Templates", href: "/templates" },
        { text: "Custom Development", href: "/development" },
        { text: "Consulting", href: "/consulting" },
        { text: "Support", href: "/support" },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "Blog", href: "/blog" },
        { text: "Documentation", href: "/docs" },
        { text: "FAQ", href: "/faq" },
        { text: "Community", href: "/community" },
      ],
    },
  ],
  socials: [
    { icon: FaInstagram, href: "https://www.instagram.com/risca.agustine" },
    { icon: FaFacebook, href: "https://www.facebook.com/risca.agustine" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/risca-agustine" },
    { icon: FaTwitter, href: "https://twitter.com/riscaagustine" },
  ],
  links: {
    email: "contact@risca-agustine.com"
  },
};
