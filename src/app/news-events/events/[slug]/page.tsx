import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FAQChatbot } from '@/components/faq/FAQChatbot';
import { MobileStickyCta } from '@/components/layout/MobileStickyCta';
import { getPublishedEvents, getEventItem } from '@/content/events';
import { EventDetailView } from '@/components/news/EventDetailView';
import { getEventItemMetadata } from '@/content/seo-metadata';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const published = getPublishedEvents();
  if (published.length === 0) {
    return [{ slug: 'notice' }];
  }
  return published.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  return getEventItemMetadata(slug, 'en');
}

export default async function EventDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getEventItem(slug);

  return (
    <>
      <Header lang="en" />
      <main className="flex-1 bg-surface-canvas pb-20 lg:pb-16">
        <EventDetailView item={item} lang="en" />
      </main>
      <Footer lang="en" />
      <MobileStickyCta lang="en" />
      <FAQChatbot lang="en" />
    </>
  );
}
