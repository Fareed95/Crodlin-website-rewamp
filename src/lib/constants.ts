export const NAV_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
] as const

export const SERVICES = [
  {
    slug: 'software-development',
    title: 'Software Development',
    description: 'Custom web and mobile apps built for scale.',
    icon: 'Code',
  },
  {
    slug: 'it-consultancy',
    title: 'IT Consultancy',
    description: 'Strategic tech guidance aligned to your goals.',
    icon: 'Lightbulb',
  },
  {
    slug: 'ai-solutions',
    title: 'AI Solutions',
    description: 'Intelligent automation for modern businesses.',
    icon: 'Bot',
  },
  {
    slug: 'mobile-apps',
    title: 'Mobile Apps',
    description: 'Cross-platform apps that feel native.',
    icon: 'Smartphone',
  },
] as const

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Fill the form',
    desc: 'Tell us about your project in 2 minutes.',
  },
  {
    step: '02',
    title: 'Discovery call',
    desc: 'We align on scope, timeline, and budget.',
  },
  {
    step: '03',
    title: 'Proposal sent',
    desc: 'Detailed plan with fixed pricing.',
  },
  { step: '04', title: 'We build', desc: 'Regular updates, no surprises.' },
] as const
