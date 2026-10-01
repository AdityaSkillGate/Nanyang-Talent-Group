import type { Metadata } from 'next';
import { Language } from './types';
import { artCourses } from './art-courses';
import { languageCourses, brainCourses } from './enrichment-courses';
import { newsItems } from './news';
import { eventItems } from './events';

const baseUrl = 'https://nytalent.com.sg';

export const seoMetadata = {
  home: {
    en: {
      title: 'Home | Nanyang Talent Group Pte Ltd · Since 1998',
      description:
        'Discover premier art academy, language studies, and cognitive brain intelligence enrichment programmes in Singapore. Nanyang Talent Group Pte Ltd, Established Since 1998.',
      openGraph: {
        title: 'Nanyang Talent Group Pte Ltd · Since 1998',
        description:
          'Premier Singapore art academy, language studies, and cognitive brain intelligence programmes. Established Since 1998.',
        url: baseUrl,
        siteName: 'Nanyang Talent Group Pte Ltd · Since 1998',
        locale: 'en_SG',
        type: 'website',
      },
      alternates: {
        canonical: baseUrl,
        languages: {
          'en-SG': baseUrl,
          'zh-SG': `${baseUrl}/zh`,
        },
      },
    } as Metadata,
    zh: {
      title: '首页 | 南洋人才集团 · 始于1998',
      description:
        '探索专为激发创意、促进学习与个人发展而设的新加坡美术、多语种与全脑启发课程。南洋人才集团，始于1998年。',
      openGraph: {
        title: '南洋人才集团 · 始于1998',
        description:
          '新加坡专业美术学院、多语种研习与全脑智力启发课程体系。始于1998年。',
        url: `${baseUrl}/zh`,
        siteName: '南洋人才集团 · 始于1998',
        locale: 'zh_SG',
        type: 'website',
      },
      alternates: {
        canonical: `${baseUrl}/zh`,
        languages: {
          'en-SG': baseUrl,
          'zh-SG': `${baseUrl}/zh`,
        },
      },
    } as Metadata,
  },

  about: {
    en: {
      title: 'About Us | Nanyang Talent Group | Since 1998',
      description:
        'Learn about Nanyang Talent Group Pte Ltd, our educational milestones Since 1998, core learning areas, and learning philosophy across Fine Arts, Languages, and Brain Intelligence in Singapore.',
      openGraph: {
        title: 'About Us | Nanyang Talent Group',
        description:
          'Educational journey Since 1998, verified milestones, and learning philosophy across Fine Arts, Languages, and Brain Intelligence.',
        url: `${baseUrl}/about`,
        locale: 'en_SG',
      },
      alternates: {
        canonical: `${baseUrl}/about`,
        languages: {
          'en-SG': `${baseUrl}/about`,
          'zh-SG': `${baseUrl}/zh/about`,
        },
      },
    } as Metadata,
    zh: {
      title: '关于我们 | 南洋人才集团 | 始于1998年',
      description:
        '深入了解南洋人才集团。始于1998年，深耕新加坡教育三十余载，涵盖美术造型、多语种沟通与全脑潜能启发三大核心领域。',
      openGraph: {
        title: '关于我们 | 南洋人才集团',
        description:
          '始于1998年的新加坡专业教育体系，涵盖美术创作、多语种研修与全脑智力开发。',
        url: `${baseUrl}/zh/about`,
        locale: 'zh_SG',
      },
      alternates: {
        canonical: `${baseUrl}/zh/about`,
        languages: {
          'en-SG': `${baseUrl}/about`,
          'zh-SG': `${baseUrl}/zh/about`,
        },
      },
    } as Metadata,
  },

  studentRecruitment: {
    en: {
      title: 'Student Recruitment Service | Study in Singapore | Nanyang Talent Group',
      description:
        'Official student recruitment and education agent services in Singapore: course counseling, school admissions, ICA Student Pass processing, and arrival support in partnership with Nanyang Asia College.',
      openGraph: {
        title: 'Student Recruitment Service | Study in Singapore',
        description:
          'Comprehensive education agent representation in Singapore: course counseling, admissions, ICA student pass, and arrival support.',
        url: `${baseUrl}/student-recruitment`,
        locale: 'en_SG',
        type: 'website',
      },
      alternates: {
        canonical: `${baseUrl}/student-recruitment`,
        languages: {
          'en-SG': `${baseUrl}/student-recruitment`,
          'zh-SG': `${baseUrl}/zh/student-recruitment`,
        },
      },
    } as Metadata,
    zh: {
      title: '留学服务与国际招生代表 | 新加坡求学 | 南洋人才集团',
      description:
        '南洋人才集团官方留学招生服务：院校专业咨询、申请材料递交、新加坡移民局（ICA）学生准证申报与抵星安顿，携手南洋亚洲学院等权威合作院校。',
      openGraph: {
        title: '留学服务与国际招生代表 | 南洋人才集团',
        description:
          '全方位新加坡留学服务：择校规划、入学报读、学生准证申报与行前接机住宿安排。',
        url: `${baseUrl}/zh/student-recruitment`,
        locale: 'zh_SG',
        type: 'website',
      },
      alternates: {
        canonical: `${baseUrl}/zh/student-recruitment`,
        languages: {
          'en-SG': `${baseUrl}/student-recruitment`,
          'zh-SG': `${baseUrl}/zh/student-recruitment`,
        },
      },
    } as Metadata,
  },

  artHub: {
    en: {
      title: 'Art Courses | Fine Arts Academy | Nanyang Talent Group',
      description:
        'Explore comprehensive fine arts programmes in Singapore: Oil Painting, Sketching, Water Color, Chinese Calligraphy, Chinese Painting, and Children’s Drawing.',
      openGraph: {
        title: 'Art Courses | Fine Arts Academy',
        description:
          'Structured studio arts instruction in Oil Painting, Sketching, Watercolor, Classical Chinese Calligraphy, and Traditional Ink Painting.',
        url: `${baseUrl}/art-courses`,
        locale: 'en_SG',
      },
      alternates: {
        canonical: `${baseUrl}/art-courses`,
        languages: {
          'en-SG': `${baseUrl}/art-courses`,
          'zh-SG': `${baseUrl}/zh/art-courses`,
        },
      },
    } as Metadata,
    zh: {
      title: '美术课程体系 | 美术学院 | 南洋人才集团',
      description:
        '系统研习经典油画、素描造型、水彩画、中国五体正统书法、传统国画及儿童创意美术，奠定扎实审美表现力。',
      openGraph: {
        title: '美术课程体系 | 南洋人才集团美术学院',
        description:
          '开设经典油画、素描造型、水彩晕染、传统书法五体与写意工笔国画课程。',
        url: `${baseUrl}/zh/art-courses`,
        locale: 'zh_SG',
      },
      alternates: {
        canonical: `${baseUrl}/zh/art-courses`,
        languages: {
          'en-SG': `${baseUrl}/art-courses`,
          'zh-SG': `${baseUrl}/zh/art-courses`,
        },
      },
    } as Metadata,
  },

  enrichmentHub: {
    en: {
      title: 'Enrichment Courses | Languages & Brain Intelligence | Nanyang Talent Group',
      description:
        'Discover cognitive enrichment and language study programmes in Singapore. Multilingual tracks in English, Japanese, German, Chinese, Korean, and Brain Intelligence modules.',
      openGraph: {
        title: 'Enrichment Courses | Languages & Brain Intelligence',
        description:
          'Interactive language studies and structured cognitive brain intelligence development programmes in Singapore.',
        url: `${baseUrl}/enrichment-courses`,
        locale: 'en_SG',
      },
      alternates: {
        canonical: `${baseUrl}/enrichment-courses`,
        languages: {
          'en-SG': `${baseUrl}/enrichment-courses`,
          'zh-SG': `${baseUrl}/zh/enrichment-courses`,
        },
      },
    } as Metadata,
    zh: {
      title: '潜能与语言课程 | 多语种研习与全脑启发 | 南洋人才集团',
      description:
        '探索新加坡高品质多语种研习与全脑智力启发课程。涵盖英语、日语、德语、华语、韩语及右脑开发、思维导图、超强记忆力模块。',
      openGraph: {
        title: '潜能与语言课程 | 多语种研习与全脑启发',
        description:
          '开设5大多语种互动课程与6大全脑智力开发模块，全面激发学员认知潜能。',
        url: `${baseUrl}/zh/enrichment-courses`,
        locale: 'zh_SG',
      },
      alternates: {
        canonical: `${baseUrl}/zh/enrichment-courses`,
        languages: {
          'en-SG': `${baseUrl}/enrichment-courses`,
          'zh-SG': `${baseUrl}/zh/enrichment-courses`,
        },
      },
    } as Metadata,
  },

  newsEvents: {
    en: {
      title: 'News & Events | Official Notices | Nanyang Talent Group',
      description:
        'Official announcements, upcoming masterclasses, seasonal workshops, and student exhibition notices from Nanyang Talent Group Pte Ltd.',
      openGraph: {
        title: 'News & Events | Nanyang Talent Group',
        description: 'Official academic announcements and intake updates.',
        url: `${baseUrl}/news-events`,
        locale: 'en_SG',
      },
      alternates: {
        canonical: `${baseUrl}/news-events`,
        languages: {
          'en-SG': `${baseUrl}/news-events`,
          'zh-SG': `${baseUrl}/zh/news-events`,
        },
      },
    } as Metadata,
    zh: {
      title: '最新动态与活动 | 官方公告 | 南洋人才集团',
      description:
        '查阅南洋人才集团官方公告、开班动态、假期大师班以及学员艺术展讯等最新资讯。',
      openGraph: {
        title: '最新动态与活动 | 南洋人才集团',
        description: '官方开班排期与学术动态通知。',
        url: `${baseUrl}/zh/news-events`,
        locale: 'zh_SG',
      },
      alternates: {
        canonical: `${baseUrl}/zh/news-events`,
        languages: {
          'en-SG': `${baseUrl}/news-events`,
          'zh-SG': `${baseUrl}/zh/news-events`,
        },
      },
    } as Metadata,
  },

  contact: {
    en: {
      title: 'Contact Us | Admissions & Inquiries | Nanyang Talent Group',
      description:
        'Get in touch with Nanyang Talent Group Pte Ltd. Enquire about our fine arts, language immersion, and brain intelligence programmes via WhatsApp or direct email.',
      openGraph: {
        title: 'Contact Us | Admissions & Inquiries',
        description:
          'Contact our Singapore admissions team for course advice and enrolment.',
        url: `${baseUrl}/contact`,
        locale: 'en_SG',
      },
      alternates: {
        canonical: `${baseUrl}/contact`,
        languages: {
          'en-SG': `${baseUrl}/contact`,
          'zh-SG': `${baseUrl}/zh/contact`,
        },
      },
    } as Metadata,
    zh: {
      title: '联系我们 | 课程咨询与报读 | 南洋人才集团',
      description:
        '联系南洋人才集团课程顾问。通过 WhatsApp 或在线留言咨询美术、多语种或全脑启发课程排期与入学事宜。',
      openGraph: {
        title: '联系我们 | 课程咨询与报读 | 南洋人才集团',
        description: '欢迎联系新加坡招生团队，获取最新开班排期与学费方案。',
        url: `${baseUrl}/zh/contact`,
        locale: 'zh_SG',
      },
      alternates: {
        canonical: `${baseUrl}/zh/contact`,
        languages: {
          'en-SG': `${baseUrl}/contact`,
          'zh-SG': `${baseUrl}/zh/contact`,
        },
      },
    } as Metadata,
  },

  designSystem: {
    en: {
      title: 'Design System & Brand Tokens | Nanyang Talent Group',
      description:
        'Official institutional design system, brand tokens, typography, and interactive components for Nanyang Talent Group Pte Ltd.',
    } as Metadata,
    zh: {
      title: '设计规范与品牌规范体系 | 南洋人才集团',
      description:
        '南洋人才集团官方新加坡专业教育设计规范、色彩系统、字体层次与组件库展示。',
    } as Metadata,
  },
};

export function getArtCourseMetadata(slug: string, lang: Language): Metadata {
  const course = artCourses.find((c) => c.slug === slug);
  if (!course) {
    return {
      title: lang === 'zh' ? '课程详情 | 美术学院' : 'Course Details | Art Academy',
    };
  }

  const enTitle = `${course.title.en} | Art Courses | Nanyang Talent Group`;
  const zhTitle = `${course.title.zh} | 美术课程 | 南洋人才集团`;
  const enDesc = course.summary.en;
  const zhDesc = course.summary.zh;

  const enUrl = `${baseUrl}/art-courses/${slug}`;
  const zhUrl = `${baseUrl}/zh/art-courses/${slug}`;

  return {
    title: lang === 'zh' ? zhTitle : enTitle,
    description: lang === 'zh' ? zhDesc : enDesc,
    openGraph: {
      title: lang === 'zh' ? zhTitle : enTitle,
      description: lang === 'zh' ? zhDesc : enDesc,
      url: lang === 'zh' ? zhUrl : enUrl,
      locale: lang === 'zh' ? 'zh_SG' : 'en_SG',
    },
    alternates: {
      canonical: lang === 'zh' ? zhUrl : enUrl,
      languages: {
        'en-SG': enUrl,
        'zh-SG': zhUrl,
      },
    },
  };
}

export function getLanguageCourseMetadata(slug: string, lang: Language): Metadata {
  const course = languageCourses.find((c) => c.slug === slug);
  if (!course) {
    return {
      title: lang === 'zh' ? '课程详情 | 语言研习' : 'Course Details | Language Studies',
    };
  }

  const enTitle = `${course.title.en} | Language Courses | Nanyang Talent Group`;
  const zhTitle = `${course.title.zh} | 多语种研习 | 南洋人才集团`;
  const enDesc = course.summary.en;
  const zhDesc = course.summary.zh;

  const enUrl = `${baseUrl}/enrichment-courses/language/${slug}`;
  const zhUrl = `${baseUrl}/zh/enrichment-courses/language/${slug}`;

  return {
    title: lang === 'zh' ? zhTitle : enTitle,
    description: lang === 'zh' ? zhDesc : enDesc,
    openGraph: {
      title: lang === 'zh' ? zhTitle : enTitle,
      description: lang === 'zh' ? zhDesc : enDesc,
      url: lang === 'zh' ? zhUrl : enUrl,
      locale: lang === 'zh' ? 'zh_SG' : 'en_SG',
    },
    alternates: {
      canonical: lang === 'zh' ? zhUrl : enUrl,
      languages: {
        'en-SG': enUrl,
        'zh-SG': zhUrl,
      },
    },
  };
}

export function getBrainCourseMetadata(slug: string, lang: Language): Metadata {
  const course = brainCourses.find((c) => c.slug === slug);
  if (!course) {
    return {
      title: lang === 'zh' ? '课程详情 | 全脑启发' : 'Course Details | Brain Intelligence',
    };
  }

  const enTitle = `${course.title.en} | Brain Intelligence | Nanyang Talent Group`;
  const zhTitle = `${course.title.zh} | 全脑启发 | 南洋人才集团`;
  const enDesc = course.summary.en;
  const zhDesc = course.summary.zh;

  const enUrl = `${baseUrl}/enrichment-courses/brain/${slug}`;
  const zhUrl = `${baseUrl}/zh/enrichment-courses/brain/${slug}`;

  return {
    title: lang === 'zh' ? zhTitle : enTitle,
    description: lang === 'zh' ? zhDesc : enDesc,
    openGraph: {
      title: lang === 'zh' ? zhTitle : enTitle,
      description: lang === 'zh' ? zhDesc : enDesc,
      url: lang === 'zh' ? zhUrl : enUrl,
      locale: lang === 'zh' ? 'zh_SG' : 'en_SG',
    },
    alternates: {
      canonical: lang === 'zh' ? zhUrl : enUrl,
      languages: {
        'en-SG': enUrl,
        'zh-SG': zhUrl,
      },
    },
  };
}

export function getNewsItemMetadata(slug: string, lang: Language): Metadata {
  const item = newsItems.find((n) => n.slug === slug);
  if (!item) {
    return {
      title: lang === 'zh' ? '官方通告 | 最新动态 | 南洋人才集团' : 'Official Notice | News & Events | Nanyang Talent Group',
    };
  }

  const enTitle = `${item.title} | News & Events | Nanyang Talent Group`;
  const zhTitle = `${item.chineseTitle} | 最新动态与活动 | 南洋人才集团`;
  const enDesc = item.summary;
  const zhDesc = item.chineseSummary || item.summary;

  const enUrl = `${baseUrl}/news-events/news/${slug}`;
  const zhUrl = `${baseUrl}/zh/news-events/news/${slug}`;

  return {
    title: lang === 'zh' ? zhTitle : enTitle,
    description: lang === 'zh' ? zhDesc : enDesc,
    openGraph: {
      title: lang === 'zh' ? zhTitle : enTitle,
      description: lang === 'zh' ? zhDesc : enDesc,
      url: lang === 'zh' ? zhUrl : enUrl,
      locale: lang === 'zh' ? 'zh_SG' : 'en_SG',
    },
    alternates: {
      canonical: lang === 'zh' ? zhUrl : enUrl,
      languages: {
        'en-SG': enUrl,
        'zh-SG': zhUrl,
      },
    },
  };
}

export function getEventItemMetadata(slug: string, lang: Language): Metadata {
  const item = eventItems.find((e) => e.slug === slug);
  if (!item) {
    return {
      title: lang === 'zh' ? '活动日程 | 最新动态 | 南洋人才集团' : 'Event Schedule | News & Events | Nanyang Talent Group',
    };
  }

  const enTitle = `${item.title} | Events & Masterclasses | Nanyang Talent Group`;
  const zhTitle = `${item.chineseTitle} | 活动与大师班 | 南洋人才集团`;
  const enDesc = item.summary;
  const zhDesc = item.chineseSummary || item.summary;

  const enUrl = `${baseUrl}/news-events/events/${slug}`;
  const zhUrl = `${baseUrl}/zh/news-events/events/${slug}`;

  return {
    title: lang === 'zh' ? zhTitle : enTitle,
    description: lang === 'zh' ? zhDesc : enDesc,
    openGraph: {
      title: lang === 'zh' ? zhTitle : enTitle,
      description: lang === 'zh' ? zhDesc : enDesc,
      url: lang === 'zh' ? zhUrl : enUrl,
      locale: lang === 'zh' ? 'zh_SG' : 'en_SG',
    },
    alternates: {
      canonical: lang === 'zh' ? zhUrl : enUrl,
      languages: {
        'en-SG': enUrl,
        'zh-SG': zhUrl,
      },
    },
  };
}

