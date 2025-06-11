import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink, Sparkles, TrendingUp } from 'lucide-react'
import { businesses } from '../../constants/businesses'

const Businesses = () => {
  return (
    <section id="businesses" className="relative py-20 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Flowing gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/15 to-blue-600/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.1),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%),radial-gradient(circle_at_40%_80%,rgba(79,70,229,0.1),transparent_50%)] animate-pulse"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px] animate-pulse"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Premium Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-blue-400/20 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
              <span className="text-sm font-medium text-blue-300 tracking-wide">PREMIUM VENTURES</span>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Successful
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent animate-pulse">
                Ventures
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Building and scaling <span className="text-blue-400 font-semibold">industry-leading businesses</span> with 
              <span className="text-purple-400 font-semibold"> innovative strategies</span> and 
              <span className="text-blue-300 font-semibold">proven methodologies</span>.
            </p>
          </div>

          <div className="space-y-20">
            {businesses.map((business, index) => (
              <div 
                key={business.id} 
                className={`group relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                  index % 2 !== 0 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Floating background card */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-1000 transform group-hover:scale-105"></div>
                
                {/* Image Column */}
                <div className={`lg:col-span-5 relative ${index % 2 !== 0 ? 'lg:col-start-8' : ''}`}>
                  <div className="relative group/image">
                    {/* Animated border */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 rounded-2xl blur opacity-40 group-hover/image:opacity-100 transition-all duration-1000 animate-pulse"></div>
                    
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-gray-700/50">
                      <div className="relative h-80 overflow-hidden">
                        <img 
                          src={business.image} 
                          alt={business.name} 
                          className="w-full h-full object-cover transition-all duration-1000 group-hover/image:scale-110 group-hover/image:rotate-1"
                        />
                        
                        {/* Gradient overlays */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-700"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover/image:opacity-100 transition-opacity duration-700"></div>
                      </div>
                    </div>
                    
                    {/* Floating role badge */}
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500/90 to-purple-500/90 backdrop-blur-xl border border-blue-400/30 px-3 py-1.5 rounded-full transform group-hover/image:scale-110 transition-all duration-300">
                      <span className="text-xs font-semibold text-white tracking-wide">{business.role}</span>
                    </div>
                    
                    {/* Success indicator */}
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-xl border border-green-400/30 p-2 rounded-full transform group-hover/image:scale-110 transition-all duration-300">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                    </div>
                  </div>
                </div>
                
                {/* Content Column */}
                <div className={`lg:col-span-7 relative ${index % 2 !== 0 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="max-w-2xl">
                    <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                      {business.name}
                    </h3>
                    
                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                      {business.description}
                    </p>
                    
                    {/* Premium Achievement Cards */}
                    <div className="mb-8">
                      <div className="flex items-center gap-2 mb-4">
                        <Sparkles className="w-5 h-5 text-blue-400" />
                        <h4 className="font-bold text-white text-sm uppercase tracking-widest">Key Achievements</h4>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {business.achievements.slice(0, 4).map((achievement, i) => (
                          <div 
                            key={i} 
                            className="group/achievement relative overflow-hidden bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-xl border border-gray-600/30 p-4 rounded-xl hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105"
                          >
                            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover/achievement:scale-x-100 transition-transform duration-500"></div>
                            <div className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                              <span className="text-sm text-gray-300 leading-relaxed group-hover/achievement:text-white transition-colors duration-300">
                                {achievement}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Premium CTA */}
                    <a 
                      href={business.website} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="group/link inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
                    >
                      <span>Explore Venture</span>
                      <div className="relative">
                        <ExternalLink className="w-4 h-4 transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                        <div className="absolute inset-0 w-4 h-4 bg-white/20 rounded-full blur-sm opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Premium Bottom CTA */}
          <div className="mt-20 text-center">
            <div className="relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 rounded-2xl blur opacity-60 animate-pulse"></div>
              <Link 
                to="/businesses" 
                className="relative group inline-flex items-center gap-3 bg-gradient-to-r from-slate-800 to-slate-900 border border-gray-600/50 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <Sparkles className="w-5 h-5 text-blue-400 animate-pulse" />
                <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Explore All Ventures
                </span>
                <ArrowRight className="w-5 h-5 text-blue-400 transition-transform duration-300 group-hover:translate-x-2" />
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
            transform: translateY(-10px);
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }
      `}</style>
    </section>
  )
}

export default Businesses