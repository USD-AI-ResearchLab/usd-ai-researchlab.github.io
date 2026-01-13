import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';

interface Publication {
  id: string;
  title: string;
  authors: string;
  year: number;
  venue: string;
  type: 'journal' | 'conference' | 'book' | 'workshop';
  doi?: string;
  url?: string;
}

const Publications: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'journal' | 'conference' | 'book' | 'workshop'>('all');

  const publications: Publication[] = [
    {
      id: '1',
      title: 'Advancing Explainable AI for Medical Imaging',
      authors: 'KC Santosh, et al.',
      year: 2024,
      venue: 'IEEE Transactions on Medical Imaging',
      type: 'journal',
      doi: '10.1109/TMI.2024.xxxx'
    },
    {
      id: '2',
      title: 'Sustainable Machine Learning: A Framework for Ethical AI',
      authors: 'KC Santosh, Jane Smith',
      year: 2024,
      venue: 'NeurIPS 2024',
      type: 'conference',
      url: 'https://neurips.cc'
    },
    {
      id: '3',
      title: 'Deep Learning Applications in Computer Vision',
      authors: 'KC Santosh',
      year: 2023,
      venue: 'Academic Press',
      type: 'book',
    },
    // Add more publications as needed
  ];

  const filteredPublications = filter === 'all' 
    ? publications 
    : publications.filter(p => p.type === filter);

  const sidebar = (
    <div className="space-y-8">
      {/* Filter by Type */}
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
        <h3 className="font-bold text-gray-900 mb-4 text-lg">Filter by Type</h3>
        <div className="space-y-2">
          {(['all', 'journal', 'conference', 'book', 'workshop'] as const).map(type => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`block w-full text-left px-4 py-2 rounded-lg transition-all font-medium ${
                filter === type
                  ? 'bg-red-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Statistics */}
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
        <h3 className="font-bold text-gray-900 mb-4 text-lg">Statistics</h3>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex justify-between"><span>Peer-Reviewed Articles:</span> <strong>300+</strong></li>
          <li className="flex justify-between"><span>Books:</span> <strong>12</strong></li>
          <li className="flex justify-between"><span>Conference Papers:</span> <strong>50+</strong></li>
          <li className="flex justify-between"><span>Citations per Year:</span> <strong>70+</strong></li>
        </ul>
      </div>

      {/* Export Options */}
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
        <h3 className="font-bold text-gray-900 mb-4 text-lg">Export</h3>
        <div className="space-y-2">
          <a href="#" className="block px-4 py-2 text-sm text-center text-red-600 border-2 border-red-600 rounded-lg hover:bg-red-50 font-medium transition">
            BibTeX
          </a>
          <a href="#" className="block px-4 py-2 text-sm text-center text-red-600 border-2 border-red-600 rounded-lg hover:bg-red-50 font-medium transition">
            CSV
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <PageLayout
      title="Publications"
      subtitle="Research Output and Scholarly Work"
      email="usd.airesearch.lab@gmail.com"
      sidebar={sidebar}
    >
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Featured Publications</h2>
        <p className="text-gray-700 leading-relaxed mb-8">
          Our research has been published in leading peer-reviewed journals and presented at top-tier conferences. Below is a selection of recent publications. For a complete list, please visit our Google Scholar profile.
        </p>

        <div className="space-y-6">
          {filteredPublications.length > 0 ? (
            filteredPublications.map(pub => (
              <article key={pub.id} className="border-l-4 border-red-600 pl-6 py-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {pub.url ? (
                    <a href={pub.url} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">
                      {pub.title}
                    </a>
                  ) : (
                    pub.title
                  )}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-medium">{pub.authors}</span>
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  <em>{pub.venue}</em> ({pub.year})
                </p>
                <div className="flex gap-3 text-sm">
                  <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 rounded">
                    {pub.type}
                  </span>
                  {pub.doi && (
                    <a href={`https://doi.org/${pub.doi}`} className="text-red-600 hover:underline">
                      DOI
                    </a>
                  )}
                </div>
              </article>
            ))
          ) : (
            <p className="text-gray-600">No publications found for selected filter.</p>
          )}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Research Databases</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Access our publications through these academic databases and platforms:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: 'Google Scholar', url: '#' },
            { name: 'ResearchGate', url: '#' },
            { name: 'ORCID', url: '#' },
            { name: 'Scopus', url: '#' },
            { name: 'Web of Science', url: '#' },
            { name: 'arXiv', url: '#' }
          ].map(db => (
            <a
              key={db.name}
              href={db.url}
              className="p-4 border border-gray-200 rounded-lg hover:border-red-600 hover:bg-red-50 transition"
            >
              <p className="font-semibold text-gray-900">{db.name}</p>
            </a>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default Publications;
