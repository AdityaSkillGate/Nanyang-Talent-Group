import type { Metadata } from 'next';
import { seoMetadata } from '@/content/seo-metadata';
import { ContactView } from '@/components/contact/ContactView';

export const metadata: Metadata = seoMetadata.contact.zh;

export default function ChineseContactPage() {
  return <ContactView lang="zh" />;
}
