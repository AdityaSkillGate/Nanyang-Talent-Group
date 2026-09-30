import React from 'react';
import Link from 'next/link';
import { Language } from '@/content/types';
import { uiTranslations } from '@/content/translations';
import { artCourses } from '@/content/art-courses';
import { languageCourses, brainCourses } from '@/content/enrichment-courses';
import { CourseCard } from '../course/CourseCard';
import { ArrowRight, Palette, Sparkles } from 'lucide-react';

interface FeaturedCoursesProps {
  lang: Language;
}

export const FeaturedCourses: React.FC<FeaturedCoursesProps> = ({ lang }) => {
  const t = uiTranslations;
  const prefix = lang === 'zh' ? '/zh' : '';

  // Get first 6 art courses (excluding the empty short course art teacher)
  const featuredArt = artCourses.filter((c) => c.featured).slice(0, 6);

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-brand-red font-bold">
              <Palette className="w-3.5 h-3.5" />
              <span>{t.featuredArt.badge[lang]}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
              {t.featuredArt.title[lang]}
            </h2>
            <p className="text-base text-ink-secondary max-w-2xl">
              {t.featuredArt.subtitle[lang]}
            </p>
          </div>
          <div>
            <Link
              href={`${prefix}/art-courses`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-red hover:underline"
            >
              <span>{t.featuredArt.viewAll[lang]}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 6 Art Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredArt.map((course) => (
            <CourseCard key={course.slug} course={course} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
};
