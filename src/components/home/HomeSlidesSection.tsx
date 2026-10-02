'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Language } from '@/content/types';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  X, 
  Presentation
} from 'lucide-react';

interface HomeSlidesSectionProps {
  lang: Language;
}

interface SlideItem {
  id: number;
  filename: string;
  titleEn: string;
  titleZh: string;
}

const TOTAL_SLIDES = 18;

const slidesData: SlideItem[] = Array.from({ length: TOTAL_SLIDES }, (_, i) => {
  const num = i + 1;
  const pad = num.toString().padStart(2, '0');
  return {
    id: num,
    filename: `/assets/slides/slide-${pad}.jpg`,
    titleEn: `Slide ${pad} · Institutional Overview`,
    titleZh: `第 ${pad} 页 · 官方办学与课程概览`,
  };
});

// Doubled slides array for smooth infinite marquee animation
const doubledSlides = [...slidesData, ...slidesData];

export const HomeSlidesSection: React.FC<HomeSlidesSectionProps> = ({ lang }) => {
  const isZh = lang === 'zh';
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const speed = 55; // Smooth continuous glide

  // Keyboard navigation for modal lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeModalIndex === null) return;
      if (e.key === 'Escape') {
        setActiveModalIndex(null);
      } else if (e.key === 'ArrowLeft') {
        setActiveModalIndex((prev) => (prev !== null ? (prev > 0 ? prev - 1 : TOTAL_SLIDES - 1) : null));
      } else if (e.key === 'ArrowRight') {
        setActiveModalIndex((prev) => (prev !== null ? (prev < TOTAL_SLIDES - 1 ? prev + 1 : 0) : null));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalIndex]);

  const handleOpenModal = (slideIndex: number) => {
    // Normalise to 0-17 regardless of which duplicate was clicked
    setActiveModalIndex(slideIndex % TOTAL_SLIDES);
  };

  const handlePrevSlide = () => {
    if (activeModalIndex === null) {
      setActiveModalIndex(0);
    } else {
      setActiveModalIndex((prev) => (prev !== null ? (prev > 0 ? prev - 1 : TOTAL_SLIDES - 1) : 0));
    }
  };

  const handleNextSlide = () => {
    if (activeModalIndex === null) {
      setActiveModalIndex(0);
    } else {
      setActiveModalIndex((prev) => (prev !== null ? (prev < TOTAL_SLIDES - 1 ? prev + 1 : 0) : null));
    }
  };

  const isActuallyPaused = isHovered;

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50/60 to-white border-b border-surface-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200/80 pb-6">
          <div className="space-y-2.5 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/15 text-brand-navy text-xs font-bold uppercase tracking-wider">
              <Presentation className="w-3.5 h-3.5 text-brand-gold" />
              <span>{isZh ? '官方画册演示 · 18页全览' : 'Official Presentation · 18 Slides Showcase'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
              {isZh ? '办学成果与课程体系全景展示' : 'Institutional Showcase & Curriculum Overview'}
            </h2>
            <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
              {isZh
                ? '以18页图文并茂的官方演示文稿，全景呈现南洋人才集团办学历史、师资力量、多学科特色课程体系及升学辅导全貌。'
                : 'Browse our comprehensive 18-part institutional showcase detailing our Singapore educational pedigree, multidisciplinary curriculum, and student achievements.'}
            </p>
          </div>

          {/* Minimalist Gallery Navigation Controls */}
          <div className="flex items-center gap-2 shrink-0 self-start md:self-end">
            <button
              type="button"
              onClick={handlePrevSlide}
              className="w-10 h-10 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-brand-navy shadow-xs transition-all active:scale-95 focus:ring-2 focus:ring-brand-navy"
              aria-label={isZh ? '上一张大图' : 'Previous Slide'}
              title={isZh ? '打开/查看上一张' : 'View Previous Slide'}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNextSlide}
              className="w-10 h-10 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-brand-navy shadow-xs transition-all active:scale-95 focus:ring-2 focus:ring-brand-navy"
              aria-label={isZh ? '下一张大图' : 'Next Slide'}
              title={isZh ? '打开/查看下一张' : 'View Next Slide'}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Continuous Auto-Moving Slides Marquee Track */}
        <div 
          className="relative overflow-hidden w-full py-2 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 group/carousel"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Subtle Left & Right Gradient Shadows for Seamless Depth */}
          <div className="absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10" />

          {/* Marquee Track */}
          <div 
            className={`slides-marquee-track gap-5 sm:gap-6 ${isActuallyPaused ? 'is-paused' : ''}`}
            style={{ 
              animationDuration: `${speed}s`,
              animationPlayState: isActuallyPaused ? 'paused' : 'running'
            }}
          >
            {doubledSlides.map((slide, index) => (
              <div
                key={`${slide.id}-${index}`}
                onClick={() => handleOpenModal(index)}
                className="group relative flex-none w-[260px] sm:w-[300px] md:w-[320px] aspect-[1/1.22] rounded-2xl bg-white border border-surface-border shadow-card hover:shadow-hover hover:-translate-y-1.5 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col"
              >
                {/* Full Slide Presentation Surface */}
                <div className="relative w-full h-full bg-slate-100 overflow-hidden">
                  <Image
                    src={slide.filename}
                    alt={isZh ? slide.titleZh : slide.titleEn}
                    fill
                    sizes="(max-width: 640px) 260px, (max-width: 768px) 300px, 320px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-xs text-brand-navy text-xs font-bold shadow-md">
                      <Maximize2 className="w-3.5 h-3.5 text-brand-red" />
                      <span>{isZh ? '点击放大预览' : 'Click to Enlarge'}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Full Slide View */}
      {activeModalIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setActiveModalIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="relative max-w-4xl w-full max-h-[92vh] flex flex-col bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-slate-950/80 border-b border-slate-800 text-white">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-0.5 rounded-md bg-brand-red text-white text-xs font-bold font-mono">
                  {(activeModalIndex + 1).toString().padStart(2, '0')} / {TOTAL_SLIDES}
                </span>
                <span className="text-sm font-semibold text-slate-200">
                  {isZh ? slidesData[activeModalIndex].titleZh : slidesData[activeModalIndex].titleEn}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveModalIndex(null)}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  aria-label={isZh ? '关闭' : 'Close'}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image Viewport */}
            <div className="relative flex-1 min-h-[50vh] max-h-[75vh] w-full bg-black/50 flex items-center justify-center p-2">
              <div className="relative w-full h-full aspect-[1/1.22] max-h-[72vh]">
                <Image
                  src={slidesData[activeModalIndex].filename}
                  alt={isZh ? slidesData[activeModalIndex].titleZh : slidesData[activeModalIndex].titleEn}
                  fill
                  priority
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              {/* Prev / Next Overlay Buttons */}
              <button
                type="button"
                onClick={() =>
                  setActiveModalIndex((prev) => (prev !== null ? (prev > 0 ? prev - 1 : TOTAL_SLIDES - 1) : null))
                }
                className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-xs transition-colors border border-white/20"
                aria-label={isZh ? '上一张' : 'Previous Slide'}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={() =>
                  setActiveModalIndex((prev) => (prev !== null ? (prev < TOTAL_SLIDES - 1 ? prev + 1 : 0) : null))
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-xs transition-colors border border-white/20"
                aria-label={isZh ? '下一张' : 'Next Slide'}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Bottom Thumbnail Strip */}
            <div className="px-4 py-3 bg-slate-950 border-t border-slate-800 flex items-center gap-2 overflow-x-auto scrollbar-none">
              {slidesData.map((thumb, idx) => (
                <button
                  key={thumb.id}
                  onClick={() => setActiveModalIndex(idx)}
                  className={`relative flex-none w-12 h-14 rounded-md overflow-hidden border-2 transition-all ${
                    idx === activeModalIndex ? 'border-brand-red scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={thumb.filename}
                    alt={`Thumbnail ${thumb.id}`}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                  <span className="absolute bottom-0 inset-x-0 bg-black/70 text-[9px] font-mono text-center text-white py-0.5">
                    {thumb.id.toString().padStart(2, '0')}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
