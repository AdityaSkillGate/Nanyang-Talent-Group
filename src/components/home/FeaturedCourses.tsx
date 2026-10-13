import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Language } from '@/content/types';
import { uiTranslations } from '@/content/translations';
import { artCourses } from '@/content/art-courses';
import { CourseCard } from '../course/CourseCard';
import { ArrowRight, Palette } from 'lucide-react';

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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-100">
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            {/* Nanyang Art Brand Logo */}
            <div className="relative h-20 w-36 sm:h-24 sm:w-44 bg-white rounded-2xl p-2.5 border border-slate-200/90 shadow-2xs shrink-0 flex items-center justify-center">
              <Image
                src="/assets/brands/nanyang-art-logo.png"
                alt={lang === 'zh' ? '南洋美术' : 'Nanyang Art'}
                fill
                className="object-contain p-1"
                sizes="(max-width: 640px) 144px, 176px"
              />
            </div>
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-brand-red text-xs font-bold uppercase tracking-wider">
                <Palette className="w-3.5 h-3.5" />
                <span>{t.featuredArt.badge[lang]}</span>
                <span className="text-red-300">•</span>
                <span className="font-semibold">{lang === 'zh' ? '南洋美术 · 始于2002年' : 'Nanyang Art · Since 2002'}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
                {t.featuredArt.title[lang]}
              </h2>
              <p className="text-base text-ink-secondary max-w-2xl leading-relaxed">
                {t.featuredArt.subtitle[lang]}
              </p>
            </div>
          </div>
          <div>
            <Link
              href={`${prefix}/art-courses`}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red hover:underline whitespace-nowrap"
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
