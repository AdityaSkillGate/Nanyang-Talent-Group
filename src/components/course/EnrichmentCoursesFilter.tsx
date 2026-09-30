'use client';

import React, { useState, useMemo } from 'react';
import { CourseDetail, Language } from '@/content/types';
import { CourseCard } from './CourseCard';
import { Search, Globe, Brain, Sparkles } from 'lucide-react';

interface EnrichmentCoursesFilterProps {
  languageCourses: CourseDetail[];
  brainCourses: CourseDetail[];
  lang: Language;
}

type EnrichmentCategory = 'all' | 'languages' | 'brain';

export const EnrichmentCoursesFilter: React.FC<EnrichmentCoursesFilterProps> = ({
  languageCourses,
  brainCourses,
  lang,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<EnrichmentCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const allCourses = useMemo(() => [...languageCourses, ...brainCourses], [languageCourses, brainCourses]);

  const filterTabs = [
    {
      id: 'all' as EnrichmentCategory,
      label: lang === 'zh' ? '全部强化课程' : 'All Enrichment Programmes',
      count: allCourses.length,
      icon: <Sparkles className="w-3.5 h-3.5" />,
    },
    {
      id: 'languages' as EnrichmentCategory,
      label: lang === 'zh' ? '多语种研习 (5大语种)' : 'Language Courses (5)',
      count: languageCourses.length,
      icon: <Globe className="w-3.5 h-3.5" />,
    },
    {
      id: 'brain' as EnrichmentCategory,
      label: lang === 'zh' ? '全脑潜能启发 (6大模块)' : 'Brain Intelligence (6)',
      count: brainCourses.length,
      icon: <Brain className="w-3.5 h-3.5" />,
    },
  ];

  const filteredCourses = useMemo(() => {
    let baseList = allCourses;
    if (selectedCategory === 'languages') {
      baseList = languageCourses;
    } else if (selectedCategory === 'brain') {
      baseList = brainCourses;
    }

    if (!searchQuery.trim()) {
      return baseList;
    }

    const q = searchQuery.toLowerCase().trim();
    return baseList.filter((course) => {
      const titleEn = course.title.en.toLowerCase();
      const titleZh = course.title.zh.toLowerCase();
      const summaryEn = course.summary.en.toLowerCase();
      const summaryZh = course.summary.zh.toLowerCase();
      const subtitleEn = course.subtitle?.en.toLowerCase() || '';
      const subtitleZh = course.subtitle?.zh.toLowerCase() || '';

      return (
        titleEn.includes(q) ||
        titleZh.includes(q) ||
        summaryEn.includes(q) ||
        summaryZh.includes(q) ||
        subtitleEn.includes(q) ||
        subtitleZh.includes(q)
      );
    });
  }, [allCourses, languageCourses, brainCourses, selectedCategory, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Category Tabs & Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-surface-border shadow-xs">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5" role="tablist" aria-label="Enrichment Course Filters">
          {filterTabs.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                  isActive
                    ? 'bg-brand-navy text-white shadow-xs'
                    : 'bg-surface-canvas text-ink-secondary hover:text-brand-navy hover:bg-slate-100 border border-slate-200/60'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-200/70 text-slate-600'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={lang === 'zh' ? '搜索语种、思维导图、全脑...' : 'Search language, mind map, brain...'}
            className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-navy bg-surface-canvas focus:bg-white transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Results Header Counter */}
      <div className="flex items-center justify-between text-xs text-ink-muted px-1">
        <span>
          {lang === 'zh'
            ? `显示 ${filteredCourses.length} 门强化研习课程`
            : `Showing ${filteredCourses.length} enrichment programmes`}
        </span>
        {selectedCategory !== 'all' && (
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="text-brand-navy hover:underline font-semibold"
          >
            {lang === 'zh' ? '重置筛选' : 'Reset filters'}
          </button>
        )}
      </div>

      {/* Courses Grid */}
      {filteredCourses.length === 0 ? (
        <div className="bg-white rounded-2xl border border-surface-border p-12 text-center space-y-3 shadow-xs">
          <Globe className="w-10 h-10 text-slate-300 mx-auto" />
          <h3 className="text-base font-bold text-brand-navy">
            {lang === 'zh' ? '未找到符合条件的课程' : 'No matching courses found'}
          </h3>
          <p className="text-xs text-ink-secondary max-w-sm mx-auto">
            {lang === 'zh'
              ? '请尝试更换关键词，或切换至“全部强化课程”查看。'
              : 'Try clearing your search query or switching categories.'}
          </p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-brand-navy text-white hover:bg-brand-navy-dark transition-colors"
          >
            {lang === 'zh' ? '查看全部课程' : 'View all courses'}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.slug} course={course} lang={lang} />
          ))}
        </div>
      )}
    </div>
  );
};
