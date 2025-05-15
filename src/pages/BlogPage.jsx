import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real application, you would fetch blog posts from an API
    // For demonstration purposes, we'll simulate a delay and return mock data
    const fetchBlogData = async () => {
      try {
        setLoading(true);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Mock data for demonstration
        const mockPosts = [
          {
            id: "business-growth-pillars",
            title: "The 5 Pillars of Business Growth",
            excerpt: "Discover the essential foundations every business needs to achieve sustainable growth in today's competitive landscape.",
            date: "April 15, 2025",
            category: "Business Strategy",
            image: "/images/blog/business-growth.jpg",
            author: "Haryug Singh"
          },
          {
            id: "leadership-communication",
            title: "Effective Leadership Communication in Times of Change",
            excerpt: "Learn how to maintain trust and clarity when guiding your team through organizational transitions and challenges.",
            date: "March 28, 2025",
            category: "Leadership",
            image: "/images/blog/leadership-communication.jpg",
            author: "Haryug Singh"
          },
          {
            id: "digital-transformation",
            title: "Digital Transformation for Traditional Businesses",
            excerpt: "A practical roadmap for established companies looking to embrace digital technology without disrupting their core operations.",
            date: "March 10, 2025",
            category: "Digital Strategy",
            image: "/images/blog/digital-transformation.jpg",
            author: "Haryug Singh"
          },
          {
            id: "financial-planning",
            title: "Financial Planning for Business Growth",
            excerpt: "Smart financial strategies that enable expansion while maintaining stability and managing risk effectively.",
            date: "February 22, 2025",
            category: "Finance",
            image: "/images/blog/financial-planning.jpg",
            author: "Haryug Singh"
          },
          {
            id: "team-building",
            title: "Building High-Performance Teams Across Cultures",
            excerpt: "Strategies for creating cohesive, motivated teams in diverse and international business environments.",
            date: "February 8, 2025",
            category: "Leadership",
            image: "/images/blog/team-building.jpg",
            author: "Haryug Singh"
          },
          {
            id: "market-expansion",
            title: "Market Expansion: When and How to Enter New Territories",
            excerpt: "A framework for evaluating market opportunities and executing successful expansion strategies.",
            date: "January 20, 2025",
            category: "Business Strategy",
            image: "/images/blog/market-expansion.jpg",
            author: "Haryug Singh"
          }
        ];
        
        // Extract unique categories
        const uniqueCategories = [...new Set(mockPosts.map(post => post.category))];
        
        setPosts(mockPosts);
        setCategories(uniqueCategories);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching blog data:', err);
        setLoading(false);
      }
    };

    fetchBlogData();
  }, []);

  // Filter posts based on category and search query
  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <div className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Business Insights & Articles</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Practical advice, strategic thinking, and actionable insights to help you navigate business challenges and seize new opportunities.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 space-y-4 md:space-y-0">
          {/* Search */}
          <div className="relative max-w-md w-full">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <svg 
              className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" 
                clipRule="evenodd" 
              />
            </svg>
          </div>
          
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              All Topics
            </button>
            
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Blog Posts Grid */}
        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="animate-pulse bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-4 bg-gray-200 rounded w-1/4 mb-3"></div>
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6 mb-6"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">No articles found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
            <button 
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <Link 
                key={post.id} 
                to={`/blog/${post.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={post.image || "/api/placeholder/600/400"} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center text-blue-600">
                    <span className="font-medium">Read article</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
        
        {/* Newsletter Signup */}
        <div className="mt-20 bg-gray-100 rounded-xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-3">Subscribe to My Newsletter</h3>
            <p className="text-gray-600 mb-6">
              Get my latest insights on business strategy, leadership, and entrepreneurship delivered directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-500">
              I respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;