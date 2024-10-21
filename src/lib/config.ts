import React from 'react';
import { Icons } from "@/components/icons"; // Adjust this import as needed

type HeaderItem = {
  trigger?: string;
  href?: string;
  label: string;
  content?: {
    main?: {
      icon: React.ReactNode;
      title: string;
      description: string;
      href: string;
    };
    items: Array<{
      href: string;
      title: string;
      description: string;
    }>;
  };
};

export const siteConfig = {
  name: "Alife",
  description: "Your Life, Your Way",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  header: [
    {
      trigger: "Features",
      href: "/features",
      label: "Features",
      content: {
        main: {
          icon: React.createElement(Icons.logo, { className: "h-6 w-6" }),
          title: "AI-Powered Automation",
          description: "Streamline your workflow with intelligent automation.",
          href: "#",
        },
        items: [
          {
            href: "#",
            title: "Task Automation",
            description: "Automate repetitive tasks and save time.",
          },
          // ... other items
        ],
      },
    },
    {
      trigger: "Solutions",
      href: "/solutions",
      label: "Solutions",
      content: {
        items: [
          {
            title: "For Small Businesses",
            href: "#",
            description: "Tailored automation solutions for growing companies.",
          },
          // ... other items
        ],
      },
    },
    {
      href: "/blog",
      label: "Blog",
    },
  ] as HeaderItem[],
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
    { icon: React.createElement(Icons.twitter), href: "https://twitter.com/alife" },
    { icon: React.createElement(Icons.github), href: "https://github.com/alife" },
    // ... other social media links
  ],
  email: "info@alife.com",
};

export type SiteConfig = typeof siteConfig;
