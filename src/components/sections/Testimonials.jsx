import TestimonialCard from '../ui/TestimonialCard'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO, TechStart Solutions',
      image: '/images/testimonials/testimonial-1.jpg',
      text: 'Working with Haryug was transformative for our business. His strategic guidance helped us triple our revenue in just 18 months while building a more sustainable operational model.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Founder, GrowFast Marketing',
      image: '/images/testimonials/testimonial-2.jpg',
      text: 'Haryugscoaching completely changed my approach to business. He helped me refine my business model, attract better clients, and build systems that allowed me to work less while earning more.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Priya Patel',
      position: 'CFO, Innovate Retail',
      image: '/images/testimonials/testimonial-3.jpg',
      text: 'The insights and strategies Haryug brought to our company were game-changing. His experience across multiple industries gave us a fresh perspective that helped us break through our growth ceiling.',
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-4">Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what some of my clients have to say
            about their experience working with me.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        
        {/* Testimonial Quote */}
        <div className="mt-16 bg-primary/5 rounded-lg p-8 md:p-12 relative overflow-hidden">
          {/* Quote mark decoration */}
          <div className="absolute top-0 left-0 text-primary/10 text-9xl font-serif">"</div>
          
          <div className="relative z-10 text-center">
            <p className="text-xl md:text-2xl font-heading mb-6 max-w-4xl mx-auto">
              Haryug doesn't just provide advice—he partners with you to deeply understand your 
              business challenges and delivers strategic solutions that actually work in the real world.
            </p>
            
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-md mr-4">
                <img
                  src="/images/testimonials/testimonial-featured.jpg"
                  alt="David Martinez"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <p className="font-bold">David Martinez</p>
                <p className="text-gray-600">Founder & CEO, Elevation Brands</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials