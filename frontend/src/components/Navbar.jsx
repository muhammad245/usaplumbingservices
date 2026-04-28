import { COMPANY, NAV_LINKS } from '../data/content'

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-navy/90 shadow-lg backdrop-blur-sm reveal-soft">
      <nav className="container-x flex h-[72px] items-center justify-between">
        <a href="#home" className="group flex items-center gap-3 text-white" aria-label={COMPANY.name}>
          <span className="grid h-11 w-11 place-items-center rounded-md bg-brand-red transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
            <span className="h-4 w-4 rounded-full border-2 border-white" />
          </span>
          <span className="font-heading text-lg leading-none tracking-wider">
            USA PLUMBING
            <span className="block text-[11px] text-brand-gold">SERVICE INC.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="text-sm font-semibold uppercase tracking-wider text-white/80 transition-all duration-300 hover:text-brand-gold">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="btn-glow rounded-md bg-brand-red px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-red-dark"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
