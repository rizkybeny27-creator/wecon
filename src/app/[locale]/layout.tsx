import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const overusedGrotesk = localFont({
  src: [
    {
      path: "../../../public/fonts/OverusedGrotesk-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/OverusedGrotesk-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-overused-grotesk",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://weconsultant.id';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PT. WECON - Water Resources Engineering Consultant",
    template: "%s | PT. WECON"
  },
  description: "PT Wecon is Indonesia's trusted Water Engineering Consultant since 1973. We specialize in dam design, irrigation, hydropower, and construction supervision.",
  keywords: [
    "PT WECON",
    "Water Resources Engineering",
    "Water Engineering Consultant Indonesia",
    "Dam Design Consultant",
    "Hydropower Engineering",
    "Irrigation Engineering",
    "Geotechnical Investigation",
    "Topographic Survey",
    "Konsultan Teknik Pengairan",
    "Konsultan Bendungan Indonesia"
  ],
  authors: [{ name: "PT. WECON" }],
  creator: "PT. WECON",
  publisher: "PT. WECON",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: "google55a6da75d36e63eb",
  },
  alternates: {
    canonical: './',
    languages: {
      'en': '/en',
      'id': '/id',
      'zh': '/zh',
      'x-default': '/en',
    },
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
  openGraph: {
    title: "PT. WECON - Water Resources Engineering Consultant",
    description: "Indonesia's trusted Water Engineering Consultant since 1973. Specializing in dam design, irrigation, hydropower, and construction supervision.",
    url: siteUrl,
    siteName: "PT. WECON",
    images: [
      {
        url: "/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "PT. WECON Water Resources Engineering",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PT. WECON - Water Resources Engineering Consultant",
    description: "Indonesia's trusted Water Engineering Consultant since 1973.",
    images: ["/hero-bg.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "PT. WECON",
  "url": siteUrl,
  "logo": `${siteUrl}/logo-black.png`,
  "image": `${siteUrl}/hero-bg.jpg`,
  "description": "PT Wecon is Indonesia's trusted Water Engineering Consultant since 1973. Specializing in dam design, irrigation, hydropower, and construction supervision.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Sidoarjo",
    "addressRegion": "East Java",
    "addressCountry": "ID"
  },
  "telephone": "+6281234878660",
  "priceRange": "$$$"
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  if (!(routing.locales as readonly string[]).includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${ibmPlexMono.variable} ${overusedGrotesk.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider messages={messages}>
          {children}
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
