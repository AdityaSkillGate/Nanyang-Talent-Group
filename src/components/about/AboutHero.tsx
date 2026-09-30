import React from 'react';
import { Language } from '@/content/types';
import { siteConfig } from '@/data/site-config';
import { ShieldCheck, Award, MapPin } from 'lucide-react';
import { BilingualBadge } from '@/components/ui/BilingualLabel';

interface AboutHeroProps {
  lang: Language;
}

export const AboutHero: React.FC<AboutHeroProps> = ({ lang }) => {
  const isZh = lang === 'zh';

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-surface-canvas to-white py-16 sm:py-20 lg:py-24 border-b border-surface-border">
      {/* Subtle background motif */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-brand-navy/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl space-y-6">
          {/* Institutional Badge */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy/5 border border-brand-navy/15 text-brand-navy text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-red" />
              <span>
                {isZh
                  ? `始于 ${siteConfig.sinceYear} 年 · 新加坡教学传承`
                  : `Established Since ${siteConfig.sinceYear} • Singapore`}
              </span>
            </div>
            <BilingualBadge
              en="Registered Institution"
              zh="正规注册实体"
              color="navy"
            />
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy tracking-tight">
              {isZh ? '关于南洋人才集团' : 'About Nanyang Talent Group'}
            </h1>
            <p className="text-2xl font-bold text-brand-red font-chinese">
              {isZh ? 'Nanyang Talent Group Pte Ltd' : '南洋人才集团'}
            </p>
          </div>

          {/* Editorial Lead Paragraph */}
          <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
            {isZh
              ? '南洋人才集团是立足新加坡的专业教育与文化研习机构。我们坚持扎实严谨的教学作风与多元开放的育人视野，在艺术审美表现、多语种国际沟通与全脑智力潜能开发之间构筑融会贯通的学习桥梁。'
              : 'Nanyang Talent Group Pte Ltd is a dedicated Singapore educational and cultural enrichment institution. Grounded in institutional excellence and creative mastery, we bridge traditional artistic heritage with modern language competency and cognitive brain intelligence development.'}
          </p>

          {/* Institutional Features Bar */}
          <div className="pt-2 flex flex-wrap gap-4 sm:gap-6 text-xs text-ink-muted border-t border-slate-200">
            <div className="flex items-center gap-2 py-1">
              <Award className="w-4 h-4 text-brand-gold" />
              <span className="font-medium text-slate-700">
                {isZh ? '专业教研师资团队' : 'Experienced Instructor Team'}
              </span>
            </div>
            <div className="flex items-center gap-2 py-1">
              <MapPin className="w-4 h-4 text-brand-blue" />
              <span className="font-medium text-slate-700">
                {isZh ? '新加坡办学实体' : 'Singapore Registered Entity'}
              </span>
            </div>
            <div className="flex items-center gap-2 py-1">
              <ShieldCheck className="w-4 h-4 text-brand-red" />
              <span className="font-medium text-slate-700">
                {isZh ? '阶梯式系统化教案' : 'Progressive Structured Syllabus'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
