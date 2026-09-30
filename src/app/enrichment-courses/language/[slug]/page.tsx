import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CourseDetailView } from '@/components/course/CourseDetailView';
import { FAQChatbot } from '@/components/faq/FAQChatbot';
import { MobileStickyCta } from '@/components/layout/MobileStickyCta';
import { languageCourses } from '@/content/enrichment-courses';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return languageCourses.map((c) => ({
    slug: c.slug,
  }));
}

import { getLanguageCourseMetadata } from '@/content/seo-metadata';
import {
  StructuredData,
  getCourseSchema,
  getBreadcrumbSchema,
} from '@/components/seo/StructuredData';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return getLanguageCourseMetadata(slug, 'en');
}

export default async function LanguageCourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = languageCourses.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  const related = languageCourses.filter((c) => c.slug !== course.slug).slice(0, 3);

  const courseSchema = getCourseSchema({
    title: course.title.en,
    description: course.summary.en,
    category: 'Language Immersion',
    slug: course.slug,
    url: `https://nytalent.com.sg/enrichment-courses/language/${course.slug}`,
    duration: course.duration?.en,
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://nytalent.com.sg/' },
    { name: 'Enrichment Courses', url: 'https://nytalent.com.sg/enrichment-courses' },
    { name: 'Languages', url: 'https://nytalent.com.sg/enrichment-courses#languages' },
    { name: course.title.en, url: `https://nytalent.com.sg/enrichment-courses/language/${course.slug}` },
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
