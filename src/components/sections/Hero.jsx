import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import SocialLinks from '../shared/SocialLinks'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div 
          className="absolute w-48 h-48 md:w-64 md:h-64 bg-gradient-to-r from-blue-500/15 to-slate-600/15 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.08}px, ${mousePosition.y * 0.08}px)`,
            top: '15%',
            left: '15%'
          }}
        ></div>
        <div 
          className="absolute w-32 h-32 md:w-48 md:h-48 bg-gradient-to-r from-gray-500/10 to-blue-600/10 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            transform: `translate(${-mousePosition.x * 0.04}px, ${-mousePosition.y * 0.04}px)`,
            bottom: '15%',
            right: '15%'
          }}
        ></div>
        
        {/* Animated grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:40px_40px] animate-pulse"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-blue-400/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="container relative z-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className={`transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-gray-600/10 border border-blue-400/20 backdrop-blur-sm mb-4">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
              <span className="text-xs text-blue-300 font-medium">Available for new projects</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                Transforming
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                Businesses.
              </span>
              <br />
              <span className="bg-gradient-to-r from-gray-300 via-blue-400 to-gray-300 bg-clip-text text-transparent">
                Empowering Entrepreneurs.
              </span>
            </h1>
            
            <p className="text-base md:text-lg text-gray-300 mb-6 max-w-xl leading-relaxed">
              I help entrepreneurs 
              <span className="text-blue-300 font-medium"> scale their ventures</span>, 
              <span className="text-gray-200 font-medium"> streamline operations</span>, and achieve 
              <span className="text-blue-400 font-medium"> sustainable growth</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link 
                to="/contact" 
                className="group relative px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white text-sm font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 text-center overflow-hidden"
              >
                <span className="relative z-10">Book Free Consultation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link 
                to="/about" 
                className="group px-5 py-2.5 border border-gray-400/30 text-white hover:border-blue-400 text-sm font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-gray-500/10 backdrop-blur-sm text-center"
              >
                Learn More
                <span className="inline-block ml-1 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>
            
            <div className="space-y-2">
              <p className="text-gray-500 text-xs uppercase tracking-wide font-medium">Connect with me</p>
              <SocialLinks className="text-gray-400 hover:text-blue-400 transition-colors duration-300" />
            </div>
          </div>
          
          <div className={`relative hidden lg:block transition-all duration-1000 delay-300 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            {/* Main image container */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-gray-600 to-blue-600 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-slate-900 border border-gray-700/50">
                <img
                  src="/images/haryug-profile.jpg"
                  alt="Haryug Singh"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
            
            {/* Floating stats cards */}
            <div className="absolute -bottom-4 -left-4 transform hover:scale-105 transition-all duration-300">
              <div className="bg-slate-800/80 backdrop-blur-xl border border-gray-600/30 p-3 rounded-xl shadow-xl">
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center">
                    <p className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">15+</p>
                    <p className="text-gray-300 text-xs font-medium">Years</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold bg-gradient-to-r from-gray-300 to-blue-500 bg-clip-text text-transparent">500+</p>
                    <p className="text-gray-300 text-xs font-medium">Clients</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Success rate card */}
            <div className="absolute -top-3 -right-3 transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-r from-blue-500/15 to-gray-600/15 backdrop-blur-xl border border-blue-400/20 p-2.5 rounded-lg">
                <div className="flex items-center space-x-1.5">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-blue-300 font-semibold text-xs">98% Success</span>
                </div>
              </div>
            </div>

            {/* Additional floating element */}
            <div className="absolute top-1/2 -left-2 transform -translate-y-1/2 hover:scale-110 transition-all duration-300">
              <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-600/40 p-2 rounded-md">
                <div className="flex items-center space-x-1">
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>
                  <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes tilt {
          0%, 50%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(0.3deg);
          }
          75% {
            transform: rotate(-0.3deg);
          }
        }
        .animate-tilt {
          animation: tilt 12s infinite linear;
        }
      `}</style>
    </section>
  )
}

export default Hero