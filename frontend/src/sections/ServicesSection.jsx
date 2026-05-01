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
              <h3 className="pulse-soft mb-4 flex min-h-[88px] w-full items-center gap-3 rounded-lg bg-brand-red px-4 py-3 font-heading text-2xl leading-tight text-white md:min-h-[96px] md:text-3xl">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-white/15 md:h-11 md:w-11">
                  <ServiceIcon className="h-6 w-6 md:h-7 md:w-7" strokeWidth={2.5} aria-hidden="true" />
                </span>
                <span className="block">
                  {service.name === 'Pipe Repair' ? (
                    <>
                      Pipe
                      <br />
                      Repair
                    </>
                  ) : (
                    service.name
                  )}
                </span>
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
