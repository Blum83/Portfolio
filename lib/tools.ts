export interface Tool {
  id: string
  name: string
  tag: string
  tagColor: string
  description: string
  features: string[]
  color: string
  glowColor: string
  icon: string
  liveUrl: string
  githubUrl: string
}

export const tools: Tool[] = [
  {
    id: 'crawliq',
    name: 'CrawlIQ',
    tag: 'Web App',
    tagColor: 'text-violet-400 bg-violet-400/10 border-violet-400/20',
    description: 'Full-site SEO, accessibility, and performance auditor. Crawls your entire site and surfaces issues before users find them.',
    features: [
      'Recursive site crawler with depth control',
      'SEO analysis: meta, headings, canonicals, Open Graph',
      'Accessibility audit mapped to WCAG 2.1',
      'Lighthouse performance scores per page',
    ],
    color: '#7c3aed',
    glowColor: 'rgba(124, 58, 237, 0.4)',
    icon: '◈',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'bug-reproduction',
    name: 'Bug Reproduction Tool',
    tag: 'Chrome Extension',
    tagColor: 'text-red-400 bg-red-400/10 border-red-400/20',
    description: 'Records user actions in the browser and generates a ready-to-run Playwright test. Turn a reproduction step list into code instantly.',
    features: [
      'Action recorder: clicks, typing, navigation',
      'Auto-generates Playwright TypeScript test',
      'Smart selector strategy (data-testid first)',
      'One-click copy to clipboard',
    ],
    color: '#ef4444',
    glowColor: 'rgba(239, 68, 68, 0.4)',
    icon: '⬡',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'lighthouse-runner',
    name: 'Lighthouse Runner',
    tag: 'Performance',
    tagColor: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
    description: 'Runs multiple Lighthouse audits and averages the results, eliminating variance for reliable A/B performance comparisons.',
    features: [
      'Configurable run count (3–20 passes)',
      'Averaged scores across all metrics',
      'Side-by-side URL comparison mode',
      'JSON + HTML report export',
    ],
    color: '#06b6d4',
    glowColor: 'rgba(6, 182, 212, 0.4)',
    icon: '◎',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'floodgate',
    name: 'Floodgate',
    tag: 'Load Testing',
    tagColor: 'text-orange-400 bg-orange-400/10 border-orange-400/20',
    description: 'k6-powered load testing with a visual dashboard. Ramp up to 5000 VUs and watch your system\'s breaking point in real time.',
    features: [
      'k6 script generation from HTTP flows',
      'Up to 5,000 virtual users',
      'Real-time metrics: RPS, p95, error rate',
      'Threshold assertions + CI integration',
    ],
    color: '#f97316',
    glowColor: 'rgba(249, 115, 22, 0.4)',
    icon: '▲',
    liveUrl: '#',
    githubUrl: '#',
  },
]
