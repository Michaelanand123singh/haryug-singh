import { useEffect } from 'react'

const AboutPage = () => {
  useEffect(() => {
    document.title = 'About Haryug Singh | Entrepreneur, Business Coach & Consultant'
  }, [])

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gray-50 py-20">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Haryug Singh</h1>
          <p className="text-xl text-gray-600 mb-8">
            Entrepreneur, Business Coach, and Consultant with a passion for helping businesses scale and succeed.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container max-w-4xl mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Profile Image */}
          <div className="md:col-span-1">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/images/haryug-profile.jpg" 
                alt="Haryug Singh" 
                className="w-full h-auto"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/400x500?text=Haryug+Singh';
                }}
              />
            </div>
            
            <div className="mt-8 bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Key Expertise</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="bg-primary rounded-full w-2 h-2 mr-2"></span>
                  <span>Business Strategy</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-primary rounded-full w-2 h-2 mr-2"></span>
                  <span>Startup Acceleration</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-primary rounded-full w-2 h-2 mr-2"></span>
                  <span>Digital Transformation</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-primary rounded-full w-2 h-2 mr-2"></span>
                  <span>Investment Advisory</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-primary rounded-full w-2 h-2 mr-2"></span>
                  <span>Leadership Development</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bio Content */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-6">My Journey</h2>
            
            <div className="prose max-w-none">
              <p className="text-lg mb-6">
                With over 15 years of experience in entrepreneurship and business development, I've built and scaled multiple successful ventures across technology, consulting, and education sectors.
              </p>
              
              <p className="mb-6">
                My entrepreneurial journey began when I founded my first tech startup at the age of 23, which was later acquired by a major industry player. This early success fueled my passion for building businesses and helping others do the same.
              </p>
              
              <p className="mb-6">
                Over the years, I've worked with hundreds of entrepreneurs and businesses, from early-stage startups to established enterprises, helping them navigate challenges, seize opportunities, and achieve sustainable growth.
              </p>
              
              <h3 className="text-2xl font-bold mt-10 mb-4">My Philosophy</h3>
              
              <p className="mb-6">
                I believe that successful entrepreneurship is built on three core pillars: strategic vision, operational excellence, and authentic leadership. My approach combines practical business strategies with a deep understanding of human psychology and organizational dynamics.
              </p>
              
              <p className="mb-6">
                Whether I'm coaching an aspiring entrepreneur or consulting for a multinational corporation, my goal remains the same: to empower businesses and their leaders to realize their full potential and create lasting impact.
              </p>
              
              <h3 className="text-2xl font-bold mt-10 mb-4">Education & Credentials</h3>
              
              <ul className="list-disc pl-5 mb-6 space-y-2">
                <li>MBA, Harvard Business School</li>
                <li>B.Tech in Computer Science, Indian Institute of Technology</li>
                <li>Certified Business Coach, International Coach Federation</li>
                <li>Member, Entrepreneurs' Organization (EO)</li>
                <li>TEDx Speaker</li>
              </ul>
              
              <h3 className="text-2xl font-bold mt-10 mb-4">Beyond Business</h3>
              
              <p className="mb-6">
                When I'm not working with businesses or developing new ventures, you'll find me mentoring young entrepreneurs, practicing meditation, exploring new hiking trails, or experimenting with fusion cooking. I'm a firm believer in work-life integration and bring the energy and insights from my personal passions into my professional endeavors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage