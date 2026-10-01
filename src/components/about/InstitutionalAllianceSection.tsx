import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Language } from '@/content/types';
import { alliancePartners } from '@/content/alliance';
import { 
  Network, 
  ExternalLink, 
  MapPin, 
  CheckCircle2, 
  Building2, 
  ArrowUpRight 
} from 'lucide-react';

interface InstitutionalAllianceSectionProps {
  lang: Language;
}

export const InstitutionalAllianceSection: React.FC<InstitutionalAllianceSectionProps> = ({ lang }) => {
  const isZh = lang === 'zh';

  return (
    <section id="alliance" className="py-16 sm:py-24 bg-surface-canvas/60 border-b border-surface-border relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy/5 border border-brand-navy/10 text-brand-navy text-xs font-bold uppercase tracking-wider">
            <Network className="w-3.5 h-3.5 text-brand-red" />
            <span>{isZh ? '南洋教育与艺术联盟' : 'Nanyang Institutional Alliance'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight leading-tight">
            {isZh 
              ? '学术深造与艺术文脉的协同共同体' 
              : 'A Connected Ecosystem of Academic & Artistic Excellence'}
          </h2>

          <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
            {isZh
              ? '依托新加坡正规高等学府与权威艺术公会的深厚底蕴，为广大学员提供贯通启蒙、升学预备与艺术创作的广阔天地。'
              : 'Collaborating closely with premier tertiary academies and national art associations in Singapore to provide seamless educational pathways.'}
          </p>
        </div>

        {/* Alliance Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {alliancePartners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-2xl border border-surface-border shadow-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Visual Banner Container (Matches authentic mockup framing) */}
                <div className="bg-stone-50 border border-stone-200/80 rounded-xl p-5 flex items-center justify-center min-h-[110px] sm:min-h-[120px] relative overflow-hidden shadow-xs">
                  <div className="relative w-full h-16 sm:h-20">
                    <Image
                      src={partner.logo}
                      alt={partner.name[lang]}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 500px"
                    />
                  </div>
                </div>

                {/* Badges Row: Accreditation Pill + Location */}
                <div className="flex items-center justify-between gap-2 pt-1">
                  <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200/80">
                    {partner.badge[lang]}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-ink-muted font-medium">
                    <MapPin className="w-3.5 h-3.5 text-brand-red" />
                    <span>{partner.location[lang]}</span>
                  </span>
                </div>

                {/* Organization Titles */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-brand-navy tracking-tight">
                    {partner.name[lang]}
                  </h3>
                  <div className="text-base sm:text-lg font-bold text-brand-red font-chinese mt-1">
                    {partner.nativeName.zh}
                  </div>
                </div>

                {/* Detailed Description */}
                <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                  {partner.description[lang]}
                </p>

                {/* Key Institutional Highlights */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  {partner.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-ink-secondary">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{highlight[lang]}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Actions Row (Dashed line divider) */}
              <div className="mt-8 pt-6 border-t border-dashed border-slate-200 flex flex-wrap items-center gap-3">
                {partner.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                      idx === 0
                        ? 'bg-amber-50 hover:bg-amber-100/80 text-amber-950 border border-amber-300 shadow-xs'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200'
                    }`}
                  >
                    <span>{link.label[lang]}</span>
                    <ArrowUpRight className="w-4 h-4 shrink-0 text-amber-800" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Synergistic Ecosystem Callout */}
        <div className="mt-14 max-w-4xl mx-auto p-6 sm:p-7 rounded-2xl bg-white border border-surface-border shadow-xs text-center sm:text-left flex flex-col sm:flex-row items-center gap-5">
          <div className="w-12 h-12 rounded-xl bg-brand-navy/5 flex items-center justify-center shrink-0 text-brand-navy">
            <Building2 className="w-6 h-6 text-brand-red" />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm sm:text-base font-bold text-brand-navy">
              {isZh ? '百年办学愿景 · 贯通式优质教研网络' : 'Centennial Educational Vision & Art Network'}
            </h4>
            <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
              {isZh
                ? '南洋人才集团与南洋亚洲学院及南洋美术家协会紧密协作，形成集“启蒙培优、学术备考、书法水墨与国际名校升学”于一体的高水准协同育人体系。'
                : 'Nanyang Talent Group collaborates synergistically with Nanyang Asia College and the Nanyang Artists Society, providing students with structured foundations in fine arts, language immersion, AEIS pathways, and high-level artistic mentorship.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
