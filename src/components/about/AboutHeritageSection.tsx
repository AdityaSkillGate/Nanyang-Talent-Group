import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Language } from '@/content/types';
import { Brush, Sparkles, ArrowRight, BookOpen, Palette } from 'lucide-react';
import { BilingualBadge } from '@/components/ui/BilingualLabel';

interface AboutHeritageSectionProps {
  lang: Language;
}

export const AboutHeritageSection: React.FC<AboutHeritageSectionProps> = ({ lang }) => {
  const isZh = lang === 'zh';
  const prefix = isZh ? '/zh' : '';

  // Order strictly defined: 1-Seal Script, 2-Clerical Script, 3-Cursive Hand, 4-Regular Script, 5-Running Script
  const scripts = [
    {
      order: '01',
      name: '篆书',
      pinyin: 'Zhuanshu',
      en: 'Seal Script',
      desc: isZh ? '圆润对称，源远流长，秦汉古风' : 'Ancient symmetry & archaic seal dignity',
      image: '/assets/calligraphy/1-seal-script.jpg',
    },
    {
      order: '02',
      name: '隶书',
      pinyin: 'Lishu',
      en: 'Clerical Script',
      desc: isZh ? '蚕头燕尾，古雅厚重，横平竖直' : 'Archaic elegance & horizontal spread',
      image: '/assets/calligraphy/2-clerical-script.jpg',
    },
    {
      order: '03',
      name: '草书',
      pinyin: 'Caoshu',
      en: 'Cursive Hand',
      desc: isZh ? '笔走龙蛇，意境超逸，气势贯通' : 'Dynamic momentum & expressive spirit',
      image: '/assets/calligraphy/3-cursive-hand.jpg',
    },
    {
      order: '04',
      name: '楷书',
      pinyin: 'Kaishu',
      en: 'Regular Script',
      desc: isZh ? '结构严谨，点画分明，端庄方正' : 'Balanced structure & linear poise',
      image: '/assets/calligraphy/4-regular-script.jpg',
    },
    {
      order: '05',
      name: '行书',
      pinyin: 'Xingshu',
      en: 'Running Script',
      desc: isZh ? '行云流水，气韵生动，虚实相生' : 'Fluid rhythm & transitional motion',
      image: '/assets/calligraphy/5-running-script.jpg',
    },
  ];

  const paintingTraditions = [
    {
      title: isZh ? '写意 (Xieyi)' : 'Freehand Style (Xieyi)',
      desc: isZh ? '逸笔草草，以形写神，讲究水墨淋漓与抒情意趣。' : 'Spontaneous brushwork capturing the essential spirit over mere photographic realism.',
    },
    {
      title: isZh ? '工笔 (Gongbi)' : 'Fine-Brush Realism (Gongbi)',
      desc: isZh ? '严谨勾勒，分染层叠，注重线条精微与色彩沉着。' : 'Deliberate line contouring and meticulous multi-layered pigment washes.',
    },
    {
      title: isZh ? '泼墨 (Pomo)' : 'Splash-Ink Wash (Pomo)',
      desc: isZh ? '笔墨交融，墨韵丰沛，营造气势磅礴的抽象意境。' : 'Expansive ink washes blending dynamic tonal gradients with contemporary aesthetic energy.',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-navy-dark via-brand-navy to-brand-navy-deep text-white py-20 lg:py-24 border-b border-surface-border">
      {/* Decorative backdrop glow */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-gold via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-brand-gold text-xs font-semibold">
              <Brush className="w-3.5 h-3.5 text-brand-gold" />
              <span>{isZh ? '东方文脉与视觉传承' : 'Visual Heritage & Artistic Traditions'}</span>
            </div>
            <BilingualBadge en="Calligraphy & Painting" zh="书画同源" color="gold" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            {isZh ? (
              <span className="font-chinese text-white">融汇东方古典精髓 · 贯通现当代视觉语言</span>
            ) : (
              <span className="text-white">Classical Traditions Alongside Modern Studio Pedagogy</span>
            )}
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {isZh
              ? '在新加坡多元文化的交融土壤中，南洋人才集团植根于中国传统书画文脉，同时对接西方当代纯美术专业造型体系。让学员在掌握现代素描构图与色彩光影的同时，深人体会笔墨生香的东方审美神韵。'
              : 'Within Singapore’s rich multicultural landscape, Nanyang Talent Group bridges centuries of Chinese calligraphic and brush painting heritage with modern Western studio discipline—cultivating comprehensive visual literacy and cultural depth.'}
          </p>
        </div>

        {/* Heritage Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Left Column: Five Classical Scripts (7 cols) */}
          <div className="lg:col-span-7 bg-white/5 border border-white/15 rounded-2xl p-7 sm:p-8 backdrop-blur-sm space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-brand-gold font-bold block">
                  {isZh ? '五体书法研习' : 'Five Traditional Scripts'}
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  {isZh ? '正统中国书法教学体系' : 'Chinese Calligraphic Heritage'}
                </h3>
              </div>
              <span className="text-xs text-slate-400 font-mono">
                {isZh ? '篆 · 隶 · 草 · 楷 · 行' : 'Zhuanshu to Xingshu'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {scripts.map((script, idx) => (
                <div
                  key={script.order}
                  className={`p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-brand-gold/40 transition-all duration-200 group flex flex-col justify-between ${
                    idx === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  <div>
                    {/* Script Specimen Visual Image */}
                    <div className="relative h-28 w-full rounded-lg overflow-hidden mb-3 border border-white/10 bg-slate-900/60">
                      <Image
                        src={script.image}
                        alt={`${script.name} - ${script.en}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 240px"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/70 backdrop-blur-xs text-[10px] font-mono font-bold text-brand-gold border border-white/15">
                        {script.order}
                      </div>
                    </div>

                    <div className="flex items-baseline justify-between mb-0.5">
                      <span className="text-lg font-bold text-brand-gold font-chinese tracking-wide">
                        {script.name}
                      </span>
                      <span className="text-[11px] text-slate-400 font-mono">
                        {script.pinyin}
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-white">
                      {script.order} - {script.en}
                    </div>
                  </div>

                  <div className="text-[11px] text-slate-300 mt-2 leading-snug">
                    {script.desc}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap gap-4 border-t border-white/10">
              <Link
                href={`${prefix}/art-courses/chinese-calligraphy`}
                className="inline-flex items-center gap-2 text-xs font-semibold text-brand-gold hover:text-white transition-colors"
              >
                <span>{isZh ? '查看中国书法课程大纲' : 'Explore Chinese Calligraphy Syllabus'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Painting Traditions & Modern Pedagogy (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {/* Painting Techniques Card */}
            <div className="bg-white/5 border border-white/15 rounded-2xl p-7 sm:p-8 backdrop-blur-sm space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-xs uppercase tracking-widest text-brand-blue-light font-bold block">
                    {isZh ? '国画技法脉络' : 'Painting Traditions'}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {isZh ? '写意 · 工笔 · 泼墨' : 'Xieyi • Gongbi • Pomo'}
                  </h3>
                </div>
              </div>

              <div className="space-y-3.5">
                {paintingTraditions.map((trad, idx) => (
                  <div key={idx} className="space-y-1">
                    <span className="text-xs font-bold text-brand-gold block">
                      {trad.title}
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {trad.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-white/10">
                <Link
                  href={`${prefix}/art-courses/chinese-painting`}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-brand-blue-light hover:text-white transition-colors"
                >
                  <span>{isZh ? '查看中国国画课程大纲' : 'Explore Chinese Painting Syllabus'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Contemporary Balance Note */}
            <div className="bg-brand-red/10 border border-brand-red/25 rounded-2xl p-6 space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <Palette className="w-4 h-4 text-brand-red" />
                <span>{isZh ? '东西贯通 · 学院派严谨基石' : 'Synthesized Western Studio Discipline'}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isZh
                  ? '现代素描、透视比例、油画与水彩构图与东方水墨笔韵相互渗透，培养兼具古典涵养与国际视野的复合型艺术学习者。'
                  : 'Foundational drawing, chiaroscuro shading, and contemporary color theories operate alongside Eastern ink brushwork to cultivate truly versatile artists.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
