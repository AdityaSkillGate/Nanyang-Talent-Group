import React from 'react';
import Link from 'next/link';
import { Language } from '@/content/types';
import { Languages, Check, ArrowRight } from 'lucide-react';

interface BilingualVisualSectionProps {
  lang: Language;
}

export const BilingualVisualSection: React.FC<BilingualVisualSectionProps> = ({ lang }) => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-slate-900 via-brand-navy to-slate-900 text-white border-b border-surface-border relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute left-1/4 top-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-1/4 bottom-0 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-brand-gold text-xs font-semibold tracking-wide">
            <Languages className="w-3.5 h-3.5" />
            <span>{lang === 'zh' ? '双语融汇 · 新加坡双语教学桥梁' : 'Bilingual Bridging • Singapore Context'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {lang === 'zh' ? '中英双语体系 · 全方位无缝切换' : 'Dual-Language Architecture'}
          </h2>
          <p className="text-sm text-slate-300">
            {lang === 'zh'
              ? '采用符合新加坡双语教育规范的简体中文与规范英文对照，提供无刷新的纯静态流畅双语浏览体验。'
              : 'Seamless navigation between English and Simplified Chinese, localized for the Singapore educational environment with zero-reload static switching.'}
          </p>
        </div>

        {/* Dual Card Comparison Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* English Panel */}
          <div className={`p-6 sm:p-8 rounded-2xl border transition-all ${
            lang === 'en' 
              ? 'bg-white/15 border-brand-blue shadow-lg ring-2 ring-brand-blue/40' 
              : 'bg-white/5 border-white/10 hover:bg-white/10'
          }`}>
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-blue-light">
                English Portal (Default Canonical)
              </span>
              {lang === 'en' && (
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                  <Check className="w-3 h-3" />
                  Active
                </span>
              )}
            </div>
            <div className="pt-4 space-y-2">
              <div className="text-2xl font-extrabold text-white">
                Learn with confidence.
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Structured progressive curriculum in fine arts, modern international languages, and cognitive memory expansion.
              </p>
            </div>
            <div className="pt-6">
              {lang === 'zh' ? (
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-white/15 hover:bg-white/25 px-4 py-2 rounded-lg transition-colors"
                >
                  <span>切换至英文版 (Switch to English)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              ) : (
                <span className="text-xs text-slate-400 italic">Currently viewing in English</span>
              )}
            </div>
          </div>

          {/* Chinese Panel */}
          <div className={`p-6 sm:p-8 rounded-2xl border transition-all ${
            lang === 'zh' 
              ? 'bg-white/15 border-brand-red shadow-lg ring-2 ring-brand-red/40' 
              : 'bg-white/5 border-white/10 hover:bg-white/10'
          }`}>
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-red-300">
                简体中文专区 (Singapore Simplified Chinese)
              </span>
              {lang === 'zh' && (
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                  <Check className="w-3 h-3" />
                  当前显示
                </span>
              )}
            </div>
            <div className="pt-4 space-y-2 font-chinese">
              <div className="text-2xl font-extrabold text-white">
                探索艺术 · 语言 · 全脑发展
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                兼顾东西方艺术传承与现代心智科学，提供严谨系统的课程体系与定制化辅导。
              </p>
            </div>
            <div className="pt-6">
              {lang === 'en' ? (
                <Link
                  href="/zh"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-white/15 hover:bg-white/25 px-4 py-2 rounded-lg transition-colors font-chinese"
                >
                  <span>切换至中文版 (Switch to 中文)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              ) : (
                <span className="text-xs text-slate-400 italic font-chinese">当前已为中文界面</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
