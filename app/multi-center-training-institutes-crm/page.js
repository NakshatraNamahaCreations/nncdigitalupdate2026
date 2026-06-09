import MarketingPage from '@/components/marketing/MarketingPage'

const img = (src, alt) => ({ type: 'image', src, alt })

const PAGE = {
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'Industries', href: '/industries' },
    { label: 'Training Institutes & Coaching Centers' },
  ],
  hero: {
    eyebrow: 'Training Institutes & Coaching Centers',
    title: 'The Best CRM for Training Institutes and Coaching Centers',
    lead: 'Manage admissions across all your centers in one place. Get complete visibility into every student journey and every branch, from the first enquiry to enrolment.',
    ctas: [
      { label: 'Start free trial', href: '#start', trial: true },
      { label: 'Book a demo', href: '/company/contact', variant: 'ghost' },
    ],
    media: {
      type: 'video',
      src: '/training-reel.mp4',
      poster: '/training-reel.jpg',
      alt: 'Training institutes and students using NNC CRM',
    },
  },
  blocks: [
    {
      type: 'stats',
      title: 'Trusted by training institutes and coaching centers across India',
      items: [
        { value: '1,000+', label: 'institutes and centers' },
        { value: '32%', label: 'more enquiries converted' },
        { value: '1 day', label: 'to go live across centers' },
      ],
    },
    {
      type: 'featureGrid',
      title: 'One CRM for every center you run',
      lead: 'Bring admissions, students and performance from all your branches into a single, clear system.',
      items: [
        { icon: 'globe', title: 'Centralized control', body: 'Run all your centers from one dashboard, with every record in one place.' },
        { icon: 'reports', title: 'Complete visibility', body: 'See enquiries, admissions and revenue across every branch in real time.' },
        { icon: 'whatsapp', title: 'Targeted outreach', body: 'Reach the right students on WhatsApp, SMS and email, automatically.' },
        { icon: 'pipeline', title: 'Student journeys', body: 'Track each student from first enquiry to enrolment and the next course.' },
        { icon: 'users', title: 'Retention', body: 'Spot drop offs early and bring students back for their next program.' },
        { icon: 'forecast', title: 'Center analytics', body: 'Compare performance center by center and counsellor by counsellor.' },
      ],
    },
    {
      type: 'dataflow',
      config: {
        title: 'Complete student data capture',
        lead: 'One profile per student, captured once and kept in sync across every center and your headquarters.',
        student: {
          name: 'Aarav Sharma',
          initials: 'AS',
          age: 21,
          email: 'aarav.sharma@email.com',
          studentId: 'NNC 10241',
          campus: 'Pune Central / PC1',
        },
        learners: [{ initials: 'PS' }, { initials: 'MK' }],
        centers: [
          { label: 'Center 1', kind: 'center' },
          { label: 'Center 2', kind: 'center' },
          { label: 'Headquarter', kind: 'hq' },
        ],
      },
    },
    {
      type: 'leadCapture',
      kicker: 'Capture every enquiry',
      title: 'Zero lead leakage across all your centers',
      body: 'When enquiries arrive on different phones, forms and walk in registers, leads slip through the cracks. NNC captures every one, from every channel, into a single inbox and routes it to the right center.',
      bullets: [
        'Leads from Facebook, Google, webinars, your website and WhatsApp, all in one place',
        'Auto assigned to the right center and counsellor instantly',
        'No lead ever lost between branches again',
      ],
    },
    {
      type: 'split',
      flip: true,
      kicker: 'One source of truth',
      title: 'The same course info at every center',
      body: 'Keep course details, fees and current offers consistent across all your branches, so no center is ever working from an outdated price list.',
      bullets: [
        'Standard course, batch and fee information shared everywhere',
        'Offers and updates reach all centers instantly',
        'No mixed messaging to parents and students',
      ],
      media: img('/img/scene-dashboard.jpg', 'Shared information'),
    },
    {
      type: 'split',
      kicker: 'Know your students',
      title: 'A 360 degree view of every student',
      body: 'Every call, message, visit and payment on one profile, so any counsellor at any center can pick up the conversation right where it left off.',
      bullets: [
        'Full history of calls, messages and center visits',
        'Course interests, test scores and demographics in one place',
        'Shared across centers, never stuck on one person’s phone',
      ],
      media: img('/img/scene-people.jpg', 'Student profiles'),
    },
    {
      type: 'split',
      flip: true,
      kicker: 'Track the journey',
      title: 'Follow every step from enquiry to enrolment',
      body: 'See exactly where each student is in your admissions funnel and what to do next, so no prospective student goes cold.',
      bullets: [
        'Every interaction logged automatically',
        'Clear funnel stages tailored to admissions',
        'A daily action list for every counsellor',
      ],
      media: img('/img/scene-planning.jpg', 'Student journey tracking'),
    },
    {
      type: 'split',
      kicker: 'Smart segmentation',
      title: 'Reach the right students with the right message',
      body: 'Group students by course, location, score or stage and send communication that actually fits, for higher response with less effort.',
      bullets: [
        'Segment by course, center, score or funnel stage',
        'Personalised messages to each group',
        'Better response rates, far less manual work',
      ],
      media: img('/img/scene-data.jpg', 'Segmentation'),
    },
    {
      type: 'split',
      flip: true,
      kicker: 'Omnichannel campaigns',
      title: 'Run admissions campaigns on every channel',
      body: 'WhatsApp, SMS, email and calls from one place, with automated follow ups so your counsellors spend time converting, not chasing.',
      bullets: [
        'WhatsApp, SMS, email and calls in one workflow',
        'Automated reminders and follow up sequences',
        'Counsellors focus on conversations that convert',
      ],
      media: img('/img/scene-mobile.jpg', 'Omnichannel campaigns'),
    },
    {
      type: 'split',
      kicker: 'Grow existing revenue',
      title: 'Turn one course into the next',
      body: 'Spot students ready for their next level or program and reach them at the right moment, improving retention and progression across centers.',
      bullets: [
        'Signals for cross sell and the next course',
        'Targeted offers at the right time',
        'Higher retention and progression rates',
      ],
      media: img('/img/scene-growth.jpg', 'Retention and cross sell'),
    },
    {
      type: 'featureGrid',
      title: 'See performance from every angle',
      lead: 'Dashboards built for institutes that run more than one center.',
      items: [
        { icon: 'reports', title: 'Overall performance', body: 'Enquiries, admissions and revenue across all your centers at a glance.' },
        { icon: 'integrations', title: 'Source performance', body: 'See which channels and campaigns bring your best students.' },
        { icon: 'forecast', title: 'Center performance', body: 'Compare every branch and counsellor side by side.' },
      ],
    },
    {
      type: 'testimonials',
      title: 'Loved by institutes that run multiple centers',
      lead: 'Sample stories shown here. Replace with your own customer quotes before launch.',
      items: [
        { quote: 'We finally see every center in one place. Enquiries stopped slipping and our admissions went up within the first term.', name: 'Ananya Rao', role: 'Director, multi city coaching institute', initials: 'AR' },
        { quote: 'Counsellors across five centers now follow the same process. Follow ups are automatic and nothing falls through.', name: 'Imran Sheikh', role: 'Operations Head, skill academy', initials: 'IS' },
        { quote: 'Center by center analytics showed us exactly where to focus. Setup took a day and the team adopted it instantly.', name: 'Meera Nair', role: 'Founder, test prep chain', initials: 'MN' },
      ],
    },
    {
      type: 'faq',
      title: 'Frequently asked questions',
      items: [
        { q: 'Which is the best CRM for training institutes?', a: 'NNC CRM is purpose built for multi center training institutes and coaching centers. It captures every enquiry, manages admissions across all your branches, and gives you one clear view of performance, for one simple yearly price.' },
        { q: 'How do you promote a coaching center?', a: 'Capture enquiries from your website, ads, referrals and walk ins, then follow up fast on WhatsApp, SMS and email. NNC automates reminders and campaigns so your counsellors spend their time converting, not chasing.' },
        { q: 'Which is the best CRM for coaching centers?', a: 'A good coaching center CRM centralizes data across branches, tracks each student journey, and shows center by center analytics. NNC does all three and typically goes live in about a day.' },
      ],
    },
  ],
  cta: {
    title: 'The CRM built for multi center training institutes',
    sub: 'Start your free 30 day trial, or book a demo to see it run across all your centers.',
    primary: { label: 'Start free trial', href: '#start' },
    secondary: { label: 'Book a demo', href: '/company/contact' },
  },
}

export const metadata = {
  title: 'Best CRM for Training Institutes and Coaching Centers | NNC CRM',
  description:
    'NNC CRM is the best CRM for training institutes and coaching centers. Manage admissions across multiple centers, capture every enquiry, track each student journey and see center by center analytics.',
}

export default function Page() {
  return <MarketingPage page={PAGE} />
}
