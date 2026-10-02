'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Language } from '@/content/types';
import { studentReviews, StudentReview } from '@/content/reviews';
import { uiTranslations } from '@/content/translations';
import { 
  Star, 
  CheckCircle2, 
  MessageSquareQuote, 
  Sparkles, 
  ArrowRight, 
  BookOpen, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause,
  Quote
} from 'lucide-react';

interface StudentReviewsSectionProps {
  lang: Language;
}

type FilterCategory = 'all' | 'art' | 'language' | 'brain';

export const StudentReviewsSection: React.FC<StudentReviewsSectionProps> = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [visibleCount, setVisibleCount] = useState<number>(3);

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

  // Responsive visible count tracking (1 on mobile, 2 on tablet, 3 on desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // When category changes, reset currentIndex
  const handleCategoryChange = (cat: FilterCategory) => {
    setActiveCategory(cat);
    setCurrentIndex(0);
  };

  const totalCards = filteredReviews.length;
  const maxIndex = Math.max(0, totalCards - visibleCount);

  // Auto-moving animation (one-by-one advance every 4.5 seconds)
  useEffect(() => {
    if (isPaused || isHovered || totalCards <= visibleCount) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused, isHovered, maxIndex, totalCards, visibleCount]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const isActuallyPaused = isPaused || isHovered;

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-surface-canvas via-white to-surface-canvas border-b border-surface-border relative overflow-hidden">
      {/* Decorative ambient background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy/5 border border-brand-navy/10 text-brand-navy text-xs font-bold uppercase tracking-wider">
            <MessageSquareQuote className="w-3.5 h-3.5 text-brand-red" />
            <span>{t.badge[lang]}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight leading-tight text-balance">
            {t.title[lang]}
          </h2>

          <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
            {t.subtitle[lang]}
          </p>

          {/* Interactive Filter Pills */}
          <div
            role="tablist"
            aria-label="Filter reviews by discipline"
            className="flex flex-wrap items-center justify-center gap-2 pt-2"
          >
            {filterTabs.map((tab) => {
              const isActive = activeCategory === tab.key;
              return (
                <button
                  key={tab.key}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleCategoryChange(tab.key)}
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

        {/* Carousel Controls Bar */}
        <div className="flex items-center justify-between gap-4 max-w-7xl mx-auto pt-2">
          {/* Status Indicator */}
          <div className="flex items-center gap-2 text-xs font-medium text-ink-muted">
            <span className={`w-2 h-2 rounded-full ${isActuallyPaused ? 'bg-amber-500' : 'bg-emerald-500 animate-pulse'}`} />
            <span>
              {isActuallyPaused 
                ? (lang === 'zh' ? '轮播暂停 (悬停/控制)' : 'Autoplay Paused') 
                : (lang === 'zh' ? '自动轮播中 (逐个平滑切换)' : 'Auto-Moving One-by-One')}
            </span>
          </div>

          {/* Control Buttons */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsPaused(!isPaused)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-semibold text-brand-navy shadow-2xs transition-all active:scale-95"
              title={isPaused ? (lang === 'zh' ? '播放自动轮播' : 'Resume Autoplay') : (lang === 'zh' ? '暂停自动轮播' : 'Pause Autoplay')}
            >
              {isPaused ? <Play className="w-3.5 h-3.5 text-brand-red" /> : <Pause className="w-3.5 h-3.5 text-slate-600" />}
              <span className="hidden sm:inline">{isPaused ? (lang === 'zh' ? '播放' : 'Play') : (lang === 'zh' ? '暂停' : 'Pause')}</span>
            </button>
            <button
              type="button"
              onClick={handlePrev}
              disabled={totalCards <= visibleCount}
              className="w-9 h-9 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40 flex items-center justify-center text-brand-navy shadow-2xs transition-all active:scale-95"
              aria-label={lang === 'zh' ? '上一个评价' : 'Previous Review'}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={totalCards <= visibleCount}
              className="w-9 h-9 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40 flex items-center justify-center text-brand-navy shadow-2xs transition-all active:scale-95"
              aria-label={lang === 'zh' ? '下一个评价' : 'Next Review'}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* One-by-One Moving Reviews Carousel Viewport */}
        <div 
          className="relative overflow-hidden w-full py-2"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Sliding Track */}
          <div 
            className="flex items-stretch gap-6 transition-transform duration-600 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            }}
          >
            {filteredReviews.map((review, idx) => (
              <div
                key={review.id}
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-none"
              >
                <article className="h-full bg-white rounded-2xl p-6 sm:p-7 border border-surface-border shadow-card hover:shadow-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                  {/* Subtle quote watermark in background */}
                  <Quote className="absolute right-4 top-4 w-16 h-16 text-slate-100/90 pointer-events-none -rotate-12 transition-transform group-hover:scale-110" />

                  <div className="relative space-y-4">
                    {/* Header Row: 5 Stars + Verified Badge */}
                    <div className="flex items-center justify-between gap-2 pb-3.5 border-b border-slate-100">
                      <div className="flex items-center gap-1" aria-label={`Rating: ${review.rating} out of 5 stars`}>
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span>{t.verifiedBadge[lang]}</span>
                      </span>
                    </div>

                    {/* Course Link Pill */}
                    <div>
                      <Link
                        href={`${prefix}${review.courseSlug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 hover:bg-brand-red hover:text-white text-brand-navy transition-colors group-hover:bg-red-50/70 group-hover:text-brand-red"
                      >
                        <BookOpen className="w-3 h-3 shrink-0" />
                        <span className="line-clamp-1">{review.courseTitle[lang]}</span>
                      </Link>
                    </div>

                    {/* Growth Highlight Headline */}
                    <p className="text-xs font-bold uppercase tracking-wider text-brand-red flex items-center gap-1.5 leading-snug">
                      <Sparkles className="w-3.5 h-3.5 shrink-0 text-brand-gold" />
                      <span>{review.highlight[lang]}</span>
                    </p>

                    {/* Student / Parent Quote */}
                    <blockquote className="text-sm sm:text-base text-ink-primary leading-relaxed italic font-normal">
                      “{review.quote[lang]}”
                    </blockquote>
                  </div>

                  {/* Author Profile Footer */}
                  <div className="relative pt-6 mt-6 border-t border-slate-100 flex items-center gap-3.5">
                    {/* Avatar with placeholder photo */}
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-brand-gold/60 shadow-xs shrink-0 bg-slate-100">
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
                      className="w-8 h-8 rounded-full bg-slate-100 hover:bg-brand-red hover:text-white text-slate-500 flex items-center justify-center shrink-0 transition-colors ml-auto shadow-2xs"
                      title={t.viewCourse[lang]}
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        {totalCards > visibleCount && (
          <div className="flex items-center justify-center gap-2 pt-2">
            {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => setCurrentIndex(dotIdx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === dotIdx ? 'w-8 bg-brand-red' : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>
        )}

        {/* Bottom Trust & Action Banner */}
        <div className="mt-14 bg-gradient-to-r from-brand-navy via-brand-navy to-brand-navy-dark rounded-2xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
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
              className="px-5 py-2.5 rounded-lg bg-brand-red hover:bg-brand-red-hover text-white text-xs sm:text-sm font-semibold transition-all shadow-md hover:shadow-lg inline-flex items-center gap-1.5"
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
