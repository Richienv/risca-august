import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn, constructMetadata } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = constructMetadata({
  metadataBase: new URL('https://marthateja.com'),
  title: "Join Martha Insurance Business Community",
  description: "Join our thriving insurance business community. Learn, grow, and succeed together with Martha's mentorship and support network.",
  openGraph: {
    title: "Join Martha Insurance Business Community",
    description: "Join our thriving insurance business community. Learn, grow, and succeed together with Martha's mentorship and support network.",
    url: 'https://marthateja.com',
    siteName: 'Martha Insurance Business Community',
    images: [
      {
        url: '/thumb.png',
        width: 1200,
        height: 630,
        alt: 'Martha Insurance Business Community',
        type: 'image/png',
      },
      {
        url: '/thumb-square.png',
        width: 600,
        height: 600,
        alt: 'Martha Insurance Business Community',
        type: 'image/png',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  other: {
    'og:image:secure_url': 'https://marthateja.com/thumb.png',
    'og:image:type': 'image/png',
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:locale': 'id_ID',
    'og:site_name': 'Martha Insurance Business Community',
    'og:title': 'Join Martha Insurance Business Community',
    'og:description': 'Join our thriving insurance business community. Learn, grow, and succeed together with Martha\'s mentorship and support network.',
    'og:url': 'https://marthateja.com?v=1',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Join Martha Insurance Business Community",
    description: "Join our thriving insurance business community. Learn, grow, and succeed together with Martha's mentorship and support network.",
    images: ['/thumb.png'], // Same image as OpenGraph
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  keywords: [
    'insurance business',
    'Martha insurance',
    'business community',
    'insurance mentorship',
    'financial freedom',
    'business opportunity'
  ],
  authors: [{ name: 'Martha' }],
  creator: 'Martha',
  publisher: 'Martha Insurance Business Community',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    // Add your site verification tokens if you have them
    google: 'your-google-site-verification',
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
              "name": "Martha Insurance Business Community",
              "description": "Join our thriving insurance business community. Learn, grow, and succeed together with Martha's mentorship and support network.",
              "url": "https://your-domain.com",
              "logo": "https://your-domain.com/logo.png",
              "sameAs": [
                "https://www.facebook.com/your-page",
                "https://www.instagram.com/your-profile",
                // Add other social media links
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
