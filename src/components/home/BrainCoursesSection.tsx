import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Language } from '@/content/types';
import { uiTranslations } from '@/content/translations';
import { brainCourses } from '@/content/enrichment-courses';
import { Brain, ArrowRight, Sparkles, Clock, Target } from 'lucide-react';

interface BrainCoursesSectionProps {
  lang: Language;
}

export const BrainCoursesSection: React.FC<BrainCoursesSectionProps> = ({ lang }) => {
  const t = uiTranslations;
  const prefix = lang === 'zh' ? '/zh' : '';

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-100">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-brand-gold text-xs font-bold uppercase tracking-wider">
              <Brain className="w-3.5 h-3.5" />
              <span>{t.brainSection.badge[lang]}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
              {t.brainSection.title[lang]}
            </h2>
            <p className="text-base text-ink-secondary max-w-2xl leading-relaxed">
              {t.brainSection.subtitle[lang]}
            </p>
          </div>
          <div>
            <Link
              href={`${prefix}/enrichment-courses#brain`}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-gold hover:underline"
            >
              <span>{t.brainSection.viewAll[lang]}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 6 Brain Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {brainCourses.map((course) => (
            <div
              key={course.slug}
              className="bg-surface-canvas rounded-2xl border border-surface-border p-6 sm:p-7 hover:bg-white hover:shadow-hover transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {course.image && (
                  <div className="relative h-44 w-full rounded-xl overflow-hidden border border-surface-border/80 bg-slate-100">
                    <Image
                      src={course.image}
                      alt={course.title[lang]}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100/70 px-2.5 py-1 rounded-md border border-amber-200">
                    {course.ageGroup ? course.ageGroup[lang] : (lang === 'zh' ? '全脑潜能' : 'Cognitive')}
                  </span>
                  {course.duration && (
                    <span className="text-[11px] text-ink-muted flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span className="truncate max-w-[130px]">{course.duration[lang]}</span>
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-brand-navy group-hover:text-brand-gold transition-colors">
                    {course.title[lang]}
                  </h3>
                  {course.subtitle && (
                    <p className="text-xs font-semibold text-brand-navy/70 mt-1">
                      {course.subtitle[lang]}
                    </p>
                  )}
                </div>

                <p className="text-sm text-ink-secondary line-clamp-3 leading-relaxed">
                  {course.summary[lang]}
                </p>

                {/* Key feature callout */}
                <div className="pt-2 border-t border-slate-200/60 flex items-center gap-2 text-xs text-ink-muted">
                  <Target className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                  <span className="line-clamp-1">
                    {course.slug === 'super-right-brain'
                      ? (lang === 'zh' ? '舒尔特方格注意力指标提升' : 'Schulte Grid Attention Calibration')
                      : course.slug === 'mind-mapping'
                      ? (lang === 'zh' ? '博赞放射性逻辑结构与笔记' : 'Buzan Radiant Structured Notes')
                      : (lang === 'zh' ? '图像联想与左右脑协同训练' : 'Bilateral Brain Hemispheric Synergy')}
                  </span>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-5 mt-5 border-t border-slate-200/60 flex items-center justify-between">
                <span className="text-xs text-ink-muted italic">
                  {lang === 'zh' ? '学费咨询顾问' : 'Tuition upon enquiry'}
                </span>
                <Link
                  href={`${prefix}/enrichment-courses/brain/${course.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-navy group-hover:text-brand-gold transition-colors"
                >
                  <span>{lang === 'zh' ? '课程详情' : 'Module Details'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
