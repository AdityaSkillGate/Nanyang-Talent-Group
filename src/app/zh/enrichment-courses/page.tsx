import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { EnrichmentCoursesFilter } from '@/components/course/EnrichmentCoursesFilter';
import { CategoryCard } from '@/components/course/CategoryCard';
import { FAQChatbot } from '@/components/faq/FAQChatbot';
import { MobileStickyCta } from '@/components/layout/MobileStickyCta';
import { FinalCtaSection } from '@/components/home/FinalCtaSection';
import { languageCourses, brainCourses } from '@/content/enrichment-courses';
import { Breadcrumb } from '@/components/ui';
import { Globe, BrainCircuit, ShieldAlert } from 'lucide-react';
import { BilingualBadge } from '@/components/ui/BilingualLabel';

import { seoMetadata } from '@/content/seo-metadata';

export const metadata: Metadata = seoMetadata.enrichmentHub.zh;

export default function ChineseEnrichmentCoursesPage() {
  const languageList = languageCourses.map((c) => ({
    name: c.title.zh,
    slug: c.slug,
    href: `/zh/enrichment-courses/language/${c.slug}`,
  }));

  const brainList = brainCourses.map((c) => ({
    name: c.title.zh,
    slug: c.slug,
    href: `/zh/enrichment-courses/brain/${c.slug}`,
  }));

  return (
    <>
      <Header lang="zh" />
      <main className="flex-1 py-10 sm:py-14 bg-surface-canvas pb-20 lg:pb-16 space-y-12 sm:space-y-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Breadcrumb */}
          <Breadcrumb
            homeHref="/zh"
            items={[{ label: '潜能与语言课程' }]}
          />

          {/* Hero Banner */}
          <div className="bg-white rounded-2xl border border-surface-border p-8 sm:p-12 shadow-card space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-brand-blue text-xs font-bold uppercase tracking-wider border border-sky-200">
                <Globe className="w-3.5 h-3.5" />
                <span>多语种与全脑潜能研发</span>
              </div>
              <BilingualBadge en="Since 1998" zh="始于1998年" color="blue" />
              <BilingualBadge en="Singapore Standard" zh="新加坡专业教研" color="navy" />
            </div>

            <div className="space-y-3 max-w-3xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight font-chinese">
                潜能与多语种课程体系
              </h1>
              <p className="text-lg text-brand-blue font-semibold">
                Nanyang Talent Group Enrichment Programmes
              </p>
              <p className="text-base sm:text-lg text-ink-secondary leading-relaxed pt-1">
                为学员构筑跨语种沟通自信与深层认知心智。涵盖互动式多语种小班精讲，以及基于认知科学的舒尔特专注力拓展、博赞思维导图与超强图像记忆训练。
              </p>
            </div>
          </div>

          {/* Reusable Category Cards Section */}
          <div className="space-y-4">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-wider font-bold text-brand-gold block">
                核心学科板块
              </span>
              <h2 className="text-2xl font-bold text-brand-navy font-chinese">
                两大核心办学领域
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Category Card 1: Language Courses */}
              <CategoryCard
                id="language"
                title="多语种研习体系"
                chineseTitle="5大国际交流语言 · 听说读写全方位精进"
                badge={{ en: 'Languages', zh: '语言学识' }}
                countLabel="5 门语种课程"
                description="注重纯正发音、严谨句法与实用对话沟通能力培养，帮助学员逐步掌握流畅的地道跨文化交流技巧。"
                highlights={[
                  '英语 6 级阶梯进阶，夯实语法体系与学术读写',
                  '华语约 3,000 常用字字形演化与情境语料积累',
                  '情境化小班互动与真实会话实操训练',
                  '开设日语、德语及韩语专属实用研修班',
                ]}
                coursesList={languageList}
                lang="zh"
              />

              {/* Category Card 2: Brain Intelligence */}
              <CategoryCard
                id="brain"
                title="全脑潜能与思维进阶"
                chineseTitle="6大认知科学训练模块 · 提升专注耐力与记忆效率"
                badge={{ en: 'Cognitive', zh: '全脑心智' }}
                countLabel="6 门认知课程"
                description="依托科学的认知训练法，通过舒尔特方格、辐射思维导图及图像联想记忆，激发深层学习潜能。"
                highlights={[
                  '5×5 舒尔特方格训练，有效拓展周边视野与抗干扰耐力',
                  '博赞思维导图，系统梳理知识逻辑与笔记结构',
                  '编码链与空间定位法，告别机械死记硬背',
                  '幼儿右脑形象思维与空间数理直觉启蒙',
                ]}
                coursesList={brainList}
                lang="zh"
              />
            </div>
          </div>

          {/* All 11 Filterable Courses Grid */}
          <div className="space-y-4 pt-4 border-t border-slate-200">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-brand-navy font-chinese">
                探索全部 11 门潜能与语言课程
              </h2>
              <p className="text-sm text-ink-secondary">
                可按分类标签快速筛选或输入关键词检索，查看各课程教学目标、课时安排及大纲要点。
              </p>
            </div>
            <EnrichmentCoursesFilter
              languageCourses={languageCourses}
              brainCourses={brainCourses}
              lang="zh"
            />
          </div>

          {/* Educational Disclosure & Pricing Notice */}
          <div className="bg-white rounded-xl border border-surface-border p-6 text-xs text-ink-muted flex items-start gap-3.5 shadow-xs">
            <ShieldAlert className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-semibold text-brand-navy block text-sm">
                教学说明与学费核准提示
              </span>
              <p className="leading-relaxed">
                本机构所有潜能课程内容严格基于原案教学体系，认知训练以专注力、记忆法与逻辑发散练习为主，杜绝任何夸大宣传。新加坡本地班次学费与排期待客户最终核准，具体开班情况请咨询招生顾问。
              </p>
            </div>
          </div>
        </div>

        {/* Admissions Final CTA */}
        <FinalCtaSection lang="zh" />
      </main>
      <Footer lang="zh" />
      <MobileStickyCta lang="zh" />
      <FAQChatbot lang="zh" />
    </>
  );
}
