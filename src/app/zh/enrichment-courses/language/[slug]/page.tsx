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
  return getLanguageCourseMetadata(slug, 'zh');
}

export default async function ChineseLanguageCourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = languageCourses.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  const related = languageCourses.filter((c) => c.slug !== course.slug).slice(0, 3);

  const courseSchema = getCourseSchema({
    title: course.title.zh,
    description: course.summary.zh,
    category: '多语种研习',
    slug: course.slug,
    url: `https://nytalent.com.sg/zh/enrichment-courses/language/${course.slug}`,
    duration: course.duration?.zh,
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: '首页', url: 'https://nytalent.com.sg/zh/' },
    { name: '潜能与语言课程', url: 'https://nytalent.com.sg/zh/enrichment-courses' },
    { name: '多语种研习', url: 'https://nytalent.com.sg/zh/enrichment-courses#languages' },
    { name: course.title.zh, url: `https://nytalent.com.sg/zh/enrichment-courses/language/${course.slug}` },
  ]);

  return (
    <>
      <StructuredData data={courseSchema} />
      <StructuredData data={breadcrumbSchema} />
      <Header lang="zh" />
      <main className="flex-1 pb-16 lg:pb-0">
        <CourseDetailView course={course} lang="zh" relatedCourses={related} />
      </main>
      <Footer lang="zh" />
      <MobileStickyCta lang="zh" />
      <FAQChatbot lang="zh" />
    </>
  );
}
