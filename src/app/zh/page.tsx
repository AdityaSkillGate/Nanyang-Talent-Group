import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';
import { HomeRecruitmentSection } from '@/components/home/HomeRecruitmentSection';
import { PathwaysSection } from '@/components/home/PathwaysSection';
import { LanguageCoursesSection } from '@/components/home/LanguageCoursesSection';
import { BrainCoursesSection } from '@/components/home/BrainCoursesSection';
import { FeaturedCourses } from '@/components/home/FeaturedCourses';
import { HeritageSection } from '@/components/home/HeritageSection';
import { StudentReviewsSection } from '@/components/home/StudentReviewsSection';
import { WhyNanyangSection } from '@/components/home/WhyNanyangSection';
import { HomeCorporateServicesSection } from '@/components/home/HomeCorporateServicesSection';
import { FAQPreviewSection } from '@/components/home/FAQPreviewSection';
import { HomeSlidesSection } from '@/components/home/HomeSlidesSection';
import { StatsSection } from '@/components/home/StatsSection';
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
        {/* Hero */}
        <Hero lang="zh" />

        {/* 1. Student Recruitment Service */}
        <HomeRecruitmentSection lang="zh" />

        {/* 2. Courses (Heading: Explore Course) */}
        <PathwaysSection lang="zh" />

        {/* 2.1 Enrichment Courses (Languages & Brain Intelligence) */}
        <LanguageCoursesSection lang="zh" />
        <BrainCoursesSection lang="zh" />

        {/* 2.2 Art Courses & Heritage */}
        <FeaturedCourses lang="zh" />
        <HeritageSection lang="zh" />

        {/* 3. Student Reviews & Testimonials */}
        <StudentReviewsSection lang="zh" />

        {/* Institutional Pillars & Corporate Services */}
        <WhyNanyangSection lang="zh" />
        <HomeCorporateServicesSection lang="zh" />

        {/* 4. FAQ Section */}
        <FAQPreviewSection lang="zh" />

        {/* 5. Institutional Slides Presentation Showcase */}
        <HomeSlidesSection lang="zh" />

        {/* 6. Counts / Statistics Section (Moved above footer per client request) */}
        <StatsSection lang="zh" />

        {/* Final enquiry CTA */}
        <FinalCtaSection lang="zh" />
      </main>

      {/* Footer */}
      <Footer lang="zh" />

      {/* Mobile Sticky CTA & Floating FAQ Assistant */}
      <MobileStickyCta lang="zh" />
      <FAQChatbot lang="zh" />
    </>
  );
}
