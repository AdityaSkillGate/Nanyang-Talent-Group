'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Language } from '@/content/types';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  Sparkles, 
  Palette, 
  GraduationCap, 
  Brain, 
  Globe2,
  Award,
  Briefcase
} from 'lucide-react';

interface HeroShowcaseAnimationProps {
  lang: Language;
}

interface ShowcaseSlide {
  id: string;
  categoryEn: string;
  categoryZh: string;
  titleEn: string;
  titleZh: string;
  highlightEn: string;
  highlightZh: string;
  statBadgeEn: string;
  statBadgeZh: string;
  image: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  accentBg: string;
}

const SLIDES: ShowcaseSlide[] = [
  {
    id: 'art',
    categoryEn: 'Fine Arts & Calligraphy',
    categoryZh: '艺术与传统书法',
    titleEn: 'Mastery in Classical Arts & Calligraphy',
    titleZh: '名师艺术造诣 · 经典书法与绘画',
    highlightEn: 'Dr. Teng Jiashu Pedagogy · Liu Kang Nanyang Style',
    highlightZh: '滕家澍博士创立 · 承袭刘抗南洋画派精神',
    statBadgeEn: '7 Specialized Courses',
    statBadgeZh: '7大艺术核心课程',
    image: '/assets/courses/chinese-calligraphy.jpg',
    href: '/art-courses',
    icon: Palette,
    accentColor: 'text-rose-400',
    accentBg: 'bg-rose-500',
  },
  {
    id: 'placement',
    categoryEn: 'Job Placement Service',
    categoryZh: '专业人才就业安置服务',
    titleEn: 'Singapore Career & Placement Advisory',
    titleZh: '新加坡专业人才就业安置 · 权威职场推荐',
    highlightEn: 'Enterprise Referral · MOM & TAFEP Advisory · Career Readiness',
    highlightZh: '企业精准内推 · 人力部准证指引 · 职业发展规划',
    statBadgeEn: 'Enterprise Alliance Network',
    statBadgeZh: '深厚企业雇主联盟网络',
    image: '/assets/recruitment/student-recruitment-counseling.jpg',
    href: '/job-placement',
    icon: Briefcase,
    accentColor: 'text-blue-400',
    accentBg: 'bg-blue-500',
  },
  {
    id: 'brain',
    categoryEn: 'Brain Intelligence',
    categoryZh: '前沿大脑潜能启发',
    titleEn: 'Whole-Brain & Cognitive Development',
    titleZh: '全脑潜能启发 · 超强记忆力拓展',
    highlightEn: 'Speed Reading, Mind Mapping & Spatial Focus',
    highlightZh: '高效思维导图、全脑速读与专注力深度研习',
    statBadgeEn: '6 Cognitive Modules',
    statBadgeZh: '6大前沿启发模块',
    image: '/assets/courses/super-memory.jpg',
    href: '/enrichment-courses#brain',
    icon: Brain,
    accentColor: 'text-amber-400',
    accentBg: 'bg-amber-500',
  },
  {
    id: 'languages',
    categoryEn: 'Multilingual Studies',
    categoryZh: '多语种研习体系',
    titleEn: 'Global Communication & Fluency',
    titleZh: '多语种实用研修 · 国际化语言能力',
    highlightEn: 'English, Mandarin, Japanese, German & Korean',
    highlightZh: '涵盖英语、中文、日语、德语与韩语全方位沉浸',
    statBadgeEn: '5 World Languages',
    statBadgeZh: '5大实用语种研修',
    image: '/assets/courses/english.jpg',
    href: '/enrichment-courses#languages',
    icon: Globe2,
    accentColor: 'text-emerald-400',
    accentBg: 'bg-emerald-500',
  },
];

const AUTOPLAY_INTERVAL = 4500; // 4.5 seconds per slide

export const HeroShowcaseAnimation: React.FC<HeroShowcaseAnimationProps> = ({ lang }) => {
  const isZh = lang === 'zh';
  const prefix = isZh ? '/zh' : '';
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const total = SLIDES.length;

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
    setProgress(0);
  }, [total]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
    setProgress(0);
  }, [total]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  // Autoplay progression & progress bar animation
  useEffect(() => {
    if (isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      return;
    }

    const step = 50; // update every 50ms
    const totalSteps = AUTOPLAY_INTERVAL / step;

    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + (100 / totalSteps);
      });
    }, step);

    timerRef.current = setInterval(() => {
      goToNext();
    }, AUTOPLAY_INTERVAL);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [isHovered, goToNext, currentIndex]);

  const activeSlide = SLIDES[currentIndex];
  const IconComponent = activeSlide.icon;

  return (
    <div 
      className="relative w-full select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Animated Stage Container */}
      <div className="relative w-full h-[330px] sm:h-[370px] lg:h-[390px] rounded-2xl overflow-hidden shadow-lg border border-slate-200/90 group/stage bg-slate-950">
        
        {/* Layered Cross-Fading Slide Backgrounds */}
        {SLIDES.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <Image
                src={slide.image}
                alt={isZh ? slide.titleZh : slide.titleEn}
                fill
                priority={idx === 0}
                sizes="(max-width: 640px) 400px, (max-width: 1024px) 580px, 640px"
                className={`object-cover object-center transition-transform duration-[7000ms] ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
              />

              {/* Dynamic Gradient Lighting Overlay for Maximum Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-black/25" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-transparent to-transparent" />
            </div>
          );
        })}

        {/* Top Badges & Meta Info */}
        <div className="absolute top-3 inset-x-3.5 z-20 flex items-center justify-between gap-2 pointer-events-none">
          {/* Active Category Floating Pill */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold shadow-md">
            <IconComponent className={`w-3.5 h-3.5 ${activeSlide.accentColor}`} />
            <span>{isZh ? activeSlide.categoryZh : activeSlide.categoryEn}</span>
          </div>

          {/* Floating Accolade Tag */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-gold/20 backdrop-blur-md border border-brand-gold/40 text-amber-200 text-[10px] font-bold shadow-xs">
            <Award className="w-3 h-3 text-brand-gold" />
            <span>{isZh ? activeSlide.statBadgeZh : activeSlide.statBadgeEn}</span>
          </div>
        </div>

        {/* Ambient Center Subtle Orbital Ring (Decorative Motion) */}
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full border border-white/10 pointer-events-none z-15 animate-spin duration-[30s] ease-linear" />

        {/* Main Content Area Overlaid on Slide */}
        <div className="absolute inset-x-0 bottom-0 z-20 p-4 sm:p-6 flex flex-col justify-end space-y-2.5">
          {/* Slide Title */}
          <h3 className="text-base sm:text-xl font-extrabold text-white leading-snug drop-shadow-sm tracking-tight transition-all duration-300">
            {isZh ? activeSlide.titleZh : activeSlide.titleEn}
          </h3>

          {/* Subtitle / Pedagogy Highlight */}
          <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed drop-shadow-xs font-normal max-w-lg">
            {isZh ? activeSlide.highlightZh : activeSlide.highlightEn}
          </p>

          {/* Bottom Action Row: Direct Link & Mini Indicator */}
          <div className="pt-1.5 flex items-center justify-between gap-3">
            <Link
              href={`${prefix}${activeSlide.href}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-brand-gold transition-colors group/link bg-white/10 hover:bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/15"
            >
              <span>{isZh ? '查看对应课程' : 'Explore Pathway'}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
            </Link>

            {/* Slide Index Counter */}
            <div className="text-[11px] font-mono text-slate-400 font-semibold">
              <span className="text-white font-bold">{currentIndex + 1}</span>
              <span className="opacity-50"> / </span>
              <span>{total}</span>
            </div>
          </div>
        </div>

        {/* Prev / Next Manual Step Controls (Revealed on Hover) */}
        <button
          type="button"
          onClick={goToPrev}
          aria-label={isZh ? '上一张' : 'Previous Slide'}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-black/40 hover:bg-black/80 backdrop-blur-xs text-white border border-white/20 flex items-center justify-center opacity-0 group-hover/stage:opacity-100 transition-all duration-200 active:scale-95"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={goToNext}
          aria-label={isZh ? '下一张' : 'Next Slide'}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-black/40 hover:bg-black/80 backdrop-blur-xs text-white border border-white/20 flex items-center justify-center opacity-0 group-hover/stage:opacity-100 transition-all duration-200 active:scale-95"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Top Edge Progress Bar for Smooth Visual Time Tracking */}
        <div className="absolute top-0 inset-x-0 h-1 bg-white/15 z-30 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-brand-red via-brand-gold to-brand-blue transition-all duration-75 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Interactive Bottom Segmented Navigation Pills */}
      <div className="grid grid-cols-4 gap-2 pt-3">
        {SLIDES.map((slide, idx) => {
          const isActive = idx === currentIndex;
          const Icon = slide.icon;
          return (
            <button
              key={slide.id}
              type="button"
              onClick={() => goToSlide(idx)}
              className={`p-2.5 rounded-xl text-left transition-all duration-200 flex flex-col gap-1.5 border ${
                isActive
                  ? 'bg-slate-50 border-brand-navy/30 shadow-xs ring-1 ring-brand-navy/20'
                  : 'bg-white border-slate-100 hover:border-slate-200 hover:bg-slate-50/60'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-brand-red' : 'text-slate-400'}`} />
                <span className={`text-[11px] sm:text-xs font-bold truncate ${isActive ? 'text-brand-navy' : 'text-slate-600'}`}>
                  {isZh 
                    ? (slide.id === 'art' ? '传统艺术' : slide.id === 'recruitment' ? '权威留学' : slide.id === 'brain' ? '全脑潜能' : '实用语种') 
                    : (slide.id === 'art' ? 'Fine Arts' : slide.id === 'recruitment' ? 'Admissions' : slide.id === 'brain' ? 'Brain Intel' : 'Languages')}
                </span>
              </div>
              <div className="w-full h-1 rounded-full bg-slate-200/80 overflow-hidden">
                <div 
                  className={`h-full transition-all duration-200 ${
                    isActive ? slide.accentBg : 'bg-transparent'
                  }`}
                  style={{ width: isActive ? '100%' : '0%' }}
                />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
