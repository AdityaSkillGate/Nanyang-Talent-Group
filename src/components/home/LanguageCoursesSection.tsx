import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Language } from '@/content/types';
import { uiTranslations } from '@/content/translations';
import { languageCourses } from '@/content/enrichment-courses';
import { Globe, ArrowRight, CheckCircle2, Clock } from 'lucide-react';

interface LanguageCoursesSectionProps {
  lang: Language;
}

export const LanguageCoursesSection: React.FC<LanguageCoursesSectionProps> = ({ lang }) => {
  const t = uiTranslations;
  const prefix = lang === 'zh' ? '/zh' : '';

  return (
    <section className="py-16 sm:py-24 bg-surface-canvas border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-200/70">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-brand-blue text-xs font-bold uppercase tracking-wider">
              <Globe className="w-3.5 h-3.5" />
              <span>{t.languageSection.badge[lang]}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
              {t.languageSection.title[lang]}
            </h2>
            <p className="text-base text-ink-secondary max-w-2xl leading-relaxed">
              {t.languageSection.subtitle[lang]}
            </p>
          </div>
          <div>
            <Link
              href={`${prefix}/enrichment-courses#languages`}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:underline"
            >
              <span>{t.languageSection.viewAll[lang]}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 5 Language Courses Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {languageCourses.map((course) => (
            <div
              key={course.slug}
              className="bg-white rounded-2xl border border-surface-border p-6 sm:p-7 shadow-subtle hover:shadow-hover transition-all flex flex-col justify-between group"
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
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100">
                    {course.slug === 'english'
                      ? (lang === 'zh' ? '6级阶梯体系' : '6-Level Progression')
                      : (lang === 'zh' ? '互动情境小班' : 'Interactive Immersion')}
                  </span>
                  {course.duration && (
                    <span className="text-[11px] text-ink-muted flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span className="truncate max-w-[130px]">{course.duration[lang]}</span>
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
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

                {/* Key Syllabus Highlights */}
                {course.syllabusOutline && course.syllabusOutline.length > 0 && (
                  <div className="pt-2 border-t border-slate-100 space-y-1.5">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                      {lang === 'zh' ? '核心教学要点：' : 'Key Learning Objectives:'}
                    </span>
                    {course.syllabusOutline.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-ink-secondary">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item[lang]}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Card Footer */}
              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-ink-muted italic">
                  {lang === 'zh' ? '学费咨询顾问' : 'Tuition upon enquiry'}
                </span>
                <Link
                  href={`${prefix}/enrichment-courses/language/${course.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-navy group-hover:text-brand-blue transition-colors"
                >
                  <span>{lang === 'zh' ? '课程详情' : 'Course Details'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}

          {/* Quick Consultation Promo Card */}
          <div className="bg-gradient-to-br from-brand-navy to-brand-navy-dark text-white rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-card">
            <div className="space-y-4">
              <span className="text-xs uppercase font-bold tracking-widest text-brand-gold block">
                {lang === 'zh' ? '语言分级测评' : 'Placement Evaluation'}
              </span>
              <h3 className="text-xl font-bold text-white">
                {lang === 'zh' ? '定制专属语言研习方案' : 'Find Your Current Language Level'}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {lang === 'zh'
                  ? '我们提供专业的语言基础测评与试听沟通，帮助学员准确定位适合的班级与进阶路径。'
                  : 'Speak with our academic consultants to assess prior language background and receive appropriate class placement recommendations.'}
              </p>
            </div>
            <div className="pt-6">
              <Link
                href={`${prefix}/contact`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-brand-navy bg-white hover:bg-slate-100 transition-colors"
              >
                <span>{lang === 'zh' ? '预约咨询 / 试听评估' : 'Inquire for Placement'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
