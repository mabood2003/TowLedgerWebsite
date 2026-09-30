import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site-url';
export default function sitemap(): MetadataRoute.Sitemap { return ['', '/product', '/pricing', '/alberta-towing-documentation', '/resources', '/about', '/contact', '/privacy', '/terms'].map((path)=>({ url: `${siteUrl}${path}`, lastModified: new Date('2026-09-30'), changeFrequency: path===''?'weekly':'monthly', priority: path===''?1:path==='/product'||path==='/contact'?0.9:0.7 })); }
