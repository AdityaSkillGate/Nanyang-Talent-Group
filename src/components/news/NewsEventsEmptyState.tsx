import React from 'react';
import Link from 'next/link';
import { Language } from '@/content/types';
import { ShieldCheck, Calendar, ArrowRight, MessageSquare, Newspaper } from 'lucide-react';
import { Button } from '@/components/ui';

interface NewsEventsEmptyStateProps {
  lang: Language;
  type?: 'all' | 'news' | 'events';
}

export const NewsEventsEmptyState: React.FC<NewsEventsEmptyStateProps> = ({
  lang,
  type = 'all',
}) => {
  const prefix = lang === 'zh' ? '/zh' : '';

  const content = {
    badge: {
      en: 'Institutional Verification Standard',
      zh: '机构严谨教研认证标准',
    },
    title: {
      all: {
        en: 'Official News & Events Will Be Published Here',
        zh: '官方资讯与活动公告发布中心',
      },
      news: {
        en: 'Academic Notices & News Releases Will Be Published Here',
        zh: '官方学术通告与新闻动态即将发布',
      },
      events: {
        en: 'Upcoming Workshops & Masterclasses Will Be Published Here',
        zh: '近期大师班与实践活动日程正在筹备中',
      },
    },
    description: {
      all: {
        en: 'Nanyang Talent Group adheres to strict institutional governance standards. We do not fabricate announcements, schedules, or events. Official academic term dates, holiday workshop schedules, and student showcases will appear here upon final client verification.',
        zh: '南洋人才集团严格遵循教育机构办学与信息披露标准，不虚构未经核准的校区新闻或活动日程。所有新学期开学排期、假期大师班以及艺术展讯将在经官方确认后第一时间在此正式公布。',
      },
      news: {
        en: 'Verified academic updates, curriculum schedules, and center notices are currently undergoing official administrative sign-off.',
        zh: '最新的课程排期调整、教研通告及中心教学新闻正在进行官方审批确认，敬请关注。',
      },
      events: {
        en: 'Seasonal holiday masterclasses, open houses, and cultural exhibitions will be announced here once dates are confirmed.',
        zh: '假期的名师研修工坊、校园开放日及中华传统书画展览排期将于官方敲定后公布。',
      },
    },
    cta: {
      en: 'Inquire Directly for Current Intake Dates',
      zh: '直接咨询当前班级与开课排期',
    },
    secondaryCta: {
      en: 'Explore Available Courses',
      zh: '浏览已开设课程体系',
    },
  };

  return (
    <div className="bg-white rounded-2xl border border-surface-border p-8 sm:p-14 text-center space-y-6 shadow-subtle max-w-3xl mx-auto my-6">
      {/* Icon */}
      <div className="relative w-16 h-16 rounded-2xl bg-surface-canvas border border-slate-200 flex items-center justify-center mx-auto text-brand-navy shadow-xs">
        {type === 'events' ? (
          <Calendar className="w-8 h-8 text-brand-blue" />
        ) : (
          <Newspaper className="w-8 h-8 text-brand-navy" />
        )}
        <span className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
          <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
        </span>
      </div>

      {/* Badge */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
        <span>{content.badge[lang]}</span>
      </div>

      {/* Header */}
      <div className="space-y-2">
        <h3 className="text-xl sm:text-2xl font-bold text-brand-navy tracking-tight">
          {content.title[type][lang]}
        </h3>
        <p className="text-sm text-ink-secondary leading-relaxed max-w-xl mx-auto">
          {content.description[type][lang]}
        </p>
      </div>

      {/* Buttons */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link href={`${prefix}/contact`}>
          <Button variant="primary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
            {content.cta[lang]}
          </Button>
        </Link>
        <Link href={`${prefix}/art-courses`}>
          <Button variant="secondary" size="md">
            {content.secondaryCta[lang]}
          </Button>
        </Link>
      </div>
    </div>
  );
};
