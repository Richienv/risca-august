import { FaTwitter, FaFacebook } from "react-icons/fa";

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
  name: "Alife",
  description: "Your Life, Your Way",
  url: "https://alifebyvision.com",
  keywords: ["life", "lifestyle", "personal development", "wellness"],
  header: [
    // Add your header items here
    // Example:
    // { label: 'Home', href: '/' },
    // { trigger: 'Products', content: { /* ... */ } },
  ],
  footer: [
    {
      title: "Company",
      links: [
        { text: "About Us", href: "/about" },
        { text: "Careers", href: "/careers" },
        // ... other links
      ],
    },
    // ... other footer sections
  ],
  socials: [
    { icon: FaTwitter, href: "https://twitter.com/alife" },
    { icon: FaFacebook, href: "https://facebook.com/alife" },
    // ... other social media links
  ],
  links: {
    email: "contact@alifebyvision.com"
  },
};
