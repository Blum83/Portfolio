import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#080c10',
        surface: '#0d1117',
        accent: '#7c3aed',
        'accent-light': '#a78bfa',
        ink: '#eff1f6',
        muted: '#929baa',
        dim: '#687383',
        line: 'rgba(255, 255, 255, 0.08)',
      },
      fontFamily: {
        mono: ['var(--font-jetbrains)', 'monospace'],
        heading: ['var(--font-syne)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
