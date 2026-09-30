import { NewsItem } from './types';

/**
 * NANYANG TALENT GROUP — NEWS REGISTRY
 *
 * Zero-Hallucination Governance Policy:
 * Do not fabricate unverified news, academic announcements, or press releases.
 * When client approves official articles, simply add new objects to `newsItems` below
 * with `published: true`. The listing, dynamic detail pages, and home highlights
 * will automatically update without modifying any layout or UI components.
 *
 * Example item structure for future addition:
 * {
 *   slug: '2026-academic-intake-announcement',
 *   title: '2026 Academic Year Intake & Studio Schedules Announced',
 *   chineseTitle: '2026学年招生简章与专业画室排期正式发布',
 *   date: '2026-10-15',
 *   category: 'Academic Notice',
 *   chineseCategory: '教研通告',
 *   summary: 'Nanyang Talent Group announces enrolment dates and schedule allocations for upcoming Fine Arts and Multilingual programmes.',
 *   chineseSummary: '南洋人才集团正式公布新学期美术学院、多语种研修及全脑启发各班次入学登记排期。',
 *   content: 'Full editorial content paragraphs...',
 *   chineseContent: '正文详细内容...',
 *   image: '/assets/news/sample.jpg',
 *   published: true,
 *   featured: true,
 *   author: 'Nanyang Talent Group Admissions Office'
 * }
 */

export const newsItems: NewsItem[] = [
  // Awaiting client-approved articles. Empty by default to uphold strict verification standard.
];

export function getAllNews(): NewsItem[] {
  return newsItems;
}

export function getPublishedNews(): NewsItem[] {
  return newsItems.filter((item) => item.published);
}

export function getFeaturedNews(): NewsItem[] {
  return newsItems.filter((item) => item.published && item.featured);
}

export function getNewsItem(slug: string): NewsItem | undefined {
  return newsItems.find((item) => item.slug === slug);
}
