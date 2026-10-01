import React from 'react';
import Image from 'next/image';
import { Language } from '@/content/types';
import { drTengProfile } from '@/content/leadership';
import { 
  Award, 
  GraduationCap, 
  Brush, 
  Palette, 
  Sparkles, 
  CheckCircle2, 
  Building, 
  Compass, 
  Landmark 
} from 'lucide-react';
import { BilingualBadge } from '@/components/ui/BilingualLabel';

interface DrTengSectionProps {
  lang: Language;
}

export const DrTengSection: React.FC<DrTengSectionProps> = ({ lang }) => {
  const isZh = lang === 'zh';
  const profile = drTengProfile;

  return (
    <section id="leadership" className="py-16 sm:py-24 bg-white border-b border-surface-border relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-navy/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy/5 border border-brand-navy/10 text-brand-navy text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-brand-red" />
            <span>{profile.badge[lang]}</span>
          </div>

          <div className="flex flex-wrap items-baseline gap-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight">
              {profile.name[lang]}
            </h2>
            <span className="text-lg sm:text-xl font-semibold text-brand-red">
              {profile.title[lang]}
            </span>
          </div>

          <p className="text-base sm:text-lg font-medium text-brand-gold">
            {profile.role[lang]}
          </p>
        </div>

        {/* Main Grid: Portrait & Credentials + Biography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Portrait Card & Verified Credentials (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-surface-canvas rounded-2xl p-6 sm:p-7 border border-surface-border shadow-card relative">
              {/* Photo Container */}
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-md border-2 border-brand-gold/30 bg-slate-100">
                <Image
                  src={profile.portrait}
                  alt={profile.name[lang]}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 400px"
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-navy/85 via-brand-navy/40 to-transparent p-4 sm:p-5 text-white">
                  <div className="text-lg font-bold">{profile.name[lang]}</div>
                  <div className="text-xs text-white/90">{profile.title[lang]} • {isZh ? '著名艺术家 & 教育家' : 'Renowned Artist & Educator'}</div>
                </div>
              </div>

              {/* Distinction Ribbon */}
              <div className="mt-5 p-3.5 rounded-xl bg-brand-navy text-white flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-brand-gold/20 flex items-center justify-center shrink-0 text-brand-gold">
                  <Landmark className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <div className="font-bold text-white">
                    {isZh ? '1997年荣登《世界名人录》' : 'Who’s Who in the World (1997)'}
                  </div>
                  <div className="text-white/75 text-[11px]">
                    {isZh ? '深耕新加坡教育与艺术领域30余载' : '30+ Years in Singapore Education & Visual Arts'}
                  </div>
                </div>
              </div>

              {/* Key Credentials Badges */}
              <div className="mt-5 space-y-2.5">
                {profile.credentials.map((cred, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-start gap-2.5 p-2.5 rounded-lg bg-white border border-surface-border text-xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-brand-navy mr-1.5">{cred.year}:</span>
                      <span className="text-ink-secondary">{cred.text[lang]}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Public Sculptures Card */}
            <div className="bg-white rounded-2xl p-5 border border-surface-border shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-navy">
                <Building className="w-4 h-4 text-brand-red" />
                <span>{isZh ? '大型公共纪念雕塑作品' : 'Monumental Public Sculptures'}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {profile.sculptures.map((sculp, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-surface-canvas border border-surface-border text-xs">
                    <div className="font-bold text-brand-navy">{sculp.title[lang]}</div>
                    <div className="text-brand-red font-medium mt-0.5">{sculp.institution[lang]}</div>
                    <div className="text-ink-muted text-[11px] mt-0.5">📍 {sculp.location[lang]}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Full Narrative Biography & Pillars (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Biography Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-ink-secondary leading-relaxed bg-surface-canvas/40 p-6 sm:p-8 rounded-2xl border border-surface-border">
              <h3 className="text-lg sm:text-xl font-bold text-brand-navy pb-2 border-b border-surface-border/70 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-brand-red" />
                <span>{isZh ? '三十余载办学治学与艺术履历' : 'Three Decades of Educational Leadership & Artistic Heritage'}</span>
              </h3>

              {profile.overview[lang].map((para, idx) => (
                <p key={idx} className="text-ink-primary leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Four Core Pillars of Mastery */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-bold text-brand-navy flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand-gold" />
                  <span>{isZh ? '艺术造诣、书法独创与学术成就' : 'Pillars of Artistic & Educational Innovation'}</span>
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {profile.pillars.map((pillar, idx) => (
                  <div 
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-surface-border shadow-xs hover:shadow-md transition-shadow space-y-2 flex flex-col justify-between"
                  >
                    <div>
                      <div className="inline-block text-[11px] font-bold uppercase tracking-wider text-brand-gold bg-brand-gold/10 px-2 py-0.5 rounded">
                        {pillar.category[lang]}
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-brand-navy mt-2">
                        {pillar.title[lang]}
                      </h4>
                      <p className="text-xs text-ink-secondary leading-relaxed mt-2">
                        {pillar.desc[lang]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
