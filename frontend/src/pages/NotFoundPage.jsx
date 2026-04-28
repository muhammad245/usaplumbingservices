import { Link } from 'react-router-dom'
import Seo from '../components/Seo'

function NotFoundPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-brand-light p-6 text-center">
      <Seo title="Page Not Found | USA Plumbing Service Inc." description="The page you are trying to view could not be found." />
      <div>
        <h1 className="mb-2 font-heading text-5xl text-brand-charcoal">404</h1>
        <p className="mb-6 text-gray-600">The page you requested does not exist.</p>
        <Link to="/" className="rounded-md bg-brand-red px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white hover:bg-brand-red-dark">
          Back Home
        </Link>
      </div>
    </main>
  )
}

export default NotFoundPage
