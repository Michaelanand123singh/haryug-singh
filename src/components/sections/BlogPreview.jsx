import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const BlogPreview = () => {
  // In a real application, you would fetch these from an API
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      slug: 'scaling-your-startup',
      title: 'Scaling Your Startup: 5 Key Strategies for Sustainable Growth',
      excerpt: 'Learn the proven methodologies for scaling your business while maintaining culture and operational excellence.',
      image: '/images/blog/scaling-startup.jpg',
      date: '2025-04-28',
      category: 'Business Growth',
      readTime: '8 min read'
    },
    {
      id: 2,
      slug: 'digital-transformation-guide',
      title: 'The Executive Guide to Digital Transformation in 2025',
      excerpt: 'A comprehensive roadmap for business leaders navigating the complexities of digital transformation.',
      image: '/images/blog/digital-transformation.jpg',
      date: '2025-04-15',
      category: 'Digital Strategy',
      readTime: '12 min read'
    },
    {
      id: 3,
      slug: 'leadership-mindset',
      title: 'Developing a Visionary Leadership Mindset',
      excerpt: 'How to cultivate forward-thinking leadership qualities that inspire teams and drive innovation.',
      image: '/images/blog/leadership-mindset.jpg',
      date: '2025-04-02',
      category: 'Leadership',
      readTime: '6 min read'
    }
  ])

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('en-US', options)
  }

  return (
    <section className="section bg-white" id="blog-preview">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Latest Insights</h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Practical strategies, actionable advice, and thought leadership for entrepreneurs and business leaders.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link to="/blog" className="btn btn-outline flex items-center">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                <img 
                  src={post.image || "/api/placeholder/800/450"} 
                  alt={post.title} 
                  className="object-cover w-full h-48"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{post.category}</span>
                  <span className="mx-2">•</span>
                  <span>{formatDate(post.date)}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 line-clamp-2">
                  <Link to={`/blog/${post.slug}`} className="hover:text-primary">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${post.slug}`} 
                  className="text-primary font-medium inline-flex items-center hover:text-primary-dark"
                >
                  Read Article
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Subscribe to receive my latest insights directly in your inbox.
          </p>
          <form className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-l-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
              required
            />
            <button 
              type="submit" 
              className="btn btn-primary rounded-l-none"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default BlogPreview