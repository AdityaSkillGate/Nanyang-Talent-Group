import React from 'react';
import Link from 'next/link';
import { Language } from '@/content/types';
import { uiTranslations } from '@/content/translations';
import { getPublishedNews } from '@/content/news';
import { getPublishedEvents } from '@/content/events';
import { Newspaper, Bell, ArrowRight, Calendar, Sparkles } from 'lucide-react';

interface HomeNewsSectionProps {
  lang: Language;
}

export const HomeNewsSection: React.FC<HomeNewsSectionProps> = ({ lang }) => {
  const t = uiTranslations;
  const prefix = lang === 'zh' ? '/zh' : '';
  const newsList = getPublishedNews();
  const eventsList = getPublishedEvents();

  // Combine news and events, prioritizing featured items
  const combinedItems = [
    ...newsList.map((n) => ({ ...n, itemType: 'news' as const })),
    ...eventsList.map((e) => ({ ...e, itemType: 'event' as const })),
  ].slice(0, 3);

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-slate-100">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-navy">
              <Bell className="w-3.5 h-3.5 text-brand-red" />
              <span>{t.homeNews.badge[lang]}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight">
              {t.homeNews.title[lang]}
            </h2>
          </div>
          <div>
            <Link
              href={`${prefix}/news-events`}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red hover:underline"
            >
              <span>{t.homeNews.viewAll[lang]}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Content: List or Verified Placeholder */}
        {combinedItems.length === 0 ? (
          <div className="bg-surface-canvas rounded-2xl border border-surface-border p-8 sm:p-12 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center mx-auto text-brand-navy/50 shadow-xs">
              <Newspaper className="w-6 h-6" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-brand-navy">
              {t.homeNews.emptyTitle[lang]}
            </h3>
            <p className="text-xs sm:text-sm text-ink-secondary max-w-lg mx-auto leading-relaxed">
              {t.homeNews.emptyDesc[lang]}
            </p>
            <div className="pt-2">
              <Link
                href={`${prefix}/contact`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-navy hover:text-brand-red transition-colors"
              >
                <span>{lang === 'zh' ? '直接咨询最新班级排期 →' : 'Inquire Directly for Intake Dates →'}</span>
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {combinedItems.map((item, idx) => {
              const itemTitle = lang === 'zh' ? item.chineseTitle : item.title;
              const itemSummary = (lang === 'zh' && item.chineseSummary) ? item.chineseSummary : item.summary;
              const itemHref = item.itemType === 'news'
                ? `${prefix}/news-events/news/${item.slug}`
                : `${prefix}/news-events/events/${item.slug}`;

              return (
                <div 
                  key={`${item.itemType}-${item.slug}`}
                  className="p-6 rounded-2xl bg-surface-canvas border border-surface-border hover:shadow-hover transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-ink-muted">
                      <span className="font-bold text-brand-navy font-mono">
                        [0{idx + 1}]
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-brand-red" />
                        {item.date}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-brand-navy leading-snug">
                      <Link href={itemHref} className="hover:text-brand-red transition-colors">
                        {itemTitle}
                      </Link>
                    </h3>
                    <p className="text-xs text-ink-secondary line-clamp-2 leading-relaxed">
                      {itemSummary}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-200 mt-4">
                    <Link
                      href={itemHref}
                      className="text-xs font-semibold text-brand-red hover:underline flex items-center gap-1"
                    >
                      <span>{lang === 'zh' ? '阅读全文' : 'Read Notice'}</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
