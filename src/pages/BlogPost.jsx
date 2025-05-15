import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import SocialLinks from '../components/shared/SocialLinks';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // In a real application, you would fetch the specific blog post data from an API
    // For demonstration purposes, we'll simulate a delay and return mock data
    const fetchPost = async () => {
      try {
        setLoading(true);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Mock data for demonstration
        const mockPost = {
          id: slug,
          title: "The 5 Pillars of Business Growth",
          date: "April 15, 2025",
          author: "Haryug Singh",
          category: "Business Strategy",
          image: "/images/blog/business-growth.jpg",
          content: `
            <p class="mb-4">In today's competitive landscape, sustainable business growth requires a strategic approach built on solid foundations. This article explores the five essential pillars that support exceptional business growth.</p>
            
            <h2 class="text-2xl font-bold mt-8 mb-4">1. Strategic Vision and Planning</h2>
            <p class="mb-4">Success begins with clarity. Without a clear vision of where you're heading, even the most efficient execution can lead you in the wrong direction. A well-defined strategy serves as your business's North Star, guiding every decision and initiative.</p>
            <p class="mb-4">Strategic planning involves setting both short-term objectives and long-term goals, identifying key performance indicators, and establishing the roadmap to achieve them.</p>
            
            <h2 class="text-2xl font-bold mt-8 mb-4">2. Customer-Centric Approach</h2>
            <p class="mb-4">Your business exists to serve your customers. Understanding their needs, challenges, and desires is fundamental to creating products and services that truly resonate and provide value.</p>
            <p class="mb-4">This pillar involves continuous customer research, gathering feedback, and refining your offerings to better meet their expectations.</p>
            
            <h2 class="text-2xl font-bold mt-8 mb-4">3. Operational Excellence</h2>
            <p class="mb-4">Efficiency and effectiveness in your operations create the backbone of sustainable growth. This encompasses everything from streamlining processes to optimizing resource allocation.</p>
            <p class="mb-4">Businesses that excel operationally can deliver consistent quality, manage costs effectively, and scale their operations without compromising performance.</p>
            
            <h2 class="text-2xl font-bold mt-8 mb-4">4. Innovation and Adaptability</h2>
            <p class="mb-4">In a rapidly changing business environment, the ability to innovate and adapt is crucial. This doesn't necessarily mean creating groundbreaking new technologies—it can be as simple as finding better ways to serve your customers or operate your business.</p>
            <p class="mb-4">Cultivating a culture that embraces change and encourages creative thinking positions your business to stay relevant and competitive.</p>
            
            <h2 class="text-2xl font-bold mt-8 mb-4">5. People and Culture</h2>
            <p class="mb-4">Your team is your most valuable asset. Building a strong, aligned team with the right skills and mindset creates the foundation for everything else.</p>
            <p class="mb-4">This pillar focuses on recruitment, development, engagement, and creating a culture that attracts and retains top talent while bringing out their best performance.</p>
            
            <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
            <p class="mb-4">While each pillar is important individually, the real power comes from their integration. When all five pillars work in harmony, they create a robust framework for sustainable business growth.</p>
            <p class="mb-4">The most successful businesses continuously strengthen each pillar, recognizing that weakness in any one area can undermine the entire structure.</p>
          `,
          relatedPosts: [
            { id: "building-effective-teams", title: "Building Effective Teams: Leadership Strategies" },
            { id: "digital-transformation", title: "Digital Transformation for Traditional Businesses" },
            { id: "financial-planning", title: "Financial Planning for Business Growth" }
          ]
        };
        
        setPost(mockPost);
        setLoading(false);
      } catch (err) {
        setError("Failed to load blog post. Please try again later.");
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto py-16 px-4">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-6"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4 mb-12"></div>
            <div className="h-64 bg-gray-200 rounded mb-8"></div>
            <div className="h-4 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 bg-gray-200 rounded mb-8"></div>
            <div className="h-6 bg-gray-200 rounded w-1/2 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 bg-gray-200 rounded mb-4"></div>
          </div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="container mx-auto py-16 px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
            <p className="mb-6">{error}</p>
            <Link to="/blog" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
              Return to Blog
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto py-16 px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Blog Post Not Found</h2>
            <p className="mb-6">The blog post you're looking for doesn't exist or has been removed.</p>
            <Link to="/blog" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
              Return to Blog
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
      <div className="container mx-auto py-16 px-4">
        {/* Blog Post Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center text-gray-600 mb-6">
            <span className="mr-4">{post.date}</span>
            <span className="mr-4">|</span>
            <span className="mr-4">By {post.author}</span>
            <span className="mr-4">|</span>
            <span>{post.category}</span>
          </div>
        </div>
        
        {/* Featured Image */}
        <div className="mb-10">
          <img 
            src={post.image || "/api/placeholder/1200/600"} 
            alt={post.title} 
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        
        {/* Blog Content */}
        <div className="prose prose-lg max-w-none mb-12" dangerouslySetInnerHTML={{ __html: post.content }} />
        
        {/* Share Links */}
        <div className="border-t border-b border-gray-200 py-6 my-10">
          <div className="flex items-center">
            <span className="font-medium mr-4">Share this article:</span>
            <SocialLinks className="flex space-x-4" />
          </div>
        </div>
        
        {/* Related Posts */}
        {post.relatedPosts && post.relatedPosts.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {post.relatedPosts.map(relatedPost => (
                <Link 
                  key={relatedPost.id} 
                  to={`/blog/${relatedPost.id}`} 
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-4"
                >
                  <div className="bg-gray-200 rounded-md mb-4 h-40"></div>
                  <h4 className="font-semibold text-lg mb-2">{relatedPost.title}</h4>
                  <p className="text-blue-600">Read more →</p>
                </Link>
              ))}
            </div>
          </div>
        )}
        
        {/* Back to Blog */}
        <div className="mt-12 text-center">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to All Articles
          </Link>
        </div>
      </div>
  );
};

export default BlogPost;