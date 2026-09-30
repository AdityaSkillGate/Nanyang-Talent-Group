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
  MessageCircle,
  ShieldAlert
} from 'lucide-react';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = uiTranslations;
  const prefix = lang === 'zh' ? '/zh' : '';
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy-dark text-white border-t border-slate-800">
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand Identity & Institutional Background (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href={prefix || '/'} className="inline-block bg-white p-3 rounded-xl shadow-sm group">
              <div className="relative h-12 w-64">
                <Image
                  src="/assets/logo-horizontal.png"
                  alt={siteConfig.name[lang]}
                  fill
                  sizes="256px"
                  className="object-contain object-left group-hover:opacity-95 transition-opacity"
                />
              </div>
            </Link>

            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              {t.footer.aboutText[lang]}
            </p>

            <div className="space-y-2 pt-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/90 border border-slate-700 text-xs text-brand-gold font-medium">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{t.footer.heritageBadge[lang]}</span>
              </div>
              <p className="text-xs text-slate-400 italic">
                {siteConfig.tagline[lang]}
              </p>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-wider text-brand-gold font-bold">
              {t.footer.colNavigation[lang]}
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {siteConfig.navItems.map((item) => (
                <li key={item.key}>
                  <Link 
                    href={prefix ? item.href.zh : item.href.en} 
                    className="hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-brand-red transition-colors" />
                    <span>{item.label[lang]}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Art Courses (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-wider text-brand-red font-bold">
              {t.footer.colArt[lang]}
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href={`${prefix}/art-courses/oil-painting`} className="hover:text-white transition-colors">
                  {lang === 'zh' ? '油画技法' : 'Oil Painting'}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/art-courses/sketching`} className="hover:text-white transition-colors">
                  {lang === 'zh' ? '素描造型' : 'Sketching'}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/art-courses/water-color`} className="hover:text-white transition-colors">
                  {lang === 'zh' ? '水彩艺术' : 'Water Color'}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/art-courses/chinese-calligraphy`} className="hover:text-white transition-colors">
                  {lang === 'zh' ? '中国书法' : 'Chinese Calligraphy'}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/art-courses/chinese-painting`} className="hover:text-white transition-colors">
                  {lang === 'zh' ? '传统国画' : 'Chinese Painting'}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/art-courses/childrens-drawing`} className="hover:text-white transition-colors">
                  {lang === 'zh' ? '儿童画启蒙' : "Children's Drawing"}
                </Link>
              </li>
              <li className="pt-1">
                <Link 
                  href={`${prefix}/art-courses`} 
                  className="text-xs text-brand-red hover:underline flex items-center gap-1 group font-medium"
                >
                  <span>{lang === 'zh' ? '全部美术课程 →' : 'All Art Courses →'}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Admissions from siteConfig (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-wider text-brand-blue font-bold">
              {t.footer.colContact[lang]}
            </h4>
            
            <div className="space-y-3 text-sm text-slate-300">
              {/* WhatsApp Admissions */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block">{t.contact.whatsappAdmissions[lang]}</span>
                  <a 
                    href={siteConfig.contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-white hover:text-emerald-400 transition-colors"
                  >
                    {siteConfig.contact.whatsappLabel}
                  </a>
                </div>
              </div>

              {/* Official Email */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block">{t.contact.officialEmail[lang]}</span>
                  <a 
                    href={`mailto:${siteConfig.contact.email}`}
                    className="font-medium text-white hover:text-brand-blue transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              {/* Campus Location */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block">
                    {t.contact.locationTitle[lang]}
                  </span>
                  <span className="text-xs text-slate-300 block">
                    {siteConfig.contact.address[lang]}
                  </span>
                </div>
              </div>

              {/* Consultation Hours */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block">
                    {t.footer.hoursTitle[lang]}
                  </span>
                  <span className="text-xs text-slate-300 block">
                    {siteConfig.contact.hours[lang]}
                  </span>
                </div>
              </div>
            </div>

            {/* Zero-Hallucination Integrity Notice */}
            <div className="pt-2">
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex items-start gap-2 text-[11px] text-slate-400">
                <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{siteConfig.contact.notice[lang]}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Bar: Dual Language Switcher in Footer */}
      <div className="border-t border-slate-800/80 bg-slate-950/40 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <span className="font-semibold text-slate-300">
              {t.footer.selectLang[lang]}
            </span>
            <LanguageSwitcher currentLang={lang} variant="dark" size="sm" />
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400">
            <Link href={`${prefix}/art-courses`} className="hover:text-white transition-colors">
              {t.nav.artCourses[lang]}
            </Link>
            <Link href={`${prefix}/enrichment-courses`} className="hover:text-white transition-colors">
              {t.nav.enrichmentCourses[lang]}
            </Link>
            <Link href={`${prefix}/contact`} className="hover:text-white transition-colors">
              {t.nav.contact[lang]}
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Static Architecture Guarantee */}
      <div className="border-t border-slate-900 bg-black/60 pt-5 pb-20 lg:pb-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {currentYear} {siteConfig.name[lang]}. {t.footer.copyright[lang]}</p>
          <div className="flex items-center gap-3">
            <span>{t.common.staticNotice[lang]}</span>
            <span>•</span>
            <span>{t.footer.singaporeEntity[lang]}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
