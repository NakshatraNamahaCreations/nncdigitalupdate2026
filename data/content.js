// ============================================================
// Single source of truth for ALL site copy. No "AI agent" / "agentic" language.
// [ ] marks values to replace with real data before launch.
// ============================================================

export const nav = {
  brand: 'NNC CRM',
  links: [
    { label: 'Features', href: '/features' },
    { label: 'Industries', href: '/industries' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'FAQ', href: '/#faq' },
  ],
  signIn: { label: 'Sign in', href: '#' },
  cta: { label: 'Start free trial', href: '/#start' },
}

export const hero = {
  eyebrow: 'The decision-making CRM',
  titlePre: "India's ",
  titleNavy: 'most trusted',
  titlePost: ' CRM, for every industry.',
  leadStrong: 'One price for your whole team.',
  lead: "Choose a plan by team size: 5, 10 or unlimited users, with sales pipeline, forecasting, enquiries and WhatsApp built in. NNC turns last month's numbers into a clear 3, 6 and 12 month forecast, so you always know your next move.",
  ctas: [
    { label: 'Start free trial', href: '#start', variant: 'primary' },
    { label: 'See a live forecast', href: '#decide', variant: 'ghost' },
  ],
  chips: [
    'Plans for every team size',
    'One simple yearly price',
    'Free for 30 days',
  ],
  card: {
    title: 'Business outlook — [Month Year]',
    kpis: [
      { label: 'Last month', value: '[₹8,42,000]', delta: '6.4% vs expected', dir: 'up' },
      { label: 'This month (exp.)', value: '[₹9,10,000]', delta: 'on track', dir: 'up' },
      { label: 'Net margin', value: '[22.5%]', delta: '1.8 pts', dir: 'up' },
    ],
  },
}

export const uspStrip = [
  {
    no: '01',
    title: 'One price for your whole team',
    body: 'Pick a plan by team size — 5, 10 or unlimited users. Every plan includes the core CRM, with no per-seat math and no surprises.',
  },
  {
    no: '02',
    title: 'It thinks ahead, not behind',
    body: 'Most CRMs file away your past. NNC reads it and projects your next quarter, half-year and year.',
  },
  {
    no: '03',
    title: 'Your data, locked down',
    body: 'Encrypted, backed up, access-controlled. Your numbers stay yours.',
  },
]

export const decisions = {
  eyebrow: 'Decisions, not data dumps',
  title: 'Know your next move before the month does.',
  lead: 'NNC turns the numbers you already have into the answer you actually need: where is this business going, and what should I do about it now?',
  bullets: [
    ['Last month vs expected', 'See actual sales against your forecast — and why the gap exists.'],
    ['3, 6 & 12-month projections', 'A realistic outlook for revenue, built from your own trend.'],
    ['Where the money goes', 'Salaries, operating costs and other expenses, side by side with income.'],
  ],
  projections: [
    { label: '3 months', value: '[₹29.4L]', delta: '11%' },
    { label: '6 months', value: '[₹63.8L]', delta: '18%' },
    { label: '12 months', value: '[₹1.42Cr]', delta: '27%' },
  ],
  expense: {
    title: 'Last month — where it went',
    total: '[₹6,52,000]',
    segments: [
      { label: 'Salaries', pct: 46 },
      { label: 'Operating', pct: 27 },
      { label: 'Marketing', pct: 15 },
      { label: 'Other', pct: 12 },
    ],
  },
  kpis: [
    { label: 'Income', value: '[₹8.42L]' },
    { label: 'Expenses', value: '[₹6.52L]' },
    { label: 'Net', value: '[₹1.90L]', pos: true },
  ],
}

export const pricing = {
  eyebrow: 'Pricing',
  title: 'Plans and pricing for every business',
  lead: 'Every plan includes the core CRM. Bigger plans unlock forecasting, WhatsApp and deeper analytics.',
  note: 'Prices are billed yearly. GST extra. Cancel anytime.',
  compareLabel: 'Compare all features',
}

export const enquiries = {
  eyebrow: 'Enquiries',
  title: 'Every enquiry caught. None forgotten.',
  lead: 'From the first "how much?" to the closed deal, NNC keeps every enquiry in one place — captured from your website, WhatsApp, calls and walk-ins, then moved through your pipeline automatically. You always know what\'s hot, what\'s slipping, and what to chase today.',
  cta: { label: 'Start free trial', href: '#start', variant: 'ghost' },
  pipeline: [
    { stage: 'New', count: 38, pct: 90 },
    { stage: 'Contacted', count: 24, pct: 64 },
    { stage: 'Quoted', count: 16, pct: 42 },
    { stage: 'Negotiating', count: 9, pct: 24 },
    { stage: 'Won', count: 6, pct: 16, pos: true },
  ],
}

export const dataSafety = {
  eyebrow: 'Data safety',
  title: 'Your business runs on this data. We treat it that way.',
  lead: 'Every number, contact and enquiry inside NNC is encrypted, backed up and access-controlled. You decide who sees what — we make sure no one else does.',
  cards: [
    ['Encrypted end to end', "Data is encrypted in transit and at rest, so it's unreadable to anyone but you.", 'lock'],
    ['Automatic backups', 'Daily backups mean a wrong click or a lost device never costs you your records.', 'backup'],
    ['Role-based access', 'Give each person exactly the access they need — and nothing they don\'t.', 'roles'],
    ['Full audit trail', 'See who viewed, changed or exported anything, anytime. Total accountability.', 'audit'],
  ],
}

export const whatsapp = {
  eyebrow: 'WhatsApp chatbot',
  title: 'It qualifies leads while you sleep.',
  lead: 'Customers message you on WhatsApp — the NNC assistant asks the right five questions, understands the business, and hands you a qualified lead with a recommended plan. No forms, no waiting.',
  steps: [
    'Greets every customer who messages your business number.',
    'Asks five quick questions to understand who they are.',
    'Reads the answers and works out what they need.',
    'Builds a recommended plan with a yearly price.',
    'Hands you a qualified lead, ready to close.',
  ],
  cta: { label: 'Start free trial', href: '#start', variant: 'primary' },
}

export const faq = {
  eyebrow: 'FAQ',
  title: 'NNC CRM, answered.',
  items: [
    {
      q: 'How is NNC different from other CRMs?',
      a: "Two ways. First, you pick a simple plan by team size (5, 10 or unlimited users) for one yearly price, instead of paying per seat or buying a bloated all in one. Second, NNC doesn't just store your past; it reads your numbers and projects where your business is heading over the next 3, 6 and 12 months.",
    },
    {
      q: 'Can I change plans as I grow?',
      a: 'Yes. Start on any plan and upgrade as your team grows. Your data carries over instantly and you only pay the difference. Bigger plans add forecasting, WhatsApp, more users and advanced security.',
    },
    {
      q: 'How does the forecasting work?',
      a: "NNC looks at your real sales, enquiries and expense history and builds a realistic projection, including last month's actual vs expected, and where your money went across salaries, operating costs and other expenses.",
    },
    {
      q: 'Is my business data safe?',
      a: 'Your data is encrypted in transit and at rest, backed up daily, and protected by role based access and a full audit trail. You control who sees what.',
    },
    {
      q: "What's the WhatsApp chatbot for?",
      a: 'It greets customers who message you, asks five quick questions to understand their business, and hands you a qualified lead with a recommended plan, automatically, around the clock.',
    },
  ],
}

export const finalCta = {
  title: 'Build the CRM your business actually needs.',
  sub: "Choose your plan, start your free trial, and run your business on what's next, not what's already happened.",
  ctas: [
    { label: 'Start free trial', href: '#start', variant: 'invert-primary' },
    { label: 'Try the WhatsApp demo', href: '#whatsapp', variant: 'invert-ghost' },
  ],
  // placeholder trust figures, replace with your real numbers before launch
  stats: [
    { value: '2,000+', label: 'businesses across India' },
    { value: '4.8 / 5', label: 'average customer rating' },
    { value: '30 days', label: 'free trial, no card needed' },
  ],
}

export const footer = {
  brandLine: 'The decision making CRM for every industry.',
  contactLabel: 'Get in touch',
  phone: '94227 99466',
  email: 'hello@nncdigital.co.in',
  columns: [
    {
      title: 'Product',
      links: [
        'Features',
        'Enquiries',
        'Sales pipeline',
        'Forecasting',
        'Invoicing and payments',
        'WhatsApp engagement',
        'Reports and analytics',
        'Pricing',
        'Integrations',
      ],
    },
    {
      title: 'Industries',
      links: [
        'Sales teams',
        'Service businesses',
        'Manufacturing',
        'Retail and distribution',
        'Healthcare',
        'Education',
        'Real estate',
      ],
    },
    {
      title: 'Company',
      links: [
        'About us',
        'Careers',
        'Blog',
        'Partners',
        'Customer stories',
        'Contact sales',
        'Press',
      ],
    },
    {
      title: 'Support',
      links: [
        'Help center',
        'Getting started',
        'API documentation',
        'System status',
        'Security',
        'Data privacy',
        'Contact support',
      ],
    },
  ],
  social: ['linkedin', 'x', 'youtube', 'facebook', 'instagram'],
  copyright: '© 2026 NNC Digital Solutions, Inc. All rights reserved.',
  madeIn: 'Made in India',
  legal: [
    'Terms',
    'Privacy',
    'Trust Center',
    'Acceptable Use',
    'Legal and Compliance',
    'Cookie Settings',
    'Site Map',
  ],
}
