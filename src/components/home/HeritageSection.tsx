import React from 'react';
import Link from 'next/link';
import { Language } from '@/content/types';
import { uiTranslations } from '@/content/translations';
import { ArrowRight, Brush, Sparkles } from 'lucide-react';

interface HeritageSectionProps {
  lang: Language;
}

export const HeritageSection: React.FC<HeritageSectionProps> = ({ lang }) => {
  const t = uiTranslations;
  const prefix = lang === 'zh' ? '/zh' : '';

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-brand-navy-dark via-brand-navy to-brand-navy-deep text-white py-20 lg:py-24 border-b border-surface-border">
      {/* Decorative backdrop glow */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-gold via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heritage Typography */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-brand-gold text-xs font-semibold tracking-wide">
              <Brush className="w-3.5 h-3.5 text-brand-gold" />
              <span>{t.heritage.badge[lang]}</span>
            </div>

            <div className="space-y-2">
              <h2 className="text-xs uppercase tracking-widest text-brand-gold font-bold">
                {t.heritage.overhead[lang]}
              </h2>
              <div className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-chinese">
                {t.heritage.title[lang]}
              </div>
            </div>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
              {t.heritage.desc[lang]}
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href={`${prefix}/art-courses/chinese-calligraphy`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-brand-red hover:bg-brand-red-hover text-white transition-all shadow-md"
              >
                <span>{t.heritage.calligraphyBtn[lang]}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={`${prefix}/art-courses/chinese-painting`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
              >
                <span>{t.heritage.paintingBtn[lang]}</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Editorial Visual Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-white/5 border border-white/15 p-8 rounded-2xl backdrop-blur-sm space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs uppercase tracking-wider text-brand-gold font-bold">
                    {lang === 'zh' ? '五体书法传承' : 'Five Traditional Scripts'}
                  </span>
                  <span className="text-xs text-slate-400">Regular to Cursive</span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="p-3 rounded bg-white/5 border border-white/10">
                    <span className="font-bold text-white block">楷书 Kaishu</span>
                    <span className="text-xs text-slate-400">Regular Script</span>
                  </div>
                  <div className="p-3 rounded bg-white/5 border border-white/10">
                    <span className="font-bold text-white block">隶书 Lishu</span>
                    <span className="text-xs text-slate-400">Official Script</span>
                  </div>
                  <div className="p-3 rounded bg-white/5 border border-white/10">
                    <span className="font-bold text-white block">行书 Xingshu</span>
                    <span className="text-xs text-slate-400">Running Script</span>
                  </div>
                  <div className="p-3 rounded bg-white/5 border border-white/10">
                    <span className="font-bold text-white block">草书 Caoshu</span>
                    <span className="text-xs text-slate-400">Cursive Hand</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 space-y-2">
                <span className="text-xs uppercase tracking-wider text-brand-blue-light font-bold block">
                  {lang === 'zh' ? '国画三大技法' : 'Chinese Painting Traditions'}
                </span>
                <p className="text-xs text-slate-300">
                  {lang === 'zh'
                    ? '写意 (Xieyi) • 工笔 (Gongbi) • 泼墨 (Pomo)'
                    : 'Freehand Style (Xieyi) • Fine-Brush (Gongbi) • Splash-Ink (Pomo)'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
