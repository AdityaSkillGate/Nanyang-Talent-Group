'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Language, FAQCategory } from '@/content/types';
import {
  faqChatbotContent,
  faqItems,
  faqCategoryLabels,
  searchFaq,
  getFaqsByCategory,
  getAllCategories,
  fallbackResponse,
} from '@/content/faq';
import { siteConfig } from '@/data/site-config';
import {
  MessageSquare,
  X,
  Send,
  Bot,
  Phone,
  RotateCcw,
  Sparkles,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';

interface FAQChatbotProps {
  lang: Language;
}

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  relatedLink?: {
    label: string;
    href: string;
  };
  isFallback?: boolean;
}

export const FAQChatbot: React.FC<FAQChatbotProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<FAQCategory | 'All'>('All');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const content = faqChatbotContent;
  const categories = getAllCategories();
  const prefix = lang === 'zh' ? '/zh' : '';

  const formatTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-1',
      sender: 'bot',
      text: content.welcomeMessage[lang],
      timestamp: formatTime(),
    },
  ]);

  // Auto-scroll to latest message
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isTyping]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: formatTime(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate micro-delay (~200ms) for natural responsive interaction
    setTimeout(() => {
      const match = searchFaq(query, lang);
      let botMsg: Message;

      if (match.item) {
        botMsg = {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: match.item.answer[lang],
          timestamp: formatTime(),
          relatedLink: match.item.relatedLink
            ? {
                label: match.item.relatedLink.label[lang],
                href: match.item.relatedLink.href[lang],
              }
            : undefined,
        };
      } else {
        botMsg = {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: fallbackResponse[lang],
          timestamp: formatTime(),
          isFallback: true,
        };
      }

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 220);
  };

  const handleClearHistory = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: 'bot',
        text: content.welcomeMessage[lang],
        timestamp: formatTime(),
      },
    ]);
    setSelectedCategory('All');
  };

  // Filter suggested questions based on selected category
  const filteredSuggestions =
    selectedCategory === 'All'
      ? faqItems.slice(0, 6)
      : getFaqsByCategory(selectedCategory);

  return (
    <div className={`fixed z-50 transition-all ${
      isOpen 
        ? 'inset-x-2 bottom-16 sm:inset-auto sm:bottom-6 sm:right-6' 
        : 'bottom-20 right-4 sm:bottom-6 sm:right-6'
    }`}>
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-brand-navy hover:bg-brand-navy-dark text-white shadow-xl hover:shadow-2xl transition-all focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 border border-brand-gold/40 hover:scale-105 active:scale-95 min-h-[44px]"
          aria-label={content.headerTitle[lang]}
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-gold"></span>
          </span>
          <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-brand-gold group-hover:scale-110 transition-transform" />
          <span className="text-xs sm:text-sm font-semibold tracking-wide">
            {content.headerTitle[lang]}
          </span>
        </button>
      )}

      {/* Floating Chat Modal Window */}
      {isOpen && (
        <div className="w-full sm:w-[410px] h-[520px] sm:h-[600px] max-h-[calc(100dvh-5.5rem)] bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-surface-border flex flex-col overflow-hidden animate-in slide-in-from-bottom duration-200">
          {/* Header */}
          <div className="bg-brand-navy text-white px-4 py-3.5 sm:px-5 sm:py-4 flex items-center justify-between border-b border-brand-navy-dark shadow-xs">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-brand-gold">
                <Bot className="w-5 h-5" />
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-brand-navy" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold leading-tight flex items-center gap-1.5 text-white">
                  <span className="text-white font-bold">{content.headerTitle[lang]}</span>
                  <span className="text-[10px] font-normal px-1.5 py-0.5 rounded bg-brand-gold/20 text-brand-gold border border-brand-gold/30">
                    Est. 1998
                  </span>
                </h4>
                <div className="flex items-center gap-1.5 text-[10px] text-slate-300">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  <span>{content.onlineStatus[lang]}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleClearHistory}
                className="min-h-[44px] min-w-[44px] p-2.5 flex items-center justify-center rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                title={content.clearChatLabel[lang]}
                aria-label={content.clearChatLabel[lang]}
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="min-h-[44px] min-w-[44px] p-2.5 flex items-center justify-center rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label={content.closeLabel[lang]}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Category Filter Pills (Horizontal Scroll) */}
          <div className="px-3.5 py-2.5 bg-surface-canvas border-b border-surface-border">
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
              <button
                type="button"
                onClick={() => setSelectedCategory('All')}
                className={`text-[11px] font-semibold px-3 py-1.5 min-h-[36px] flex items-center justify-center rounded-full whitespace-nowrap transition-all ${
                  selectedCategory === 'All'
                    ? 'bg-brand-navy text-white shadow-xs'
                    : 'bg-white text-ink-secondary hover:text-brand-navy border border-slate-200'
                }`}
              >
                {lang === 'zh' ? '全部学科' : 'All'}
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-[11px] font-semibold px-3 py-1.5 min-h-[36px] flex items-center justify-center rounded-full whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-brand-red text-white shadow-xs'
                      : 'bg-white text-ink-secondary hover:text-brand-navy border border-slate-200'
                  }`}
                >
                  {faqCategoryLabels[cat][lang]}
                </button>
              ))}
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-4.5 space-y-4 bg-slate-50/60 text-xs sm:text-sm">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-lg bg-brand-navy text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Bot className="w-4 h-4 text-brand-gold" />
                  </div>
                )}

                <div className={`space-y-1.5 max-w-[85%]`}>
                  <div
                    className={`p-3.5 rounded-2xl leading-relaxed ${
                      m.sender === 'user'
                        ? 'bg-brand-red text-white rounded-tr-none shadow-sm'
                        : 'bg-white text-ink-primary border border-surface-border rounded-tl-none shadow-xs'
                    }`}
                  >
                    <p className="whitespace-pre-line">{m.text}</p>

                    {/* Related Link Pill */}
                    {m.relatedLink && (
                      <div className="pt-2 mt-2 border-t border-slate-100">
                        <Link
                          href={m.relatedLink.href}
                          className="inline-flex items-center gap-1.5 text-[11px] font-bold text-brand-navy hover:text-brand-red transition-colors group"
                        >
                          <span>{m.relatedLink.label}</span>
                          <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>
                    )}

                    {/* Fallback Direct Contact Buttons */}
                    {m.isFallback && (
                      <div className="pt-2.5 mt-2.5 border-t border-slate-100 flex flex-col gap-1.5">
                        <a
                          href={siteConfig.contact.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold hover:bg-emerald-100 transition-colors"
                        >
                          <Phone className="w-3.5 h-3.5 text-emerald-600" />
                          <span>{content.whatsappButton[lang]}</span>
                        </a>
                        <Link
                          href={`${prefix}/contact`}
                          className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-brand-navy text-xs font-semibold hover:bg-slate-200 transition-colors"
                        >
                          <span>{lang === 'zh' ? '前往在线咨询表单' : 'Submit Online Enquiry'}</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    )}
                  </div>

                  <span
                    className={`block text-[10px] text-slate-400 font-mono ${
                      m.sender === 'user' ? 'text-right' : 'text-left'
                    }`}
                  >
                    {m.timestamp}
                  </span>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-2.5 justify-start">
                <div className="w-7 h-7 rounded-lg bg-brand-navy text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Bot className="w-4 h-4 text-brand-gold" />
                </div>
                <div className="bg-white border border-surface-border px-4 py-2.5 rounded-2xl rounded-tl-none shadow-xs flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-navy/60 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-navy/60 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-navy/60 animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}

            {/* Suggested Question Chips */}
            <div className="pt-2 space-y-2 border-t border-slate-200/60">
              <div className="flex items-center justify-between text-[11px] text-ink-muted font-bold">
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
                  <span>{content.quickPromptLabel[lang]}</span>
                </span>
                <span className="text-[10px] text-slate-400">
                  {selectedCategory === 'All' ? (lang === 'zh' ? '全部精选' : 'Featured') : faqCategoryLabels[selectedCategory][lang]}
                </span>
              </div>

              <div className="flex flex-col gap-1.5">
                {filteredSuggestions.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSend(item.question[lang])}
                    className="text-left text-xs p-3 min-h-[44px] rounded-xl bg-white hover:bg-red-50 hover:text-brand-red border border-surface-border hover:border-red-200 transition-all text-ink-secondary font-medium flex items-center justify-between group shadow-2xs"
                  >
                    <span className="line-clamp-1 pr-2">{item.question[lang]}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-brand-red group-hover:translate-x-0.5 transition-all shrink-0" />
                  </button>
                ))}
              </div>
            </div>

            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer & Direct WhatsApp Link */}
          <div className="p-3 sm:p-3.5 bg-white border-t border-surface-border space-y-2">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                id="faqQuery"
                name="faqQuery"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={content.inputPlaceholder[lang]}
                className="flex-1 px-3.5 py-2.5 min-h-[44px] text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-transparent transition-all"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl bg-brand-navy hover:bg-brand-navy-dark text-white disabled:opacity-40 disabled:pointer-events-none transition-all shadow-xs shrink-0"
                aria-label="Send query"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            <div className="flex items-center justify-between text-[11px] text-slate-500 pt-0.5 px-1">
              <span className="text-[10px] text-slate-400">
                {lang === 'zh' ? '基于官方大纲 · 客观真实' : 'Strict Verification • No Hallucination'}
              </span>
              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
              >
                <Phone className="w-3 h-3 text-emerald-600" />
                <span>WhatsApp Admissions</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
