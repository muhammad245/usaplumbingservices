import { Suspense, lazy } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Seo from '../components/Seo'
import SkeletonPage from '../components/SkeletonPage'

const HeroSection = lazy(() => import('../sections/HeroSection'))
const ServicesSection = lazy(() => import('../sections/ServicesSection'))
const TestimonialsSection = lazy(() => import('../sections/TestimonialsSection'))
const ContactSection = lazy(() => import('../sections/ContactSection'))

function HomePage() {
  return (
    <>
      <Seo
        title="USA Plumbing Service Inc. | Emergency Plumbing Experts"
        description="Trusted local plumbers for drain cleaning, pipe repair, toilet leaks, and backflow prevention. Request a fast quote online."
      />
      <Navbar />
      <main>
        <Suspense fallback={<SkeletonPage />}>
          <HeroSection />
          <div className="h-1 bg-gradient-to-r from-brand-red via-brand-gold to-brand-red" />
          <ServicesSection />
          <div className="h-1 bg-gradient-to-r from-brand-red via-brand-gold to-brand-red" />
          <TestimonialsSection />
          <div className="h-1 bg-gradient-to-r from-brand-gold via-brand-red to-brand-gold" />
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}

export default HomePage
