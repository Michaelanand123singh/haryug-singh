import React from 'react';
import ContactForm from '../components/shared/ContactForm';
import SocialLinks from '../components/shared/SocialLinks';

const ContactPage = () => {
  return (
    <div>
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Have questions about my coaching, consulting services, or businesses? Let's connect and discuss how I can help you achieve your goals.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <p className="text-gray-600 mb-8">
              I'm always open to new opportunities, partnerships, and conversations. Whether you have a specific question or just want to connect, feel free to reach out through any of the channels below.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <a href="mailto:hello@haryugsingh.com" className="text-blue-600 hover:underline">hello@haryugsingh.com</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <a href="tel:+919876543210" className="text-blue-600 hover:underline">+91 98765 43210</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Location</h3>
                  <p className="text-gray-700">Delhi NCR, India</p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="mt-10">
              <h3 className="font-semibold text-lg mb-4">Connect with me on social media</h3>
              <SocialLinks className="flex space-x-4" />
            </div>
            
            {/* Office Hours */}
            <div className="mt-10 bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-lg mb-3">Office Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday:</span>
                  <span className="font-medium">9:00 AM - 6:00 PM IST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday:</span>
                  <span className="font-medium">10:00 AM - 2:00 PM IST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday:</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <ContactForm />
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <details className="p-6 border border-gray-200 rounded-lg">
              <summary className="font-semibold text-lg cursor-pointer">
                What types of businesses do you typically work with?
              </summary>
              <div className="mt-4 text-gray-600">
                <p>I work with a diverse range of businesses, from startups and small businesses to medium-sized enterprises. My experience spans across industries including technology, retail, manufacturing, services, and hospitality. I specialize in helping businesses that are looking to scale, optimize their operations, or navigate significant transitions.</p>
              </div>
            </details>
            
            <details className="p-6 border border-gray-200 rounded-lg">
              <summary className="font-semibold text-lg cursor-pointer">
                How long does a typical consulting engagement last?
              </summary>
              <div className="mt-4 text-gray-600">
                <p>The duration varies based on the complexity of your needs and objectives. Initial strategy sessions typically last 4-8 weeks, while comprehensive transformation projects may extend from 3-12 months. I offer both short-term intensive interventions and longer-term advisory relationships, tailored to your specific requirements.</p>
              </div>
            </details>
            
            <details className="p-6 border border-gray-200 rounded-lg">
              <summary className="font-semibold text-lg cursor-pointer">
                What can I expect from our first meeting?
              </summary>
              <div className="mt-4 text-gray-600">
                <p>Our initial consultation focuses on understanding your business, challenges, and goals. I'll ask questions to gain insights into your current situation and discuss potential approaches to address your needs. This meeting helps determine if we're a good fit to work together and outline next steps. There's no obligation, and the initial consultation is complimentary.</p>
              </div>
            </details>
            
            <details className="p-6 border border-gray-200 rounded-lg">
              <summary className="font-semibold text-lg cursor-pointer">
                Do you offer remote consulting services?
              </summary>
              <div className="mt-4 text-gray-600">
                <p>Yes, I offer both in-person and remote consulting services. Many clients prefer a hybrid approach, with some key meetings in person and regular check-ins conducted virtually. This flexibility allows us to maintain momentum while accommodating busy schedules and geographic considerations.</p>
              </div>
            </details>
            
            <details className="p-6 border border-gray-200 rounded-lg">
              <summary className="font-semibold text-lg cursor-pointer">
                How do you measure the success of your consulting work?
              </summary>
              <div className="mt-4 text-gray-600">
                <p>Success metrics are defined collaboratively at the beginning of our engagement based on your specific goals. These may include financial indicators (revenue growth, profit margins), operational metrics (efficiency improvements, cost reductions), or strategic outcomes (successful market entry, organizational restructuring). I provide regular progress reports and believe in accountability through tangible results.</p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;