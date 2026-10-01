import React from 'react';
import type { Metadata } from 'next';
import { StudentRecruitmentView } from '@/components/recruitment/StudentRecruitmentView';
import { seoMetadata } from '@/content/seo-metadata';
import {
  StructuredData,
  getOrganizationSchema,
  getBreadcrumbSchema,
} from '@/components/seo/StructuredData';

export const metadata: Metadata = seoMetadata.studentRecruitment.en;

export default function StudentRecruitmentPage() {
  const orgSchema = getOrganizationSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://nytalent.com.sg/' },
    { name: 'Student Recruitment Service', url: 'https://nytalent.com.sg/student-recruitment' },
  ]);

  return (
    <>
      <StructuredData data={orgSchema} />
      <StructuredData data={breadcrumbSchema} />
      <StudentRecruitmentView lang="en" />
    </>
  );
}
