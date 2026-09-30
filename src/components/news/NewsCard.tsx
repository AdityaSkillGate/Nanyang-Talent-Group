import React from 'react';
import Link from 'next/link';
import { NewsItem, Language } from '@/content/types';
import { Calendar, ArrowRight, Tag, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui';

interface NewsCardProps {
  item: NewsItem;
  lang: Language;
}

export const NewsCard: React.FC<NewsCardProps> = ({ item, lang }) => {
  const prefix = lang === 'zh' ? '/zh' : '';
  const title = lang === 'zh' ? item.chineseTitle : item.title;
  const category = (lang === 'zh' && item.chineseCategory) ? item.chineseCategory : item.category;
  const summary = (lang === 'zh' && item.chineseSummary) ? item.chineseSummary : item.summary;

  return (
    <article className="bg-white rounded-2xl border border-surface-border p-6 sm:p-7 shadow-subtle hover:shadow-card hover:border-slate-300 transition-all flex flex-col justify-between group">
      <div className="space-y-4">
        {/* Badges / Meta */}
        <div className="flex items-center justify-between gap-2 flex-wrap text-xs text-ink-muted">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-semibold text-[11px]">
              <Tag className="w-3 h-3 text-brand-navy" />
              <span>{category}</span>
            </span>
            {item.featured && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-[10px] font-bold">
                <Sparkles className="w-3 h-3 text-brand-gold" />
                <span>{lang === 'zh' ? '焦点公告' : 'Featured'}</span>
              </span>
            )}
          </div>
          <span className="flex items-center gap-1.5 font-medium text-slate-500">
            <Calendar className="w-3.5 h-3.5 text-brand-red" />
            <time dateTime={item.date}>{item.date}</time>
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-brand-navy group-hover:text-brand-red transition-colors leading-snug">
          <Link href={`${prefix}/news-events/news/${item.slug}`}>
            {title}
          </Link>
        </h3>

        {/* Summary */}
        <p className="text-sm text-ink-secondary leading-relaxed line-clamp-3">
          {summary}
        </p>
      </div>

      {/* Footer */}
      <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between">
        <span className="text-xs text-slate-400 font-medium">
          {item.author || (lang === 'zh' ? '南洋人才集团' : 'Nanyang Talent Group')}
        </span>
        <Link
          href={`${prefix}/news-events/news/${item.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy group-hover:text-brand-red transition-colors"
        >
          <span>{lang === 'zh' ? '阅读全文' : 'Read Article'}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
};
