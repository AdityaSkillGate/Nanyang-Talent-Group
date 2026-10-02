import { NavigationItem, SiteStatistic } from '../content/types';

export const siteConfig = {
  name: {
    en: 'Nanyang Talent Group Pte Ltd',
    zh: '南洋人才集团',
  },
  fullName: {
    en: 'Nanyang Talent Group Pte Ltd · Since 1998',
    zh: '南洋人才集团 · 始于1998',
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
    phone: '+65 6899 0828',
    officePhone: '+65 6899 0828',
    whatsapp: 'https://wa.me/6590048768',
    whatsappLabel: '+65 9004 8768',
    address: {
      en: '135 Jurong Gateway Road, #03-335, Singapore 600135',
      zh: '135 裕廊商业大道，#03-335，新加坡 600135',
    },
    hours: {
      en: 'Monday – Saturday: 9:00 AM – 6:00 PM',
      zh: '周一至周六：上午 9:00 – 下午 6:00',
    },
    status: 'verified-source' as const,
    notice: {
      en: 'Official Campus: 135 Jurong Gateway Road, #03-335, Singapore 600135. Consultations welcome by appointment.',
      zh: '官方教学中心：新加坡裕廊商业大道 135 号 #03-335。欢迎预约实地探校与课程咨询。',
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
      label: { en: 'About Us', zh: '关于我们' },
      href: { en: '/about', zh: '/zh/about' },
    },
    {
      key: 'recruitment',
      label: { en: 'Explore Service', zh: '探索服务' },
      href: { en: '/student-recruitment', zh: '/zh/student-recruitment' },
    },
    {
      key: 'courses',
      label: { en: 'Explore Course', zh: '探索课程' },
      href: { en: '/art-courses', zh: '/zh/art-courses' },
    },
    {
      key: 'news',
      label: { en: 'News & Events', zh: '资讯与活动' },
      href: { en: '/news-events', zh: '/zh/news-events' },
    },
    {
      key: 'contact',
      label: { en: 'Contact Us', zh: '联系我们' },
      href: { en: '/contact', zh: '/zh/contact' },
    },
  ] as NavigationItem[],
};
