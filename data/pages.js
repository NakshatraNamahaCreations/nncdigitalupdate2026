// Content for every marketing / company / support / legal page.
// Each page: { metaTitle, metaDescription, breadcrumb[], hero{}, blocks[], cta{} }

const HOME = { label: 'Home', href: '/' }
const img = (src, alt) => ({ type: 'image', src, alt })
const startCta = {
  title: 'Run your business on what is next',
  sub: 'Start your free 30 day trial. No credit card required, cancel anytime.',
  primary: { label: 'Start free trial', href: '#start' },
  secondary: { label: 'See pricing', href: '/pricing' },
}
const heroCtas = [
  { label: 'Start free trial', href: '#start', trial: true },
  { label: 'See pricing', href: '/pricing', variant: 'ghost' },
]

/* ============================ INDUSTRIES ============================ */
const industriesCrumb = { label: 'Industries', href: '/industries' }
const ind = (slug, o) => ({
  metaTitle: `${o.name} CRM | NNC CRM`,
  metaDescription: o.lead,
  breadcrumb: [HOME, industriesCrumb, { label: o.name }],
  hero: { eyebrow: 'Industries', title: o.title, lead: o.lead, ctas: heroCtas, media: img(o.img, o.name) },
  blocks: [
    { type: 'split', kicker: 'The problem', title: o.splitTitle, body: o.splitBody, bullets: o.bullets, media: img(o.img2 || o.img, o.name) },
    { type: 'featureGrid', title: `Built for ${o.name.toLowerCase()}`, items: o.features },
    { type: 'stats', items: o.stats || [
      { value: '30 days', label: 'free trial on every plan' },
      { value: '1 day', label: 'typical setup time' },
      { value: '24x7', label: 'WhatsApp and email support' },
    ] },
  ],
  cta: startCta,
})

export const INDUSTRIES = {
  'sales-teams': ind('sales-teams', {
    name: 'Sales teams', title: 'A CRM that helps sales teams close faster',
    lead: 'Capture every lead, see your whole pipeline, and chase the deals most likely to close, all in one place.',
    img: '/img/case-sales.jpg', img2: '/img/scene-deal.jpg',
    splitTitle: 'Stop losing deals in spreadsheets and chat threads',
    splitBody: 'When leads live in notebooks, inboxes and WhatsApp, deals go cold. NNC keeps every opportunity in one pipeline your whole team can see.',
    bullets: ['Every lead captured from web, WhatsApp, calls and walk ins', 'One pipeline the whole team can see', 'Reminders so no follow up ever slips'],
    features: [
      { icon: 'pipeline', title: 'Visual pipeline', body: 'Move deals through stages and always know what to chase next.' },
      { icon: 'forecast', title: 'Sales forecasts', body: 'See expected revenue for the next 3, 6 and 12 months.' },
      { icon: 'whatsapp', title: 'WhatsApp selling', body: 'Reach buyers where they reply, right from the deal.' },
    ],
  }),
  'service-businesses': ind('service-businesses', {
    name: 'Service businesses', title: 'Run clients, projects and payments in one CRM',
    lead: 'From the first enquiry to the final invoice, keep every client, project and payment connected.',
    img: '/img/case-services.jpg', img2: '/img/scene-support.jpg',
    splitTitle: 'One place for clients, work and money',
    splitBody: 'Service teams juggle enquiries, delivery and billing across tools. NNC ties them together so nothing falls between the cracks.',
    bullets: ['Track every client and project in one view', 'Turn approved work into invoices in a click', 'See what is owed and what is overdue'],
    features: [
      { icon: 'enquiries', title: 'Client enquiries', body: 'Capture and qualify new work the moment it comes in.' },
      { icon: 'invoice', title: 'Invoicing', body: 'Raise GST ready invoices and track payments in one place.' },
      { icon: 'reports', title: 'Profit reports', body: 'Know which clients and services actually make money.' },
    ],
  }),
  manufacturing: ind('manufacturing', {
    name: 'Manufacturing', title: 'Connect orders, dispatch and payments',
    lead: 'Manage enquiries, quotations, orders and collections across your whole operation, end to end.',
    img: '/img/case-mfg.jpg', img2: '/img/scene-office.jpg',
    splitTitle: 'From enquiry to dispatch, without the chaos',
    splitBody: 'Quotes in one tool, orders in another, payments in a third. NNC brings the full order to cash cycle into a single system.',
    bullets: ['Quotations and orders linked to every buyer', 'Dispatch and inventory in sync', 'Collections and outstanding tracked automatically'],
    features: [
      { icon: 'pipeline', title: 'Order pipeline', body: 'Track every order from quote to dispatch to payment.' },
      { icon: 'invoice', title: 'Billing and GST', body: 'Generate compliant invoices and e way documents fast.' },
      { icon: 'reports', title: 'Production view', body: 'See pending orders, dispatch load and dues at a glance.' },
    ],
  }),
  retail: ind('retail', {
    name: 'Retail and distribution', title: 'A CRM for retail and distribution',
    lead: 'Keep customers, orders and repeat business in one place, from the counter to the warehouse.',
    img: '/img/scene-mobile.jpg', img2: '/img/scene-data.jpg',
    splitTitle: 'Turn one time buyers into regulars',
    splitBody: 'Walk in, phone, WhatsApp or online, NNC captures every customer and order so you can bring them back again and again.',
    bullets: ['Every customer and order in one profile', 'WhatsApp offers and reorder reminders', 'Stock and catalog connected to sales'],
    features: [
      { icon: 'retail', title: 'Customer profiles', body: 'A full history of what each customer buys and when.' },
      { icon: 'whatsapp', title: 'WhatsApp campaigns', body: 'Send offers and festival greetings that drive reorders.' },
      { icon: 'reports', title: 'Sales analytics', body: 'See best sellers, slow movers and top customers.' },
    ],
  }),
  healthcare: ind('healthcare', {
    name: 'Healthcare and clinics', title: 'A CRM for clinics and healthcare',
    lead: 'Manage patients, appointments and follow ups with care, all in one organised system.',
    img: '/img/scene-people.jpg', img2: '/img/scene-support.jpg',
    splitTitle: 'Never miss a follow up again',
    splitBody: 'Appointments in a diary, patients in a register, reminders in your head. NNC brings it together so patients always come back on time.',
    bullets: ['Patient records and history in one place', 'Appointment and follow up reminders on WhatsApp', 'Payments and packages tracked per patient'],
    features: [
      { icon: 'enquiries', title: 'Patient enquiries', body: 'Capture every new patient enquiry and convert more of them.' },
      { icon: 'whatsapp', title: 'Reminders', body: 'Automatic appointment and follow up reminders.' },
      { icon: 'security', title: 'Private and safe', body: 'Role based access keeps patient data protected.' },
    ],
  }),
  education: ind('education', {
    name: 'Education', title: 'A CRM for coaching and education',
    lead: 'Track admissions enquiries, follow up with parents and manage fees, all in one place.',
    img: '/img/scene-team.jpg', img2: '/img/scene-dashboard.jpg',
    splitTitle: 'Convert more admission enquiries',
    splitBody: 'Enquiries come from ads, referrals and walk ins, then go cold without follow up. NNC keeps every prospective student warm until they join.',
    bullets: ['Every admission enquiry captured and assigned', 'Follow up reminders for counsellors', 'Fees and instalments tracked per student'],
    features: [
      { icon: 'enquiries', title: 'Admissions pipeline', body: 'Move every enquiry from interested to enrolled.' },
      { icon: 'whatsapp', title: 'Parent updates', body: 'Send reminders and updates to parents on WhatsApp.' },
      { icon: 'invoice', title: 'Fee management', body: 'Track fees, instalments and dues without spreadsheets.' },
    ],
  }),
  'real-estate': ind('real-estate', {
    name: 'Real estate', title: 'A CRM built for real estate',
    lead: 'Capture leads, schedule site visits and track bookings from first call to final close.',
    img: '/img/scene-office.jpg', img2: '/img/scene-deal.jpg',
    splitTitle: 'Follow every lead to the close',
    splitBody: 'Property leads are expensive and easy to lose. NNC makes sure every enquiry gets a site visit, a follow up and a fair shot at closing.',
    bullets: ['Leads captured from portals, ads and referrals', 'Site visits scheduled and reminded', 'Bookings and payment milestones tracked'],
    features: [
      { icon: 'pipeline', title: 'Lead pipeline', body: 'See every lead by stage, project and budget.' },
      { icon: 'whatsapp', title: 'Instant follow up', body: 'Respond on WhatsApp while the lead is still hot.' },
      { icon: 'forecast', title: 'Booking forecast', body: 'Project bookings and revenue across your projects.' },
    ],
  }),
}

/* ============================ FEATURES ============================ */
const featuresCrumb = { label: 'Features', href: '/features' }
const feat = (o) => ({
  metaTitle: `${o.name} | NNC CRM`,
  metaDescription: o.lead,
  breadcrumb: [HOME, featuresCrumb, { label: o.name }],
  hero: { eyebrow: 'Product', title: o.title, lead: o.lead, ctas: heroCtas, media: img(o.img, o.name) },
  blocks: [
    { type: 'featureGrid', title: o.gridTitle || `What you get with ${o.name.toLowerCase()}`, items: o.features },
    o.split && { type: 'split', flip: true, kicker: o.split.kicker || 'How it helps', title: o.split.title, body: o.split.body, bullets: o.split.bullets, media: img(o.img2 || o.img, o.name) },
  ].filter(Boolean),
  cta: startCta,
})

export const FEATURES = {
  enquiries: feat({
    name: 'Enquiries', title: 'Catch every enquiry, forget none',
    lead: 'Capture enquiries from your website, WhatsApp, calls and walk ins, then move each one through your pipeline automatically.',
    img: '/img/feat-enquiries.jpg', img2: '/img/scene-office.jpg',
    features: [
      { icon: 'enquiries', title: 'Capture everywhere', body: 'Web forms, WhatsApp, calls and walk ins, all into one inbox.' },
      { icon: 'pipeline', title: 'Auto assign', body: 'Route each enquiry to the right person instantly.' },
      { icon: 'clock', title: 'Never go cold', body: 'Reminders keep every enquiry moving until it closes.' },
    ],
    split: { title: 'Know what is hot and what is slipping', body: 'A single view of every enquiry means you always know what to chase today.', bullets: ['Source tracking for every enquiry', 'Stages tailored to your business', 'Daily follow up list for your team'] },
  }),
  'sales-pipeline': feat({
    name: 'Sales pipeline', title: 'See your whole pipeline at a glance',
    lead: 'A visual pipeline that shows every deal, its stage and its value, so you always know where revenue is coming from.',
    img: '/img/scene-dashboard.jpg', img2: '/img/scene-deal.jpg',
    features: [
      { icon: 'pipeline', title: 'Drag and drop', body: 'Move deals through stages in a single click.' },
      { icon: 'reports', title: 'Weighted value', body: 'See expected revenue by stage and probability.' },
      { icon: 'users', title: 'Team view', body: 'Track performance across every rep and region.' },
    ],
  }),
  forecasting: feat({
    name: 'Forecasting', title: 'Decisions backed by real numbers',
    lead: 'Project revenue, cash and growth for the next 3, 6 and 12 months using your own live data.',
    img: '/img/feat-forecast.jpg', img2: '/img/scene-planning.jpg',
    features: [
      { icon: 'forecast', title: 'Revenue forecast', body: 'See where you are headed, not just where you have been.' },
      { icon: 'reports', title: 'Scenario planning', body: 'Compare best case and worst case in seconds.' },
      { icon: 'clock', title: 'Always current', body: 'Forecasts update automatically as deals change.' },
    ],
  }),
  invoicing: feat({
    name: 'Invoicing and payments', title: 'From deal won to payment received',
    lead: 'Raise GST ready invoices, share them on WhatsApp and track every payment, all from the same CRM.',
    img: '/img/scene-data.jpg', img2: '/img/scene-office.jpg',
    features: [
      { icon: 'invoice', title: 'GST ready invoices', body: 'Compliant invoices in seconds, no extra software.' },
      { icon: 'whatsapp', title: 'Share and remind', body: 'Send invoices and gentle reminders on WhatsApp.' },
      { icon: 'reports', title: 'Track dues', body: 'Always know what is paid, pending and overdue.' },
    ],
  }),
  whatsapp: feat({
    name: 'WhatsApp engagement', title: 'Reach customers where they reply',
    lead: 'Send updates, offers and reminders on WhatsApp, and turn conversations into deals without leaving your CRM.',
    img: '/img/feat-whatsapp.jpg', img2: '/img/scene-mobile.jpg',
    features: [
      { icon: 'whatsapp', title: 'Two way chat', body: 'Reply to customers right from the contact record.' },
      { icon: 'enquiries', title: 'Capture leads', body: 'Turn every WhatsApp enquiry into a tracked lead.' },
      { icon: 'reports', title: 'Campaigns', body: 'Broadcast offers and measure what works.' },
    ],
  }),
  reports: feat({
    name: 'Reports and analytics', title: 'Know where your business stands',
    lead: 'Live dashboards and reports that turn your CRM data into decisions you can act on today.',
    img: '/img/scene-data.jpg', img2: '/img/scene-dashboard.jpg',
    features: [
      { icon: 'reports', title: 'Live dashboards', body: 'Sales, collections and growth at a glance.' },
      { icon: 'forecast', title: 'Trends', body: 'Spot what is rising and what is slowing early.' },
      { icon: 'users', title: 'Team scorecards', body: 'See who is performing and who needs help.' },
    ],
  }),
  integrations: feat({
    name: 'Integrations', title: 'Works with the tools you already use',
    lead: 'Connect WhatsApp, Gmail, Razorpay, Tally, Shopify and more, so your data flows without double entry.',
    img: '/img/scene-planning.jpg', img2: '/img/scene-team.jpg',
    features: [
      { icon: 'integrations', title: 'Plug and play', body: 'Turn on the tools you use in a few clicks.' },
      { icon: 'invoice', title: 'Accounting', body: 'Sync invoices and payments with Tally and Razorpay.' },
      { icon: 'api', title: 'Open API', body: 'Build custom connections with our developer API.' },
    ],
  }),
}

/* ============================ COMPANY ============================ */
const companyCrumb = { label: 'Company', href: '/company/about' }
const cb = (label, o) => ({ metaTitle: `${label} | NNC CRM`, metaDescription: o.lead, breadcrumb: [HOME, companyCrumb, { label }] })

export const COMPANY = {
  about: {
    ...cb('About us', { lead: 'We build the decision making CRM for Indian businesses.' }),
    hero: { eyebrow: 'Company', title: 'We help Indian businesses decide with confidence', lead: 'NNC CRM started with a simple belief: every business, big or small, deserves a clear view of what is next, not just what already happened.', ctas: heroCtas, media: img('/img/scene-team.jpg', 'Our team') },
    blocks: [
      { type: 'stats', items: [ { value: '2,000+', label: 'businesses across India' }, { value: '15', label: 'industries served' }, { value: '4.8 / 5', label: 'average customer rating' } ] },
      { type: 'featureGrid', title: 'What we stand for', items: [
        { icon: 'forecast', title: 'Clarity', body: 'Plain numbers and clear views, no jargon, no clutter.' },
        { icon: 'users', title: 'Every business', body: 'Built for the corner shop and the factory floor alike.' },
        { icon: 'security', title: 'Trust', body: 'Your data is private, secure and always yours.' },
      ] },
    ],
    cta: startCta,
  },
  careers: {
    ...cb('Careers', { lead: 'Join us and help Indian businesses grow.' }),
    hero: { eyebrow: 'Careers', title: 'Build the CRM India runs on', lead: 'We are a small, focused team that ships fast and cares deeply about our customers. Come build with us.', ctas: [{ label: 'See open roles', href: '#roles', variant: 'ghost' }], media: img('/img/scene-people.jpg', 'Careers') },
    blocks: [
      { type: 'featureGrid', title: 'Why work here', items: [
        { icon: 'rocket', title: 'Real impact', body: 'Your work reaches thousands of businesses every day.' },
        { icon: 'users', title: 'Small team', body: 'Ownership from day one, no layers, no red tape.' },
        { icon: 'globe', title: 'Flexible', body: 'Work from anywhere in India with a results first culture.' },
      ] },
      { type: 'cards', title: 'Open roles', lead: 'We are always looking for talented people. Do not see your role? Write to us.', items: [
        { icon: 'pipeline', title: 'Product Engineer', body: 'Full stack engineer to build core CRM features. Remote, India.' },
        { icon: 'users', title: 'Customer Success', body: 'Help businesses get the most out of NNC. Remote, India.' },
        { icon: 'reports', title: 'Growth Marketer', body: 'Own demand generation across channels. Remote, India.' },
      ] },
    ],
    cta: { title: 'Want to join us?', sub: 'Send your resume and a note to careers@nncdigital.co.in.', primary: { label: 'Email careers', href: 'mailto:careers@nncdigital.co.in' } },
  },
  blog: {
    ...cb('Blog', { lead: 'Ideas on sales, CRM and running a better business.' }),
    hero: { eyebrow: 'Blog', title: 'Notes on growth, sales and CRM', lead: 'Practical playbooks and product updates to help you run your business on what is next.', ctas: [], media: img('/img/scene-planning.jpg', 'Blog') },
    blocks: [
      { type: 'cards', title: 'Latest articles', items: [
        { icon: 'forecast', title: 'How to forecast revenue with a CRM', body: 'A simple framework to project the next quarter using live pipeline data.', href: '#' },
        { icon: 'whatsapp', title: 'WhatsApp selling that does not annoy', body: 'Five ways to use WhatsApp to win deals without spamming customers.', href: '#' },
        { icon: 'pipeline', title: 'Build a pipeline your team will use', body: 'Design sales stages that match how your business actually sells.', href: '#' },
      ] },
    ],
    cta: startCta,
  },
  partners: {
    ...cb('Partners', { lead: 'Grow with NNC as an implementation or referral partner.' }),
    hero: { eyebrow: 'Partners', title: 'Partner with NNC CRM', lead: 'Help businesses in your network adopt NNC and earn as they grow. Join our partner program.', ctas: [{ label: 'Become a partner', href: '#start', trial: true }], media: img('/img/scene-deal.jpg', 'Partners') },
    blocks: [
      { type: 'featureGrid', title: 'Ways to partner', items: [
        { icon: 'partners', title: 'Referral partner', body: 'Refer businesses and earn recurring commission.' },
        { icon: 'service', title: 'Implementation', body: 'Set up and customise NNC for local businesses.' },
        { icon: 'api', title: 'Technology', body: 'Build integrations on our open API.' },
      ] },
    ],
    cta: { title: 'Ready to partner?', sub: 'Tell us about your business and we will be in touch.', primary: { label: 'Contact our team', href: 'mailto:partners@nncdigital.co.in' } },
  },
  customers: {
    ...cb('Customer stories', { lead: 'See how businesses grow with NNC CRM.' }),
    hero: { eyebrow: 'Customers', title: 'Businesses growing with NNC', lead: 'From factories to clinics, see how teams use NNC to capture more, forecast better and close faster.', ctas: heroCtas, media: img('/img/scene-growth.jpg', 'Customers') },
    blocks: [
      { type: 'stats', items: [ { value: '32%', label: 'more enquiries converted on average' }, { value: '5 hrs', label: 'saved per rep each week' }, { value: '2x', label: 'faster follow up response' } ] },
      { type: 'cards', title: 'Customer stories', items: [
        { icon: 'manufacturing', title: 'A manufacturer cut dues by half', body: 'How a mid size unit brought order to cash under control with NNC.', href: '#' },
        { icon: 'retail', title: 'A retailer doubled repeat sales', body: 'Using WhatsApp campaigns to bring customers back every month.', href: '#' },
        { icon: 'realestate', title: 'A builder closed 30% more', body: 'Faster follow up turned cold property leads into bookings.', href: '#' },
      ] },
    ],
    cta: startCta,
  },
  contact: {
    ...cb('Contact sales', { lead: 'Talk to our team about NNC CRM.' }),
    hero: { eyebrow: 'Contact', title: 'Talk to our team', lead: 'Questions about plans, setup or whether NNC fits your business? We are happy to help.', ctas: [{ label: 'Start free trial', href: '#start', trial: true }], media: img('/img/scene-support.jpg', 'Contact') },
    blocks: [
      { type: 'cards', title: 'Ways to reach us', items: [
        { icon: 'phone', title: 'Call us', body: '94227 99466, Monday to Saturday, 10am to 7pm.' },
        { icon: 'mail', title: 'Email us', body: 'hello@nncdigital.co.in, we reply within one business day.' },
        { icon: 'whatsapp', title: 'WhatsApp', body: 'Message us on WhatsApp for a quick response.' },
      ] },
    ],
    cta: startCta,
  },
  press: {
    ...cb('Press', { lead: 'News and media resources for NNC CRM.' }),
    hero: { eyebrow: 'Press', title: 'Press and media', lead: 'For interviews, logos and media enquiries, get in touch with our team.', ctas: [{ label: 'Email press', href: 'mailto:press@nncdigital.co.in', variant: 'ghost' }], media: img('/img/scene-office.jpg', 'Press') },
    blocks: [
      { type: 'cards', title: 'Media resources', items: [
        { icon: 'press', title: 'Press kit', body: 'Logos, brand assets and product screenshots.', href: '#' },
        { icon: 'book', title: 'Company facts', body: 'Key facts and milestones about NNC CRM.', href: '#' },
        { icon: 'mail', title: 'Media contact', body: 'Reach our communications team directly.', href: 'mailto:press@nncdigital.co.in' },
      ] },
    ],
    cta: startCta,
  },
}

/* ============================ SUPPORT ============================ */
const supportCrumb = { label: 'Support', href: '/support/help-center' }
const sb = (label, o) => ({ metaTitle: `${label} | NNC CRM`, metaDescription: o.lead, breadcrumb: [HOME, supportCrumb, { label }] })

export const SUPPORT = {
  'help-center': {
    ...sb('Help center', { lead: 'Guides and answers for NNC CRM.' }),
    hero: { eyebrow: 'Support', title: 'How can we help?', lead: 'Browse guides, answers and tips to get the most out of NNC CRM.', ctas: [{ label: 'Contact support', href: '/support/contact', variant: 'ghost' }] },
    blocks: [
      { type: 'cards', title: 'Browse by topic', items: [
        { icon: 'rocket', title: 'Getting started', body: 'Set up your account, team and pipeline.', href: '/support/getting-started' },
        { icon: 'enquiries', title: 'Enquiries and leads', body: 'Capture, assign and follow up on enquiries.', href: '#' },
        { icon: 'invoice', title: 'Billing and payments', body: 'Invoices, GST and tracking payments.', href: '#' },
        { icon: 'whatsapp', title: 'WhatsApp', body: 'Connect WhatsApp and run campaigns.', href: '/features/whatsapp' },
        { icon: 'api', title: 'Developers', body: 'Use the NNC API and webhooks.', href: '/support/api' },
        { icon: 'security', title: 'Security and privacy', body: 'Keep your account and data safe.', href: '/support/security' },
      ] },
    ],
    cta: { title: 'Still need a hand?', sub: 'Our team is here Monday to Saturday.', primary: { label: 'Contact support', href: '/support/contact' } },
  },
  'getting-started': {
    ...sb('Getting started', { lead: 'Set up NNC CRM in minutes.' }),
    hero: { eyebrow: 'Support', title: 'Get up and running in minutes', lead: 'Four quick steps to set up NNC and start capturing every enquiry today.', ctas: [{ label: 'Start free trial', href: '#start', trial: true }] },
    blocks: [
      { type: 'steps', title: 'Your first day with NNC', items: [
        { title: 'Create your account', body: 'Sign up in seconds, no credit card needed.' },
        { title: 'Invite your team', body: 'Add your people and set their roles.' },
        { title: 'Set up your pipeline', body: 'Choose stages that match how you sell.' },
        { title: 'Capture enquiries', body: 'Connect WhatsApp and your website forms.' },
      ] },
    ],
    cta: startCta,
  },
  api: {
    ...sb('API documentation', { lead: 'Build on the NNC CRM API.' }),
    hero: { eyebrow: 'Developers', title: 'NNC CRM API', lead: 'A clean REST API and webhooks to connect NNC with your own systems.', ctas: [{ label: 'Contact developer support', href: '/support/contact', variant: 'ghost' }] },
    blocks: [
      { type: 'featureGrid', title: 'What you can build', items: [
        { icon: 'api', title: 'REST API', body: 'Read and write leads, deals, contacts and invoices.' },
        { icon: 'integrations', title: 'Webhooks', body: 'Get notified the moment data changes in NNC.' },
        { icon: 'lock', title: 'Secure tokens', body: 'Scoped API keys you can rotate any time.' },
      ] },
      { type: 'prose', sections: [
        { h: 'Getting an API key', p: ['Generate a scoped API key from Settings, then send it as a Bearer token on every request. Keys can be limited to specific data and rotated at any time.'] },
        { h: 'Base URL', p: ['All endpoints are served over HTTPS at https://api.nncdigital.co.in/v1. Requests and responses use JSON.'] },
      ] },
    ],
    cta: { title: 'Building something?', sub: 'Our developer team is happy to help.', primary: { label: 'Contact developer support', href: '/support/contact' } },
  },
  status: {
    ...sb('System status', { lead: 'Live status of NNC CRM services.' }),
    hero: { eyebrow: 'Support', title: 'System status', lead: 'All NNC CRM systems are operational. Subscribe to get notified of any incidents.', ctas: [] },
    blocks: [
      { type: 'cards', title: 'Current status', items: [
        { icon: 'status', title: 'Web app', body: 'Operational, 99.98% uptime in the last 90 days.' },
        { icon: 'api', title: 'API', body: 'Operational, 99.97% uptime in the last 90 days.' },
        { icon: 'whatsapp', title: 'WhatsApp delivery', body: 'Operational, messages delivering normally.' },
      ] },
    ],
    cta: { title: 'Need help with an issue?', sub: 'Reach our support team any time.', primary: { label: 'Contact support', href: '/support/contact' } },
  },
  security: {
    ...sb('Security', { lead: 'How NNC keeps your data safe.' }),
    hero: { eyebrow: 'Trust', title: 'Security you can rely on', lead: 'Your business data is protected with encryption, strict access controls and regular backups.', ctas: [{ label: 'Read our privacy policy', href: '/legal/privacy', variant: 'ghost' }], media: img('/img/scene-dashboard.jpg', 'Security') },
    blocks: [
      { type: 'featureGrid', title: 'How we protect your data', items: [
        { icon: 'lock', title: 'Encrypted', body: 'Data is encrypted in transit and at rest.' },
        { icon: 'users', title: 'Role based access', body: 'People see only what they are allowed to.' },
        { icon: 'security', title: 'Backups', body: 'Automatic hourly backups keep your data safe.' },
      ] },
    ],
    cta: startCta,
  },
  'data-privacy': {
    ...sb('Data privacy', { lead: 'How NNC handles your data.' }),
    hero: { eyebrow: 'Trust', title: 'Your data is yours', lead: 'We collect only what we need to run the service, and we never sell your data.', ctas: [{ label: 'Read privacy policy', href: '/legal/privacy', variant: 'ghost' }] },
    blocks: [
      { type: 'prose', sections: [
        { h: 'Our promise', p: ['You own your data. We process it only to provide NNC CRM to you, and you can export or delete it at any time.'] },
        { h: 'What we collect', p: ['We collect account details, the business data you enter, and usage information that helps us improve the product. We do not sell personal data to anyone.'] },
        { h: 'Your controls', p: ['You can access, export and delete your data from your account settings, or by writing to hello@nncdigital.co.in.'] },
      ] },
    ],
    cta: startCta,
  },
  contact: {
    ...sb('Contact support', { lead: 'Get help from the NNC team.' }),
    hero: { eyebrow: 'Support', title: 'Contact support', lead: 'Our team is here to help you get the most out of NNC CRM.', ctas: [] },
    blocks: [
      { type: 'cards', title: 'Reach us', items: [
        { icon: 'phone', title: 'Call', body: '94227 99466, Monday to Saturday, 10am to 7pm.' },
        { icon: 'mail', title: 'Email', body: 'hello@nncdigital.co.in, replies within one business day.' },
        { icon: 'whatsapp', title: 'WhatsApp', body: 'Message us for a quick response during business hours.' },
      ] },
    ],
    cta: startCta,
  },
}

/* ============================ LEGAL ============================ */
const legalCrumb = { label: 'Legal' }
const legal = (label, intro, sections) => ({
  metaTitle: `${label} | NNC CRM`,
  metaDescription: intro,
  breadcrumb: [HOME, legalCrumb, { label }],
  hero: { eyebrow: 'Legal', title: label, lead: intro },
  blocks: [{ type: 'prose', sections }],
  cta: null,
})

export const LEGAL = {
  terms: legal('Terms of Service', 'The terms that govern your use of NNC CRM. Please read them carefully.', [
    { h: '1. Agreement', p: ['By using NNC CRM you agree to these terms. If you are using the service on behalf of a business, you agree on its behalf.'] },
    { h: '2. Using the service', p: ['You may use NNC CRM only in line with these terms and applicable law. You are responsible for the activity in your account and for keeping your login secure.'] },
    { h: '3. Plans and billing', p: ['Paid plans are billed in advance for the period you choose. Prices are shown exclusive of GST. You can cancel at any time and your plan will run until the end of the paid period.'] },
    { h: '4. Your data', p: ['You own the data you put into NNC CRM. We process it to provide the service, as described in our Privacy Policy.'] },
    { h: '5. Changes', p: ['We may update these terms from time to time. We will let you know about material changes before they take effect.'] },
  ]),
  privacy: legal('Privacy Policy', 'How NNC CRM collects, uses and protects your information.', [
    { h: 'Information we collect', p: ['We collect account information you provide, the business data you enter into the product, and usage data that helps us improve NNC CRM.'] },
    { h: 'How we use it', p: ['We use your information to provide and improve the service, to support you, and to keep the product secure. We do not sell your personal data.'] },
    { h: 'Data retention', p: ['We keep your data for as long as your account is active. You can export or delete it at any time from settings.'] },
    { h: 'Contact', p: ['For any privacy question, write to hello@nncdigital.co.in.'] },
  ]),
  'trust-center': legal('Trust Center', 'Security, privacy and reliability at NNC CRM, in one place.', [
    { h: 'Security', p: ['Your data is encrypted in transit and at rest, with role based access and automatic hourly backups.'] },
    { h: 'Privacy', p: ['We collect only what we need and never sell your data. You stay in control of your information at all times.'] },
    { h: 'Reliability', p: ['We target 99.9% uptime and publish live status for all our services.'] },
  ]),
  'acceptable-use': legal('Acceptable Use Policy', 'The rules for using NNC CRM responsibly.', [
    { h: 'Responsible use', p: ['You agree not to use NNC CRM to send spam, store unlawful content, or harm the service or other users.'] },
    { h: 'Messaging', p: ['When using WhatsApp and email features, you must follow the relevant platform policies and obtain consent where required.'] },
    { h: 'Enforcement', p: ['We may suspend accounts that breach this policy to protect our customers and the service.'] },
  ]),
  compliance: legal('Legal and Compliance', 'Our compliance commitments and how to reach our legal team.', [
    { h: 'Compliance', p: ['NNC CRM is built to help Indian businesses meet their record keeping and GST obligations. We continually review our practices to stay compliant with applicable law.'] },
    { h: 'Data requests', p: ['For lawful data or compliance requests, contact legal@nncdigital.co.in.'] },
  ]),
  cookies: legal('Cookie Settings', 'How NNC CRM uses cookies and how to control them.', [
    { h: 'What cookies we use', p: ['We use essential cookies to run the product and a small number of analytics cookies to understand usage and improve the experience.'] },
    { h: 'Managing cookies', p: ['You can control cookies through your browser settings. Disabling essential cookies may affect how the product works.'] },
  ]),
}

/* ============================ OVERVIEWS ============================ */
export const FEATURES_OVERVIEW = {
  metaTitle: 'Features | NNC CRM',
  metaDescription: 'Everything in NNC CRM: enquiries, pipeline, forecasting, invoicing, WhatsApp, reports and integrations.',
  breadcrumb: [HOME, { label: 'Features' }],
  hero: {
    eyebrow: 'Product', title: 'One CRM for the whole customer journey',
    lead: 'Capture every enquiry, run your pipeline, forecast growth, raise invoices and engage on WhatsApp, all in one place.',
    ctas: heroCtas, media: { type: 'video', src: '/showcase.mp4', poster: '/showcase.jpg' },
  },
  blocks: [
    { type: 'cards', title: 'Explore the product', items: [
      { icon: 'enquiries', title: 'Enquiries', body: 'Catch every enquiry from every channel.', href: '/features/enquiries' },
      { icon: 'pipeline', title: 'Sales pipeline', body: 'See every deal and its stage at a glance.', href: '/features/sales-pipeline' },
      { icon: 'forecast', title: 'Forecasting', body: 'Project revenue for the months ahead.', href: '/features/forecasting' },
      { icon: 'invoice', title: 'Invoicing and payments', body: 'From deal won to payment received.', href: '/features/invoicing' },
      { icon: 'whatsapp', title: 'WhatsApp engagement', body: 'Reach customers where they reply.', href: '/features/whatsapp' },
      { icon: 'reports', title: 'Reports and analytics', body: 'Know where your business stands.', href: '/features/reports' },
      { icon: 'integrations', title: 'Integrations', body: 'Works with the tools you already use.', href: '/features/integrations' },
    ] },
  ],
  cta: startCta,
}

export const INDUSTRIES_OVERVIEW = {
  metaTitle: 'Industries | NNC CRM',
  metaDescription: 'NNC CRM is built for sales teams, services, manufacturing, retail, healthcare, education and real estate.',
  breadcrumb: [HOME, { label: 'Industries' }],
  hero: {
    eyebrow: 'Industries', title: 'Built for how your business works',
    lead: 'One CRM, adapted to your team, so you go live sooner with workflows that fit your industry.',
    ctas: heroCtas, media: { type: 'video', src: '/hero-reel.mp4', poster: '/hero-reel.jpg' },
  },
  blocks: [
    { type: 'cards', title: 'Find your industry', items: [
      { icon: 'sales', title: 'Sales teams', body: 'Track every deal and close faster.', href: '/industries/sales-teams' },
      { icon: 'service', title: 'Service businesses', body: 'Clients, projects and payments in one place.', href: '/industries/service-businesses' },
      { icon: 'manufacturing', title: 'Manufacturing', body: 'Connect orders, dispatch and payments.', href: '/industries/manufacturing' },
      { icon: 'retail', title: 'Retail and distribution', body: 'Turn one time buyers into regulars.', href: '/industries/retail' },
      { icon: 'healthcare', title: 'Healthcare and clinics', body: 'Patients, appointments and follow ups.', href: '/industries/healthcare' },
      { icon: 'education', title: 'Education', body: 'Admissions enquiries and fees, organised.', href: '/industries/education' },
      { icon: 'realestate', title: 'Real estate', body: 'Leads, site visits and bookings to close.', href: '/industries/real-estate' },
    ] },
  ],
  cta: startCta,
}

/* ============================ LOOKUP ============================ */
export const CATEGORIES = {
  industries: INDUSTRIES,
  features: FEATURES,
  company: COMPANY,
  support: SUPPORT,
  legal: LEGAL,
}

export function getPage(category, slug) {
  return CATEGORIES[category]?.[slug] || null
}
