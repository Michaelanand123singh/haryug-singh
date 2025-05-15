import { Link } from 'react-router-dom'
import Card from '../ui/Card'

const About = () => {
  const achievements = [
    {
      title: '15+ Years',
      description: 'Business Experience',
      icon: 'calendar',
    },
    {
      title: '3 Successful',
      description: 'Ventures Founded',
      icon: 'building',
    },
    {
      title: '500+ Clients',
      description: 'Businesses Transformed',
      icon: 'users',
    },
    {
      title: '25M+',
      description: 'In Venture Capital Raised',
      icon: 'dollar-sign',
    },
  ]

  return (
    <section id="about" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-4">Who Is Haryug Singh?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            An accomplished entrepreneur, strategic business coach, and consultant with a passion for 
            helping businesses reach their full potential.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/images/haryug-profile-2.jpg" 
                alt="Haryug Singh" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Background design element */}
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-primary/10 rounded-lg -z-10"></div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">My Entrepreneurial Journey</h3>
            
            <p className="mb-4">
              With over 15 years of experience in building and scaling businesses across multiple industries, 
              I've developed a unique approach to business growth that combines strategic vision with practical,
              actionable steps.
            </p>
            
            <p className="mb-6">
              As a serial entrepreneur who has built three successful ventures from the ground up, I understand
              the challenges and opportunities that business owners face at every stage of their journey.
              My experience spans venture capital, digital transformation, and business education.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {achievements.map((achievement, index) => (
                <Card key={index} className="p-4 text-center">
                  <h4 className="text-xl font-bold text-primary">{achievement.title}</h4>
                  <p className="text-gray-600">{achievement.description}</p>
                </Card>
              ))}
            </div>
            
            <Link to="/about" className="btn btn-primary">
              Learn More About My Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About