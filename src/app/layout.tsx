import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

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
      path: "../../public/fonts/OverusedGrotesk-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/OverusedGrotesk-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-overused-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PT. WECON - Water Resources Engineering Consultant",
  description: "Indonesia's Trusted Water Resources Engineering Consultant Since 1973. Specializing in dam design, irrigation, hydropower, and construction supervision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${ibmPlexMono.variable} ${overusedGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
