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

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isId = locale === 'id';

  const title = isId 
    ? "PT WECON - Konsultan Rekayasa Sumber Daya Air & Perijinan Sungai Indonesia"
    : "PT WECON - Water Resources Engineering & Licensing Consultant Indonesia";

  const description = isId
    ? "PT WECON adalah konsultan teknik pengairan terpercaya sejak 1973. Melayani Perijinan Pengalihan Sungai (Permen PUPR No. 4/2024), Perijinan Pengambilan Sungai (SIPPA / SIP SDA), dan Sertifikasi Pembangunan Bendungan."
    : "PT Wecon is Indonesia's trusted Water Engineering Consultant since 1973. Specializing in river diversion permits, water intake licensing, dam design, and construction supervision.";

  const keywords = isId ? [
    "Perijinan Pengalihan Sungai",
    "Perijinan Pengambilan Sungai",
    "Perijinan Pembangunan Bendungan",
    "SIPPA",
    "SIP SDA Kementerian PUPR",
    "Permen PUPR No 4 Tahun 2024",
    "Konsultan Teknik Pengairan",
    "Konsultan Bendungan Indonesia",
    "PT WECON",
    "Rekayasa Sumber Daya Air"
  ] : [
    "PT WECON",
    "Water Resources Engineering",
    "Water Engineering Consultant Indonesia",
    "Dam Design Consultant",
    "Hydropower Engineering",
    "River Diversion Permit Indonesia",
    "SIPPA Water Permit"
  ];

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: title,
      template: "%s | PT. WECON"
    },
    description: description,
    keywords: keywords,
    authors: [{ name: "PT. WECON" }],
    creator: "PT. WECON",
    publisher: "PT. WECON",
    verification: {
      google: "google55a6da75d36e63eb",
    },
    alternates: {
      canonical: `https://weconsultant.id/${locale}`,
      languages: {
        'en': 'https://weconsultant.id/en',
        'id': 'https://weconsultant.id/id',
        'zh': 'https://weconsultant.id/zh',
        'x-default': 'https://weconsultant.id/en',
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
      title: title,
      description: description,
      url: `${siteUrl}/${locale}`,
      siteName: "PT. WECON",
      images: [
        {
          url: "/hero-bg.jpg",
          width: 1200,
          height: 630,
          alt: "PT. WECON Water Resources Engineering",
        },
      ],
      locale: isId ? "id_ID" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: ["/hero-bg.jpg"],
    },
  };
}

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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "PT. WECON (Water Resources Engineering Consultant)",
    "url": siteUrl,
    "logo": `${siteUrl}/logo-black.png`,
    "image": `${siteUrl}/hero-bg.jpg`,
    "description": "Konsultan Teknik Pengairan & Perizinan Sumber Daya Air di Indonesia. Pengalaman 33+ tahun dalam perizinan pengalihan sungai, pengusahaan air permukaan (SIPPA), dan sertifikasi bendungan.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Sidoarjo",
      "addressRegion": "Jawa Timur",
      "addressCountry": "ID"
    },
    "telephone": "+6281234878660",
    "priceRange": "$$$",
    "knowsAbout": [
      "Perijinan Pengalihan Sungai",
      "Perijinan Pengambilan Sungai",
      "Perijinan Pembangunan Bendungan",
      "SIPPA",
      "Permen PUPR No. 4 Tahun 2024",
      "Rekayasa Sumber Daya Air"
    ]
  };

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
