'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Language } from '@/content/types';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FAQChatbot } from '@/components/faq/FAQChatbot';
import { MobileStickyCta } from '@/components/layout/MobileStickyCta';
import { Breadcrumb } from '@/components/ui';
import { BilingualBadge } from '@/components/ui/BilingualLabel';
import { siteConfig } from '@/data/site-config';
import { corporateServicesContent } from '@/content/corporate-services';
import {
  Building2,
  UserCheck,
  GraduationCap,
  Globe2,
  Palette,
  Brain,
  ShieldCheck,
  Award,
  Sparkles,
  Target,
  ArrowRight,
  MessageCircle,
  Phone,
  CheckCircle2,
  Clock,
  Briefcase,
  Users,
  Compass,
} from 'lucide-react';

interface CorporateServicesViewProps {
  lang: Language;
}

export const CorporateServicesView: React.FC<CorporateServicesViewProps> = ({ lang }) => {
  const isZh = lang === 'zh';
  const prefix = isZh ? '/zh' : '';
  const data = corporateServicesContent;

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-brand-red" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-brand-blue" />;
      case 'Globe2':
        return <Globe2 className="w-6 h-6 text-emerald-600" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-brand-gold" />;
      case 'Brain':
        return <Brain className="w-6 h-6 text-purple-600" />;
      case 'Building2':
      default:
        return <Building2 className="w-6 h-6 text-brand-navy" />;
    }
  };

  const getAdvantageIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      case 'Award':
        return <Award className="w-5 h-5 text-brand-gold" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-brand-red" />;
      case 'Target':
      default:
        return <Target className="w-5 h-5 text-brand-blue" />;
    }
  };

  return (
    <>
      <Header lang={lang} />
      <main className="flex-1 bg-surface-canvas min-h-screen py-10 sm:py-14 space-y-14 sm:space-y-20 pb-24 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
          {/* Breadcrumb */}
          <Breadcrumb
            homeHref={prefix || '/'}
            items={[{ label: data.hero.title[lang] }]}
          />

          {/* ========================================================= */}
          {/* 1. HERO SECTION                                           */}
          {/* ========================================================= */}
          <section className="bg-white rounded-2xl border border-surface-border p-6 sm:p-10 shadow-card space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/5 text-brand-navy text-xs font-bold uppercase tracking-wider">
                    <Building2 className="w-4 h-4 text-brand-red" />
                    <span>{data.hero.badge[lang]}</span>
                  </div>
                  <BilingualBadge en="B2B & Institutional" zh="企业与机构专享" color="gold" />
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight leading-tight">
                  {data.hero.title[lang]}
                </h1>

                <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
                  {data.hero.subtitle[lang]}
                </p>

                {/* Hero Metrics Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  {data.hero.stats.map((st, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-surface-canvas border border-surface-border text-center space-y-1"
                    >
                      <span className="text-xl sm:text-2xl font-black text-brand-navy block">
                        {st.value}
                      </span>
                      <span className="text-[11px] text-ink-muted block leading-tight font-medium">
                        {st.label[lang]}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Hero CTAs */}
                <div className="pt-2 flex flex-wrap items-center gap-3.5">
                  <a
                    href={siteConfig.contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[46px] rounded-xl text-sm font-bold text-white bg-brand-red hover:bg-brand-red-hover transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{isZh ? 'WhatsApp 快速洽询' : 'Inquire on WhatsApp'}</span>
                  </a>
                  <a
                    href={`tel:${siteConfig.contact.officePhone.replace(/\s+/g, '')}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[46px] rounded-xl text-sm font-semibold text-slate-800 hover:text-brand-navy bg-slate-100 hover:bg-slate-200 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-brand-gold" />
                    <span>Office: {siteConfig.contact.officePhone}</span>
                  </a>
                  <Link
                    href={`${prefix}/contact`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[46px] rounded-xl text-sm font-semibold text-brand-navy hover:text-brand-red border border-slate-200 hover:bg-slate-50 transition-colors"
                  >
                    <span>{isZh ? '提交合作意向' : 'Submit RFP / Inquiry'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Hero Right Visual Card */}
              <div className="lg:col-span-5">
                <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden shadow-subtle border border-surface-border bg-slate-900">
                  <Image
                    src={data.hero.image}
                    alt={data.hero.title[lang]}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 520px"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/95 via-brand-navy/35 to-black/10 flex flex-col justify-end p-6 text-white space-y-3">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold self-start">
                      <Briefcase className="w-3.5 h-3.5 text-brand-gold" />
                      <span>{isZh ? '新加坡企业综合人才解决方案' : 'Enterprise Talent & Training Hub'}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      {isZh ? '定制化 · 产教融合 · 跨学科赋能' : 'Customized · Collaborative · Cross-Disciplinary'}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {isZh
                        ? '全方位满足新加坡企业在人才引育、团队建设与高管潜能提升上的多维需求。'
                        : 'Empowering organizations across Singapore with vetted talent, executive agility, and cultural wellness.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ========================================================= */}
          {/* 2. 6 CORPORATE SOLUTION PILLARS                           */}
          {/* ========================================================= */}
          <section className="bg-white rounded-2xl border border-surface-border p-6 sm:p-10 shadow-xs space-y-10">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-brand-red">
                <Building2 className="w-4 h-4" />
                <span>{data.pillarsSection.badge[lang]}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight">
                {data.pillarsSection.title[lang]}
              </h2>
              <p className="text-sm sm:text-base text-ink-secondary max-w-3xl">
                {data.pillarsSection.subtitle[lang]}
              </p>
            </div>

            {/* 6 Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.pillarsSection.pillars.map((pillar) => (
                <div
                  key={pillar.id}
                  className="p-6 rounded-2xl bg-surface-canvas border border-surface-border hover:border-slate-300 hover:shadow-subtle transition-all flex flex-col justify-between space-y-5 group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-white border border-surface-border flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                        {getPillarIcon(pillar.icon)}
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-white border border-slate-200 text-slate-600">
                        {pillar.badge[lang]}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-brand-navy group-hover:text-brand-red transition-colors">
                        {pillar.title[lang]}
                      </h3>
                      <p className="text-xs font-semibold text-brand-blue mt-1">
                        {pillar.shortDesc[lang]}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                      {pillar.description[lang]}
                    </p>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="pt-3 border-t border-slate-200/80 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                      {isZh ? '交付内容及亮点' : 'Key Deliverables'}
                    </span>
                    <ul className="space-y-1.5">
                      {pillar.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-ink-secondary">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item[lang]}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ========================================================= */}
          {/* 3. CORE INSTITUTIONAL ADVANTAGES                          */}
          {/* ========================================================= */}
          <section className="bg-surface-canvas rounded-2xl border border-surface-border p-6 sm:p-10 space-y-8">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-wider font-bold text-brand-gold block">
                {isZh ? '权威机构优势' : 'Why Partner With Nanyang Talent Group'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight">
                {isZh ? '以二十余载教育公信力 · 赋能企业长效增长' : 'Educational Heritage Grounding Modern Corporate Excellence'}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.advantages.map((adv, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white border border-surface-border shadow-2xs space-y-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center">
                    {getAdvantageIcon(adv.icon)}
                  </div>
                  <h3 className="text-base font-bold text-brand-navy">
                    {adv.title[lang]}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                    {adv.desc[lang]}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ========================================================= */}
          {/* 4. 4-STEP ENGAGEMENT WORKFLOW                             */}
          {/* ========================================================= */}
          <section className="bg-white rounded-2xl border border-surface-border p-6 sm:p-10 shadow-xs space-y-8">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-wider font-bold text-brand-red block">
                {isZh ? '严谨合作流程' : 'Structured Engagement Methodology'}
              </span>
              <h2 className="text-2xl font-extrabold text-brand-navy">
                {isZh ? '4步高效闭环 · 从需求诊断到成果复盘' : 'From Needs Discovery to Sustained ROI'}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {data.process.map((step, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-surface-canvas border border-surface-border space-y-2 relative"
                >
                  <span className="text-xs font-bold text-brand-red font-mono block">
                    {step.step}
                  </span>
                  <h4 className="text-sm font-bold text-brand-navy">
                    {step.title[lang]}
                  </h4>
                  <p className="text-xs text-ink-muted leading-relaxed">
                    {step.desc[lang]}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ========================================================= */}
          {/* 5. DIRECT CTA SECTION                                     */}
          {/* ========================================================= */}
          <section className="relative overflow-hidden bg-gradient-to-br from-brand-navy-dark via-brand-navy to-brand-navy-deep text-white rounded-2xl p-8 sm:p-12 shadow-card space-y-6">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-gold text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{data.cta.badge[lang]}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                {data.cta.title[lang]}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {data.cta.subtitle[lang]}
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{data.cta.whatsappText[lang]}</span>
              </a>

              <a
                href={`tel:${siteConfig.contact.officePhone.replace(/\s+/g, '')}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-200 bg-white/10 hover:bg-white/20 transition-all border border-white/20"
              >
                <Phone className="w-4 h-4 text-brand-gold" />
                <span>{siteConfig.contact.officePhone}</span>
              </a>

              <Link
                href={`${prefix}/contact`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-brand-navy bg-white hover:bg-slate-100 transition-all"
              >
                <span>{data.cta.formText[lang]}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer lang={lang} />
      <MobileStickyCta lang={lang} />
      <FAQChatbot lang={lang} />
    </>
  );
};
