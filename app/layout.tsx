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
  title: 'QA Engineer Portfolio',
  description: 'QA Engineer specializing in automation, performance testing, and building developer tools.',
  keywords: ['QA Engineer', 'Test Automation', 'Playwright', 'Performance Testing', 'Portfolio'],
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
