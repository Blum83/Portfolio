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
  liveUrl?: string
  liveLabel?: string
  githubUrl?: string
}

export const tools: Tool[] = [
  {
    id: 'crawliq',
    name: 'CrawlIQ',
    tag: 'AI · Web App',
    tagColor: 'text-violet-400 bg-violet-400/10 border-violet-400/20',
    description: 'AI website auditor. Crawls a site with Playwright, runs a battery of checks and explains the findings in plain language.',
    features: [
      'Playwright crawler for up to 600 pages',
      '20+ checks: SEO, a11y, redirects, sitemaps, Schema.org',
      'AI summaries via Groq / Gemini',
      'HTML, Excel and CSV reports + Telegram bot',
    ],
    color: '#7c3aed',
    glowColor: 'rgba(124, 58, 237, 0.4)',
    icon: '◈',
    githubUrl: 'https://github.com/Blum83/CrawlIQ',
  },
  {
    id: 'qa-interview-prep',
    name: 'QA Interview Prep',
    tag: 'Web App',
    tagColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    description: 'Interview trainer for QA engineers: generated questions and answers by topic and level, plus hands-on practice.',
    features: [
      'Question / Q&A generator by topic and level',
      'SQL trainer with 20 exercises',
      'ISTQB Foundation simulator (71 questions)',
      'Test design, bug reports, a11y, HTTP codes · EN / UA / RU',
    ],
    color: '#10b981',
    glowColor: 'rgba(16, 185, 129, 0.4)',
    icon: '◆',
    liveUrl: 'https://qa-interview-ecru.vercel.app/',
  },
  {
    id: 'api-mock-studio',
    name: 'API Mock Studio',
    tag: 'Dev Tool',
    tagColor: 'text-sky-400 bg-sky-400/10 border-sky-400/20',
    description: 'Local HTTP proxy with a web UI. Watch real traffic, turn responses into mocks and keep them in the repo.',
    features: [
      'Live request feed over SSE',
      'Inspect headers and bodies',
      'Save real responses as mocks or write your own',
      'Glob path matching · JSON mocks you can commit',
    ],
    color: '#0ea5e9',
    glowColor: 'rgba(14, 165, 233, 0.4)',
    icon: '⇄',
    githubUrl: 'https://github.com/Blum83/API-Mock-Studio',
  },
  {
    id: 'lighthouse-runner',
    name: 'Lighthouse Runner',
    tag: 'Performance',
    tagColor: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
    description: 'Electron app that runs Lighthouse repeatedly and averages the results, so performance numbers stop jumping around.',
    features: [
      '3–20 runs per URL with averaged scores',
      'Mobile / desktop presets',
      'Cookie-consent automation via CDP',
      'Per-run screenshots, live results, CSV export',
    ],
    color: '#06b6d4',
    glowColor: 'rgba(6, 182, 212, 0.4)',
    icon: '◎',
    githubUrl: 'https://github.com/Blum83/Lighouse_reports',
  },
  {
    id: 'floodgate',
    name: 'Floodgate',
    tag: 'Load Testing',
    tagColor: 'text-orange-400 bg-orange-400/10 border-orange-400/20',
    description: 'Load testing workbench that combines k6 stress runs with Gatling scenarios and keeps the history of every run.',
    features: [
      'k6 stress mode up to 5,000 VUs',
      'Gatling JS SDK scenario mode',
      'Token / ID extraction between steps',
      'Environments, run history and trends',
    ],
    color: '#f97316',
    glowColor: 'rgba(249, 115, 22, 0.4)',
    icon: '▲',
  },
  {
    id: 'bug-reproduction',
    name: 'Bug Reproduction Tool',
    tag: 'Chrome Extension',
    tagColor: 'text-red-400 bg-red-400/10 border-red-400/20',
    description: 'Records what you do in the browser and turns it into a ready-to-run Playwright test.',
    features: [
      'Records clicks, typing and navigation',
      'Generates Playwright specs',
      'Built on Manifest V3',
      'Published on the Chrome Web Store',
    ],
    color: '#ef4444',
    glowColor: 'rgba(239, 68, 68, 0.4)',
    icon: '⬡',
  },
]
