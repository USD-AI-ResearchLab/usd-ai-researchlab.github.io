import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

const BlogWriteGuide: React.FC = () => {
  return (
    <PageLayout title="Author Guide">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <Link to="/blog" className="text-red-600 hover:text-red-700 text-sm mb-4 inline-block">
            &larr; Back to Blog
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Blog Author Guide
          </h1>
          <p className="text-gray-600">
            Write and manage your blog posts using our built-in content management system.
          </p>
        </div>

        {/* Getting Started */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Get Started</h2>
          <p className="text-gray-600 mb-4">
            Log in with your USD email address to access the blog editor. Only @usd.edu and @coyotes.usd.edu emails are accepted.
          </p>
          <Link
            to="/blog/login"
            className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-red-800 to-gray-900 text-white rounded-lg font-medium hover:from-red-700 hover:to-gray-800 transition-all"
          >
            Author Login
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* How it works */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">How It Works</h2>
          <ol className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="font-medium text-red-600 shrink-0">1.</span>
              <span>Log in with your USD email and password</span>
            </li>
            <li className="flex gap-3">
              <span className="font-medium text-red-600 shrink-0">2.</span>
              <span>Click "New Post" from your dashboard</span>
            </li>
            <li className="flex gap-3">
              <span className="font-medium text-red-600 shrink-0">3.</span>
              <span>Write your content using the Markdown editor with live preview</span>
            </li>
            <li className="flex gap-3">
              <span className="font-medium text-red-600 shrink-0">4.</span>
              <span>Click "Submit for Review" when your post is ready</span>
            </li>
            <li className="flex gap-3">
              <span className="font-medium text-red-600 shrink-0">5.</span>
              <span>A reviewer or admin will review and publish your post</span>
            </li>
          </ol>
        </div>

        {/* Features */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Editor Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">Markdown Editor</h3>
              <p className="text-sm text-gray-600">Write with bold, italic, headings, lists, links, and live preview side-by-side</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">Code Blocks</h3>
              <p className="text-sm text-gray-600">Syntax highlighting for Python, JavaScript, and other languages</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">Image Upload</h3>
              <p className="text-sm text-gray-600">Drag and drop images directly into your post</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">Tags and Excerpts</h3>
              <p className="text-sm text-gray-600">Categorize your posts and provide a summary for the blog listing</p>
            </div>
          </div>
        </div>

        {/* Access Levels */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Access Levels</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-purple-50 border border-purple-200 rounded-lg">
              <span className="w-3 h-3 mt-1 bg-purple-500 rounded-full shrink-0"></span>
              <div>
                <h4 className="font-medium text-gray-900">Admin</h4>
                <p className="text-sm text-gray-600">Full control over all posts, users, and access logs. Can publish, unpublish, edit, and delete any post.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <span className="w-3 h-3 mt-1 bg-blue-500 rounded-full shrink-0"></span>
              <div>
                <h4 className="font-medium text-gray-900">Reviewer</h4>
                <p className="text-sm text-gray-600">Can review, edit, and publish or unpublish all posts.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
              <span className="w-3 h-3 mt-1 bg-green-500 rounded-full shrink-0"></span>
              <div>
                <h4 className="font-medium text-gray-900">Author</h4>
                <p className="text-sm text-gray-600">Can write and edit your own posts. Submit posts for review to get them published.</p>
              </div>
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
          <Link
            to="/blog/login"
            className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-red-800 to-gray-900 text-white rounded-lg font-medium hover:from-red-700 hover:to-gray-800 transition-all"
          >
            Author Login
          </Link>
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
