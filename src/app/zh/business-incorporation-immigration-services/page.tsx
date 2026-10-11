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

export default function ZhBusinessIncorporationImmigrationPage() {
  const orgSchema = getOrganizationSchema();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: '首页', url: 'https://nytalent.com.sg/zh' },
    { name: '企业注册与移民服务', url: 'https://nytalent.com.sg/zh/business-incorporation-immigration-services' },
  ]);

  return (
    <>
      <StructuredData data={orgSchema} />
      <StructuredData data={breadcrumbSchema} />
      <CorporateServicesView lang="zh" />
    </>
  );
}
