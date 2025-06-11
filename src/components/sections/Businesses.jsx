import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink, Sparkles, TrendingUp } from 'lucide-react'
import { businesses } from '../../constants/businesses'

const Businesses = () => {
  return (
    <section id="businesses" className="relative py-16 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle gradient orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-500/8 to-purple-600/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/6 to-blue-600/6 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.03),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.03),transparent_50%)] animate-pulse"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Premium Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-400/20 px-3 py-1.5 rounded-full mb-4">
              <Sparkles className="w-3 h-3 text-blue-500 animate-pulse" />
              <span className="text-xs font-medium text-blue-600 tracking-wide">MY VENTURES</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
              <span className="text-gray-900">Successful </span>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Ventures
              </span>
            </h2>
            
            <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Building and scaling <span className="text-blue-600 font-medium">industry-leading businesses</span> with 
              <span className="text-purple-600 font-medium"> innovative strategies</span> and proven methodologies.
            </p>
          </div>

          <div className="space-y-12">
            {businesses.map((business, index) => (
              <div 
                key={business.id} 
                className={`group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                  index % 2 !== 0 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Floating background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/3 to-purple-500/3 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-105 blur-xl"></div>
                
                {/* Image Column */}
                <div className={`lg:col-span-5 relative ${index % 2 !== 0 ? 'lg:col-start-8' : ''}`}>
                  <div className="relative group/image">
                    {/* Animated border */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-600/20 rounded-xl opacity-0 group-hover/image:opacity-100 transition-all duration-700 blur-sm"></div>
                    
                    <div className="relative overflow-hidden rounded-xl bg-white shadow-lg border border-gray-100 group-hover/image:shadow-2xl transition-all duration-500">
                      <div className="relative h-64 overflow-hidden">
                        <img 
                          src={business.image} 
                          alt={business.name} 
                          className="w-full h-full object-cover transition-all duration-700 group-hover/image:scale-105"
                        />
                        
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>
                    
                    {/* Role badge */}
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2.5 py-1 rounded-full text-xs font-medium shadow-lg transform group-hover/image:scale-110 transition-all duration-300">
                      {business.role}
                    </div>
                    
                    {/* Success indicator */}
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm border border-green-200 p-1.5 rounded-full shadow-sm transform group-hover/image:scale-110 transition-all duration-300">
                      <TrendingUp className="w-3 h-3 text-green-500" />
                    </div>
                  </div>
                </div>
                
                {/* Content Column */}
                <div className={`lg:col-span-7 relative ${index % 2 !== 0 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="max-w-xl">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">
                      {business.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {business.description}
                    </p>
                    
                    {/* Achievement Cards */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-1 h-4 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                        <h4 className="font-semibold text-gray-900 text-sm">Key Achievements</h4>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-2">
                        {business.achievements.slice(0, 3).map((achievement, i) => (
                          <div 
                            key={i} 
                            className="group/achievement flex items-start gap-3 p-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300"
                          >
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-600 leading-relaxed group-hover/achievement:text-gray-800 transition-colors duration-300">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* CTA Button */}
                    <a 
                      href={business.website} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="group/link inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-all duration-300"
                    >
                      <span>Visit Website</span>
                      <ExternalLink className="w-4 h-4 transition-all duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <div className="mt-14 text-center">
            <div className="relative inline-block">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-30 blur-sm"></div>
              <Link 
                to="/businesses" 
                className="relative group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span>Explore All Ventures</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default Businesses