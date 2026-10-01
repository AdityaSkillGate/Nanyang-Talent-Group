import { LocalizedString } from './types';

export interface AlliancePartner {
  id: string;
  name: LocalizedString;
  nativeName: LocalizedString;
  badge: LocalizedString;
  location: LocalizedString;
  logo: string;
  websiteUrl: string;
  description: LocalizedString;
  highlights: LocalizedString[];
  links: {
    label: LocalizedString;
    url: string;
    isExternal: boolean;
  }[];
}

export const alliancePartners: AlliancePartner[] = [
  {
    id: 'nanyang-asia-college',
    name: {
      en: 'Nanyang Asia College',
      zh: '南洋亚洲学院',
    },
    nativeName: {
      en: 'Nanyang Asia College',
      zh: '南洋亚洲学院',
    },
    badge: {
      en: 'EduTrust Certified · Since 1993',
      zh: '新加坡 EduTrust 认证 · 始于1993年',
    },
    location: {
      en: 'Singapore',
      zh: '新加坡',
    },
    logo: '/assets/alliance/nanyang-asia-college.png',
    websiteUrl: 'https://www.nycollege.edu.sg/',
    description: {
      en: 'A premier educational and training institution (EduTrust certified since 1993), bridging language mastery, creative arts, culture, and professional career pathways for global and regional learners.',
      zh: '新加坡权威教育学府与AEIS备考首选基地（自1993年起立足狮城，荣获4年EduTrust教育信托认证），融汇语言强化、艺术造诣与名校深造通路。',
    },
    highlights: [
      {
        en: '4-Year EduTrust certification awarded by CPE / SWDA',
        zh: '荣获新加坡 CPE / SWDA 颁发的 4 年期 EduTrust 权威认证',
      },
      {
        en: 'Preferred training institute for AEIS candidates & international parents',
        zh: '备受家长信赖的新加坡 AEIS 国际考生优选培训基地',
      },
      {
        en: 'Over 30 years of dedicated tertiary education and management research',
        zh: '三十余载高等教育创办积淀与扎实教研管理体系',
      },
    ],
    links: [
      {
        label: {
          en: 'Official College Portal',
          zh: '访问南洋亚洲学院官网',
        },
        url: 'https://www.nycollege.edu.sg/',
        isExternal: true,
      },
    ],
  },
  {
    id: 'nanyang-artists-society',
    name: {
      en: 'Nanyang Artists Society',
      zh: '南洋美术家协会',
    },
    nativeName: {
      en: 'Nanyang Artists Society',
      zh: '南洋美术家协会',
    },
    badge: {
      en: 'Host Society · Est. 2002',
      zh: '常设学术团体 · 创立于2002年',
    },
    location: {
      en: 'Singapore',
      zh: '新加坡',
    },
    logo: '/assets/alliance/nanyang-artists-society.png',
    websiteUrl: 'https://nyart.org.sg/',
    description: {
      en: 'Established to bring together regional creators, it focuses on promoting local visual expressions heavily rooted in the historically significant "Nanyang style" painting traditions.',
      zh: '在“南洋画派”奠基人刘抗先生亲切指导下创立，汇聚区域卓越艺术家与创作者，弘扬底蕴深厚的“南洋画派”传统与当代水墨色彩创新。',
    },
    highlights: [
      {
        en: 'Founded in 2002 under the guidance of Nanyang Art Style founder Mr. Liu Kang',
        zh: '2002年在“南洋画派”一代宗师刘抗先生关怀与指导下创会',
      },
      {
        en: 'Pioneering Southeast Asian visual art expressions and regional cultural dialogue',
        zh: '开创“热带雨林画派”，推动南洋水墨与现代油画艺术交流',
      },
      {
        en: 'Regular international exhibitions, master symposiums, and artist workshops',
        zh: '常态化举办跨国艺术大展、名家学术研讨与专业大师工作坊',
      },
    ],
    links: [
      {
        label: {
          en: 'Official Society Portal',
          zh: '访问南洋美术家协会官网',
        },
        url: 'https://nyart.org.sg/',
        isExternal: true,
      },
      {
        label: {
          en: 'What is Nanyang Art',
          zh: '了解“南洋画派”艺术渊源',
        },
        url: 'https://en.wikipedia.org/wiki/Nanyang_style',
        isExternal: true,
      },
    ],
  },
];
