import type { Metadata } from 'next';
import { siteUrl } from '@/lib/site-url';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'TowLedger | Towing documentation software for Alberta', template: '%s | TowLedger' },
  description: 'Send estimates, capture your company consent process, issue invoices, and keep every towing job record together.',
  openGraph: { type: 'website', siteName: 'TowLedger', title: 'TowLedger | Towing documentation software for Alberta', description: 'From estimate through completed record, keep every tow documented in one workflow.' },
  twitter: { card: 'summary', title: 'TowLedger', description: 'Documentation software for Alberta towing operators.' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Organization', name: 'TowLedger', url: siteUrl },
    { '@type': 'SoftwareApplication', name: 'TowLedger', applicationCategory: 'BusinessApplication', operatingSystem: 'Web', description: 'Documentation workflow software for Alberta towing operators.' }
  ]};
  return <html lang="en"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}} /></body></html>;
}
