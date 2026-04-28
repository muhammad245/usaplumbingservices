import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import SkeletonPage from './components/SkeletonPage'
import ScrollToTop from './components/ScrollToTop'
import SiteLayout from './components/SiteLayout'

const HomePage = lazy(() => import('./pages/HomePage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<SkeletonPage />}>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default App
