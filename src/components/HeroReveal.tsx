import React from "react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function HeroReveal() {
  const t = useTranslations('Hero');

  return (
    <div className="relative z-10 w-full max-w-[1000px] mx-auto px-6 text-center mt-20 flex flex-col items-center">
      <h1 className="text-[32px] md:text-[60px] lg:text-[72px] font-heading text-white leading-[1.1] tracking-tight drop-shadow-md">
        {t('title')}
      </h1>
      
      <p className="mt-6 text-[15px] md:text-[17px] text-white/90 leading-[1.7] max-w-[650px] font-sans drop-shadow">
        {t('subtitle')}
      </p>
      
      <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
        <Link href="#contact" className="bg-white text-black px-6 py-3 rounded-md font-mono font-bold text-[10px] tracking-widest uppercase hover:bg-white/90 transition-colors flex items-center gap-2">
          {t('work_with_us')} <span>↗</span>
        </Link>
        <Link href="#expertise" className="bg-transparent text-white border border-white/30 px-6 py-3 rounded-md font-mono font-bold text-[10px] tracking-widest uppercase hover:bg-white/10 transition-colors">
          {t('our_services')}
        </Link>
      </div>
    </div>
  );
}
