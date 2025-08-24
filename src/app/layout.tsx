import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn, constructMetadata } from "@/lib/utils";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = constructMetadata({
  metadataBase: new URL('https://templatepro.com'),
  title: "Template Pro - Premium Business Templates & Solutions",
  description: "Discover premium business templates and professional solutions. Elevate your brand with our cutting-edge designs and comprehensive business tools.",
  openGraph: {
    title: "Template Pro - Premium Business Templates & Solutions",
    description: "Discover premium business templates and professional solutions. Elevate your brand with our cutting-edge designs and comprehensive business tools.",
    url: 'https://templatepro.com',
    siteName: 'Template Pro',
    images: [
      {
        url: '/thumb.png',
        width: 1200,
        height: 630,
        alt: 'Template Pro - Premium Business Templates',
        type: 'image/png',
      },
      {
        url: '/thumb-square.png',
        width: 600,
        height: 600,
        alt: 'Template Pro - Premium Business Templates',
        type: 'image/png',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  other: {
    'og:image:secure_url': 'https://templatepro.com/thumb.png',
    'og:image:type': 'image/png',
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:locale': 'en_US',
    'og:site_name': 'Template Pro',
    'og:title': 'Template Pro - Premium Business Templates & Solutions',
    'og:description': 'Discover premium business templates and professional solutions. Elevate your brand with our cutting-edge designs and comprehensive business tools.',
    'og:url': 'https://templatepro.com?v=1',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Template Pro - Premium Business Templates & Solutions",
    description: "Discover premium business templates and professional solutions. Elevate your brand with our cutting-edge designs and comprehensive business tools.",
    images: ['/thumb.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  keywords: [
    'business templates',
    'premium templates',
    'professional solutions',
    'corporate design',
    'business tools',
    'template pro'
  ],
  authors: [{ name: 'Template Pro Team' }],
  creator: 'Template Pro',
  publisher: 'Template Pro',
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
