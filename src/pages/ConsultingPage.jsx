import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const ConsultingPage = () => {
  // Consulting services data
  const consultingServices = [
    {
      id: 'business-strategy',
      title: 'Business Strategy Development',
      description: 'Create a clear vision and actionable roadmap to achieve your business goals, addressing market opportunities and competitive challenges.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      id: 'market-expansion',
      title: 'Market Expansion & Entry',
      description: 'Analyze new market opportunities, develop entry strategies, and execute successful expansions to grow your business in new territories or segments.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 'organizational-transformation',
      title: 'Organizational Transformation',
      description: 'Guide your business through major changes, restructuring, or digital transformation with minimal disruption and maximum effectiveness.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      id: 'leadership-development',
      title: 'Leadership Development',
      description: 'Strengthen your executive teams capabilities through strategic training and mentoring to drive organizational excellence.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 'financial-advisory',
      title: 'Financial Advisory',
      description: 'Optimize financial performance through improved planning, analysis, and strategic decision-making to drive profitability and growth.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 'operational-efficiency',
      title: 'Operational Efficiency',
      description: 'Streamline business processes, reduce waste, and implement best practices to enhance productivity and reduce operational costs.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  // Process steps for consulting
  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Assessment',
      description: 'In-depth analysis of your business situation, challenges, and opportunities to establish a baseline understanding.'
    },
    {
      number: '02',
      title: 'Strategy Development',
      description: 'Collaborative creation of a tailored action plan with clear objectives, timelines, and resource requirements.'
    },
    {
      number: '03',
      title: 'Implementation Support',
      description: 'Hands-on guidance during execution to ensure successful implementation of recommended strategies.'
    },
    {
      number: '04',
      title: 'Results Monitoring',
      description: 'Ongoing measurement of outcomes against objectives with adjustments as needed to optimize results.'
    }
  ];

  // Client success stories (testimonials specific to consulting)
  const clientSuccessStories = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, TechInnovate',
      image: '/images/testimonials/client1.jpg',
      quote: 'Haryugs strategic guidance helped us pivot our business model during a challenging market shift, resulting in 40% revenue growth within six months.',
      industry: 'Technology'
    },
    {
      name: 'Michael Chen',
      position: 'Founder, GreenEco Solutions',
      image: '/images/testimonials/client2.jpg',
      quote: 'The operational efficiency framework that Haryug implemented transformed our manufacturing processes, reducing costs by 25% while improving quality metrics.',
      industry: 'Manufacturing'
    },
    {
      name: 'Priya Patel',
      position: 'Managing Director, Global Retail Group',
      image: '/images/testimonials/client3.jpg',
      quote: 'Haryugs market entry strategy was instrumental in our successful expansion into three new international markets, exceeding our growth targets by 30%.',
      industry: 'Retail'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Strategic Business Consulting</h1>
              <p className="text-xl mb-8 opacity-90">
                Transforming challenges into opportunities with data-driven insights and actionable strategies for sustainable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  as={Link}
                  to="/contact"
                  variant="primary"
                  size="lg"
                >
                  Schedule a Consultation
                </Button>
                <Button
                  as={Link}
                  to="#services"
                  variant="outline"
                  size="lg"
                >
                  Explore Services
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <h3 className="text-xl font-semibold mb-4">Why Work With Me</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-300 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>20+ years of executive leadership experience</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-300 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Successful portfolio of diverse businesses</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-300 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Cross-industry expertise and perspective</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-300 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Proven track record of delivering results</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Consulting Services Section */}
      <div id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Specialized Consulting Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Customized solutions to address your most critical business challenges and capitalize on emerging opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultingServices.map((service) => (
              <div 
                key={service.id}
                className="bg-white rounded-lg shadow-md p-8 transition-all hover:shadow-lg border-t-4 border-blue-600"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link 
                  to={`#${service.id}`} 
                  className="flex items-center text-blue-600 font-medium hover:text-blue-800"
                >
                  <span>Learn more</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Consulting Process Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Consulting Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that delivers clarity, focus, and measurable results for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-blue-50 rounded-lg p-8 border border-blue-100 h-full">
                  <div className="text-4xl font-bold text-blue-600 mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories / Testimonials */}
      <div className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Success Stories</h2>
            <p className="text-xl opacity-80 max-w-3xl mx-auto">
              Real results from businesses that have transformed their operations, strategy, and performance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {clientSuccessStories.map((story, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-8 border border-gray-700">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img 
                      src={story.image || "/api/placeholder/64/64"} 
                      alt={story.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{story.name}</h4>
                    <p className="text-blue-300">{story.position}</p>
                    <span className="inline-block bg-blue-900 text-blue-200 px-2 py-1 text-xs rounded mt-1">
                      {story.industry}
                    </span>
                  </div>
                </div>
                <blockquote className="italic opacity-90 mb-4">"{story.quote}"</blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">
                Common questions about my consulting services and approach.
              </p>
            </div>

            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold mb-3">How long does a typical consulting engagement last?</h3>
                <p className="text-gray-600">
                  Engagements vary based on project scope and complexity. Strategic assessments typically require 4-6 weeks, while comprehensive transformation projects may span 6-12 months. We'll define clear timelines and milestones during our initial consultation.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold mb-3">What industries do you specialize in?</h3>
                <p className="text-gray-600">
                  I have extensive experience across technology, manufacturing, retail, financial services, and healthcare sectors. My cross-industry perspective often brings valuable insights that wouldn't be available from single-industry consultants.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold mb-3">How do you measure the success of your consulting work?</h3>
                <p className="text-gray-600">
                  We establish clear, measurable objectives at the beginning of each engagement, which may include revenue growth, cost reduction, market share gains, or operational metrics. Regular check-ins ensure we're on track, and I provide detailed reporting on outcomes achieved.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold mb-3">Do you offer ongoing support after project completion?</h3>
                <p className="text-gray-600">
                  Yes, I offer flexible support options including quarterly reviews, advisory retainers, and implementation coaching to ensure sustained results. Many clients maintain a relationship for strategic guidance as new challenges and opportunities arise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call To Action */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Schedule your initial consultation to discuss your challenges and explore how strategic consulting can help you achieve breakthrough results.
          </p>
          <Button
            as={Link}
            to="/contact"
            variant="white"
            size="lg"
          >
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConsultingPage;