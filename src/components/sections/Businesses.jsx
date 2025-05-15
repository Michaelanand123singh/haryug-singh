import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { businesses } from '../../constants/businesses'

const Businesses = () => {
  return (
    <section id="businesses" className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-4">My Ventures</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I've founded and led multiple successful businesses across different industries,
            each aligned with my mission to help entrepreneurs and businesses thrive.
          </p>
        </div>

        <div className="space-y-16">
          {businesses.map((business, index) => (
            <div 
              key={business.id} 
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                index % 2 !== 0 ? 'md:grid-flow-dense' : ''
              }`}
            >
              {/* Image Column */}
              <div className={`${index % 2 !== 0 ? 'md:col-start-2' : ''}`}>
                <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={business.image} 
                    alt={business.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Content Column */}
              <div>
                <h3 className="text-3xl font-bold mb-3">{business.name}</h3>
                <p className="text-primary font-medium mb-6">{business.role}</p>
                
                <p className="text-gray-700 mb-6">
                  {business.description}
                </p>
                
                <div className="mb-8">
                  <h4 className="font-semibold mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {business.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2 mt-1">•</span>
                        <span className="text-gray-700">{achievement}</span>
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
                  Visit Website <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/businesses" className="btn btn-primary">
            Explore All My Ventures
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Businesses