import type { Metadata } from 'next'
import { JetBrains_Mono, Syne } from 'next/font/google'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Valentyn Korobeinikov — AI-Augmented QA Engineer',
  description:
    'AI-Augmented QA Engineer with 5+ years in web, desktop, mobile and API testing. I build AI agents, MCP servers and Playwright automation that verify every change with evidence.',
  keywords: ['QA Engineer', 'AI-Augmented QA', 'AI Agents', 'MCP', 'Claude Code', 'Playwright', 'Test Automation', 'Portfolio'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${syne.variable}`}>
      <body>{children}</body>
    </html>
  )
}
