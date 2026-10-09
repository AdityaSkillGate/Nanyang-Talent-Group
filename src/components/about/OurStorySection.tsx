import React from 'react';
import Image from 'next/image';
import { Language } from '@/content/types';
import { siteConfig } from '@/data/site-config';
import { Building2, Compass, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { BilingualBadge } from '@/components/ui/BilingualLabel';

interface OurStorySectionProps {
  lang: Language;
}

export const OurStorySection: React.FC<OurStorySectionProps> = ({ lang }) => {
  const isZh = lang === 'zh';

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-widest text-brand-gold font-bold">
                  {isZh ? '办学渊源与教学历程' : 'Our Educational Journey'}
                </span>
                <BilingualBadge en="Since 1998" zh="始于1998年" color="red" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
                {isZh ? '以心育人 · 启发天赋潜能' : 'Educating with Purpose & Integrity'}
              </h2>
            </div>

            <div className="space-y-4 text-base text-ink-secondary leading-relaxed">
              <p>
                {isZh
                  ? `南洋人才集团历经数十载教学积淀，迄今已陪伴并见证了超过 37,500 名来自新加坡本土及全球 11 个以上国家和地区的学员在这里系统研习与成长。`
                  : `With educational roots tracing through decades of continuous teaching in Singapore, Nanyang Talent Group has welcomed over 37,500 students from more than 11 countries across the region.`}
              </p>
              <p>
                {isZh
                  ? `集团官方标识由红、蓝、墨色笔触凝练而成，并深刻铭记“Since 1998”的建校初心。该标识体现了西方现代造型艺术体系、东方正统书法水墨文脉，以及多语种国际沟通能力在南洋这片多元文化沃土上的深厚融合。`
                  : `Our official brand emblem anchors our continuous journey since 1998, reflecting the integration of Western artistic traditions, Eastern Chinese calligraphic roots, and multi-linguistic fluency within Singapore’s vibrant multicultural society.`}
              </p>
              <p>
                {isZh
                  ? `作为正规立案的新加坡教育实体，南洋人才集团（Nanyang Talent Group Pte Ltd）始终秉持严谨的办学标准与学员导向的渐进式教案，确保每位学习者在安全、充满鼓励与启发性的环境中探索独立审美与思维力量。`
                  : `Operating strictly as Nanyang Talent Group Pte Ltd, we maintain institutional clarity and pedagogical discipline. We deliver structured, learner-centered instruction that nurtures both classical discipline and contemporary creative confidence.`}
              </p>
            </div>

            {/* Institutional Integrity Note */}
            <div className="p-5 rounded-2xl bg-surface-canvas border border-surface-border space-y-2">
              <div className="flex items-center gap-2 text-brand-navy font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-brand-red flex-shrink-0" />
                <span>
                  {isZh ? '官方办学实体与规范承诺' : 'Institutional Commitment & Transparency'}
                </span>
              </div>
              <p className="text-xs text-ink-muted leading-relaxed">
                {isZh
                  ? '本机构以统一的教学标准开展纯美术、多语种研修及全脑思维启发教学，坚持真实办学记录，不夸大宣传，不混淆不同实体的注册信息。'
                  : 'Nanyang Talent Group Pte Ltd maintains clear institutional transparency across all disciplines, upholding verified educational standards, factual milestones, and learner-first instructional ethics.'}
              </p>
            </div>
          </div>

          {/* Right Column: Institutional Identity Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl border border-surface-border shadow-card space-y-6">
              <div className="text-center space-y-3">
                <div className="relative mx-auto h-36 w-36 sm:h-40 sm:w-40 aspect-square">
                  <Image
                    src="/assets/logo-vertical.png"
                    alt={isZh ? '南洋人才集团官方标识' : 'Nanyang Talent Group Logo'}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="text-xs text-ink-muted">
                  {isZh ? '官方注册视觉标识 (Official Identity)' : 'Official Registered Identity Mark'}
                </div>
              </div>

              <div className="border-t border-slate-100 pt-5 space-y-3 text-xs text-ink-secondary">
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                  <span className="font-semibold text-brand-navy">
                    {isZh ? '注册公司名称' : 'Registered Entity'}
                  </span>
                  <span className="font-mono text-slate-800">
                    {siteConfig.name.en}
                  </span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                  <span className="font-semibold text-brand-navy">
                    {isZh ? '中文名称' : 'Chinese Name'}
                  </span>
                  <span className="font-chinese font-bold text-brand-red">
                    {siteConfig.name.zh}
                  </span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                  <span className="font-semibold text-brand-navy">
                    {isZh ? '历史渊源印记' : 'Heritage Mark'}
                  </span>
                  <span className="font-semibold text-brand-navy">
                    {isZh ? `始于 ${siteConfig.sinceYear} 年` : `Since ${siteConfig.sinceYear}`}
                  </span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                  <span className="font-semibold text-brand-navy">
                    {isZh ? '教学核心领域' : 'Core Disciplines'}
                  </span>
                  <span className="text-right">
                    {isZh ? '美术 · 语言 · 全脑' : 'Art • Languages • Brain'}
                  </span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <span className="font-semibold text-brand-navy">
                    {isZh ? '教学管理体系' : 'Pedagogy Standard'}
                  </span>
                  <span className="text-emerald-700 font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{isZh ? '渐进式阶梯教案' : 'Progressive Syllabus'}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
