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
  Briefcase,
  FileCheck,
  Rocket,
  Award,
  Users,
  Compass,
  ShieldCheck,
  Sparkles,
  Target,
  ArrowRight,
  MessageCircle,
  Phone,
  CheckCircle2,
  Clock,
  Check,
  ExternalLink,
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
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-brand-navy" />;
      case 'FileCheck':
        return <FileCheck className="w-6 h-6 text-emerald-600" />;
      case 'Rocket':
        return <Rocket className="w-6 h-6 text-brand-red" />;
      case 'Award':
        return <Award className="w-6 h-6 text-brand-gold" />;
      case 'Users':
        return <Users className="w-6 h-6 text-brand-blue" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-purple-600" />;
      case 'Building2':
      default:
        return <Building2 className="w-6 h-6 text-brand-red" />;
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
      <main className="flex-1 bg-surface-canvas min-h-screen py-10 sm:py-14 space-y-12 sm:space-y-16 pb-24 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
          {/* Breadcrumb */}
          <Breadcrumb
            homeHref={prefix || '/'}
            items={[{ label: data.hero.title[lang] }]}
          />

          {/* ========================================================= */}
          {/* 1. HERO SECTION                                           */}
          {/* ========================================================= */}
          <section className="bg-white rounded-3xl border border-surface-border p-6 sm:p-10 shadow-card space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/5 text-brand-navy text-xs font-bold uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>{data.hero.badge[lang]}</span>
                  </div>
                  <BilingualBadge en="B2B & Migration" zh="商业设立与移居专享" color="gold" />
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
                      className="p-3.5 rounded-2xl bg-surface-canvas border border-surface-border text-center space-y-1"
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
                    <span>{isZh ? '预约在线评估' : 'Book Consultation'}</span>
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
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/95 via-brand-navy/40 to-black/10 flex flex-col justify-end p-6 text-white space-y-3">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold self-start">
                      <Briefcase className="w-3.5 h-3.5 text-brand-gold" />
                      <span>{isZh ? '新加坡官方合规落地服务' : 'Official Singapore Setup & Migration'}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      {isZh ? '商业设立 · 工作签证 · 永久居留' : 'Incorporation · Work Passes · Permanent Residency'}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {isZh
                        ? '全流程专业对接新加坡 ACRA、MOM 及 ICA，为企业与个人提供高效、透明、合规的一站式保障。'
                        : 'Seamless liaison with ACRA, MOM, and ICA for global entrepreneurs, executives, and families.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ========================================================= */}
          {/* QUICK JUMP PILLS                                          */}
          {/* ========================================================= */}
          <div className="bg-white rounded-2xl border border-surface-border p-3 shadow-xs">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-0.5 scrollbar-thin">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 pl-2 shrink-0">
                {isZh ? '快捷直达:' : 'Quick Jump:'}
              </span>
              {data.pillarsSection.pillars.map((p) => (
                <a
                  key={p.id}
                  href={`#${p.id}`}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-50 hover:bg-red-50 text-slate-700 hover:text-brand-red border border-slate-200 hover:border-red-200 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
                >
                  <span className="text-[10px] font-mono font-bold text-slate-400">{p.order}</span>
                  <span>{p.title[lang]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* ========================================================= */}
          {/* 2. 7 SERVICES SHOWCASE WITH IMAGES                        */}
          {/* ========================================================= */}
          <section className="space-y-8">
            <div className="space-y-2 text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-brand-red text-xs uppercase tracking-wider font-bold">
                <Building2 className="w-3.5 h-3.5" />
                <span>{data.pillarsSection.badge[lang]}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-navy tracking-tight">
                {data.pillarsSection.title[lang]}
              </h2>
              <p className="text-sm sm:text-base text-ink-secondary">
                {data.pillarsSection.subtitle[lang]}
              </p>
            </div>

            {/* List of 7 Services with dedicated images */}
            <div className="space-y-8">
              {data.pillarsSection.pillars.map((pillar, idx) => {
                const isEven = idx % 2 === 1;
                return (
                  <div
                    key={pillar.id}
                    id={pillar.id}
                    className="scroll-mt-28 bg-white rounded-3xl border border-surface-border overflow-hidden shadow-card hover:border-slate-300 transition-all group"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                      {/* Image Column */}
                      <div
                        className={`relative h-64 sm:h-80 lg:h-auto min-h-[280px] lg:col-span-5 ${
                          isEven ? 'lg:order-2' : 'lg:order-1'
                        } bg-slate-900`}
                      >
                        <Image
                          src={pillar.image}
                          alt={pillar.title[lang]}
                          fill
                          sizes="(max-width: 1024px) 100vw, 500px"
                          className="object-cover group-hover:scale-102 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent flex flex-col justify-between p-5 text-white">
                          <div className="flex items-center justify-between">
                            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 text-brand-navy shadow-xs backdrop-blur-md">
                              {pillar.badge[lang]}
                            </span>
                            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-black/40 text-white backdrop-blur-md">
                              #{pillar.order}
                            </span>
                          </div>

                          <div className="flex items-center gap-2 text-xs bg-slate-950/70 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 self-start">
                            <Clock className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                            <span>
                              {isZh ? '官方周期:' : 'Processing:'} {pillar.processingTime[lang]}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Content Column */}
                      <div
                        className={`p-6 sm:p-8 lg:p-10 lg:col-span-7 flex flex-col justify-between space-y-6 ${
                          isEven ? 'lg:order-1' : 'lg:order-2'
                        }`}
                      >
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                              {getPillarIcon(pillar.icon)}
                            </div>
                            <div>
                              <span className="text-[11px] font-bold text-brand-red uppercase tracking-wider block">
                                {isZh ? '项目' : 'Service'} {pillar.order} · {pillar.badge[lang]}
                              </span>
                              <h3 className="text-xl sm:text-2xl font-bold text-brand-navy">
                                {pillar.title[lang]}
                              </h3>
                            </div>
                          </div>

                          <p className="text-sm font-semibold text-brand-blue">
                            {pillar.shortDesc[lang]}
                          </p>

                          <p className="text-sm text-ink-secondary leading-relaxed">
                            {pillar.description[lang]}
                          </p>

                          {/* Target Audience Pill */}
                          <div className="p-3 rounded-xl bg-surface-canvas border border-surface-border text-xs text-ink-muted">
                            <span className="font-bold text-brand-navy mr-1.5">
                              {isZh ? '适用对象:' : 'Who It’s For:'}
                            </span>
                            <span>{pillar.targetAudience[lang]}</span>
                          </div>

                          {/* Deliverables Checklist */}
                          <div className="space-y-2 pt-1">
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                              {isZh ? '核心服务内容与交付成果' : 'Key Inclusions & Deliverables'}
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                              {pillar.deliverables.map((item, dIdx) => (
                                <div key={dIdx} className="flex items-start gap-2 text-xs text-ink-secondary">
                                  <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                                    <Check className="w-3 h-3" />
                                  </div>
                                  <span className="leading-snug">{item[lang]}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Card Bottom CTA */}
                        <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                          <div className="flex items-center gap-2 text-xs text-ink-muted">
                            <ShieldCheck className="w-4 h-4 text-emerald-600" />
                            <span>{isZh ? '100% 官方合规申报保障' : 'Guaranteed Singapore Compliance'}</span>
                          </div>

                          <div className="flex items-center gap-2">
                            <a
                              href={`${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
                                `Hello Nanyang Talent Group, I would like to inquire about: ${pillar.title.en}`
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
                            >
                              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                              <span>{isZh ? '咨询该项目' : 'Inquire on WhatsApp'}</span>
                            </a>
                            <Link
                              href={`${prefix}/contact`}
                              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-brand-navy hover:bg-brand-navy-dark transition-colors"
                            >
                              <span>{isZh ? '预约申请' : 'Get Started'}</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ========================================================= */}
          {/* 3. CORE INSTITUTIONAL ADVANTAGES                          */}
          {/* ========================================================= */}
          <section className="bg-surface-canvas rounded-3xl border border-surface-border p-6 sm:p-10 space-y-8">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-wider font-bold text-brand-gold block">
                {isZh ? '权威机构优势' : 'Why Partner With Nanyang Talent Group'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight">
                {isZh ? '以二十余载教育与官方公信力 · 保障商业设立与移居成功率' : 'Proven Singapore Heritage Grounding Commercial & Residency Success'}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.advantages.map((adv, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-surface-border shadow-2xs space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center">
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
          <section className="bg-white rounded-3xl border border-surface-border p-6 sm:p-10 shadow-xs space-y-8">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-wider font-bold text-brand-red block">
                {isZh ? '规范服务流程' : 'Structured 4-Step Process'}
              </span>
              <h2 className="text-2xl font-extrabold text-brand-navy">
                {isZh ? '4步高效闭环 · 从需求评估到官方获批' : 'From Initial Assessment to Official Approval'}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {data.process.map((step, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-surface-canvas border border-surface-border space-y-2 relative"
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
          <section className="relative overflow-hidden bg-gradient-to-br from-brand-navy-dark via-brand-navy to-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-card space-y-6">
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
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-md"
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
