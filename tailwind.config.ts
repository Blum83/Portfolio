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
        accent: '#7c3aed',
        'accent-light': '#a78bfa',
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
