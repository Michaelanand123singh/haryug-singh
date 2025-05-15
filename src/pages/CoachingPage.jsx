import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { coachingServices } from '../constants/services'
import { BookOpen, Target, Users, Calendar } from 'lucide-react'

const CoachingPage = () => {
  const iconMap = {
    'rocket': Target,
    'trending-up': Target,
    'users': Users,
  }

  useEffect(() => {
    document.title = 'Business Coaching | Haryug Singh'
  }, [])

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Business Coaching</h1>
          <p className="text-xl mb-8">
            Personalized guidance to help you overcome challenges, maximize potential, and achieve extraordinary business results.
          </p>
          <Link to="/contact" className="btn bg-white text-primary hover:bg-gray-100">
            Schedule a Free Strategy Call
          </Link>
        </div>
      </div>

      {/* Coaching Approach */}
      <div className="container max-w-4xl mx-auto py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">My Coaching Approach</h2>
          <p className="text-lg text-gray-600">
            I believe that effective coaching combines strategic business insight with personal development. My approach is tailored to each client's unique situation, challenges, and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-bold mb-4">What Makes My Coaching Different</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span><strong>Hands-on Experience:</strong> As an active entrepreneur, I bring practical, real-world insights to our coaching relationship.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span><strong>Results-Oriented:</strong> Every coaching engagement is focused on delivering measurable business outcomes.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span><strong>Holistic Perspective:</strong> I address both business strategy and leadership development for comprehensive growth.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span><strong>Accountability Partner:</strong> I'll help you stay focused, committed, and accountable to your goals and action plans.</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-bold mb-4">Coaching Process</h3>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 shrink-0">1</span>
                <span><strong>Discovery Session:</strong> We begin with a comprehensive assessment of your current situation, challenges, and aspirations.</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 shrink-0">2</span>
                <span><strong>Strategy Development:</strong> Together, we create a customized roadmap with clear goals and action steps.</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 shrink-0">3</span>
                <span><strong>Implementation Support:</strong> Regular sessions to provide guidance, troubleshoot challenges, and refine strategies.</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 shrink-0">4</span>
                <span><strong>Progress Evaluation:</strong> Systematic assessment of results and adjustments to optimize performance.</span>
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* Coaching Services */}
      <div className="bg-gray-50 py-16">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Coaching Services</h2>
            <p className="text-lg text-gray-600">
              Specialized coaching programs designed to address specific business challenges and growth opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coachingServices.map((service) => {
              const IconComponent = iconMap[service.icon] || Target
              
              return (
                <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-primary-light p-6 flex justify-center">
                    <IconComponent size={40} className="text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-700 mb-4">{service.description}</p>
                    <h4 className="font-medium text-sm uppercase tracking-wider text-gray-500 mb-2">Includes:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-sm">
                          <span className="text-primary mr-2 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Coaching Formats */}
      <div className="container max-w-4xl mx-auto py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Coaching Formats</h2>
          <p className="text-lg text-gray-600">
            Flexible coaching options to accommodate your schedule, preferences, and specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="border border-gray-200 rounded-lg p-8">
            <div className="flex items-center mb-4">
              <Users className="text-primary mr-3" size={24} />
              <h3 className="text-xl font-bold">One-on-One Coaching</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Personalized, private coaching sessions focused exclusively on your business challenges and opportunities. Ideal for entrepreneurs, CEOs, and business owners seeking dedicated attention and customized strategies.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-sm">
                <span className="text-primary mr-2">•</span>
                <span>Weekly or bi-weekly sessions</span>
              </li>
              <li className="flex items-center text-sm">
                <span className="text-primary mr-2">•</span>
                <span>Virtual or in-person options</span>
              </li>
              <li className="flex items-center text-sm">
                <span className="text-primary mr-2">•</span>
                <span>Email/messaging support between sessions</span>
              </li>
              <li className="flex items-center text-sm">
                <span className="text-primary mr-2">•</span>
                <span>3, 6, or 12-month engagement options</span>
              </li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-8">
            <div className="flex items-center mb-4">
              <BookOpen className="text-primary mr-3" size={24} />
              <h3 className="text-xl font-bold">Group Coaching Programs</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Collaborative coaching experiences that combine the benefits of personal guidance with peer learning and networking opportunities. Perfect for entrepreneurs looking to grow alongside like-minded business leaders.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-sm">
                <span className="text-primary mr-2">•</span>
                <span>Small groups (5-8 participants)</span>
              </li>
              <li className="flex items-center text-sm">
                <span className="text-primary mr-2">•</span>
                <span>Industry-specific or mixed cohorts</span>
              </li>
              <li className="flex items-center text-sm">
                <span className="text-primary mr-2">•</span>
                <span>Monthly group sessions + quarterly individual check-ins</span>
              </li>
              <li className="flex items-center text-sm">
                <span className="text-primary mr-2">•</span>
                <span>Private community for ongoing support</span>
              </li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-8">
            <div className="flex items-center mb-4">
              <Calendar className="text-primary mr-3" size={24} />
              <h3 className="text-xl font-bold">Intensive Strategy Days</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Focused, immersive coaching experiences designed to solve specific challenges or develop comprehensive strategies in a concentrated timeframe. Ideal for addressing urgent business needs or kickstarting major initiatives.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-sm">
                <span className="text-primary mr-2">•</span>
                <span>Full-day or half-day formats</span>
              </li>
              <li className="flex items-center text-sm">
                <span className="text-primary mr-2">•</span>
                <span>In-person at your location or retreat setting</span>
              </li>
              <li className="flex items-center text-sm">
                <span className="text-primary mr-2">•</span>
                <span>Pre-work and post-session implementation plan</span>
              </li>
              <li className="flex items-center text-sm">
                <span className="text-primary mr-2">•</span>
                <span>Optional follow-up support package</span>
              </li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-8">
            <div className="flex items-center mb-4">
              <Target className="text-primary mr-3" size={24} />
              <h3 className="text-xl font-bold">Executive Team Coaching</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Specialized coaching for leadership teams to enhance collaboration, strategic alignment, and collective performance. Perfect for organizations undergoing growth, transformation, or seeking to strengthen their leadership capability.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-sm">
                <span className="text-primary mr-2">•</span>
                <span>Team assessment and alignment sessions</span>
              </li>
              <li className="flex items-center text-sm">
                <span className="text-primary mr-2">•</span>
                <span>Combination of group and individual coaching</span>
              </li>
              <li className="flex items-center text-sm">
                <span className="text-primary mr-2">•</span>
                <span>Focus on communication, collaboration, and execution</span>
              </li>
              <li className="flex items-center text-sm">
                <span className="text-primary mr-2">•</span>
                <span>Customized to your organization's specific needs</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-primary text-white py-16">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the first step toward achieving extraordinary business results with personalized coaching support tailored to your unique challenges and goals.
          </p>
          <Link to="/contact" className="btn bg-white text-primary hover:bg-gray-100 text-lg px-8 py-3">
            Schedule Your Free Strategy Call
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CoachingPage