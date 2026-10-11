import React from 'react';
import Link from 'next/link';
import { Language } from '@/content/types';
import { uiTranslations } from '@/content/translations';
import { Button, Badge } from '@/components/ui';
import { ArrowRight, BookOpen, Palette, BrainCircuit } from 'lucide-react';
import { HeroShowcaseAnimation } from './HeroShowcaseAnimation';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = uiTranslations;
  const prefix = lang === 'zh' ? '/zh' : '';

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-surface-canvas to-white pt-4 sm:pt-6 lg:pt-8 pb-12 sm:pb-16 lg:pb-20 border-b border-surface-border">
      {/* Background ambient decorative blurs (Strictly clipped) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-brand-blue/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-brand-red/5 blur-3xl" />
      </div>

      {/* SVG Background Motifs: Globe Arcs & Calligraphic Stroke */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none opacity-40">
        <svg 
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] text-brand-blue" 
          viewBox="0 0 800 800" 
          fill="none" 
          aria-hidden="true"
        >
          {/* Concentric Globe Orbital Arcs */}
          <circle cx="500" cy="400" r="320" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" className="opacity-25" />
          <circle cx="500" cy="400" r="260" stroke="#172A73" strokeWidth="1.5" strokeOpacity="0.2" />
          <circle cx="500" cy="400" r="200" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" className="opacity-30" />
          <ellipse cx="500" cy="400" rx="320" ry="120" stroke="currentColor" strokeWidth="1" strokeDasharray="3 6" className="opacity-20" transform="rotate(-25 500 400)" />
          <ellipse cx="500" cy="400" rx="320" ry="160" stroke="#D71920" strokeWidth="1" strokeOpacity="0.15" transform="rotate(15 500 400)" />
          {/* Subtle Golden Particle Accents */}
          <circle cx="340" cy="220" r="3" fill="#C7A04B" className="opacity-60" />
          <circle cx="680" cy="310" r="4" fill="#C7A04B" className="opacity-40" />
          <circle cx="280" cy="520" r="2.5" fill="#1FA7D6" className="opacity-50" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-center">
          {/* Left Column: Text & CTAs (6 cols) */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6 text-center lg:text-left">
            {/* Since 1998 Badge */}
            <div className="inline-flex items-center gap-2">
              <Badge variant="since" dot size="md">
                {t.hero.badge[lang]}
              </Badge>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy tracking-tight leading-[1.14]">
              {lang === 'zh' ? (
                <>
                  <span className="text-brand-red">创造</span> · 学习 · <span className="text-brand-navy">成长</span>
                </>
              ) : (
                <>
                  <span className="text-brand-red">Create.</span> Learn. <span className="text-brand-navy">Grow.</span>
                </>
              )}
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg lg:text-xl text-ink-secondary max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {t.hero.subtitle[lang]}
            </p>

            {/* Call-to-Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button
                variant="primary"
                size="lg"
                href={`${prefix}/#courses`}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto shadow-md"
              >
                {t.buttons.exploreCourses[lang]}
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href={`${prefix}/contact`}
                className="w-full sm:w-auto"
              >
                {t.buttons.contactUs[lang]}
              </Button>
            </div>

            {/* Value Pillars Micro-ribbon */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs text-ink-muted">
              <div className="flex items-center gap-1.5 font-medium">
                <Palette className="w-4 h-4 text-brand-red" />
                <span>{t.hero.pillars.art[lang]}</span>
              </div>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5 font-medium">
                <BookOpen className="w-4 h-4 text-brand-blue" />
                <span>{t.hero.pillars.language[lang]}</span>
              </div>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5 font-medium">
                <BrainCircuit className="w-4 h-4 text-brand-gold" />
                <span>{t.hero.pillars.brain[lang]}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Visual Graphic Card (Expanded Width, 6 cols) */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end w-full">
            <div className="relative w-full max-w-xl lg:max-w-none xl:max-w-[580px] bg-white p-5 sm:p-7 rounded-2xl border border-surface-border shadow-card hover:shadow-hover transition-all">
              {/* Subtle watermark globe & brush stroke background in card */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-blue/5 via-transparent to-brand-red/5 pointer-events-none" />

              {/* Floating Calligraphic Brush Stroke Accent SVG */}
              <svg 
                className="absolute -top-4 -right-4 w-28 h-28 text-brand-red/15 pointer-events-none" 
                viewBox="0 0 100 100" 
                fill="none" 
                aria-hidden="true"
              >
                <path 
                  d="M10,80 C30,70 60,85 85,20 C70,40 50,45 35,50 C25,54 15,65 10,80 Z" 
                  fill="currentColor" 
                />
              </svg>

              {/* Interactive Educational Showcase Animation */}
              <div className="relative space-y-3.5">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-red animate-pulse" />
                    <span className="text-xs uppercase tracking-widest text-brand-navy font-bold">
                      {t.hero.emblemCard.brandTitle[lang]}
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-gold bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200 shadow-2xs">
                    {t.hero.emblemCard.estBadge[lang]}
                  </span>
                </div>

                {/* Animated Showcase replacing static logo & pathway text */}
                <HeroShowcaseAnimation lang={lang} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
