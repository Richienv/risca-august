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
  name: "Template Pro",
  description: "Premium Business Templates & Solutions",
  url: "https://templatepro.com",
  keywords: ["business", "template", "professional", "premium", "solutions", "corporate"],
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
    { icon: FaTwitter, href: "https://twitter.com/templatepro" },
    { icon: FaFacebook, href: "https://facebook.com/templatepro" },
    { icon: FaInstagram, href: "https://instagram.com/templatepro" },
    { icon: FaLinkedin, href: "https://linkedin.com/company/templatepro" },
  ],
  links: {
    email: "hello@templatepro.com"
  },
};
