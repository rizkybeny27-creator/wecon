"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Navbar({ theme = 'dark' }: { theme?: 'dark' | 'light' }) {
  const isLight = theme === 'light';

  const textColor = isLight ? "text-black" : "text-white";
  const pillBg = isLight ? "bg-black/5 border-black/10" : "bg-black/20 border-white/10";
  const linkText = isLight ? "text-black/70 hover:text-black hover:bg-black/5" : "text-white/80 hover:text-white hover:bg-white/10";
  const btnBg = isLight ? "bg-black text-white hover:bg-black/80" : "bg-white text-black hover:bg-white/90";

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (!element) return;

    const targetPosition = element.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1200;
    let start: number | null = null;

    const easeInOutQuart = (t: number) => t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const t = Math.min(progress / duration, 1);
      const ease = easeInOutQuart(t);

      window.scrollTo(0, startPosition + distance * ease);
      if (progress < duration) window.requestAnimationFrame(step);
    };

    window.requestAnimationFrame(step);
  };

  return (
    <motion.nav 
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-8"
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <Link href="/">
          <img 
            src={isLight ? "/logo-black.png" : "/logo-white.png"} 
            alt="PT Wecon" 
            className="h-6 object-contain" 
          />
        </Link>
      </div>
      
      {/* Center Links */}
      <div className={`hidden lg:flex items-center gap-1 backdrop-blur-md rounded-full p-1 border ${pillBg}`}>
        <Link href="/#about" onClick={(e) => handleScroll(e, 'about')} className={`px-4 py-2 rounded-full text-[10px] font-mono tracking-widest transition-colors uppercase ${linkText}`}>
          About
        </Link>
        <Link href="/#expertise" onClick={(e) => handleScroll(e, 'expertise')} className={`px-4 py-2 rounded-full text-[10px] font-mono tracking-widest transition-colors uppercase ${linkText}`}>
          Our Expertise
        </Link>
        <Link href="/projects" className={`px-4 py-2 rounded-full text-[10px] font-mono tracking-widest transition-colors uppercase ${linkText}`}>
          Projects
        </Link>
        <Link href="/blog" className={`px-4 py-2 rounded-full text-[10px] font-mono tracking-widest transition-colors uppercase ${linkText}`}>
          Newsroom
        </Link>
      </div>
      
      {/* Right Button */}
      <div className="hidden md:block">
        <Link href="/#contact" onClick={(e) => handleScroll(e, 'contact')} className={`px-6 py-2.5 rounded-md font-mono font-bold text-[10px] tracking-widest uppercase transition-colors inline-block ${btnBg}`}>
          Contact Us
        </Link>
      </div>
    </motion.nav>
  );
}
