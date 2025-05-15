import { Star } from 'lucide-react'

const TestimonialCard = ({ testimonial }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        size={16}
        className={`${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ))
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
      <div className="flex items-center mb-4">
        {renderStars(testimonial.rating)}
      </div>
      
      <p className="text-gray-700 italic mb-6 flex-grow">"{testimonial.text}"</p>
      
      <div className="flex items-center mt-auto">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img
            src={testimonial.image || '/images/testimonials/default-avatar.jpg'}
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-dark">{testimonial.name}</h4>
          <p className="text-sm text-gray-600">{testimonial.position}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard