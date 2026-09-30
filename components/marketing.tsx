import Link from 'next/link';
import { ArrowRight, Check, FileCheck2, Menu, ReceiptText, ShieldCheck } from 'lucide-react';

export function Logo() {
  return <Link href="/" className="brand" aria-label="TowLedger home"><span className="brand-mark"><span /></span><span>TowLedger</span></Link>;
}

export function Header() {
  return <header className="header-wrap"><nav className="site-nav" aria-label="Primary navigation">
    <Logo />
    <div className="nav-links"><Link href="/product">Product</Link><Link href="/pricing">Pricing</Link><Link href="/alberta-towing-documentation">Alberta guide</Link><Link href="/resources">Resources</Link><Link href="/about">About</Link></div>
    <Link className="button button-small nav-cta" href="/contact">Join the pilot <ArrowRight size={15} /></Link>
    <Link className="mobile-menu" href="/contact" aria-label="Contact TowLedger"><Menu size={21} /></Link>
  </nav></header>;
}

export function Footer() {
  return <footer className="footer"><div className="footer-top">
    <div className="footer-lead"><Logo /><p>Documentation software for Alberta towing operators.</p><Link href="/contact" className="footer-contact">Talk to the founding team <ArrowRight size={15} /></Link></div>
    <div><h3>Product</h3><Link href="/product">Features</Link><Link href="/pricing">Pricing</Link><Link href="/contact">Pilot program</Link></div>
    <div><h3>Resources</h3><Link href="/alberta-towing-documentation">Alberta guide</Link><Link href="/resources">Operator resources</Link><Link href="/#faq">FAQ</Link></div>
    <div><h3>Company</h3><Link href="/about">About</Link><Link href="/contact">Contact</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div>
  </div><div className="footer-bottom"><span>© 2026 TowLedger</span><span>Built in Alberta, for Alberta operators.</span></div></footer>;
}

export function CTA({ title = 'Make the paperwork easier on your next tow.', text = 'Join the first group of Alberta operators helping shape TowLedger.' }: { title?: string; text?: string }) {
  return <section className="final-cta"><div><span className="section-kicker light">EARLY ACCESS</span><h2>{title}</h2><p>{text}</p></div><div className="cta-actions"><Link className="button button-signal" href="/contact">Apply for the pilot <ArrowRight size={17} /></Link><Link className="cta-secondary" href="/product">Explore the product</Link></div></section>;
}

export function PageHero({ eyebrow, title, text, children }: { eyebrow: string; title: string; text: string; children?: React.ReactNode }) {
  return <section className="page-hero"><span className="section-kicker">{eyebrow}</span><h1>{title}</h1><p>{text}</p>{children}</section>;
}

export function JobRecordMockup() {
  const steps = ['New tow', 'Estimate', 'Consent', 'Tow', 'Invoice', 'Complete'];
  return <div className="dashboard-mockup">
    <div className="mock-topbar"><div className="mini-brand"><span className="brand-mark"><span /></span> TowLedger</div><div className="operator"><span>RT</span> Ridgeway Towing</div></div>
    <div className="mock-body"><aside className="mock-sidebar"><div className="active">Jobs</div><div>Drivers</div><div>Documents</div><div>Settings</div></aside><div className="job-panel">
      <div className="job-heading"><div><small>JOB AB-1042</small><h2>2019 Ford F-150</h2><p>ABC-1234 · Calgary, AB</p></div><span className="complete-pill"><Check size={13} /> Complete</span></div>
      <div className="flow-row">{steps.map((step, index) => <div className="flow-step" key={step}><span><Check size={13} /></span><small>{step}</small>{index < steps.length - 1 && <i />}</div>)}</div>
      <div className="record-grid"><div className="record-card"><FileCheck2 /><span><small>Estimate</small><strong>$219.00</strong></span><Check className="ok" /></div><div className="record-card"><ShieldCheck /><span><small>Consent</small><strong>Captured 10:42 AM</strong></span><Check className="ok" /></div><div className="record-card"><ReceiptText /><span><small>Invoice</small><strong>INV-1042 issued</strong></span><Check className="ok" /></div></div>
    </div></div>
  </div>;
}

export function StatusTable() {
  return <div className="status-table"><div className="table-head"><span>Job</span><span>Driver</span><span>Estimate</span><span>Consent</span><span>Invoice</span><span>Status</span></div>
    <div><strong>AB-1042</strong><span>Terry</span><span className="check-cell">✓</span><span className="check-cell">✓</span><span className="check-cell">✓</span><b className="status complete">Complete</b></div>
    <div><strong>AB-1043</strong><span>Mike</span><span className="check-cell">✓</span><span className="dash-cell">—</span><span className="dash-cell">—</span><b className="status attention">Needs attention</b></div>
    <div><strong>AB-1044</strong><span>Jules</span><span className="check-cell">✓</span><span className="check-cell">✓</span><span className="dash-cell">—</span><b className="status progress">In progress</b></div>
  </div>;
}
