import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Language } from '@/content/types';
import { uiTranslations } from '@/content/translations';
import { siteConfig } from '@/data/site-config';
import { LanguageSwitcher } from '../common/LanguageSwitcher';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  MessageCircle 
} from 'lucide-react';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = uiTranslations;
  const prefix = lang === 'zh' ? '/zh' : '';
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 text-slate-800 border-t border-slate-200/90">
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand Identity & Institutional Background (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link 
              href={prefix || '/'} 
              className="inline-block group focus:outline-none focus:ring-2 focus:ring-brand-navy rounded-xl"
            >
              {/* Prominently Scaled Logo in Footer */}
              <div className="relative h-20 sm:h-24 lg:h-26 w-60 sm:w-72 lg:w-[312px]">
                <Image
                  src="/assets/logo-horizontal.png"
                  alt={siteConfig.fullName[lang]}
                  fill
                  sizes="(max-width: 640px) 240px, (max-width: 1024px) 288px, 312px"
                  className="object-contain object-left group-hover:opacity-90 transition-opacity"
                />
              </div>
            </Link>

            <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
              {t.footer.aboutText[lang]}
            </p>

            <div className="space-y-2 pt-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-2xs text-xs text-brand-navy font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
                <span>{t.footer.heritageBadge[lang]}</span>
              </div>
              <p className="text-xs text-slate-500 italic">
                {siteConfig.tagline[lang]}
              </p>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-wider text-brand-navy font-extrabold">
              {t.footer.colNavigation[lang]}
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              {siteConfig.navItems.map((item) => (
                <li key={item.key}>
                  <Link 
                    href={prefix ? item.href.zh : item.href.en} 
                    className="hover:text-brand-red transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-brand-red transition-colors" />
                    <span>{item.label[lang]}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Art Courses (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-wider text-brand-red font-extrabold">
              {t.footer.colArt[lang]}
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li>
                <Link href={`${prefix}/art-courses/oil-painting`} className="hover:text-brand-red transition-colors">
                  {lang === 'zh' ? '油画技法' : 'Oil Painting'}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/art-courses/sketching`} className="hover:text-brand-red transition-colors">
                  {lang === 'zh' ? '素描造型' : 'Sketching'}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/art-courses/water-color`} className="hover:text-brand-red transition-colors">
                  {lang === 'zh' ? '水彩艺术' : 'Water Color'}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/art-courses/chinese-calligraphy`} className="hover:text-brand-red transition-colors">
                  {lang === 'zh' ? '中国书法' : 'Chinese Calligraphy'}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/art-courses/chinese-painting`} className="hover:text-brand-red transition-colors">
                  {lang === 'zh' ? '传统国画' : 'Chinese Painting'}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/art-courses/childrens-drawing`} className="hover:text-brand-red transition-colors">
                  {lang === 'zh' ? '儿童画启蒙' : "Children's Drawing"}
                </Link>
              </li>
              <li className="pt-1">
                <Link 
                  href={`${prefix}/art-courses`} 
                  className="text-xs text-brand-red hover:underline flex items-center gap-1 group font-bold"
                >
                  <span>{lang === 'zh' ? '全部美术课程 →' : 'All Art Courses →'}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Admissions from siteConfig (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-wider text-brand-blue font-extrabold">
              {t.footer.colContact[lang]}
            </h4>
            
            <div className="space-y-3.5 text-sm text-slate-700">
              {/* WhatsApp Admissions */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0 shadow-2xs">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-500 block uppercase tracking-wide">{t.contact.whatsappAdmissions[lang]}</span>
                  <a 
                    href={siteConfig.contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-slate-900 hover:text-emerald-600 transition-colors"
                  >
                    {siteConfig.contact.whatsappLabel}
                  </a>
                </div>
              </div>

              {/* Office Telephone */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-brand-gold shrink-0 shadow-2xs">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-500 block uppercase tracking-wide">{t.contact.officeNumber[lang]}</span>
                  <a 
                    href={`tel:${siteConfig.contact.officePhone.replace(/\s+/g, '')}`}
                    className="font-bold text-slate-900 hover:text-brand-gold transition-colors"
                  >
                    {siteConfig.contact.officePhone}
                  </a>
                </div>
              </div>

              {/* Official Email */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center text-brand-blue shrink-0 shadow-2xs">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-500 block uppercase tracking-wide">{t.contact.officialEmail[lang]}</span>
                  <a 
                    href={`mailto:${siteConfig.contact.email}`}
                    className="font-semibold text-slate-900 hover:text-brand-blue transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              {/* Campus Location */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-red-50 border border-red-200 flex items-center justify-center text-brand-red shrink-0 shadow-2xs">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-500 block uppercase tracking-wide">
                    {t.contact.locationTitle[lang]}
                  </span>
                  <span className="text-xs font-semibold text-slate-900 block mt-0.5 leading-snug">
                    {siteConfig.contact.address[lang]}
                  </span>
                </div>
              </div>

              {/* Consultation Hours */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 shrink-0 shadow-2xs">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-500 block uppercase tracking-wide">
                    {t.footer.hoursTitle[lang]}
                  </span>
                  <span className="text-xs text-slate-700 block mt-0.5">
                    {siteConfig.contact.hours[lang]}
                  </span>
                </div>
              </div>
            </div>

            {/* Campus Registration Notice */}
            <div className="pt-2">
              <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{siteConfig.contact.notice[lang]}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Bar: Dual Language Switcher in Footer */}
      <div className="border-t border-slate-200 bg-white py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs text-slate-600">
            <span className="font-bold text-slate-800">
              {t.footer.selectLang[lang]}
            </span>
            <LanguageSwitcher currentLang={lang} variant="light" size="sm" />
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-600 font-medium">
            <Link href={`${prefix}/student-recruitment`} className="hover:text-brand-navy transition-colors">
              {t.nav.studentRecruitment[lang]}
            </Link>
            <Link href={`${prefix}/#courses`} className="hover:text-brand-navy transition-colors">
              {t.nav.theCourses[lang]}
            </Link>
            <Link href={`${prefix}/art-courses`} className="hover:text-brand-navy transition-colors">
              {t.nav.artCourses[lang]}
            </Link>
            <Link href={`${prefix}/enrichment-courses`} className="hover:text-brand-navy transition-colors">
              {t.nav.enrichmentCourses[lang]}
            </Link>
            <Link href={`${prefix}/contact`} className="hover:text-brand-navy transition-colors">
              {t.nav.contact[lang]}
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright, Developer Accreditation & Static Architecture Guarantee */}
      <div className="border-t border-slate-200 bg-slate-100/90 pt-5 pb-24 lg:pb-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p>© {currentYear} {siteConfig.fullName[lang]}. {t.footer.copyright[lang]}</p>
            <span className="hidden sm:inline text-slate-300">•</span>
            <p className="flex items-center gap-1.5 font-medium text-slate-600">
              <span>{lang === 'zh' ? '网站开发与维护：' : 'Developed and Maintained by'}</span>
              <a 
                href="https://adityaskillgate.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-brand-navy hover:text-brand-red font-semibold underline underline-offset-2 transition-colors inline-flex items-center gap-1 group"
                title="Aditya Skill Gate IT Solution"
              >
                <span>Aditya Skill Gate IT Solution</span>
                <span className="inline-block text-slate-400 group-hover:text-brand-red group-hover:translate-x-0.5 transition-transform text-[10px]">↗</span>
              </a>
            </p>
          </div>

          <div className="flex items-center gap-3 text-slate-400 text-[11px]">
            <span>{t.common.staticNotice[lang]}</span>
            <span>•</span>
            <span>{t.footer.singaporeEntity[lang]}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
