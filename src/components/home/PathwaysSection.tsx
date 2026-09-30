import React from 'react';
import Link from 'next/link';
import { Language } from '@/content/types';
import { uiTranslations } from '@/content/translations';
import { Palette, Globe, Brain, ArrowRight } from 'lucide-react';

interface PathwaysSectionProps {
  lang: Language;
}

export const PathwaysSection: React.FC<PathwaysSectionProps> = ({ lang }) => {
  const t = uiTranslations;
  const prefix = lang === 'zh' ? '/zh' : '';

  const pathways = [
    {
      title: t.pathways.art.title[lang],
      motto: t.pathways.art.motto[lang],
      desc: t.pathways.art.desc[lang],
      href: `${prefix}/art-courses`,
      icon: <Palette className="w-8 h-8 text-brand-red" />,
      colorClass: 'border-t-brand-red',
      tagBg: 'bg-red-50 text-brand-red',
    },
    {
      title: t.pathways.language.title[lang],
      motto: t.pathways.language.motto[lang],
      desc: t.pathways.language.desc[lang],
      href: `${prefix}/enrichment-courses#languages`,
      icon: <Globe className="w-8 h-8 text-brand-blue" />,
      colorClass: 'border-t-brand-blue',
      tagBg: 'bg-sky-50 text-brand-blue',
    },
    {
      title: t.pathways.brain.title[lang],
      motto: t.pathways.brain.motto[lang],
      desc: t.pathways.brain.desc[lang],
      href: `${prefix}/enrichment-courses#brain`,
      icon: <Brain className="w-8 h-8 text-brand-gold" />,
      colorClass: 'border-t-brand-gold',
      tagBg: 'bg-amber-50 text-brand-gold',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-surface-canvas border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            {t.pathways.title[lang]}
          </h2>
          <p className="text-base sm:text-lg text-ink-secondary">
            {t.pathways.subtitle[lang]}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pathways.map((pathway, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl p-8 border border-surface-border border-t-4 ${pathway.colorClass} shadow-subtle hover:shadow-hover transition-all flex flex-col justify-between group`}
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:scale-105 transition-transform">
                  {pathway.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-navy">
                    {pathway.title}
                  </h3>
                  <div className={`inline-block mt-1 text-xs font-semibold px-2.5 py-0.5 rounded-full ${pathway.tagBg}`}>
                    {pathway.motto}
                  </div>
                </div>
                <p className="text-sm text-ink-secondary leading-relaxed">
                  {pathway.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link
                  href={pathway.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy group-hover:text-brand-red transition-colors"
                >
                  <span>{t.common.exploreCourses[lang]}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
