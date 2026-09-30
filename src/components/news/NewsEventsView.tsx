'use client';

import React, { useState } from 'react';
import { Language, NewsItem, EventItem } from '@/content/types';
import { NewsCard } from './NewsCard';
import { EventCard } from './EventCard';
import { NewsEventsEmptyState } from './NewsEventsEmptyState';
import { Newspaper, Calendar, Bell, Layers } from 'lucide-react';

interface NewsEventsViewProps {
  newsList: NewsItem[];
  eventsList: EventItem[];
  lang: Language;
  initialTab?: 'all' | 'news' | 'events';
}

export const NewsEventsView: React.FC<NewsEventsViewProps> = ({
  newsList,
  eventsList,
  lang,
  initialTab = 'all',
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'news' | 'events'>(initialTab);

  const totalNews = newsList.length;
  const totalEvents = eventsList.length;
  const totalAll = totalNews + totalEvents;

  const labels = {
    all: {
      en: 'All Updates',
      zh: '全部资讯与通告',
    },
    news: {
      en: 'Academic News & Notices',
      zh: '学术通告与新闻',
    },
    events: {
      en: 'Events & Masterclasses',
      zh: '活动与大师班',
    },
    filterHelp: {
      en: 'Browse official updates released by Nanyang Talent Group.',
      zh: '浏览由南洋人才集团官方认证发布的最新动态。',
    },
  };

  return (
    <div className="space-y-8">
      {/* Interactive Tabs Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-surface-border pb-4">
        <div className="flex items-center gap-1 p-1 bg-surface-canvas rounded-xl border border-surface-border overflow-x-auto no-scrollbar max-w-full">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 min-h-[40px] ${
              activeTab === 'all'
                ? 'bg-white text-brand-navy shadow-xs border border-slate-200/60'
                : 'text-ink-secondary hover:text-brand-navy'
            }`}
          >
            <Layers className="w-4 h-4 text-brand-navy shrink-0" />
            <span>{labels.all[lang]}</span>
            <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-slate-100 font-mono text-slate-600">
              {totalAll}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('news')}
            className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 min-h-[40px] ${
              activeTab === 'news'
                ? 'bg-white text-brand-navy shadow-xs border border-slate-200/60'
                : 'text-ink-secondary hover:text-brand-navy'
            }`}
          >
            <Newspaper className="w-4 h-4 text-brand-red shrink-0" />
            <span>{labels.news[lang]}</span>
            <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-slate-100 font-mono text-slate-600">
              {totalNews}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('events')}
            className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 min-h-[40px] ${
              activeTab === 'events'
                ? 'bg-white text-brand-navy shadow-xs border border-slate-200/60'
                : 'text-ink-secondary hover:text-brand-navy'
            }`}
          >
            <Calendar className="w-4 h-4 text-brand-blue shrink-0" />
            <span>{labels.events[lang]}</span>
            <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-slate-100 font-mono text-slate-600">
              {totalEvents}
            </span>
          </button>
        </div>

        <p className="text-xs text-ink-muted hidden sm:block">
          {labels.filterHelp[lang]}
        </p>
      </div>

      {/* Tab Panels */}
      {activeTab === 'all' && (
        <div className="space-y-10">
          {totalAll === 0 ? (
            <NewsEventsEmptyState lang={lang} type="all" />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {newsList.map((item) => (
                <NewsCard key={`news-${item.slug}`} item={item} lang={lang} />
              ))}
              {eventsList.map((item) => (
                <EventCard key={`event-${item.slug}`} item={item} lang={lang} />
              ))}
            </div>
          )}
        </div>
      )}

      {activeTab === 'news' && (
        <div className="space-y-8">
          {totalNews === 0 ? (
            <NewsEventsEmptyState lang={lang} type="news" />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {newsList.map((item) => (
                <NewsCard key={item.slug} item={item} lang={lang} />
              ))}
            </div>
          )}
        </div>
      )}

      {activeTab === 'events' && (
        <div className="space-y-8">
          {totalEvents === 0 ? (
            <NewsEventsEmptyState lang={lang} type="events" />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {eventsList.map((item) => (
                <EventCard key={item.slug} item={item} lang={lang} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
