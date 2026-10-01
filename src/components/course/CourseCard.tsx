import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CourseDetail, Language } from '@/content/types';
import { uiTranslations } from '@/content/translations';
import { Badge } from '@/components/ui';
import { ArrowRight, Clock, AlertCircle, Sparkles } from 'lucide-react';

interface CourseCardProps {
  course: CourseDetail;
  lang: Language;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, lang }) => {
  const isZh = lang === 'zh';
  const prefix = isZh ? '/zh' : '';

  let detailUrl = `${prefix}/art-courses/${course.slug}`;
  if (course.category === 'language') {
    detailUrl = `${prefix}/enrichment-courses/language/${course.slug}`;
  } else if (course.category === 'brain') {
    detailUrl = `${prefix}/enrichment-courses/brain/${course.slug}`;
  }

  const badgeVariant =
    course.category === 'art'
      ? 'red'
      : course.category === 'language'
      ? 'blue'
      : 'gold';

  const categoryLabel =
    course.category === 'art'
      ? isZh
        ? '美术'
        : 'Art'
      : course.category === 'language'
      ? isZh
        ? '多语种'
        : 'Language'
      : isZh
      ? '全脑'
      : 'Brain';

  const isPending =
    course.slug === 'short-course-art-teacher' ||
    (course.objectivesStatus === 'client-confirm' && !course.duration);

  return (
    <div className="bg-white rounded-2xl border border-surface-border p-5 sm:p-6 shadow-subtle hover:shadow-card transition-all flex flex-col justify-between group">
      <div className="space-y-4">
        {/* Course Related Visual Image (if present) */}
        {course.image && (
          <div className="relative h-44 w-full rounded-xl overflow-hidden border border-surface-border/80 bg-slate-100">
            <Image
              src={course.image}
              alt={course.title[lang]}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        {/* Top Badges & Duration */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-1.5">
            <Badge variant={badgeVariant} size="xs" dot>
              {categoryLabel}
            </Badge>
            {isPending && (
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                <AlertCircle className="w-2.5 h-2.5 text-amber-600" />
                <span>{isZh ? '待确认' : 'Pending Info'}</span>
              </span>
            )}
          </div>
          {course.duration && (
            <span className="text-[11px] text-ink-muted flex items-center gap-1 font-medium">
              <Clock className="w-3 h-3 text-slate-400" />
              <span>{course.duration[lang]}</span>
            </span>
          )}
        </div>

        {/* Title & Subtitle */}
        <div>
          <h3 className="text-xl font-bold text-brand-navy group-hover:text-brand-red transition-colors">
            {course.title[lang]}
          </h3>
          {course.subtitle && (
            <p className="text-xs font-semibold text-brand-blue mt-1 line-clamp-1">
              {course.subtitle[lang]}
            </p>
          )}
        </div>

        {/* Short Summary */}
        <p className="text-xs sm:text-sm text-ink-secondary line-clamp-3 leading-relaxed">
          {course.summary[lang]}
        </p>

        {/* Technique Tags */}
        {course.techniques && course.techniques.length > 0 && (
          <div className="pt-1 flex flex-wrap gap-1.5">
            {course.techniques.slice(0, 3).map((item, idx) => (
              <span
                key={idx}
                className="text-[11px] bg-surface-canvas text-slate-600 px-2 py-0.5 rounded border border-slate-200/80 font-medium"
              >
                {item[lang]}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Footer: Course Format & Action Link (No Price Numbers) */}
      <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between gap-3">
        <div className="text-xs text-ink-muted font-medium flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-brand-gold shrink-0" />
          <span>{isZh ? '小班互动 · 定制课表' : 'Small Group & 1-to-1'}</span>
        </div>
        <Link
          href={detailUrl}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy group-hover:text-brand-red transition-colors py-2 px-2.5 rounded-lg -my-2 -mr-2 min-h-[44px]"
        >
          <span>{isZh ? '课程详情' : 'Course Details'}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
