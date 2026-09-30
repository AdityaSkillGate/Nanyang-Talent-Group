import { EventItem } from './types';

/**
 * NANYANG TALENT GROUP — EVENTS REGISTRY
 *
 * Zero-Hallucination Governance Policy:
 * Do not fabricate unverified workshops, open houses, or masterclasses.
 * When client approves official calendar events, simply add new objects to `eventItems`
 * below with `published: true`. The listing, dynamic detail pages, and home highlights
 * will automatically update without modifying any layout or UI components.
 *
 * Example item structure for future addition:
 * {
 *   slug: 'holiday-fine-arts-masterclass',
 *   title: 'School Holiday Fine Arts & Chinese Calligraphy Masterclass',
 *   chineseTitle: '假期传统书画名师研修工坊',
 *   date: '2026-11-20',
 *   time: '10:00 AM - 1:00 PM',
 *   location: 'Singapore Central Studio',
 *   category: 'Workshop',
 *   chineseCategory: '名家工坊',
 *   summary: 'Immersive holiday masterclass focusing on Chinese calligraphy brushwork and classical oil sketching.',
 *   chineseSummary: '针对青少年与成人的假期高阶书画浸濡工作坊，传授正统书法国画笔墨与经典素描造型。',
 *   content: 'Full event details, prerequisites, and itinerary...',
 *   chineseContent: '工作坊完整日程、适用对象与导师介绍...',
 *   image: '/assets/events/sample.jpg',
 *   published: true,
 *   featured: true,
 *   registrationUrl: '/contact'
 * }
 */

export const eventItems: EventItem[] = [
  // Awaiting client-approved events. Empty by default to uphold strict verification standard.
];

export function getAllEvents(): EventItem[] {
  return eventItems;
}

export function getPublishedEvents(): EventItem[] {
  return eventItems.filter((item) => item.published);
}

export function getFeaturedEvents(): EventItem[] {
  return eventItems.filter((item) => item.published && item.featured);
}

export function getEventItem(slug: string): EventItem | undefined {
  return eventItems.find((item) => item.slug === slug);
}
