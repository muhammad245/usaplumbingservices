import { SERVICES } from '../data/content'
import { Wrench, Droplets, ShieldCheck, Toilet } from 'lucide-react'

const SERVICE_ICONS = {
  'Drain Cleaning': Droplets,
  'Pipe Repair': Wrench,
  'Leaky Toilets': Toilet,
  'Backflow Prevention': ShieldCheck,
}

function ServicesSection() {
  return (
    <section id="services" className="bg-brand-light py-20">
      <div className="container-x">
        <div className="section-heading reveal-soft">
          <p className="section-label text-2xl md:text-3xl">What We Do</p>
          <h2 className="section-title text-brand-red">Our Services</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {SERVICES.map((service, index) => {
            const ServiceIcon = SERVICE_ICONS[service.name] ?? Droplets

            return (
            <article
              key={service.name}
              className="card-hover reveal-up flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <h3 className="pulse-soft mb-4 inline-flex items-center gap-2 rounded-lg bg-brand-red px-4 py-3 font-heading text-3xl leading-none text-white md:text-4xl">
                <ServiceIcon className="h-7 w-7 md:h-8 md:w-8" strokeWidth={2.5} aria-hidden="true" />
                <span>{service.name}</span>
              </h3>
              <p className="mb-5 text-sm leading-6 text-gray-500">{service.support}</p>
              <ul className="mt-auto space-y-2 border-t border-gray-100 pt-4">
                {service.features.map((feature) => (
                  <li key={feature} className="text-sm font-semibold text-brand-charcoal">
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
