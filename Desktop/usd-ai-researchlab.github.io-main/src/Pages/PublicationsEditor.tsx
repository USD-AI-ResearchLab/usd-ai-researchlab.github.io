import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../hooks/useAuth';
import {
  createPaper,
  updatePaper,
  getPaperById,
  isPublicationsReviewer,
  type PublicationType,
} from '../services/publicationsDatabase';
import PageLayout from '../components/PageLayout';

const PUBLICATION_TYPES: { value: PublicationType; label: string }[] = [
  { value: 'journal', label: 'Journal Article' },
  { value: 'conference', label: 'Conference Paper' },
  { value: 'book_chapter', label: 'Book Chapter' },
  { value: 'book', label: 'Book' },
  { value: 'preprint', label: 'Preprint / arXiv' },
  { value: 'other', label: 'Other' },
];

const COMMON_TAGS = [
  'Medical Imaging', 'COVID-19', 'Machine Learning', 'Deep Learning',
  'Computer Vision', 'Healthcare AI', 'NLP', 'Security',
  'Pattern Recognition', 'Transfer Learning', 'Federated Learning',
  'Explainable AI', 'Document Analysis', 'Biometrics',
];

const PublicationsEditor: React.FC = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const isEditing = Boolean(id);

  const [loading, setLoading] = useState(isEditing);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  // Form state
  const [title, setTitle] = useState('');
  const [authors, setAuthors] = useState('');
  const [abstract, setAbstract] = useState('');
  const [venue, setVenue] = useState('');
  const [year, setYear] = useState(new Date().getFullYear().toString());
  const [type, setType] = useState<PublicationType>('journal');
  const [doiUrl, setDoiUrl] = useState('');
  const [paperUrl, setPaperUrl] = useState('');
  const [codeUrl, setCodeUrl] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [isFeatured, setIsFeatured] = useState(false);
  const [status, setStatus] = useState<'draft' | 'published'>('draft');
  const [customTag, setCustomTag] = useState('');

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

  // Load existing paper for editing
  useEffect(() => {
    if (!id) return;
    const load = async () => {
      try {
        const paper = await getPaperById(id);
        if (!paper) {
          setError('Publication not found');
          return;
        }
        setTitle(paper.title);
        setAuthors(paper.authors);
        setAbstract(paper.abstract);
        setVenue(paper.venue);
        setYear(paper.year);
        setType(paper.type);
        setDoiUrl(paper.doi_url || '');
        setPaperUrl(paper.paper_url || '');
        setCodeUrl(paper.code_url || '');
        setTags(paper.tags || []);
        setIsFeatured(paper.is_featured);
        setStatus(paper.status);
      } catch (err: unknown) {
        const e = err as { message?: string };
        setError(e.message || 'Failed to load publication');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [id]);

  const handleToggleTag = (tag: string) => {
    setTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const handleAddCustomTag = () => {
    const t = customTag.trim();
    if (t && !tags.includes(t)) {
      setTags(prev => [...prev, t]);
    }
    setCustomTag('');
  };

  const handleSubmit = async (publishNow: boolean) => {
    if (!currentUser) return;
    if (!title.trim() || !authors.trim() || !venue.trim()) {
      setError('Title, authors, and venue are required.');
      return;
    }

    setSaving(true);
    setError('');

    try {
      const paperData = {
        title: title.trim(),
        authors: authors.trim(),
        abstract: abstract.trim(),
        venue: venue.trim(),
        year: year.trim(),
        type,
        doi_url: doiUrl.trim() || null,
        paper_url: paperUrl.trim() || null,
        code_url: codeUrl.trim() || null,
        tags,
        is_featured: isFeatured,
        status: publishNow ? 'published' as const : status,
        added_by: currentUser.email,
      };

      if (isEditing && id) {
        await updatePaper(id, paperData, currentUser.email);
      } else {
        await createPaper(paperData, currentUser.email);
      }

      navigate('/publications/dashboard');
    } catch (err: unknown) {
      const e = err as { message?: string };
      setError(e.message || 'Failed to save publication');
    } finally {
      setSaving(false);
    }
  };

  if (!currentUser) return null;

  return (
    <PageLayout title={isEditing ? 'Edit Publication' : 'Add Publication'}>
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-light text-gray-900 tracking-tight">
                {isEditing ? 'Edit Publication' : 'Add New Publication'}
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                {isEditing ? 'Update the details below' : 'Fill in the paper details'}
              </p>
            </div>
            <Link
              to="/publications/dashboard"
              className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Dashboard
            </Link>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          {loading ? (
            <div className="text-center py-20 text-gray-400">
              <div className="animate-spin w-8 h-8 border-2 border-red-600 border-t-transparent rounded-full mx-auto mb-3" />
              Loading...
            </div>
          ) : (
            <div className="space-y-6">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  placeholder="e.g. Deep Learning for Medical Image Analysis"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>

              {/* Authors */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Authors <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={authors}
                  onChange={e => setAuthors(e.target.value)}
                  placeholder="e.g. KC Santosh, John Doe, Jane Smith"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <p className="text-xs text-gray-400 mt-1">Comma-separated list of authors</p>
              </div>

              {/* Type + Year row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Publication Type
                  </label>
                  <select
                    value={type}
                    onChange={e => setType(e.target.value as PublicationType)}
                    title="Publication Type"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    {PUBLICATION_TYPES.map(t => (
                      <option key={t.value} value={t.value}>{t.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Year
                  </label>
                  <input
                    type="text"
                    value={year}
                    onChange={e => setYear(e.target.value)}
                    placeholder="2025"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Venue */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Venue / Journal / Conference <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={venue}
                  onChange={e => setVenue(e.target.value)}
                  placeholder="e.g. IEEE Transactions on Pattern Analysis and Machine Intelligence"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>

              {/* Abstract */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Abstract / Description
                </label>
                <textarea
                  value={abstract}
                  onChange={e => setAbstract(e.target.value)}
                  rows={5}
                  placeholder="Brief description or abstract of the paper..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-y"
                />
              </div>

              {/* URLs */}
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-gray-700">Links</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">DOI URL</label>
                    <input
                      type="url"
                      value={doiUrl}
                      onChange={e => setDoiUrl(e.target.value)}
                      placeholder="https://doi.org/..."
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Paper URL</label>
                    <input
                      type="url"
                      value={paperUrl}
                      onChange={e => setPaperUrl(e.target.value)}
                      placeholder="https://arxiv.org/..."
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Code URL</label>
                    <input
                      type="url"
                      value={codeUrl}
                      onChange={e => setCodeUrl(e.target.value)}
                      placeholder="https://github.com/..."
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {COMMON_TAGS.map(tag => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => handleToggleTag(tag)}
                      className={`px-3 py-1.5 text-xs rounded-full border transition-colors ${
                        tags.includes(tag)
                          ? 'bg-red-600 text-white border-red-600'
                          : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={customTag}
                    onChange={e => setCustomTag(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), handleAddCustomTag())}
                    placeholder="Add custom tag..."
                    className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                  <button
                    type="button"
                    onClick={handleAddCustomTag}
                    className="px-3 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm hover:bg-gray-200 transition-colors"
                  >
                    Add
                  </button>
                </div>
                {tags.filter(t => !COMMON_TAGS.includes(t)).length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {tags.filter(t => !COMMON_TAGS.includes(t)).map(tag => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
                      >
                        {tag}
                        <button onClick={() => handleToggleTag(tag)} className="hover:text-red-600">×</button>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Options */}
              <div className="flex items-center gap-6 py-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isFeatured}
                    onChange={e => setIsFeatured(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
                  />
                  <span className="text-sm text-gray-700">Featured paper</span>
                </label>
              </div>

              {/* Submit */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <Link
                  to="/publications/dashboard"
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  Cancel
                </Link>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => handleSubmit(false)}
                    disabled={saving}
                    className="px-5 py-2.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50"
                  >
                    {saving ? 'Saving...' : 'Save as Draft'}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSubmit(true)}
                    disabled={saving}
                    className="px-5 py-2.5 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50"
                  >
                    {saving ? 'Publishing...' : isEditing ? 'Update & Publish' : 'Publish Now'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default PublicationsEditor;
