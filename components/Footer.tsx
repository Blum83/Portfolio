import { container } from './ui'

export default function Footer() {
  return (
    <footer className={`${container} pt-14 pb-8 lg:pt-[72px]`}>
      <div className="flex flex-col gap-3 border-t border-line pt-6 font-mono text-[10px] text-dim lg:flex-row lg:justify-between">
        <p>© 2026 Valentyn Korobeinikov · AI-Augmented QA Engineer</p>
        <p>{'// built with intent. tested with evidence.'}</p>
      </div>
    </footer>
  )
}
