import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ArtCoursesFilter } from '@/components/course/ArtCoursesFilter';
import { FAQChatbot } from '@/components/faq/FAQChatbot';
import { MobileStickyCta } from '@/components/layout/MobileStickyCta';
import { FinalCtaSection } from '@/components/home/FinalCtaSection';
import { artCourses } from '@/content/art-courses';
import { Breadcrumb } from '@/components/ui';
import { Palette, ShieldAlert, Brush, Layers, CheckCircle2 } from 'lucide-react';
import { BilingualBadge } from '@/components/ui/BilingualLabel';

import { seoMetadata } from '@/content/seo-metadata';

export const metadata: Metadata = seoMetadata.artHub.en;

export default function ArtCoursesPage() {
  return (
    <>
      <Header lang="en" />
      <main className="flex-1 py-10 sm:py-14 bg-surface-canvas pb-20 lg:pb-16 space-y-12 sm:space-y-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Breadcrumb */}
          <Breadcrumb
            homeHref="/"
            items={[{ label: 'Art Courses' }]}
          />

          {/* Hero Banner */}
          <div className="bg-white rounded-2xl border border-surface-border p-8 sm:p-12 shadow-card space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-brand-red text-xs font-bold uppercase tracking-wider border border-red-200">
                <Palette className="w-3.5 h-3.5" />
                <span>Nanyang Art Academy</span>
              </div>
              <BilingualBadge en="Since 1998" zh="始于1998年" color="red" />
              <BilingualBadge en="Singapore Standard" zh="新加坡专业教研" color="navy" />
            </div>

            <div className="space-y-3 max-w-3xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight">
                Art Courses & Studio Programmes
              </h1>
              <p className="text-lg text-brand-red font-semibold font-chinese">
                纯美术、正统书法与国画进阶研习体系
              </p>
              <p className="text-base sm:text-lg text-ink-secondary leading-relaxed pt-1">
                Combining rigorous European studio fundamentals with traditional Chinese calligraphy and ink painting heritage. Designed for youth, creative beginners, and serious art practitioners seeking structured, stage-by-stage mastery.
              </p>
            </div>

            {/* Quick Overview Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100 text-xs">
              <div className="p-4 rounded-xl bg-surface-canvas border border-surface-border space-y-1">
                <span className="font-bold text-brand-navy block">1. Western Studio Methods</span>
                <span className="text-ink-muted">Still life sketching, tonal contrast, oil painting, watercolor wash & impasto layers.</span>
              </div>
              <div className="p-4 rounded-xl bg-surface-canvas border border-surface-border space-y-1">
                <span className="font-bold text-brand-navy block">2. Classical Eastern Arts</span>
                <span className="text-ink-muted">5 calligraphy scripts (Kaishu to Zhuanshu), traditional landscape, Xieyi & Gongbi brushwork.</span>
              </div>
              <div className="p-4 rounded-xl bg-surface-canvas border border-surface-border space-y-1">
                <span className="font-bold text-brand-navy block">3. Creative & Faculty Studies</span>
                <span className="text-ink-muted">Children’s intellectual creativity and teacher training development module.</span>
              </div>
            </div>
          </div>

          {/* Interactive Filterable Courses Grid */}
          <div className="space-y-4">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-brand-navy">
                Browse All 7 Art Curriculum Disciplines
              </h2>
              <p className="text-sm text-ink-secondary">
                Select a category or search by technique to explore curriculum outlines, session durations, and fee details.
              </p>
            </div>
            <ArtCoursesFilter courses={artCourses} lang="en" />
          </div>

          {/* Transparent Audit Notice on Pricing */}
          <div className="bg-white rounded-xl border border-surface-border p-6 text-xs text-ink-muted flex items-start gap-3.5 shadow-xs">
            <ShieldAlert className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-semibold text-brand-navy block text-sm">
                Admissions, Tuition & Schedule Information
              </span>
              <p className="leading-relaxed">
                Course descriptions, lesson structures, and durations are based on verified institutional curriculum records. Tuition rates and package options are configurable and subject to final intake verification. For immediate cohort schedules or customized 1-to-1 plans, please contact our admissions office.
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
