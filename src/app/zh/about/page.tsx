import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AboutHero } from '@/components/about/AboutHero';
import { OurStorySection } from '@/components/about/OurStorySection';
import { DrTengSection } from '@/components/about/DrTengSection';
import { InstitutionalAllianceSection } from '@/components/about/InstitutionalAllianceSection';
import { LearningAreasSection } from '@/components/about/LearningAreasSection';
import { StatsSection } from '@/components/home/StatsSection';
import { LearningPhilosophySection } from '@/components/about/LearningPhilosophySection';
import { AboutHeritageSection } from '@/components/about/AboutHeritageSection';
import { FinalCtaSection } from '@/components/home/FinalCtaSection';
import { FAQChatbot } from '@/components/faq/FAQChatbot';
import { MobileStickyCta } from '@/components/layout/MobileStickyCta';

import { seoMetadata } from '@/content/seo-metadata';
import {
  StructuredData,
  getOrganizationSchema,
  getBreadcrumbSchema,
} from '@/components/seo/StructuredData';

export const metadata: Metadata = seoMetadata.about.zh;

export default function ChineseAboutPage() {
  const orgSchema = getOrganizationSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: '首页', url: 'https://nytalent.com.sg/zh/' },
    { name: '关于我们', url: 'https://nytalent.com.sg/zh/about' },
  ]);

  return (
    <>
      <StructuredData data={orgSchema} />
      <StructuredData data={breadcrumbSchema} />
      <Header lang="zh" />
      <main className="flex-1 pb-16 lg:pb-0">
        {/* Section 1: Hero */}
        <AboutHero lang="zh" />

        {/* Section 2: Our Story */}
        <OurStorySection lang="zh" />

        {/* Section 3: Leadership & Artistic Direction - Dr. Teng Jiashu */}
        <DrTengSection lang="zh" />

        {/* Section 4: Nanyang Institutional Alliance */}
        <InstitutionalAllianceSection lang="zh" />

        {/* Section 5: Learning Areas */}
        <LearningAreasSection lang="zh" />

        {/* Section 4: Our Numbers */}
        <StatsSection
          lang="zh"
          badge="官方权威办学数据"
          title="办学硕果与数字"
          subtitle="立足新加坡数十载教研探索，以坚实成果见证每位学员的成长与飞跃。"
        />

        {/* Section 5: Learning Philosophy */}
        <LearningPhilosophySection lang="zh" />

        {/* Section 6: Visual Heritage Section */}
        <AboutHeritageSection lang="zh" />

        {/* Section 7: Final CTA */}
        <FinalCtaSection lang="zh" />
      </main>
      <Footer lang="zh" />
      <MobileStickyCta lang="zh" />
      <FAQChatbot lang="zh" />
    </>
  );
}
