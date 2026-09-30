import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import {
  Button,
  Badge,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  SectionHeader,
  Breadcrumb,
  BilingualText,
  BilingualBadge,
  FormInput,
  FormSelect,
  FormTextarea,
} from '@/components/ui';
import { ArrowRight, CheckCircle2, Clock, Palette, Sparkles, Send, ShieldCheck, AlertCircle } from 'lucide-react';

import { seoMetadata } from '@/content/seo-metadata';

export const metadata: Metadata = seoMetadata.designSystem.en;

export default function DesignSystemPage() {
  return (
    <>
      <Header lang="en" />
      <main className="flex-1 py-12 sm:py-16 bg-surface-canvas space-y-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Header */}
          <div className="bg-white rounded-2xl border border-surface-border p-8 sm:p-10 shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="since" dot>
                Singapore Institutional Standard
              </Badge>
              <Badge variant="navy">v1.0 Design System</Badge>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-navy tracking-tight">
              Nanyang Talent Group Design System
            </h1>
            <p className="text-lg text-ink-secondary max-w-3xl leading-relaxed">
              A bespoke, clean, institutional visual language for Singapore education. Built upon Deep Navy, Nanyang Red, Globe Sky Blue, and Warm Gold, emphasizing clarity, typography, and accessibility without noisy visual clutter.
            </p>
          </div>

          {/* 1. Color Palette Tokens */}
          <section className="space-y-6">
            <SectionHeader
              eyebrow="Color Architecture"
              eyebrowColor="navy"
              title="1. Brand Palette & Contrast Standards"
              description="Calibrated for WCAG 2.1 AA accessibility and high-contrast readability."
            />

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {/* Primary Navy */}
              <div className="bg-white p-4 rounded-xl border border-surface-border shadow-xs space-y-3">
                <div className="h-16 rounded-lg bg-brand-navy border border-slate-200" />
                <div>
                  <span className="text-xs font-bold text-brand-navy block">Primary Navy</span>
                  <span className="text-[11px] font-mono text-slate-500">#172A73</span>
                  <span className="text-[10px] text-emerald-600 font-semibold block mt-1">AAA Compliant (11.2:1)</span>
                </div>
              </div>

              {/* Nanyang Red */}
              <div className="bg-white p-4 rounded-xl border border-surface-border shadow-xs space-y-3">
                <div className="h-16 rounded-lg bg-brand-red border border-slate-200" />
                <div>
                  <span className="text-xs font-bold text-brand-navy block">Nanyang Red</span>
                  <span className="text-[11px] font-mono text-slate-500">#D71920</span>
                  <span className="text-[10px] text-emerald-600 font-semibold block mt-1">AA CTA Contrast</span>
                </div>
              </div>

              {/* Globe Sky Blue */}
              <div className="bg-white p-4 rounded-xl border border-surface-border shadow-xs space-y-3">
                <div className="h-16 rounded-lg bg-brand-blue border border-slate-200" />
                <div>
                  <span className="text-xs font-bold text-brand-navy block">Globe Sky Blue</span>
                  <span className="text-[11px] font-mono text-slate-500">#1FA7D6</span>
                  <span className="text-[10px] text-slate-500 block mt-1">Category & Arc Accent</span>
                </div>
              </div>

              {/* Warm Gold */}
              <div className="bg-white p-4 rounded-xl border border-surface-border shadow-xs space-y-3">
                <div className="h-16 rounded-lg bg-brand-gold border border-slate-200" />
                <div>
                  <span className="text-xs font-bold text-brand-navy block">Warm Gold</span>
                  <span className="text-[11px] font-mono text-slate-500">#C7A04B</span>
                  <span className="text-[10px] text-slate-500 block mt-1">Prestige Accent</span>
                </div>
              </div>

              {/* Canvas Off-White */}
              <div className="bg-white p-4 rounded-xl border border-surface-border shadow-xs space-y-3">
                <div className="h-16 rounded-lg bg-surface-canvas border border-slate-300" />
                <div>
                  <span className="text-xs font-bold text-brand-navy block">Canvas Off-White</span>
                  <span className="text-[11px] font-mono text-slate-500">#F8F9FB</span>
                  <span className="text-[10px] text-slate-500 block mt-1">Background Layer</span>
                </div>
              </div>

              {/* Ink Dark */}
              <div className="bg-white p-4 rounded-xl border border-surface-border shadow-xs space-y-3">
                <div className="h-16 rounded-lg bg-ink-primary border border-slate-200" />
                <div>
                  <span className="text-xs font-bold text-brand-navy block">High-Contrast Ink</span>
                  <span className="text-[11px] font-mono text-slate-500">#172033</span>
                  <span className="text-[10px] text-emerald-600 font-semibold block mt-1">AAA Text (14.8:1)</span>
                </div>
              </div>
            </div>
          </section>

          {/* 2. Typography Scale */}
          <section className="space-y-6">
            <SectionHeader
              eyebrow="Editorial Typography"
              eyebrowColor="red"
              title="2. Typography Hierarchy"
              description="Clean bilingual system utilizing Inter/Manrope for English and Noto Sans SC / PingFang for Chinese."
            />

            <div className="bg-white p-8 rounded-2xl border border-surface-border space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-mono text-slate-400 block mb-1">Display H1 (48px - 60px)</span>
                <div className="text-4xl sm:text-5xl font-extrabold text-brand-navy tracking-tight">
                  Create. Learn. Grow. 创造 · 学习 · 成长
                </div>
              </div>

              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-mono text-slate-400 block mb-1">Section Heading H2 (30px - 36px)</span>
                <div className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight">
                  Fine Arts & Heritage Practice 经典美术与传统传承
                </div>
              </div>

              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-mono text-slate-400 block mb-1">Card Title H3 (20px - 24px)</span>
                <div className="text-xl font-bold text-brand-navy">
                  Chinese Calligraphy 中国书法五体临摹
                </div>
              </div>

              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-mono text-slate-400 block mb-1">Body Text (16px)</span>
                <p className="text-base text-ink-secondary leading-relaxed max-w-2xl">
                  Practice on techniques of Water Colour, Gouache and Oil Painting helps students lay a solid foundation in the usage of colour.
                </p>
              </div>

              <div>
                <span className="text-xs font-mono text-slate-400 block mb-1">Bilingual Eyebrow & Microcopy (12px)</span>
                <BilingualText
                  en="Since 1998 • Singapore Heritage Standard"
                  zh="始于 1998 年 · 新加坡教学传承"
                  mode="inline"
                  enClassName="text-xs uppercase tracking-wider text-slate-600 font-bold"
                  zhClassName="text-xs text-brand-red font-semibold"
                />
              </div>
            </div>
          </section>

          {/* 3. Buttons */}
          <section className="space-y-6">
            <SectionHeader
              eyebrow="Interactive Elements"
              eyebrowColor="blue"
              title="3. Buttons & Action Hierarchy"
              description="Accessible focus states, active micro-animations, and distinct semantic variants."
            />

            <div className="bg-white p-8 rounded-2xl border border-surface-border space-y-8">
              {/* Variants */}
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-ink-muted block">
                  Button Variants (Medium Size)
                </span>
                <div className="flex flex-wrap items-center gap-4">
                  <Button variant="primary" rightIcon={<ArrowRight className="w-4 h-4" />}>
                    Primary Red CTA
                  </Button>
                  <Button variant="navy">Institutional Navy</Button>
                  <Button variant="secondary">Secondary White</Button>
                  <Button variant="outline">Outline Border</Button>
                  <Button variant="ghost">Ghost Action</Button>
                  <Button variant="gold" leftIcon={<Sparkles className="w-4 h-4" />}>
                    Prestige Gold
                  </Button>
                </div>
              </div>

              {/* Sizes */}
              <div className="space-y-3 border-t border-slate-100 pt-6">
                <span className="text-xs font-bold uppercase tracking-wider text-ink-muted block">
                  Button Sizes
                </span>
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="sm" variant="navy">Small Button (sm)</Button>
                  <Button size="md" variant="primary">Medium Button (md)</Button>
                  <Button size="lg" variant="navy">Large Hero Button (lg)</Button>
                </div>
              </div>

              {/* States */}
              <div className="space-y-3 border-t border-slate-100 pt-6">
                <span className="text-xs font-bold uppercase tracking-wider text-ink-muted block">
                  Interactive States
                </span>
                <div className="flex flex-wrap items-center gap-4">
                  <Button variant="primary" isLoading>
                    Processing
                  </Button>
                  <Button variant="navy" disabled>
                    Disabled Navy
                  </Button>
                  <Button variant="secondary" disabled>
                    Disabled Secondary
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Badges */}
          <section className="space-y-6">
            <SectionHeader
              eyebrow="Labels & Statuses"
              eyebrowColor="gold"
              title="4. Badges & Metadata Chips"
              description="Clear tags for course categories, historical marks, and content verification states."
            />

            <div className="bg-white p-8 rounded-2xl border border-surface-border space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="since" dot>
                  Since 1998
                </Badge>
                <Badge variant="red" dot>
                  Art Academy
                </Badge>
                <Badge variant="blue" dot>
                  Language Studies
                </Badge>
                <Badge variant="gold" dot>
                  Brain Intelligence
                </Badge>
                <Badge variant="navy">
                  Singapore Standard
                </Badge>
                <Badge variant="neutral">
                  Neutral Tag
                </Badge>
                <Badge variant="warning" dot icon={<AlertCircle className="w-3.5 h-3.5" />}>
                  Client-Confirmation Required
                </Badge>
              </div>

              <div className="border-t border-slate-100 pt-4 flex flex-wrap items-center gap-3">
                <BilingualBadge en="Oil Painting" zh="油画" color="red" />
                <BilingualBadge en="General English" zh="通用英语" color="blue" />
                <BilingualBadge en="Right Brain" zh="右脑潜能" color="gold" />
                <BilingualBadge en="Singapore Campus" zh="新加坡校区" color="navy" />
              </div>
            </div>
          </section>

          {/* 5. Editorial Cards */}
          <section className="space-y-6">
            <SectionHeader
              eyebrow="Editorial Layouts"
              eyebrowColor="navy"
              title="5. Cards & Content Containers"
              description="Refined top-border accents without excessive drop shadows or cartoon cards."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Default Card */}
              <Card variant="default">
                <CardHeader>
                  <Badge variant="navy" size="xs">Standard Card</Badge>
                  <h3 className="text-lg font-bold text-brand-navy mt-2">Foundational Structure</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-ink-secondary">
                    Subtle borders, clean typography, and balanced white space suited for institutional reading.
                  </p>
                </CardContent>
                <CardFooter>
                  <span className="text-xs text-ink-muted">Footer Metadata</span>
                </CardFooter>
              </Card>

              {/* Editorial Navy Card */}
              <Card variant="editorial" hoverable>
                <CardHeader>
                  <Badge variant="blue" size="xs">Editorial Style</Badge>
                  <h3 className="text-lg font-bold text-brand-navy mt-2">Institutional Pillar</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-ink-secondary">
                    Anchored with a 4px Deep Navy top border, ideal for school history and academic pathway cards.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                    Learn More
                  </Button>
                </CardFooter>
              </Card>

              {/* Featured Red Card */}
              <Card variant="featured" hoverable>
                <CardHeader>
                  <Badge variant="red" size="xs" dot>Featured Course</Badge>
                  <h3 className="text-lg font-bold text-brand-navy mt-2">Nanyang Signature</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-ink-secondary">
                    Highlighted with signature Nanyang Red for premier courses and seasonal enrollment announcements.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="primary" size="sm">
                    Enquire Now
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </section>

          {/* 6. Form Styles */}
          <section className="space-y-6">
            <SectionHeader
              eyebrow="Form Components"
              eyebrowColor="red"
              title="6. Accessible Form Controls"
              description="Clean inputs with proper focus outlines, helper texts, and error validations."
            />

            <div className="bg-white p-8 rounded-2xl border border-surface-border">
              <div className="max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormInput
                  label="Student Full Name"
                  placeholder="e.g. Rachel Lim"
                  helperText="Enter name as per identification"
                  required
                />
                <FormInput
                  label="Contact Phone"
                  placeholder="+65 9123 4567"
                  required
                />
                <FormSelect
                  label="Select Course Family"
                  options={[
                    { label: 'Art Academy Programmes', value: 'art' },
                    { label: 'Language Studies', value: 'language' },
                    { label: 'Brain Intelligence Modules', value: 'brain' },
                  ]}
                />
                <FormInput
                  label="Email (Invalid state sample)"
                  placeholder="rachel@example"
                  error="Please provide a valid email format."
                  required
                />
                <div className="sm:col-span-2">
                  <FormTextarea
                    label="Questions or Consultation Message"
                    placeholder="Provide preferred intake timing or specific course questions..."
                    optional
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 7. Breadcrumbs & Bilingual Labels */}
          <section className="space-y-6">
            <SectionHeader
              eyebrow="Navigation Aids"
              eyebrowColor="blue"
              title="7. Breadcrumbs & Bilingual Typography"
              description="Schema-compliant breadcrumbs and dual-language typography utilities."
            />

            <div className="bg-white p-8 rounded-2xl border border-surface-border space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-ink-muted uppercase tracking-wider block">
                  Accessible Breadcrumb Trail:
                </span>
                <Breadcrumb
                  items={[
                    { label: 'Art Courses', href: '/art-courses' },
                    { label: 'Oil Painting', href: '/art-courses/oil-painting' },
                    { label: 'Techniques & Syllabus' },
                  ]}
                />
              </div>

              <div className="border-t border-slate-100 pt-6 space-y-4">
                <span className="text-xs font-bold text-ink-muted uppercase tracking-wider block">
                  Bilingual Display Modes:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="p-4 rounded-xl bg-surface-canvas border border-surface-border">
                    <span className="text-[11px] text-slate-400 block mb-2 font-mono">Stacked Mode:</span>
                    <BilingualText
                      en="Chinese Painting"
                      zh="中国传统国画"
                      mode="stacked"
                    />
                  </div>
                  <div className="p-4 rounded-xl bg-surface-canvas border border-surface-border">
                    <span className="text-[11px] text-slate-400 block mb-2 font-mono">Inline Mode:</span>
                    <BilingualText
                      en="Super Memory"
                      zh="超强记忆法"
                      mode="inline"
                    />
                  </div>
                  <div className="p-4 rounded-xl bg-surface-canvas border border-surface-border">
                    <span className="text-[11px] text-slate-400 block mb-2 font-mono">Chinese-First Mode:</span>
                    <BilingualText
                      en="Right Brain Development"
                      zh="幼儿右脑潜能开发"
                      mode="chinese-first"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 8. CSS-First Micro-Animations Notice */}
          <section className="bg-brand-navy-dark text-white p-8 sm:p-10 rounded-2xl border border-slate-800 space-y-4">
            <div className="flex items-center gap-2 text-brand-gold text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>CSS-First Motion & Accessibility</span>
            </div>
            <h3 className="text-2xl font-bold">
              Restrained, Institutional Animation Principles
            </h3>
            <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
              All animations utilize hardware-accelerated CSS keyframes (`ny-animate-fade-in`, `ny-animate-slide-up`, `ny-animate-pulse`) capped between 150ms and 350ms. No distracting gaming effects. Full support for `@media (prefers-reduced-motion: reduce)` automatically neutralizes motion for users with vestibular sensitivities.
            </p>
          </section>
        </div>
      </main>
      <Footer lang="en" />
    </>
  );
}
