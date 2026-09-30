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
  return getBrainCourseMetadata(slug, 'zh');
}

export default async function ChineseBrainCourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = brainCourses.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  const related = brainCourses.filter((c) => c.slug !== course.slug).slice(0, 3);

  const courseSchema = getCourseSchema({
    title: course.title.zh,
    description: course.summary.zh,
    category: '全脑启发',
    slug: course.slug,
    url: `https://nytalent.com.sg/zh/enrichment-courses/brain/${course.slug}`,
    duration: course.duration?.zh,
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: '首页', url: 'https://nytalent.com.sg/zh/' },
    { name: '潜能与语言课程', url: 'https://nytalent.com.sg/zh/enrichment-courses' },
    { name: '全脑启发', url: 'https://nytalent.com.sg/zh/enrichment-courses#brain' },
    { name: course.title.zh, url: `https://nytalent.com.sg/zh/enrichment-courses/brain/${course.slug}` },
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
