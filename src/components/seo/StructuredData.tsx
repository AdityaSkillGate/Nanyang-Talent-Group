import React from 'react';

interface StructuredDataProps {
  data: Record<string, unknown>;
}

export const StructuredData: React.FC<StructuredDataProps> = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Nanyang Talent Group Pte Ltd · Since 1998',
    legalName: 'Nanyang Talent Group Pte Ltd',
    alternateName: '南洋人才集团 · 始于1998',
    url: 'https://nytalent.com.sg',
    logo: 'https://nytalent.com.sg/assets/logo-horizontal.png',
    image: 'https://nytalent.com.sg/assets/logo-vertical.png',
    description:
      'Premier Singapore academy delivering fine arts, multilingual language immersion, and cognitive brain intelligence enrichment since 1998.',
    foundingDate: '1998',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '135 Jurong Gateway Road, #03-335',
      postalCode: '600135',
      addressLocality: 'Singapore',
      addressCountry: 'SG',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'General Office',
        telephone: '+65-6899-0828',
        email: 'info@nytalent.com.sg',
        availableLanguage: ['English', 'Chinese'],
      },
      {
        '@type': 'ContactPoint',
        contactType: 'WhatsApp Admissions',
        telephone: '+65-9004-8768',
        availableLanguage: ['English', 'Chinese'],
      }
    ],
    sameAs: [
      'https://wa.me/6590048768',
      'https://www.nycollege.edu.sg/',
      'https://nyart.org.sg/'
    ],
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Nanyang Talent Group Pte Ltd · Since 1998',
    alternateName: '南洋人才集团 · 始于1998',
    url: 'https://nytalent.com.sg',
    inLanguage: ['en-SG', 'zh-SG'],
  };
}

export function getCourseSchema(course: {
  title: string;
  description: string;
  category: string;
  slug: string;
  url: string;
  price?: string;
  duration?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.description,
    provider: {
      '@type': 'EducationalOrganization',
      name: 'Nanyang Talent Group Pte Ltd',
      url: 'https://nytalent.com.sg',
    },
    url: course.url,
    timeRequired: course.duration ? `PT${course.duration.replace(/\D/g, '') || '2'}H` : 'PT2H',
    occupationalCategory: course.category,
    offers: course.price
      ? {
          '@type': 'Offer',
          category: 'TuitionFee',
          priceCurrency: 'SGD',
          price: course.price.replace(/[^\d.]/g, '') || '50',
          availability: 'https://schema.org/InStock',
        }
      : undefined,
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getFAQPageSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
