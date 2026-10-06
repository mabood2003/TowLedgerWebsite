import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site-url';
export default function sitemap(): MetadataRoute.Sitemap { return ['', '/product', '/pricing', '/calgary-towing-software', '/alberta-towing-documentation', '/resources', '/about', '/contact', '/privacy', '/terms'].map((path)=>({ url: `${siteUrl}${path}`, lastModified: new Date('2026-10-05'), changeFrequency: path===''?'weekly':'monthly', priority: path===''?1:path==='/product'||path==='/contact'||path==='/calgary-towing-software'?0.9:0.7 })); }
