import React from 'react';
import type { Metadata } from 'next';
import { CorporateServicesView } from '@/components/corporate/CorporateServicesView';
import { seoMetadata } from '@/content/seo-metadata';
import {
  StructuredData,
  getOrganizationSchema,
  getBreadcrumbSchema,
} from '@/components/seo/StructuredData';

export const metadata: Metadata = seoMetadata.corporateServices.zh;

export default function ZhCorporateServicesPage() {
  const orgSchema = getOrganizationSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: '首页', url: 'https://nytalent.com.sg/zh' },
    { name: '企业服务', url: 'https://nytalent.com.sg/zh/corporate-services' },
  ]);

  return (
    <>
      <StructuredData data={orgSchema} />
      <StructuredData data={breadcrumbSchema} />
      <CorporateServicesView lang="zh" />
    </>
  );
}
