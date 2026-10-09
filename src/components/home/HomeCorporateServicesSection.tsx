import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Language } from '@/content/types';
import { siteConfig } from '@/data/site-config';
import { corporateServicesContent } from '@/content/corporate-services';
import { 
  Building2, 
  ArrowRight, 
  UserCheck, 
  GraduationCap, 
  Globe2, 
  Palette, 
  Brain, 
  ShieldCheck, 
  MessageCircle,
  Phone,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

interface HomeCorporateServicesSectionProps {
  lang: Language;
}

export const HomeCorporateServicesSection: React.FC<HomeCorporateServicesSectionProps> = ({ lang }) => {
  const isZh = lang === 'zh';
  const prefix = isZh ? '/zh' : '';
  const data = corporateServicesContent;

  const highlights = data.pillarsSection.pillars.slice(0, 4);

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck':
        return <UserCheck className="w-5 h-5 text-brand-red" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-brand-blue" />;
      case 'Globe2':
        return <Globe2 className="w-5 h-5 text-emerald-600" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-brand-gold" />;
      case 'Brain':
        return <Brain className="w-5 h-5 text-purple-600" />;
      default:
        return <Building2 className="w-5 h-5 text-brand-navy" />;
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-slate-100">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-navy">
              <Building2 className="w-3.5 h-3.5 text-brand-red" />
              <span>{isZh ? '专业企业服务 · 产教深度融合' : 'Institutional & Corporate Solutions'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight">
              {isZh ? '企业服务与机构人才赋能' : 'Corporate Services & Enterprise Talent Solutions'}
            </h2>
            <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
              {isZh
                ? '为新加坡中小型企业、跨国公司及各类机构提供定向人才招聘、企业内训定制、商务双语提升与员工艺术减压工作坊。'
                : 'Customized talent acquisition, executive upskilling, workplace bilingual fluency, and corporate wellness workshops for businesses in Singapore.'}
            </p>
          </div>
          <div className="shrink-0">
            <Link
              href={`${prefix}/corporate-services`}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red hover:underline"
            >
              <span>{isZh ? '查看全部企业服务方案 →' : 'Explore All Corporate Services →'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 4 Featured Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((pillar) => (
            <div
              key={pillar.id}
              className="p-6 rounded-2xl bg-surface-canvas border border-surface-border hover:border-slate-300 hover:shadow-subtle transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white border border-surface-border flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                    {getPillarIcon(pillar.icon)}
                  </div>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-white border border-slate-200 text-slate-600">
                    {pillar.badge[lang]}
                  </span>
                </div>
                <h3 className="text-base font-bold text-brand-navy group-hover:text-brand-red transition-colors">
                  {pillar.title[lang]}
                </h3>
                <p className="text-xs text-ink-secondary leading-relaxed line-clamp-3">
                  {pillar.shortDesc[lang]}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/80">
                <Link
                  href={`${prefix}/corporate-services#${pillar.id}`}
                  className="text-xs font-bold text-brand-navy hover:text-brand-red flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>{isZh ? '了解方案详情' : 'Learn Details'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
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
              <span>{isZh ? '新加坡官方规范 · 100% 定制化大纲' : 'Singapore Institutional Standard · Tailored Curricula'}</span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-white">
              {isZh ? '需要为您的企业或机构定制专属培训方案？' : 'Looking for Custom Training or Corporate Recruitment?'}
            </h4>
            <p className="text-xs text-slate-300">
              {isZh ? '支持企业上门内训、南洋校区研修以及线上混合交付模式。' : 'Flexible on-site delivery at your office, at our campus, or via hybrid sessions.'}
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
