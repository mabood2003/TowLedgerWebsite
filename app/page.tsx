import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Check,
  ClipboardCheck,
  FileCheck2,
  Gauge,
  MapPin,
  MessageSquareText,
  ReceiptText,
  Search,
  Settings2,
  ShieldCheck,
  Smartphone,
  Workflow,
} from 'lucide-react';
import {
  CTA,
  Footer,
  Header,
  JobRecordMockup,
  StatusTable,
} from '@/components/marketing';

const steps = ['New tow', 'Estimate', 'Consent', 'Tow', 'Invoice', 'Complete'];
export const metadata: Metadata = { alternates: { canonical: '/' } };
const features = [
  {
    icon: FileCheck2,
    title: 'Estimate',
    text: 'Build a customer-retainable estimate from your company rates, right on the driver’s phone.',
  },
  {
    icon: ShieldCheck,
    title: 'Consent',
    text: 'Use your configured wording and keep the acknowledgement with the job record.',
  },
  {
    icon: ReceiptText,
    title: 'Invoice',
    text: 'Create the invoice from details already captured during the tow.',
  },
  {
    icon: ClipboardCheck,
    title: 'Records',
    text: 'Keep every document, time, location, and customer interaction in one place.',
  },
];

export default function Home() {
  return (
    <main>
      <Header />
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">
            <MapPin size={14} /> Built for Alberta towing operators
          </div>
          <h1>
            Every tow.
            <br />
            <span>Documented from the start.</span>
          </h1>
          <p className="hero-text">
            Send estimates, capture your company&apos;s consent process, issue
            invoices, and keep every job record together—without replacing the
            systems you already use.
          </p>
          <div className="hero-actions">
            <Link className="button" href="/contact">
              Book a walkthrough <ArrowRight size={17} />
            </Link>
            <Link className="text-link" href="#how-it-works">
              See how it works <span>↓</span>
            </Link>
          </div>
          <p className="pilot-note">
            <span className="pulse" /> Now onboarding Alberta pilot operators
          </p>
        </div>
        <div
          className="product-stage"
          aria-label="Tow Docker product workflow preview"
        >
          <div className="stage-glow" />
          <JobRecordMockup />
          <div className="phone-mockup">
            <div className="phone-notch" />
            <div className="phone-header">
              <span className="brand-mark">
                <span />
              </span>
              <b>Ridgeway Towing</b>
            </div>
            <small className="phone-label">ESTIMATE #1042</small>
            <h3>Your tow estimate</h3>
            <p className="destination">Calgary → Airdrie</p>
            <div className="line-item">
              <span>Base tow</span>
              <b>$125.00</b>
            </div>
            <div className="line-item">
              <span>Mileage · 14 km</span>
              <b>$63.00</b>
            </div>
            <div className="line-item">
              <span>Service fee</span>
              <b>$31.00</b>
            </div>
            <div className="total">
              <span>Estimated total</span>
              <b>$219.00</b>
            </div>
            <button>I consent to this tow</button>
            <p className="no-app">No app or account required</p>
          </div>
        </div>
      </section>

      <section className="workflow-strip" id="how-it-works">
        <p>One connected record, from roadside to office</p>
        <div>
          {steps.map((step, index) => (
            <span key={step}>
              <b>{String(index + 1).padStart(2, '0')}</b>
              {step}
              {index < steps.length - 1 && <ArrowRight size={15} />}
            </span>
          ))}
        </div>
      </section>

      <section className="section value-section">
        <div className="section-heading split">
          <div>
            <span className="section-kicker">THE COMPLETE RECORD</span>
            <h2>Keep the entire towing record together.</h2>
          </div>
          <p>
            Drivers do the work once. Tow Docker carries the details forward from
            the first estimate to the final record.
          </p>
        </div>
        <div className="feature-grid">
          {features.map(({ icon: Icon, title, text }, index) => (
            <article className="feature-card" key={title}>
              <div className="feature-num">0{index + 1}</div>
              <Icon />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section process-section">
        <div className="process-intro">
          <span className="section-kicker light">HOW IT WORKS</span>
          <h2>
            Five clear steps.
            <br />
            One complete job file.
          </h2>
          <p>
            A focused workflow gives the driver the next thing they need—without
            turning the roadside into a back office.
          </p>
          <Link className="inline-link light" href="/product">
            Take the product tour <ArrowRight size={16} />
          </Link>
        </div>
        <ol className="process-list">
          <li>
            <b>01</b>
            <div>
              <h3>Start the tow</h3>
              <p>
                Add the customer, vehicle, pickup, destination, and request
                type.
              </p>
            </div>
          </li>
          <li>
            <b>02</b>
            <div>
              <h3>Build the estimate</h3>
              <p>Use company-configured rates and reusable line items.</p>
            </div>
          </li>
          <li>
            <b>03</b>
            <div>
              <h3>Send and capture</h3>
              <p>
                Share by text, email, or on-device and capture your consent
                process.
              </p>
            </div>
          </li>
          <li>
            <b>04</b>
            <div>
              <h3>Complete the job</h3>
              <p>
                Record key events and generate the invoice from known details.
              </p>
            </div>
          </li>
          <li>
            <b>05</b>
            <div>
              <h3>Keep the record</h3>
              <p>Everything stays connected to one searchable job file.</p>
            </div>
          </li>
        </ol>
      </section>

      <section className="section roadside-section">
        <div className="roadside-copy">
          <span className="section-kicker">DRIVER EXPERIENCE</span>
          <h2>Built for the roadside, not the back office.</h2>
          <p>
            Large controls, saved company details, reusable rate cards, and
            minimal typing keep the workflow moving when the driver is working
            curbside.
          </p>
          <ul className="check-list">
            <li>
              <Check /> Touch-friendly, step-by-step flow
            </li>
            <li>
              <Check /> Photos and timestamped activity
            </li>
            <li>
              <Check /> Multiple customer delivery options
            </li>
            <li>
              <Check /> Clear missing-step warnings
            </li>
          </ul>
        </div>
        <div className="driver-ui">
          <div className="driver-top">
            <div>
              <small>GOOD MORNING</small>
              <h3>Terry’s jobs</h3>
            </div>
            <span>RT</span>
          </div>
          <button className="new-tow">
            <b>+</b>
            <span>
              <strong>Start a new tow</strong>
              <small>Capture customer and vehicle details</small>
            </span>
            <ArrowRight />
          </button>
          <p className="list-label">RECENT JOBS</p>
          <div className="mobile-job">
            <span className="job-icon">
              <Check />
            </span>
            <div>
              <b>2019 Ford F-150</b>
              <small>ABC-1234 · Completed</small>
            </div>
            <strong>$219</strong>
          </div>
          <div className="mobile-job">
            <span className="job-icon amber">!</span>
            <div>
              <b>2022 Toyota RAV4</b>
              <small>JKL-7821 · Invoice missing</small>
            </div>
            <ArrowRight />
          </div>
        </div>
      </section>

      <section className="section owner-section">
        <div className="section-heading split">
          <div>
            <span className="section-kicker">OFFICE & OWNER</span>
            <h2>Know what’s complete—and what isn’t.</h2>
          </div>
          <p>
            See the state of every job without chasing paper, texts, and photos
            across three different places.
          </p>
        </div>
        <StatusTable />
        <div className="benefit-row">
          <span>
            <Search />
            Search by plate or customer
          </span>
          <span>
            <FileCheck2 />
            Export the complete record
          </span>
          <span>
            <Gauge />
            Spot missing documents early
          </span>
        </div>
      </section>

      <section className="section customer-section">
        <div className="customer-panel">
          <div className="customer-copy">
            <span className="section-kicker light">CUSTOMER EXPERIENCE</span>
            <h2>
              A simple link.
              <br />
              No customer app.
            </h2>
            <p>
              Customers can review the estimate, confirm the destination, and
              follow your company&apos;s consent flow from any modern phone.
            </p>
            <div className="micro-points">
              <span>
                <MessageSquareText /> Sent by text or email
              </span>
              <span>
                <Smartphone /> Works in the browser
              </span>
            </div>
          </div>
          <div className="message-demo">
            <small>MESSAGES</small>
            <div className="bubble">
              Ridgeway Towing sent your estimate.
              <br />
              <b>View estimate →</b>
            </div>
            <span className="delivered">Delivered · 10:39 AM</span>
          </div>
        </div>
      </section>

      <section className="section configuration-section">
        <div className="config-visual">
          <div className="config-sidebar">
            <span className="brand-mark">
              <span />
            </span>
            <b>Company settings</b>
            <small className="selected">Consent workflow</small>
            <small>Rate cards</small>
            <small>Estimate template</small>
            <small>Invoice details</small>
          </div>
          <div className="config-main">
            <div className="config-title">
              <Settings2 />
              <span>
                <small>COMPANY WORKFLOW</small>
                <b>Customer consent</b>
              </span>
              <i>Saved</i>
            </div>
            <div className="field">
              <b>Consent heading</b>
              <span>I authorize Ridgeway Towing to proceed…</span>
            </div>
            <div className="field">
              <b>Enabled methods</b>
              <div className="method-pills">
                <b>Customer link</b>
                <b>On-device signature</b>
                <b>Audio record</b>
              </div>
            </div>
            <div className="toggle-row">
              <span>
                <b>Require destination confirmation</b>
                <small>Driver cannot continue until recorded</small>
              </span>
              <i />
            </div>
          </div>
        </div>
        <div className="config-copy">
          <span className="section-kicker">YOUR COMPANY’S PROCESS</span>
          <h2>Your forms. Your wording. Your workflow.</h2>
          <p>
            Configure your company information, rates, estimate text, consent
            wording, invoice details, and enabled methods.
          </p>
          <p>
            Tow Docker handles the delivery, capture, timestamping, organization,
            and storage around the process you choose.
          </p>
          <Link className="inline-link" href="/product">
            See company controls <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="alongside">
        <div>
          <Workflow />
          <span>
            <small>FOCUSED BY DESIGN</small>
            <h2>Works alongside the tools you already use.</h2>
          </span>
        </div>
        <p>
          Keep your dispatch, accounting, and fleet systems. Tow Docker focuses
          on the customer documentation workflow from estimate through completed
          record.
        </p>
      </section>

      <section className="section alberta-home">
        <div>
          <span className="section-kicker">ALBERTA FOCUS</span>
          <h2>Built with Alberta towing operations in mind.</h2>
        </div>
        <div>
          <p>
            Support the day-to-day records operators manage: estimates, consent
            records, invoices, job locations and times, agreed destinations, and
            customer communications.
          </p>
          <Link className="inline-link" href="/alberta-towing-documentation">
            Read the Alberta operator guide <ArrowRight size={16} />
          </Link>
          <small>
            Operators remain responsible for determining their legal obligations
            and configuring their company processes. Tow Docker does not provide
            legal advice.
          </small>
        </div>
      </section>

      <section className="section pilot-pricing">
        <div className="pricing-callout">
          <span className="section-kicker light">
            FOUNDING OPERATOR PRICING
          </span>
          <h2>Help shape the product you’ll use.</h2>
          <p>
            Early Alberta operators receive founder-led setup, discounted pilot
            pricing, direct support, and a real voice in product development.
          </p>
          <Link className="button button-signal" href="/contact">
            Apply for the pilot <ArrowRight size={17} />
          </Link>
        </div>
        <div className="pilot-includes">
          <p>THE PILOT INCLUDES</p>
          {[
            'Estimate and customer-link workflow',
            'Configurable consent capture tools',
            'Invoices and complete job records',
            'Driver and office views',
            'Direct access to the founding team',
          ].map((item) => (
            <span key={item}>
              <Check />
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="faq-title">
          <span className="section-kicker">QUESTIONS, ANSWERED</span>
          <h2>Before you join the pilot.</h2>
          <p>
            Want to talk through your current process? We&apos;ll map it with
            you in a short walkthrough.
          </p>
          <Link className="inline-link" href="/contact">
            Ask a question <ArrowRight size={16} />
          </Link>
        </div>
        <div className="faq-list">
          {[
            [
              'Is Tow Docker a dispatch system?',
              'No. The initial product focuses on customer documentation around the tow. Keep using your existing dispatch, accounting, and fleet tools.',
            ],
            [
              'Do we need to replace Towbook?',
              'No. Tow Docker is designed to work alongside towing-management systems—not replace your entire operation.',
            ],
            [
              'Can we use our own consent wording?',
              'Yes. Your company configures its own wording, rates, templates, and enabled consent methods.',
            ],
            [
              'Do customers need to download an app?',
              'No. Customers receive a mobile-friendly link that opens in their browser.',
            ],
            [
              'Can estimates be sent by text?',
              'Yes. The planned workflow supports text, email, and displaying the estimate on the driver’s device.',
            ],
            [
              'Is Tow Docker legal advice?',
              'No. Tow Docker provides workflow and record-management tools. Operators remain responsible for determining their legal requirements.',
            ],
          ].map(([q, a], i) => (
            <details key={q} open={i === 0}>
              <summary>
                {q}
                <span>+</span>
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>
      <CTA />
      <Footer />
    </main>
  );
}
