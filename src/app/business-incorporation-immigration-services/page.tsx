import React from 'react';
import type { Metadata } from 'next';
import { CorporateServicesView } from '@/components/corporate/CorporateServicesView';
import { seoMetadata } from '@/content/seo-metadata';
import {
  StructuredData,
  getOrganizationSchema,
  getBreadcrumbSchema,
} from '@/components/seo/StructuredData';

export const metadata: Metadata = seoMetadata.corporateServices.en;

export default function BusinessIncorporationImmigrationPage() {
  const orgSchema = getOrganizationSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://nytalent.com.sg/' },
    { name: 'Business Incorporation & Immigration Services', url: 'https://nytalent.com.sg/business-incorporation-immigration-services' },
  ]);

  return (
    <>
      <StructuredData data={orgSchema} />
      <StructuredData data={breadcrumbSchema} />
      <CorporateServicesView lang="en" />
    </>
  );
}
