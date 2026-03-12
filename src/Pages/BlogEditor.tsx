import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MDEditor from '@uiw/react-md-editor';
import { useAuth } from '../hooks/useAuth';
import {
  getPostById,
  createPost,
  updatePost,
  submitForReview,
} from '../services/blogDatabase';
import PageLayout from '../components/PageLayout';

const BlogEditor: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { currentUser, isReviewer, loading: authLoading } = useAuth();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [tags, setTags] = useState('');
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [postId, setPostId] = useState<string | null>(null);
  const [postStatus, setPostStatus] = useState<string | undefined>(undefined);
  const [lastSaved, setLastSaved] = useState<string | null>(null);
  const [error, setError] = useState('');
  const [uploading, setUploading] = useState(false);

  // Redirect if not logged in (wait for auth to finish loading first)
  useEffect(() => {
    if (!authLoading && !currentUser) {
      navigate('/login');
    }
  }, [currentUser, authLoading, navigate]);

  // Load existing post if editing
  useEffect(() => {
    const loadPost = async () => {
      if (id) {
        setLoading(true);
        try {
          const post = await getPostById(id);
          if (!post) throw new Error('Post not found');
          setPostId(post.id);
          setPostStatus(post.status);
          setTitle(post.title);
          setContent(post.content || '');
          setExcerpt(post.excerpt || '');
          setTags(post.tags?.join(', ') || '');
          setIsEditing(true);
        } catch (err: unknown) {
          const e = err as { message?: string };
          setError(e.message || 'Failed to load post');
          setTimeout(() => navigate('/blog/dashboard'), 2000);
        }
        setLoading(false);
      }
    };
    loadPost();
  }, [id, navigate]);

  const getPostData = useCallback(() => ({
    title: title.trim(),
    content,
    excerpt: excerpt.trim() || content.slice(0, 160).replace(/[#*_\n]/g, '').trim(),
    tags: tags.split(',').map(t => t.trim()).filter(Boolean),
  }), [title, content, excerpt, tags]);

  const handleSave = async () => {
    if (!title.trim()) {
      setError('Please enter a title for your post.');
      return;
    }
    setSaving(true);
    setError('');
    try {
      const data = getPostData();
      if (isEditing && postId) {
        await updatePost(postId, data, currentUser!.email);
        setLastSaved(new Date().toLocaleTimeString());
      } else {
        const result = await createPost({
          ...data,
          authorId: currentUser!.id,
          authorName: currentUser!.displayName,
          authorEmail: currentUser!.email,
        });
        setPostId(result.id);
        setPostStatus('draft');
        setIsEditing(true);
        setLastSaved(new Date().toLocaleTimeString());
        // Update URL without full reload
        window.history.replaceState(null, '', `/blog/editor/${result.id}`);
      }
    } catch (err: unknown) {
      const e = err as { message?: string };
      setError(e.message || 'Failed to save post');
    }
    setSaving(false);
  };

  const handleSubmitForReview = async () => {
    if (!title.trim() || !content.trim()) {
      setError('Please add a title and content before submitting for review.');
      return;
    }
    setSaving(true);
    setError('');
    try {
      // Save first
      const data = getPostData();
      let currentPostId = postId;
      if (isEditing && currentPostId) {
        await updatePost(currentPostId, data, currentUser!.email);
      } else {
        const result = await createPost({
          ...data,
          authorId: currentUser!.id,
          authorName: currentUser!.displayName,
          authorEmail: currentUser!.email,
        });
        currentPostId = result.id;
      }
      // Then submit for review
      await submitForReview(currentPostId!, currentUser!.email);
      navigate('/blog/dashboard');
    } catch (err: unknown) {
      const e = err as { message?: string };
      setError(e.message || 'Failed to submit for review');
    }
    setSaving(false);
  };

  const handleImageUpload = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setUploading(true);
    setError('');
    try {
      const results: string[] = [];
      for (const file of Array.from(files)) {
        if (!file.type.startsWith('image/')) {
          results.push(`[${file.name} - non-image files can be linked via URL]`);
          continue;
        }
        // Convert to base64 data URL for embedding in markdown
        const reader = new FileReader();
        const dataUrl = await new Promise<string>((resolve, reject) => {
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
        results.push(`![${file.name}](${dataUrl})`);
      }
      // Insert all uploaded image markdown at the end of content
      const insertion = '\n\n' + results.join('\n\n') + '\n';
      setContent(prev => prev + insertion);
    } catch (err: unknown) {
      const e = err as { message?: string };
      setError(e.message || 'Failed to upload image');
    }
    setUploading(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    handleImageUpload(e.dataTransfer.files);
  };

  const getStatusBadge = (status?: string) => {
    switch (status) {
      case 'published': return { label: 'Published', classes: 'bg-green-100 text-green-700' };
      case 'pending': return { label: 'Pending Review', classes: 'bg-orange-100 text-orange-700' };
      default: return { label: 'Draft', classes: 'bg-yellow-100 text-yellow-700' };
    }
  };

  if (!currentUser) return null;

  if (loading) {
    return (
      <PageLayout title="">
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
        </div>
      </PageLayout>
    );
  }

  const statusInfo = getStatusBadge(postStatus);

  return (
    <PageLayout title="">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            <Link
              to="/blog/dashboard"
              className="p-2 text-gray-600 hover:text-red-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
              {isEditing ? 'Edit Post' : 'New Post'}
            </h1>
            {postStatus && (
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusInfo.classes}`}>
                {statusInfo.label}
              </span>
            )}
            {lastSaved && (
              <span className="text-xs text-gray-400">Saved at {lastSaved}</span>
            )}
          </div>
          <div className="flex gap-2 sm:gap-3">
            <button
              onClick={handleSave}
              disabled={saving}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors disabled:opacity-50 text-sm"
            >
              {saving ? 'Saving...' : 'Save Draft'}
            </button>
            {/* Authors submit for review; reviewers can publish directly via dashboard */}
            {!isReviewer && (
              <button
                onClick={handleSubmitForReview}
                disabled={saving}
                className="px-4 py-2 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors disabled:opacity-50 text-sm"
              >
                Submit for Review
              </button>
            )}
            {isReviewer && (
              <button
                onClick={handleSubmitForReview}
                disabled={saving}
                className="px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors disabled:opacity-50 text-sm"
              >
                Save & Submit
              </button>
            )}
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">{error}</div>
        )}

        {/* Editor Form */}
        <div className="space-y-5">
          {/* Title */}
          <div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Post Title"
              className="w-full px-4 py-3 text-xl sm:text-2xl font-bold border-0 border-b-2 border-gray-200 focus:border-red-500 focus:ring-0 bg-transparent placeholder-gray-400"
            />
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Excerpt (Short summary shown in blog list)
            </label>
            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="A brief description of your post (auto-generated if left empty)"
              rows={2}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 resize-none"
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tags (comma-separated)
            </label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="e.g., Machine Learning, Computer Vision, Deep Learning"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Images (drag & drop or click)
            </label>
            <div
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-red-400 transition-colors cursor-pointer"
              onClick={() => document.getElementById('file-upload')?.click()}
            >
              {uploading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-red-600"></div>
                  <span className="text-sm text-gray-600">Uploading...</span>
                </div>
              ) : (
                <>
                  <svg className="w-8 h-8 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm text-gray-600">
                    Drop images here or <span className="text-red-600 font-medium">browse</span>
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Images will be embedded as base64 and inserted as markdown
                  </p>
                </>
              )}
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                aria-label="Upload images"
                onChange={(e) => handleImageUpload(e.target.files)}
              />
            </div>
          </div>

          {/* Markdown Editor */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Content (Markdown supported)
            </label>
            <div data-color-mode="light" className="border rounded-lg overflow-hidden">
              <MDEditor
                value={content}
                onChange={(val) => setContent(val || '')}
                height={500}
                preview="live"
                hideToolbar={false}
                enableScroll={true}
              />
            </div>
          </div>

          {/* Markdown Help */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">Markdown Quick Reference</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm text-gray-600">
              <div><code className="bg-gray-200 px-1 rounded"># Heading 1</code></div>
              <div><code className="bg-gray-200 px-1 rounded">## Heading 2</code></div>
              <div><code className="bg-gray-200 px-1 rounded">**bold**</code></div>
              <div><code className="bg-gray-200 px-1 rounded">*italic*</code></div>
              <div><code className="bg-gray-200 px-1 rounded">[link](url)</code></div>
              <div><code className="bg-gray-200 px-1 rounded">![image](url)</code></div>
              <div><code className="bg-gray-200 px-1 rounded">- list item</code></div>
              <div><code className="bg-gray-200 px-1 rounded">`code`</code></div>
            </div>

            <h4 className="font-medium text-gray-900 mt-4 mb-2">Publishing Research Content</h4>
            <div className="text-sm text-gray-600 space-y-1">
              <p>• <strong>Images & Figures:</strong> Upload via the drag-drop area above — they auto-insert as markdown</p>
              <p>• <strong>Datasets:</strong> Host on GitHub/Kaggle and link: <code className="bg-gray-200 px-1 rounded">[Dataset](https://github.com/...)</code></p>
              <p>• <strong>Papers:</strong> Link to arXiv or upload PDF to your repo: <code className="bg-gray-200 px-1 rounded">[Paper PDF](url)</code></p>
              <p>• <strong>Code:</strong> Use fenced code blocks: <code className="bg-gray-200 px-1 rounded">```python ... ```</code></p>
              <p>• <strong>Tables:</strong> Use markdown tables: <code className="bg-gray-200 px-1 rounded">| Col1 | Col2 |</code></p>
              <p>• <strong>Math:</strong> Use LaTeX: <code className="bg-gray-200 px-1 rounded">$E = mc^2$</code></p>
            </div>
          </div>
        </div>
      </motion.div>
    </PageLayout>
  );
};

export default BlogEditor;
