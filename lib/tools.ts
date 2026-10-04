import { Braces, Bug, Gauge, GraduationCap, ScanSearch, Waves, type LucideIcon } from 'lucide-react'

export interface Tool {
  id: string
  name: string
  tag: string
  description: string
  features: string[]
  color: string
  icon: LucideIcon
  liveUrl?: string
  liveLabel?: string
  githubUrl?: string
}

export const tools: Tool[] = [
  {
    id: 'crawliq',
    name: 'CrawlIQ',
    tag: 'AI · Web App',
    description: 'AI website auditor. Crawls a site with Playwright, runs a battery of checks and explains the findings in plain language.',
    features: [
      'Playwright crawler for up to 600 pages',
      '20+ checks: SEO, a11y, redirects, sitemaps, Schema.org',
      'AI summaries via Groq / Gemini',
      'HTML, Excel and CSV reports + Telegram bot',
    ],
    color: '#a78bfa',
    icon: ScanSearch,
    githubUrl: 'https://github.com/Blum83/CrawlIQ',
  },
  {
    id: 'qa-interview-prep',
    name: 'QA Interview Prep',
    tag: 'Web App',
    description: 'Interview trainer for QA engineers: generated questions and answers by topic and level, plus hands-on practice.',
    features: [
      'Question / Q&A generator by topic and level',
      'SQL trainer with 20 exercises',
      'ISTQB Foundation simulator (71 questions)',
      'Test design, bug reports, a11y, HTTP codes · EN / UA / RU',
    ],
    color: '#10b981',
    icon: GraduationCap,
    liveUrl: 'https://qa-interview-ecru.vercel.app/',
  },
  {
    id: 'api-mock-studio',
    name: 'API Mock Studio',
    tag: 'Dev Tool',
    description: 'Local HTTP proxy with a web UI. Watch real traffic, turn responses into mocks and keep them in the repo.',
    features: [
      'Live request feed over SSE',
      'Inspect headers and bodies',
      'Save real responses as mocks or write your own',
      'Glob path matching · JSON mocks you can commit',
    ],
    color: '#f472b6',
    icon: Braces,
    githubUrl: 'https://github.com/Blum83/API-Mock-Studio',
  },
  {
    id: 'lighthouse-runner',
    name: 'Lighthouse Runner',
    tag: 'Performance',
    description: 'Electron app that runs Lighthouse repeatedly and averages the results, so performance numbers stop jumping around.',
    features: [
      '3–20 runs per URL with averaged scores',
      'Mobile / desktop presets',
      'Cookie-consent automation via CDP',
      'Per-run screenshots, live results, CSV export',
    ],
    color: '#22d3ee',
    icon: Gauge,
    githubUrl: 'https://github.com/Blum83/Lighouse_reports',
  },
  {
    id: 'floodgate',
    name: 'Floodgate',
    tag: 'Load Testing',
    description: 'Load testing workbench that combines k6 stress runs with Gatling scenarios and keeps the history of every run.',
    features: [
      'k6 stress mode up to 5,000 VUs',
      'Gatling JS SDK scenario mode',
      'Token / ID extraction between steps',
      'Environments, run history and trends',
    ],
    color: '#fb923c',
    icon: Waves,
    githubUrl: 'https://github.com/Blum83/Floodgate',
  },
  {
    id: 'bug-reproduction',
    name: 'Bug Reproduction Tool',
    tag: 'Chrome Extension',
    description: 'Records what you do in the browser and turns it into a ready-to-run Playwright test.',
    features: [
      'Records clicks, typing and navigation',
      'Generates Playwright specs',
      'Built on Manifest V3',
      'Published on the Chrome Web Store',
    ],
    color: '#f87171',
    icon: Bug,
    liveUrl: 'https://chromewebstore.google.com/detail/bug-reproduction-tool/djjnaboeldphchfgpgcjfjmjdcajgpnj',
    liveLabel: 'Chrome Web Store',
  },
]
