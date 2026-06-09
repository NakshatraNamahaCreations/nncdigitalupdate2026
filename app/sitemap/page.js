import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs'
import { CATEGORIES, FEATURES_OVERVIEW, INDUSTRIES_OVERVIEW } from '@/data/pages'
import styles from './sitemap.module.css'

export const metadata = {
  title: 'Site Map | NNC CRM',
  description: 'All pages on the NNC CRM website.',
}

const label = (cat, slug) => CATEGORIES[cat][slug].breadcrumb.at(-1).label
const links = (cat) => Object.keys(CATEGORIES[cat]).map((slug) => ({ href: `/${cat}/${slug}`, label: label(cat, slug) }))

const GROUPS = [
  { title: 'Product', items: [{ href: '/features', label: 'Features overview' }, ...links('features'), { href: '/pricing', label: 'Pricing' }] },
  { title: 'Industries', items: [{ href: '/industries', label: 'Industries overview' }, ...links('industries'), { href: '/multi-center-training-institutes-crm', label: 'Training institutes & coaching CRM' }] },
  { title: 'Company', items: links('company') },
  { title: 'Support', items: links('support') },
  { title: 'Legal', items: links('legal') },
]

export default function SiteMapPage() {
  return (
    <main className={styles.page}>
      <div className="container">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Site Map' }]} />
        <h1 className={styles.title}>Site Map</h1>
        <p className={styles.lead}>Every page on the NNC CRM website, in one place.</p>

        <div className={styles.grid}>
          {GROUPS.map((g) => (
            <nav key={g.title} className={styles.col} aria-label={g.title}>
              <h2 className={styles.colTitle}>{g.title}</h2>
              {g.items.map((it) => (
                <a key={it.href} href={it.href} className={styles.link}>
                  {it.label}
                </a>
              ))}
            </nav>
          ))}
        </div>
      </div>
    </main>
  )
}
