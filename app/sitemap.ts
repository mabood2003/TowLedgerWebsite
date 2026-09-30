import type { MetadataRoute } from 'next';
const origin='https://towledger-alberta.mohamedabood049.chatgpt.site';
export default function sitemap(): MetadataRoute.Sitemap { return ['', '/product', '/pricing', '/alberta-towing-documentation', '/resources', '/about', '/contact', '/privacy', '/terms'].map((path)=>({ url: `${origin}${path}`, lastModified: new Date('2026-09-30'), changeFrequency: path===''?'weekly':'monthly', priority: path===''?1:path==='/product'||path==='/contact'?0.9:0.7 })); }
