import React from 'react';
import Link from 'next/link';
import { EventItem, Language } from '@/content/types';
import { Breadcrumb, Button, Badge } from '@/components/ui';
import { Calendar, Clock, MapPin, ArrowLeft, ArrowRight, Sparkles, Building2, UserCheck } from 'lucide-react';
import { NewsEventsEmptyState } from './NewsEventsEmptyState';

interface EventDetailViewProps {
  item?: EventItem;
  lang: Language;
}

export const EventDetailView: React.FC<EventDetailViewProps> = ({ item, lang }) => {
  const prefix = lang === 'zh' ? '/zh' : '';

  if (!item) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4 space-y-8">
        <Breadcrumb
          items={[
            { label: lang === 'zh' ? '首页' : 'Home', href: `${prefix}/` },
            { label: lang === 'zh' ? '活动列表' : 'Events', href: `${prefix}/news-events` },
            { label: lang === 'zh' ? '活动待核准' : 'Event Pending' },
          ]}
        />
        <NewsEventsEmptyState lang={lang} type="events" />
      </div>
    );
  }

  const title = lang === 'zh' ? item.chineseTitle : item.title;
  const category = (lang === 'zh' && item.chineseCategory) ? item.chineseCategory : item.category;
  const summary = (lang === 'zh' && item.chineseSummary) ? item.chineseSummary : item.summary;
  const content = (lang === 'zh' && item.chineseContent) ? item.chineseContent : item.content;

  const paragraphs = content.split('\n\n').filter(Boolean);

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: lang === 'zh' ? '首页' : 'Home', href: `${prefix}/` },
          { label: lang === 'zh' ? '最新动态与活动' : 'News & Events', href: `${prefix}/news-events` },
          { label: lang === 'zh' ? '实践活动与大师班' : 'Events & Workshops', href: `${prefix}/news-events` },
          { label: title },
        ]}
      />

      {/* Event Header */}
      <header className="bg-white rounded-2xl border border-surface-border p-6 sm:p-10 shadow-sm space-y-6">
        <div className="flex flex-wrap items-center gap-3 text-xs text-ink-muted">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 text-brand-blue font-semibold border border-blue-100">
            <Calendar className="w-3.5 h-3.5 text-brand-blue" />
            <span>{category}</span>
          </span>

          {item.featured && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 font-bold">
              <Sparkles className="w-3 h-3 text-brand-gold" />
              <span>{lang === 'zh' ? '重点活动' : 'Featured Event'}</span>
            </span>
          )}

          <span className="font-semibold text-brand-red bg-red-50 px-2.5 py-1 rounded">
            {item.date}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-navy tracking-tight leading-tight">
          {title}
        </h1>

        {/* Schedule & Location Box */}
        {(item.time || item.location) && (
          <div className="bg-surface-canvas rounded-xl p-5 border border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-ink-primary font-medium">
            {item.time && (
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-brand-blue shrink-0" />
                <div>
                  <span className="text-slate-400 block text-[11px] font-normal">
                    {lang === 'zh' ? '活动时间' : 'Time'}
                  </span>
                  <span>{item.time}</span>
                </div>
              </div>
            )}
            {item.location && (
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-brand-red shrink-0" />
                <div>
                  <span className="text-slate-400 block text-[11px] font-normal">
                    {lang === 'zh' ? '举办地点' : 'Location'}
                  </span>
                  <span>{item.location}</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Abstract */}
        {summary && (
          <div className="bg-slate-50 p-5 sm:p-6 rounded-xl border-l-4 border-l-brand-blue text-sm sm:text-base text-ink-secondary leading-relaxed font-medium">
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
            {lang === 'zh' ? '返回活动列表' : 'Back to News & Events'}
          </Button>
        </Link>

        <Link href={item.registrationUrl || `${prefix}/contact`}>
          <Button variant="primary" size="sm" rightIcon={<UserCheck className="w-4 h-4" />}>
            {lang === 'zh' ? '立即报名 / 预约席位' : 'Register / Reserve Place'}
          </Button>
        </Link>
      </div>

      {/* Institutional Admissions Contact Card */}
      <section className="bg-brand-navy text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-2 text-brand-gold text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-4 h-4" />
            <span>{lang === 'zh' ? '南洋人才集团 · 活动组织组' : 'Nanyang Talent Group · Events Desk'}</span>
          </div>
          <h3 className="text-xl font-bold text-white">
            {lang === 'zh' ? '计划参加我们的名师工坊或开放日？' : 'Interested in Joining Our Masterclasses?'}
          </h3>
          <p className="text-slate-300 text-sm max-w-xl">
            {lang === 'zh'
              ? '名额有限，敬请提前通过 WhatsApp 或联系表单向教务团队预约登记。'
              : 'Classroom capacity is strictly limited. Please RSVP in advance with our academic coordination team.'}
          </p>
        </div>

        <Link href={`${prefix}/contact`}>
          <Button variant="gold" size="md">
            {lang === 'zh' ? '预约席位' : 'Contact Admissions'}
          </Button>
        </Link>
      </section>
    </article>
  );
};
