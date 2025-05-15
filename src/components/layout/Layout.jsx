import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  const { pathname } = useLocation()

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* Add top padding for fixed navbar */}
      <main className="flex-grow pt-20">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout