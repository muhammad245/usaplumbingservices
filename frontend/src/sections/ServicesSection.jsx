import { SERVICES } from '../data/content'

function ServicesSection() {
  return (
    <section id="services" className="bg-brand-light py-20">
      <div className="container-x">
        <div className="section-heading">
          <p className="section-label">What We Do</p>
          <h2 className="section-title">OUR SERVICES</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {SERVICES.map((service) => (
            <article key={service.name} className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 h-12 w-12 rounded-lg bg-brand-red" />
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-brand-red">{service.name}</p>
              <h3 className="mb-3 font-heading text-2xl text-brand-charcoal">{service.headline}</h3>
              <p className="mb-5 text-sm leading-6 text-gray-500">{service.support}</p>
              <ul className="mt-auto space-y-2 border-t border-gray-100 pt-4">
                {service.features.map((feature) => (
                  <li key={feature} className="text-sm font-semibold text-brand-charcoal">
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
