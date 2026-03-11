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
  const { currentUser, logout, isReviewer } = useAuth();
  const navigate = useNavigate();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [error, setError] = useState('');
  const [showAccessLog, setShowAccessLog] = useState(false);
  const [accessLog, setAccessLog] = useState<AuditLogEntry[]>([]);
  const [filter, setFilter] = useState<'all' | 'published' | 'pending' | 'draft'>('all');

  useEffect(() => {
    if (!currentUser) navigate('/blog/login');
  }, [currentUser, navigate]);

  useEffect(() => {
    const fetchPosts = async () => {
      if (!currentUser) return;
      try {
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

  const filteredPosts = filter === 'all' ? posts : posts.filter(p => p.status === filter);

  const handleDelete = async (postId: string) => {
    if (!window.confirm('Are you sure you want to delete this post? This cannot be undone.')) return;
    setActionLoading(postId);
    try {
      await deletePost(postId, currentUser!.email);
      setPosts(posts.filter(p => p.id !== postId));
    } catch (err: unknown) {
      const e = err as { message?: string };
      alert(e.message || 'Failed to delete post');
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
      const e = err as { message?: string };
      alert(e.message || 'Action failed');
    }
    setActionLoading(null);
  };

  const handleSubmitForReview = async (postId: string) => {
    setActionLoading(postId);
    try {
      await submitForReview(postId, currentUser!.email);
      setPosts(posts.map(p => p.id === postId ? { ...p, status: 'pending' as const } : p));
    } catch (err: unknown) {
      const e = err as { message?: string };
      alert(e.message || 'Failed to submit for review');
    }
    setActionLoading(null);
  };

  const handleLogout = () => {
    logout();
    navigate('/blog');
  };

  const formatDate = (timestamp: string | null | undefined) => {
    if (!timestamp) return '--';
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric', month: 'short', day: 'numeric'
    });
  };

  const counts = {
    total: posts.length,
    published: posts.filter(p => p.status === 'published').length,
    pending: posts.filter(p => p.status === 'pending').length,
    draft: posts.filter(p => p.status === 'draft').length,
  };

  if (!currentUser) return null;

  const roleMeta = currentUser.role === 'admin'
    ? { label: 'Administrator', color: 'text-red-700 bg-red-50 border-red-200' }
    : currentUser.role === 'reviewer'
    ? { label: 'Reviewer', color: 'text-blue-700 bg-blue-50 border-blue-200' }
    : { label: 'Author', color: 'text-gray-700 bg-gray-50 border-gray-200' };

  return (
    <PageLayout title="">
      {/* ── Top Bar ── */}
      <motion.div
        className="border-b border-gray-200 pb-6 mb-8"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">Dashboard</h1>
              <span className={`text-xs font-medium px-2.5 py-1 rounded border ${roleMeta.color}`}>
                {roleMeta.label}
              </span>
            </div>
            <p className="text-sm text-gray-500">
              {currentUser.displayName} &middot; {currentUser.email}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Link
              to="/blog/editor"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              New Post
            </Link>
            <Link
              to="/blog"
              className="px-4 py-2.5 text-sm font-medium text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              View Blog
            </Link>
            <button
              onClick={handleLogout}
              className="px-4 py-2.5 text-sm font-medium text-gray-500 border border-gray-200 rounded-lg hover:bg-gray-50 hover:text-red-600 transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      </motion.div>

      {/* ── Stats Row ── */}
      <motion.div
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.05 }}
      >
        {[
          { label: 'Total Posts', value: counts.total, accent: 'border-gray-300', text: 'text-gray-900', filterKey: 'all' as const },
          { label: 'Published', value: counts.published, accent: 'border-green-400', text: 'text-green-700', filterKey: 'published' as const },
          { label: 'Pending Review', value: counts.pending, accent: 'border-amber-400', text: 'text-amber-700', filterKey: 'pending' as const },
          { label: 'Drafts', value: counts.draft, accent: 'border-gray-400', text: 'text-gray-600', filterKey: 'draft' as const },
        ].map((stat) => (
          <button
            key={stat.label}
            onClick={() => setFilter(stat.filterKey)}
            className={`text-left p-5 rounded-lg border-l-4 transition-all ${stat.accent} ${
              filter === stat.filterKey
                ? 'bg-white shadow-md ring-1 ring-gray-200'
                : 'bg-gray-50/50 hover:bg-white hover:shadow-sm'
            }`}
          >
            <div className={`text-3xl font-bold tabular-nums ${stat.text}`}>{stat.value}</div>
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mt-1">{stat.label}</div>
          </button>
        ))}
      </motion.div>

      {/* ── Access Log (Admin only) ── */}
      {currentUser.isAdmin && (
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Audit Log</h2>
            <div className="flex items-center gap-2">
              <button
                onClick={async () => {
                  const log = await getAccessLog();
                  setAccessLog(log);
                  setShowAccessLog(!showAccessLog);
                }}
                className="text-xs font-medium text-gray-600 hover:text-gray-900 px-3 py-1.5 rounded border border-gray-200 hover:border-gray-300 transition-colors"
              >
                {showAccessLog ? 'Hide' : 'View'}
              </button>
              <button
                onClick={async () => {
                  const log = await getAccessLog();
                  const csv = exportAccessLogCSV(log);
                  downloadCSV(csv, `audit-log-${new Date().toISOString().slice(0, 10)}.csv`);
                }}
                className="text-xs font-medium text-gray-600 hover:text-gray-900 px-3 py-1.5 rounded border border-gray-200 hover:border-gray-300 transition-colors"
              >
                Export CSV
              </button>
              <button
                onClick={async () => {
                  if (window.confirm('Clear all audit log entries? This cannot be undone.')) {
                    await clearAccessLog();
                    setAccessLog([]);
                  }
                }}
                className="text-xs font-medium text-red-500 hover:text-red-700 px-3 py-1.5 rounded border border-red-200 hover:border-red-300 transition-colors"
              >
                Clear
              </button>
            </div>
          </div>

          {showAccessLog && (
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              {accessLog.length === 0 ? (
                <div className="p-8 text-center text-sm text-gray-400">No entries recorded yet.</div>
              ) : (
                <div className="max-h-72 overflow-y-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-200">
                        <th className="px-4 py-2.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Timestamp</th>
                        <th className="px-4 py-2.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">User</th>
                        <th className="px-4 py-2.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Event</th>
                        <th className="px-4 py-2.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Details</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {accessLog.map((entry, i) => (
                        <tr key={i} className="hover:bg-gray-50/50">
                          <td className="px-4 py-2.5 text-gray-500 whitespace-nowrap text-xs tabular-nums">
                            {new Date(entry.timestamp).toLocaleString('en-US', {
                              month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
                            })}
                          </td>
                          <td className="px-4 py-2.5">
                            <div className="text-gray-900 text-xs font-medium">{entry.user_name || '--'}</div>
                            <div className="text-gray-400 text-xs font-mono">{entry.user_email}</div>
                          </td>
                          <td className="px-4 py-2.5">
                            <span className={`inline-flex items-center gap-1 text-xs font-medium ${
                              entry.action === 'login_success' ? 'text-green-700' :
                              entry.action === 'login_failed' ? 'text-red-600' :
                              entry.action === 'lockout' ? 'text-red-800' :
                              entry.action === 'register' ? 'text-blue-700' :
                              'text-purple-700'
                            }`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${
                                entry.action === 'login_success' ? 'bg-green-500' :
                                entry.action === 'login_failed' ? 'bg-red-500' :
                                entry.action === 'lockout' ? 'bg-red-700' :
                                entry.action === 'register' ? 'bg-blue-500' :
                                'bg-purple-500'
                              }`}></span>
                              {entry.action === 'login_success' ? 'Login' :
                               entry.action === 'login_failed' ? 'Failed' :
                               entry.action === 'lockout' ? 'Locked' :
                               entry.action === 'register' ? 'Registered' : 'Reset'}
                            </span>
                          </td>
                          <td className="px-4 py-2.5 text-gray-400 text-xs max-w-[200px] truncate">{entry.details}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </motion.div>
      )}

      {/* ── Error ── */}
      {error && (
        <div className="mb-6 px-4 py-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">{error}</div>
      )}

      {/* ── Posts Section ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
      >
        {/* Section Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
              {filter === 'all' ? 'All Posts' : filter === 'published' ? 'Published' : filter === 'pending' ? 'Pending Review' : 'Drafts'}
            </h2>
            <p className="text-xs text-gray-400 mt-0.5">
              {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'}
              {filter !== 'all' && (
                <button onClick={() => setFilter('all')} className="ml-2 text-red-600 hover:text-red-700 font-medium">
                  Show all
                </button>
              )}
            </p>
          </div>
        </div>

        {/* Posts Table */}
        {loading ? (
          <div className="py-16 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-2 border-gray-200 border-t-gray-600 mx-auto"></div>
            <p className="mt-3 text-sm text-gray-400">Loading posts...</p>
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="py-16 text-center border border-dashed border-gray-200 rounded-lg">
            <svg className="w-10 h-10 mx-auto text-gray-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            <p className="text-sm font-medium text-gray-500 mb-1">
              {filter !== 'all' ? `No ${filter} posts` : 'No posts yet'}
            </p>
            <p className="text-xs text-gray-400 mb-4">
              {filter !== 'all' ? 'Try a different filter or create a new post.' : 'Create your first blog post to get started.'}
            </p>
            <Link
              to="/blog/editor"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              New Post
            </Link>
          </div>
        ) : (
          <div className="border border-gray-200 rounded-lg divide-y divide-gray-100 overflow-hidden">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="flex items-center gap-4 px-5 py-4 hover:bg-gray-50/60 transition-colors group"
              >
                {/* Status indicator */}
                <div className="shrink-0">
                  <span className={`block w-2.5 h-2.5 rounded-full ${
                    post.status === 'published' ? 'bg-green-500' :
                    post.status === 'pending' ? 'bg-amber-500' :
                    'bg-gray-300'
                  }`} title={post.status}></span>
                </div>

                {/* Post info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <h3 className="text-sm font-semibold text-gray-900 truncate">
                      {post.title || 'Untitled'}
                    </h3>
                    {isReviewer && post.author_email !== currentUser.email && (
                      <span className="shrink-0 text-xs text-gray-400 font-normal">
                        by {post.author || 'Unknown'}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span className="tabular-nums">{formatDate(post.published_at || post.created_at)}</span>
                    {post.tags && post.tags.length > 0 && (
                      <span className="truncate max-w-[200px]">
                        {post.tags.slice(0, 3).join(', ')}
                        {post.tags.length > 3 && ` +${post.tags.length - 3}`}
                      </span>
                    )}
                    <span className={`font-medium ${
                      post.status === 'published' ? 'text-green-600' :
                      post.status === 'pending' ? 'text-amber-600' :
                      'text-gray-400'
                    }`}>
                      {post.status === 'published' ? 'Published' :
                       post.status === 'pending' ? 'Pending' : 'Draft'}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  {/* Author: Submit for review */}
                  {!isReviewer && post.status === 'draft' && post.author_email === currentUser.email && (
                    <button
                      onClick={() => handleSubmitForReview(post.id)}
                      disabled={actionLoading === post.id}
                      className="px-3 py-1.5 text-xs font-medium text-amber-700 bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded-md transition-colors disabled:opacity-50"
                    >
                      Submit
                    </button>
                  )}
                  {/* Reviewer: Publish/Unpublish */}
                  {isReviewer && (
                    <button
                      onClick={() => handlePublishToggle(post)}
                      disabled={actionLoading === post.id}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md border transition-colors disabled:opacity-50 ${
                        post.status === 'published'
                          ? 'text-gray-600 bg-gray-50 hover:bg-gray-100 border-gray-200'
                          : 'text-green-700 bg-green-50 hover:bg-green-100 border-green-200'
                      }`}
                    >
                      {post.status === 'published' ? 'Unpublish' : 'Publish'}
                    </button>
                  )}
                  {/* Edit */}
                  {(isReviewer || post.author_email === currentUser.email) && (
                    <Link
                      to={`/blog/editor/${post.id}`}
                      className="p-1.5 text-gray-400 hover:text-blue-600 rounded transition-colors"
                      title="Edit"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </Link>
                  )}
                  {/* Delete */}
                  {(currentUser.isAdmin || post.author_email === currentUser.email) && (
                    <button
                      onClick={() => handleDelete(post.id)}
                      disabled={actionLoading === post.id}
                      className="p-1.5 text-gray-400 hover:text-red-600 rounded transition-colors disabled:opacity-50"
                      title="Delete"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  )}
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
