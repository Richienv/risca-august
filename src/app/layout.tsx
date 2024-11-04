import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn, constructMetadata } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = constructMetadata({
  title: "Join Martha Insurance Business Community",
  description: "Join our thriving insurance business community. Learn, grow, and succeed together with Martha's mentorship and support network.",
  openGraph: {
    title: "Join Martha Insurance Business Community",
    description: "Join our thriving insurance business community. Learn, grow, and succeed together with Martha's mentorship and support network.",
    url: 'https://marthateja.com',
    siteName: 'Martha Insurance Business Community',
    images: [
      {
        url: '/thumb.png', // Put your preview image in public folder
        width: 1200,
        height: 630,
        alt: 'Martha Insurance Business Community',
      },
    ],
    locale: 'id_ID',
    type: 'website',
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
