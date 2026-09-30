import { NavigationItem, SiteStatistic } from '../content/types';

export const siteConfig = {
  name: {
    en: 'Nanyang Talent Group Pte Ltd',
    zh: '南洋人才集团',
  },
  shortName: {
    en: 'Nanyang Talent Group',
    zh: '南洋人才',
  },
  tagline: {
    en: 'Create. Learn. Grow.',
    zh: '创造 · 学习 · 成长',
  },
  sinceYear: '1998',
  url: 'https://nytalent.com.sg',
  contact: {
    email: 'info@nytalent.com.sg',
    phone: '+65 6789 0123',
    whatsapp: 'https://wa.me/6567890123',
    whatsappLabel: '+65 6789 0123',
    address: {
      en: 'Singapore (Exact campus address pending client confirmation)',
      zh: '新加坡（具体校区地址待客户最终确认）',
    },
    hours: {
      en: 'Monday – Saturday: 9:00 AM – 6:00 PM',
      zh: '周一至周六：上午 9:00 – 下午 6:00',
    },
    status: 'client-confirm' as const,
    notice: {
      en: 'Campus address and official contact details are subject to final client confirmation.',
      zh: '校区具体地址及官方联系方式待客户最终核准确认。',
    },
  },
  stats: [
    {
      value: '15+',
      label: {
        en: 'Years of Expert Instructors',
        zh: '年资深导师教研背景',
      },
      status: 'client-provided',
    },
    {
      value: '26,500+',
      label: {
        en: 'Students Enrolled',
        zh: '累计学员就读',
      },
      status: 'client-provided',
    },
    {
      value: '11+',
      label: {
        en: 'Countries Represented',
        zh: '学员覆盖国家与地区',
      },
      status: 'client-provided',
    },
    {
      value: '33+',
      label: {
        en: 'Years of School Experience',
        zh: '载办学与教学经验',
      },
      status: 'client-provided',
    },
  ] as SiteStatistic[],
  navItems: [
    {
      key: 'home',
      label: { en: 'Home', zh: '首页' },
      href: { en: '/', zh: '/zh' },
    },
    {
      key: 'about',
      label: { en: 'About', zh: '关于我们' },
      href: { en: '/about', zh: '/zh/about' },
    },
    {
      key: 'art',
      label: { en: 'Art Courses', zh: '美术课程' },
      href: { en: '/art-courses', zh: '/zh/art-courses' },
    },
    {
      key: 'enrichment',
      label: { en: 'Enrichment Courses', zh: '潜能与语言' },
      href: { en: '/enrichment-courses', zh: '/zh/enrichment-courses' },
    },
    {
      key: 'news',
      label: { en: 'News & Events', zh: '动态与活动' },
      href: { en: '/news-events', zh: '/zh/news-events' },
    },
    {
      key: 'contact',
      label: { en: 'Contact', zh: '联系我们' },
      href: { en: '/contact', zh: '/zh/contact' },
    },
  ] as NavigationItem[],
};
