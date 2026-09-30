import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';
import { StatsSection } from '@/components/home/StatsSection';
import { PathwaysSection } from '@/components/home/PathwaysSection';
import { FeaturedCourses } from '@/components/home/FeaturedCourses';
import { LanguageCoursesSection } from '@/components/home/LanguageCoursesSection';
import { BrainCoursesSection } from '@/components/home/BrainCoursesSection';
import { HeritageSection } from '@/components/home/HeritageSection';
import { WhyNanyangSection } from '@/components/home/WhyNanyangSection';
import { StudentReviewsSection } from '@/components/home/StudentReviewsSection';
import { HomeNewsSection } from '@/components/home/HomeNewsSection';
import { FAQPreviewSection } from '@/components/home/FAQPreviewSection';
import { FinalCtaSection } from '@/components/home/FinalCtaSection';
import { FAQChatbot } from '@/components/faq/FAQChatbot';
import { MobileStickyCta } from '@/components/layout/MobileStickyCta';

import { seoMetadata } from '@/content/seo-metadata';
import { faqItems } from '@/content/faq';
import {
  StructuredData,
  getOrganizationSchema,
  getWebSiteSchema,
  getFAQPageSchema,
} from '@/components/seo/StructuredData';

export const metadata: Metadata = seoMetadata.home.zh;

export default function ChineseHomePage() {
  const orgSchema = getOrganizationSchema();
  const siteSchema = getWebSiteSchema();
  const faqSchema = getFAQPageSchema(
    faqItems.slice(0, 7).map((i) => ({ question: i.question.zh, answer: i.answer.zh }))
  );

  return (
    <>
      <StructuredData data={orgSchema} />
      <StructuredData data={siteSchema} />
      <StructuredData data={faqSchema} />
      <Header lang="zh" />
      <main className="flex-1 pb-16 lg:pb-0">
        {/* 1. Hero */}
        <Hero lang="zh" />

        {/* 2. Trust statistics with animated counters */}
        <StatsSection lang="zh" />

        {/* 3. Learning pathways */}
        <PathwaysSection lang="zh" />

        {/* 4. Featured Art Courses */}
        <FeaturedCourses lang="zh" />

        {/* 5. Language Courses */}
        <LanguageCoursesSection lang="zh" />

        {/* 6. Brain Intelligence Courses */}
        <BrainCoursesSection lang="zh" />

        {/* 7. Art / Chinese heritage visual feature */}
        <HeritageSection lang="zh" />

        {/* 8. Why Nanyang */}
        <WhyNanyangSection lang="zh" />

        {/* 9. Student Reviews & Testimonials */}
        <StudentReviewsSection lang="zh" />

        {/* 10. Latest News & Events */}
        <HomeNewsSection lang="zh" />

        {/* 10. FAQ preview */}
        <FAQPreviewSection lang="zh" />

        {/* 11. Final enquiry CTA */}
        <FinalCtaSection lang="zh" />
      </main>

      {/* 12. Footer */}
      <Footer lang="zh" />

      {/* Mobile Sticky CTA & Floating FAQ Assistant */}
      <MobileStickyCta lang="zh" />
      <FAQChatbot lang="zh" />
    </>
  );
}
