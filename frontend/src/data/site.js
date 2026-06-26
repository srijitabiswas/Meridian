export const NAV_LINKS = [
  { label: 'Product', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Customers', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

export const TRUSTED_BY = ['Northwind', 'Vellum', 'Argosy', 'Kestrel Data', 'Halcyon', 'Pillar', 'Wayfinder'];

export const HOW_IT_WORKS = [
  {
    step: '01',
    icon: 'link',
    title: 'Connect',
    description: 'Point Meridian at your warehouses, APIs, and queues. Most teams are streaming data in under ten minutes.',
  },
  {
    step: '02',
    icon: 'cog',
    title: 'Automate',
    description: 'Set the transformation and routing rules once, on a visual canvas. Meridian keeps running them — and healing them — on its own.',
  },
  {
    step: '03',
    icon: 'chartPie',
    title: 'Discover',
    description: 'Get anomaly alerts and trend insight the moment new data lands, instead of waiting for the next report cycle.',
  },
];

export const STATS = [
  { value: 4200, suffix: '+', label: 'Pipelines automated' },
  { value: 99.95, suffix: '%', label: 'Uptime SLA', decimals: 2 },
  { value: 120, suffix: '+', label: 'Native integrations' },
  { value: 82, suffix: '%', label: 'Fewer manual fixes' },
];

export const TESTIMONIALS = [
  {
    quote:
      'We replaced four cron jobs and a Slack channel full of manual fixes with one Meridian pipeline. It pages us now only when something genuinely needs a human.',
    name: 'Priya Raman',
    role: 'Head of Data, Northwind',
  },
  {
    quote:
      'The visual builder is the first pipeline tool our analysts could actually use without pulling an engineer in. That alone paid for itself in week one.',
    name: 'Daniel Cho',
    role: 'VP Engineering, Kestrel Data',
  },
  {
    quote:
      'Schema drift used to break our dashboards every other week. Meridian catches it before the ingest job even finishes.',
    name: 'Amara Okafor',
    role: 'Data Platform Lead, Halcyon',
  },
  {
    quote:
      'Migrating off our home-grown orchestrator took an afternoon, not a quarter. The integration catalog covered everything we had.',
    name: 'Lucas Ferreira',
    role: 'CTO, Argosy',
  },
];

export const FAQS = [
  {
    question: 'How is Meridian different from a workflow orchestrator like Airflow?',
    answer:
      'Orchestrators schedule and run the steps you write. Meridian models the data itself, so it can detect drift, retry failures with context, and re-route around a broken source automatically — most of that needs custom code in a general-purpose orchestrator.',
  },
  {
    question: 'How long does onboarding take?',
    answer:
      'Most teams connect their first source and see live data in under ten minutes, and have a production pipeline running within their first day. Migrating an existing pipeline typically takes an afternoon.',
  },
  {
    question: 'Can I bring my own warehouse and tools?',
    answer:
      'Yes. Meridian connects to 120+ sources out of the box — warehouses, APIs, queues, and SaaS tools — and ships an open connector spec if you need to build a custom one.',
  },
  {
    question: 'What happens if I switch plans or currencies later?',
    answer:
      'Plan changes are prorated automatically, and you can switch currency or billing cycle at any time from your billing settings — pricing always recalculates live, the same way it does on this page.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Data is encrypted in transit and at rest. Scale plans include SOC 2 Type II controls, SSO/SAML, and dedicated infrastructure with a 99.95% uptime SLA.',
  },
];