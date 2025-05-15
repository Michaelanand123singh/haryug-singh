import { Link } from 'react-router-dom'

const ServiceCard = ({ service, variant = 'default' }) => {
  const { id, title, description, icon, features } = service
  
  // Import the icon dynamically
  const IconComponent = icon ? ('lucide-react')[icon] : null
  
  if (variant === 'minimal') {
    return (
      <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-5 border border-gray-100">
        <div className="flex items-start">
          {IconComponent && (
            <div className="mr-4 text-primary">
              <IconComponent size={24} />
            </div>
          )}
          <div>
            <h3 className="text-lg font-bold mb-1">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      </div>
    )
  }
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
      <div className="p-6">
        <div className="mb-4 text-primary">
          {IconComponent && <IconComponent size={36} />}
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        
        {features && features.length > 0 && (
          <div className="mb-6">
            <h4 className="font-semibold text-dark mb-3">What you'll get:</h4>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
      <div className="mt-auto p-6 pt-0">
        <Link 
          to={`/${service.id.includes('coaching') ? 'coaching' : 'consulting'}#${id}`}
          className="btn btn-outline w-full hover:bg-primary hover:text-white hover:border-primary transition-colors"
        >
          Learn More
        </Link>
      </div>
    </div>
  )
}

export default ServiceCard