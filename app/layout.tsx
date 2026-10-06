import type { Metadata } from 'next';
import { siteUrl } from '@/lib/site-url';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Tow Docker | Towing software for Calgary & Alberta', template: '%s | Tow Docker' },
  description: 'Towing software for Calgary and Alberta operators. Send estimates, capture consent, issue invoices, and keep every towing job record together.',
  openGraph: { type: 'website', locale: 'en_CA', url: siteUrl, siteName: 'Tow Docker', title: 'Tow Docker | Towing software for Calgary & Alberta', description: 'A connected documentation workflow for towing companies, from estimate and consent through invoice and completed record.' },
  twitter: { card: 'summary', title: 'Tow Docker', description: 'Towing documentation software for Calgary and Alberta operators.' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Organization', name: 'Tow Docker', url: siteUrl, email: 'mailto:TowDocker@gmail.com', areaServed: [{ '@type': 'City', name: 'Calgary' }, { '@type': 'AdministrativeArea', name: 'Alberta' }] },
    { '@type': 'SoftwareApplication', name: 'Tow Docker', url: siteUrl, applicationCategory: 'BusinessApplication', operatingSystem: 'Web', description: 'Towing documentation and workflow software for Calgary and Alberta towing operators.', areaServed: 'Alberta, Canada' }
  ]};
  return <html lang="en"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}} /></body></html>;
}
