import { Link } from 'react-router-dom'
import SocialLinks from '../shared/SocialLinks'
import { navLinks } from '../../constants/navigation'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-heading font-bold">
              Haryug Singh
            </Link>
            <p className="mt-4 text-gray-300">
              Entrepreneur, Business Coach & Consultant helping businesses scale and succeed.
            </p>
            <div className="mt-6">
              <SocialLinks className="text-white" />
            </div>
          </div>

          {/* Navigation Column */}
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/coaching" className="text-gray-300 hover:text-white transition-colors">
                  Business Coaching
                </Link>
              </li>
              <li>
                <Link to="/consulting" className="text-gray-300 hover:text-white transition-colors">
                  Strategic Consulting
                </Link>
              </li>
              <li>
                <Link to="/businesses" className="text-gray-300 hover:text-white transition-colors">
                  My Ventures
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Book a Call
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">
                Email: <a href="mailto:contact@haryugsingh.com" className="hover:text-white transition-colors">contact@haryugsingh.com</a>
              </li>
              <li className="text-gray-300">
                Phone: <a href="tel:+12345678901" className="hover:text-white transition-colors">+1 (234) 567-8901</a>
              </li>
              <li className="text-gray-300 mt-4">
                <Link to="/contact" className="btn btn-primary px-4 py-2 text-sm">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>© {currentYear} Haryug Singh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer