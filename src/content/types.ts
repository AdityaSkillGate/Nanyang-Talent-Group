export type Language = 'en' | 'zh';

export type LocalizedString = {
  en: string;
  zh: string;
};

export type ContentStatus = 
  | 'client-provided' 
  | 'verified-source' 
  | 'client-confirm' 
  | 'do-not-invent';

export interface FeeStructure {
  status: ContentStatus;
  groupFee?: LocalizedString;
  privateFee?: LocalizedString;
  materialsFee?: LocalizedString;
  paymentTerms?: LocalizedString[];
  discounts?: LocalizedString[];
  displayFallback: LocalizedString;
}

export interface CourseDetail {
  slug: string;
  category: 'art' | 'language' | 'brain';
  title: LocalizedString;
  subtitle?: LocalizedString;
  ageGroup?: LocalizedString;
  duration?: LocalizedString;
  lessonStructure?: LocalizedString;
  summary: LocalizedString;
  syllabusOutline?: LocalizedString[];
  techniques?: LocalizedString[];
  objectivesStatus: ContentStatus;
  objectives?: LocalizedString[];
  certification?: LocalizedString;
  fees: FeeStructure;
  featured: boolean;
  order: number;
  image?: string;
}

export interface SiteStatistic {
  value: string;
  label: LocalizedString;
  status: 'client-provided';
}

export interface NewsEventItem {
  id: string;
  slug: string;
  type: 'news' | 'event' | 'announcement';
  date: string;
  title: LocalizedString;
  summary: LocalizedString;
  status: ContentStatus;
}

export interface NewsItem {
  slug: string;
  title: string;
  chineseTitle: string;
  date: string;
  category: string;
  chineseCategory?: string;
  summary: string;
  chineseSummary?: string;
  content: string;
  chineseContent?: string;
  image?: string;
  published: boolean;
  featured: boolean;
  author?: string;
}

export interface EventItem {
  slug: string;
  title: string;
  chineseTitle: string;
  date: string;
  time?: string;
  location?: string;
  category: string;
  chineseCategory?: string;
  summary: string;
  chineseSummary?: string;
  content: string;
  chineseContent?: string;
  image?: string;
  published: boolean;
  featured: boolean;
  registrationUrl?: string;
}

export interface NavigationItem {
  key: string;
  label: LocalizedString;
  href: {
    en: string;
    zh: string;
  };
  children?: {
    key: string;
    label: LocalizedString;
    href: {
      en: string;
      zh: string;
    };
  }[];
}

export type FAQCategory =
  | 'General'
  | 'Art Courses'
  | 'Language Courses'
  | 'Brain Intelligence'
  | 'Fees'
  | 'Duration'
  | 'Enquiry';

export interface FAQItem {
  id: string;
  category: FAQCategory;
  question: LocalizedString;
  answer: LocalizedString;
  keywords: string[];
  relatedLink?: {
    label: LocalizedString;
    href: {
      en: string;
      zh: string;
    };
  };
}

