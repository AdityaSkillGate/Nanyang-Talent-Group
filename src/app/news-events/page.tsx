import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FAQChatbot } from '@/components/faq/FAQChatbot';
import { MobileStickyCta } from '@/components/layout/MobileStickyCta';
import { getPublishedNews } from '@/content/news';
import { getPublishedEvents } from '@/content/events';
import { NewsEventsView } from '@/components/news/NewsEventsView';
import { Bell, Newspaper } from 'lucide-react';
import { seoMetadata } from '@/content/seo-metadata';

export const metadata: Metadata = seoMetadata.newsEvents.en;

export default function NewsEventsPage() {
  const newsList = getPublishedNews();
  const eventsList = getPublishedEvents();

  return (
    <>
      <Header lang="en" />
      <main className="flex-1 py-12 sm:py-16 bg-surface-canvas pb-20 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          {/* Header Banner */}
          <div className="bg-white rounded-2xl border border-surface-border p-8 sm:p-10 shadow-sm space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider">
              <Bell className="w-3.5 h-3.5 text-brand-red" />
              <span>Official Announcements & Calendar</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight">
              News & Events
            </h1>
            <p className="text-base sm:text-lg text-ink-secondary max-w-3xl leading-relaxed">
              Stay informed with verified academic notices, seasonal holiday workshops, intake announcements, and upcoming educational developments at Nanyang Talent Group.
            </p>
          </div>

          {/* Interactive News & Events Listing with Tabs & Empty States */}
          <NewsEventsView
            newsList={newsList}
            eventsList={eventsList}
            lang="en"
            initialTab="all"
          />
        </div>
      </main>
      <Footer lang="en" />
      <MobileStickyCta lang="en" />
      <FAQChatbot lang="en" />
    </>
  );
}
