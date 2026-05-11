import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://cdn-base.vercel.app'),
  
  title: {
    default: 'CDN BaseJS - Database Operations via Simple API Calls',
    template: '%s | CDN BaseJS',
  },
  
  description: 'Revolutionary way to interact with databases through simple URL/API calls. No external modules, no installations, no configurations. Pure simplicity for modern developers.',
  
  keywords: [
    'CDN BaseJS',
    'database API',
    'API database operations',
    'CDN database',
    'no external modules',
    'database via URL',
    'API calls database',
    'lightweight database',
    'zero dependencies database',
    'REST API database',
    'database without SDK',
    'simple database API',
    'web database',
    'cloud database',
    'serverless database',
    'HTTP database',
    'URL based database',
    'API first database',
    'developer tools',
    'database as a service',
  ],
  
  authors: [
    { 
      name: 'Aditya Rawat',
      url: 'https://www.linkedin.com/in/aditya-rawat-3862182b0/'
    }
  ],
  
  creator: 'Aditya Rawat',
  publisher: 'CDN BaseJS',
  
  applicationName: 'CDN BaseJS',
  
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cdn-base.vercel.app',
    title: 'CDN BaseJS - Database Operations via Simple API Calls',
    description: 'Perform database operations using simple URL/API calls without any external modules. Revolutionary simplicity for developers.',
    siteName: 'CDN BaseJS',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CDN BaseJS - Database Operations Simplified',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'CDN BaseJS - Database Operations via Simple API Calls',
    description: 'Perform database operations using simple URL/API calls without any external modules.',
    creator: '@adityarawatx1',
    images: ['/og-image.png'],
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
  
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png' },
      { url: '/apple-icon-180.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'icon',
        url: '/next.svg',
      },
    ],
  },
  
  manifest: '/manifest.json',
  
  category: 'technology',
  
  alternates: {
    canonical: 'https://cdn-base.vercel.app',
  },
  
  verification: {
    google: "ff4973360a1fe5d8",
    //  '7901DF3BE70A0B98851CAFDB22E39542'
  },
  
  other: {
    'application-name': 'CDN BaseJS',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'CDN BaseJS',
    'format-detection': 'telephone=no',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Additional meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="msvalidate.01" content="7901DF3BE70A0B98851CAFDB22E39542" />
        <link rel="canonical" href="https://cdn-base.vercel.app" />
      </head>
      <body className="min-h-full flex flex-col bg-zinc-950">{children}</body>
    </html>
  );
}