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
import { HomeNewsSection } from '@/components/home/HomeNewsSection';
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

export const metadata: Metadata = seoMetadata.home.en;

export default function HomePage() {
  const orgSchema = getOrganizationSchema();
  const siteSchema = getWebSiteSchema();
  const faqSchema = getFAQPageSchema(
    faqItems.slice(0, 7).map((i) => ({ question: i.question.en, answer: i.answer.en }))
  );

  return (
    <>
      <StructuredData data={orgSchema} />
      <StructuredData data={siteSchema} />
      <StructuredData data={faqSchema} />
      <Header lang="en" />
      <main className="flex-1 pb-16 lg:pb-0">
        {/* Hero */}
        <Hero lang="en" />

        {/* 1. Student Recruitment Service */}
        <HomeRecruitmentSection lang="en" />

        {/* 2. Courses (Heading: Explore Course) */}
        <PathwaysSection lang="en" />

        {/* 2.1 Enrichment Courses (Languages & Brain Intelligence) */}
        <LanguageCoursesSection lang="en" />
        <BrainCoursesSection lang="en" />

        {/* 2.2 Art Courses & Heritage */}
        <FeaturedCourses lang="en" />
        <HeritageSection lang="en" />

        {/* 3. Student Reviews & Testimonials */}
        <StudentReviewsSection lang="en" />

        {/* Institutional Pillars & News */}
        <WhyNanyangSection lang="en" />
        <HomeNewsSection lang="en" />

        {/* 4. FAQ Section */}
        <FAQPreviewSection lang="en" />

        {/* 5. Institutional Slides Presentation Showcase */}
        <HomeSlidesSection lang="en" />

        {/* 6. Counts / Statistics Section (Moved above footer per client request) */}
        <StatsSection lang="en" />

        {/* Final enquiry CTA */}
        <FinalCtaSection lang="en" />
      </main>

      {/* Footer */}
      <Footer lang="en" />

      {/* Mobile Sticky CTA & Floating FAQ Assistant */}
      <MobileStickyCta lang="en" />
      <FAQChatbot lang="en" />
    </>
  );
}
