import { MetadataRoute } from 'next';
import { artCourses } from '@/content/art-courses';
import { languageCourses, brainCourses } from '@/content/enrichment-courses';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nytalent.com.sg';
  const lastModified = new Date();

  const staticRoutes = [
    '',
    '/about',
    '/student-recruitment',
    '/art-courses',
    '/enrichment-courses',
    '/news-events',
    '/news-events/news',
    '/news-events/events',
    '/contact',
    '/design-system',
    '/zh',
    '/zh/about',
    '/zh/student-recruitment',
    '/zh/art-courses',
    '/zh/enrichment-courses',
    '/zh/news-events',
    '/zh/news-events/news',
    '/zh/news-events/events',
    '/zh/contact',
    '/zh/design-system',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: route === '' || route === '/zh' ? 1.0 : 0.8,
  }));

  const artRoutes = artCourses.flatMap((c) => [
    {
      url: `${baseUrl}/art-courses/${c.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/zh/art-courses/${c.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]);

  const languageRoutes = languageCourses.flatMap((c) => [
    {
      url: `${baseUrl}/enrichment-courses/language/${c.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/zh/enrichment-courses/language/${c.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]);

  const brainRoutes = brainCourses.flatMap((c) => [
    {
      url: `${baseUrl}/enrichment-courses/brain/${c.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/zh/enrichment-courses/brain/${c.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]);

  return [...staticRoutes, ...artRoutes, ...languageRoutes, ...brainRoutes];
}
