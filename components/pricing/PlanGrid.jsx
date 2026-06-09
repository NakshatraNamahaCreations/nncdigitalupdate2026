'use client'

import { useState } from 'react'
import { PLANS } from '@/lib/pricing'
import PlanColumn from './PlanColumn'
import styles from './PlanGrid.module.css'

export default function PlanGrid() {
  const [annual, setAnnual] = useState(true)

  return (
    <div>
      <div className={styles.controls}>
        <button
          type="button"
          role="switch"
          aria-checked={annual}
          className={styles.toggle}
          onClick={() => setAnnual((v) => !v)}
        >
          <span className={`${styles.switch} ${annual ? styles.on : ''}`}>
            <span className={styles.knob} />
          </span>
          <span className={styles.toggleLabel}>
            {annual ? 'Billed annually' : 'Billed monthly'}
          </span>
          {annual && <span className={styles.save}>Save 17%</span>}
        </button>
        <span className={styles.currency}>Prices in INR</span>
      </div>

      <div className={styles.grid}>
        {PLANS.map((p) => (
          <PlanColumn key={p.id} plan={p} annual={annual} />
        ))}
      </div>
    </div>
  )
}
