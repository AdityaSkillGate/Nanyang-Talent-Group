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
import { jobPlacementContent } from '@/content/job-placement';
import {
  Compass,
  FileCheck,
  ShieldCheck,
  PlaneTakeoff,
  GraduationCap,
  ArrowRight,
  ExternalLink,
  MessageCircle,
  Sparkles,
  Building,
  CheckCircle2,
  Clock,
  Award,
  Globe2,
  Briefcase,
  Users,
  Building2,
} from 'lucide-react';

interface JobPlacementViewProps {
  lang: Language;
}

export const JobPlacementView: React.FC<JobPlacementViewProps> = ({ lang }) => {
  const isZh = lang === 'zh';
  const prefix = isZh ? '/zh' : '';
  const data = jobPlacementContent;

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-6 h-6 text-brand-red" />;
      case 'FileCheck':
        return <FileCheck className="w-6 h-6 text-brand-blue" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-brand-gold" />;
      case 'PlaneTakeoff':
        return <PlaneTakeoff className="w-6 h-6 text-emerald-600" />;
      default:
        return <Briefcase className="w-6 h-6 text-brand-navy" />;
    }
  };

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-brand-red" />;
      case 'Award':
        return <Award className="w-5 h-5 text-brand-gold" />;
      case 'Palette':
        return <Sparkles className="w-5 h-5 text-purple-600" />;
      case 'Globe2':
      default:
        return <Globe2 className="w-5 h-5 text-brand-blue" />;
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
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-brand-red text-xs font-bold uppercase tracking-wider">
                    <Briefcase className="w-4 h-4" />
                    <span>{data.hero.badge[lang]}</span>
                  </div>
                  <BilingualBadge en="Singapore Careers" zh="新加坡职场推荐" color="navy" />
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight leading-tight">
                  {data.hero.title[lang]}
                </h1>

                <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
                  {data.hero.subtitle[lang]}
                </p>

                {/* Placement Stats Bar */}
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
                    <span>{isZh ? 'WhatsApp 咨询就业顾问' : 'Inquire on WhatsApp'}</span>
                  </a>
                  <Link
                    href={`${prefix}/contact`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[46px] rounded-xl text-sm font-semibold text-brand-navy hover:text-brand-red bg-slate-100 hover:bg-slate-200 transition-colors"
                  >
                    <span>{isZh ? '在线提交求职简历' : 'Submit Resume / Inquiry'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Hero Image */}
              <div className="lg:col-span-5">
                <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-subtle border border-surface-border bg-slate-100">
                  <Image
                    src={data.hero.image}
                    alt={data.hero.title[lang]}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 520px"
                    className="object-cover"
                  />
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/60 backdrop-blur-md text-white border border-white/15 text-xs flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{isZh ? '官方企业雇主直聘内推 · 人力部准证规范指引' : 'Direct Enterprise Referral & MOM Work Pass Advisory'}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ========================================================= */}
          {/* 2. STRATEGIC ALLIANCES & PARTNER SECTION                   */}
          {/* ========================================================= */}
          <section className="bg-surface-canvas rounded-2xl border border-surface-border p-6 sm:p-10 space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-brand-gold">
                  <Building className="w-4 h-4" />
                  <span>{data.partnerSection.badge[lang]}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight">
                  {data.partnerSection.title[lang]}
                </h2>
                <p className="text-sm sm:text-base text-ink-secondary max-w-2xl">
                  {data.partnerSection.subtitle[lang]}
                </p>
              </div>

              {/* Expansion Notice */}
              <div className="p-3 px-4 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-900 text-xs flex items-center gap-2 shrink-0">
                <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                <span>{data.partnerSection.futureNote[lang]}</span>
              </div>
            </div>

            {/* Strategic Partner Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.partnerSection.partners.map((partner, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-surface-border p-6 sm:p-8 shadow-subtle hover:shadow-card transition-all flex flex-col justify-between group space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="relative h-14 w-44 bg-slate-50 p-2 rounded-xl border border-slate-100 flex items-center justify-center shrink-0">
                        <Image
                          src={partner.logo}
                          alt={partner.name[lang]}
                          fill
                          sizes="176px"
                          className="object-contain p-1"
                        />
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
                        <Award className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{partner.badge[lang]}</span>
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-brand-navy group-hover:text-brand-red transition-colors">
                        {partner.name[lang]}
                      </h3>
                      <p className="text-xs font-semibold text-brand-gold mt-0.5">
                        {partner.role[lang]}
                      </p>
                      <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-navy" />
                        <span>{partner.compliance[lang]}</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                      {partner.description[lang]}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-navy hover:text-brand-red transition-colors group/link"
                    >
                      <span>{isZh ? '访问官方院校网站' : 'Visit Official Portal'}</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                    </a>
                    <a
                      href={`${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
                        isZh
                          ? `您好，我想咨询新加坡就业安置服务与企业岗位内推机会。`
                          : `Hello, I would like to inquire about Singapore job placement and enterprise referral opportunities.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 hover:underline"
                    >
                      {isZh ? '咨询就业服务 →' : 'Inquire Placement →'}
                    </a>
                  </div>
                </div>
              ))}

              {/* Enterprise Network Expansion Card */}
              <div className="bg-gradient-to-br from-slate-50 to-slate-100/60 rounded-2xl border-2 border-dashed border-slate-300 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-white text-brand-navy flex items-center justify-center shadow-xs">
                    <Building2 className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-navy">
                      {isZh ? '新加坡多行业企业雇主持续拓展' : 'Continuous Singapore Employer Onboarding'}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mt-0.5">
                      {isZh ? '教育师资 · 商业贸易 · 创意设计 · 科技服务' : 'Education, Commerce, Creative Design & Technology'}
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                    {isZh
                      ? '南洋人才集团正在与新加坡多家跨国企业、私立教育连锁集团、知名设计事务所及商业机构建立深度人才引荐渠道，优质高薪岗位持续更新中。'
                      : 'We actively expand direct employer referral channels across Singapore corporations, international school chains, creative design studios, and commercial enterprises.'}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{isZh ? '更多企业合作通道实时接入' : 'New Employer Channels Active'}</span>
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* ========================================================= */}
          {/* 3. 4 KEY PLACEMENT SERVICES (IMAGE 2 STYLE)               */}
          {/* ========================================================= */}
          <section className="bg-white rounded-2xl border border-surface-border p-6 sm:p-10 shadow-xs space-y-10">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-brand-red">
                <ShieldCheck className="w-4 h-4" />
                <span>{data.keyServicesSection.badge[lang]}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight">
                {data.keyServicesSection.title[lang]}
              </h2>
              <p className="text-sm sm:text-base text-ink-secondary max-w-2xl">
                {data.keyServicesSection.subtitle[lang]}
              </p>
            </div>

            {/* 4 Core Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {data.keyServicesSection.services.map((service) => (
                <div
                  key={service.id}
                  className="p-6 sm:p-7 rounded-2xl bg-surface-canvas border border-surface-border hover:border-slate-300 transition-all flex flex-col justify-between space-y-5"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-white border border-surface-border flex items-center justify-center shadow-xs">
                        {getServiceIcon(service.icon)}
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        {service.order}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-brand-navy">
                        {service.title[lang]}
                      </h3>
                      <p className="text-xs font-semibold text-brand-blue mt-1">
                        {service.shortDesc[lang]}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                      {service.description[lang]}
                    </p>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="pt-3 border-t border-slate-200/80 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                      {isZh ? '服务支持细项' : 'Key Inclusions'}
                    </span>
                    <ul className="space-y-1.5">
                      {service.deliverables.map((item, idx) => (
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
          {/* 4. WHO WE SERVE: 4 CANDIDATE PROFILES                     */}
          {/* ========================================================= */}
          <section className="bg-surface-canvas rounded-2xl border border-surface-border p-6 sm:p-10 space-y-8">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-wider font-bold text-brand-gold block">
                {isZh ? '服务适用对象' : 'Target Candidate Profiles'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight">
                {isZh ? '精准赋能不同背景求职者 · 助您脱颖而出' : 'Tailored Career Support for Every Professional Stage'}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.candidateCategories.map((cat, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white border border-surface-border shadow-2xs space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center">
                      {getCategoryIcon(cat.icon)}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-brand-navy">
                        {cat.title[lang]}
                      </h4>
                      <span className="text-[11px] font-semibold text-brand-red block mt-0.5">
                        {cat.target[lang]}
                      </span>
                    </div>
                    <p className="text-xs text-ink-secondary leading-relaxed">
                      {cat.focus[lang]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ========================================================= */}
          {/* 5. 5-STEP PLACEMENT PROCESS ROADMAP                       */}
          {/* ========================================================= */}
          <section className="bg-white rounded-2xl border border-surface-border p-6 sm:p-10 shadow-xs space-y-8">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-wider font-bold text-brand-gold block">
                {isZh ? '全流程服务规范' : 'Structured Placement Roadmap'}
              </span>
              <h2 className="text-2xl font-extrabold text-brand-navy">
                {isZh ? '从初访诊断到入职落地 · 5步严谨闭环' : '5-Step Structured Placement Progression'}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {data.workflow.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-surface-canvas border border-surface-border space-y-2"
                >
                  <span className="text-xs font-bold text-brand-red font-mono">{item.step}</span>
                  <h4 className="text-sm font-bold text-brand-navy">
                    {item.title[lang]}
                  </h4>
                  <p className="text-xs text-ink-muted leading-relaxed">
                    {item.desc[lang]}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ========================================================= */}
          {/* 6. DIRECT CTA                                             */}
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

              <Link
                href={`${prefix}/contact`}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-brand-navy bg-white hover:bg-slate-100 transition-all"
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
