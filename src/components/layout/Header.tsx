'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Language } from '@/content/types';
import { uiTranslations } from '@/content/translations';
import { siteConfig } from '@/data/site-config';
import { artCourses } from '@/content/art-courses';
import { languageCourses, brainCourses } from '@/content/enrichment-courses';
import { LanguageSwitcher } from '../common/LanguageSwitcher';
import { HtmlLangSetter } from '../common/HtmlLangSetter';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ChevronRight, 
  Phone, 
  Palette, 
  Globe, 
  Brain, 
  ArrowRight,
  Clock,
  Sparkles
} from 'lucide-react';

interface HeaderProps {
  lang: Language;
}

export const Header: React.FC<HeaderProps> = ({ lang }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'art' | 'enrichment' | null>(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<'art' | 'enrichment' | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navContainerRef = useRef<HTMLDivElement | null>(null);
  const t = uiTranslations;
  const prefix = lang === 'zh' ? '/zh' : '';

  // Track scroll position for premium sticky navigation behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on path changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setMobileExpandedSection(null);
  }, [pathname]);

  // Handle outside clicks for desktop dropdowns
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (navContainerRef.current && !navContainerRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  // Keyboard accessibility: close dropdown on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleMouseEnter = (menu: 'art' | 'enrichment') => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  return (
    <>
      <HtmlLangSetter lang={lang} />
      <header 
        className={`sticky top-0 z-50 transition-all duration-200 ${
          isScrolled 
            ? 'bg-white/98 backdrop-blur-md shadow-md border-b border-surface-border' 
            : 'bg-white/95 backdrop-blur-md border-b border-surface-border'
        }`}
      >
        {/* Top micro bar: Singapore Institutional branding & WhatsApp link */}
        <div className="bg-brand-navy text-white text-[11px] py-1.5 px-3 sm:px-8 border-b border-brand-navy-dark">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
              <span className="inline-block w-2 h-2 rounded-full bg-brand-gold animate-pulse shrink-0" />
              <span className="tracking-wide font-medium truncate">
                {t.brandName[lang]} · {t.sinceBadge[lang]}
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-4 text-slate-300 shrink-0">
              <span>{t.institutionalStandard[lang]}</span>
              <span className="text-slate-500">|</span>
              <a 
                href={siteConfig.contact.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white flex items-center gap-1.5 transition-colors group"
              >
                <Phone className="w-3 h-3 text-brand-gold group-hover:scale-110 transition-transform" />
                <span>{t.nav.whatsappAdmissions[lang]}</span>
              </a>
            </div>
          </div>
        </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-4 xl:px-8" ref={navContainerRef}>
        <div className="flex items-center justify-between h-20 gap-2">
          {/* Logo Section */}
          <Link 
            href={prefix || '/'} 
            className="flex items-center gap-2 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-navy rounded-lg py-1 px-0.5 sm:p-1 shrink-0" 
            aria-label={`${siteConfig.name.en} Home`}
          >
            {/* Desktop Horizontal Logo */}
            <div className="hidden sm:block relative h-11 w-44 lg:h-11 lg:w-44 xl:h-14 xl:w-56 shrink-0">
              <Image
                src="/assets/logo-horizontal.png"
                alt={siteConfig.name[lang]}
                fill
                priority
                sizes="(max-width: 1024px) 176px, 224px"
                className="object-contain object-left group-hover:opacity-95 transition-opacity"
              />
            </div>
            {/* Mobile Compact Horizontal Logo */}
            <div className="sm:hidden relative h-10 w-36 xs:w-44 shrink-0">
              <Image
                src="/assets/logo-horizontal.png"
                alt={siteConfig.shortName[lang]}
                fill
                priority
                sizes="(max-width: 400px) 144px, 176px"
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-2 shrink-0 whitespace-nowrap" aria-label="Main Navigation">
            {/* 1. Home */}
            <Link
              href={prefix || '/'}
              className={`px-2 xl:px-3 py-1.5 xl:py-2 rounded-lg text-xs xl:text-sm font-medium whitespace-nowrap transition-colors ${
                pathname === '/' || pathname === '/zh'
                  ? 'text-brand-red font-semibold bg-red-50/70'
                  : 'text-ink-primary hover:text-brand-navy hover:bg-slate-50'
              }`}
            >
              {t.nav.home[lang]}
            </Link>

            {/* 2. About */}
            <Link
              href={`${prefix}/about`}
              className={`px-2 xl:px-3 py-1.5 xl:py-2 rounded-lg text-xs xl:text-sm font-medium whitespace-nowrap transition-colors ${
                pathname.startsWith(`${prefix}/about`)
                  ? 'text-brand-red font-semibold bg-red-50/70'
                  : 'text-ink-primary hover:text-brand-navy hover:bg-slate-50'
              }`}
            >
              {t.nav.about[lang]}
            </Link>

            {/* 3. Art Courses (With Desktop Dropdown Menu) */}
            <div 
              className="relative shrink-0"
              onMouseEnter={() => handleMouseEnter('art')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'art' ? null : 'art')}
                aria-expanded={activeDropdown === 'art'}
                aria-haspopup="true"
                className={`inline-flex items-center gap-0.5 xl:gap-1 px-2 xl:px-3 py-1.5 xl:py-2 rounded-lg text-xs xl:text-sm font-medium whitespace-nowrap transition-colors ${
                  pathname.startsWith(`${prefix}/art-courses`) || activeDropdown === 'art'
                    ? 'text-brand-red font-semibold bg-red-50/70'
                    : 'text-ink-primary hover:text-brand-navy hover:bg-slate-50'
                }`}
              >
                <span className="whitespace-nowrap">{t.nav.artCourses[lang]}</span>
                <ChevronDown 
                  className={`w-3.5 h-3.5 xl:w-4 xl:h-4 transition-transform duration-200 shrink-0 ${
                    activeDropdown === 'art' ? 'rotate-180 text-brand-red' : 'text-slate-400'
                  }`} 
                />
              </button>

              {/* Art Courses Mega Dropdown */}
              {activeDropdown === 'art' && (
                <div 
                  className="absolute left-0 mt-1 w-[520px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-xl border border-surface-border p-5 animate-in fade-in slide-in-from-top-2 duration-150 z-50"
                  onMouseEnter={() => handleMouseEnter('art')}
                  onMouseLeave={handleMouseLeave}
                  role="menu"
                >
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-brand-red shrink-0">
                        <Palette className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-brand-navy">
                          {lang === 'zh' ? '南洋美术研习学院' : 'Nanyang Fine Arts Academy'}
                        </h4>
                        <p className="text-[11px] text-ink-muted">
                          {lang === 'zh' ? '7大专业美术体系 · 培养扎实造型力' : '7 Structured Fine Art Disciplines'}
                        </p>
                      </div>
                    </div>
                    <Link
                      href={`${prefix}/art-courses`}
                      className="text-xs font-semibold text-brand-red hover:underline flex items-center gap-1 group"
                    >
                      <span>{lang === 'zh' ? '查看全部美术课程' : 'Explore All'}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {artCourses.map((course) => (
                      <Link
                        key={course.slug}
                        href={`${prefix}/art-courses/${course.slug}`}
                        className="p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-colors group flex flex-col justify-between"
                        role="menuitem"
                      >
                        <div className="flex items-start justify-between gap-1.5">
                          <span className="text-xs font-bold text-ink-primary group-hover:text-brand-red transition-colors">
                            {course.title[lang]}
                          </span>
                          {course.slug === 'short-course-art-teacher' && (
                            <span className="text-[9px] px-1.5 py-0.5 bg-amber-50 text-amber-700 rounded border border-amber-200 shrink-0 font-medium">
                              {lang === 'zh' ? '待确认' : 'Pending'}
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] text-ink-muted line-clamp-1 mt-0.5">
                          {course.subtitle ? course.subtitle[lang] : course.summary[lang]}
                        </span>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-100 bg-surface-canvas -mx-5 -mb-5 p-3 px-5 rounded-b-2xl flex items-center justify-between text-xs text-ink-muted">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-brand-gold" />
                      <span>{t.nav.artMegaTip[lang]}</span>
                    </span>
                    <Link href={`${prefix}/contact`} className="font-semibold text-brand-navy hover:text-brand-red transition-colors">
                      {t.nav.inquireMega[lang]}
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 4. Enrichment Courses (With Desktop Two-Column Dropdown) */}
            <div 
              className="relative shrink-0"
              onMouseEnter={() => handleMouseEnter('enrichment')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'enrichment' ? null : 'enrichment')}
                aria-expanded={activeDropdown === 'enrichment'}
                aria-haspopup="true"
                className={`inline-flex items-center gap-0.5 xl:gap-1 px-2 xl:px-3 py-1.5 xl:py-2 rounded-lg text-xs xl:text-sm font-medium whitespace-nowrap transition-colors ${
                  pathname.startsWith(`${prefix}/enrichment-courses`) || activeDropdown === 'enrichment'
                    ? 'text-brand-red font-semibold bg-red-50/70'
                    : 'text-ink-primary hover:text-brand-navy hover:bg-slate-50'
                }`}
              >
                <span className="whitespace-nowrap">{t.nav.enrichmentCourses[lang]}</span>
                <ChevronDown 
                  className={`w-3.5 h-3.5 xl:w-4 xl:h-4 transition-transform duration-200 shrink-0 ${
                    activeDropdown === 'enrichment' ? 'rotate-180 text-brand-red' : 'text-slate-400'
                  }`} 
                />
              </button>

              {/* Enrichment Courses Mega Dropdown Menu */}
              {activeDropdown === 'enrichment' && (
                <div 
                  className="absolute lg:-left-56 xl:-left-28 mt-1 w-[640px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-xl border border-surface-border p-6 animate-in fade-in slide-in-from-top-2 duration-150 z-50"
                  onMouseEnter={() => handleMouseEnter('enrichment')}
                  onMouseLeave={handleMouseLeave}
                  role="menu"
                >
                  <div className="grid grid-cols-2 gap-6 divide-x divide-slate-100">
                    {/* Column 1: Language Courses */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-sky-50 flex items-center justify-center text-brand-blue">
                            <Globe className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-navy">
                              {t.nav.languageMegaHeading[lang]}
                            </h4>
                          </div>
                        </div>
                        <Link 
                          href={`${prefix}/enrichment-courses#languages`}
                          className="text-[11px] font-semibold text-brand-blue hover:underline"
                        >
                          {t.nav.viewAllMega[lang]}
                        </Link>
                      </div>

                      <div className="space-y-1">
                        {languageCourses.map((lc) => (
                          <Link
                            key={lc.slug}
                            href={`${prefix}/enrichment-courses/language/${lc.slug}`}
                            className="block p-2 rounded-lg hover:bg-slate-50 transition-colors group"
                            role="menuitem"
                          >
                            <div className="text-xs font-bold text-ink-primary group-hover:text-brand-blue transition-colors">
                              {lc.title[lang]}
                            </div>
                            <div className="text-[10px] text-ink-muted line-clamp-1">
                              {lc.subtitle ? lc.subtitle[lang] : lc.duration?.[lang]}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Column 2: Brain Intelligence Courses */}
                    <div className="pl-6 space-y-3">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-amber-50 flex items-center justify-center text-brand-gold">
                            <Brain className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-navy">
                              {t.nav.brainMegaHeading[lang]}
                            </h4>
                          </div>
                        </div>
                        <Link 
                          href={`${prefix}/enrichment-courses#brain`}
                          className="text-[11px] font-semibold text-brand-gold hover:underline"
                        >
                          {t.nav.viewAllMega[lang]}
                        </Link>
                      </div>

                      <div className="space-y-1">
                        {brainCourses.map((bc) => (
                          <Link
                            key={bc.slug}
                            href={`${prefix}/enrichment-courses/brain/${bc.slug}`}
                            className="block p-2 rounded-lg hover:bg-slate-50 transition-colors group"
                            role="menuitem"
                          >
                            <div className="text-xs font-bold text-ink-primary group-hover:text-brand-gold transition-colors">
                              {bc.title[lang]}
                            </div>
                            <div className="text-[10px] text-ink-muted line-clamp-1">
                              {bc.ageGroup?.[lang] || (bc.duration ? bc.duration[lang] : '专注力与心智成长')}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Dropdown Footer CTA */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-ink-muted">
                      {t.nav.enrichmentMegaTip[lang]}
                    </span>
                    <Link 
                      href={`${prefix}/enrichment-courses`} 
                      className="font-semibold text-brand-navy hover:text-brand-red flex items-center gap-1 group"
                    >
                      <span>{t.nav.viewEnrichmentHub[lang]}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 5. News & Events */}
            <Link
              href={`${prefix}/news-events`}
              className={`px-2 xl:px-3 py-1.5 xl:py-2 rounded-lg text-xs xl:text-sm font-medium whitespace-nowrap transition-colors ${
                pathname.startsWith(`${prefix}/news-events`)
                  ? 'text-brand-red font-semibold bg-red-50/70'
                  : 'text-ink-primary hover:text-brand-navy hover:bg-slate-50'
              }`}
            >
              {t.nav.newsEvents[lang]}
            </Link>

            {/* 6. Contact */}
            <Link
              href={`${prefix}/contact`}
              className={`px-2 xl:px-3 py-1.5 xl:py-2 rounded-lg text-xs xl:text-sm font-medium whitespace-nowrap transition-colors ${
                pathname.startsWith(`${prefix}/contact`)
                  ? 'text-brand-red font-semibold bg-red-50/70'
                  : 'text-ink-primary hover:text-brand-navy hover:bg-slate-50'
              }`}
            >
              {t.nav.contact[lang]}
            </Link>
          </nav>

          {/* Right Actions: Language Switcher & Enquire CTA */}
          <div className="hidden sm:flex items-center gap-1.5 xl:gap-3 shrink-0">
            <LanguageSwitcher currentLang={lang} />
            <Link
              href={`${prefix}/contact`}
              className="inline-flex items-center justify-center px-3 xl:px-4 py-2 xl:py-2.5 rounded-lg text-xs xl:text-sm font-semibold text-white bg-brand-red hover:bg-brand-red-hover transition-colors shadow-xs focus:ring-2 focus:ring-brand-red focus:ring-offset-2 min-h-[38px] xl:min-h-[40px] whitespace-nowrap shrink-0"
            >
              {t.nav.enquireNow[lang]}
            </Link>
          </div>

          {/* Mobile Menu & Language Trigger */}
          <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden shrink-0">
            <LanguageSwitcher currentLang={lang} size="sm" />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 sm:p-2.5 rounded-lg text-ink-primary hover:text-brand-navy hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-navy min-h-[44px] min-w-[44px] flex items-center justify-center shrink-0"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu (Large Touch Targets >= 48px) */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-surface-border bg-white px-4 pt-3 pb-8 space-y-3 shadow-xl max-h-[85vh] overflow-y-auto animate-in slide-in-from-top duration-200">
          <div className="flex justify-center py-2 border-b border-slate-100">
            <div className="relative h-12 w-44">
              <Image
                src="/assets/logo-horizontal.png"
                alt={siteConfig.name[lang]}
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            {/* 1. Home */}
            <Link
              href={prefix || '/'}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-semibold min-h-[48px] ${
                pathname === '/' || pathname === '/zh' 
                  ? 'bg-red-50 text-brand-red font-bold' 
                  : 'text-ink-primary hover:bg-slate-50'
              }`}
            >
              <span>{t.nav.home[lang]}</span>
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </Link>

            {/* 2. About */}
            <Link
              href={`${prefix}/about`}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-semibold min-h-[48px] ${
                pathname.startsWith(`${prefix}/about`) 
                  ? 'bg-red-50 text-brand-red font-bold' 
                  : 'text-ink-primary hover:bg-slate-50'
              }`}
            >
              <span>{t.nav.about[lang]}</span>
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </Link>

            {/* 3. Art Courses Accordion */}
            <div className="border border-slate-200/80 rounded-xl overflow-hidden">
              <div className="flex items-center justify-between px-4 py-1 bg-slate-50 min-h-[48px]">
                <Link
                  href={`${prefix}/art-courses`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-semibold text-base text-ink-primary hover:text-brand-red flex items-center gap-2.5 flex-1 min-h-[44px]"
                >
                  <Palette className="w-5 h-5 text-brand-red shrink-0" />
                  <span>{t.nav.artCourses[lang]}</span>
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileExpandedSection(mobileExpandedSection === 'art' ? null : 'art')}
                  className="p-2 rounded-lg text-slate-500 hover:text-slate-800 min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Expand Art Courses Submenu"
                >
                  <ChevronDown className={`w-5 h-5 transition-transform ${mobileExpandedSection === 'art' ? 'rotate-180 text-brand-red' : ''}`} />
                </button>
              </div>

              {mobileExpandedSection === 'art' && (
                <div className="p-2.5 space-y-1 bg-white border-t border-slate-100">
                  {artCourses.map((c) => (
                    <Link
                      key={c.slug}
                      href={`${prefix}/art-courses/${c.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-3.5 py-3 rounded-lg text-sm font-medium text-ink-secondary hover:bg-red-50 hover:text-brand-red transition-colors min-h-[44px] flex items-center justify-between"
                    >
                      <span>{c.title[lang]}</span>
                      {c.slug === 'short-course-art-teacher' && (
                        <span className="text-[10px] px-1.5 py-0.5 bg-amber-50 text-amber-700 rounded border border-amber-200">
                          {lang === 'zh' ? '待确认' : 'Pending'}
                        </span>
                      )}
                    </Link>
                  ))}
                  <div className="pt-2 border-t border-slate-100">
                    <Link
                      href={`${prefix}/art-courses`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-3.5 py-3 font-bold text-sm text-brand-red hover:underline min-h-[44px] flex items-center"
                    >
                      {lang === 'zh' ? '进入美术学院主页 →' : 'View Art Courses Hub →'}
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 4. Enrichment Courses Accordion */}
            <div className="border border-slate-200/80 rounded-xl overflow-hidden">
              <div className="flex items-center justify-between px-4 py-1 bg-slate-50 min-h-[48px]">
                <Link
                  href={`${prefix}/enrichment-courses`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-semibold text-base text-ink-primary hover:text-brand-blue flex items-center gap-2.5 flex-1 min-h-[44px]"
                >
                  <Globe className="w-5 h-5 text-brand-blue shrink-0" />
                  <span>{t.nav.enrichmentCourses[lang]}</span>
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileExpandedSection(mobileExpandedSection === 'enrichment' ? null : 'enrichment')}
                  className="p-2 rounded-lg text-slate-500 hover:text-slate-800 min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Expand Enrichment Courses Submenu"
                >
                  <ChevronDown className={`w-5 h-5 transition-transform ${mobileExpandedSection === 'enrichment' ? 'rotate-180 text-brand-blue' : ''}`} />
                </button>
              </div>

              {mobileExpandedSection === 'enrichment' && (
                <div className="p-2.5 space-y-2.5 bg-white border-t border-slate-100">
                  <div>
                    <span className="px-3 py-1 text-[11px] uppercase font-bold text-brand-blue block">
                      {lang === 'zh' ? '多语种研习 (5大语种)' : 'Language Courses (5)'}
                    </span>
                    {languageCourses.map((lc) => (
                      <Link
                        key={lc.slug}
                        href={`${prefix}/enrichment-courses/language/${lc.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="px-3.5 py-2.5 rounded-lg text-sm text-ink-secondary hover:bg-sky-50 hover:text-brand-blue transition-colors min-h-[44px] flex items-center"
                      >
                        {lc.title[lang]}
                      </Link>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-slate-100">
                    <span className="px-3 py-1 text-[11px] uppercase font-bold text-brand-gold block">
                      {lang === 'zh' ? '全脑潜能启发 (6大模块)' : 'Brain Intelligence (6)'}
                    </span>
                    {brainCourses.map((bc) => (
                      <Link
                        key={bc.slug}
                        href={`${prefix}/enrichment-courses/brain/${bc.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="px-3.5 py-2.5 rounded-lg text-sm text-ink-secondary hover:bg-amber-50 hover:text-brand-gold transition-colors min-h-[44px] flex items-center"
                      >
                        {bc.title[lang]}
                      </Link>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-slate-100">
                    <Link
                      href={`${prefix}/enrichment-courses`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-3.5 py-3 font-bold text-sm text-brand-navy hover:underline min-h-[44px] flex items-center"
                    >
                      {lang === 'zh' ? '进入强化课程中心 →' : 'View Enrichment Hub →'}
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 5. News & Events */}
            <Link
              href={`${prefix}/news-events`}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-semibold min-h-[48px] ${
                pathname.startsWith(`${prefix}/news-events`) 
                  ? 'bg-red-50 text-brand-red font-bold' 
                  : 'text-ink-primary hover:bg-slate-50'
              }`}
            >
              <span>{t.nav.newsEvents[lang]}</span>
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </Link>

            {/* 6. Contact */}
            <Link
              href={`${prefix}/contact`}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-semibold min-h-[48px] ${
                pathname.startsWith(`${prefix}/contact`) 
                  ? 'bg-red-50 text-brand-red font-bold' 
                  : 'text-ink-primary hover:bg-slate-50'
              }`}
            >
              <span>{t.nav.contact[lang]}</span>
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </Link>
          </div>

          {/* Action CTAs in Mobile Drawer */}
          <div className="pt-4 border-t border-slate-100 space-y-3">
            <Link
              href={`${prefix}/contact`}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center px-4 py-3.5 rounded-xl text-base font-bold text-white bg-brand-red hover:bg-brand-red-hover transition-colors shadow-sm min-h-[48px]"
            >
              {t.nav.enquireNow[lang]}
            </Link>
            <a
              href={siteConfig.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors min-h-[44px]"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp: {siteConfig.contact.whatsappLabel}</span>
            </a>
          </div>
        </div>
      )}
    </header>
    </>
  );
};
