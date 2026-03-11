import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../hooks/useAuth';
import {
  getAllPapers,
  deletePaper,
  publishPaper,
  unpublishPaper,
  toggleFeatured,
  getPublicationStats,
  seedFromStaticData,
  isPublicationsAdmin,
  isPublicationsReviewer,
  type ResearchPaper,
} from '../services/publicationsDatabase';
import PageLayout from '../components/PageLayout';

const TYPE_LABELS: Record<string, string> = {
  journal: 'Journal',
  conference: 'Conference',
  book_chapter: 'Book Chapter',
  book: 'Book',
  preprint: 'Preprint',
  other: 'Other',
};

const PublicationsDashboard: React.FC = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [papers, setPapers] = useState<ResearchPaper[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [error, setError] = useState('');
  const [stats, setStats] = useState<{
    total: number; published: number; drafts: number;
    journals: number; conferences: number; books: number; featured: number;
  } | null>(null);
  const [filter, setFilter] = useState<'all' | 'published' | 'draft' | 'featured'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('all');

  // Auth guard
  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
      return;
    }
    if (!isPublicationsReviewer(currentUser.email)) {
      navigate('/publications');
    }
  }, [currentUser, navigate]);

  // Fetch data
  useEffect(() => {
    const load = async () => {
      if (!currentUser) return;
      try {
        const [papersData, statsData] = await Promise.all([
          getAllPapers(),
          getPublicationStats(),
        ]);
        setPapers(papersData);
        setStats(statsData);
      } catch (err: unknown) {
        const e = err as { message?: string };
        setError(e.message || 'Failed to load publications');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [currentUser]);

  const handleDelete = async (id: string) => {
    if (!window.confirm('Delete this publication permanently?')) return;
    setActionLoading(id);
    try {
      await deletePaper(id, currentUser!.email);
      setPapers(p => p.filter(x => x.id !== id));
      if (stats) setStats({ ...stats, total: stats.total - 1 });
    } catch (err: unknown) {
      const e = err as { message?: string };
      alert(e.message || 'Failed to delete');
    }
    setActionLoading(null);
  };

  const handlePublishToggle = async (paper: ResearchPaper) => {
    setActionLoading(paper.id);
    try {
      if (paper.status === 'published') {
        await unpublishPaper(paper.id, currentUser!.email);
        setPapers(p => p.map(x => x.id === paper.id ? { ...x, status: 'draft' as const } : x));
      } else {
        await publishPaper(paper.id, currentUser!.email);
        setPapers(p => p.map(x => x.id === paper.id ? { ...x, status: 'published' as const } : x));
      }
    } catch (err: unknown) {
      const e = err as { message?: string };
      alert(e.message || 'Action failed');
    }
    setActionLoading(null);
  };

  const handleToggleFeatured = async (paper: ResearchPaper) => {
    setActionLoading(paper.id);
    try {
      await toggleFeatured(paper.id, currentUser!.email);
      setPapers(p => p.map(x => x.id === paper.id ? { ...x, is_featured: !x.is_featured } : x));
    } catch (err: unknown) {
      const e = err as { message?: string };
      alert(e.message || 'Action failed');
    }
    setActionLoading(null);
  };

  const handleSeed = async () => {
    if (!window.confirm('Import all static publication data into Supabase? This will skip duplicates.')) return;
    setActionLoading('seed');
    try {
      const count = await seedFromStaticData(currentUser!.email);
      alert(`Imported ${count} publications successfully!`);
      // Reload
      const [papersData, statsData] = await Promise.all([
        getAllPapers(),
        getPublicationStats(),
      ]);
      setPapers(papersData);
      setStats(statsData);
    } catch (err: unknown) {
      const e = err as { message?: string };
      alert(e.message || 'Seed failed');
    }
    setActionLoading(null);
  };

  // Filtering
  const filteredPapers = papers.filter(p => {
    if (filter === 'published' && p.status !== 'published') return false;
    if (filter === 'draft' && p.status !== 'draft') return false;
    if (filter === 'featured' && !p.is_featured) return false;
    if (typeFilter !== 'all' && p.type !== typeFilter) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return p.title.toLowerCase().includes(q) ||
        p.authors.toLowerCase().includes(q) ||
        p.venue.toLowerCase().includes(q) ||
        p.year.includes(q);
    }
    return true;
  });

  if (!currentUser) return null;

  return (
    <PageLayout title="Publications Manager">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl font-light text-gray-900 tracking-tight">
                Publications Manager
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                Manage research papers, journals & conference proceedings
              </p>
            </div>
            <div className="flex gap-2">
              <Link
                to="/publications/editor"
                className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Paper
              </Link>
              {isPublicationsAdmin(currentUser.email) && (
                <button
                  onClick={handleSeed}
                  disabled={actionLoading === 'seed'}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                  {actionLoading === 'seed' ? 'Importing...' : 'Seed Static Data'}
                </button>
              )}
              <Link
                to="/publications"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                View Public Page
              </Link>
            </div>
          </div>

          {/* Stat Cards */}
          {stats && (
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-8">
              {[
                { label: 'Total', value: stats.total, color: 'gray', filterVal: 'all' as const },
                { label: 'Published', value: stats.published, color: 'green', filterVal: 'published' as const },
                { label: 'Drafts', value: stats.drafts, color: 'amber', filterVal: 'draft' as const },
                { label: 'Featured', value: stats.featured, color: 'purple', filterVal: 'featured' as const },
                { label: 'Journals', value: stats.journals, color: 'blue', filterVal: 'all' as const },
                { label: 'Conferences', value: stats.conferences, color: 'indigo', filterVal: 'all' as const },
                { label: 'Books', value: stats.books, color: 'rose', filterVal: 'all' as const },
              ].map(s => (
                <button
                  key={s.label}
                  onClick={() => setFilter(s.filterVal)}
                  className={`p-3 rounded-lg border text-left transition-all ${
                    filter === s.filterVal && s.filterVal !== 'all'
                      ? 'border-red-300 bg-red-50 ring-1 ring-red-200'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className={`text-xl font-semibold text-${s.color}-600`}>{s.value}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
                </button>
              ))}
            </div>
          )}

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="relative flex-1">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search by title, author, venue, year..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
            <select
              value={typeFilter}
              onChange={e => setTypeFilter(e.target.value)}
              title="Filter by publication type"
              className="px-3 py-2.5 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="all">All Types</option>
              <option value="journal">Journal</option>
              <option value="conference">Conference</option>
              <option value="book_chapter">Book Chapter</option>
              <option value="book">Book</option>
              <option value="preprint">Preprint</option>
              <option value="other">Other</option>
            </select>
            <div className="flex gap-1.5">
              {(['all', 'published', 'draft', 'featured'] as const).map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-3 py-2 text-xs font-medium rounded-lg transition-colors capitalize ${
                    filter === f
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Loading */}
          {loading ? (
            <div className="text-center py-20 text-gray-400">
              <div className="animate-spin w-8 h-8 border-2 border-red-600 border-t-transparent rounded-full mx-auto mb-3" />
              Loading publications...
            </div>
          ) : filteredPapers.length === 0 ? (
            <div className="text-center py-20">
              <svg className="w-12 h-12 text-gray-300 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-gray-500 text-sm">
                {papers.length === 0 ? 'No publications yet. Add one or seed from static data.' : 'No publications match your filters.'}
              </p>
            </div>
          ) : (
            /* Papers Table */
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-100 bg-gray-50/60">
                      <th className="text-left py-3 px-4 font-medium text-gray-500 text-xs uppercase tracking-wider">Paper</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-500 text-xs uppercase tracking-wider hidden md:table-cell">Type</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-500 text-xs uppercase tracking-wider hidden lg:table-cell">Year</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-500 text-xs uppercase tracking-wider">Status</th>
                      <th className="text-right py-3 px-4 font-medium text-gray-500 text-xs uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {filteredPapers.map(paper => (
                      <tr
                        key={paper.id}
                        className="group hover:bg-gray-50/50 transition-colors"
                      >
                        <td className="py-3 px-4 max-w-md">
                          <div className="flex items-start gap-2">
                            {paper.is_featured && (
                              <span className="text-amber-500 mt-0.5 flex-shrink-0" title="Featured">★</span>
                            )}
                            <div>
                              <p className="font-medium text-gray-900 line-clamp-1 group-hover:text-red-700 transition-colors">
                                {paper.title}
                              </p>
                              <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">
                                {paper.authors}
                              </p>
                              <p className="text-xs text-gray-400 line-clamp-1 hidden sm:block">
                                {paper.venue}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4 hidden md:table-cell">
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                            {TYPE_LABELS[paper.type] || paper.type}
                          </span>
                        </td>
                        <td className="py-3 px-4 hidden lg:table-cell">
                          <span className="text-xs text-gray-600 font-mono">{paper.year}</span>
                        </td>
                        <td className="py-3 px-4">
                          <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ${
                            paper.status === 'published'
                              ? 'bg-green-50 text-green-700'
                              : 'bg-amber-50 text-amber-700'
                          }`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${
                              paper.status === 'published' ? 'bg-green-500' : 'bg-amber-500'
                            }`} />
                            {paper.status}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                              onClick={() => handleToggleFeatured(paper)}
                              disabled={!!actionLoading}
                              className={`p-1.5 rounded-md transition-colors ${
                                paper.is_featured
                                  ? 'text-amber-500 hover:bg-amber-50'
                                  : 'text-gray-400 hover:bg-gray-100 hover:text-amber-500'
                              }`}
                              title={paper.is_featured ? 'Remove from featured' : 'Mark as featured'}
                            >
                              <svg className="w-4 h-4" fill={paper.is_featured ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                              </svg>
                            </button>
                            <Link
                              to={`/publications/editor/${paper.id}`}
                              className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                              title="Edit"
                            >
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                            </Link>
                            <button
                              onClick={() => handlePublishToggle(paper)}
                              disabled={!!actionLoading}
                              className={`p-1.5 rounded-md transition-colors ${
                                paper.status === 'published'
                                  ? 'text-gray-400 hover:text-amber-600 hover:bg-amber-50'
                                  : 'text-gray-400 hover:text-green-600 hover:bg-green-50'
                              }`}
                              title={paper.status === 'published' ? 'Unpublish' : 'Publish'}
                            >
                              {paper.status === 'published' ? (
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                </svg>
                              ) : (
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                              )}
                            </button>
                            {isPublicationsAdmin(currentUser.email) && (
                              <button
                                onClick={() => handleDelete(paper.id)}
                                disabled={!!actionLoading}
                                className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
                                title="Delete"
                              >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="px-4 py-3 border-t border-gray-100 bg-gray-50/40 text-xs text-gray-400">
                {filteredPapers.length} of {papers.length} publications
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default PublicationsDashboard;
