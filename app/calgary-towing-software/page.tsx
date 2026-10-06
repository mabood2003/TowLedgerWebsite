import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, FileCheck2, MapPin, ReceiptText, ShieldCheck } from 'lucide-react';
import { CTA, Footer, Header, PageHero } from '@/components/marketing';

export const metadata: Metadata = {
  title: 'Calgary towing software for operators',
  description: 'Tow Docker is towing company software for Calgary operators who need faster estimates, consent capture, invoices, and organized job records.',
  alternates: { canonical: '/calgary-towing-software' },
  openGraph: {
    title: 'Calgary towing software for operators | Tow Docker',
    description: 'Connect roadside estimates, consent, invoices, and office records in one towing workflow.',
  },
};

export default function CalgaryTowingSoftwarePage() {
  return <main>
    <Header />
    <PageHero
      eyebrow="CALGARY TOWING SOFTWARE"
      title="Modern towing tools for Calgary operators."
      text="Tow Docker helps towing companies move from roadside estimate to consent, invoice, and completed job record without piecing the paperwork together later."
    >
      <div className="hero-actions">
        <Link className="button" href="/contact">Book a walkthrough <ArrowRight size={17} /></Link>
        <Link className="text-link" href="/product">Explore the workflow</Link>
      </div>
    </PageHero>

    <section className="section story-grid">
      <div><span className="section-kicker">BUILT FOR THE ROAD</span><h2>One connected job file, from Calgary roadside to office review.</h2></div>
      <div><p>Drivers should not need to re-enter the same customer, vehicle, location, and pricing details across separate forms. Tow Docker keeps those details moving through the towing documentation workflow.</p><p>Office teams get a searchable record that shows what is complete and what still needs attention.</p></div>
    </section>

    <section className="section capability-grid">
      <article><FileCheck2 /><h3>Towing estimates</h3><p>Create clear estimates from company rate cards and send a copy customers can keep.</p></article>
      <article><ShieldCheck /><h3>Consent capture</h3><p>Support the consent methods and wording your towing company configures.</p></article>
      <article><ReceiptText /><h3>Invoices and records</h3><p>Carry known job details into the invoice and keep the completed towing record together.</p></article>
      <article><MapPin /><h3>Calgary and Alberta focus</h3><p>Built with local towing workflows and Alberta documentation requirements in mind.</p></article>
    </section>

    <section className="section paired-panels">
      <div className="dark-panel"><span className="section-kicker light">FOR TOWING COMPANIES</span><h2>Useful tools without replacing your whole operation.</h2><ul className="check-list vertical"><li><Check />Driver-friendly roadside workflow</li><li><Check />Customer links by text or email</li><li><Check />Searchable office records</li><li><Check />Configurable company rates and templates</li></ul></div>
      <div className="warning-panel"><span className="section-kicker">LOCAL SEARCH, CLEAR INTENT</span><h2>Software for towing operators—not a roadside towing service.</h2><p>Tow Docker serves the businesses that provide towing. If you need a tow right now, contact a local towing provider or emergency service directly.</p><Link className="inline-link" href="/alberta-towing-documentation">Read the Alberta operator guide <ArrowRight size={16} /></Link></div>
    </section>
    <CTA title="See Tow Docker with your towing workflow." text="Tell us how your Calgary or Alberta team handles estimates, consent, invoices, and job records today." />
    <Footer />
  </main>;
}
