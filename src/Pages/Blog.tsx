import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageLayout from '../components/PageLayout';
import FloatingScrollArrows from '../components/FloatingScrollArrows';
import { getPublishedPosts, type BlogPost } from '../services/blogDatabase';

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch published posts from database
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const publishedPosts = await getPublishedPosts();
        setPosts(publishedPosts);
      } catch (err) {
        console.error('Failed to fetch posts:', err);
      }
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const formatDate = (timestamp: string | null | undefined) => {
    if (!timestamp) return '';
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric'
    });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <PageLayout title="Blog">
        <FloatingScrollArrows />

      {/* Author Login - top right of the page */}
      <div className="flex justify-end mb-4">
        <Link
          to="/blog/login"
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-red-700 to-gray-900 text-white text-sm font-medium rounded-full hover:from-red-800 hover:to-black transition-all"
        >
          Author Login
        </Link>
      </div>

      {/* Hero Section */}
      <motion.div 
        className="text-center mb-6 sm:mb-8 md:mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2 sm:px-4">
          Insights, research highlights, and technical deep-dives from the USD AI Research Lab.
          Explore our latest work in artificial intelligence, machine learning, and computer vision.
        </p>
      </motion.div>

      {/* Loading State */}
      {loading && (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-red-600"></div>
        </div>
      )}

      {/* Blog Posts Grid */}
      {!loading && (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8"
          variants={staggerChildren}
          initial="initial"
          animate="animate"
        >
          {posts.map((post) => (
            <motion.article
              key={post.id}
              className="rounded-xl overflow-hidden hover:bg-white/30 transition-all duration-300 group border-b border-gray-200 pb-6"
              variants={fadeInUp}
            >
              {/* Featured Image Placeholder */}
              <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden bg-gradient-to-br from-red-100/50 to-red-50/50 rounded-xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-2 bg-red-600 rounded-xl flex items-center justify-center">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <span className="text-xs sm:text-sm text-red-700 font-medium">Research Insights</span>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-4 sm:p-5 md:p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3">
                  {post.tags?.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-red-50 text-red-700 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                  {(post.tags?.length || 0) > 3 && (
                    <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                      +{post.tags!.length - 3}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
                  <Link to={`/blog/${post.slug || post.id}`}>
                    {post.title}
                  </Link>
                </h2>

                {/* Author & Date */}
                <div className="flex flex-wrap items-center gap-1 text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                  <span className="font-medium text-gray-700">{post.author_name}</span>
                  <span className="mx-1 sm:mx-2">•</span>
                  <span>{formatDate(post.published_at || post.created_at)}</span>
                </div>

                {/* Excerpt */}
                <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <Link
                  to={`/blog/${post.slug || post.id}`}
                  className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-red-600 text-white rounded-lg text-xs sm:text-sm font-medium hover:bg-red-700 transition-colors"
                >
                  Read More
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1.5 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      )}

      {/* Empty State */}
      {!loading && posts.length === 0 && (
        <motion.div 
          className="text-center py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="w-20 h-20 mx-auto mb-4 bg-gray-100/50 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No posts found</h3>
          <p className="text-gray-500">Check back soon for new content!</p>
        </motion.div>
      )}

      {/* About Section */}
      <motion.div 
        className="mt-12 sm:mt-16 p-6 sm:p-8 border-t border-gray-200"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">About This Blog</h3>
        <p className="text-sm sm:text-base text-gray-600 mb-4">
          The USD AI Research Lab Blog features technical deep-dives into our research, 
          explaining complex concepts in accessible terms. Our goal is to bridge the gap 
          between academic research and practical understanding, sharing insights that 
          benefit the broader AI community.
        </p>
        <div className="flex flex-wrap gap-3 sm:gap-4">
          <Link
            to="/publications"
            className="inline-flex items-center text-red-600 hover:text-red-700 font-medium text-sm sm:text-base"
          >
            View All Publications
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            to="/people"
            className="inline-flex items-center text-red-600 hover:text-red-700 font-medium text-sm sm:text-base"
          >
            Meet Our Team
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </motion.div>
    </PageLayout>
    </>
  );
};

export default Blog;
