'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Language } from '@/content/types';
import { studentReviews, StudentReview } from '@/content/reviews';
import { uiTranslations } from '@/content/translations';
import { Star, CheckCircle2, MessageSquareQuote, Sparkles, ArrowRight, BookOpen } from 'lucide-react';

interface StudentReviewsSectionProps {
  lang: Language;
}

type FilterCategory = 'all' | 'art' | 'language' | 'brain';

/**
 * StudentReviewsSection Component
 * 
 * NOTE FOR ASSET REPLACEMENT:
 * The student photo placeholders are located in:
 * `public/assets/students/student-1.png` through `student-6.png`
 * 
 * To replace placeholders with real student or parent portraits, simply overwrite
 * those files in `public/assets/students/` keeping the identical filenames.
 */
export const StudentReviewsSection: React.FC<StudentReviewsSectionProps> = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('all');
  const t = uiTranslations.reviews;
  const prefix = lang === 'zh' ? '/zh' : '';

  const filterTabs: { key: FilterCategory; label: string }[] = [
    { key: 'all', label: t.filters.all[lang] },
    { key: 'art', label: t.filters.art[lang] },
    { key: 'language', label: t.filters.language[lang] },
    { key: 'brain', label: t.filters.brain[lang] },
  ];

  const filteredReviews = activeCategory === 'all'
    ? studentReviews
    : studentReviews.filter((r) => r.category === activeCategory);

  return (
    <section className="py-16 sm:py-24 bg-surface-canvas/60 border-b border-surface-border relative overflow-hidden">
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy/5 border border-brand-navy/10 text-brand-navy text-xs font-bold uppercase tracking-wider">
            <MessageSquareQuote className="w-3.5 h-3.5 text-brand-red" />
            <span>{t.badge[lang]}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight leading-tight text-balance">
            {t.title[lang]}
          </h2>

          <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
            {t.subtitle[lang]}
          </p>

          {/* Interactive Filter Pills */}
          <div
            role="tablist"
            aria-label="Filter reviews by discipline"
            className="flex flex-wrap items-center justify-center gap-2 pt-4"
          >
            {filterTabs.map((tab) => {
              const isActive = activeCategory === tab.key;
              return (
                <button
                  key={tab.key}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(tab.key)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-brand-navy text-white shadow-md shadow-brand-navy/15 ring-2 ring-brand-navy/20'
                      : 'bg-white text-ink-secondary hover:text-brand-navy border border-surface-border hover:border-brand-navy/30'
                  }`}
                >
                  {tab.label}
                  {tab.key === 'all' && (
                    <span className="ml-1.5 opacity-75 text-xs font-normal">({studentReviews.length})</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
          {filteredReviews.map((review) => (
            <article
              key={review.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-surface-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header row: 5 Stars + Verified Badge */}
                <div className="flex items-center justify-between gap-2 pb-4 border-b border-surface-border/60">
                  <div className="flex items-center gap-1" aria-label={`Rating: ${review.rating} out of 5 stars`}>
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/70">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                    <span>{t.verifiedBadge[lang]}</span>
                  </span>
                </div>

                {/* Course Link Pill */}
                <div className="mt-4">
                  <Link
                    href={`${prefix}${review.courseSlug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-md bg-brand-navy/5 hover:bg-brand-red hover:text-white text-brand-navy transition-colors group-hover:bg-brand-navy/10"
                  >
                    <BookOpen className="w-3 h-3 shrink-0" />
                    <span className="line-clamp-1">{review.courseTitle[lang]}</span>
                  </Link>
                </div>

                {/* Growth Highlight */}
                <p className="text-xs font-bold uppercase tracking-wider text-brand-red mt-3.5 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 shrink-0 text-brand-gold" />
                  <span>{review.highlight[lang]}</span>
                </p>

                {/* Student Quote */}
                <blockquote className="mt-3 text-sm sm:text-base text-ink-primary leading-relaxed italic font-normal">
                  “{review.quote[lang]}”
                </blockquote>
              </div>

              {/* Author Footer */}
              <div className="pt-6 mt-6 border-t border-surface-border/80 flex items-center gap-3.5">
                {/* Avatar with placeholder photo (easily replaceable in /public/assets/students/) */}
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-brand-gold/40 shadow-sm shrink-0 bg-slate-100">
                  <Image
                    src={review.image}
                    alt={review.name[lang]}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="font-bold text-sm sm:text-base text-brand-navy leading-snug truncate">
                    {review.name[lang]}
                  </div>
                  <div className="text-xs text-ink-muted leading-tight truncate mt-0.5">
                    {review.role[lang]} • {t.classOf[lang]} {review.yearEnrolled}
                  </div>
                </div>

                <Link
                  href={`${prefix}${review.courseSlug}`}
                  aria-label={`${t.viewCourse[lang]}: ${review.courseTitle[lang]}`}
                  className="w-8 h-8 rounded-full bg-surface-canvas hover:bg-brand-navy hover:text-white text-ink-muted flex items-center justify-center shrink-0 transition-colors ml-auto"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Trust & Action Banner */}
        <div className="mt-14 bg-gradient-to-r from-brand-navy via-brand-navy to-brand-navy-dark rounded-2xl p-6 sm:p-8 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              {t.trustBanner.heading[lang]}
            </h3>
            <p className="text-xs sm:text-sm text-white/80 max-w-2xl leading-relaxed">
              {t.trustBanner.desc[lang]}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <Link
              href={`${prefix}/contact`}
              className="px-5 py-2.5 rounded-lg bg-brand-red hover:bg-brand-red-dark text-white text-xs sm:text-sm font-semibold transition-all shadow-md hover:shadow-lg inline-flex items-center gap-1.5"
            >
              <span>{t.trustBanner.ctaTrial[lang]}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={`${prefix}/art-courses`}
              className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-medium border border-white/20 transition-colors"
            >
              <span>{t.trustBanner.ctaExplore[lang]}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
