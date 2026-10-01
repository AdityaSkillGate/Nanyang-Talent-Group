import React from 'react';
import type { Metadata } from 'next';
import { StudentRecruitmentView } from '@/components/recruitment/StudentRecruitmentView';
import { seoMetadata } from '@/content/seo-metadata';
import {
  StructuredData,
  getOrganizationSchema,
  getBreadcrumbSchema,
} from '@/components/seo/StructuredData';

export const metadata: Metadata = seoMetadata.studentRecruitment.zh;

export default function ZhStudentRecruitmentPage() {
  const orgSchema = getOrganizationSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: '首页', url: 'https://nytalent.com.sg/zh' },
    { name: '留学服务', url: 'https://nytalent.com.sg/zh/student-recruitment' },
  ]);

  return (
    <>
      <StructuredData data={orgSchema} />
      <StructuredData data={breadcrumbSchema} />
      <StudentRecruitmentView lang="zh" />
    </>
  );
}
