import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CourseDetail, Language } from '@/content/types';
import { siteConfig } from '@/data/site-config';
import { Breadcrumb, Badge, Button } from '@/components/ui';
import {
  Clock,
  CheckCircle2,
  AlertCircle,
  Phone,
  ArrowRight,
  GraduationCap,
  Sparkles,
  Layers,
  ShieldAlert,
  Wallet,
  Paintbrush,
  Calendar,
  MessageCircle,
  Users,
  Info,
} from 'lucide-react';
import { BilingualBadge } from '@/components/ui/BilingualLabel';

interface CourseDetailViewProps {
  course: CourseDetail;
  lang: Language;
  relatedCourses?: CourseDetail[];
}

export const CourseDetailView: React.FC<CourseDetailViewProps> = ({
  course,
  lang,
  relatedCourses = [],
}) => {
  const isZh = lang === 'zh';
  const prefix = isZh ? '/zh' : '';

  const backUrl =
    course.category === 'art'
      ? `${prefix}/art-courses`
      : `${prefix}/enrichment-courses`;

  const categoryName =
    course.category === 'art'
      ? isZh
        ? '美术课程'
        : 'Art Courses'
      : course.category === 'language'
      ? isZh
        ? '多语种研习'
        : 'Language Courses'
      : isZh
      ? '全脑启发'
      : 'Brain Intelligence';

  const isPendingCourse = course.slug === 'short-course-art-teacher';

  return (
    <div className="py-10 sm:py-16 bg-surface-canvas min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* ========================================================= */}
        {/* 1. HERO                                                  */}
        {/* ========================================================= */}
        <div className="space-y-6">
          <Breadcrumb
            homeHref={prefix || '/'}
            items={[
              { label: categoryName, href: backUrl },
              { label: course.title[lang] },
            ]}
          />

          <div className="bg-white rounded-2xl border border-surface-border p-6 sm:p-10 shadow-card space-y-6">
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge
                variant={
                  course.category === 'art'
                    ? 'red'
                    : course.category === 'language'
                    ? 'blue'
                    : 'gold'
                }
                size="sm"
                dot
              >
                {categoryName}
              </Badge>
              {course.duration && (
                <span className="text-xs font-semibold text-ink-muted flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200">
                  <Clock className="w-3.5 h-3.5 text-brand-navy" />
                  <span>{course.duration[lang]}</span>
                </span>
              )}
              {course.ageGroup && (
                <Badge variant="neutral" size="sm">
                  {course.ageGroup[lang]}
                </Badge>
              )}
              {isPendingCourse && (
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                  <span>
                    {isZh ? '课程信息待客户核准' : 'Pending Client Confirmation'}
                  </span>
                </span>
              )}
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight">
                {course.title[lang]}
              </h1>
              {course.subtitle && (
                <p className="text-lg sm:text-xl font-semibold text-brand-blue">
                  {course.subtitle[lang]}
                </p>
              )}
            </div>

            {/* Micro Quick Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#enquiry-cta"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 min-h-[44px] rounded-lg text-sm font-bold text-white bg-brand-red hover:bg-brand-red-hover transition-colors shadow-xs"
              >
                <span>{isZh ? '咨询该课程' : 'Enquire for Course'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 min-h-[44px] rounded-lg text-sm font-semibold text-emerald-950 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-800" />
                <span>{isZh ? 'WhatsApp 咨询' : 'WhatsApp Admissions'}</span>
              </a>
            </div>
          </div>

          {/* Course Hero Visual Banner */}
          {course.image && (
            <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-2xl overflow-hidden shadow-card border border-surface-border bg-slate-100">
              <Image
                src={course.image}
                alt={course.title[lang]}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
              />
            </div>
          )}
        </div>

        {/* ========================================================= */}
        {/* 2. SHORT INTRODUCTION                                    */}
        {/* ========================================================= */}
        <section className="bg-white rounded-2xl border border-surface-border p-8 sm:p-10 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-brand-gold">
            <Info className="w-4 h-4" />
            <span>{isZh ? '课程概况与导言' : 'Course Overview'}</span>
          </div>
          <h2 className="text-2xl font-extrabold text-brand-navy">
            {isZh ? '专业研习体系与特色' : 'Rigorous Studio Training & Methodology'}
          </h2>
          <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
            {course.summary[lang]}
          </p>

          {/* Pending confirmation notice for Short Course Art Teacher */}
          {course.slug === 'short-course-art-teacher' && (
            <div className="mt-4 p-5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 space-y-1.5">
              <div className="flex items-center gap-2 font-bold text-sm">
                <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
                <span>
                  {isZh
                    ? '师资进修班大纲待客户最终确认'
                    : 'Art Teacher Programme Pending Client Confirmation'}
                </span>
              </div>
              <p className="text-xs text-amber-800 leading-relaxed">
                {isZh
                  ? '该师资进修专修模块具体学制课时、官方结业证书要求及最新招生排期待管理方核准更新。欢迎通过下方通道登记咨询意向。'
                  : 'Detailed certification pathways, contact hours, and intake schedules for the Art Teacher module are subject to final client approval. Please submit an enquiry to receive updates.'}
              </p>
            </div>
          )}
        </section>

        {/* ========================================================= */}
        {/* 3. WHAT YOU LEARN                                        */}
        {/* ========================================================= */}
        <section className="bg-white rounded-2xl border border-surface-border p-8 sm:p-10 shadow-xs space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-brand-red">
              <Layers className="w-4 h-4" />
              <span>{isZh ? '课程大纲与教学要点' : 'Curriculum Highlights'}</span>
            </div>
            <h2 className="text-2xl font-extrabold text-brand-navy">
              {isZh ? '核心研修技法与知识掌握' : 'What You Will Learn'}
            </h2>
          </div>

          {/* Techniques Grid */}
          {course.techniques && course.techniques.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {course.techniques.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-xl bg-surface-canvas border border-surface-border flex items-start gap-3 hover:border-slate-300 transition-colors"
                >
                  <Sparkles className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <span className="text-sm font-bold text-brand-navy block">
                      {item[lang]}
                    </span>
                    <span className="text-xs text-ink-muted">
                      {isZh
                        ? '阶段阶梯递进训练与技法实操'
                        : 'Systematic progressive practical mastery'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Syllabus Outline if available */}
          {course.syllabusOutline && course.syllabusOutline.length > 0 && (
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
                {isZh ? '详细教学单元与进阶大纲' : 'Structured Learning Modules'}
              </h3>
              <ul className="space-y-2.5">
                {course.syllabusOutline.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-ink-secondary"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item[lang]}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* ========================================================= */}
        {/* 4. COURSE DETAILS                                        */}
        {/* ========================================================= */}
        <section className="bg-white rounded-2xl border border-surface-border p-8 sm:p-10 shadow-xs space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-brand-navy">
              <GraduationCap className="w-4 h-4" />
              <span>{isZh ? '课程设置与学制规范' : 'Course Details & Structure'}</span>
            </div>
            <h2 className="text-2xl font-extrabold text-brand-navy">
              {isZh ? '课时安排与班型规范' : 'Class Format & Scheduling'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Session Duration */}
            <div className="p-5 rounded-xl bg-surface-canvas border border-surface-border space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-semibold text-ink-muted">
                <Clock className="w-4 h-4 text-brand-navy" />
                <span>{isZh ? '单次课时时长' : 'Session Duration'}</span>
              </div>
              <div className="text-base font-bold text-brand-navy">
                {course.duration ? course.duration[lang] : isZh ? '待确认' : 'Pending Info'}
              </div>
            </div>

            {/* Class Format */}
            <div className="p-5 rounded-xl bg-surface-canvas border border-surface-border space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-semibold text-ink-muted">
                <Users className="w-4 h-4 text-brand-blue" />
                <span>{isZh ? '授课班型设置' : 'Class Formats'}</span>
              </div>
              <div className="text-base font-bold text-brand-navy">
                {isZh ? '小组班 / 一对一辅导' : 'Small Group & 1-to-1'}
              </div>
            </div>

            {/* Target Age Group (only if provided in source!) */}
            {course.ageGroup ? (
              <div className="p-5 rounded-xl bg-surface-canvas border border-surface-border space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-ink-muted">
                  <GraduationCap className="w-4 h-4 text-brand-gold" />
                  <span>{isZh ? '适合年龄段' : 'Age Group'}</span>
                </div>
                <div className="text-base font-bold text-brand-navy">
                  {course.ageGroup[lang]}
                </div>
              </div>
            ) : (
              <div className="p-5 rounded-xl bg-surface-canvas border border-surface-border space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-ink-muted">
                  <Calendar className="w-4 h-4 text-brand-gold" />
                  <span>{isZh ? '开班周期' : 'Intake Cycle'}</span>
                </div>
                <div className="text-base font-bold text-brand-navy">
                  {isZh ? '常年滚动开班' : 'Rolling Intake'}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ========================================================= */}
        {/* ========================================================= */}
        {/* 5. TUITION & ENROLMENT CONSULTATION                      */}
        {/* ========================================================= */}
        <section className="bg-white rounded-2xl border border-surface-border p-8 sm:p-10 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-brand-gold">
                <Wallet className="w-4 h-4" />
                <span>{isZh ? '学费标准与咨询通道' : 'Tuition & Enrollment'}</span>
              </div>
              <h2 className="text-2xl font-extrabold text-brand-navy">
                {isZh ? '课时规划与学费咨询' : 'Tuition Consultation & Class Formats'}
              </h2>
            </div>
            <BilingualBadge
              en="Admissions Consultation"
              zh="顾问定制安排"
              color="navy"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Small Group Cohort */}
            <div className="p-6 rounded-xl bg-surface-canvas border border-surface-border space-y-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 block">
                {isZh ? '精品小班互动授课' : 'Small Group Cohort'}
              </span>
              <div className="text-xl sm:text-2xl font-extrabold text-brand-navy">
                {isZh ? '小班精讲 · 互动研习' : 'Interactive Studio Groups'}
              </div>
              <p className="text-xs text-ink-muted leading-relaxed">
                {isZh ? '每课时2小时，兼顾同侪交流与专业导师细致辅导，循序渐进夯实专业功底。' : '2 Hours per session with high mentor attention and peer learning dynamics.'}
              </p>
            </div>

            {/* Private 1-to-1 */}
            <div className="p-6 rounded-xl bg-surface-canvas border border-surface-border space-y-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 block">
                {isZh ? '一对一定制私教' : 'Private 1-to-1 Tuition'}
              </span>
              <div className="text-xl sm:text-2xl font-extrabold text-brand-navy">
                {isZh ? '量身定制 · 专属课表' : 'Tailored Pacing & Mentorship'}
              </div>
              <p className="text-xs text-ink-muted leading-relaxed">
                {isZh ? '根据学员基础、升学目标或特定研习偏好量身定制教学进度与针对性技法突破。' : 'Custom syllabus and flexible pacing aligned with student level and goals.'}
              </p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="font-semibold text-brand-navy text-sm block">
                {course.fees.displayFallback[lang]}
              </span>
              <p className="text-xs text-ink-muted">
                {isZh
                  ? '欢迎联络招生处获取最新招生排期、学期套餐与适龄测评安排。'
                  : 'Contact our admissions team for current intake availability, term schedules, and trial placement.'}
              </p>
            </div>
            <a
              href={siteConfig.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 transition-colors shrink-0 min-h-[40px]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{isZh ? '咨询学费与排期' : 'Inquire on WhatsApp'}</span>
            </a>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 6. MATERIALS                                             */}
        {/* ========================================================= */}
        <section className="bg-white rounded-2xl border border-surface-border p-8 sm:p-10 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-brand-red">
            <Paintbrush className="w-4 h-4" />
            <span>{isZh ? '教学画材与用具' : 'Learning Materials & Equipment'}</span>
          </div>
          <h2 className="text-2xl font-extrabold text-brand-navy">
            {isZh ? '用具准备与耗材要求' : 'Materials & Supplies'}
          </h2>

          {course.fees.materialsFee ? (
            <div className="p-5 rounded-xl bg-surface-canvas border border-surface-border space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-brand-navy text-sm">
                  {course.fees.materialsFee[lang]}
                </span>
                <span className="text-xs text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {isZh ? '规范指引' : 'Standard'}
                </span>
              </div>
              <p className="text-xs text-ink-secondary leading-relaxed">
                {isZh
                  ? '初学者开课前可咨询导师推荐专业画具品牌及规格；专业油画、国画及书法课程学员可由机构统一协调或自主按清单准备。'
                  : 'Instructors guide students on proper material selection during the first lesson. Premium pigments and specialized brushes can be procured individually or via admissions consultation.'}
              </p>
            </div>
          ) : (
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-800">
              {isZh
                ? '该课程专业教具与画材清单待确认。'
                : 'Specific materials list for this course is pending client confirmation.'}
            </div>
          )}
        </section>

        {/* ========================================================= */}
        {/* 8. ENQUIRY CTA                                           */}
        {/* ========================================================= */}
        <section
          id="enquiry-cta"
          className="relative overflow-hidden bg-gradient-to-br from-brand-navy-dark via-brand-navy to-brand-navy-deep text-white rounded-2xl p-8 sm:p-12 shadow-card space-y-6"
        >
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-gold text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isZh ? '课程报名与试听预约' : 'Admissions Consultation'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              {isZh
                ? `开启 ${course.title.zh} 研习之旅`
                : `Enquire About ${course.title.en}`}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {isZh
                ? '欢迎联络我们的课程顾问，了解当前最新的开班时间表、试听评估及适合学员的梯度课程规划。'
                : 'Connect with our admissions team to explore current intake schedules, trial assessments, and tailored course placement.'}
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href={`${prefix}/contact?course=${course.slug}`}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-brand-red hover:bg-brand-red-hover transition-all shadow-md"
            >
              <span>{isZh ? '在线提交课程咨询' : 'Submit Course Enquiry'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={siteConfig.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4 text-emerald-950" />
              <span>{isZh ? 'WhatsApp 顾问直连' : 'WhatsApp Admissions'}</span>
            </a>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-slate-300">
            <span>✓ {isZh ? '免费课程规划咨询' : 'Personalized consultation'}</span>
            <span>✓ {isZh ? '小班精细化指导' : 'Small-group attention'}</span>
            <span>✓ {isZh ? '自备或统一画材指引' : 'Transparent supply guidance'}</span>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 9. RELATED COURSES                                       */}
        {/* ========================================================= */}
        {relatedCourses && relatedCourses.length > 0 && (
          <section className="space-y-6 pt-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-brand-gold block">
                  {isZh ? '艺术学科联动' : 'Curriculum Pathways'}
                </span>
                <h2 className="text-2xl font-extrabold text-brand-navy">
                  {isZh ? '其他相关美术课程' : 'Related Art Courses'}
                </h2>
              </div>
              <Link
                href={backUrl}
                className="text-xs font-bold text-brand-navy hover:text-brand-red flex items-center gap-1 transition-colors"
              >
                <span>{isZh ? '查看全部美术课程' : 'View all art courses'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedCourses.map((rel) => {
                let relUrl = `${prefix}/art-courses/${rel.slug}`;
                if (rel.category === 'language') {
                  relUrl = `${prefix}/enrichment-courses/language/${rel.slug}`;
                } else if (rel.category === 'brain') {
                  relUrl = `${prefix}/enrichment-courses/brain/${rel.slug}`;
                }

                return (
                  <div
                    key={rel.slug}
                    className="bg-white rounded-xl border border-surface-border p-6 shadow-subtle hover:shadow-card transition-all flex flex-col justify-between group"
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-semibold text-brand-red uppercase tracking-wider">
                          {isZh ? '美术课程' : 'Art Course'}
                        </span>
                        {rel.duration && (
                          <span className="text-[11px] text-ink-muted">
                            {rel.duration[lang]}
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-brand-navy group-hover:text-brand-red transition-colors">
                        {rel.title[lang]}
                      </h3>
                      {rel.subtitle && (
                        <p className="text-xs text-brand-blue font-medium line-clamp-1">
                          {rel.subtitle[lang]}
                        </p>
                      )}
                      <p className="text-xs text-ink-secondary line-clamp-2 leading-relaxed">
                        {rel.summary[lang]}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-700">
                        {rel.fees.groupFee
                          ? rel.fees.groupFee[lang].split('[')[0].trim()
                          : isZh
                          ? '学费详询'
                          : 'Tuition on enquiry'}
                      </span>
                      <Link
                        href={relUrl}
                        className="inline-flex items-center gap-1 text-xs font-bold text-brand-navy group-hover:text-brand-red transition-colors"
                      >
                        <span>{isZh ? '详情' : 'Explore'}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
