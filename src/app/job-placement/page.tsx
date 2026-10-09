import React from 'react';
import type { Metadata } from 'next';
import { JobPlacementView } from '@/components/recruitment/JobPlacementView';
import { seoMetadata } from '@/content/seo-metadata';
import {
  StructuredData,
  getOrganizationSchema,
  getBreadcrumbSchema,
} from '@/components/seo/StructuredData';

export const metadata: Metadata = seoMetadata.jobPlacement.en;

export default function JobPlacementPage() {
  const orgSchema = getOrganizationSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://nytalent.com.sg/' },
    { name: 'Job Placement Service', url: 'https://nytalent.com.sg/job-placement' },
  ]);

  return (
    <>
      <StructuredData data={orgSchema} />
      <StructuredData data={breadcrumbSchema} />
      <JobPlacementView lang="en" />
    </>
  );
}
