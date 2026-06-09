import PlanGrid from '@/components/pricing/PlanGrid'
import ComparisonTable from '@/components/pricing/ComparisonTable'
import { pricing } from '@/data/content'
import styles from './pricing.module.css'

export const metadata = {
  title: 'Pricing | NNC CRM',
  description:
    'Simple, transparent CRM pricing by team size: 5 users, 10 users, or unlimited. Compare every feature across Starter, Growth and Enterprise plans.',
}

export default function PricingPage() {
  return (
    <main className={styles.page}>
      <header className={`container ${styles.head}`}>
        <span className={styles.kicker}>/ Pricing</span>
        <h1 className={styles.title}>
          Plans that scale <span className={styles.navy}>with your team</span>.
        </h1>
        <p className={styles.sub}>{pricing.lead}</p>
      </header>

      <div className="container">
        <PlanGrid />
        <p className={styles.note}>{pricing.note}</p>
      </div>

      <section className={`container ${styles.tableSection}`}>
        <h2 className={styles.tableTitle}>Compare every feature</h2>
        <ComparisonTable />
      </section>

      <section className={`container ${styles.cta}`}>
        <div className={styles.ctaBand}>
          <h2>Start your free trial today.</h2>
          <p>No credit card required. Free for 30 days.</p>
          <a href="/#start" className={styles.ctaBtn}>
            Start free trial
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
        </div>
      </section>
    </main>
  )
}
