import React from 'react';
import type { Metadata } from 'next';
import { JobPlacementView } from '@/components/recruitment/JobPlacementView';
import { seoMetadata } from '@/content/seo-metadata';
import {
  StructuredData,
  getOrganizationSchema,
  getBreadcrumbSchema,
} from '@/components/seo/StructuredData';

export const metadata: Metadata = seoMetadata.jobPlacement.zh;

export default function ZhJobPlacementPage() {
  const orgSchema = getOrganizationSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: '首页', url: 'https://nytalent.com.sg/zh' },
    { name: '就业安置服务', url: 'https://nytalent.com.sg/zh/job-placement' },
  ]);

  return (
    <>
      <StructuredData data={orgSchema} />
      <StructuredData data={breadcrumbSchema} />
      <JobPlacementView lang="zh" />
    </>
  );
}
