// Tiered pricing model. [ Replace prices with your real numbers before launch. ]

export const PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    category: 'For small teams getting organised',
    users: '5 users',
    seats: '5 users included',
    price: 14999,
    priceMonthly: 1499,
    tagline: 'For small teams getting organised.',
    popular: false,
    highlight: false,
    featuresHeader: 'Highlights',
    groups: [
      {
        icon: 'sales',
        title: 'Sales and enquiries',
        items: [
          'Enquiry and lead management',
          'Sales pipeline with stages',
          'Contacts and companies',
          'Tasks and reminders',
        ],
      },
      {
        icon: 'billing',
        title: 'Billing',
        items: ['Invoicing and payments', '**GST ready** documents'],
      },
      {
        icon: 'insights',
        title: 'Insights',
        items: ['Reports and dashboards'],
      },
      {
        icon: 'support',
        title: 'Support',
        items: ['Email support', 'Free **30 day** trial'],
      },
    ],
    features: [
      'Enquiry & lead management',
      'Sales pipeline',
      'Invoicing & payments',
      'Basic reports',
      'Email support',
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    category: 'For growing teams that forecast',
    users: '10 users',
    seats: '10 users included',
    price: 29999,
    priceMonthly: 2999,
    tagline: 'For growing teams that want to forecast.',
    popular: true,
    highlight: false,
    featuresHeader: 'Everything in Starter, and',
    groups: [
      {
        icon: 'forecast',
        title: 'Decisions',
        items: [
          'Forecasting and projections',
          'Goal and target tracking',
          '**Advanced** analytics',
        ],
      },
      {
        icon: 'money',
        title: 'Operations',
        items: ['Expenses and payroll', 'Inventory and catalog'],
      },
      {
        icon: 'engagement',
        title: 'Engagement',
        items: ['**WhatsApp** engagement', 'Marketing campaigns'],
      },
      {
        icon: 'support',
        title: 'Support',
        items: ['**Priority** support'],
      },
    ],
    features: [
      'Everything in Starter',
      'Forecasting & projections',
      'Expenses & payroll',
      'WhatsApp engagement',
      'Advanced analytics',
      'Priority support',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    category: 'For established businesses at scale',
    users: 'Unlimited users',
    seats: 'Unlimited users',
    price: 59999,
    priceMonthly: 5999,
    tagline: 'For established businesses at scale.',
    popular: false,
    highlight: true,
    featuresHeader: 'Everything in Growth, and',
    groups: [
      {
        icon: 'scale',
        title: 'Scale',
        items: ['**Unlimited** users', 'Custom roles and permissions'],
      },
      {
        icon: 'security',
        title: 'Security',
        items: ['Data vault and **hourly backups**', 'Audit logs'],
      },
      {
        icon: 'platform',
        title: 'Platform',
        items: ['**API access** and integrations', 'Single sign on'],
      },
      {
        icon: 'support',
        title: 'Support',
        items: ['**Dedicated** account manager'],
      },
    ],
    features: [
      'Everything in Growth',
      'Unlimited users',
      'Data vault & hourly backups',
      'Audit logs & API access',
      'Dedicated account manager',
    ],
  },
]

// Feature comparison matrix. values map to [Starter, Growth, Enterprise].
// true → included, false → not included, string → specific value.
export const COMPARISON = [
  {
    group: 'Plan',
    rows: [
      { label: 'Users included', values: ['5', '10', 'Unlimited'] },
      { label: 'Price per year', values: ['₹14,999', '₹29,999', '₹59,999'] },
      { label: 'Free 30-day trial', values: [true, true, true] },
    ],
  },
  {
    group: 'Core CRM',
    rows: [
      { label: 'Enquiry & lead management', values: [true, true, true] },
      { label: 'Sales pipeline', values: [true, true, true] },
      { label: 'Contacts & companies', values: [true, true, true] },
      { label: 'Tasks & reminders', values: [true, true, true] },
      { label: 'Invoicing & payments', values: [true, true, true] },
    ],
  },
  {
    group: 'Decisions',
    rows: [
      { label: 'Reports & analytics', values: ['Basic', 'Advanced', 'Advanced'] },
      { label: 'Forecasting (3 / 6 / 12 mo)', values: [false, true, true] },
      { label: 'Expenses & payroll', values: [false, true, true] },
      { label: 'Inventory & catalog', values: [false, true, true] },
    ],
  },
  {
    group: 'Engagement',
    rows: [
      { label: 'WhatsApp engagement', values: [false, true, true] },
      { label: 'Marketing campaigns', values: [false, true, true] },
    ],
  },
  {
    group: 'Security & scale',
    rows: [
      { label: 'Role based access', values: [true, true, true] },
      { label: 'Audit logs', values: [false, true, true] },
      { label: 'API & integrations', values: [false, true, true] },
      { label: 'Data vault & hourly backups', values: [false, false, true] },
    ],
  },
  {
    group: 'Support',
    rows: [
      {
        label: 'Support',
        values: ['Email', 'Priority', 'Dedicated manager'],
      },
    ],
  },
]
