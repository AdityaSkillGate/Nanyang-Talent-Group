import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import {
  Button,
  Badge,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  SectionHeader,
  Breadcrumb,
  BilingualText,
  BilingualBadge,
  FormInput,
  FormSelect,
  FormTextarea,
} from '@/components/ui';
import { ArrowRight, Sparkles, AlertCircle, ShieldCheck } from 'lucide-react';
import { seoMetadata } from '@/content/seo-metadata';

export const metadata: Metadata = seoMetadata.designSystem.zh;

export default function ChineseDesignSystemPage() {
  return (
    <>
      <Header lang="zh" />
      <main className="flex-1 py-12 sm:py-16 bg-surface-canvas space-y-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Header */}
          <div className="bg-white rounded-2xl border border-surface-border p-8 sm:p-10 shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="since" dot>
                新加坡机构审美标准
              </Badge>
              <Badge variant="navy">v1.0 设计系统</Badge>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-navy tracking-tight font-chinese">
              南洋人才集团设计规范与组件库
            </h1>
            <p className="text-lg text-ink-secondary max-w-3xl leading-relaxed">
              专为新加坡教育与文化机构打造的克制、优雅、现代的视觉系统。以深邃海蓝（Deep Navy）、南洋红（Nanyang Red）、天青蓝（Sky Blue）和典雅金（Warm Gold）为核心，注重排版留白、无障碍对比度与严谨的专业质感。
            </p>
          </div>

          {/* 1. Color Palette Tokens */}
          <section className="space-y-6">
            <SectionHeader
              eyebrow="色彩规范体系"
              eyebrowColor="navy"
              title="1. 品牌色彩与无障碍对比度"
              chineseTitle="Brand Palette & Contrast Standards"
              description="严格遵循 WCAG 2.1 AA 标准，确保文本在不同背景下的高对比度与易读性。"
            />

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="bg-white p-4 rounded-xl border border-surface-border shadow-xs space-y-3">
                <div className="h-16 rounded-lg bg-brand-navy border border-slate-200" />
                <div>
                  <span className="text-xs font-bold text-brand-navy block">深邃海蓝 (Navy)</span>
                  <span className="text-[11px] font-mono text-slate-500">#172A73</span>
                  <span className="text-[10px] text-emerald-600 font-semibold block mt-1">AAA 级合规 (11.2:1)</span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-surface-border shadow-xs space-y-3">
                <div className="h-16 rounded-lg bg-brand-red border border-slate-200" />
                <div>
                  <span className="text-xs font-bold text-brand-navy block">南洋红 (Red)</span>
                  <span className="text-[11px] font-mono text-slate-500">#D71920</span>
                  <span className="text-[10px] text-emerald-600 font-semibold block mt-1">AA 行动焦点对比度</span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-surface-border shadow-xs space-y-3">
                <div className="h-16 rounded-lg bg-brand-blue border border-slate-200" />
                <div>
                  <span className="text-xs font-bold text-brand-navy block">天青蓝 (Sky Blue)</span>
                  <span className="text-[11px] font-mono text-slate-500">#1FA7D6</span>
                  <span className="text-[10px] text-slate-500 block mt-1">地球圆弧与潜能强调</span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-surface-border shadow-xs space-y-3">
                <div className="h-16 rounded-lg bg-brand-gold border border-slate-200" />
                <div>
                  <span className="text-xs font-bold text-brand-navy block">典雅金 (Gold)</span>
                  <span className="text-[11px] font-mono text-slate-500">#C7A04B</span>
                  <span className="text-[10px] text-slate-500 block mt-1">历史印记与徽章点缀</span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-surface-border shadow-xs space-y-3">
                <div className="h-16 rounded-lg bg-surface-canvas border border-slate-300" />
                <div>
                  <span className="text-xs font-bold text-brand-navy block">画布白 (Canvas)</span>
                  <span className="text-[11px] font-mono text-slate-500">#F8F9FB</span>
                  <span className="text-[10px] text-slate-500 block mt-1">机构背景底色</span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-surface-border shadow-xs space-y-3">
                <div className="h-16 rounded-lg bg-ink-primary border border-slate-200" />
                <div>
                  <span className="text-xs font-bold text-brand-navy block">高阶正文字色</span>
                  <span className="text-[11px] font-mono text-slate-500">#172033</span>
                  <span className="text-[10px] text-emerald-600 font-semibold block mt-1">AAA 级正文 (14.8:1)</span>
                </div>
              </div>
            </div>
          </section>

          {/* 2. Interactive Buttons */}
          <section className="space-y-6">
            <SectionHeader
              eyebrow="交互组件"
              eyebrowColor="blue"
              title="2. 按钮层级与交互状态"
              chineseTitle="Button Hierarchy & Interactive States"
            />

            <div className="bg-white p-8 rounded-2xl border border-surface-border space-y-6">
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  主要行动点 (Primary Red)
                </Button>
                <Button variant="navy">机构深蓝 (Navy)</Button>
                <Button variant="secondary">次级边框 (Secondary)</Button>
                <Button variant="outline">幽灵轮廓 (Outline)</Button>
                <Button variant="ghost">文字悬停 (Ghost)</Button>
                <Button variant="gold" leftIcon={<Sparkles className="w-4 h-4" />}>
                  典雅金亮点 (Gold)
                </Button>
              </div>

              <div className="border-t border-slate-100 pt-4 flex flex-wrap items-center gap-4">
                <Button size="sm" variant="navy">小尺寸 (sm)</Button>
                <Button size="md" variant="primary">标准尺寸 (md)</Button>
                <Button size="lg" variant="navy">大型横幅按钮 (lg)</Button>
                <Button variant="primary" isLoading>处理中...</Button>
              </div>
            </div>
          </section>

          {/* 3. Badges */}
          <section className="space-y-6">
            <SectionHeader
              eyebrow="标签与元数据"
              eyebrowColor="gold"
              title="3. 徽章规范与待核准警示"
              chineseTitle="Badges & Verification Flags"
            />

            <div className="bg-white p-8 rounded-2xl border border-surface-border space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="since" dot>始于 1998 年</Badge>
                <Badge variant="red" dot>美术学院</Badge>
                <Badge variant="blue" dot>语言研习</Badge>
                <Badge variant="gold" dot>全脑智力</Badge>
                <Badge variant="warning" dot icon={<AlertCircle className="w-3.5 h-3.5" />}>
                  待客户最终确认 (Client-Confirm)
                </Badge>
              </div>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <BilingualBadge en="Oil Painting" zh="油画技法" color="red" />
                <BilingualBadge en="General English" zh="通用英语" color="blue" />
                <BilingualBadge en="Right Brain" zh="右脑潜能" color="gold" />
              </div>
            </div>
          </section>

          {/* 4. Motion Guidelines */}
          <section className="bg-brand-navy-dark text-white p-8 rounded-2xl border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-brand-gold text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>CSS 优先动效与无障碍支持</span>
            </div>
            <h3 className="text-xl font-bold font-chinese">
              克制优雅的机构动画原则
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
              所有动效基于纯 CSS 硬件加速关键帧构建，执行周期均严格控制在 150ms 至 350ms 内，杜绝浮夸躁动的游戏特效。全站原生适配 `@media (prefers-reduced-motion: reduce)`，保障视觉敏感用户的舒适体验。
            </p>
          </section>
        </div>
      </main>
      <Footer lang="zh" />
    </>
  );
}
