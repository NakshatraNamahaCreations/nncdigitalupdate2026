'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import Button from '@/components/ui/Button/Button'
import { nav } from '@/data/content'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const tick = useRef(false)
  const pathname = usePathname()
  // Off the homepage there's no dark hero, so always use the solid (dark-text) bar.
  const solid = scrolled || pathname !== '/'

  useEffect(() => {
    const onScroll = () => {
      if (tick.current) return
      tick.current = true
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 60)
        tick.current = false
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.nav} ${solid ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a className={styles.brand} href="/" aria-label="NNC Digital, go to home page">
          <img className={styles.mark} src="/nnc-mark.png" alt="" aria-hidden="true" />
          <span className={styles.brandText}>
            NNC<span className={styles.brandLight}>digital</span>
          </span>
        </a>

        <nav className={styles.links} aria-label="Primary">
          {nav.links.map((l) => (
            <a key={l.label} href={l.href} className={styles.link}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <Button href={nav.cta.href} variant="primary" arrow={false}>
            {nav.cta.label}
          </Button>
        </div>

        <button
          className={styles.burger}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <nav className={styles.mobileMenu} aria-label="Mobile">
          {nav.links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <div className={styles.mobileCta}>
            <Button href={nav.cta.href} variant="primary" arrow={false}>
              {nav.cta.label}
            </Button>
          </div>
        </nav>
      )}
    </header>
  )
}
