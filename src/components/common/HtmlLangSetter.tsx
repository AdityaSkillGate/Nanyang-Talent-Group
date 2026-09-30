'use client';

import { useEffect } from 'react';
import { Language } from '@/content/types';

interface HtmlLangSetterProps {
  lang: Language;
}

export const HtmlLangSetter: React.FC<HtmlLangSetterProps> = ({ lang }) => {
  useEffect(() => {
    // Update HTML lang attribute to ensure screen readers, search engines, and browsers
    // correctly apply Simplified Chinese (zh-Hans) or English (en) language context.
    const targetLang = lang === 'zh' ? 'zh-Hans' : 'en';
    if (document.documentElement.lang !== targetLang) {
      document.documentElement.lang = targetLang;
    }
  }, [lang]);

  return null;
};
