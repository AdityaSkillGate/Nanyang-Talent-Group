import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Home, BookOpen, Phone } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-surface-canvas flex flex-col justify-between">
      {/* Micro Top Header */}
      <header className="bg-white border-b border-surface-border py-4 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="relative h-12 w-56">
            <Image
              src="/assets/logo-horizontal.png"
              alt="Nanyang Talent Group"
              fill
              priority
              sizes="224px"
              className="object-contain object-left"
            />
          </Link>
          <Link
            href="/"
            className="text-xs font-semibold text-brand-navy hover:text-brand-red flex items-center gap-1.5"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return Home</span>
          </Link>
        </div>
      </header>

      {/* Main 404 Visual Content */}
      <main className="flex-1 flex items-center justify-center p-6 sm:p-12">
        <div className="max-w-xl w-full bg-white rounded-3xl border border-surface-border p-8 sm:p-12 shadow-card text-center space-y-6">
          <div className="space-y-2">
            <span className="text-5xl sm:text-6xl font-extrabold text-brand-red font-mono tracking-tight">
              404
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
              Page Not Found • 页面未找到
            </h1>
            <p className="text-sm text-ink-secondary leading-relaxed max-w-md mx-auto pt-2">
              The page you requested could not be located in our course guide directory. Please navigate back to our academic pathways.
            </p>
            <p className="text-xs text-ink-muted font-chinese">
              您访问的页面不存在或已被移动。请通过下方快捷导航返回南洋人才集团课程主页。
            </p>
          </div>

          {/* Recovery Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 text-left">
            <Link
              href="/"
              className="p-3.5 rounded-xl border border-slate-200 hover:border-brand-navy hover:bg-slate-50 transition-colors flex items-center gap-3 group"
            >
              <div className="w-8 h-8 rounded-lg bg-navy-50 flex items-center justify-center text-brand-navy shrink-0">
                <Home className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-brand-navy block group-hover:text-brand-red">
                  Home • 集团首页
                </span>
                <span className="text-[11px] text-ink-muted">Overview & pathways</span>
              </div>
            </Link>

            <Link
              href="/art-courses"
              className="p-3.5 rounded-xl border border-slate-200 hover:border-brand-red hover:bg-red-50/50 transition-colors flex items-center gap-3 group"
            >
              <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-brand-red shrink-0">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-brand-navy block group-hover:text-brand-red">
                  Art Courses • 美术学院
                </span>
                <span className="text-[11px] text-ink-muted">7 fine art disciplines</span>
              </div>
            </Link>

            <Link
              href="/enrichment-courses"
              className="p-3.5 rounded-xl border border-slate-200 hover:border-brand-blue hover:bg-sky-50/50 transition-colors flex items-center gap-3 group"
            >
              <div className="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center text-brand-blue shrink-0">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-brand-navy block group-hover:text-brand-blue">
                  Enrichment • 强化课程
                </span>
                <span className="text-[11px] text-ink-muted">Languages & Brain intel</span>
              </div>
            </Link>

            <Link
              href="/contact"
              className="p-3.5 rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/50 transition-colors flex items-center gap-3 group"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-brand-navy block group-hover:text-emerald-700">
                  Contact • 咨询热线
                </span>
                <span className="text-[11px] text-ink-muted">Admissions & WhatsApp</span>
              </div>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer copyright */}
      <footer className="py-4 text-center text-xs text-ink-muted border-t border-surface-border bg-white">
        © {new Date().getFullYear()} Nanyang Talent Group Pte Ltd. All rights reserved.
      </footer>
    </div>
  );
}
