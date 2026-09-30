import type { MetadataRoute } from 'next';
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: '*', allow: '/' }, sitemap: 'https://towledger-alberta.mohamedabood049.chatgpt.site/sitemap.xml' }; }
