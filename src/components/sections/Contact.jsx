import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import ContactForm from '../shared/ContactForm'

const Contact = () => {
  return (
    <section className="section bg-gray-50" id="contact">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600">
            Ready to transform your business or take the next step in your entrepreneurial journey? 
            Let's connect and explore how we can work together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 h-full">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-500">Email</h4>
                    <a 
                      href="mailto:contact@haryugsingh.com" 
                      className="text-gray-800 hover:text-primary"
                    >
                      contact@haryugsingh.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-500">Phone</h4>
                    <a 
                      href="tel:+12345678901" 
                      className="text-gray-800 hover:text-primary"
                    >
                      +1 (234) 567-8901
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-500">Office</h4>
                    <p className="text-gray-800">
                      123 Business Avenue, <br />
                      San Francisco, CA 94107
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-500">Working Hours</h4>
                    <p className="text-gray-800">
                      Monday - Friday: 9AM - 5PM <br />
                      Saturday & Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-medium mb-4">Book a Strategy Call</h4>
                <a 
                  href="https://calendly.com/haryugsingh/strategy-call" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary w-full text-center"
                >
                  Schedule Now
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 h-full">
              <h3 className="text-xl font-bold mb-6">Send a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact