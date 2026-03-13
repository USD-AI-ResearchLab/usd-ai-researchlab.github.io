import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import BooksComponent from '../components/BooksComponent';
import { PUBLICATIONS } from '../data/publications';
import { PUBLICATIONS_BY_YEAR } from '../data/publicationsByYear';
import { useAuth } from '../hooks/useAuth';
import FloatingScrollArrows from "../components/FloatingScrollArrows";

const Publications: React.FC = () => {
  const { currentUser } = useAuth();
  const [hoveredPublication, setHoveredPublication] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'few-samples' | 'research-papers'>('few-samples');
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const itemsPerPage = 8;

  const categories = [
    'All', 'Medical Imaging', 'COVID-19', 'Machine Learning',
    'Computer Vision', 'Healthcare AI', 'NLP', 'Security',
  ];

  const filteredPublications = PUBLICATIONS.filter(pub => {
    const matchesSearch = searchQuery === '' ||
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (pub.authors && pub.authors.toLowerCase().includes(searchQuery.toLowerCase())) ||
      pub.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === 'All' || (() => {
      const title = pub.title.toLowerCase();
      const desc = pub.description.toLowerCase();
      switch (selectedCategory) {
        case 'Medical Imaging': return title.includes('medical') || title.includes('chest x-ray') || title.includes('cxr') || title.includes('imaging') || desc.includes('medical imaging');
        case 'COVID-19': return title.includes('covid') || desc.includes('covid');
        case 'Machine Learning': return title.includes('machine learning') || title.includes('ml ') || title.includes('deep learning') || title.includes('cnn') || title.includes('neural network') || desc.includes('machine learning');
        case 'Computer Vision': return title.includes('vision') || title.includes('image') || title.includes('segmentation') || desc.includes('computer vision') || desc.includes('image processing');
        case 'Healthcare AI': return title.includes('health') || title.includes('fertility') || title.includes('tuberculosis') || title.includes('tb') || desc.includes('healthcare');
        case 'NLP': return title.includes('text') || title.includes('language') || title.includes('nlp') || desc.includes('natural language');
        case 'Security': return title.includes('attack') || title.includes('adversarial') || title.includes('secure') || desc.includes('security');
        default: return true;
      }
    })();
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredPublications.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedPublications = filteredPublications.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => { setCurrentPage(1); }, [searchQuery, selectedCategory]);

  const handleMouseEnter = (index: number) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setHoveredPublication(index);
  };
  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => setHoveredPublication(null), 150);
  };
  useEffect(() => () => { if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current); }, []);

  // Total publications count (used for reference)
  // const totalPubCount = PUBLICATIONS_BY_YEAR.reduce((sum, s) => sum + s.publications.length, 0);

  return (
    <PageLayout title="Publications">
      <div className="w-full px-3 sm:px-6 py-4 sm:py-8">
        <div className="w-full max-w-7xl mx-auto">

          {/* Hero Header */}
          <div className="mb-8 sm:mb-12">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extralight text-gray-900 tracking-tight">
                  Publications
                </h1>
                <p className="text-gray-500 mt-2 text-sm sm:text-base font-light max-w-2xl">
                  Research output from the USD AI Research Lab — journals, conferences, books & preprints
                </p>
              </div>
              <div className="flex items-center gap-3">
                {currentUser && (
                  <Link
                    to="/publications/dashboard"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Manage
                  </Link>
                )}
              </div>
            </div>


          </div>

          {/* Books Section */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 bg-red-600 rounded-full" />
              <h2 className="text-xl sm:text-2xl font-light text-gray-900">Books</h2>
            </div>
            <BooksComponent />
          </section>

          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200 mb-6">
            {[
              { id: 'few-samples' as const, label: 'Few Samples', count: PUBLICATIONS_BY_YEAR.reduce((sum, s) => sum + s.publications.length, 0) },
              { id: 'research-papers' as const, label: 'Research Papers', count: PUBLICATIONS.length },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-red-600 text-red-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
                <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${
                  activeTab === tab.id ? 'bg-red-50 text-red-600' : 'bg-gray-100 text-gray-400'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* ===== Few Samples Tab ===== */}
          {activeTab === 'few-samples' && (
            <section className="mb-10 space-y-8">
              {PUBLICATIONS_BY_YEAR.map((section) => (
                <div key={section.year} className="bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 overflow-hidden">
                  {/* Year header */}
                  <div className="flex items-center gap-3 px-4 sm:px-6 py-3 border-b border-gray-100 bg-white/60">
                    <div className="w-1 h-5 bg-red-600 rounded-full" />
                    <h3 className="text-base font-semibold text-gray-900">{section.year}</h3>
                    <span className="text-xs text-gray-400 ml-1">({section.publications.length} papers)</span>
                    {section.summary && (
                      <span className="text-xs text-gray-400 hidden sm:inline">— {section.summary}</span>
                    )}
                  </div>
                  <div className="p-4 sm:p-6">
                    <ul className="space-y-1">
                      {section.publications.map((pub, idx) => (
                        <li
                          key={idx}
                          className="group relative pl-4 py-2.5 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 border border-transparent hover:border-gray-100"
                        >
                          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200 group-hover:bg-red-500 rounded-full transition-colors" />
                          <div className="text-sm text-gray-700 leading-relaxed">
                            <span className="text-gray-500">{pub.authors}:</span>{' '}
                            <span className="font-medium text-gray-900">{pub.title}</span>,{' '}
                            <span className="text-blue-700 font-medium">{pub.venue}</span>{' '}
                            <span className="text-green-700">({pub.year}{pub.note ? `, ${pub.note}` : ''})</span>
                            {pub.linkUrl && (
                              <a
                                href={pub.linkUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`ml-2 inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium transition-colors ${
                                  pub.linkLabel === 'arXiv' ? 'bg-blue-50 text-blue-700 hover:bg-blue-100' :
                                  pub.linkLabel === 'URL' ? 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100' :
                                  'bg-green-50 text-green-700 hover:bg-green-100'
                                }`}
                              >
                                {pub.linkLabel}
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              </a>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </section>
          )}

          {/* ===== Research Papers Tab ===== */}
          {activeTab === 'research-papers' && (
            <section className="mb-10">
              {/* Search */}
              <div className="mb-4">
                <div className="relative">
                  <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search papers by title, author, or keyword..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white"
                  />
                </div>
              </div>

              {/* Category Filters */}
              <div className="mb-6 flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-red-600 text-white shadow-sm'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Results Count */}
              <div className="mb-4 text-xs text-gray-400">
                Showing {startIndex + 1}–{Math.min(startIndex + itemsPerPage, filteredPublications.length)} of {filteredPublications.length} papers
                {filteredPublications.length !== PUBLICATIONS.length && (
                  <span className="hidden sm:inline"> (filtered from {PUBLICATIONS.length} total)</span>
                )}
              </div>

              {/* Paper Cards */}
              <div className="grid gap-4 md:gap-5 grid-cols-1 md:grid-cols-2">
                {paginatedPublications.map((publication, index) => {
                  const actualIndex = startIndex + index;
                  const isHovered = hoveredPublication === actualIndex;
                  return (
                    <div
                      key={actualIndex}
                      className="group bg-white border border-gray-100 rounded-xl overflow-hidden hover:border-gray-200 hover:shadow-md transition-all duration-300"
                      onMouseEnter={() => handleMouseEnter(actualIndex)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="p-5">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-sm sm:text-base font-medium text-gray-900 leading-snug pr-3 group-hover:text-red-700 transition-colors line-clamp-2">
                            {publication.title}
                          </h3>
                          <svg
                            className={`w-4 h-4 text-gray-300 flex-shrink-0 transition-transform duration-300 ${isHovered ? 'rotate-180 text-red-400' : ''}`}
                            fill="none" viewBox="0 0 24 24" stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>

                        {publication.authors && (
                          <p className="text-xs text-gray-500 mb-2 line-clamp-1">{publication.authors}</p>
                        )}
                        {(publication.venue || publication.year) && (
                          <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                            {publication.year && <span className="font-mono">{publication.year}</span>}
                            {publication.venue && publication.year && <span>·</span>}
                            {publication.venue && <span className="line-clamp-1">{publication.venue}</span>}
                          </div>
                        )}

                        {isHovered && (
                          <div className="border-t border-gray-50 pt-3 mt-1 space-y-3">
                            <p className="text-sm text-gray-600 leading-relaxed">{publication.description}</p>
                            <div className="flex gap-2">
                              {publication.paperUrl && (
                                <a href={publication.paperUrl} target="_blank" rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-600 text-white rounded-lg text-xs font-medium hover:bg-red-700 transition-colors">
                                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                  </svg>
                                  Paper
                                </a>
                              )}
                              {publication.codeUrl && publication.codeUrl !== "#" && (
                                <a href={publication.codeUrl} target="_blank" rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-800 text-white rounded-lg text-xs font-medium hover:bg-gray-900 transition-colors">
                                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                  </svg>
                                  Code
                                </a>
                              )}
                            </div>
                          </div>
                        )}

                        {!isHovered && (
                          <p className="text-xs text-gray-300 mt-1">Hover to see abstract →</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center mt-8 gap-1.5">
                  <button
                    onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
                    disabled={currentPage === 1}
                    className={`px-3 py-1.5 text-xs rounded-lg transition-colors ${
                      currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    ← Prev
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1)
                    .filter(p => p === 1 || p === totalPages || Math.abs(p - currentPage) <= 2)
                    .map((pageNum, idx, arr) => (
                      <React.Fragment key={pageNum}>
                        {idx > 0 && arr[idx - 1] !== pageNum - 1 && (
                          <span className="text-gray-300 text-xs px-1">…</span>
                        )}
                        <button
                          onClick={() => setCurrentPage(pageNum)}
                          className={`w-8 h-8 text-xs rounded-lg transition-colors ${
                            pageNum === currentPage
                              ? 'bg-red-600 text-white'
                              : 'text-gray-600 hover:bg-gray-100'
                          }`}
                        >
                          {pageNum}
                        </button>
                      </React.Fragment>
                    ))}
                  <button
                    onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-1.5 text-xs rounded-lg transition-colors ${
                      currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    Next →
                  </button>
                </div>
              )}
            </section>
          )}

        </div>
      </div>

      <FloatingScrollArrows />
    </PageLayout>
  );
};

export default Publications;
