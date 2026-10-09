import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Language } from '@/content/types';
import { siteConfig } from '@/data/site-config';
import { 
  Compass, 
  FileText, 
  FileCheck, 
  PlaneTakeoff, 
  ArrowRight, 
  MessageCircle, 
  ShieldCheck, 
  Building2, 
  Sparkles,
  Briefcase,
  UserCheck
} from 'lucide-react';

interface HomeRecruitmentSectionProps {
  lang: Language;
}

export const HomeRecruitmentSection: React.FC<HomeRecruitmentSectionProps> = ({ lang }) => {
  const isZh = lang === 'zh';
  const prefix = isZh ? '/zh' : '';

  const services = [
    {
      icon: <Compass className="w-5 h-5 text-brand-red" />,
      number: '01',
      title: isZh ? '职业规划与人才画像评估' : 'Career Profiling & Skills Matching',
      desc: isZh
        ? '深度诊断学术背景与专业技能，精准匹配新加坡本地高景气行业与优质高薪岗位。'
        : 'Evaluating academic background, technical abilities, and bilingual strengths to match high-demand Singapore job roles.',
    },
    {
      icon: <FileText className="w-5 h-5 text-brand-blue" />,
      number: '02',
      title: isZh ? '双语简历精修与作品集指导' : 'Resume & Portfolio Optimization',
      desc: isZh
        ? '对标新加坡外企与本土名企HR审核标准重塑简历，优化ATS招聘系统关键词。'
        : 'Refining resumes and portfolios to Singapore corporate HR standards, maximizing ATS compatibility and recruiter engagement.',
    },
    {
      icon: <FileCheck className="w-5 h-5 text-brand-gold" />,
      number: '03',
      title: isZh ? '企业岗位精准内推与模拟面试' : 'Direct Enterprise Referral & Coaching',
      desc: isZh
        ? '直通合作企业决策层与用人主管优先内推，资深面试官一对一实战模拟演练。'
        : 'Direct submission to hiring managers and intensive mock interviews with experienced industry mentors.',
    },
    {
      icon: <PlaneTakeoff className="w-5 h-5 text-emerald-600" />,
      number: '04',
      title: isZh ? '工作准证政策指引与入职融入' : 'MOM Work Pass Guidance & Onboarding',
      desc: isZh
        ? '熟稔新加坡人力部（MOM）最新准证政策（EP/SP及COMPASS计分），全程合规护航。'
        : 'Expert orientation on Singapore Ministry of Manpower (MOM) pass regulations and smooth workplace transition.',
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 bg-slate-50/70 border-b border-surface-border scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200/80 pb-8">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-wider">
              <Briefcase className="w-3.5 h-3.5" />
              <span>{isZh ? '专业人才就业安置 · 权威职场推荐' : 'Professional Job Placement · Career Pathways'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
              {isZh ? '就业安置服务 (专业就业推荐)' : 'Job Placement Service (Career Placement)'}
            </h2>
            <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
              {isZh
                ? '依托新加坡深厚行业资源与企业网络，南洋人才集团为毕业生、专业人才及跨国求职者提供职业咨询、简历优化、精准岗位推荐与工作准证政策指引的一站式就业安置服务。'
                : 'Connecting skilled candidates, international graduates, and working professionals with reputable Singapore employers and industry leaders across commerce, education, creative industries, and technology.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href={`${prefix}/job-placement`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-red hover:bg-brand-red-hover text-white text-sm font-bold shadow-xs transition-colors"
            >
              <span>{isZh ? '就业安置服务详情 →' : 'Job Placement Details →'}</span>
            </Link>
            <a
              href={siteConfig.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-sm font-semibold transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>{isZh ? '咨询就业顾问' : 'WhatsApp Inquiry'}</span>
            </a>
          </div>
        </div>

        {/* Strategic Partner & Highlights Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Strategic Partner Spotlight Card */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-surface-border p-6 sm:p-8 shadow-card space-y-6">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-bold text-brand-navy uppercase tracking-wider">
                <Building2 className="w-4 h-4 text-brand-gold" />
                <span>{isZh ? '战略合作院校与雇主网络' : 'Strategic Academic & Employer Alliance'}</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                {isZh ? '官方签约合作' : 'Official Alliance'}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-4">
              <div className="relative h-12 w-36 bg-white p-2 rounded-lg border border-slate-200 shrink-0">
                <Image
                  src="/assets/alliance/nanyang-asia-college.png"
                  alt="Nanyang Asia College"
                  fill
                  sizes="144px"
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-extrabold text-brand-navy text-base leading-tight">
                  {isZh ? '南洋亚洲学院' : 'Nanyang Asia College'}
                </h3>
                <span className="text-xs text-brand-gold font-semibold">
                  {isZh ? '4年 EduTrust 认证院校' : '4-Year EduTrust Certified'}
                </span>
              </div>
            </div>

            <p className="text-sm text-ink-secondary leading-relaxed">
              {isZh
                ? '南洋亚洲学院携手南洋人才集团开展职场技能提升、商务语言培训与国际人才就业接轨实训，为毕业生与专业人才奠定通往新加坡职场的坚实基石。'
                : 'Strategic education and career readiness partner collaborating on professional upskilling, language mastery, and workforce certification for Singapore career pathways.'}
            </p>

            <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span>
                {isZh
                  ? '更多新加坡跨国企业与行业领军雇主合作通道正在持续拓展接入中。'
                  : 'Additional accredited corporate partners and enterprise placement channels are onboarded continuously.'}
              </span>
            </div>
          </div>

          {/* Right: Visual Banner & 4 Core Services Grid */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative h-56 sm:h-64 w-full rounded-2xl overflow-hidden shadow-card border border-surface-border">
              <Image
                src="/assets/recruitment/student-recruitment-counseling.jpg"
                alt="Job Placement & Career Services"
                fill
                sizes="(max-width: 1024px) 100vw, 680px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-6">
                <p className="text-white text-sm sm:text-base font-semibold">
                  {isZh
                    ? '规范透明 · 严谨合规 · 专注新加坡优质高薪职业机会'
                    : 'Transparent, accredited job placement compliant with Singapore MOM and TAFEP frameworks.'}
                </p>
              </div>
            </div>

            {/* 4 Core Services Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((svc) => (
                <div
                  key={svc.number}
                  className="bg-white p-4 sm:p-5 rounded-xl border border-surface-border shadow-xs hover:shadow-subtle transition-shadow space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center">
                      {svc.icon}
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      {svc.number}
                    </span>
                  </div>
                  <h4 className="font-bold text-brand-navy text-sm">
                    {svc.title}
                  </h4>
                  <p className="text-xs text-ink-secondary leading-relaxed">
                    {svc.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
