import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FAQChatbot } from '@/components/faq/FAQChatbot';
import { MobileStickyCta } from '@/components/layout/MobileStickyCta';
import { getPublishedNews } from '@/content/news';
import { getPublishedEvents } from '@/content/events';
import { NewsEventsView } from '@/components/news/NewsEventsView';
import { Calendar } from 'lucide-react';
import { Breadcrumb } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Workshops & Events Calendar | Nanyang Talent Group',
  description: 'Upcoming masterclasses, student art exhibitions, and holiday enrichment workshops at Nanyang Talent Group.',
};

export default function EventsListingPage() {
  const newsList = getPublishedNews();
  const eventsList = getPublishedEvents();

  return (
    <>
      <Header lang="en" />
      <main className="flex-1 py-12 sm:py-16 bg-surface-canvas pb-20 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'News & Events', href: '/news-events' },
              { label: 'Events & Masterclasses' },
            ]}
          />

          <div className="bg-white rounded-2xl border border-surface-border p-8 sm:p-10 shadow-sm space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5 text-brand-blue" />
              <span>Events & Masterclasses Calendar</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight">
              Events & Masterclasses
            </h1>
            <p className="text-base sm:text-lg text-ink-secondary max-w-3xl leading-relaxed">
              Explore scheduled holiday workshops, guest masterclasses, and student showcases hosted by Nanyang Talent Group.
            </p>
          </div>

          <NewsEventsView
            newsList={newsList}
            eventsList={eventsList}
            lang="en"
            initialTab="events"
          />
        </div>
      </main>
      <Footer lang="en" />
      <MobileStickyCta lang="en" />
      <FAQChatbot lang="en" />
    </>
  );
}
