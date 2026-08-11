import { Link } from "@/i18n/routing";
import React from "react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import Image from "next/image";

export default function Navbar({ theme = 'dark' }: { theme?: 'dark' | 'light' }) {
  const t = useTranslations('Navbar');
  const isLight = theme === 'light';

  const textColor = isLight ? "text-black" : "text-white";
  const pillBg = isLight ? "bg-black/5 border-black/10" : "bg-black/20 border-white/10";
  const linkText = isLight ? "text-black/70 hover:text-black hover:bg-black/5" : "text-white/80 hover:text-white hover:bg-white/10";
  const btnBg = isLight ? "bg-black text-white hover:bg-black/80" : "bg-white text-black hover:bg-white/90";
  const outlineBtn = isLight ? "border border-black/20 text-black hover:bg-black/5" : "border border-white/20 text-white hover:bg-white/10";

  return (
    <nav 
      aria-label="Main Navigation"
      className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-8"
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <Link href="/">
          <Image 
            src={isLight ? "/logo-black.png" : "/logo-white.png"} 
            alt="PT Wecon" 
            width={120}
            height={24}
            className="h-6 w-auto object-contain" 
            priority
          />
        </Link>
      </div>
      
      {/* Center Links */}
      <div className={`hidden lg:flex items-center gap-1 backdrop-blur-md rounded-full p-1 border ${pillBg}`}>
        <Link href="/#about" className={`px-4 py-2 rounded-full text-[10px] font-mono tracking-widest transition-colors uppercase ${linkText}`}>
          {t('about')}
        </Link>
        <Link href="/#expertise" className={`px-4 py-2 rounded-full text-[10px] font-mono tracking-widest transition-colors uppercase ${linkText}`}>
          {t('expertise')}
        </Link>
        <Link href="/projects" className={`px-4 py-2 rounded-full text-[10px] font-mono tracking-widest transition-colors uppercase ${linkText}`}>
          {t('projects')}
        </Link>
        <Link href="/blog" className={`px-4 py-2 rounded-full text-[10px] font-mono tracking-widest transition-colors uppercase ${linkText}`}>
          {t('newsroom')}
        </Link>
      </div>
      
      {/* Right Button & Switcher */}
      <div className="hidden md:flex items-center gap-4">
        <div className="flex items-center">
           <LanguageSwitcher className={`px-4 py-2.5 rounded-md font-mono font-bold text-[10px] tracking-widest uppercase transition-colors ${outlineBtn}`} />
        </div>
        <Link href="https://wa.me/6281234878660" className={`px-6 py-2.5 rounded-md font-mono font-bold text-[10px] tracking-widest uppercase transition-colors inline-block ${btnBg}`}>
          {t('contact_us')}
        </Link>
      </div>
    </nav>
  );
}
