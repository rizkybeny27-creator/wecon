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

  const META: Record<string, { title: string; description: string; keywords: string[]; ogLocale: string }> = {
    en: {
      title: "PT WECON - Water Resources Engineering & Licensing Consultant Indonesia",
      description: "PT Wecon is Indonesia's trusted Water Engineering Consultant since 1973. Specializing in river diversion permits, water intake licensing (SIPPA), dam design, and construction supervision.",
      keywords: [
        "PT WECON",
        "Water Resources Engineering",
        "Water Engineering Consultant Indonesia",
        "River Diversion Permit Indonesia",
        "SIPPA Water Permit",
        "Dam Design Consultant",
        "Hydropower Engineering",
      ],
      ogLocale: "en_US",
    },
    id: {
      title: "PT WECON - Konsultan Rekayasa Sumber Daya Air & Perijinan Sungai Indonesia",
      description: "PT WECON adalah konsultan teknik pengairan terpercaya sejak 1973. Melayani Perijinan Pengalihan Sungai (Permen PUPR No. 4/2024), Perijinan Pengambilan Sungai (SIPPA / SIP SDA), dan Sertifikasi Pembangunan Bendungan.",
      keywords: [
        "Perijinan Pengalihan Sungai",
        "Perijinan Pengambilan Sungai",
        "Perijinan Pembangunan Bendungan",
        "SIPPA",
        "SIP SDA Kementerian PUPR",
        "Permen PUPR No 4 Tahun 2024",
        "Konsultan Teknik Pengairan",
        "Konsultan Bendungan Indonesia",
        "PT WECON",
        "Rekayasa Sumber Daya Air",
      ],
      ogLocale: "id_ID",
    },
    zh: {
      title: "PT WECON - 印尼水利工程与许可咨询顾问",
      description: "PT Wecon 自 1973 年起为印尼领先的水利工程顾问，专注于河流改道许可 (PUPR 2024年第4号条例)、地表水取水许可 (SIPPA)、大坝设计、建设与施工监理。",
      keywords: [
        "PT WECON",
        "印尼水利咨询顾问",
        "河流改道许可",
        "地表水取水许可 SIPPA",
        "大坝建设许可",
        "水资源工程",
        "大坝设计咨询",
      ],
      ogLocale: "zh_CN",
    },
  };

  const meta = META[locale] || META.en;

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: meta.title,
      template: "%s | PT. WECON"
    },
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: "PT. WECON" }],
    creator: "PT. WECON",
    publisher: "PT. WECON",
    verification: {
      google: "google55a6da75d36e63eb",
    },
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages: {
        'en': `${siteUrl}/en`,
        'id': `${siteUrl}/id`,
        'zh': `${siteUrl}/zh`,
        'x-default': `${siteUrl}/en`,
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
      title: meta.title,
      description: meta.description,
      url: `${siteUrl}/${locale}`,
      siteName: "PT. WECON",
      images: [
        {
          url: `${siteUrl}/hero-bg.jpg`,
          width: 1200,
          height: 630,
          alt: "PT. WECON Water Resources Engineering",
        },
      ],
      locale: meta.ogLocale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [`${siteUrl}/hero-bg.jpg`],
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

  const jsonLdDesc: Record<string, string> = {
    en: "Water Resources Engineering & Permitting Consultant in Indonesia. 33+ years of experience in river diversion licensing, surface water usage (SIPPA), and dam safety certification.",
    id: "Konsultan Teknik Pengairan & Perizinan Sumber Daya Air di Indonesia. Pengalaman 33+ tahun dalam perizinan pengalihan sungai, pengusahaan air permukaan (SIPPA), dan sertifikasi bendungan.",
    zh: "印尼水资源工程与许可咨询顾问。拥有 33 年以上经验，涵盖河流改道许可、地表水取用 (SIPPA) 和大坝安全认证。",
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "PT. WECON (Water Resources Engineering Consultant)",
    "url": siteUrl,
    "logo": `${siteUrl}/logo-black.png`,
    "image": `${siteUrl}/hero-bg.jpg`,
    "description": jsonLdDesc[locale] || jsonLdDesc.en,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Sidoarjo",
      "addressRegion": "Jawa Timur",
      "addressCountry": "ID"
    },
    "telephone": "+6281234878660",
    "priceRange": "$$$",
    "areaServed": { "@type": "Country", "name": "Indonesia" },
    "sameAs": [siteUrl],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Water Resources Permitting Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Perijinan Pengalihan Sungai" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Perijinan Pengambilan Sungai & SIPPA" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Perijinan Pembangunan Bendungan" } }
      ]
    },
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
