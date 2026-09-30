import React from 'react';
import { Language } from '@/content/types';
import { Palette, BookOpen, BrainCircuit, Sparkles, CheckCircle2 } from 'lucide-react';
import { BilingualBadge } from '@/components/ui/BilingualLabel';

interface LearningPhilosophySectionProps {
  lang: Language;
}

export const LearningPhilosophySection: React.FC<LearningPhilosophySectionProps> = ({ lang }) => {
  const isZh = lang === 'zh';

  const pillars = [
    {
      number: '01',
      title: isZh ? '艺术创意' : 'Creativity',
      subtitle: isZh ? '审美感知 · 造型表现' : 'Aesthetic Expression & Technique',
      badge: { en: 'Pillar 1', zh: '核心支柱一' },
      icon: <Palette className="w-6 h-6 text-brand-red" />,
      colorClass: 'border-t-brand-red',
      iconBg: 'bg-red-50',
      description: isZh
        ? '在严谨的造型与笔墨基本功之上，引导学员观察自然光影、空间层次与色彩韵律，保护并激发独立艺术审美与自我表达能力。'
        : 'Cultivating keen visual observation, spatial sensitivity, and brush control. We balance foundational discipline with authentic individual expression.',
      points: isZh
        ? [
            '扎实掌握线条、透视与素描黑白灰明暗法则',
            '探索东方书画意境与西方色彩表现力',
            '鼓励原创思维，杜绝千篇一律的模式化描摹',
          ]
        : [
            'Mastery of linear contour, perspective & tonal value',
            'Synthesis of Eastern brushwork & Western color theories',
            'Nurturing authentic artistic voice over rote imitation',
          ],
    },
    {
      number: '02',
      title: isZh ? '语言学识' : 'Knowledge',
      subtitle: isZh ? '母语进阶 · 国际视野' : 'Linguistic Fluency & Cultural Depth',
      badge: { en: 'Pillar 2', zh: '核心支柱二' },
      icon: <BookOpen className="w-6 h-6 text-brand-blue" />,
      colorClass: 'border-t-brand-blue',
      iconBg: 'bg-sky-50',
      description: isZh
        ? '构建英语、华语以及德语、日语、韩语等多语种系统研修，强化发音准确度、结构化句法与跨文化日常与学术对话沟通力。'
        : 'Developing systematic multilingual literacy across English, Mandarin, German, Japanese, and Korean. We emphasize phonetic precision and global communication.',
      points: isZh
        ? [
            '沉浸式听说互动，建立自然自信的语言习惯',
            '科学语法构词与学术阅读理解专项强化',
            '理解多元语言背后的文化内涵，拓宽国际视野',
          ]
        : [
            'Immersive conversational exchanges build natural confidence',
            'Structured syntax, reading comprehension & literacy',
            'Cultural understanding that enriches global dialogue',
          ],
    },
    {
      number: '03',
      title: isZh ? '全脑心智' : 'Development',
      subtitle: isZh ? '专注耐力 · 敏锐思维' : 'Cognitive Agility & Focus Stamina',
      badge: { en: 'Pillar 3', zh: '核心支柱三' },
      icon: <BrainCircuit className="w-6 h-6 text-brand-gold" />,
      colorClass: 'border-t-brand-gold',
      iconBg: 'bg-amber-50',
      description: isZh
        ? '依托舒尔特专注力方格、思维导图与超强图像记忆等认知科学工具，提升大脑信息处理速度与深层专注耐力。'
        : 'Leveraging cognitive training methods—including Schulte attention grids, radiant mind mapping, and visual memory systems—to develop durable mental stamina.',
      points: isZh
        ? [
            '舒尔特方格注意力广度与抗干扰训练',
            '辐射思维导图梳理复杂知识结构与逻辑链条',
            '右脑全脑图像化记忆激活，提升长效提取效率',
          ]
        : [
            'Schulte grid visual endurance & anti-distraction mastery',
            'Mind mapping for structured knowledge synthesis',
            'Whole-brain visual encoding for rapid recall indexing',
          ],
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-surface-canvas border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/5 border border-brand-navy/15 text-brand-navy text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span>{isZh ? '三大教学核心支柱' : 'Three Pedagogical Pillars'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            {isZh ? '教学育人理念' : 'Our Learning Philosophy'}
          </h2>
          <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
            {isZh
              ? '秉承“全人素养”教育思想，以严谨治学筑牢基础，以多元探索启迪智慧，助力学员实现审美力、语言力与思维力的全面跃升。'
              : 'Our whole-learner philosophy unites foundational discipline with open-ended exploration, cultivating creative expression, linguistic mastery, and cognitive endurance.'}
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl p-7 sm:p-8 border border-surface-border border-t-4 ${pillar.colorClass} shadow-subtle hover:shadow-card transition-all flex flex-col justify-between`}
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-xl ${pillar.iconBg} flex items-center justify-center border border-slate-100`}>
                    {pillar.icon}
                  </div>
                  <BilingualBadge
                    en={pillar.badge.en}
                    zh={pillar.badge.zh}
                    color={idx === 0 ? 'red' : idx === 1 ? 'blue' : 'gold'}
                  />
                </div>

                <div>
                  <div className="text-xs font-mono font-bold text-slate-400">
                    {pillar.number}
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-medium text-ink-muted mt-0.5 font-chinese">
                    {pillar.subtitle}
                  </div>
                </div>

                <p className="text-sm text-ink-secondary leading-relaxed">
                  {pillar.description}
                </p>

                {/* Points */}
                <div className="pt-2 border-t border-slate-100 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {isZh ? '核心培养目标' : 'Core Objectives'}
                  </div>
                  <ul className="space-y-2 text-xs text-slate-600">
                    {pillar.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-navy flex-shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Singapore Institutional Pedagogy Banner */}
        <div className="bg-white rounded-2xl p-8 border border-surface-border shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-100 text-center">
            <div className="px-4 py-2 space-y-1.5">
              <span className="font-bold text-brand-navy text-sm block">
                {isZh ? '小班互动与个别指导' : 'Small-Group Guided Instruction'}
              </span>
              <span className="text-xs text-ink-muted leading-relaxed block">
                {isZh
                  ? '保障师生充分互动，根据每位学员的认知起点与兴趣精准施教。'
                  : 'Individualized instructor feedback tailored to each student’s pace and learning style.'}
              </span>
            </div>
            <div className="px-4 py-2 space-y-1.5">
              <span className="font-bold text-brand-navy text-sm block">
                {isZh ? '阶梯渐进式教案体系' : 'Tiered Progressive Syllabus'}
              </span>
              <span className="text-xs text-ink-muted leading-relaxed block">
                {isZh
                  ? '由浅入深、层层递进，帮助学员稳扎稳打筑牢学科根基。'
                  : 'Structured progression that systematically builds competence from fundamentals to mastery.'}
              </span>
            </div>
            <div className="px-4 py-2 space-y-1.5">
              <span className="font-bold text-brand-navy text-sm block">
                {isZh ? '全人素养与审美激发' : 'Whole-Person Aesthetic Focus'}
              </span>
              <span className="text-xs text-ink-muted leading-relaxed block">
                {isZh
                  ? '不仅传授专业技法，更注重品格陶冶、艺术审美与独立思考能力。'
                  : 'Cultivating creative confidence, disciplined work habits, and lifelong curiosity.'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
