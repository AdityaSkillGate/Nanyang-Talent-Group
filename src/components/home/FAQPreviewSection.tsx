'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Language } from '@/content/types';
import { faqItems, faqSectionContent } from '@/content/faq';
import { HelpCircle, ChevronDown, MessageSquare, ArrowRight } from 'lucide-react';

interface FAQPreviewSectionProps {
  lang: Language;
}

export const FAQPreviewSection: React.FC<FAQPreviewSectionProps> = ({ lang }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const prefix = lang === 'zh' ? '/zh' : '';
  const content = faqSectionContent;

  return (
    <section className="py-16 sm:py-24 bg-surface-canvas border-b border-surface-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/70 text-slate-700 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-brand-navy" />
            <span>{content.badge[lang]}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            {content.title[lang]}
          </h2>
          <p className="text-base text-ink-secondary max-w-xl mx-auto">
            {content.subtitle[lang]}
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {faqItems.slice(0, 7).map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-surface-border overflow-hidden transition-shadow shadow-xs hover:shadow-subtle"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:bg-slate-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-brand-navy">
                    {item.question[lang]}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                      isOpen ? 'bg-red-50 text-brand-red rotate-180' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-ink-secondary leading-relaxed border-t border-slate-100 animate-in fade-in duration-150">
                    <p>{item.answer[lang]}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Reassurance Banner */}
        <div className="bg-white rounded-2xl border border-surface-border p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-navy/5 flex items-center justify-center text-brand-navy shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-brand-navy">
                {content.footerPrompt[lang]}
              </h4>
              <p className="text-xs text-ink-secondary">
                {lang === 'zh'
                  ? '欢迎直接与我们的课程顾问沟通或点击右下方问答助手即时查询。'
                  : 'Contact our admissions advisors or tap the admissions assistant below.'}
              </p>
            </div>
          </div>
          <Link
            href={`${prefix}/contact`}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-brand-navy hover:bg-brand-navy-dark transition-colors shrink-0 shadow-xs"
          >
            <span>{content.contactPageCta[lang]}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
