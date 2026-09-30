import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CourseDetailView } from '@/components/course/CourseDetailView';
import { FAQChatbot } from '@/components/faq/FAQChatbot';
import { MobileStickyCta } from '@/components/layout/MobileStickyCta';
import { brainCourses } from '@/content/enrichment-courses';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return brainCourses.map((c) => ({
    slug: c.slug,
  }));
}

import { getBrainCourseMetadata } from '@/content/seo-metadata';
import {
  StructuredData,
  getCourseSchema,
  getBreadcrumbSchema,
} from '@/components/seo/StructuredData';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return getBrainCourseMetadata(slug, 'en');
}

export default async function BrainCourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = brainCourses.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  const related = brainCourses.filter((c) => c.slug !== course.slug).slice(0, 3);

  const courseSchema = getCourseSchema({
    title: course.title.en,
    description: course.summary.en,
    category: 'Cognitive Brain Intelligence',
    slug: course.slug,
    url: `https://nytalent.com.sg/enrichment-courses/brain/${course.slug}`,
    duration: course.duration?.en,
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://nytalent.com.sg/' },
    { name: 'Enrichment Courses', url: 'https://nytalent.com.sg/enrichment-courses' },
    { name: 'Brain Intelligence', url: 'https://nytalent.com.sg/enrichment-courses#brain' },
    { name: course.title.en, url: `https://nytalent.com.sg/enrichment-courses/brain/${course.slug}` },
  ]);

  return (
    <>
      <StructuredData data={courseSchema} />
      <StructuredData data={breadcrumbSchema} />
      <Header lang="en" />
      <main className="flex-1 pb-16 lg:pb-0">
        <CourseDetailView course={course} lang="en" relatedCourses={related} />
      </main>
      <Footer lang="en" />
      <MobileStickyCta lang="en" />
      <FAQChatbot lang="en" />
    </>
  );
}
