import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FAQChatbot } from '@/components/faq/FAQChatbot';
import { MobileStickyCta } from '@/components/layout/MobileStickyCta';
import { getPublishedNews } from '@/content/news';
import { getPublishedEvents } from '@/content/events';
import { NewsEventsView } from '@/components/news/NewsEventsView';
import { Newspaper } from 'lucide-react';
import { Breadcrumb } from '@/components/ui';

export const metadata: Metadata = {
  title: '官方学术通告与新闻动态 | 南洋人才集团',
  description: '南洋人才集团官方教研动态、开学排期调整与中心公告。',
};

export default function ChineseNewsListingPage() {
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
              { label: '学术通告与新闻' },
            ]}
          />

          <div className="bg-white rounded-2xl border border-surface-border p-8 sm:p-10 shadow-sm space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider">
              <Newspaper className="w-3.5 h-3.5 text-brand-red" />
              <span>官方通告专栏</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight font-chinese">
              学术通告与新闻
            </h1>
            <p className="text-base sm:text-lg text-ink-secondary max-w-3xl leading-relaxed">
              实时查阅南洋人才集团官方认证的教研动态、课程调整与开学排期通告。
            </p>
          </div>

          <NewsEventsView
            newsList={newsList}
            eventsList={eventsList}
            lang="zh"
            initialTab="news"
          />
        </div>
      </main>
      <Footer lang="zh" />
      <MobileStickyCta lang="zh" />
      <FAQChatbot lang="zh" />
    </>
  );
}
