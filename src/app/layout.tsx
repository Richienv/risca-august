import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn, constructMetadata } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = constructMetadata({
  metadataBase: new URL('https://your-domain.com'), // Replace with your actual domain
  title: "Risca Agustine - Tim Asuransi MANULIFE Jakarta | Peluang Bisnis untuk Ibu Rumah Tangga",
  description: "Bergabung dengan Tim Throne yang dipimpin Risca Agustine, leader asuransi MANULIFE Jakarta. Peluang bisnis asuransi khusus untuk ibu rumah tangga yang ingin mengoptimalkan waktu dan meraih penghasilan tambahan.",
  openGraph: {
    title: "Risca Agustine - Tim Asuransi MANULIFE Jakarta | Peluang Bisnis untuk Ibu",
    description: "Bergabung dengan Tim Throne yang dipimpin Risca Agustine. Peluang bisnis asuransi MANULIFE untuk ibu rumah tangga di Jakarta yang ingin penghasilan tambahan.",
    url: 'https://your-domain.com', // Replace with your actual domain
    siteName: 'Risca Agustine - Tim Throne MANULIFE',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Risca Agustine - Tim Throne MANULIFE Jakarta',
        type: 'image/png',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  other: {
    'og:image:secure_url': 'https://your-domain.com/og.png', // Replace with your actual domain
    'og:image:type': 'image/png',
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:locale': 'id_ID',
    'og:site_name': 'Risca Agustine - Tim Throne MANULIFE',
    'og:title': 'Risca Agustine - Tim Asuransi MANULIFE Jakarta | Peluang Bisnis untuk Ibu',
    'og:description': 'Bergabung dengan Tim Throne yang dipimpin Risca Agustine. Peluang bisnis asuransi MANULIFE untuk ibu rumah tangga di Jakarta.',
    'og:url': 'https://your-domain.com', // Replace with your actual domain
  },
  twitter: {
    card: 'summary_large_image',
    title: "Risca Agustine - Tim Asuransi MANULIFE Jakarta | Peluang Bisnis untuk Ibu",
    description: "Bergabung dengan Tim Throne yang dipimpin Risca Agustine. Peluang bisnis asuransi MANULIFE untuk ibu rumah tangga di Jakarta.",
    images: ['/og.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  keywords: [
    'risca agustine',
    'tim throne',
    'MANULIFE jakarta',
    'asuransi MANULIFE',
    'bisnis asuransi jakarta',
    'peluang bisnis ibu rumah tangga',
    'agen asuransi jakarta',
    'penghasilan tambahan ibu',
    'bisnis sambilan ibu',
    'asuransi jiwa MANULIFE',
    'mentor asuransi jakarta',
    'tim asuransi jakarta',
    'ibu produktif jakarta',
    'bisnis fleksibel ibu'
  ],
  authors: [{ name: 'Risca Agustine' }],
  creator: 'Risca Agustine',
  publisher: 'Tim Throne MANULIFE',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: 'your-google-site-verification-code', // You'll get this from Google Search Console
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
});

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Risca Agustine",
              "jobTitle": "Insurance Leader & Mentor",
              "description": "Leader Tim Throne MANULIFE Jakarta yang berdedikasi membantu ibu rumah tangga meraih penghasilan tambahan melalui bisnis asuransi.",
              "url": "https://your-domain.com",
              "image": "https://your-domain.com/images/risca-agustine.png",
              "worksFor": {
                "@type": "Organization",
                "name": "Tim Throne MANULIFE",
                "description": "Tim asuransi MANULIFE Jakarta yang fokus pada pemberdayaan ibu rumah tangga untuk sukses dalam bisnis asuransi."
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jakarta",
                "addressCountry": "ID"
              },
              "areaServed": {
                "@type": "City",
                "name": "Jakarta"
              },
              "knowsAbout": ["Asuransi MANULIFE", "Mentoring Bisnis", "Pemberdayaan Ibu"],
              "sameAs": [
                "https://www.instagram.com/risca.agustine",
                "https://www.facebook.com/risca.agustine"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Tim Throne MANULIFE",
              "description": "Tim asuransi MANULIFE Jakarta yang dipimpin Risca Agustine. Fokus pada peluang bisnis asuransi untuk ibu rumah tangga yang ingin penghasilan tambahan.",
              "url": "https://your-domain.com",
              "logo": "https://your-domain.com/images/tim-throne-logo.png",
              "founder": {
                "@type": "Person",
                "name": "Risca Agustine"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "areaServed": "Jakarta",
                "availableLanguage": "Indonesian"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jakarta",
                "addressCountry": "ID"
              },
              "sameAs": [
                "https://www.instagram.com/tim.throne.MANULIFE",
                "https://www.facebook.com/tim.throne.MANULIFE"
              ],
              "serviceType": "Insurance Business Opportunities",
              "audience": {
                "@type": "Audience",
                "audienceType": "Ibu Rumah Tangga Jakarta",
                "geographicArea": {
                  "@type": "City",
                  "name": "Jakarta"
                }
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Risca Agustine - Tim Throne MANULIFE",
              "url": "https://your-domain.com",
              "description": "Website resmi Risca Agustine dan Tim Throne MANULIFE Jakarta. Peluang bisnis asuransi untuk ibu rumah tangga.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://your-domain.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "mainEntity": {
                "@type": "Person",
                "name": "Risca Agustine"
              }
            })
          }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background antialiased w-full mx-auto scroll-smooth"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {children}
          <ThemeToggle />
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
