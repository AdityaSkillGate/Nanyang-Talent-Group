import React from 'react';
import Link from 'next/link';
import { NewsItem, Language } from '@/content/types';
import { Breadcrumb, Button, Badge } from '@/components/ui';
import { Calendar, Tag, User, ArrowLeft, ArrowRight, Share2, Sparkles, Building2 } from 'lucide-react';
import { NewsEventsEmptyState } from './NewsEventsEmptyState';

interface NewsDetailViewProps {
  item?: NewsItem;
  lang: Language;
}

export const NewsDetailView: React.FC<NewsDetailViewProps> = ({ item, lang }) => {
  const prefix = lang === 'zh' ? '/zh' : '';

  if (!item) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4 space-y-8">
        <Breadcrumb
          items={[
            { label: lang === 'zh' ? '首页' : 'Home', href: `${prefix}/` },
            { label: lang === 'zh' ? '最新动态' : 'News & Events', href: `${prefix}/news-events` },
            { label: lang === 'zh' ? '通告待核准' : 'Notice Pending' },
          ]}
        />
        <NewsEventsEmptyState lang={lang} type="news" />
      </div>
    );
  }

  const title = lang === 'zh' ? item.chineseTitle : item.title;
  const category = (lang === 'zh' && item.chineseCategory) ? item.chineseCategory : item.category;
  const summary = (lang === 'zh' && item.chineseSummary) ? item.chineseSummary : item.summary;
  const content = (lang === 'zh' && item.chineseContent) ? item.chineseContent : item.content;

  // Split content by newlines into paragraphs
  const paragraphs = content.split('\n\n').filter(Boolean);

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: lang === 'zh' ? '首页' : 'Home', href: `${prefix}/` },
          { label: lang === 'zh' ? '最新动态与活动' : 'News & Events', href: `${prefix}/news-events` },
          { label: category, href: `${prefix}/news-events` },
          { label: title },
        ]}
      />

      {/* Article Header */}
      <header className="bg-white rounded-2xl border border-surface-border p-6 sm:p-10 shadow-sm space-y-6">
        <div className="flex flex-wrap items-center gap-3 text-xs text-ink-muted">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-semibold">
            <Tag className="w-3.5 h-3.5 text-brand-navy" />
            <span>{category}</span>
          </span>

          {item.featured && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 font-bold">
              <Sparkles className="w-3 h-3 text-brand-gold" />
              <span>{lang === 'zh' ? '精选通告' : 'Featured Announcement'}</span>
            </span>
          )}

          <span className="flex items-center gap-1.5 font-medium">
            <Calendar className="w-3.5 h-3.5 text-brand-red" />
            <time dateTime={item.date}>{item.date}</time>
          </span>

          {item.author && (
            <span className="flex items-center gap-1.5 text-slate-500 font-medium">
              <User className="w-3.5 h-3.5" />
              <span>{item.author}</span>
            </span>
          )}
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-navy tracking-tight leading-tight">
          {title}
        </h1>

        {/* Abstract / Summary Callout */}
        {summary && (
          <div className="bg-surface-canvas p-5 sm:p-6 rounded-xl border-l-4 border-l-brand-red border-y border-r border-slate-200/80 text-sm sm:text-base text-ink-secondary leading-relaxed font-medium">
            {summary}
          </div>
        )}
      </header>

      {/* Main Body */}
      <div className="bg-white rounded-2xl border border-surface-border p-8 sm:p-12 shadow-sm space-y-6 text-ink-primary leading-relaxed text-base sm:text-lg">
        {paragraphs.map((p, idx) => (
          <p key={idx} className="leading-relaxed">
            {p}
          </p>
        ))}
      </div>

      {/* Footer Navigation & Admission CTA */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-surface-border">
        <Link href={`${prefix}/news-events`}>
          <Button variant="outline" size="sm" leftIcon={<ArrowLeft className="w-4 h-4" />}>
            {lang === 'zh' ? '返回资讯列表' : 'Back to News & Events'}
          </Button>
        </Link>

        <Link href={`${prefix}/contact`}>
          <Button variant="primary" size="sm" rightIcon={<ArrowRight className="w-4 h-4" />}>
            {lang === 'zh' ? '咨询相关课程排期' : 'Inquire Regarding Schedule'}
          </Button>
        </Link>
      </div>

      {/* Institutional Admissions Contact Card */}
      <section className="bg-brand-navy text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-2 text-brand-gold text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-4 h-4" />
            <span>{lang === 'zh' ? '南洋人才集团 · 招生咨询部' : 'Nanyang Talent Group · Admissions'}</span>
          </div>
          <h3 className="text-xl font-bold text-white">
            {lang === 'zh' ? '有关于本通告或排期的疑问？' : 'Questions Regarding This Announcement?'}
          </h3>
          <p className="text-slate-300 text-sm max-w-xl">
            {lang === 'zh'
              ? '我们的课程教研与咨询团队随时为您提供详尽的班级名额、课时安排与报读指引。'
              : 'Our course consultants are ready to assist you with class schedules, student intake allocations, and enrollment pathways.'}
          </p>
        </div>

        <Link href={`${prefix}/contact`}>
          <Button variant="gold" size="md">
            {lang === 'zh' ? '立即联络' : 'Speak with Advisor'}
          </Button>
        </Link>
      </section>
    </article>
  );
};
