import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

const BlogWriteGuide: React.FC = () => {
  return (
    <PageLayout title="Author Login">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <Link to="/blog" className="text-red-600 hover:text-red-700 text-sm mb-4 inline-block">
            ← Back to Blog
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Blog Author Portal
          </h1>
          <p className="text-gray-600">
            Write and manage your blog posts using our content management system.
          </p>
        </div>

        {/* Sanity Studio Link */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Access the Blog Editor</h2>
          <p className="text-gray-600 mb-4">
            Use Sanity Studio to write, edit, and manage your blog posts. You'll need a USD email to access.
          </p>
          <a
            href="https://usd-ai-blog.sanity.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
          >
            Open Blog Editor
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* How it works */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">How It Works</h2>
          <ol className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="font-medium text-red-600 shrink-0">1.</span>
              <span>Log in to Sanity Studio with your USD email</span>
            </li>
            <li className="flex gap-3">
              <span className="font-medium text-red-600 shrink-0">2.</span>
              <span>Click "Post" → Create new post</span>
            </li>
            <li className="flex gap-3">
              <span className="font-medium text-red-600 shrink-0">3.</span>
              <span>Write your content using the rich text editor</span>
            </li>
            <li className="flex gap-3">
              <span className="font-medium text-red-600 shrink-0">4.</span>
              <span>Set status to "Pending Review" when ready</span>
            </li>
            <li className="flex gap-3">
              <span className="font-medium text-red-600 shrink-0">5.</span>
              <span>A reviewer will publish your post</span>
            </li>
          </ol>
        </div>

        {/* Features */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Editor Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">Rich Text Editing</h3>
              <p className="text-sm text-gray-600">Bold, italic, headings, lists, links, and more</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">Code Blocks</h3>
              <p className="text-sm text-gray-600">Syntax highlighting for Python, JavaScript, etc.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">Image Upload</h3>
              <p className="text-sm text-gray-600">Drag and drop images directly into your post</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">Auto-Save</h3>
              <p className="text-sm text-gray-600">Your work is saved automatically as you type</p>
            </div>
          </div>
        </div>

        {/* Review Team */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Review Team</h2>
          <p className="text-gray-600 mb-4">
            For questions or access issues, contact:
          </p>
          <ul className="text-gray-700 space-y-1">
            <li>Dr. KC Santosh — <a href="mailto:kc.santosh@usd.edu" className="text-red-600 hover:underline">kc.santosh@usd.edu</a></li>
            <li>Dr. Rodrigue Rizk — <a href="mailto:rodrigue.rizk@usd.edu" className="text-red-600 hover:underline">rodrigue.rizk@usd.edu</a></li>
          </ul>
        </div>

        {/* CTA */}
        <div className="border-t border-gray-200 pt-8 flex gap-4">
          <a
            href="https://usd-ai-blog.sanity.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-5 py-2.5 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
          >
            Open Blog Editor
          </a>
          <Link
            to="/blog"
            className="inline-flex items-center px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            View Blog
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default BlogWriteGuide;
