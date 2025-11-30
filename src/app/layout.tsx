import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn, constructMetadata } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = constructMetadata({
  metadataBase: new URL('https://your-domain.com'), // Replace with your actual domain
  title: "Risca Agustine - Financial Consultant & Career Opportunity | Peluang Bisnis untuk Ibu",
  description: "Bergabung dengan Tim Risca Agustine. Peluang karir sebagai Financial Consultant khusus untuk ibu rumah tangga yang ingin mengoptimalkan waktu dan meraih penghasilan tambahan. Program mentoring dan training eksklusif.",
  openGraph: {
    title: "Risca Agustine - Financial Consultant & Career Opportunity | Peluang Bisnis untuk Ibu",
    description: "Bergabung dengan Tim Risca Agustine. Peluang karir sebagai Financial Consultant untuk ibu rumah tangga di Jakarta yang ingin penghasilan tambahan.",
    url: 'https://your-domain.com', // Replace with your actual domain
    siteName: 'Risca Agustine - Financial Consultant',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Risca Agustine - Financial Consultant Jakarta',
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
    'og:site_name': 'Risca Agustine - Financial Consultant',
    'og:title': 'Risca Agustine - Financial Consultant & Career Opportunity | Peluang Bisnis untuk Ibu',
    'og:description': 'Bergabung dengan Tim Risca Agustine. Peluang karir sebagai Financial Consultant untuk ibu rumah tangga di Jakarta.',
    'og:url': 'https://your-domain.com', // Replace with your actual domain
  },
  twitter: {
    card: 'summary_large_image',
    title: "Risca Agustine - Financial Consultant & Career Opportunity | Peluang Bisnis untuk Ibu",
    description: "Bergabung dengan Tim Risca Agustine. Peluang karir sebagai Financial Consultant untuk ibu rumah tangga di Jakarta.",
    images: ['/og.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  keywords: [
    'risca agustine',
    'financial consultant',
    'business partner',
    'peluang bisnis ibu rumah tangga',
    'konsultan keuangan jakarta',
    'penghasilan tambahan ibu',
    'bisnis sambilan ibu',
    'mentoring bisnis jakarta',
    'tim bisnis jakarta',
    'ibu produktif jakarta',
    'bisnis fleksibel ibu',
    'karir ibu rumah tangga'
  ],
  authors: [{ name: 'Risca Agustine' }],
  creator: 'Risca Agustine',
  publisher: 'Risca Agustine Team',
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
              "jobTitle": "Financial Consultant Leader & Mentor",
              "description": "Leader Tim Risca Agustine Jakarta yang berdedikasi membantu ibu rumah tangga meraih penghasilan tambahan melalui karir Financial Consultant.",
              "url": "https://your-domain.com",
              "image": "https://your-domain.com/images/risca-agustine.png",
              "worksFor": {
                "@type": "Organization",
                "name": "Risca Agustine Team",
                "description": "Tim Financial Consultant Jakarta yang fokus pada pemberdayaan ibu rumah tangga untuk sukses dalam bisnis."
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
              "knowsAbout": ["Financial Planning", "Mentoring Bisnis", "Pemberdayaan Ibu"],
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
              "name": "Risca Agustine Team",
              "description": "Tim Financial Consultant Jakarta yang dipimpin Risca Agustine. Fokus pada peluang bisnis untuk ibu rumah tangga yang ingin penghasilan tambahan.",
              "url": "https://your-domain.com",
              "logo": "https://your-domain.com/images/risca-logo.png",
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
                "https://www.instagram.com/risca.agustine",
                "https://www.facebook.com/risca.agustine"
              ],
              "serviceType": "Financial Consultant Career Opportunities",
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
              "name": "Risca Agustine - Financial Consultant",
              "url": "https://your-domain.com",
              "description": "Website resmi Risca Agustine. Peluang karir Financial Consultant untuk ibu rumah tangga.",
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
