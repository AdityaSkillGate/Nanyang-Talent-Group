import React from 'react';
import Link from 'next/link';
import { EventItem, Language } from '@/content/types';
import { Calendar, Clock, MapPin, ArrowRight, Sparkles } from 'lucide-react';

interface EventCardProps {
  item: EventItem;
  lang: Language;
}

export const EventCard: React.FC<EventCardProps> = ({ item, lang }) => {
  const prefix = lang === 'zh' ? '/zh' : '';
  const title = lang === 'zh' ? item.chineseTitle : item.title;
  const category = (lang === 'zh' && item.chineseCategory) ? item.chineseCategory : item.category;
  const summary = (lang === 'zh' && item.chineseSummary) ? item.chineseSummary : item.summary;

  return (
    <article className="bg-white rounded-2xl border border-surface-border p-6 sm:p-7 shadow-subtle hover:shadow-card hover:border-slate-300 transition-all flex flex-col justify-between group">
      <div className="space-y-4">
        {/* Badges / Category */}
        <div className="flex items-center justify-between gap-2 flex-wrap text-xs text-ink-muted">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-50 text-brand-blue font-semibold text-[11px] border border-blue-100">
              <Calendar className="w-3 h-3 text-brand-blue" />
              <span>{category}</span>
            </span>
            {item.featured && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-[10px] font-bold">
                <Sparkles className="w-3 h-3 text-brand-gold" />
                <span>{lang === 'zh' ? '推荐活动' : 'Featured Event'}</span>
              </span>
            )}
          </div>
          <span className="font-semibold text-brand-red bg-red-50 px-2 py-0.5 rounded text-[11px]">
            {item.date}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-brand-navy group-hover:text-brand-red transition-colors leading-snug">
          <Link href={`${prefix}/news-events/events/${item.slug}`}>
            {title}
          </Link>
        </h3>

        {/* Event Logistics Info */}
        {(item.time || item.location) && (
          <div className="bg-surface-canvas rounded-lg p-3 space-y-1.5 text-xs text-ink-secondary border border-slate-100">
            {item.time && (
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>{item.time}</span>
              </div>
            )}
            {item.location && (
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>{item.location}</span>
              </div>
            )}
          </div>
        )}

        {/* Summary */}
        <p className="text-sm text-ink-secondary leading-relaxed line-clamp-3">
          {summary}
        </p>
      </div>

      {/* Footer CTA */}
      <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between">
        <Link
          href={`${prefix}/news-events/events/${item.slug}`}
          className="text-xs font-semibold text-brand-navy hover:text-brand-red"
        >
          {lang === 'zh' ? '查看详情与安排' : 'View Schedule & Details'}
        </Link>
        <Link
          href={`${prefix}/news-events/events/${item.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-red hover:underline"
        >
          <span>{lang === 'zh' ? '立即预约' : 'RSVP / Enquire'}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
};
