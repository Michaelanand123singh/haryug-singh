import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Award, Book, Briefcase, Globe, Heart } from 'lucide-react'

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    document.title = 'About Haryug Singh | Entrepreneur, Business Coach & Consultant'
    setIsVisible(true)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const expertise = [
    { icon: <Briefcase size={20} />, text: "Business Strategy" },
    { icon: <ChevronRight size={20} />, text: "Startup Acceleration" },
    { icon: <Globe size={20} />, text: "Digital Transformation" },
    { icon: <Award size={20} />, text: "Investment Advisory" },
    { icon: <Book size={20} />, text: "Leadership Development" }
  ]

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Hero Section with Gradient Background */}
      <div className="bg-gradient-to-r from-indigo-900 via-blue-800 to-indigo-900 text-white py-32">
        <motion.div 
          className="container max-w-5xl mx-auto px-6 text-center"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 tracking-tight"
            variants={fadeIn}
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-100">Haryug Singh</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl font-light max-w-3xl mx-auto text-blue-100 mb-10"
            variants={fadeIn}
          >
            Entrepreneur, Business Coach, and Consultant with a passion for helping businesses scale and succeed.
          </motion.p>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-300 mx-auto mt-8 rounded-full"
            variants={fadeIn}
          ></motion.div>
        </motion.div>
      </div>

      {/* Photo and Intro Card - Overlapping the hero section */}
      <div className="container max-w-6xl mx-auto px-6 -mt-20">
        <motion.div 
          className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="md:w-2/5 relative overflow-hidden">
            <div className="h-full">
              <img 
                src="/images/haryug-profile.jpg" 
                alt="Haryug Singh" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/600x800?text=Haryug+Singh';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent"></div>
            </div>
          </div>
          <div className="md:w-3/5 p-8 md:p-12">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
            >
              <motion.span 
                className="inline-block px-4 py-1 rounded-full bg-indigo-50 text-indigo-600 font-medium text-sm mb-6"
                variants={fadeIn}
              >
                Visionary Entrepreneur
              </motion.span>
              
              <motion.h2 
                className="text-3xl font-bold text-gray-800 mb-6"
                variants={fadeIn}
              >
                Transforming businesses through strategic innovation
              </motion.h2>
              
              <motion.p
                className="text-lg text-gray-600 mb-8 leading-relaxed"
                variants={fadeIn}
              >
                With over 15 years of experience in entrepreneurship and business development, I've built and scaled multiple successful ventures across technology, consulting, and education sectors.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                variants={fadeIn}
              >
                <span className="px-4 py-2 rounded-full border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition duration-300">
                  Entrepreneur
                </span>
                <span className="px-4 py-2 rounded-full border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition duration-300">
                  Business Coach
                </span>
                <span className="px-4 py-2 rounded-full border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition duration-300">
                  Strategy Consultant
                </span>
                <span className="px-4 py-2 rounded-full border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition duration-300">
                  Speaker
                </span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Main Content Area */}
      <div className="container max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Sidebar */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {/* Expertise Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 inline-flex items-center justify-center mr-3">
                  <Award size={18} />
                </span>
                Key Expertise
              </h3>
              
              <motion.ul 
                className="space-y-4"
                variants={staggerChildren}
                initial="hidden"
                animate="visible"
              >
                {expertise.map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center group"
                    variants={fadeIn}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 inline-flex items-center justify-center mr-3 group-hover:bg-indigo-100 transition-colors duration-300">
                      {item.icon}
                    </span>
                    <span className="text-gray-700">{item.text}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
            
            {/* Education Card */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 inline-flex items-center justify-center mr-3">
                  <Book size={18} />
                </span>
                Education & Credentials
              </h3>
              
              <ul className="space-y-4">
                <li className="border-l-2 border-indigo-200 pl-4 py-1 hover:border-indigo-500 transition-colors duration-300">
                  <p className="font-medium text-gray-800">MBA</p>
                  <p className="text-gray-500 text-sm">Harvard Business School</p>
                </li>
                <li className="border-l-2 border-indigo-200 pl-4 py-1 hover:border-indigo-500 transition-colors duration-300">
                  <p className="font-medium text-gray-800">B.Tech in Computer Science</p>
                  <p className="text-gray-500 text-sm">Indian Institute of Technology</p>
                </li>
                <li className="border-l-2 border-indigo-200 pl-4 py-1 hover:border-indigo-500 transition-colors duration-300">
                  <p className="font-medium text-gray-800">Certified Business Coach</p>
                  <p className="text-gray-500 text-sm">International Coach Federation</p>
                </li>
                <li className="border-l-2 border-indigo-200 pl-4 py-1 hover:border-indigo-500 transition-colors duration-300">
                  <p className="font-medium text-gray-800">Member</p>
                  <p className="text-gray-500 text-sm">Entrepreneurs' Organization (EO)</p>
                </li>
                <li className="border-l-2 border-indigo-200 pl-4 py-1 hover:border-indigo-500 transition-colors duration-300">
                  <p className="font-medium text-gray-800">TEDx Speaker</p>
                </li>
              </ul>
            </div>
          </motion.div>
          
          {/* Main Content */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="prose prose-lg max-w-none">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerChildren}
              >
                <motion.h2 
                  className="text-3xl font-bold text-gray-800 mb-6 flex items-center" 
                  variants={fadeIn}
                >
                  <span className="inline-block w-12 h-1 bg-indigo-500 mr-4"></span>
                  My Journey
                </motion.h2>
                
                <motion.p className="text-lg mb-6 text-gray-700" variants={fadeIn}>
                  My entrepreneurial journey began when I founded my first tech startup at the age of 23, which was later acquired by a major industry player. This early success fueled my passion for building businesses and helping others do the same.
                </motion.p>
                
                <motion.p className="mb-6 text-gray-700" variants={fadeIn}>
                  Over the years, I've worked with hundreds of entrepreneurs and businesses, from early-stage startups to established enterprises, helping them navigate challenges, seize opportunities, and achieve sustainable growth.
                </motion.p>
                
                <motion.div
                  className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-lg my-10 border-l-4 border-indigo-500"
                  variants={fadeIn}
                >
                  <p className="text-lg italic text-gray-700">
                    "Success in business is not just about strategy and execution; it's about creating value that transforms lives and organizations for the better."
                  </p>
                </motion.div>
                
                <motion.h3 
                  className="text-2xl font-bold mt-10 mb-4 text-gray-800 flex items-center" 
                  variants={fadeIn}
                >
                  <Briefcase size={20} className="mr-2 text-indigo-600" />
                  My Philosophy
                </motion.h3>
                
                <motion.p className="mb-6 text-gray-700" variants={fadeIn}>
                  I believe that successful entrepreneurship is built on three core pillars: strategic vision, operational excellence, and authentic leadership. My approach combines practical business strategies with a deep understanding of human psychology and organizational dynamics.
                </motion.p>
                
                <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10" variants={fadeIn}>
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-indigo-500">
                    <h4 className="font-bold text-gray-800 mb-2">Strategic Vision</h4>
                    <p className="text-gray-600">Identifying opportunities and creating a compelling roadmap for future growth</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-blue-500">
                    <h4 className="font-bold text-gray-800 mb-2">Operational Excellence</h4>
                    <p className="text-gray-600">Building systems and processes that scale efficiently and effectively</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-indigo-400">
                    <h4 className="font-bold text-gray-800 mb-2">Authentic Leadership</h4>
                    <p className="text-gray-600">Developing leaders who inspire teams and drive sustainable success</p>
                  </div>
                </motion.div>
                
                <motion.p className="mb-10 text-gray-700" variants={fadeIn}>
                  Whether I'm coaching an aspiring entrepreneur or consulting for a multinational corporation, my goal remains the same: to empower businesses and their leaders to realize their full potential and create lasting impact.
                </motion.p>
                
                <motion.h3 
                  className="text-2xl font-bold mt-10 mb-4 text-gray-800 flex items-center" 
                  variants={fadeIn}
                >
                  <Heart size={20} className="mr-2 text-indigo-600" />
                  Beyond Business
                </motion.h3>
                
                <motion.p className="mb-6 text-gray-700" variants={fadeIn}>
                  When I'm not working with businesses or developing new ventures, you'll find me mentoring young entrepreneurs, practicing meditation, exploring new hiking trails, or experimenting with fusion cooking. I'm a firm believer in work-life integration and bring the energy and insights from my personal passions into my professional endeavors.
                </motion.p>
              </motion.div>
            </div>
            
            {/* Call to Action */}
            <motion.div 
              className="mt-16 bg-gradient-to-r from-indigo-600 to-blue-700 rounded-xl shadow-xl p-8 text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-4">Ready to transform your business?</h3>
              <p className="mb-6 text-blue-100">Schedule a consultation and let's discuss how we can help you achieve your business goals.</p>
              <button className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition duration-300 shadow-md">
                Book a Consultation
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage