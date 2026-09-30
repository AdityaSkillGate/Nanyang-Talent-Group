import React from 'react';
import Link from 'next/link';
import { Language } from '@/content/types';
import { Globe, BrainCircuit, ArrowRight, CheckCircle2, BookOpen, Sparkles } from 'lucide-react';
import { BilingualBadge } from '@/components/ui/BilingualLabel';

export interface CategoryCardProps {
  id: 'language' | 'brain';
  title: string;
  chineseTitle: string;
  badge: { en: string; zh: string };
  countLabel: string;
  description: string;
  coursesList: Array<{ name: string; slug: string; href: string }>;
  highlights: string[];
  lang: Language;
  onFilterClick?: () => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  id,
  title,
  chineseTitle,
  badge,
  countLabel,
  description,
  coursesList,
  highlights,
  lang,
  onFilterClick,
}) => {
  const isZh = lang === 'zh';
  const isLanguage = id === 'language';

  const themeClasses = isLanguage
    ? {
        borderTop: 'border-t-brand-blue',
        iconBg: 'bg-sky-50 text-brand-blue border-sky-100',
        badgeColor: 'blue' as const,
        accentText: 'text-brand-blue',
        tagBg: 'bg-sky-50/70 text-brand-blue border-sky-200/70 hover:bg-sky-100',
        buttonClass: 'bg-brand-blue hover:bg-brand-blue/90 text-white',
      }
    : {
        borderTop: 'border-t-brand-gold',
        iconBg: 'bg-amber-50 text-brand-gold border-amber-100',
        badgeColor: 'gold' as const,
        accentText: 'text-brand-gold',
        tagBg: 'bg-amber-50/70 text-amber-900 border-amber-200/70 hover:bg-amber-100',
        buttonClass: 'bg-brand-gold hover:bg-amber-600 text-white',
      };

  return (
    <div
      className={`bg-white rounded-2xl border border-surface-border border-t-4 ${themeClasses.borderTop} p-7 sm:p-9 shadow-subtle hover:shadow-card transition-all flex flex-col justify-between group`}
    >
      <div className="space-y-6">
        {/* Header Badges */}
        <div className="flex items-center justify-between gap-3">
          <div
            className={`w-14 h-14 rounded-2xl ${themeClasses.iconBg} flex items-center justify-center border group-hover:scale-105 transition-transform`}
          >
            {isLanguage ? (
              <Globe className="w-7 h-7" />
            ) : (
              <BrainCircuit className="w-7 h-7" />
            )}
          </div>
          <div className="flex items-center gap-2">
            <BilingualBadge
              en={badge.en}
              zh={badge.zh}
              color={themeClasses.badgeColor}
            />
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
              {countLabel}
            </span>
          </div>
        </div>

        {/* Title & Tagline */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
            {title}
          </h3>
          <p className="text-sm font-semibold text-ink-muted mt-1 font-chinese">
            {chineseTitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-ink-secondary leading-relaxed">
          {description}
        </p>

        {/* Highlights */}
        <div className="space-y-2 pt-2 border-t border-slate-100">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
            {isZh ? '核心教学法与特色' : 'Pedagogical Standards'}
          </span>
          <ul className="space-y-1.5 text-xs text-slate-600">
            {highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Included Programmes Chips */}
        <div className="pt-2 border-t border-slate-100 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
            {isZh ? '开设课程模块' : 'Included Curriculum Modules'}
          </span>
          <div className="flex flex-wrap gap-1.5">
            {coursesList.map((course) => (
              <Link
                key={course.slug}
                href={course.href}
                className={`text-xs px-2.5 py-1 rounded-lg border font-semibold transition-colors ${themeClasses.tagBg}`}
              >
                {course.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
        {onFilterClick ? (
          <button
            onClick={onFilterClick}
            className="text-xs font-bold text-brand-navy hover:text-brand-red flex items-center gap-1.5 transition-colors"
          >
            <span>{isZh ? '查看该分类全部课程' : 'Filter by this category'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        ) : (
          <span className="text-xs text-ink-muted">
            {isZh ? '严格遵循原案教研' : 'Strict source curriculum'}
          </span>
        )}
      </div>
    </div>
  );
};
