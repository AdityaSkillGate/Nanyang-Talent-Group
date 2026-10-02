'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { Language } from '@/content/types';
import { uiTranslations } from '@/content/translations';
import { siteConfig } from '@/data/site-config';
import { ArrowRight, CheckCircle2, ShieldCheck, HeartHandshake, Compass } from 'lucide-react';

interface WhyNanyangSectionProps {
  lang: Language;
}

const parseMetricValue = (raw: string) => {
  const clean = raw.trim();
  const suffix = clean.endsWith('+') ? '+' : '';
  const numPart = clean.replace('+', '').replace(/,/g, '');
  const target = parseInt(numPart, 10) || 0;
  const hasComma = clean.includes(',');
  return { target, suffix, hasComma };
};

const AnimatedStatCounter: React.FC<{
  raw: string;
  isTriggered: boolean;
}> = ({ raw, isTriggered }) => {
  const { target, suffix, hasComma } = parseMetricValue(raw);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isTriggered) return;

    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(target);
      return;
    }

    let startTimestamp: number | null = null;
    let animationFrameId: number;
    const duration = 2000; // 2s smooth ease-out count

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Easing: ease-out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);

    return () => {
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isTriggered, target]);

  const displayCount = hasComma ? count.toLocaleString() : count.toString();

  return (
    <span>
      {isTriggered ? displayCount : '0'}
      {suffix}
    </span>
  );
};

export const WhyNanyangSection: React.FC<WhyNanyangSectionProps> = ({ lang }) => {
  const t = uiTranslations;
  const prefix = lang === 'zh' ? '/zh' : '';
  const stats = siteConfig.stats;

  const cardRef = useRef<HTMLDivElement>(null);
  const [isTriggered, setIsTriggered] = useState(false);

  useEffect(() => {
    const currentRef = cardRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Purpose & Philosophy (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/5 text-brand-navy text-xs font-bold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-brand-red" />
              <span>{t.whyNanyang.badge[lang]}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight leading-tight">
              {t.whyNanyang.title[lang]}
            </h2>

            <p className="text-base sm:text-lg text-ink-secondary leading-relaxed max-w-2xl">
              {t.whyNanyang.desc[lang]}
            </p>

            {/* Three Institutional Guiding Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-surface-canvas border border-surface-border space-y-1">
                <span className="text-xs uppercase tracking-wider text-brand-red font-bold block">
                  {t.whyNanyang.values.creativity.title[lang]}
                </span>
                <p className="text-xs text-ink-secondary">
                  {t.whyNanyang.values.creativity.desc[lang]}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-surface-canvas border border-surface-border space-y-1">
                <span className="text-xs uppercase tracking-wider text-brand-blue font-bold block">
                  {t.whyNanyang.values.knowledge.title[lang]}
                </span>
                <p className="text-xs text-ink-secondary">
                  {t.whyNanyang.values.knowledge.desc[lang]}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-surface-canvas border border-surface-border space-y-1">
                <span className="text-xs uppercase tracking-wider text-brand-gold font-bold block">
                  {t.whyNanyang.values.focus.title[lang]}
                </span>
                <p className="text-xs text-ink-secondary">
                  {t.whyNanyang.values.focus.desc[lang]}
                </p>
              </div>
            </div>

            {/* Institutional Link to About Page */}
            <div className="pt-2">
              <Link
                href={`${prefix}/about`}
                className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy hover:text-brand-red transition-colors group"
              >
                <span>{lang === 'zh' ? '了解南洋人才集团办学历程' : 'Discover Our Institutional Background'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Verified Statistical Proofpoints with Counting Animation (5 cols) */}
          <div 
            ref={cardRef}
            className="lg:col-span-5 bg-gradient-to-br from-brand-navy to-brand-navy-dark text-white p-6 sm:p-10 rounded-2xl shadow-xl space-y-6 sm:space-y-8 relative overflow-hidden"
          >
            {/* Background globe line accent */}
            <div className="absolute right-0 top-0 w-48 h-48 rounded-full bg-brand-blue/10 blur-2xl pointer-events-none" />

            <div className="space-y-2 border-b border-white/10 pb-4 sm:pb-5">
              <span className="text-xs uppercase tracking-widest text-brand-gold font-bold block">
                {lang === 'zh' ? '官方教学积淀与统计' : 'VERIFIED EDUCATIONAL HERITAGE'}
              </span>
              <h3 className="text-xl font-bold text-white">
                {lang === 'zh' ? '以数据呈现稳健教学质量' : 'Demonstrated Educational Milestones'}
              </h3>
            </div>

            {/* Metrics List with Counting Animation */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((s, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
                    <AnimatedStatCounter raw={s.value} isTriggered={isTriggered} />
                  </div>
                  <div className="text-xs text-slate-300 font-medium leading-snug">
                    {s.label[lang]}
                  </div>
                </div>
              ))}
            </div>

            {/* Integrity Notice */}
            <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-brand-gold shrink-0" />
              <span>
                {lang === 'zh' ? '数据源自机构办学统计 · 严谨治学' : 'Official institutional statistics as provided'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
