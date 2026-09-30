'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Language } from '@/content/types';

interface LanguageSwitcherProps {
  currentLang: Language;
  variant?: 'light' | 'dark';
  className?: string;
  size?: 'sm' | 'md';
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ 
  currentLang, 
  variant = 'light',
  className = '',
  size = 'md',
}) => {
  const pathname = usePathname() || '/';
  const [hash, setHash] = useState('');

  // Track hash on client if present (e.g. #languages, #brain)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHash(window.location.hash || '');
      const handleHashChange = () => setHash(window.location.hash || '');
      window.addEventListener('hashchange', handleHashChange);
      return () => window.removeEventListener('hashchange', handleHashChange);
    }
  }, []);

  // Normalize path without trailing slash for matching (unless root '/')
  const normalized = pathname.length > 1 && pathname.endsWith('/') 
    ? pathname.slice(0, -1) 
    : pathname;

  // Compute corresponding language routes preserving current page
  let enPath = '/';
  let zhPath = '/zh';

  if (normalized === '/' || normalized === '/zh') {
    enPath = '/';
    zhPath = '/zh';
  } else if (normalized.startsWith('/zh/')) {
    zhPath = normalized;
    enPath = normalized.replace(/^\/zh/, '') || '/';
  } else {
    enPath = normalized;
    zhPath = `/zh${normalized}`;
  }

  // Append hash if present
  const fullEnHref = `${enPath}${hash}`;
  const fullZhHref = `${zhPath}${hash}`;

  const isLight = variant === 'light';

  const containerClasses = isLight
    ? 'bg-slate-100/90 border border-slate-200/80'
    : 'bg-white/10 border border-white/15';

  const touchPadding = size === 'sm' ? 'py-1.5 px-2.5 text-xs min-h-[36px] min-w-[34px]' : 'py-1.5 px-3 text-xs sm:text-sm min-h-[38px] min-w-[38px]';

  return (
    <div
      className={`inline-flex items-center rounded-full p-0.5 transition-colors ${containerClasses} ${className}`}
      role="group"
      aria-label="Language selector"
    >
      <Link
        href={fullEnHref}
        className={`inline-flex items-center justify-center rounded-full transition-all font-semibold ${touchPadding} ${
          currentLang === 'en'
            ? 'bg-brand-navy text-white shadow-xs'
            : isLight
            ? 'text-slate-600 hover:text-brand-navy'
            : 'text-slate-300 hover:text-white'
        }`}
        aria-current={currentLang === 'en' ? 'page' : undefined}
        aria-label="Switch to English"
      >
        EN
      </Link>
      <Link
        href={fullZhHref}
        className={`inline-flex items-center justify-center rounded-full transition-all font-semibold ${touchPadding} ${
          currentLang === 'zh'
            ? 'bg-brand-red text-white shadow-xs font-chinese'
            : isLight
            ? 'text-slate-600 hover:text-brand-red'
            : 'text-slate-300 hover:text-white font-chinese'
        }`}
        aria-current={currentLang === 'zh' ? 'page' : undefined}
        aria-label="切换至简体中文"
      >
        中文
      </Link>
    </div>
  );
};
