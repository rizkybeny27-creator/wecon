'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { ChangeEvent } from 'react';

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    router.replace(pathname, { locale: nextLocale });
  };
  return (
    <div className="relative inline-block">
      <select
        value={locale}
        onChange={handleLocaleChange}
        className={`appearance-none outline-none cursor-pointer pr-8 ${className}`}
      >
        <option value="en" className="text-black bg-white">EN</option>
        <option value="id" className="text-black bg-white">ID</option>
        <option value="zh" className="text-black bg-white">中文</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="opacity-70">
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
}
