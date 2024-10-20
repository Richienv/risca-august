import React from 'react';
import { TwitterIcon, FacebookIcon } from '@/components/icons'; // Adjust the import path as needed

export const siteConfig = {
  name: "Alife",
  description: "Your Life, Your Way",
  // ... other properties
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
  // Optional: Add this if you want social media icons
  socials: [
    { icon: React.createElement(TwitterIcon), href: "https://twitter.com/alife" },
    { icon: React.createElement(FacebookIcon), href: "https://facebook.com/alife" },
    // ... other social media links
  ],
};
