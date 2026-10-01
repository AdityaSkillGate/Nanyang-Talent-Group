'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Language } from '@/content/types';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FAQChatbot } from '@/components/faq/FAQChatbot';
import { MobileStickyCta } from '@/components/layout/MobileStickyCta';
import { Breadcrumb, Badge } from '@/components/ui';
import { BilingualBadge } from '@/components/ui/BilingualLabel';
import { siteConfig } from '@/data/site-config';
import { recruitmentContent } from '@/content/student-recruitment';
import {
  Compass,
  FileCheck,
  ShieldCheck,
  PlaneTakeoff,
  GraduationCap,
  ArrowRight,
  ExternalLink,
  MessageCircle,
  Phone,
  Sparkles,
  Building,
  CheckCircle2,
  Clock,
  Users,
  Award,
  Globe2,
} from 'lucide-react';

interface StudentRecruitmentViewProps {
  lang: Language;
}

export const StudentRecruitmentView: React.FC<StudentRecruitmentViewProps> = ({ lang }) => {
  const isZh = lang === 'zh';
  const prefix = isZh ? '/zh' : '';
  const data = recruitmentContent;

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
        return <GraduationCap className="w-6 h-6 text-brand-navy" />;
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
                    <GraduationCap className="w-4 h-4" />
                    <span>{data.hero.badge[lang]}</span>
                  </div>
                  <BilingualBadge en="Study in Singapore" zh="新加坡权威留学" color="navy" />
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight leading-tight">
                  {data.hero.title[lang]}
                </h1>

                <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
                  {data.hero.subtitle[lang]}
                </p>

                {/* Hero CTAs */}
                <div className="pt-2 flex flex-wrap items-center gap-3.5">
                  <a
                    href={siteConfig.contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[46px] rounded-xl text-sm font-bold text-white bg-brand-red hover:bg-brand-red-hover transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{isZh ? 'WhatsApp 免费咨询' : 'Inquire on WhatsApp'}</span>
                  </a>
                  <Link
                    href={`${prefix}/contact`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[46px] rounded-xl text-sm font-semibold text-brand-navy hover:text-brand-red bg-slate-100 hover:bg-slate-200 transition-colors"
                  >
                    <span>{isZh ? '提交在线咨询' : 'Submit Online Enquiry'}</span>
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
                    <span>{isZh ? '官方合规招生代表 · 规范学生准证办理' : 'Official Educational Representation & ICA Pass Processing'}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ========================================================= */}
          {/* 2. OFFICIAL PARTNER INSTITUTIONS                          */}
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

              {/* Future institution notice */}
              <div className="p-3 px-4 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-900 text-xs flex items-center gap-2 shrink-0">
                <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                <span>{data.partnerSection.futureNote[lang]}</span>
              </div>
            </div>

            {/* Partner Cards */}
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
                        <span>{partner.edutrust[lang]}</span>
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
                          ? `您好，我想咨询报读南洋亚洲学院（Nanyang Asia College）的课程与申请流程。`
                          : `Hello, I would like to inquire about admission to Nanyang Asia College.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 hover:underline"
                    >
                      {isZh ? '申请此院校 →' : 'Apply via NTG →'}
                    </a>
                  </div>
                </div>
              ))}

              {/* Expansion Announcement Card */}
              <div className="bg-gradient-to-br from-slate-50 to-slate-100/60 rounded-2xl border-2 border-dashed border-slate-300 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-white text-brand-navy flex items-center justify-center shadow-xs">
                    <Globe2 className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-navy">
                      {isZh ? '更多顶尖合作院校拓展中' : 'Upcoming Partner Institutions'}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mt-0.5">
                      {isZh ? '高教预科 · 艺术院校 · 国际中小学' : 'Polytechnic, Degree & Private Pathways'}
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                    {isZh
                      ? '南洋人才集团正在与新加坡及国际多所知名大学、艺术院校与教育基金会建立紧密招生伙伴关系，相关合作名单与招生简章将于核准后持续公布。'
                      : 'We are actively expanding formal recruitment representation with premier Singapore and international universities. Additional accredited partners will be added soon.'}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{isZh ? '最新合作即将发布' : 'Announcements Forthcoming'}</span>
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* ========================================================= */}
          {/* 3. 4 KEY SERVICES PROVIDED BY STUDENT AGENTS (Image 2)     */}
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
          {/* 4. ADMISSIONS WORKFLOW PROGRESSION                        */}
          {/* ========================================================= */}
          <section className="bg-white rounded-2xl border border-surface-border p-6 sm:p-10 shadow-xs space-y-8">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-wider font-bold text-brand-gold block">
                {isZh ? '全流程服务规范' : 'Structured Roadmap'}
              </span>
              <h2 className="text-2xl font-extrabold text-brand-navy">
                {isZh ? '从咨询到抵星入学 · 4步闭环' : 'From First Assessment to Campus Integration'}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-xl bg-surface-canvas border border-surface-border space-y-2">
                <span className="text-xs font-bold text-brand-red font-mono">STEP 01</span>
                <h4 className="text-sm font-bold text-brand-navy">
                  {isZh ? '学业背景诊断' : 'Profile Assessment'}
                </h4>
                <p className="text-xs text-ink-muted leading-relaxed">
                  {isZh ? '评估学术成绩、英语水平及家庭预算，确定最佳院校与专业方案。' : 'Detailed evaluation of grades, English proficiency, and course goals.'}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-surface-canvas border border-surface-border space-y-2">
                <span className="text-xs font-bold text-brand-blue font-mono">STEP 02</span>
                <h4 className="text-sm font-bold text-brand-navy">
                  {isZh ? '材料合规与签约' : 'Application & Contract'}
                </h4>
                <p className="text-xs text-ink-muted leading-relaxed">
                  {isZh ? '指导准备公证书、翻译件，协助审阅标准学生合同，递交院校申请。' : 'Certified document collation, LOA issuance, and CPE contract review.'}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-surface-canvas border border-surface-border space-y-2">
                <span className="text-xs font-bold text-brand-gold font-mono">STEP 03</span>
                <h4 className="text-sm font-bold text-brand-navy">
                  {isZh ? 'ICA 学生准证办理' : 'ICA Visa & Solar+'}
                </h4>
                <p className="text-xs text-ink-muted leading-relaxed">
                  {isZh ? '全程负责新加坡移民局学生准证电子申报，顺利获取原则批准函（IPA）。' : 'Complete Solar+ electronic submission for In-Principle Approval (IPA).'}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-surface-canvas border border-surface-border space-y-2">
                <span className="text-xs font-bold text-emerald-600 font-mono">STEP 04</span>
                <h4 className="text-sm font-bold text-brand-navy">
                  {isZh ? '接机住宿与迎新' : 'Arrival & Campus Start'}
                </h4>
                <p className="text-xs text-ink-muted leading-relaxed">
                  {isZh ? '安排学生公寓或寄宿家庭，协调接机与新生报到，顺利融入新加坡学习生活。' : 'Accommodation setup, airport reception, and campus orientation support.'}
                </p>
              </div>
            </div>
          </section>

          {/* ========================================================= */}
          {/* 5. DIRECT CTA                                             */}
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
