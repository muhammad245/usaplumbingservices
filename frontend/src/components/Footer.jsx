import { COMPANY } from '../data/content'

function Footer() {
  return (
    <footer className="reveal-soft bg-gray-900 py-8">
      <div className="container-x flex flex-wrap items-center justify-between gap-3">
        <p className="font-heading text-sm tracking-wider text-white/60">{COMPANY.name.toUpperCase()}</p>
        <p className="text-xs italic text-white/40">{COMPANY.tagline}</p>
        <p className="shimmer-text text-sm font-semibold tracking-wide">{COMPANY.phoneLabel}</p>
      </div>
    </footer>
  )
}

export default Footer
