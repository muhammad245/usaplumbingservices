import { COMPANY, VALUE_PROPS } from '../data/content'

function HeroSection() {
  return (
    <section className="bg-brand-charcoal py-20 text-center">
      <div className="container-x">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-brand-red">Trusted Since 1999</p>
        <h1 className="mb-5 font-heading text-5xl leading-tight tracking-wide text-white md:text-7xl">
          USA Plumbing
          <br />
          Service Inc.
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-base text-white/70 md:text-xl">{COMPANY.areas}</p>

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {VALUE_PROPS.map((item) => (
            <span key={item} className="rounded-md border border-brand-gold/35 bg-brand-gold/10 px-4 py-2 text-xs font-semibold text-brand-gold">
              {item}
            </span>
          ))}
        </div>

        <a href="#contact" className="inline-block rounded-md bg-brand-red px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white hover:bg-brand-red-dark">
          Get a Free Quote
        </a>
      </div>
    </section>
  )
}

export default HeroSection
