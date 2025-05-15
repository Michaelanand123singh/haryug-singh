import { Link } from 'react-router-dom'
import ServiceCard from '../ui/ServiceCard'
import { coachingServices, consultingServices } from '../../constants/services'

const Services = () => {
  // Combine coaching and consulting services and take the first 4
  const featuredServices = [...coachingServices, ...consultingServices].slice(0, 4)

  return (
    <section id="services" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-4">How I Can Help You</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I offer specialized coaching and consulting services designed to accelerate your business growth
            and help you overcome obstacles on your entrepreneurial journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
          <Link to="/coaching" className="btn btn-primary">
            Business Coaching Services
          </Link>
          <Link to="/consulting" className="btn btn-outline hover:bg-primary hover:text-white hover:border-primary">
            Strategic Consulting Services
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Services