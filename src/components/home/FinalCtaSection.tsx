import React from 'react';
import Link from 'next/link';
import { Language } from '@/content/types';
import { uiTranslations } from '@/content/translations';
import { siteConfig } from '@/data/site-config';
import { ArrowRight, Phone, MessageCircle, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface FinalCtaSectionProps {
  lang: Language;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ lang }) => {
  const t = uiTranslations;
  const prefix = lang === 'zh' ? '/zh' : '';

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-navy-dark via-brand-navy to-brand-navy-deep text-white py-20 lg:py-24 border-b border-surface-border">
      {/* Decorative ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl pointer-events-none" />

      {/* SVG Background Arc Motifs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none opacity-20">
        <svg 
          className="absolute -right-24 top-1/2 -translate-y-1/2 w-[700px] h-[700px] text-white" 
          viewBox="0 0 700 700" 
          fill="none" 
          aria-hidden="true"
        >
          <circle cx="350" cy="350" r="280" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" />
          <circle cx="350" cy="350" r="220" stroke="#C7A04B" strokeWidth="1.5" strokeDasharray="6 6" />
          <circle cx="350" cy="350" r="160" stroke="#1FA7D6" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        {/* Micro badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-brand-gold text-xs font-semibold tracking-wide">
          <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
          <span>
            {t.sinceBadge[lang]} • {t.institutionalStandard[lang]}
          </span>
        </div>

        {/* Main Title */}
        <div className="space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {t.finalCta.title[lang]}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {t.finalCta.subtitle[lang]}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          {/* Primary WhatsApp Button */}
          <a
            href={siteConfig.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-md hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5 text-emerald-900" />
            <span>{t.finalCta.primaryBtn[lang]}</span>
          </a>

          {/* Secondary Enquire Button */}
          <Link
            href={`${prefix}/contact`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white bg-brand-red hover:bg-brand-red-hover transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <span>{t.finalCta.secondaryBtn[lang]}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Value Reassurance Badges */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-300 font-medium">
          {t.finalCta.features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-brand-gold" />
              <span>{feature[lang]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
