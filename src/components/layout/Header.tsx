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
  Sparkles,
  GraduationCap,
  MessageCircle
} from 'lucide-react';

interface HeaderProps {
  lang: Language;
}

export const Header: React.FC<HeaderProps> = ({ lang }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'courses' | null>(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<'courses' | 'art' | 'enrichment' | null>(null);
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

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown('courses');
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const isCoursesActive =
    pathname.startsWith(`${prefix}/art-courses`) ||
    pathname.startsWith(`${prefix}/enrichment-courses`) ||
    activeDropdown === 'courses';

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
        {/* Top micro bar: Singapore Institutional branding & Contact numbers */}
        <div className="bg-brand-navy text-white text-[11px] py-1.5 px-3 sm:px-8 border-b border-brand-navy-dark">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
              <span className="inline-block w-2 h-2 rounded-full bg-brand-gold animate-pulse shrink-0" />
              <span className="tracking-wide font-medium truncate">
                {t.brandName[lang]} · {t.sinceBadge[lang]}
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-4 text-slate-300 shrink-0">
              <a 
                href={`tel:${siteConfig.contact.officePhone.replace(/\s+/g, '')}`}
                className="hover:text-white flex items-center gap-1.5 transition-colors group"
              >
                <Phone className="w-3 h-3 text-brand-gold group-hover:scale-110 transition-transform" />
                <span>Office: {siteConfig.contact.officePhone}</span>
              </a>
              <span className="text-slate-500">|</span>
              <a 
                href={siteConfig.contact.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-emerald-400 flex items-center gap-1.5 transition-colors group"
              >
                <MessageCircle className="w-3 h-3 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>WhatsApp: {siteConfig.contact.whatsappLabel}</span>
              </a>
            </div>
          </div>
        </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-4 xl:px-8" ref={navContainerRef}>
        <div className="flex items-center justify-between h-20 sm:h-24 lg:h-[6.25rem] xl:h-28 gap-2 lg:gap-3 xl:gap-4">
          {/* Logo Section */}
          <Link 
            href={prefix || '/'} 
            className="flex items-center gap-2 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-navy rounded-lg py-1 px-0.5 sm:p-1 shrink-0" 
            aria-label={`${siteConfig.name.en} Home`}
          >
            {/* Desktop Horizontal Logo (Prominently Increased Size) */}
            <div className="hidden sm:block relative h-16 w-48 sm:h-18 sm:w-56 md:h-20 md:w-60 lg:h-[5.25rem] lg:w-[252px] xl:h-24 xl:w-72 shrink-0">
              <Image
                src="/assets/logo-horizontal.png"
                alt={siteConfig.fullName[lang]}
                fill
                priority
                sizes="(max-width: 1024px) 240px, (max-width: 1280px) 252px, 288px"
                className="object-contain object-left group-hover:opacity-95 transition-opacity"
              />
            </div>
            {/* Mobile Compact Horizontal Logo (Increased Size) */}
            <div className="sm:hidden relative h-14 w-[168px] xs:h-15 xs:w-[180px] shrink-0">
              <Image
                src="/assets/logo-horizontal.png"
                alt={siteConfig.fullName[lang]}
                fill
                priority
                sizes="(max-width: 400px) 168px, 180px"
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

            {/* 2. About Us */}
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

            {/* 3. Student Recruitment Service */}
            <Link
              href={`${prefix}/student-recruitment`}
              className={`px-2 xl:px-3 py-1.5 xl:py-2 rounded-lg text-xs xl:text-sm font-medium whitespace-nowrap transition-colors ${
                pathname.startsWith(`${prefix}/student-recruitment`)
                  ? 'text-brand-red font-semibold bg-red-50/70'
                  : 'text-ink-primary hover:text-brand-navy hover:bg-slate-50'
              }`}
            >
              {t.nav.studentRecruitment[lang]}
            </Link>

            {/* 4. The Courses (Dropdown with Art Courses & Enrichment Courses) */}
            <div 
              className="relative shrink-0"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'courses' ? null : 'courses')}
                aria-expanded={activeDropdown === 'courses'}
                aria-haspopup="true"
                className={`inline-flex items-center gap-0.5 xl:gap-1 px-2 xl:px-3 py-1.5 xl:py-2 rounded-lg text-xs xl:text-sm font-medium whitespace-nowrap transition-colors ${
                  isCoursesActive
                    ? 'text-brand-red font-semibold bg-red-50/70'
                    : 'text-ink-primary hover:text-brand-navy hover:bg-slate-50'
                }`}
              >
                <span className="whitespace-nowrap">{t.nav.theCourses[lang]}</span>
                <ChevronDown 
                  className={`w-3.5 h-3.5 xl:w-4 xl:h-4 transition-transform duration-200 shrink-0 ${
                    activeDropdown === 'courses' ? 'rotate-180 text-brand-red' : 'text-slate-400'
                  }`} 
                />
              </button>

              {/* The Courses Unified Mega Dropdown */}
              {activeDropdown === 'courses' && (
                <div 
                  className="absolute -left-36 xl:-left-20 mt-1 w-[780px] xl:w-[840px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-surface-border p-6 animate-in fade-in slide-in-from-top-2 duration-150 z-50"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  role="menu"
                >
                  <div className="grid grid-cols-12 gap-6 divide-x divide-slate-100">
                    {/* Left Column: Art Courses (6 cols) */}
                    <div className="col-span-6 space-y-3">
                      <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-red-50 flex items-center justify-center text-brand-red">
                            <Palette className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-navy">
                              {t.nav.artCourses[lang]}
                            </h4>
                          </div>
                        </div>
                        <Link 
                          href={`${prefix}/art-courses`}
                          className="text-[11px] font-semibold text-brand-red hover:underline"
                        >
                          {t.nav.viewAllMega[lang]}
                        </Link>
                      </div>

                      <div className="grid grid-cols-1 gap-1">
                        {artCourses.map((c) => (
                          <Link
                            key={c.slug}
                            href={`${prefix}/art-courses/${c.slug}`}
                            className="p-2 rounded-lg hover:bg-red-50/60 transition-colors group flex items-center justify-between"
                            role="menuitem"
                          >
                            <div className="min-w-0">
                              <span className="text-xs font-bold text-ink-primary group-hover:text-brand-red transition-colors block truncate">
                                {c.title[lang]}
                              </span>
                              <span className="text-[10px] text-ink-muted block truncate">
                                {c.subtitle ? c.subtitle[lang] : c.summary[lang]}
                              </span>
                            </div>
                            <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-brand-red group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Right Column: Enrichment Courses (6 cols) */}
                    <div className="col-span-6 pl-6 space-y-4">
                      {/* Language Courses */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-md bg-sky-50 flex items-center justify-center text-brand-blue">
                              <Globe className="w-3.5 h-3.5" />
                            </div>
                            <h5 className="text-[11px] font-bold uppercase tracking-wider text-brand-navy">
                              {t.nav.languageMegaHeading[lang]}
                            </h5>
                          </div>
                          <Link 
                            href={`${prefix}/enrichment-courses#languages`}
                            className="text-[10px] font-semibold text-brand-blue hover:underline"
                          >
                            {t.nav.viewAllMega[lang]}
                          </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-1">
                          {languageCourses.map((lc) => (
                            <Link
                              key={lc.slug}
                              href={`${prefix}/enrichment-courses/language/${lc.slug}`}
                              className="p-1.5 rounded-md hover:bg-sky-50/60 transition-colors text-xs font-medium text-ink-primary hover:text-brand-blue truncate"
                              role="menuitem"
                            >
                              {lc.title[lang]}
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Brain Intelligence */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-md bg-amber-50 flex items-center justify-center text-brand-gold">
                              <Brain className="w-3.5 h-3.5" />
                            </div>
                            <h5 className="text-[11px] font-bold uppercase tracking-wider text-brand-navy">
                              {t.nav.brainMegaHeading[lang]}
                            </h5>
                          </div>
                          <Link 
                            href={`${prefix}/enrichment-courses#brain`}
                            className="text-[10px] font-semibold text-brand-gold hover:underline"
                          >
                            {t.nav.viewAllMega[lang]}
                          </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-1">
                          {brainCourses.map((bc) => (
                            <Link
                              key={bc.slug}
                              href={`${prefix}/enrichment-courses/brain/${bc.slug}`}
                              className="p-1.5 rounded-md hover:bg-amber-50/60 transition-colors text-xs font-medium text-ink-primary hover:text-brand-gold truncate"
                              role="menuitem"
                            >
                              {bc.title[lang]}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mega Dropdown Footer */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-ink-muted bg-surface-canvas -mx-6 -mb-6 p-3 px-6 rounded-b-2xl">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-brand-gold" />
                      <span>{t.nav.artMegaTip[lang]}</span>
                    </span>
                    <div className="flex items-center gap-4">
                      <Link 
                        href={`${prefix}/art-courses`} 
                        className="font-semibold text-brand-red hover:underline"
                      >
                        {lang === 'zh' ? '美术学院 →' : 'Art Academy →'}
                      </Link>
                      <Link 
                        href={`${prefix}/enrichment-courses`} 
                        className="font-semibold text-brand-navy hover:underline"
                      >
                        {lang === 'zh' ? '特色强化中心 →' : 'Enrichment Hub →'}
                      </Link>
                    </div>
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

            {/* 6. Contact Us */}
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
          <div className="flex justify-center py-3 border-b border-slate-100">
            <div className="relative h-16 w-48 xs:h-18 xs:w-54">
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

            {/* 2. About Us */}
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

            {/* 3. Student Recruitment Service */}
            <Link
              href={`${prefix}/student-recruitment`}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-semibold min-h-[48px] ${
                pathname.startsWith(`${prefix}/student-recruitment`) 
                  ? 'bg-red-50 text-brand-red font-bold' 
                  : 'text-ink-primary hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <GraduationCap className="w-5 h-5 text-brand-navy" />
                <span>{t.nav.studentRecruitment[lang]}</span>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </Link>

            {/* 4. The Courses Accordion */}
            <div className="border border-slate-200/80 rounded-xl overflow-hidden">
              <div className="flex items-center justify-between px-4 py-1 bg-slate-50 min-h-[48px]">
                <div className="font-semibold text-base text-ink-primary flex items-center gap-2.5 flex-1 min-h-[44px]">
                  <Palette className="w-5 h-5 text-brand-red shrink-0" />
                  <span>{t.nav.theCourses[lang]}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileExpandedSection(mobileExpandedSection === 'courses' ? null : 'courses')}
                  className="p-2 rounded-lg text-slate-500 hover:text-slate-800 min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Expand Courses Submenu"
                >
                  <ChevronDown className={`w-5 h-5 transition-transform ${mobileExpandedSection === 'courses' ? 'rotate-180 text-brand-red' : ''}`} />
                </button>
              </div>

              {mobileExpandedSection === 'courses' && (
                <div className="p-2.5 space-y-3 bg-white border-t border-slate-100">
                  {/* Art Courses Group */}
                  <div className="space-y-1">
                    <span className="px-3 py-1 text-[11px] uppercase font-bold text-brand-red block">
                      {t.nav.artCourses[lang]}
                    </span>
                    {artCourses.map((c) => (
                      <Link
                        key={c.slug}
                        href={`${prefix}/art-courses/${c.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="px-3.5 py-2 rounded-lg text-sm text-ink-secondary hover:bg-red-50 hover:text-brand-red transition-colors min-h-[40px] flex items-center justify-between"
                      >
                        <span>{c.title[lang]}</span>
                      </Link>
                    ))}
                    <Link
                      href={`${prefix}/art-courses`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-3.5 py-2 font-bold text-xs text-brand-red hover:underline flex items-center"
                    >
                      {lang === 'zh' ? '进入美术学院主页 →' : 'View Art Academy Hub →'}
                    </Link>
                  </div>

                  {/* Enrichment Courses Group */}
                  <div className="pt-2 border-t border-slate-100 space-y-1">
                    <span className="px-3 py-1 text-[11px] uppercase font-bold text-brand-blue block">
                      {t.nav.enrichmentCourses[lang]}
                    </span>
                    {languageCourses.slice(0, 3).map((lc) => (
                      <Link
                        key={lc.slug}
                        href={`${prefix}/enrichment-courses/language/${lc.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="px-3.5 py-2 rounded-lg text-sm text-ink-secondary hover:bg-sky-50 hover:text-brand-blue transition-colors min-h-[40px] flex items-center"
                      >
                        {lc.title[lang]}
                      </Link>
                    ))}
                    {brainCourses.slice(0, 3).map((bc) => (
                      <Link
                        key={bc.slug}
                        href={`${prefix}/enrichment-courses/brain/${bc.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="px-3.5 py-2 rounded-lg text-sm text-ink-secondary hover:bg-amber-50 hover:text-brand-gold transition-colors min-h-[40px] flex items-center"
                      >
                        {bc.title[lang]}
                      </Link>
                    ))}
                    <Link
                      href={`${prefix}/enrichment-courses`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-3.5 py-2 font-bold text-xs text-brand-navy hover:underline flex items-center"
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

            {/* 6. Contact Us */}
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
          <div className="pt-4 border-t border-slate-100 space-y-2.5">
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
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp: {siteConfig.contact.whatsappLabel}</span>
            </a>
            <a
              href={`tel:${siteConfig.contact.officePhone.replace(/\s+/g, '')}`}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors min-h-[44px]"
            >
              <Phone className="w-4 h-4 text-slate-600" />
              <span>Office: {siteConfig.contact.officePhone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
    </>
  );
};
