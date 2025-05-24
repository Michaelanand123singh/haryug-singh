import { useEffect, useState } from 'react'
import { ExternalLink, TrendingUp, Users, Award, Globe } from 'lucide-react'

// Mock businesses data
const businesses = [
  {
    id: 1,
    name: "TechVenture Solutions",
    role: "Founder & CEO",
    description: "A cutting-edge technology consultancy specializing in digital transformation and AI implementation for Fortune 500 companies.",
    achievements: [
      "Scaled from startup to $10M ARR in 3 years",
      "Served 150+ enterprise clients across 20 countries",
      "Built a team of 80+ technology experts",
      "Recognized as 'Tech Company of the Year' 2023"
    ],
    website: "https://techventure.com",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
    status: "Active",
    founded: "2019"
  },
  {
    id: 2,
    name: "GreenEnergy Innovations",
    role: "Co-Founder & Chairman",
    description: "Pioneering sustainable energy solutions with focus on solar technology and energy storage systems for commercial applications.",
    achievements: [
      "Deployed 500+ MW of clean energy capacity",
      "Reduced carbon footprint by 2M tons annually",
      "Secured $50M Series B funding",
      "Expanded to 8 international markets"
    ],
    website: "https://greenenergy.com",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&h=400&fit=crop",
    status: "Active",
    founded: "2020"
  },
  {
    id: 3,
    name: "FinTech Dynamics",
    role: "Investor & Board Member",
    description: "Revolutionary fintech platform democratizing investment opportunities through blockchain technology and AI-driven insights.",
    achievements: [
      "Processed $1B+ in transactions",
      "Onboarded 500K+ active users",
      "Achieved regulatory compliance in 15 jurisdictions",
      "Winner of 'Best Fintech Innovation' award"
    ],
    website: "https://fintechdynamics.com",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    status: "Exited",
    founded: "2018"
  }
]

const BusinessesPage = () => {
  const [activeCard, setActiveCard] = useState(null)

  useEffect(() => {
    document.title = 'My Businesses | Haryug Singh'
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Premium Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-slate-900/40"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 container max-w-6xl mx-auto px-6 py-32">
          <div className="text-center text-white">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-8 border border-white/20">
              <TrendingUp className="w-4 h-4 mr-2" />
              Entrepreneurial Portfolio
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent leading-tight">
              Building the Future
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              A collection of transformative businesses and ventures that are reshaping industries and creating lasting impact across the globe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-slate-900 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                Explore Portfolio
              </button>
              <button className="px-8 py-4 bg-transparent text-white border-2 border-white/30 rounded-full font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
                Investment Opportunities
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container max-w-6xl mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { icon: Globe, label: "Global Reach", value: "25+ Countries" },
            { icon: Users, label: "Team Members", value: "200+ People" },
            { icon: TrendingUp, label: "Combined Revenue", value: "$50M+ ARR" },
            { icon: Award, label: "Awards Won", value: "15+ Recognitions" }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-xl border border-slate-200/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center justify-between mb-4">
                <stat.icon className="w-8 h-8 text-blue-600" />
                <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Businesses Portfolio */}
      <div className="container max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
            Portfolio Companies
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Each venture represents a unique opportunity to solve complex challenges, create meaningful impact, and drive innovation across diverse industries.
          </p>
        </div>

        <div className="space-y-20">
          {businesses.map((business, index) => (
            <div 
              key={business.id} 
              className={`group relative ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              onMouseEnter={() => setActiveCard(business.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Business Image */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 z-10"></div>
                  <img 
                    src={business.image} 
                    alt={business.name} 
                    className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://via.placeholder.com/600x400/1e293b/ffffff?text=${business.name.replace(/\s+/g, '+')}`;
                    }}
                  />
                  <div className="absolute top-6 left-6 z-20">
                    <div className={`px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm border ${
                      business.status === 'Active' 
                        ? 'bg-green-500/20 text-green-100 border-green-400/30' 
                        : 'bg-blue-500/20 text-blue-100 border-blue-400/30'
                    }`}>
                      {business.status}
                    </div>
                  </div>
                  <div className="absolute bottom-6 right-6 z-20">
                    <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/20">
                      Founded {business.founded}
                    </div>
                  </div>
                </div>
                
                {/* Business Info */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-4xl font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors duration-300">
                      {business.name}
                    </h3>
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-semibold mb-6">
                      {business.role}
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      {business.description}
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-slate-900 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-blue-600" />
                      Key Achievements
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      {business.achievements.map((achievement, achievementIndex) => (
                        <div 
                          key={achievementIndex} 
                          className="flex items-start p-4 bg-slate-50 rounded-xl border border-slate-200/50 hover:bg-blue-50 hover:border-blue-200 transition-all duration-300"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2.5 mr-4 flex-shrink-0"></div>
                          <span className="text-slate-700 font-medium">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <a 
                    href={business.website} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <Globe className="w-5 h-5 mr-2" />
                    Visit Website 
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Additional Business Interests */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-6">Beyond Direct Ventures</h3>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              My involvement in the entrepreneurial ecosystem extends through strategic investments, advisory roles, and educational initiatives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Angel Investing",
                description: "Backing innovative startups in fintech, healthtech, and sustainable technologies with capital and strategic guidance.",
                icon: TrendingUp
              },
              {
                title: "Board Positions",
                description: "Providing strategic oversight and governance expertise to companies and organizations driving meaningful change.",
                icon: Users
              },
              {
                title: "Advisory Roles",
                description: "Sharing expertise in strategy, growth, and organizational development with select high-potential companies.",
                icon: Award
              },
              {
                title: "Entrepreneurship Education",
                description: "Developing curriculum, delivering workshops, and mentoring the next generation of entrepreneurs.",
                icon: Globe
              }
            ].map((interest, index) => (
              <div 
                key={index} 
                className="group relative p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl mr-4">
                      <interest.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white">{interest.title}</h4>
                  </div>
                  <p className="text-slate-300 leading-relaxed">{interest.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Premium CTA Section */}
      <div className="container max-w-4xl mx-auto px-6 py-24">
        <div className="text-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 border border-blue-200/50 shadow-2xl">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-semibold mb-8">
            <Users className="w-4 h-4 mr-2" />
            Let's Collaborate
          </div>
          <h3 className="text-4xl font-bold text-slate-900 mb-6">
            Ready to Build Something Extraordinary?
          </h3>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you're seeking investment, strategic partnership, or advisory expertise, I'm always interested in connecting with visionary entrepreneurs and innovative companies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Schedule a Meeting
            </button>
            <button className="px-8 py-4 bg-white text-slate-900 border-2 border-slate-200 rounded-full font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all duration-300">
              View Investment Criteria
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusinessesPage