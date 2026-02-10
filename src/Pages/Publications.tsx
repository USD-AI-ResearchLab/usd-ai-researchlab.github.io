import React, { useState, useRef, useEffect } from 'react';
import PageLayout from '../components/PageLayout';
import BooksComponent from '../components/BooksComponent';
import { PUBLICATIONS } from '../data/publications';
import FloatingScrollArrows from "../components/FloatingScrollArrows";

const Publications: React.FC = () => {
  const [hoveredPublication, setHoveredPublication] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const itemsPerPage = 6; // Number of publications per page

  // Define categories based on publication data
  const categories = [
    'All',
    'Medical Imaging',
    'COVID-19',
    'Machine Learning',
    'Computer Vision',
    'Healthcare AI',
    'NLP',
    'Security'
  ];

  // Filter publications based on search and category
  const filteredPublications = PUBLICATIONS.filter(pub => {
    const matchesSearch = searchQuery === '' || 
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (pub.authors && pub.authors.toLowerCase().includes(searchQuery.toLowerCase())) ||
      pub.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === 'All' || (() => {
      const title = pub.title.toLowerCase();
      const desc = pub.description.toLowerCase();
      
      switch(selectedCategory) {
        case 'Medical Imaging':
          return title.includes('medical') || title.includes('chest x-ray') || title.includes('cxr') || 
                 title.includes('imaging') || desc.includes('medical imaging');
        case 'COVID-19':
          return title.includes('covid') || desc.includes('covid');
        case 'Machine Learning':
          return title.includes('machine learning') || title.includes('ml ') || title.includes('deep learning') ||
                 title.includes('cnn') || title.includes('neural network') || desc.includes('machine learning');
        case 'Computer Vision':
          return title.includes('vision') || title.includes('image') || title.includes('segmentation') ||
                 desc.includes('computer vision') || desc.includes('image processing');
        case 'Healthcare AI':
          return title.includes('health') || title.includes('fertility') || title.includes('tuberculosis') ||
                 title.includes('tb') || desc.includes('healthcare');
        case 'NLP':
          return title.includes('text') || title.includes('language') || title.includes('nlp') ||
                 desc.includes('natural language');
        case 'Security':
          return title.includes('attack') || title.includes('adversarial') || title.includes('secure') ||
                 desc.includes('security');
        default:
          return true;
      }
    })();

    return matchesSearch && matchesCategory;
  });

  // Pagination calculations
  const totalPages = Math.ceil(filteredPublications.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedPublications = filteredPublications.slice(startIndex, endIndex);

  // Reset to page 1 when search or category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  const handleMouseEnter = (index: number) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setHoveredPublication(index);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredPublication(null);
    }, 150); // 150ms delay before hiding content
  };

  // Cleanup timeout on component unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  return (
    <PageLayout
      title="Publications"
    >
      <div className="w-full px-4 sm:px-6 py-8">
      
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Books Section */}
        <div className="w-full mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-thin text-logo-red mb-8">
            Books
          </h2>
          <BooksComponent />
        </div>

        {/* Few Samples Section */}
        <div className="w-full mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-thin text-logo-red mb-6">
            Few samples
          </h2>
          <div className="p-4 rounded-lg">
            <div className="max-w-none">
              <ul className="space-y-2 text-gray-700 font-ubuntu text-sm leading-snug">
                <li className="relative pl-6 p-2 rounded hover:border-l-4 hover:border-red-500 transition-all duration-200">
                  <span className="absolute left-2 top-2 text-red-600 font-bold text-base">•</span>
                  C Wall, L Wang, R Rizk, KC Santosh: <span className="text-gray-800">Winsor-CAM: Human-Tunable Visual Explanations from Deep Networks via Layer-Wise Winsorization</span>, <strong className="text-blue-700">IEEE Transactions on Pattern Analysis & Machine Intelligence</strong> <span className="text-green-700">(2025, revision 2)</span>. <a href="http://arxiv.org/abs/2401.10000" target="_blank" rel="noopener noreferrer" className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-1 py-0.5 rounded text-xs underline">arXiv</a>
                </li>
                
                <li className="relative pl-6 p-2 rounded hover:border-l-4 hover:border-red-500 transition-all duration-200">
                  <span className="absolute left-2 top-2 text-red-600 font-bold text-base">•</span>
                  A Jain, SR Dubey, SK Singh, KC Santosh, BB Chaudhuri: <span className="text-gray-800">Non-Uniform Illumination Attack for Fooling Convolutional Neural Networks</span>, <strong className="text-blue-700">IEEE Transactions on Artificial Intelligence</strong> <span className="text-green-700">(2025)</span>. <a href="https://doi.org/10.1109/TAI.2024.3500000" target="_blank" rel="noopener noreferrer" className="bg-green-100 text-green-700 hover:bg-green-200 px-1 py-0.5 rounded text-xs underline">DOI</a>
                </li>
                
                <li className="relative pl-6 p-2 rounded hover:border-l-4 hover:border-red-500 transition-all duration-200">
                  <span className="absolute left-2 top-2 text-red-600 font-bold text-base">•</span>
                  L Wang, I Uddin, KC Santosh: <span className="text-gray-800">Expert-Guided Explainable Few-Shot Learning with Active Sample Selection for Medical Image Analysis</span>, <strong className="text-blue-700">IEEE Journal of Biomedical and Health Informatics</strong> <span className="text-green-700">(2025)</span>.
                </li>
                
                <li className="relative pl-6 p-2 rounded hover:border-l-4 hover:border-red-500 transition-all duration-200">
                  <span className="absolute left-2 top-2 text-red-600 font-bold text-base">•</span>
                  A Vettoruzzo, MR Bouguelia, J Vanschoren, T Rognvaldsson, KC Santosh: <span className="text-gray-800">Advances and Challenges in Meta-Learning: A Technical Review</span>, <strong className="text-blue-700">IEEE Transactions on Pattern Analysis & Machine Intelligence</strong> <span className="text-green-700">(2024)</span>. <a href="https://doi.org/10.1109/TPAMI.2024.3380000" target="_blank" rel="noopener noreferrer" className="bg-purple-100 text-purple-700 hover:bg-purple-200 px-1 py-0.5 rounded text-xs underline">DOI</a>
                </li>
                
                <li className="relative pl-6 p-2 rounded hover:border-l-4 hover:border-red-500 transition-all duration-200">
                  <span className="absolute left-2 top-2 text-red-600 font-bold text-base">•</span>
                  KC Santosh and S. Antani: <span className="text-gray-800">Multimodal Learning in Medical Imaging and Informatics</span>, <strong className="text-blue-700">IEEE Journal of Biomedical & Health Informatics</strong> <span className="text-green-700">(2023)</span>. <a href="https://doi.org/10.1109/JBHI.2023.3275000" target="_blank" rel="noopener noreferrer" className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 px-1 py-0.5 rounded text-xs underline">DOI</a>
                </li>
                
                <li className="relative pl-6 p-2 rounded hover:border-l-4 hover:border-red-500 transition-all duration-200">
                  <span className="absolute left-2 top-2 text-red-600 font-bold text-base">•</span>
                  KC Santosh, S Ghosh, D GhoshRoy: <span className="text-gray-800">Deep Learning for Covid-19 Screening using Chest X-rays in 2020: A Systematic Review</span>, <strong className="text-blue-700">International Journal of Pattern Recognition & Artificial Intelligence</strong>, <span className="text-orange-600">World Scientific (2022)</span>. <a href="https://doi.org/10.1142/S0218001422500434" target="_blank" rel="noopener noreferrer" className="bg-pink-100 text-pink-700 hover:bg-pink-200 px-1 py-0.5 rounded text-xs underline">DOI</a>
                </li>
                
                <li className="relative pl-6 p-2 rounded hover:border-l-4 hover:border-red-500 transition-all duration-200">
                  <span className="absolute left-2 top-2 text-red-600 font-bold text-base">•</span>
                  Md S Kamal, L Chowdhury, S Hasan, N Dey, and KC Santosh: <span className="text-gray-800">Explainable AI for Glaucoma Prediction Analysis to Understand Risk Factors in Treatment Planning</span>, <strong className="text-blue-700">IEEE Transactions on Instrumentation & Measurement</strong> <span className="text-green-700">(2022)</span>. <a href="https://doi.org/10.1109/TIM.2022.3187700" target="_blank" rel="noopener noreferrer" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200 px-1 py-0.5 rounded text-xs underline">DOI</a>
                </li>
                
                <li className="relative pl-6 p-2 rounded hover:border-l-4 hover:border-red-500 transition-all duration-200">
                  <span className="absolute left-2 top-2 text-red-600 font-bold text-base">•</span>
                  KC Santosh, S Allu, S Rajaraman, S Antani: <span className="text-gray-800">Advances in Deep Learning for Tuberculosis Screening using Chest X-rays: The last 5-Year Systematic Review</span>, <strong className="text-blue-700">Journal of Medical Systems</strong>, <span className="text-orange-600">Springer</span> <span className="text-green-700">(2022)</span>. <a href="https://doi.org/10.1007/s10916-022-01838-6" target="_blank" rel="noopener noreferrer" className="bg-teal-100 text-teal-700 hover:bg-teal-200 px-1 py-0.5 rounded text-xs underline">DOI</a>
                </li>
                
                <li className="relative pl-6 p-2 rounded hover:border-l-4 hover:border-red-500 transition-all duration-200">
                  <span className="absolute left-2 top-2 text-red-600 font-bold text-base">•</span>
                  KC Santosh, S Ghosh: <span className="text-gray-800">Covid-19 versus Lung Cancer: Understanding chest CT images through Deep Ensemble Neural Networks</span>, <strong className="text-blue-700">International Journal of Artificial Intelligence Tools</strong>, <span className="text-orange-600">World Scientific</span> <span className="text-green-700">(2022)</span>. <a href="https://doi.org/10.1142/S0218213022500087" target="_blank" rel="noopener noreferrer" className="bg-orange-100 text-orange-700 hover:bg-orange-200 px-1 py-0.5 rounded text-xs underline">DOI</a>
                </li>
                
                <li className="relative pl-6 p-2 rounded hover:border-l-4 hover:border-red-500 transition-all duration-200">
                  <span className="absolute left-2 top-2 text-red-600 font-bold text-base">•</span>
                  KC Santosh, S Ghosh: <span className="text-gray-800">Covid-19 medical imaging tools: how big data is big?</span>, <strong className="text-blue-700">Journal of Medical Systems</strong>, <span className="text-orange-600">Springer</span> <span className="text-green-700">(2021)</span>. <a href="https://doi.org/10.1007/s10916-021-01747-2" target="_blank" rel="noopener noreferrer" className="bg-cyan-100 text-cyan-700 hover:bg-cyan-200 px-1 py-0.5 rounded text-xs underline">DOI</a>
                </li>
                
                <li className="relative pl-6 p-2 rounded hover:border-l-4 hover:border-red-500 transition-all duration-200">
                  <span className="absolute left-2 top-2 text-red-600 font-bold text-base">•</span>
                  KC Santosh: <span className="text-gray-800">COVID-19 Prediction Models and Unexploited Data</span>, <strong className="text-blue-700">Journal of Medical Systems</strong>, <span className="text-orange-600">Springer</span> <span className="text-green-700">(2020)</span>. <a href="https://doi.org/10.1007/s10916-020-01645-z" target="_blank" rel="noopener noreferrer" className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200 px-1 py-0.5 rounded text-xs underline">DOI</a>
                </li>
                
                <li className="relative pl-6 p-2 rounded hover:border-l-4 hover:border-red-500 transition-all duration-200">
                  <span className="absolute left-2 top-2 text-red-600 font-bold text-base">•</span>
                  KC Santosh: <span className="text-gray-800">AI-driven tools for coronavirus outbreak: Need of active learning and cross-population train/test models on multitudinal/multimodal data</span>, <strong className="text-blue-700">Journal of Medical Systems</strong>, <span className="text-orange-600">Springer</span> <span className="text-green-700">(2020)</span>. <a href="https://doi.org/10.1007/s10916-020-01562-1" target="_blank" rel="noopener noreferrer" className="bg-rose-100 text-rose-700 hover:bg-rose-200 px-1 py-0.5 rounded text-xs underline">DOI</a>
                </li>
                
                <li className="relative pl-6 p-2 rounded hover:border-l-4 hover:border-red-500 transition-all duration-200">
                  <span className="absolute left-2 top-2 text-red-600 font-bold text-base">•</span>
                  S Ghosh, A Pal, S Jaiswal, KC Santosh, N Das, M Nassipuri: <span className="text-gray-800">segFast-02: Semantic-based image segmentation using encoder-decoder compression architecture</span>, <strong className="text-blue-700">International Journal of Machine Learning & Cybernetics</strong>, <span className="text-orange-600">Springer</span> <span className="text-green-700">(2019)</span>. <a href="https://doi.org/10.1007/s13042-019-00972-z" target="_blank" rel="noopener noreferrer" className="bg-violet-100 text-violet-700 hover:bg-violet-200 px-1 py-0.5 rounded text-xs underline">DOI</a>
                </li>
                
                <li className="relative pl-6 p-2 rounded hover:border-l-4 hover:border-red-500 transition-all duration-200">
                  <span className="absolute left-2 top-2 text-red-600 font-bold text-base">•</span>
                  KC Santosh, L Wendling: <span className="text-gray-800">Angular relational signature-based chest radiograph image view classification</span>, <strong className="text-blue-700">Medical & Biological Engineering & Computing</strong>, <span className="text-orange-600">Springer</span> <span className="text-green-700">(2018)</span>. <a href="https://doi.org/10.1007/s11517-018-1890-0" target="_blank" rel="noopener noreferrer" className="bg-amber-100 text-amber-700 hover:bg-amber-200 px-1 py-0.5 rounded text-xs underline">DOI</a>
                </li>
                
                <li className="relative pl-6 p-2 rounded hover:border-l-4 hover:border-red-500 transition-all duration-200">
                  <span className="absolute left-2 top-2 text-red-600 font-bold text-base">•</span>
                  KC Santosh, S Antani: <span className="text-gray-800">Automated chest X-ray screening: can lung section symmetry help detect pulmonary abnormalities?</span>, <strong className="text-blue-700">IEEE Transactions on Medical Imaging</strong> <span className="text-green-700">(2018)</span>. <a href="https://doi.org/10.1109/TMI.2017.2775636" target="_blank" rel="noopener noreferrer" className="bg-lime-100 text-lime-700 hover:bg-lime-200 px-1 py-0.5 rounded text-xs underline">DOI</a>
                </li>
                
                <li className="relative pl-6 p-2 rounded hover:border-l-4 hover:border-red-500 transition-all duration-200">
                  <span className="absolute left-2 top-2 text-red-600 font-bold text-base">•</span>
                  KC Santosh, P Roy: <span className="text-gray-800">Arrow detection in biomedical images using sequential classifier</span>, <strong className="text-blue-700">International Journal of Machine Learning & Cybernetics</strong>, <span className="text-orange-600">Springer</span> <span className="text-green-700">(2018)</span>. <a href="https://doi.org/10.1007/s13042-016-0623-y" target="_blank" rel="noopener noreferrer" className="bg-slate-100 text-slate-700 hover:bg-slate-200 px-1 py-0.5 rounded text-xs underline">DOI</a>
                </li>
                
                <li className="relative pl-6 p-2 rounded hover:border-l-4 hover:border-red-500 transition-all duration-200">
                  <span className="absolute left-2 top-2 text-red-600 font-bold text-base">•</span>
                  M Bouguelia, S Nowaczyk, KC Santosh, A Verikas: <span className="text-gray-800">Agreeing to disagree: active learning with noisy labels without crowdsourcing</span>, <strong className="text-blue-700">International Journal of Machine Learning & Cybernetics</strong>, <span className="text-orange-600">Springer</span> <span className="text-green-700">(2018)</span>.
                </li>
                
                <li className="relative pl-6 p-2 rounded hover:border-l-4 hover:border-red-500 transition-all duration-200">
                  <span className="absolute left-2 top-2 text-red-600 font-bold text-base">•</span>
                  KC Santosh, L Wendling, S Antani, G Thoma: <span className="text-gray-800">Overlaid Arrow Detection for Labeling Biomedical Image Regions</span>, <strong className="text-blue-700">IEEE Intelligent Systems</strong> <span className="text-gray-600">(special issue: Pattern Recognition)</span> <span className="text-green-700">(2016)</span>. <a href="https://doi.org/10.1109/MIS.2016.24" target="_blank" rel="noopener noreferrer" className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 px-1 py-0.5 rounded text-xs underline">DOI</a>
                </li>
                
                <li className="relative pl-6 p-2 rounded hover:border-l-4 hover:border-red-500 transition-all duration-200">
                  <span className="absolute left-2 top-2 text-red-600 font-bold text-base">•</span>
                  KC Santosh: <span className="text-gray-800">g-DICE: Graph mining-based Document Information Content Exploitation</span>, <strong className="text-blue-700">International Journal on Document Analysis and Recognition</strong>, <span className="text-orange-600">Springer</span> <span className="text-green-700">(2015)</span>. <a href="https://doi.org/10.1007/s10032-015-0249-2" target="_blank" rel="noopener noreferrer" className="bg-pink-100 text-pink-700 hover:bg-pink-200 px-1 py-0.5 rounded text-xs underline">DOI</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Research Papers Section */}
        <div className="w-full mb-16 relative">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-thin text-logo-red mb-8">
            Research Papers
          </h2>

          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search papers by title, author, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm sm:text-base"
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Category Filters */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-red-600 text-white shadow-md'
                      : `text-gray-700 hover:bg-gray-200 ${selectedCategory !== category ? 'bg-gray-200' : ''}`
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-4 text-sm text-gray-600 font-light">
            Showing {startIndex + 1}-{Math.min(endIndex, filteredPublications.length)} of {filteredPublications.length} papers
            {filteredPublications.length !== PUBLICATIONS.length && (
              <span> (filtered from {PUBLICATIONS.length} total)</span>
            )}
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {paginatedPublications.map((publication, index) => {
              const actualIndex = startIndex + index; // Calculate actual index for hover state
              const isHovered = hoveredPublication === actualIndex;
              return (
                <div
                  key={actualIndex}
                  className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 bg-gray-200"
                  onMouseEnter={() => handleMouseEnter(actualIndex)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="p-6">
                    {/* Card Header - Always Visible */}
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-medium text-gray-900 leading-tight pr-4 flex-grow">
                        {publication.title}
                      </h3>
                      <div className="flex-shrink-0">
                        <svg 
                          className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                            isHovered ? 'rotate-180' : ''
                          }`}
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>

                    {/* Authors Preview - Always Visible */}
                    {publication.authors && (
                      <p className="text-sm text-gray-600 mb-3 font-light line-clamp-2">
                        {publication.authors}
                      </p>
                    )}

                    {/* Year/Venue Preview - Always Visible */}
                    {(publication.venue || publication.year) && (
                      <p className="text-xs text-gray-500 mb-4 font-light">
                        {publication.year && `${publication.year}`}
                        {publication.venue && publication.year && ' • '}
                        {publication.venue}
                      </p>
                    )}

                    {/* Expanded Content - Only when hovered */}
                    {isHovered && (
                      <div className="space-y-4 border-t border-gray-100 pt-4 mt-4">
                        <div>
                          <h4 className="text-sm font-medium text-gray-700 mb-2">Abstract:</h4>
                          <p className="text-gray-600 leading-relaxed text-sm font-light">
                            {publication.description}
                          </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3 pt-2">
                          {publication.paperUrl && (
                            <a
                              href={publication.paperUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:opacity-90 transition-opacity text-sm font-medium"
                            >
                              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                              Read Paper
                            </a>
                          )}
                          {publication.codeUrl && publication.codeUrl !== "#" && (
                            <a
                              href={publication.codeUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors text-sm font-medium"
                            >
                              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                              View Code
                            </a>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Hover Hint */}
                    {!isHovered && (
                      <div className="text-xs text-gray-400 mt-2 font-light opacity-75">
                        Hover to read more...
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-8 space-x-2">
              {/* Previous Button */}
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`px-3 py-1 rounded bg-gray-200 ${
                  currentPage === 1
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-red-600 border border-red-600 hover:bg-red-50 transition-colors'
                }`}
              >
                Previous
              </button>

              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`px-3 py-1 rounded transition-colors ${
                    pageNum === currentPage
                      ? 'bg-red-600 text-white'
                      : `text-red-600 border border-red-600 hover:bg-red-50 ${pageNum !== currentPage ? 'bg-gray-200' : ''}`
                  }`}
                >
                  {pageNum}
                </button>
              ))}

              {/* Next Button */}
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 rounded ${
                  currentPage === totalPages
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-red-600 border border-red-600 hover:bg-red-50 transition-colors'
                } bg-gray-200`}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
      </div>

      {/* Floating Scroll Arrows */}
      <FloatingScrollArrows />
    </PageLayout>
  );
};

export default Publications;
