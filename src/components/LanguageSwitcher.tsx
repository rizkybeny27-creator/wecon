'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { useState, useRef, useEffect } from 'react';

const LOCALES = [
  { code: 'en', label: 'EN' },
  { code: 'id', label: 'ID' },
  { code: 'zh', label: '中文' },
];

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLocaleChange = (nextLocale: string) => {
    router.replace(pathname, { locale: nextLocale });
    setIsOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const activeLocaleLabel = LOCALES.find(l => l.code === locale)?.label || 'EN';

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between gap-3 whitespace-nowrap outline-none cursor-pointer ${className}`}
      >
        <span>{activeLocaleLabel}</span>
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={`opacity-70 transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-white border border-black/5 rounded-md shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] py-1.5 min-w-[100px] z-50 flex flex-col overflow-hidden">
          {LOCALES.map((l) => (
            <button
              key={l.code}
              type="button"
              onClick={() => handleLocaleChange(l.code)}
              className={`w-full text-left px-4 py-2.5 text-[10px] font-mono font-bold tracking-widest uppercase transition-colors hover:bg-black/5 ${
                locale === l.code ? 'text-black bg-black/5' : 'text-black/60'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
