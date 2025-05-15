import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'
import { businesses } from '../constants/businesses'

const BusinessesPage = () => {
  useEffect(() => {
    document.title = 'My Businesses | Haryug Singh'
  }, [])

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gray-50 py-20">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">My Businesses & Ventures</h1>
          <p className="text-xl text-gray-600 mb-8">
            A portfolio of businesses I've founded, co-founded, or invested in over the years.
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="container max-w-4xl mx-auto py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Entrepreneurial Portfolio</h2>
          <p className="text-lg text-gray-600">
            As a serial entrepreneur, I've had the privilege of building and scaling multiple businesses across different industries. Each venture represents a unique journey, challenge, and opportunity to create value and impact.
          </p>
        </div>

        {/* Businesses List */}
        <div className="space-y-24">
          {businesses.map((business) => (
            <div key={business.id} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Business Image */}
              <div className={`rounded-lg overflow-hidden shadow-lg ${business.id % 2 === 0 ? 'md:order-2' : ''}`}>
                <img 
                  src={business.image} 
                  alt={business.name} 
                  className="w-full h-auto"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://via.placeholder.com/600x400?text=${business.name.replace(/\s+/g, '+')}`;
                  }}
                />
              </div>
              
              {/* Business Info */}
              <div>
                <h3 className="text-2xl font-bold mb-2">{business.name}</h3>
                <p className="text-primary font-medium mb-4">{business.role}</p>
                <p className="text-gray-700 mb-6">{business.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-bold mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {business.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a 
                  href={business.website} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-primary font-medium hover:text-primary-dark"
                >
                  Visit Website <ExternalLink className="ml-1" size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Business Interests */}
        <div className="mt-24 bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6">Additional Business Interests</h3>
          <p className="text-gray-700 mb-6">
            Beyond the businesses showcased above, I'm also involved in several other ventures as an investor, advisor, or board member. These include:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 bg-white">
              <h4 className="font-bold mb-2">Angel Investing</h4>
              <p>
                As an angel investor, I've backed innovative startups in fintech, healthtech, and sustainable technologies. I typically invest in early-stage companies with strong founding teams and disruptive potential.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 bg-white">
              <h4 className="font-bold mb-2">Board Positions</h4>
              <p>
                I serve on the board of several companies and non-profit organizations, providing strategic guidance and governance oversight to help these entities achieve their missions.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 bg-white">
              <h4 className="font-bold mb-2">Advisory Roles</h4>
              <p>
                I advise select companies on matters of strategy, growth, fundraising, and organizational development, leveraging my experience to help them navigate critical business challenges.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 bg-white">
              <h4 className="font-bold mb-2">Entrepreneurship Education</h4>
              <p>
                Through various platforms and institutions, I contribute to entrepreneurship education by developing curriculum, delivering workshops, and mentoring aspiring entrepreneurs.
              </p>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Interested in Working Together?</h3>
          <p className="text-gray-700 mb-6">
            Whether you're looking for investment, advisory services, or exploring potential collaborations, I'd love to hear from you.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BusinessesPage