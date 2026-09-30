import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CourseDetailView } from '@/components/course/CourseDetailView';
import { FAQChatbot } from '@/components/faq/FAQChatbot';
import { MobileStickyCta } from '@/components/layout/MobileStickyCta';
import { artCourses } from '@/content/art-courses';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return artCourses.map((c) => ({
    slug: c.slug,
  }));
}

import { getArtCourseMetadata } from '@/content/seo-metadata';
import {
  StructuredData,
  getCourseSchema,
  getBreadcrumbSchema,
} from '@/components/seo/StructuredData';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return getArtCourseMetadata(slug, 'en');
}

export default async function ArtCourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = artCourses.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  const related = artCourses.filter((c) => c.slug !== course.slug).slice(0, 3);

  const courseSchema = getCourseSchema({
    title: course.title.en,
    description: course.summary.en,
    category: 'Fine Arts',
    slug: course.slug,
    url: `https://nytalent.com.sg/art-courses/${course.slug}`,
    price: course.fees.groupFee?.en,
    duration: course.duration?.en,
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://nytalent.com.sg/' },
    { name: 'Art Courses', url: 'https://nytalent.com.sg/art-courses' },
    { name: course.title.en, url: `https://nytalent.com.sg/art-courses/${course.slug}` },
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
