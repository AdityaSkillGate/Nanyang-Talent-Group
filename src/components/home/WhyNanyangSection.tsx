import React from 'react';
import Link from 'next/link';
import { Language } from '@/content/types';
import { uiTranslations } from '@/content/translations';
import { siteConfig } from '@/data/site-config';
import { ArrowRight, CheckCircle2, ShieldCheck, HeartHandshake, Compass } from 'lucide-react';

interface WhyNanyangSectionProps {
  lang: Language;
}

export const WhyNanyangSection: React.FC<WhyNanyangSectionProps> = ({ lang }) => {
  const t = uiTranslations;
  const prefix = lang === 'zh' ? '/zh' : '';
  const stats = siteConfig.stats;

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Purpose & Philosophy (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/5 text-brand-navy text-xs font-bold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-brand-red" />
              <span>{t.whyNanyang.badge[lang]}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight leading-tight">
              {t.whyNanyang.title[lang]}
            </h2>

            <p className="text-base sm:text-lg text-ink-secondary leading-relaxed max-w-2xl">
              {t.whyNanyang.desc[lang]}
            </p>

            {/* Three Institutional Guiding Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-surface-canvas border border-surface-border space-y-1">
                <span className="text-xs uppercase tracking-wider text-brand-red font-bold block">
                  {t.whyNanyang.values.creativity.title[lang]}
                </span>
                <p className="text-xs text-ink-secondary">
                  {t.whyNanyang.values.creativity.desc[lang]}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-surface-canvas border border-surface-border space-y-1">
                <span className="text-xs uppercase tracking-wider text-brand-blue font-bold block">
                  {t.whyNanyang.values.knowledge.title[lang]}
                </span>
                <p className="text-xs text-ink-secondary">
                  {t.whyNanyang.values.knowledge.desc[lang]}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-surface-canvas border border-surface-border space-y-1">
                <span className="text-xs uppercase tracking-wider text-brand-gold font-bold block">
                  {t.whyNanyang.values.focus.title[lang]}
                </span>
                <p className="text-xs text-ink-secondary">
                  {t.whyNanyang.values.focus.desc[lang]}
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href={`${prefix}/about`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-red transition-colors"
              >
                <span>{lang === 'zh' ? '了解南洋人才集团办学历程' : 'Discover Our Institutional Background'}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Verified Statistical Proofpoints (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-brand-navy to-brand-navy-dark text-white p-5 sm:p-10 rounded-2xl shadow-xl space-y-6 sm:space-y-8 relative overflow-hidden">
            {/* Background globe line accent */}
            <div className="absolute right-0 top-0 w-48 h-48 rounded-full bg-brand-blue/10 blur-2xl pointer-events-none" />

            <div className="space-y-2 border-b border-white/10 pb-4 sm:pb-5">
              <span className="text-xs uppercase tracking-widest text-brand-gold font-bold block">
                {lang === 'zh' ? '官方教学积淀与统计' : 'Verified Educational Heritage'}
              </span>
              <h3 className="text-xl font-bold text-white">
                {lang === 'zh' ? '以数据呈现稳健教学质量' : 'Demonstrated Educational Milestones'}
              </h3>
            </div>

            {/* Metrics List */}
            <div className="grid grid-cols-2 gap-3.5 sm:gap-6">
              {stats.map((s, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
                    {s.value}
                  </div>
                  <div className="text-xs text-slate-300 font-medium leading-snug">
                    {s.label[lang]}
                  </div>
                </div>
              ))}
            </div>

            {/* Integrity Notice */}
            <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
              <span>
                {lang === 'zh' ? '数据源自机构办学统计 · 严谨治学' : 'Official institutional statistics as provided'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
