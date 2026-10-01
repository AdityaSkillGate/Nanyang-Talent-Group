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

export const metadata: Metadata = seoMetadata.about.en;

export default function AboutPage() {
  const orgSchema = getOrganizationSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://nytalent.com.sg/' },
    { name: 'About Us', url: 'https://nytalent.com.sg/about' },
  ]);

  return (
    <>
      <StructuredData data={orgSchema} />
      <StructuredData data={breadcrumbSchema} />
      <Header lang="en" />
      <main className="flex-1 pb-16 lg:pb-0">
        {/* Section 1: Hero */}
        <AboutHero lang="en" />

        {/* Section 2: Our Story */}
        <OurStorySection lang="en" />

        {/* Section 3: Leadership & Artistic Direction - Dr. Teng Jiashu */}
        <DrTengSection lang="en" />

        {/* Section 4: Nanyang Institutional Alliance */}
        <InstitutionalAllianceSection lang="en" />

        {/* Section 5: Learning Areas */}
        <LearningAreasSection lang="en" />

        {/* Section 4: Our Numbers */}
        <StatsSection
          lang="en"
          badge="Verified Milestones"
          title="Our Numbers"
          subtitle="A proven educational record established over decades of continuous teaching practice in Singapore."
        />

        {/* Section 5: Learning Philosophy */}
        <LearningPhilosophySection lang="en" />

        {/* Section 6: Visual Heritage Section */}
        <AboutHeritageSection lang="en" />

        {/* Section 7: Final CTA */}
        <FinalCtaSection lang="en" />
      </main>
      <Footer lang="en" />
      <MobileStickyCta lang="en" />
      <FAQChatbot lang="en" />
    </>
  );
}
