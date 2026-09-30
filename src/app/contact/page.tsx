import type { Metadata } from 'next';
import { seoMetadata } from '@/content/seo-metadata';
import { ContactView } from '@/components/contact/ContactView';

export const metadata: Metadata = seoMetadata.contact.en;

export default function ContactPage() {
  return <ContactView lang="en" />;
}
