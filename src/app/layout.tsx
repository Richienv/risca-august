import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn, constructMetadata } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = constructMetadata({
  metadataBase: new URL('https://your-domain.com'), // Replace with your actual domain
  title: "Alife - Komunitas Bisnis Asuransi Terpercaya Indonesia",
  description: "Bergabunglah dengan Alife, komunitas bisnis asuransi terpercaya di Indonesia. Dapatkan training, mentoring, dan dukungan untuk meraih kesuksesan finansial melalui bisnis asuransi.",
  openGraph: {
    title: "Alife - Komunitas Bisnis Asuransi Terpercaya Indonesia",
    description: "Bergabunglah dengan Alife, komunitas bisnis asuransi terpercaya di Indonesia. Dapatkan training, mentoring, dan dukungan untuk meraih kesuksesan finansial.",
    url: 'https://your-domain.com', // Replace with your actual domain
    siteName: 'Alife - Bisnis Asuransi',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Alife - Komunitas Bisnis Asuransi',
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
    'og:site_name': 'Alife - Bisnis Asuransi',
    'og:title': 'Alife - Komunitas Bisnis Asuransi Terpercaya Indonesia',
    'og:description': 'Bergabunglah dengan Alife, komunitas bisnis asuransi terpercaya di Indonesia. Dapatkan training, mentoring, dan dukungan untuk meraih kesuksesan finansial.',
    'og:url': 'https://your-domain.com', // Replace with your actual domain
  },
  twitter: {
    card: 'summary_large_image',
    title: "Alife - Komunitas Bisnis Asuransi Terpercaya Indonesia",
    description: "Bergabunglah dengan Alife, komunitas bisnis asuransi terpercaya di Indonesia. Dapatkan training, mentoring, dan dukungan untuk meraih kesuksesan finansial.",
    images: ['/og.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  keywords: [
    'bisnis asuransi',
    'asuransi indonesia',
    'komunitas asuransi', 
    'training asuransi',
    'mentoring bisnis',
    'agen asuransi',
    'bisnis finansial',
    'asuransi jiwa',
    'peluang bisnis',
    'keuangan keluarga',
    'alife',
    'komunitas bisnis'
  ],
  authors: [{ name: 'Alife Team' }],
  creator: 'Alife',
  publisher: 'Alife',
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Template Pro",
              "description": "Discover premium business templates and professional solutions. Elevate your brand with our cutting-edge designs and comprehensive business tools.",
              "url": "https://templatepro.com",
              "logo": "https://templatepro.com/logo.png",
              "sameAs": [
                "https://www.twitter.com/templatepro",
                "https://www.facebook.com/templatepro",
                "https://www.instagram.com/templatepro",
                "https://www.linkedin.com/company/templatepro"
              ]
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
