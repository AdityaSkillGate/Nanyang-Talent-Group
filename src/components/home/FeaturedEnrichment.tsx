import React from 'react';
import Link from 'next/link';
import { Language } from '@/content/types';
import { languageCourses, brainCourses } from '@/content/enrichment-courses';
import { Globe, Brain, ArrowRight, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';

interface FeaturedEnrichmentProps {
  lang: Language;
}

export const FeaturedEnrichment: React.FC<FeaturedEnrichmentProps> = ({ lang }) => {
  const prefix = lang === 'zh' ? '/zh' : '';

  return (
    <section className="py-16 sm:py-24 bg-surface-canvas border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-brand-blue text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'zh' ? '多维素养与思维拓展' : 'Multilingual & Cognitive Enrichment'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            {lang === 'zh' ? '强化课程体系 · 语言与潜能' : 'Enrichment Pathways: Languages & Cognition'}
          </h2>
          <p className="text-base sm:text-lg text-ink-secondary">
            {lang === 'zh'
              ? '构建扎实的多语种沟通桥梁，结合前沿脑科学思维训练，全面激发学习潜能与专注力。'
              : 'Empowering global communication through foundational language mastery, paired with structured cognitive methodologies to unlock radiant thinking.'}
          </p>
        </div>

        {/* Two Large Visual Pathways Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Pathway 1: Language Courses */}
          <div className="bg-white rounded-2xl border border-surface-border shadow-card p-6 sm:p-8 flex flex-col justify-between hover:shadow-hover transition-all">
            <div className="space-y-6">
              {/* Card Header */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-brand-blue shrink-0">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-brand-navy">
                      {lang === 'zh' ? '多语种研习体系' : 'Language Courses'}
                    </h3>
                    <p className="text-xs font-semibold text-brand-blue uppercase tracking-wider mt-0.5">
                      {lang === 'zh' ? '共 5 大语种研习' : '5 Global Languages'}
                    </p>
                  </div>
                </div>
                <Link
                  href={`${prefix}/enrichment-courses#languages`}
                  className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-brand-blue hover:underline"
                >
                  <span>{lang === 'zh' ? '查看语种列表' : 'View All'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Language Course List */}
              <div className="space-y-3">
                {languageCourses.map((course) => (
                  <Link
                    key={course.slug}
                    href={`${prefix}/enrichment-courses/language/${course.slug}`}
                    className="p-3.5 rounded-xl border border-slate-100 hover:border-brand-blue/30 hover:bg-sky-50/40 transition-all flex items-center justify-between group"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-ink-primary group-hover:text-brand-blue transition-colors">
                          {course.title[lang]}
                        </span>
                        {course.slug === 'english' && (
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-100 text-blue-800">
                            Levels 1-6
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-ink-muted line-clamp-1">
                        {course.subtitle ? course.subtitle[lang] : course.summary[lang]}
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-brand-blue group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Pathway Footer CTA */}
            <div className="pt-6 mt-6 border-t border-slate-100">
              <Link
                href={`${prefix}/enrichment-courses#languages`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-brand-blue bg-sky-50 hover:bg-sky-100/70 border border-sky-200 transition-colors"
              >
                <span>{lang === 'zh' ? '深入了解全部语言课程' : 'Explore All Language Programmes'}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Pathway 2: Brain Intelligence */}
          <div className="bg-white rounded-2xl border border-surface-border shadow-card p-6 sm:p-8 flex flex-col justify-between hover:shadow-hover transition-all">
            <div className="space-y-6">
              {/* Card Header */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-brand-gold shrink-0">
                    <Brain className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-brand-navy">
                      {lang === 'zh' ? '全脑潜能启发' : 'Brain Intelligence'}
                    </h3>
                    <p className="text-xs font-semibold text-brand-gold uppercase tracking-wider mt-0.5">
                      {lang === 'zh' ? '共 6 大专注与思维模块' : '6 Cognitive Modules'}
                    </p>
                  </div>
                </div>
                <Link
                  href={`${prefix}/enrichment-courses#brain`}
                  className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-brand-gold hover:underline"
                >
                  <span>{lang === 'zh' ? '查看模块列表' : 'View All'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Brain Course List */}
              <div className="space-y-3">
                {brainCourses.map((course) => (
                  <Link
                    key={course.slug}
                    href={`${prefix}/enrichment-courses/brain/${course.slug}`}
                    className="p-3.5 rounded-xl border border-slate-100 hover:border-brand-gold/30 hover:bg-amber-50/40 transition-all flex items-center justify-between group"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-ink-primary group-hover:text-brand-gold transition-colors">
                          {course.title[lang]}
                        </span>
                        {course.ageGroup && (
                          <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-slate-100 text-slate-700">
                            {course.ageGroup[lang]}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-ink-muted line-clamp-1">
                        {course.subtitle ? course.subtitle[lang] : course.summary[lang]}
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-brand-gold group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Pathway Footer CTA */}
            <div className="pt-6 mt-6 border-t border-slate-100">
              <Link
                href={`${prefix}/enrichment-courses#brain`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-brand-navy bg-amber-50 hover:bg-amber-100/70 border border-amber-200 transition-colors"
              >
                <span>{lang === 'zh' ? '深入了解全部全脑课程' : 'Explore All Brain Intelligence Modules'}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
