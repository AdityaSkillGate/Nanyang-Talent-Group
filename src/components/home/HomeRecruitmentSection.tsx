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
  Sparkles 
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
      title: isZh ? '院校与专业升学咨询' : 'Course & Institution Counseling',
      desc: isZh
        ? '根据学生学术背景与升学目标，一对一定制最佳新加坡教育路径。'
        : 'Helping students select the right program, school, or university based on academic background and career goals.',
    },
    {
      icon: <FileText className="w-5 h-5 text-brand-blue" />,
      number: '02',
      title: isZh ? '申请材料与规范签约' : 'Application Assistance',
      desc: isZh
        ? '指导并协助递交入学申请，公证翻译材料审核，严谨签署标准学生合同。'
        : 'Reviewing and submitting enrollment forms, ensuring proper documentation, and explaining standard student contracts.',
    },
    {
      icon: <FileCheck className="w-5 h-5 text-brand-gold" />,
      number: '03',
      title: isZh ? '学生准证与移民局审批' : 'Visa & Pass Processing',
      desc: isZh
        ? '精准协助向新加坡移民与关卡局 (ICA) 递交并跟进学生准证 (Student’s Pass)。'
        : 'Assisting with ICA student pass applications, document compilation, and required entry formalities.',
    },
    {
      icon: <PlaneTakeoff className="w-5 h-5 text-emerald-600" />,
      number: '04',
      title: isZh ? '行前指导与抵新安顿' : 'Pre-Departure & Arrival Support',
      desc: isZh
        ? '行前须知、住宿规划安排、机场接机指引与入学体检全流程协助。'
        : 'Briefing students on living in Singapore, coordinating accommodation, airport reception, and medical checkups.',
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 bg-slate-50/70 border-b border-surface-border scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200/80 pb-8">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{isZh ? '官方教育机构代理' : 'Official Educational Representation'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
              {isZh ? '探索服务 (权威留学)' : 'Explore Service (Student Recruitment)'}
            </h2>
            <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
              {isZh
                ? '作为新加坡多所知名院校官方授权招生代表，我们为国际学生提供从院校咨询、申请规划、签证申请到抵新安顿的一站式严谨服务。'
                : 'Education agents provide student services by acting as official representatives for schools and universities to guide applicants through admissions, visas, and arrival in Singapore.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href={`${prefix}/student-recruitment`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-red hover:bg-brand-red-hover text-white text-sm font-bold shadow-xs transition-colors"
            >
              <span>{isZh ? '探索留学服务详情 →' : 'Explore Service Details →'}</span>
            </Link>
            <a
              href={siteConfig.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-sm font-semibold transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>{isZh ? '留学直通咨询' : 'WhatsApp Inquiry'}</span>
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
                <span>{isZh ? '战略合作院校' : 'Strategic Partner Institute'}</span>
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
                ? '南洋亚洲学院（设立于1993年）是新加坡政府中小学预备班（AEIS）家庭的首选培训学府，荣获新加坡精深技能发展局/私立教育理事会（CPE）4年期 EduTrust 权威认证。'
                : 'Preferred training institute for international students pursuing Singapore government school admissions (AEIS) and higher academic pathways, certified by CPE with the 4-year EduTrust mark.'}
            </p>

            <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span>
                {isZh
                  ? '更多公立与私立知名高校战略代理合作正在持续接入中，将陆续更新公布。'
                  : 'Additional accredited Singapore polytechnics, degree universities, and pathway institutions will be announced soon.'}
              </span>
            </div>
          </div>

          {/* Right: Visual Banner & 4 Core Services Grid */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative h-56 sm:h-64 w-full rounded-2xl overflow-hidden shadow-card border border-surface-border">
              <Image
                src="/assets/recruitment/student-recruitment-counseling.jpg"
                alt="Student Recruitment & Counseling"
                fill
                sizes="(max-width: 1024px) 100vw, 680px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                <p className="text-white text-sm sm:text-base font-semibold">
                  {isZh
                    ? '规范透明 · 严谨合规 · 专注新加坡优质升学通道'
                    : 'Transparent, accredited representation ensuring compliance with Singapore CPE and ICA frameworks.'}
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
