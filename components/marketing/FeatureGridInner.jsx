'use client'

import { useRef, useEffect, useState } from 'react'
import AnimatedIcon from './AnimatedIcon'
import styles from './FeatureGridInner.module.css'

export default function FeatureGridInner({ items }) {
  const ref = useRef(null)
  const [mounted, setMounted] = useState(false)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    setMounted(true)
    const el = ref.current
    if (!el) return undefined
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className={`${styles.grid} ${mounted ? styles.js : ''} ${inView ? styles.in : ''}`}>
      {items.map((it, i) => (
        <div className={styles.card} key={it.title} style={{ '--i': i }}>
          <span className={styles.icon}>
            <AnimatedIcon name={it.icon} />
          </span>
          <h3 className={styles.title}>{it.title}</h3>
          <p className={styles.body}>{it.body}</p>
        </div>
      ))}
    </div>
  )
}
