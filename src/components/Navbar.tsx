"use client";

import { Link } from "@/i18n/routing";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import Image from "next/image";

export default function Navbar({ theme = 'dark' }: { theme?: 'dark' | 'light' }) {
  const t = useTranslations('Navbar');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isLight = theme === 'light';

  const textColor = isLight ? "text-black" : "text-white";
  const pillBg = isLight ? "bg-black/5 border-black/10" : "bg-black/20 border-white/10";
  const linkText = isLight ? "text-black/70 hover:text-black hover:bg-black/5" : "text-white/80 hover:text-white hover:bg-white/10";
  const btnBg = isLight ? "bg-black text-white hover:bg-black/80" : "bg-white text-black hover:bg-white/90";
  const outlineBtn = isLight ? "border border-black/20 text-black hover:bg-black/5" : "border border-white/20 text-white hover:bg-white/10";

  return (
    <nav 
      aria-label="Main Navigation"
      className="absolute top-0 left-0 w-full z-50 px-6 md:px-12 py-8"
    >
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            <Image 
              src={(isLight || isMobileMenuOpen) ? "/logo-black.png" : "/logo-white.png"} 
              alt="PT Wecon" 
              width={120}
              height={24}
              className="h-6 w-auto object-contain relative z-[60] transition-all" 
              priority
            />
          </Link>
        </div>
        
        {/* Center Links (Desktop) */}
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
        
        {/* Right Button & Switcher (Desktop) */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center">
             <LanguageSwitcher className={`px-4 py-2.5 rounded-md font-mono font-bold text-[10px] tracking-widest uppercase transition-colors ${outlineBtn}`} />
          </div>
          <Link href="https://wa.me/6281234878660" className={`px-6 py-2.5 rounded-md font-mono font-bold text-[10px] tracking-widest uppercase transition-colors inline-block ${btnBg}`}>
            {t('contact_us')}
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className={`lg:hidden relative z-[60] p-2 -mr-2 transition-colors ${isMobileMenuOpen ? 'text-black' : textColor}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isMobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col pt-28 px-6 pb-8 lg:hidden animate-in fade-in duration-300">
          <div className="flex flex-col gap-6 text-black mt-4">
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/#about" className="text-3xl font-heading tracking-tight border-b border-black/10 pb-4">
              {t('about')}
            </Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/#expertise" className="text-3xl font-heading tracking-tight border-b border-black/10 pb-4">
              {t('expertise')}
            </Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/projects" className="text-3xl font-heading tracking-tight border-b border-black/10 pb-4">
              {t('projects')}
            </Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/blog" className="text-3xl font-heading tracking-tight border-b border-black/10 pb-4">
              {t('newsroom')}
            </Link>
          </div>
          
          <div className="mt-auto flex flex-col gap-4">
            <div className="flex w-full">
               <LanguageSwitcher className="w-full justify-between px-6 py-4 rounded-xl font-mono font-bold text-[12px] tracking-widest uppercase transition-colors border border-black/20 text-black hover:bg-black/5" />
            </div>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="https://wa.me/6281234878660" className="w-full text-center px-6 py-4 rounded-xl font-mono font-bold text-[12px] tracking-widest uppercase transition-colors bg-black text-white hover:bg-black/90">
              {t('contact_us')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
