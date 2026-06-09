import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs'
import Icon from '@/components/ui/Icon/Icon'
import DataCaptureFlow from './DataCaptureFlow'
import FeatureGridInner from './FeatureGridInner'
import LeadCaptureGraphic from './LeadCaptureGraphic'
import styles from './MarketingPage.module.css'

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

function Media({ media, className }) {
  if (!media) return null
  if (media.type === 'video') {
    return (
      <video className={className} autoPlay muted loop playsInline preload="metadata" poster={media.poster} aria-hidden="true">
        <source src={media.src} type="video/mp4" />
      </video>
    )
  }
  return <img className={className} src={media.src} alt={media.alt || ''} loading="lazy" />
}

function Ctas({ ctas, onLight }) {
  if (!ctas?.length) return null
  return (
    <div className={styles.ctas}>
      {ctas.map((c) => (
        <a
          key={c.label}
          href={c.href}
          data-trial={c.trial ? '' : undefined}
          className={c.variant === 'ghost' ? styles.btnGhost : styles.btnPrimary}
        >
          {c.label}
          <Arrow />
        </a>
      ))}
    </div>
  )
}

/* ---------- blocks ---------- */
function FeatureGrid({ block }) {
  return (
    <section className={styles.block}>
      <div className="container">
        {block.title && <h2 className={styles.blockTitle}>{block.title}</h2>}
        {block.lead && <p className={styles.blockLead}>{block.lead}</p>}
        <FeatureGridInner items={block.items} />
      </div>
    </section>
  )
}

function Split({ block }) {
  return (
    <section className={styles.block}>
      <div className={`container ${styles.split} ${block.flip ? styles.flip : ''}`}>
        <div className={styles.splitText}>
          {block.kicker && <span className={styles.kicker}>{block.kicker}</span>}
          <h2 className={styles.blockTitle} style={{ textAlign: 'left', margin: 0 }}>{block.title}</h2>
          {block.body && <p className={styles.splitBody}>{block.body}</p>}
          {block.bullets && (
            <ul className={styles.bullets}>
              {block.bullets.map((b) => (
                <li key={b}><span className={styles.tick}><Icon name="check" /></span>{b}</li>
              ))}
            </ul>
          )}
        </div>
        <div className={styles.splitMedia}>
          <Media media={block.media} className={styles.splitImg} />
        </div>
      </div>
    </section>
  )
}

function Steps({ block }) {
  return (
    <section className={styles.block}>
      <div className="container">
        {block.title && <h2 className={styles.blockTitle}>{block.title}</h2>}
        {block.lead && <p className={styles.blockLead}>{block.lead}</p>}
        <ol className={styles.steps}>
          {block.items.map((s, i) => (
            <li className={styles.step} key={s.title}>
              <span className={styles.stepNum}>{String(i + 1).padStart(2, '0')}</span>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepBody}>{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Stats({ block }) {
  return (
    <section className={styles.block}>
      <div className="container">
        {block.title && <p className={styles.statsTitle}>{block.title}</p>}
        <div className={styles.stats}>
          {block.items.map((s) => (
            <div className={styles.stat} key={s.label}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials({ block }) {
  return (
    <section className={styles.block}>
      <div className="container">
        {block.title && <h2 className={styles.blockTitle}>{block.title}</h2>}
        {block.lead && <p className={styles.blockLead}>{block.lead}</p>}
        <div className={styles.tgrid}>
          {block.items.map((t, i) => (
            <figure className={styles.tcard} key={i}>
              <div className={styles.tstars} aria-hidden="true">★★★★★</div>
              <blockquote className={styles.tquote}>{t.quote}</blockquote>
              <figcaption className={styles.twho}>
                <span className={styles.tavatar}>{t.initials}</span>
                <span className={styles.tmeta}>
                  <strong>{t.name}</strong>
                  <span className={styles.trole}>{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function Cards({ block }) {
  return (
    <section className={styles.block}>
      <div className="container">
        {block.title && <h2 className={styles.blockTitle}>{block.title}</h2>}
        {block.lead && <p className={styles.blockLead}>{block.lead}</p>}
        <div className={styles.cgrid}>
          {block.items.map((it) => {
            const Tag = it.href ? 'a' : 'div'
            return (
              <Tag className={styles.ccard} key={it.title} href={it.href}>
                {it.icon && <span className={styles.cicon}><Icon name={it.icon} /></span>}
                <h3 className={styles.ccardTitle}>{it.title}</h3>
                <p className={styles.ccardBody}>{it.body}</p>
                {it.href && <span className={styles.clink}>Learn more<Arrow /></span>}
              </Tag>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Prose({ block }) {
  return (
    <section className={styles.block}>
      <div className={`container ${styles.prose}`}>
        {block.sections.map((s) => (
          <div key={s.h} className={styles.proseItem}>
            <h2 className={styles.proseH}>{s.h}</h2>
            {s.p.map((para, i) => (
              <p key={i} className={styles.proseP}>{para}</p>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

function Faq({ block }) {
  return (
    <section className={styles.block}>
      <div className="container">
        {block.title && <h2 className={styles.blockTitle}>{block.title}</h2>}
        <div className={styles.faq}>
          {block.items.map((q) => (
            <div className={styles.faqItem} key={q.q}>
              <h3 className={styles.faqQ}>{q.q}</h3>
              <p className={styles.faqA}>{q.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CtaBand({ cta }) {
  if (!cta) return null
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.ctaBand}>
          <span className={styles.ctaGlow} aria-hidden="true" />
          <h2 className={styles.ctaTitle}>{cta.title}</h2>
          {cta.sub && <p className={styles.ctaSub}>{cta.sub}</p>}
          <div className={styles.ctaBtns}>
            <a href={cta.primary?.href || '#start'} data-trial className={styles.ctaPrimary}>
              {cta.primary?.label || 'Start free trial'}<Arrow />
            </a>
            {cta.secondary && (
              <a href={cta.secondary.href} className={styles.ctaGhost}>
                {cta.secondary.label}<Arrow />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function DataFlowBlock({ block }) {
  return <DataCaptureFlow {...block.config} />
}

function LeadCapture({ block }) {
  return (
    <section className={styles.block}>
      <div className={`container ${styles.split} ${block.flip ? styles.flip : ''}`}>
        <div className={styles.splitText}>
          {block.kicker && <span className={styles.kicker}>{block.kicker}</span>}
          <h2 className={styles.blockTitle} style={{ textAlign: 'left', margin: 0 }}>{block.title}</h2>
          {block.body && <p className={styles.splitBody}>{block.body}</p>}
          {block.bullets && (
            <ul className={styles.bullets}>
              {block.bullets.map((bl) => (
                <li key={bl}><span className={styles.tick}><Icon name="check" /></span>{bl}</li>
              ))}
            </ul>
          )}
        </div>
        <div className={styles.splitGraphic}>
          <LeadCaptureGraphic />
        </div>
      </div>
    </section>
  )
}

const BLOCKS = {
  featureGrid: FeatureGrid,
  split: Split,
  steps: Steps,
  stats: Stats,
  cards: Cards,
  prose: Prose,
  faq: Faq,
  testimonials: Testimonials,
  dataflow: DataFlowBlock,
  leadCapture: LeadCapture,
}

export default function MarketingPage({ page }) {
  const hasMedia = !!page.hero?.media
  return (
    <main>
      <section className={`${styles.heroWrap} ${hasMedia ? '' : styles.heroCentered}`}>
        <div className="container">
          <Breadcrumbs items={page.breadcrumb} />
          <div className={`${styles.hero} ${hasMedia ? styles.heroSplit : ''}`}>
            <div className={styles.heroText}>
              {page.hero.eyebrow && <span className={styles.eyebrow}>{page.hero.eyebrow}</span>}
              <h1 className={styles.title}>{page.hero.title}</h1>
              {page.hero.lead && <p className={styles.lead}>{page.hero.lead}</p>}
              <Ctas ctas={page.hero.ctas} />
            </div>
            {hasMedia && (
              <div className={styles.heroMedia}>
                <Media media={page.hero.media} className={styles.heroImg} />
              </div>
            )}
          </div>
        </div>
      </section>

      {(page.blocks || []).map((block, i) => {
        const Cmp = BLOCKS[block.type]
        return Cmp ? <Cmp key={i} block={block} /> : null
      })}

      <CtaBand cta={page.cta} />
    </main>
  )
}
