'use client';

import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FAQChatbot } from '@/components/faq/FAQChatbot';
import { MobileStickyCta } from '@/components/layout/MobileStickyCta';
import { siteConfig } from '@/data/site-config';
import { uiTranslations } from '@/content/translations';
import { Language } from '@/content/types';
import { Phone, Mail, MapPin, Send, MessageCircle, Clock, ShieldAlert } from 'lucide-react';

interface ContactViewProps {
  lang: Language;
}

export const ContactView: React.FC<ContactViewProps> = ({ lang }) => {
  const t = uiTranslations.contact;
  const isZh = lang === 'zh';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState(isZh ? '油画技法' : 'Oil Painting');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = isZh
      ? `您好，南洋人才集团，%0A%0A我的姓名：${encodeURIComponent(
          name
        )}%0A邮箱：${encodeURIComponent(email)}%0A联络电话：${encodeURIComponent(
          phone
        )}%0A意向课程：${encodeURIComponent(course)}%0A留言详情：${encodeURIComponent(
          message
        )}`
      : `Hello Nanyang Talent Group,%0A%0AMy Name: ${encodeURIComponent(
          name
        )}%0AEmail: ${encodeURIComponent(email)}%0APhone: ${encodeURIComponent(
          phone
        )}%0AInterested Course: ${encodeURIComponent(
          course
        )}%0AMessage: ${encodeURIComponent(message)}`;

    window.open(`${siteConfig.contact.whatsapp}?text=${formattedMessage}`, '_blank');
  };

  const courseOptions = isZh
    ? [
        { label: '美术：经典油画技法', val: '油画技法' },
        { label: '美术：素描造型与进阶', val: '素描基础与进阶' },
        { label: '美术：水彩通透艺术', val: '水彩画' },
        { label: '美术：中国书法五体临摹', val: '中国书法' },
        { label: '美术：传统写意与工笔国画', val: '中国国画' },
        { label: '美术：儿童创意画启蒙', val: '儿童创意美术' },
        { label: '语言：通用英语阶梯体系 (1-6级)', val: '通用英语' },
        { label: '语言：实用情境日语会话', val: '日语研习' },
        { label: '语言：基础德语研习', val: '德语课程' },
        { label: '语言：规范华语听说读写', val: '规范华语' },
        { label: '语言：韩语实用情境会话', val: '实用韩语' },
        { label: '全脑：幼儿右脑潜能启蒙', val: '右脑潜能开发' },
        { label: '全脑：超强右脑舒尔特方格注意力', val: '超强右脑' },
        { label: '全脑：博赞放射性思维导图', val: '思维导图' },
        { label: '全脑：超强图像联想记忆法', val: '超强记忆力' },
        { label: '全脑：全脑启发集训', val: '全脑潜能' },
        { label: '全脑：量子波动速读专注训练', val: '量子波动速读' },
      ]
    : [
        { label: 'Art: Classical Oil Painting', val: 'Oil Painting' },
        { label: 'Art: Foundational & Advanced Sketching', val: 'Sketching' },
        { label: 'Art: Water Color Techniques', val: 'Water Color' },
        { label: 'Art: Chinese Calligraphy (5 Scripts)', val: 'Chinese Calligraphy' },
        { label: 'Art: Traditional Chinese Painting', val: 'Chinese Painting' },
        { label: 'Art: Children’s Intellectual Drawing', val: 'Childrens Drawing' },
        { label: 'Language: General English (Levels 1-6)', val: 'English Course' },
        { label: 'Language: Conversational Japanese', val: 'Japanese Course' },
        { label: 'Language: Foundational German', val: 'German Course' },
        { label: 'Language: Standard Chinese (Mandarin)', val: 'Chinese Course' },
        { label: 'Language: Conversational Korean', val: 'Korean Course' },
        { label: 'Brain: Right Brain Development', val: 'Right Brain Development' },
        { label: 'Brain: Super Right Brain (Schulte Grid)', val: 'Super Right Brain' },
        { label: 'Brain: Buzan Mind Mapping', val: 'Mind Mapping' },
        { label: 'Brain: Super Memory Retention', val: 'Super Memory' },
        { label: 'Brain: Whole Brain Development', val: 'Whole Brain Development' },
        { label: 'Brain: Quantum Speed Reading Habit', val: 'Quantum Speed Reading' },
      ];

  return (
    <>
      <Header lang={lang} />
      <main className="flex-1 py-12 sm:py-16 bg-surface-canvas pb-20 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="bg-white rounded-2xl border border-surface-border p-8 sm:p-10 shadow-sm space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-brand-red text-xs font-bold uppercase tracking-wider">
              <MessageCircle className="w-3.5 h-3.5" />
              <span>{isZh ? '课程咨询与报名' : 'Admissions & Inquiries'}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight">
              {t.title[lang]}
            </h1>
            <p className="text-base sm:text-lg text-ink-secondary max-w-3xl leading-relaxed">
              {t.subtitle[lang]}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Contact Information & Channels */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-2xl border border-surface-border p-8 shadow-subtle space-y-6">
                <h3 className="text-xl font-bold text-brand-navy">
                  {t.directInquiries[lang]}
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-red-50 text-brand-red flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wide block">
                        {t.whatsappAdmissions[lang]}
                      </span>
                      <a
                        href={siteConfig.contact.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-semibold text-brand-navy hover:text-brand-red transition-colors"
                      >
                        {siteConfig.contact.whatsappLabel}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 text-brand-blue flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wide block">
                        {t.officialEmail[lang]}
                      </span>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-base font-semibold text-brand-navy hover:text-brand-blue transition-colors"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-brand-gold flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wide block">
                        {t.locationTitle[lang]}
                      </span>
                      <span className="text-sm font-medium text-brand-navy block">
                        {t.singaporeLocation[lang]}
                      </span>
                      <span className="text-xs text-ink-muted">
                        {t.locationPending[lang]}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-ink-muted">
                  <div className="flex items-center gap-2 text-brand-navy font-semibold">
                    <Clock className="w-4 h-4 text-brand-gold" />
                    <span>{t.hoursTitle[lang]}</span>
                  </div>
                  <p>{t.hoursValue[lang]}</p>
                  <p>{isZh ? '周日与公共假期：预约接待' : 'Sunday & Public Holidays: By appointment'}</p>
                </div>

                <div className="pt-2">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5 text-xs text-ink-muted leading-relaxed">
                    <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>{siteConfig.contact.notice[lang]}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Static Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl border border-surface-border p-8 shadow-card space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-brand-navy">
                    {t.formTitle[lang]}
                  </h3>
                  <p className="text-sm text-ink-secondary mt-1">
                    {isZh
                      ? '填写咨询信息，我们将为您提供针对性适龄课程规划、试听预约与最新收费细则。'
                      : 'Send us your details to receive current timetable schedules, trial evaluations, and course brochures.'}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="contact-name" className="text-xs font-semibold text-slate-700 block">
                        {t.nameLabel[lang]} *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={isZh ? '例如：张建国' : 'e.g. John Tan'}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy"
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="contact-phone" className="text-xs font-semibold text-slate-700 block">
                        {t.phoneLabel[lang]} *
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+65 9123 4567"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="contact-email" className="text-xs font-semibold text-slate-700 block">
                        {t.emailLabel[lang]}
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john.tan@example.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy"
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="contact-course" className="text-xs font-semibold text-slate-700 block">
                        {t.courseLabel[lang]}
                      </label>
                      <select
                        id="contact-course"
                        name="course"
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy bg-white"
                      >
                        {courseOptions.map((opt) => (
                          <option key={opt.val} value={opt.val}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="contact-message" className="text-xs font-semibold text-slate-700 block">
                      {t.messageLabel[lang]}
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={
                        isZh
                          ? '请简要说明学员年龄、期望上课时段或具体咨询疑问...'
                          : 'Please share any preferred class timings, student age, or specific inquiries...'
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-base font-semibold text-white bg-brand-red hover:bg-brand-red-hover transition-colors shadow-md"
                    >
                      <Send className="w-4 h-4" />
                      <span>{t.submitButton[lang]}</span>
                    </button>
                    <p className="text-[11px] text-ink-muted text-center mt-2">
                      {t.clientNote[lang]}
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer lang={lang} />
      <MobileStickyCta lang={lang} />
      <FAQChatbot lang={lang} />
    </>
  );
};
