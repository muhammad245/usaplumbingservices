import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { submitContact } from '../lib/api'

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().min(8, 'Phone is required'),
  service: z.string().min(1, 'Please select a service'),
  consent: z.boolean().refine((value) => value, 'Consent is required'),
})

function ContactSection() {
  const [status, setStatus] = useState(null)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      phone: '',
      service: '',
      consent: false,
    },
  })

  const onSubmit = async (values) => {
    setStatus(null)
    try {
      await submitContact(values)
      setStatus({ type: 'success', message: 'Thanks! We received your request and will contact you shortly.' })
      reset()
    } catch (error) {
      setStatus({ type: 'error', message: error.message })
    }
  }

  return (
    <section id="contact" className="gradient-hero py-20">
      <div className="container-x max-w-2xl">
        <div className="section-heading reveal-soft">
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title text-white shimmer-text">CONTACT US</h2>
        </div>
        <form className="glass-card reveal-up space-y-5 p-6 md:p-8" onSubmit={handleSubmit(onSubmit)} noValidate>
          <Field label="Name" error={errors.name?.message}>
            <input className="input-field" type="text" placeholder="Your full name" autoComplete="name" {...register('name')} />
          </Field>
          <Field label="Phone Number" error={errors.phone?.message}>
            <input className="input-field" type="tel" placeholder="(555) 000-0000" autoComplete="tel" {...register('phone')} />
          </Field>
          <Field label="Service" error={errors.service?.message}>
            <select className="input-field select-service-field" {...register('service')}>
              <option value="">Select a service...</option>
              <option value="drain">Drain Cleaning</option>
              <option value="pipe">Pipe Repair</option>
              <option value="toilet">Leaky Toilets</option>
              <option value="backflow">Backflow Prevention</option>
              <option value="other">Other / Not Sure</option>
            </select>
          </Field>

          <label className="flex items-start gap-3 text-sm text-white/70">
            <input type="checkbox" className="mt-0.5 accent-brand-red" {...register('consent')} />
            I agree to be contacted by USA Plumbing Service Inc. regarding my enquiry.
          </label>
          {errors.consent?.message && <p className="text-xs text-red-300">{errors.consent.message}</p>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-glow w-full rounded-md bg-brand-red px-5 py-4 font-heading text-lg uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand-red-dark disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? 'Submitting...' : 'Send My Request'}
          </button>
          {status && <p className={status.type === 'success' ? 'text-sm text-green-300' : 'text-sm text-red-300'}>{status.message}</p>}
        </form>
      </div>
    </section>
  )
}

function Field({ label, children, error }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/70">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-300">{error}</span>}
    </label>
  )
}

export default ContactSection
