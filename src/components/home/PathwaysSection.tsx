import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Language } from '@/content/types';
import { uiTranslations } from '@/content/translations';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface PathwaysSectionProps {
  lang: Language;
}

export const PathwaysSection: React.FC<PathwaysSectionProps> = ({ lang }) => {
  const t = uiTranslations;
  const isZh = lang === 'zh';
  const prefix = isZh ? '/zh' : '';

  const pathways = [
    {
      id: 'art',
      title: t.pathways.art.title[lang],
      motto: t.pathways.art.motto[lang],
      desc: t.pathways.art.desc[lang],
      href: `${prefix}/art-courses`,
      logo: '/assets/brands/nanyang-art-logo.png',
      estBadge: isZh ? '始于 2002 年' : 'Since 2002',
      colorClass: 'border-t-brand-red',
      tagBg: 'bg-red-50 text-brand-red border border-red-200/60',
      actionText: isZh ? '探索南洋美术全部课程' : 'Explore Nanyang Art Courses',
      highlights: isZh 
        ? ['7大核心美术专业', '资深艺术家导师面授', '升学作品集与师资认证']
        : ['7 Fine Arts Disciplines', 'Master Artist Studio Mentorship', 'Portfolio & Teacher Certification'],
    },
    {
      id: 'language',
      title: t.pathways.language.title[lang],
      motto: t.pathways.language.motto[lang],
      desc: t.pathways.language.desc[lang],
      href: `${prefix}/enrichment-courses#languages`,
      logo: '/assets/brands/nanyang-academic-school-logo.jpg',
      estBadge: isZh ? '始于 1993 年' : 'Since 1993',
      colorClass: 'border-t-brand-blue',
      tagBg: 'bg-sky-50 text-brand-blue border border-sky-200/60',
      actionText: isZh ? '探索南洋语文学校课程' : 'Explore Academic & Language Courses',
      highlights: isZh
        ? ['5大多元实用语种研习', '对标新加坡 MOE 核心大纲', '国际视野与学术应用能力']
        : ['5 Global World Languages', 'Singapore MOE Syllabus Aligned', 'Academic Fluency & Immersion'],
    },
    {
      id: 'brain',
      title: t.pathways.brain.title[lang],
      motto: t.pathways.brain.motto[lang],
      desc: t.pathways.brain.desc[lang],
      href: `${prefix}/enrichment-courses#brain`,
      logo: '/assets/brands/nanyang-super-brain-logo.png',
      estBadge: isZh ? '前沿脑科学开发' : 'Neuro-Cognitive',
      colorClass: 'border-t-brand-gold',
      tagBg: 'bg-amber-50 text-amber-800 border border-amber-200/60',
      actionText: isZh ? '探索非凡大脑启发模块' : 'Explore Super Brain Modules',
      highlights: isZh
        ? ['6大科学进阶思维模块', '博赞思维导图与超级记忆', '量子速读与全脑统合协同']
        : ['6 Progressive Brain Modules', 'Buzan Mind Mapping & Super Memory', 'Quantum Speed Reading & Focus'],
    },
  ];

  return (
    <section id="courses" className="py-16 sm:py-24 bg-surface-canvas border-b border-surface-border scroll-mt-24">
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
          {pathways.map((pathway) => (
            <div
              key={pathway.id}
              className={`bg-white rounded-2xl p-6 sm:p-8 border border-surface-border border-t-4 ${pathway.colorClass} shadow-subtle hover:shadow-hover transition-all flex flex-col justify-between group`}
            >
              <div className="space-y-5">
                {/* Brand Logo Container (Border-free, clean presentation) */}
                <div className="relative h-28 sm:h-32 w-full flex items-center justify-center py-1">
                  <div className={`relative h-full w-full ${pathway.id === 'art' ? 'max-w-[210px] scale-110 sm:scale-115' : 'max-w-[230px]'} transition-transform duration-300 group-hover:scale-105`}>
                    <Image
                      src={pathway.logo}
                      alt={pathway.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 220px, 240px"
                    />
                  </div>
                </div>

                {/* Title & Badge */}
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-brand-navy leading-tight">
                      {pathway.title}
                    </h3>
                    <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full shrink-0 border border-slate-200">
                      {pathway.estBadge}
                    </span>
                  </div>
                  <div className={`inline-block mt-2 text-xs font-semibold px-2.5 py-0.5 rounded-full ${pathway.tagBg}`}>
                    {pathway.motto}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-ink-secondary leading-relaxed">
                  {pathway.desc}
                </p>

                {/* Key Highlights Checklist */}
                <ul className="space-y-1.5 pt-1 border-t border-slate-100/80">
                  {pathway.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link
                  href={pathway.href}
                  className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy group-hover:text-brand-red transition-colors"
                >
                  <span>{pathway.actionText}</span>
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
