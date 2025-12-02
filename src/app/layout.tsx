import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { companyInfo } from "@/lib/constants";
import { generateOrganizationSchema, generateServicesSchema, generateFAQSchema } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Base metadata for the site
export const metadata: Metadata = {
  title: {
    default: `${companyInfo.name} (CLNL) | Logistics, Freight & Customs Clearing Nigeria`,
    template: `%s | ${companyInfo.name}`,
  },
  description: companyInfo.description,
  keywords: [
    'logistics company Nigeria',
    'freight forwarding Lagos',
    'customs clearing agent',
    'agro export Nigeria',
    'warehousing Lagos',
    'facilities management Nigeria',
    'shipping company Lagos',
    'clearing and forwarding Nigeria',
    'supply chain Nigeria',
    'CLNL logistics',
  ],
  authors: [{ name: companyInfo.name }],
  creator: companyInfo.name,
  publisher: companyInfo.name,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://clnl.com.ng'),
  icons: {
    icon: '/images/favicon.png',
    shortcut: '/images/favicon.png',
    apple: '/images/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: '/',
    siteName: companyInfo.name,
    title: `${companyInfo.name} | Logistics, Freight & Customs Clearing Nigeria`,
    description: companyInfo.description,
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: `${companyInfo.name} Logo`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${companyInfo.name} | Logistics, Freight & Customs Clearing Nigeria`,
    description: companyInfo.description,
    images: ['/images/logo.png'],
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

// Viewport configuration
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://clnl.com.ng';
  
  // Generate JSON-LD structured data
  const organizationSchema = generateOrganizationSchema(siteUrl);
  const servicesSchema = generateServicesSchema();
  const faqSchema = generateFAQSchema();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
