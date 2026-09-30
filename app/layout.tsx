import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://towledger-alberta.mohamedabood049.chatgpt.site'),
  title: { default: 'TowLedger | Towing documentation software for Alberta', template: '%s | TowLedger' },
  description: 'Send estimates, capture your company consent process, issue invoices, and keep every towing job record together.',
  openGraph: { type: 'website', siteName: 'TowLedger', title: 'TowLedger | Towing documentation software for Alberta', description: 'From estimate through completed record, keep every tow documented in one workflow.' },
  twitter: { card: 'summary', title: 'TowLedger', description: 'Documentation software for Alberta towing operators.' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Organization', name: 'TowLedger', url: 'https://towledger-alberta.mohamedabood049.chatgpt.site' },
    { '@type': 'SoftwareApplication', name: 'TowLedger', applicationCategory: 'BusinessApplication', operatingSystem: 'Web', description: 'Documentation workflow software for Alberta towing operators.' }
  ]};
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}} /></body></html>;
}
