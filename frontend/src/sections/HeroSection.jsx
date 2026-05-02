import { COMPANY, VALUE_PROPS } from '../data/content'

function HeroSection() {
  return (
    <section id="home" className="hero-truck-bg scroll-mt-24 py-20 text-center">
      <div className="container-x">
        <h1 className="reveal-up mb-5 flex flex-col items-center" style={{ animationDelay: '90ms' }}>
          <img
            src="/logo.png"
            alt="USA Plumbing Service Inc., trusted since 1999"
            className="h-auto w-full max-w-[min(100%,420px)] object-contain drop-shadow-[0_14px_45px_rgba(0,0,0,0.4)] md:max-w-lg"
            decoding="async"
          />
        </h1>
        <p className="reveal-up mx-auto mb-8 max-w-2xl text-base text-white/80 md:text-xl" style={{ animationDelay: '170ms' }}>
          {COMPANY.areas}
        </p>

        <div className="reveal-up mb-10 flex flex-wrap justify-center gap-3" style={{ animationDelay: '260ms' }}>
          {VALUE_PROPS.map((item, index) => (
            <span
              key={item}
              className="glass-card float-slow rounded-md border border-brand-gold/35 px-4 py-2 text-xs font-semibold text-brand-gold"
              style={{ animationDelay: `${index * 140}ms` }}
            >
              {item}
            </span>
          ))}
        </div>

        <a
          href="#contact"
          className="btn-glow pulse-soft reveal-up inline-block rounded-md bg-brand-red px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand-red-dark"
          style={{ animationDelay: '340ms' }}
        >
          Get a Free Quote
        </a>
      </div>
    </section>
  )
}

export default HeroSection
