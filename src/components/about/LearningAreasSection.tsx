import React from 'react';
import Link from 'next/link';
import { Language } from '@/content/types';
import { Palette, Globe, BrainCircuit, ArrowRight, CheckCircle2 } from 'lucide-react';
import { BilingualBadge } from '@/components/ui/BilingualLabel';

interface LearningAreasSectionProps {
  lang: Language;
}

export const LearningAreasSection: React.FC<LearningAreasSectionProps> = ({ lang }) => {
  const isZh = lang === 'zh';
  const prefix = isZh ? '/zh' : '';

  const areas = [
    {
      title: isZh ? '纯美术与东方书画' : 'Fine Arts & Calligraphy',
      chineseTitle: '美术学院 · 融汇中西',
      badge: { en: 'Fine Arts', zh: '艺术传承' },
      colorClass: 'border-t-brand-red',
      iconBg: 'bg-red-50 text-brand-red',
      desc: isZh
        ? '构建从基础素描造型、水彩油画色彩渲染，到中国正统五体书法与传统国画山水花鸟的完整艺术研习架构。'
        : 'A comprehensive fine arts framework spanning foundational sketching, watercolor, oil painting, classical Chinese calligraphy (5 scripts), and traditional ink painting.',
      highlights: isZh
        ? [
            '基础素描与空间造型法则',
            '油画、水彩与丙烯综合色彩',
            '中国传统五体书法名帖临摹',
            '国画工笔、写意与泼墨技法',
          ]
        : [
            'Foundational sketching & tonal value',
            'Oil, watercolor & acrylic color mastery',
            'Five classical Chinese calligraphy scripts',
            'Traditional Xieyi, Gongbi & landscape ink',
          ],
      href: `${prefix}/art-courses`,
      cta: isZh ? '浏览美术课程体系' : 'Explore Art Courses',
    },
    {
      title: isZh ? '多语种研习体系' : 'Multilingual Studies',
      chineseTitle: '语言学院 · 沟通世界',
      badge: { en: 'Languages', zh: '语言学识' },
      colorClass: 'border-t-brand-blue',
      iconBg: 'bg-sky-50 text-brand-blue',
      desc: isZh
        ? '开设英语、华语、日语、德语及韩语沉浸式多语种课程，注重纯正发音、实用对话与学术应用能力培养。'
        : 'Immersive language education across English, Mandarin Chinese, Japanese, German, and Korean for academic achievement and global perspectives.',
      highlights: isZh
        ? [
            '英语互动听说与学术读写提升',
            '华文基础识字与母语进阶表达',
            '日语基础发音、语法与 JLPT 辅导',
            '德语与韩语结构化日常与应用表达',
          ]
        : [
            'English conversational & academic literacy',
            'Mandarin literacy & cultural proficiency',
            'Japanese phonetics, grammar & JLPT readiness',
            'German & Korean structured communication',
          ],
      href: `${prefix}/enrichment-courses#languages`,
      cta: isZh ? '浏览语言课程大纲' : 'Explore Language Courses',
    },
    {
      title: isZh ? '全脑潜能与专注力' : 'Brain Intelligence',
      chineseTitle: '全脑启发 · 思维敏捷',
      badge: { en: 'Cognitive', zh: '全脑心智' },
      colorClass: 'border-t-brand-gold',
      iconBg: 'bg-amber-50 text-brand-gold',
      desc: isZh
        ? '运用科学认知学方法，通过注意力训练方格、思维导图与超强图像记忆法，激活大脑深层专注与记忆潜能。'
        : 'Structured cognitive enhancement using Schulte attention grids, radiant mind mapping, and visual memory systems to develop lasting mental agility.',
      highlights: isZh
        ? [
            '舒尔特方格注意力耐力与抗干扰训练',
            '辐射式思维导图与逻辑概念梳理',
            '全脑联想与高阶图像记忆提取',
            '右脑空间想象力与创造性直觉唤醒',
          ]
        : [
            'Schulte grid visual focus & stamina training',
            'Radiant mind mapping & conceptual structure',
            'Visual memory encoding & recall indexing',
            'Right-brain intuitive & spatial activation',
          ],
      href: `${prefix}/enrichment-courses#brain`,
      cta: isZh ? '浏览全脑启发大纲' : 'Explore Brain Courses',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-surface-canvas border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/5 border border-brand-navy/15 text-brand-navy text-xs font-semibold">
            <span>{isZh ? '三大系统化学科体系' : 'Three Core Disciplines'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            {isZh ? '核心办学领域' : 'Our Learning Areas'}
          </h2>
          <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
            {isZh
              ? '三大协同发展的教学领域，相辅相成，致力于培养具备独立审美、多语能力与敏锐心智的现代英才。'
              : 'Structured pathways engineered to foster creative perception, linguistic versatility, and high-order cognitive focus.'}
          </p>
        </div>

        {/* 3 Learning Area Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {areas.map((area, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl p-7 sm:p-8 border border-surface-border border-t-4 ${area.colorClass} shadow-subtle hover:shadow-card transition-all flex flex-col justify-between group`}
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div
                    className={`w-14 h-14 rounded-xl ${area.iconBg} flex items-center justify-center border border-slate-100 group-hover:scale-105 transition-transform`}
                  >
                    {idx === 0 && <Palette className="w-7 h-7" />}
                    {idx === 1 && <Globe className="w-7 h-7" />}
                    {idx === 2 && <BrainCircuit className="w-7 h-7" />}
                  </div>
                  <BilingualBadge
                    en={area.badge.en}
                    zh={area.badge.zh}
                    color={idx === 0 ? 'red' : idx === 1 ? 'blue' : 'gold'}
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-brand-navy">
                    {area.title}
                  </h3>
                  <p className="text-xs font-semibold text-ink-muted mt-1 font-chinese">
                    {area.chineseTitle}
                  </p>
                </div>

                <p className="text-sm text-ink-secondary leading-relaxed">
                  {area.desc}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {isZh ? '课程核心要点' : 'Curriculum Highlights'}
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {area.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link
                  href={area.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy group-hover:text-brand-red transition-colors"
                >
                  <span>{area.cta}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
