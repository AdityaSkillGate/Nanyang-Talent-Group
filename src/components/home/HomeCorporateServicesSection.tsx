import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Language } from '@/content/types';
import { siteConfig } from '@/data/site-config';
import { corporateServicesContent } from '@/content/corporate-services';
import { 
  Building2, 
  ArrowRight, 
  Briefcase,
  FileCheck,
  Award,
  ShieldCheck, 
  MessageCircle,
  Phone,
  Clock,
} from 'lucide-react';

interface HomeCorporateServicesSectionProps {
  lang: Language;
}

export const HomeCorporateServicesSection: React.FC<HomeCorporateServicesSectionProps> = ({ lang }) => {
  const isZh = lang === 'zh';
  const prefix = isZh ? '/zh' : '';
  const data = corporateServicesContent;

  // Highlight 4 representative services on the home page
  const featuredIds = ['company-registration', 'business-setup', 'employment-pass', 'permanent-residency'];
  const highlights = data.pillarsSection.pillars.filter(p => featuredIds.includes(p.id));

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-brand-navy" />;
      case 'FileCheck':
        return <FileCheck className="w-5 h-5 text-emerald-600" />;
      case 'Award':
        return <Award className="w-5 h-5 text-brand-gold" />;
      case 'Building2':
      default:
        return <Building2 className="w-5 h-5 text-brand-red" />;
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-slate-100">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-navy">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>{isZh ? '官方企业设立与合规移居 · 新加坡' : 'ACRA & MOM Accredited Services · Singapore'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight">
              {isZh ? '新加坡企业注册与全方位移民服务' : 'Business Incorporation & Immigration Services'}
            </h2>
            <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
              {isZh
                ? '为全球创业者、出海企业与高净值人士提供新加坡公司快速注册、法定秘书合规、高管工作准证、创业签证及全家永久居留一站式服务。'
                : 'One-stop professional solutions for Singapore company incorporation, corporate secretarial compliance, work passes (EP/S Pass/EntrePass), and permanent residency (PR).'}
            </p>
          </div>
          <div className="shrink-0">
            <Link
              href={`${prefix}/corporate-services`}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red hover:underline"
            >
              <span>{isZh ? '查看全部商业与移居项目 →' : 'Explore All Business & Immigration Services →'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 4 Featured Pillars Grid with Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((pillar) => (
            <div
              key={pillar.id}
              className="rounded-2xl bg-surface-canvas border border-surface-border hover:border-slate-300 hover:shadow-subtle transition-all overflow-hidden flex flex-col justify-between group"
            >
              {/* Card Image Thumbnail */}
              <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                <Image
                  src={pillar.image}
                  alt={pillar.title[lang]}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end justify-between p-3.5 text-white">
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-white/90 text-brand-navy backdrop-blur-md">
                    {pillar.badge[lang]}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-slate-300">
                    #{pillar.order}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <div className="w-9 h-9 rounded-xl bg-white border border-surface-border flex items-center justify-center shadow-xs">
                    {getPillarIcon(pillar.icon)}
                  </div>
                  <h3 className="text-base font-bold text-brand-navy group-hover:text-brand-red transition-colors line-clamp-1">
                    {pillar.title[lang]}
                  </h3>
                  <p className="text-xs text-ink-secondary leading-relaxed line-clamp-2">
                    {pillar.shortDesc[lang]}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between">
                  <span className="text-[10px] text-slate-500 flex items-center gap-1 font-medium">
                    <Clock className="w-3 h-3 text-brand-gold" />
                    <span>{pillar.processingTime[lang]}</span>
                  </span>
                  <Link
                    href={`${prefix}/corporate-services#${pillar.id}`}
                    className="text-xs font-bold text-brand-navy group-hover:text-brand-red flex items-center gap-1"
                  >
                    <span>{isZh ? '了解方案' : 'Details'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Bottom Banner */}
        <div className="relative overflow-hidden p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-950 via-brand-navy to-slate-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md border border-slate-800">
          <Image
            src="/assets/corporate/corporate-services-boardroom.jpg"
            alt="Corporate Services Singapore"
            fill
            sizes="(max-width: 1024px) 100vw, 1200px"
            className="object-cover opacity-20 pointer-events-none"
          />
          <div className="relative z-10 space-y-1.5 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs text-brand-gold font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{isZh ? '新加坡官方合规 · 25+载深厚积淀' : 'Singapore Institutional Standard · ACRA & MOM Compliance'}</span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-white">
              {isZh ? '计划在新加坡设立公司或开启全家移居？' : 'Ready to Incorporate in Singapore or Apply for Work/PR Passes?'}
            </h4>
            <p className="text-xs text-slate-300">
              {isZh ? '资深双语顾问为您提供24小时内保密评估与方案定制。' : 'Speak with our senior consultants for confidential feasibility assessment within 24 hours.'}
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={siteConfig.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{isZh ? 'WhatsApp 快速洽询' : 'WhatsApp Inquiry'}</span>
            </a>
            <a
              href={`tel:${siteConfig.contact.officePhone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors border border-white/20"
            >
              <Phone className="w-3.5 h-3.5 text-brand-gold" />
              <span>{siteConfig.contact.officePhone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
