import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../hooks/useAuth';
import {
  getAllPosts,
  getPostsByAuthor,
  deletePost,
  publishPost,
  unpublishPost,
  submitForReview,
  getAccessLog,
  exportAccessLogCSV,
  clearAccessLog,
  downloadCSV,
  type BlogPost,
  type AuditLogEntry,
} from '../services/blogDatabase';
import PageLayout from '../components/PageLayout';

const BlogDashboard: React.FC = () => {
  const { currentUser, logout, isReviewer, isApprover, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [error, setError] = useState('');
  const [showAccessLog, setShowAccessLog] = useState(false);
  const [accessLog, setAccessLog] = useState<AuditLogEntry[]>([]);

  // Redirect if not logged in (wait for auth to finish loading first)
  useEffect(() => {
    if (!authLoading && !currentUser) {
      navigate('/login');
    }
  }, [currentUser, authLoading, navigate]);

  // Fetch posts (filtered by role)
  useEffect(() => {
    const fetchPosts = async () => {
      if (!currentUser) return;
      try {
        // Reviewers/admins see all posts, authors see only their own
        const data = isReviewer
          ? await getAllPosts()
          : await getPostsByAuthor(currentUser.email);
        setPosts(data);
      } catch (err: unknown) {
        const error = err as { message?: string };
        setError(error.message || 'Failed to load posts');
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [currentUser, isReviewer]);

  const handleDelete = async (postId: string) => {
    if (!window.confirm('Are you sure you want to delete this post? This cannot be undone.')) return;
    setActionLoading(postId);
    try {
      await deletePost(postId, currentUser!.email);
      setPosts(posts.filter(p => p.id !== postId));
    } catch (err: unknown) {
      const error = err as { message?: string };
      alert(error.message || 'Failed to delete post');
    }
    setActionLoading(null);
  };

  const handlePublishToggle = async (post: BlogPost) => {
    setActionLoading(post.id);
    try {
      if (post.status === 'published') {
        await unpublishPost(post.id, currentUser!.email);
        setPosts(posts.map(p => p.id === post.id ? { ...p, status: 'draft' as const } : p));
      } else {
        await publishPost(post.id, currentUser!.email);
        setPosts(posts.map(p => p.id === post.id ? { ...p, status: 'published' as const } : p));
      }
    } catch (err: unknown) {
      const error = err as { message?: string };
      alert(error.message || 'Action failed');
    }
    setActionLoading(null);
  };

  const handleSubmitForReview = async (postId: string) => {
    setActionLoading(postId);
    try {
      await submitForReview(postId, currentUser!.email);
      setPosts(posts.map(p => p.id === postId ? { ...p, status: 'pending' as const } : p));
    } catch (err: unknown) {
      const error = err as { message?: string };
      alert(error.message || 'Failed to submit for review');
    }
    setActionLoading(null);
  };

  const handleLogout = () => {
    logout();
    navigate('/blog');
  };

  const formatDate = (timestamp: string | null | undefined) => {
    if (!timestamp) return 'N/A';
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric', month: 'short', day: 'numeric'
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'published':
        return 'bg-green-100 text-green-700';
      case 'pending':
        return 'bg-orange-100 text-orange-700';
      default:
        return 'bg-yellow-100 text-yellow-700';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'published': return 'Published';
      case 'pending': return 'Pending Review';
      default: return 'Draft';
    }
  };

  if (!currentUser) return null;

  return (
    <PageLayout title="Blog Dashboard">
      {/* Header */}
      <motion.div
        className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-6 sm:mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-red-100 rounded-full flex items-center justify-center">
              <span className="text-red-600 text-lg sm:text-xl font-bold">
                {currentUser.displayName?.charAt(0) || currentUser.email.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                Welcome, {currentUser.displayName || 'Author'}!
              </h2>
              <p className="text-sm text-gray-500">
                {currentUser.email}
                <span className={`ml-2 px-2 py-0.5 text-xs rounded-full font-medium ${
                  currentUser.role === 'admin' ? 'bg-purple-100 text-purple-700' :
                  currentUser.role === 'reviewer' ? 'bg-blue-100 text-blue-700' :
                  'bg-green-100 text-green-700'
                }`}>
                  {currentUser.role === 'admin' ? 'Admin' :
                   currentUser.role === 'reviewer' ? 'Reviewer' : 'Author'}
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <Link
              to="/blog/editor"
              className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors text-sm"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              New Post
            </Link>
            <Link to="/blog" className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm">
              View Blog
            </Link>
            <button onClick={handleLogout} className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm">
              Logout
            </button>
          </div>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="bg-white rounded-xl shadow-md p-4">
          <div className="text-2xl sm:text-3xl font-bold text-gray-900">{posts.length}</div>
          <div className="text-sm text-gray-500">Total Posts</div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-4">
          <div className="text-2xl sm:text-3xl font-bold text-green-600">
            {posts.filter(p => p.status === 'published').length}
          </div>
          <div className="text-sm text-gray-500">Published</div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-4">
          <div className="text-2xl sm:text-3xl font-bold text-orange-600">
            {posts.filter(p => p.status === 'pending').length}
          </div>
          <div className="text-sm text-gray-500">Pending Review</div>
        </div>
        <div className="bg-white rounded-xl shadow-md p-4">
          <div className="text-2xl sm:text-3xl font-bold text-yellow-600">
            {posts.filter(p => p.status === 'draft').length}
          </div>
          <div className="text-sm text-gray-500">Drafts</div>
        </div>
      </motion.div>

      {/* Access Log (Admin only) */}
      {currentUser.isAdmin && (
        <motion.div
          className="bg-white rounded-xl shadow-lg overflow-hidden mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="p-4 sm:p-6 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h3 className="text-lg font-bold text-gray-900">Access Log</h3>
              <p className="text-sm text-gray-500">Login attempts, registrations, and password resets</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={async () => {
                  const log = await getAccessLog();
                  setAccessLog(log);
                  setShowAccessLog(!showAccessLog);
                }}
                className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={showAccessLog ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                </svg>
                {showAccessLog ? 'Hide Log' : 'View Log'}
              </button>
              <button
                onClick={async () => {
                  const csv = exportAccessLogCSV(accessLog);
                  downloadCSV(csv, `access-log-${new Date().toISOString().slice(0, 10)}.csv`);
                }}
                className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-gradient-to-r from-red-700 to-gray-900 hover:from-red-800 hover:to-black rounded-lg transition-colors"
              >
                <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Export to Excel
              </button>
              <button
                onClick={async () => {
                  if (window.confirm('Clear all access log entries? This cannot be undone.')) {
                    await clearAccessLog();
                    setAccessLog([]);
                  }
                }}
                className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors"
              >
                Clear
              </button>
            </div>
          </div>

          {showAccessLog && (
            <div className="max-h-80 overflow-y-auto">
              {accessLog.length === 0 ? (
                <div className="p-6 text-center text-gray-500 text-sm">No access log entries yet. Entries are recorded on this device.</div>
              ) : (
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 sticky top-0">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Time</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Details</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {accessLog.map((entry, i) => (
                      <tr key={i} className={`hover:bg-gray-50 ${
                        entry.action === 'login_failed' || entry.action === 'lockout' ? 'bg-red-50' :
                        entry.action === 'login_success' ? '' :
                        entry.action === 'register' ? 'bg-green-50' : 'bg-blue-50'
                      }`}>
                        <td className="px-4 py-2 text-gray-600 whitespace-nowrap">
                          {new Date(entry.timestamp).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                        </td>
                        <td className="px-4 py-2 text-gray-900 font-mono text-xs">{entry.user_email}</td>
                        <td className="px-4 py-2 text-gray-700">{entry.user_name}</td>
                        <td className="px-4 py-2">
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                            entry.action === 'login_success' ? 'bg-green-100 text-green-700' :
                            entry.action === 'login_failed' ? 'bg-red-100 text-red-700' :
                            entry.action === 'lockout' ? 'bg-red-200 text-red-800' :
                            entry.action === 'register' ? 'bg-blue-100 text-blue-700' :
                            'bg-purple-100 text-purple-700'
                          }`}>
                            {entry.action === 'login_success' ? 'Success' :
                             entry.action === 'login_failed' ? 'Failed' :
                             entry.action === 'lockout' ? 'Locked' :
                             entry.action === 'register' ? 'Registered' : 'Reset'}
                          </span>
                        </td>
                        <td className="px-4 py-2 text-gray-500 text-xs">{entry.details}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}
        </motion.div>
      )}

      {/* Error */}
      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">{error}</div>
      )}

      {/* Posts List */}
      <motion.div
        className="bg-white rounded-xl shadow-lg overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="p-4 sm:p-6 border-b border-gray-200">
          <h3 className="text-lg font-bold text-gray-900">
            All Posts
          </h3>
          <p className="text-sm text-gray-500">
            {isApprover
              ? 'As an approver, you can publish and unpublish all posts'
              : isReviewer
              ? 'As a reviewer, you can see all posts — approval by KC Santosh or Deepika Nuthalapati required to publish'
              : 'You can view and edit your own posts'}
          </p>
        </div>

        {loading ? (
          <div className="p-8 text-center">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-red-600 mx-auto"></div>
            <p className="mt-4 text-gray-500">Loading posts...</p>
          </div>
        ) : posts.length === 0 ? (
          <div className="p-8 text-center">
            <h4 className="text-lg font-medium text-gray-900 mb-2">No posts yet</h4>
            <p className="text-gray-500 mb-4">Start writing your first blog post!</p>
            <Link to="/blog/editor" className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors">
              Create Your First Post
            </Link>
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {posts.map((post) => (
              <div key={post.id} className="p-4 sm:p-6 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getStatusBadge(post.status)}`}>
                        {getStatusLabel(post.status)}
                      </span>
                      {isReviewer && post.author_email !== currentUser.email && (
                        <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                          By: {post.author || 'Unknown'}
                        </span>
                      )}
                    </div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 truncate">{post.title}</h4>
                    <p className="text-sm text-gray-500 line-clamp-2 mt-1">{post.excerpt || 'No excerpt'}</p>
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                      <span className="text-xs text-gray-400">
                        Created: {formatDate(post.created_at)}
                      </span>
                      {post.tags && post.tags.length > 0 && (
                        <>
                          <span className="text-gray-300">•</span>
                          <div className="flex flex-wrap gap-1">
                            {post.tags.slice(0, 3).map((tag: string) => (
                              <span key={tag} className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs">{tag}</span>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {/* Author: Submit for review (only for their own drafts) */}
                    {!isReviewer && post.status === 'draft' && post.author_email === currentUser.email && (
                      <button
                        onClick={() => handleSubmitForReview(post.id)}
                        disabled={actionLoading === post.id}
                        className="px-3 py-1.5 text-xs font-medium text-orange-700 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors disabled:opacity-50"
                      >
                        Submit for Review
                      </button>
                    )}
                    {/* Approver only: Publish/Unpublish */}
                    {isApprover && (
                      <button
                        onClick={() => handlePublishToggle(post)}
                        disabled={actionLoading === post.id}
                        className={`p-2 rounded-lg transition-colors disabled:opacity-50 ${
                          post.status === 'published'
                            ? 'text-yellow-600 hover:bg-yellow-50'
                            : 'text-green-600 hover:bg-green-50'
                        }`}
                        title={post.status === 'published' ? 'Unpublish' : 'Approve & Publish'}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d={post.status === 'published'
                              ? "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M3 3l18 18"
                              : "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            }
                          />
                        </svg>
                      </button>
                    )}
                    {/* Edit — only own posts for authors, all posts for reviewers */}
                    {(isReviewer || post.author_email === currentUser.email) && (
                      <Link
                        to={`/blog/editor/${post.id}`}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="Edit"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </Link>
                    )}
                    {/* Delete — only own posts for authors, all posts for admins */}
                    {(currentUser.isAdmin || post.author_email === currentUser.email) && (
                      <button
                        onClick={() => handleDelete(post.id)}
                        disabled={actionLoading === post.id}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
                        title="Delete"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </PageLayout>
  );
};

export default BlogDashboard;
                       