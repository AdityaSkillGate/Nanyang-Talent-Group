import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ArtCoursesFilter } from '@/components/course/ArtCoursesFilter';
import { FAQChatbot } from '@/components/faq/FAQChatbot';
import { MobileStickyCta } from '@/components/layout/MobileStickyCta';
import { FinalCtaSection } from '@/components/home/FinalCtaSection';
import { artCourses } from '@/content/art-courses';
import { Breadcrumb } from '@/components/ui';
import { Palette, ShieldAlert } from 'lucide-react';
import { BilingualBadge } from '@/components/ui/BilingualLabel';

import { seoMetadata } from '@/content/seo-metadata';

export const metadata: Metadata = seoMetadata.artHub.zh;

export default function ChineseArtCoursesPage() {
  return (
    <>
      <Header lang="zh" />
      <main className="flex-1 py-10 sm:py-14 bg-surface-canvas pb-20 lg:pb-16 space-y-12 sm:space-y-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Breadcrumb */}
          <Breadcrumb
            homeHref="/zh"
            items={[{ label: '美术课程' }]}
          />

          {/* Hero Banner */}
          <div className="bg-white rounded-2xl border border-surface-border p-8 sm:p-12 shadow-card space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-brand-red text-xs font-bold uppercase tracking-wider border border-red-200">
                <Palette className="w-3.5 h-3.5" />
                <span>南洋人才美术学院</span>
              </div>
              <BilingualBadge en="Since 1998" zh="始于1998年" color="red" />
              <BilingualBadge en="Singapore Standard" zh="新加坡专业教研" color="navy" />
            </div>

            <div className="space-y-3 max-w-3xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight font-chinese">
                美术体系与工作室课程
              </h1>
              <p className="text-lg text-brand-red font-semibold">
                Nanyang Talent Group Art Academy
              </p>
              <p className="text-base sm:text-lg text-ink-secondary leading-relaxed pt-1">
                融汇西方学院派严谨造型功底与东方正统书画文脉意境。专为青少儿、美术爱好者及致力于系统提高的专业学员量身打造阶梯递进式教学体系。
              </p>
            </div>

            {/* Quick Overview Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100 text-xs">
              <div className="p-4 rounded-xl bg-surface-canvas border border-surface-border space-y-1">
                <span className="font-bold text-brand-navy block">1. 西洋绘画与素描基石</span>
                <span className="text-ink-muted">静物石膏造型、透视明暗调子、水彩光影渲染与经典油画技法研习。</span>
              </div>
              <div className="p-4 rounded-xl bg-surface-canvas border border-surface-border space-y-1">
                <span className="font-bold text-brand-navy block">2. 东方正统书画文脉</span>
                <span className="text-ink-muted">五体书法（楷书至篆书）名帖临摹，国画山水、花鸟、写意与工笔技艺。</span>
              </div>
              <div className="p-4 rounded-xl bg-surface-canvas border border-surface-border space-y-1">
                <span className="font-bold text-brand-navy block">3. 启发创意与师资培训</span>
                <span className="text-ink-muted">儿童创意智力美术绘本动漫创作，以及专业美术师资进修研修班。</span>
              </div>
            </div>
          </div>

          {/* Interactive Filterable Courses Grid */}
          <div className="space-y-4">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-brand-navy font-chinese">
                探索全部 7 门美术学科课程
              </h2>
              <p className="text-sm text-ink-secondary">
                可按分类标签筛选或输入关键词检索，查看各课程教学大纲、单次课时时长与学费详情。
              </p>
            </div>
            <ArtCoursesFilter courses={artCourses} lang="zh" />
          </div>

          {/* Transparent Notice on Pricing */}
          <div className="bg-white rounded-xl border border-surface-border p-6 text-xs text-ink-muted flex items-start gap-3.5 shadow-xs">
            <ShieldAlert className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-semibold text-brand-navy block text-sm">
                学费与课表说明规范
              </span>
              <p className="leading-relaxed">
                本站所有课程介绍、课时长度与技法纲要均源自官方教研大纲。学费与班级套系支持动态配置，具体排期与优惠减免以正式报名确认为准。如需了解最新开班批次或预约试听评估，欢迎随时与招生顾问联络。
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
