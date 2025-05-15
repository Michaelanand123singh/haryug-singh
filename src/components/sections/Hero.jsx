import { Link } from 'react-router-dom'
import SocialLinks from '../shared/SocialLinks'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20 lg:py-32">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.svg')] bg-repeat"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Transforming Businesses.
              <span className="block text-primary-light">Empowering Entrepreneurs.</span>
            </h1>
            
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-xl">
              I help entrepreneurs and business leaders scale their ventures, streamline operations, and achieve sustainable growth through strategic coaching and consulting.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/contact" className="btn btn-primary text-center">
                Book a Free Consultation
              </Link>
              <Link to="/about" className="btn btn-outline border-white text-white hover:bg-white hover:text-indigo-900 text-center">
                Learn More About Me
              </Link>
            </div>
            
            <div className="mt-8">
              <p className="text-white/80 mb-3">Connect with me</p>
              <SocialLinks className="text-white" />
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/images/haryug-profile.jpg"
                alt="Haryug Singh"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Stats overlay */}
            <div className="absolute -bottom-6 -left-6 bg-white text-dark p-6 rounded-lg shadow-lg">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-4xl font-bold text-primary">15+</p>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary">500+</p>
                  <p className="text-gray-600">Clients Helped</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero