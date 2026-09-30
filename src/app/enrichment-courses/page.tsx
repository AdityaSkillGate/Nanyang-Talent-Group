import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { EnrichmentCoursesFilter } from '@/components/course/EnrichmentCoursesFilter';
import { CategoryCard } from '@/components/course/CategoryCard';
import { FAQChatbot } from '@/components/faq/FAQChatbot';
import { MobileStickyCta } from '@/components/layout/MobileStickyCta';
import { FinalCtaSection } from '@/components/home/FinalCtaSection';
import { languageCourses, brainCourses } from '@/content/enrichment-courses';
import { Breadcrumb } from '@/components/ui';
import { Globe, BrainCircuit, ShieldAlert, Sparkles } from 'lucide-react';
import { BilingualBadge } from '@/components/ui/BilingualLabel';

import { seoMetadata } from '@/content/seo-metadata';

export const metadata: Metadata = seoMetadata.enrichmentHub.en;

export default function EnrichmentCoursesPage() {
  const languageList = languageCourses.map((c) => ({
    name: c.title.en,
    slug: c.slug,
    href: `/enrichment-courses/language/${c.slug}`,
  }));

  const brainList = brainCourses.map((c) => ({
    name: c.title.en,
    slug: c.slug,
    href: `/enrichment-courses/brain/${c.slug}`,
  }));

  return (
    <>
      <Header lang="en" />
      <main className="flex-1 py-10 sm:py-14 bg-surface-canvas pb-20 lg:pb-16 space-y-12 sm:space-y-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Breadcrumb */}
          <Breadcrumb
            homeHref="/"
            items={[{ label: 'Enrichment Courses' }]}
          />

          {/* Hero Banner */}
          <div className="bg-white rounded-2xl border border-surface-border p-8 sm:p-12 shadow-card space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-brand-blue text-xs font-bold uppercase tracking-wider border border-sky-200">
                <Globe className="w-3.5 h-3.5" />
                <span>Languages & Cognitive Development</span>
              </div>
              <BilingualBadge en="Since 1998" zh="始于1998年" color="blue" />
              <BilingualBadge en="Singapore Standard" zh="新加坡专业教研" color="navy" />
            </div>

            <div className="space-y-3 max-w-3xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight">
                Enrichment Programmes
              </h1>
              <p className="text-lg text-brand-blue font-semibold font-chinese">
                多语种研习与全脑思维潜能开发
              </p>
              <p className="text-base sm:text-lg text-ink-secondary leading-relaxed pt-1">
                Cultivating international linguistic competence and disciplined cognitive endurance. From communicative multi-language immersion to structured attention training, radiant mind mapping, and image-based memory systems.
              </p>
            </div>
          </div>

          {/* Reusable Category Cards Section */}
          <div className="space-y-4">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-wider font-bold text-brand-gold block">
                Two Core Pillars
              </span>
              <h2 className="text-2xl font-bold text-brand-navy">
                Explore by Learning Area
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Category Card 1: Language Courses */}
              <CategoryCard
                id="language"
                title="Multilingual Studies"
                chineseTitle="多语种研习体系 · 5大核心语种"
                badge={{ en: 'Languages', zh: '语言学识' }}
                countLabel="5 Programmes"
                description="Comprehensive, communicative language instruction designed to build natural fluency, correct pronunciation, structured grammar, and cross-cultural communication confidence."
                highlights={[
                  'Immersive partner exchanges and practical situational dialogues',
                  'Systematic 6-level progression across English and Mandarin Chinese',
                  'Structured grammar, syntax rules, and reading comprehension',
                  'Dedicated study tracks for Japanese, German, and Korean',
                ]}
                coursesList={languageList}
                lang="en"
              />

              {/* Category Card 2: Brain Intelligence */}
              <CategoryCard
                id="brain"
                title="Brain Intelligence"
                chineseTitle="全脑启发与思维训练 · 6大认知模块"
                badge={{ en: 'Cognitive', zh: '全脑心智' }}
                countLabel="6 Programmes"
                description="Cognitive enrichment leveraging proven developmental exercises, including Schulte attention squares, Buzan radiant mind mapping, and image mnemonic associative coding."
                highlights={[
                  '5x5 Schulte numerical grids expand peripheral vision and focus stamina',
                  'Radiant mind mapping organizes complex concepts and reading notes',
                  'Visual image-coding transforms mechanical memorization into rapid recall',
                  'Right-brain intuitive and spatial association exercises for youth',
                ]}
                coursesList={brainList}
                lang="en"
              />
            </div>
          </div>

          {/* All 11 Filterable Courses Grid */}
          <div className="space-y-4 pt-4 border-t border-slate-200">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-brand-navy">
                Browse All 11 Enrichment Programmes
              </h2>
              <p className="text-sm text-ink-secondary">
                Filter by discipline or search by keywords to inspect lesson structures, duration guidelines, and curriculum outlines.
              </p>
            </div>
            <EnrichmentCoursesFilter
              languageCourses={languageCourses}
              brainCourses={brainCourses}
              lang="en"
            />
          </div>

          {/* Educational Disclosure & Pricing Transparency Notice */}
          <div className="bg-white rounded-xl border border-surface-border p-6 text-xs text-ink-muted flex items-start gap-3.5 shadow-xs">
            <ShieldAlert className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-semibold text-brand-navy block text-sm">
                Pedagogical Standards & Pricing Disclosure
              </span>
              <p className="leading-relaxed">
                All descriptions and curriculum structures are derived strictly from verified institutional documentation. Cognitive training methods utilize structured mental focus and visual association exercises without exaggerated claims. Tuition schedules are subject to client confirmation; contact our admissions office for current cohort fees.
              </p>
            </div>
          </div>
        </div>

        {/* Admissions Final CTA */}
        <FinalCtaSection lang="en" />
      </main>
      <Footer lang="en" />
      <MobileStickyCta lang="en" />
      <FAQChatbot lang="en" />
    </>
  );
}
