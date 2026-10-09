'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Language } from '@/content/types';
import { siteConfig } from '@/data/site-config';
import { Award, Users, Globe2, Clock } from 'lucide-react';

interface StatsSectionProps {
  lang: Language;
  badge?: string;
  title?: string;
  subtitle?: string;
}

interface CounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  hasComma?: boolean;
  duration?: number;
  isTriggered: boolean;
}

const AnimatedNumber: React.FC<CounterProps> = ({
  target,
  suffix = '',
  prefix = '',
  hasComma = false,
  duration = 1800,
  isTriggered,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isTriggered) return;

    // Check prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(target);
      return;
    }

    let startTimestamp: number | null = null;
    let animationFrameId: number;

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
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
    };
  }, [isTriggered, target, duration]);

  const formatted = hasComma ? count.toLocaleString('en-US') : count.toString();

  return (
    <span>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
};

export const StatsSection: React.FC<StatsSectionProps> = ({
  lang,
  badge,
  title,
  subtitle,
}) => {
  const stats = siteConfig.stats;
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isIntersected, setIsIntersected] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersected(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const statsConfig = [
    { target: 25, suffix: '+', hasComma: false, icon: <Award className="w-6 h-6 text-brand-red" /> },
    { target: 37500, suffix: '+', hasComma: true, icon: <Users className="w-6 h-6 text-brand-blue" /> },
    { target: 11, suffix: '+', hasComma: false, icon: <Globe2 className="w-6 h-6 text-brand-navy" /> },
    { target: 25, suffix: '+', hasComma: false, icon: <Clock className="w-6 h-6 text-brand-gold" /> },
  ];

  return (
    <section ref={sectionRef} className={`bg-white ${title ? 'py-16 sm:py-24' : 'py-14 sm:py-16'} border-b border-surface-border relative`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {title && (
          <div className="text-center max-w-3xl mx-auto space-y-3">
            {badge && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/5 border border-brand-navy/15 text-brand-navy text-xs font-semibold">
                <span>{badge}</span>
              </div>
            )}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          {stats.map((item, index) => {
            const config = statsConfig[index % statsConfig.length];
            return (
              <div
                key={index}
                className="p-3.5 sm:p-7 rounded-2xl bg-surface-canvas border border-surface-border text-center hover:shadow-subtle hover:border-slate-300 transition-all group"
              >
                <div className="mx-auto w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white flex items-center justify-center shadow-xs mb-2.5 sm:mb-3.5 border border-slate-100 group-hover:scale-105 transition-transform">
                  {config.icon}
                </div>
                <div className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight font-sans">
                  <AnimatedNumber
                    target={config.target}
                    suffix={config.suffix}
                    hasComma={config.hasComma}
                    isTriggered={isIntersected}
                  />
                </div>
                <div className="mt-1.5 sm:mt-2 text-xs sm:text-sm font-semibold text-ink-secondary leading-snug">
                  {item.label[lang]}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
