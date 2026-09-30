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
  title: '活动日程与大师研修班 | 南洋人才集团',
  description: '南洋人才集团假期大师研修工坊、校园开放日与中华传统书画展讯。',
};

export default function ChineseEventsListingPage() {
  const newsList = getPublishedNews();
  const eventsList = getPublishedEvents();

  return (
    <>
      <Header lang="zh" />
      <main className="flex-1 py-12 sm:py-16 bg-surface-canvas pb-20 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <Breadcrumb
            items={[
              { label: '首页', href: '/zh/' },
              { label: '最新动态与活动', href: '/zh/news-events' },
              { label: '活动与大师班' },
            ]}
          />

          <div className="bg-white rounded-2xl border border-surface-border p-8 sm:p-10 shadow-sm space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5 text-brand-blue" />
              <span>活动日程专栏</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight font-chinese">
              活动与大师班
            </h1>
            <p className="text-base sm:text-lg text-ink-secondary max-w-3xl leading-relaxed">
              探索南洋人才集团安排的名师假期研修课、文化艺术开放日与学员优秀习作展演。
            </p>
          </div>

          <NewsEventsView
            newsList={newsList}
            eventsList={eventsList}
            lang="zh"
            initialTab="events"
          />
        </div>
      </main>
      <Footer lang="zh" />
      <MobileStickyCta lang="zh" />
      <FAQChatbot lang="zh" />
    </>
  );
}
