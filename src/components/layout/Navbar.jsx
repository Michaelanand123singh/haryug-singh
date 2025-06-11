import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../../constants/navigation'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  const navbarClasses = `fixed w-full z-50 transition-all duration-500 ease-in-out ${
    scrolled 
      ? 'bg-gradient-to-r from-slate-900/95 via-gray-900/95 to-slate-900/95 backdrop-blur-xl shadow-2xl py-2' 
      : 'bg-gradient-to-r from-slate-900/80 via-gray-800/70 to-slate-900/80 backdrop-blur-md py-6'
  }`

  return (
    <nav className={navbarClasses}>
      <div className="container flex justify-between items-center">
        <Link 
          to="/" 
          className={`font-heading font-bold transition-all duration-500 ease-in-out bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:from-pink-500 hover:via-purple-500 hover:to-blue-400 ${
            scrolled ? 'text-xl' : 'text-3xl'
          }`}
        >
          Haryug Singh
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative font-medium transition-all duration-300 ease-in-out hover:text-white group ${
                  scrolled ? 'text-sm py-2' : 'text-base py-3'
                } ${
                  isActive 
                    ? 'text-white' 
                    : 'text-gray-300 hover:text-white'
                }`
              }
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 ease-in-out ${
                ({ isActive }) => isActive ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </NavLink>
          ))}
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className={`md:hidden text-white hover:text-gray-300 transition-all duration-300 transform hover:scale-110 ${
            scrolled ? 'p-1' : 'p-2'
          }`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={scrolled ? 20 : 24} /> : <Menu size={scrolled ? 20 : 24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-slate-900/98 to-gray-900/98 backdrop-blur-xl shadow-2xl border-t border-gray-700/50">
          <div className="container flex flex-col py-4">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `font-medium transition-all duration-300 ease-in-out px-6 py-4 mx-2 my-1 rounded-lg hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 hover:text-white transform hover:translate-x-2 ${
                    isActive 
                      ? 'text-white bg-gradient-to-r from-blue-500/30 to-purple-500/30 border-l-4 border-blue-400' 
                      : 'text-gray-300'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: isMenuOpen ? 'slideInRight 0.3s ease-out forwards' : 'none'
                }}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  )
}

export default Navbar