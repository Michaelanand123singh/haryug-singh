import { Link } from 'react-router-dom'
import Card from '../ui/Card'

const About = () => {
  const achievements = [
    {
      title: '15+',
      subtitle: 'Years',
      description: 'Business Experience',
      icon: '📅',
    },
    {
      title: '3',
      subtitle: 'Successful',
      description: 'Ventures Founded',
      icon: '🏢',
    },
    {
      title: '500+',
      subtitle: 'Clients',
      description: 'Transformed',
      icon: '👥',
    },
    {
      title: '$25M+',
      subtitle: 'Capital',
      description: 'Raised',
      icon: '💰',
    },
  ]

  return (
    <section id="about" className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.03),transparent_50%)]"></div>
      
      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-primary/5 px-4 py-2 rounded-full mb-4">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-primary tracking-wide">ABOUT HARYUG</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Strategic Business 
              <span className="text-primary"> Architect</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Transforming businesses through strategic vision and proven methodologies
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Image Column */}
            <div className="lg:col-span-5">
              <div className="relative group">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 p-1">
                  <div className="relative h-[400px] rounded-xl overflow-hidden bg-white">
                    <img 
                      src="/images/haryug-profile-2.jpg" 
                      alt="Haryug Singh" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  </div>
                </div>
                
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-2xl p-4 border border-gray-100">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">15+</div>
                    <div className="text-xs text-gray-600 font-medium">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7">
              <div className="max-w-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Proven Track Record of Excellence
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Serial entrepreneur with a passion for building scalable businesses and mentoring 
                  next-generation leaders. My approach combines strategic insight with hands-on execution 
                  to deliver measurable results.
                </p>
                
                {/* Achievements Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {achievements.map((achievement, index) => (
                    <div 
                      key={index} 
                      className="group relative overflow-hidden rounded-xl bg-white border border-gray-100 p-5 hover:shadow-lg transition-all duration-300 hover:border-primary/20"
                    >
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-2xl"></div>
                      <div className="relative">
                        <div className="text-2xl mb-1">{achievement.icon}</div>
                        <div className="flex items-baseline gap-1 mb-1">
                          <span className="text-2xl font-bold text-gray-900">{achievement.title}</span>
                          {achievement.subtitle && (
                            <span className="text-sm font-medium text-primary">{achievement.subtitle}</span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 font-medium">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* CTA */}
                <div className="flex items-center gap-4">
                  <Link 
                    to="/about" 
                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
                  >
                    Discover My Journey
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full border-2 border-white"></div>
                      <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-full border-2 border-white"></div>
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full border-2 border-white"></div>
                    </div>
                    <span>Trusted by 500+ clients</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About