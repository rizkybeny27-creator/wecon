import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/markdown';
import { routing } from '@/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://weconsultant.id';
  const locales = routing.locales;
  const staticPages = [
    '', 
    '/about', 
    '/projects', 
    '/blog',
    '/services/river-diversion-permit',
    '/services/water-intake-permit-sippa',
    '/services/dam-construction-permit'
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Static & Service Pillar pages for each locale
  staticPages.forEach((page) => {
    locales.forEach((locale) => {
      const path = page === '' ? `/${locale}` : `/${locale}${page}`;
      const isService = page.startsWith('/services/');
      sitemapEntries.push({
        url: `${siteUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'daily' : isService ? 'weekly' : 'weekly',
        priority: page === '' ? 1.0 : isService ? 0.9 : 0.8,
        alternates: {
          languages: {
            en: `${siteUrl}/en${page}`,
            id: `${siteUrl}/id${page}`,
            zh: `${siteUrl}/zh${page}`,
          },
        },
      });
    });
  });

  // Dynamic projects pages
  const projectSlugs = new Set<string>();
  locales.forEach((locale) => {
    const posts = getAllPosts('projects', locale);
    posts.forEach((p) => projectSlugs.add(p.slug));
  });

  projectSlugs.forEach((slug) => {
    locales.forEach((locale) => {
      sitemapEntries.push({
        url: `${siteUrl}/${locale}/projects/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: {
          languages: {
            en: `${siteUrl}/en/projects/${slug}`,
            id: `${siteUrl}/id/projects/${slug}`,
            zh: `${siteUrl}/zh/projects/${slug}`,
          },
        },
      });
    });
  });

  // Dynamic blog pages
  const blogSlugs = new Set<string>();
  locales.forEach((locale) => {
    const posts = getAllPosts('blog', locale);
    posts.forEach((p) => blogSlugs.add(p.slug));
  });

  blogSlugs.forEach((slug) => {
    locales.forEach((locale) => {
      sitemapEntries.push({
        url: `${siteUrl}/${locale}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.6,
        alternates: {
          languages: {
            en: `${siteUrl}/en/blog/${slug}`,
            id: `${siteUrl}/id/blog/${slug}`,
            zh: `${siteUrl}/zh/blog/${slug}`,
          },
        },
      });
    });
  });

  return sitemapEntries;
}
