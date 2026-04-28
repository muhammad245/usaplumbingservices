import { TESTIMONIALS } from '../data/content'

function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-white py-20">
      <div className="container-x">
        <div className="section-heading">
          <p className="section-label">What Our Customers Say</p>
          <h2 className="section-title">REAL REVIEWS</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <article key={item.author} className="flex min-h-[230px] flex-col rounded-xl bg-brand-light p-7">
              <p className="mb-3 text-xl tracking-wider text-brand-gold">★★★★★</p>
              <p className="mb-4 flex-1 text-sm italic leading-7 text-gray-700">{item.review}</p>
              <p className="border-t border-gray-200 pt-3 text-xs font-semibold tracking-wider text-gray-500">- {item.author}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
