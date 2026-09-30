'use client';

import React from 'react';
import Link from 'next/link';
import { Language } from '@/content/types';
import { siteConfig } from '@/data/site-config';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';

interface MobileStickyCtaProps {
  lang: Language;
}

export const MobileStickyCta: React.FC<MobileStickyCtaProps> = ({ lang }) => {
  const prefix = lang === 'zh' ? '/zh' : '';

  return (
    <aside 
      aria-label={lang === 'zh' ? '移动端快捷联系栏' : 'Mobile Quick Contact Bar'}
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-surface-border px-4 py-2 lg:hidden shadow-[0_-4px_12px_rgba(0,0,0,0.06)]"
    >
      <div className="max-w-md mx-auto flex items-center gap-3">
        {/* WhatsApp Admissions Direct */}
        <a
          href={siteConfig.contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 min-h-[44px] rounded-lg text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
          aria-label="WhatsApp Admissions"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
          <span className="truncate">{lang === 'zh' ? 'WhatsApp 咨询' : 'WhatsApp Us'}</span>
        </a>

        {/* Enquire Now CTA */}
        <Link
          href={`${prefix}/contact`}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 min-h-[44px] rounded-lg text-xs font-semibold text-white bg-brand-red hover:bg-brand-red-hover transition-colors shadow-xs"
        >
          <span>{lang === 'zh' ? '在线报名' : 'Enquire Now'}</span>
          <ArrowRight className="w-3.5 h-3.5 shrink-0" />
        </Link>
      </div>
    </aside>
  );
};
