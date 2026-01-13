import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';

interface Initiative {
  id: string;
  title: string;
  description: string;
  year_started: number;
  status: 'active' | 'planning' | 'completed';
  focus_areas: string[];
  impact?: string;
}

const Initiatives: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'active' | 'planning' | 'completed'>('all');

  const initiatives: Initiative[] = [
    {
      id: '1',
      title: 'AI for Healthcare',
      description: 'Developing AI applications for medical imaging, diagnosis, and patient care optimization. Our focus is on creating interpretable AI systems that support clinical decision-making.',
      year_started: 2020,
      status: 'active',
      focus_areas: ['Medical Imaging', 'Diagnostic AI', 'Clinical Decision Support'],
      impact: '15+ publications, 3 patents, 5+ industry partnerships'
    },
    {
      id: '2',
      title: 'Sustainable AI for Agriculture',
      description: 'Applying machine learning and computer vision to improve agricultural productivity while promoting sustainable farming practices. Targeting precision agriculture and crop health monitoring.',
      year_started: 2021,
      status: 'active',
      focus_areas: ['Precision Agriculture', 'Crop Analysis', 'Resource Optimization'],
      impact: '8 publications, partnerships with 4 farms'
    },
    {
      id: '3',
      title: 'AI Ethics & Transparency',
      description: 'Research into explainable AI, bias detection, and ethical AI development. We work on making AI systems more transparent and trustworthy for society.',
      year_started: 2019,
      status: 'active',
      focus_areas: ['Explainable AI', 'Fairness', 'Accountability', 'Transparency'],
      impact: '25+ publications, 2 major grants'
    },
    {
      id: '4',
      title: 'USD AI Symposium 2025',
      description: 'Biennial international conference bringing together AI researchers, practitioners, and industry leaders to share cutting-edge research and foster collaboration.',
      year_started: 2023,
      status: 'planning',
      focus_areas: ['Research Dissemination', 'Networking', 'Knowledge Exchange'],
      impact: '200+ attendees expected'
    },
    {
      id: '5',
      title: 'AI Education Initiative',
      description: 'Developing curriculum and educational resources to increase AI literacy among undergraduates and high school students. Promoting diversity and inclusion in AI.',
      year_started: 2022,
      status: 'active',
      focus_areas: ['K-12 Education', 'University Curriculum', 'Public Awareness'],
      impact: '500+ students reached'
    }
  ];

  const filteredInitiatives = selectedStatus === 'all'
    ? initiatives
    : initiatives.filter(i => i.status === selectedStatus);

  const statusColors = {
    active: 'bg-green-100 text-green-800',
    planning: 'bg-yellow-100 text-yellow-800',
    completed: 'bg-gray-100 text-gray-800'
  };

  const sidebar = (
    <div className="space-y-8">
      {/* Filter by Status */}
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
        <h3 className="font-bold text-gray-900 mb-4 text-lg">Filter by Status</h3>
        <div className="space-y-2">
          {(['all', 'active', 'planning', 'completed'] as const).map(status => (
            <button
              key={status}
              onClick={() => setSelectedStatus(status)}
              className={`block w-full text-left px-4 py-2 rounded-lg transition-all font-medium ${
                selectedStatus === status
                  ? 'bg-red-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Statistics */}
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
        <h3 className="font-bold text-gray-900 mb-4 text-lg">Overview</h3>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex justify-between"><span>Total Initiatives:</span> <strong>{initiatives.length}</strong></li>
          <li className="flex justify-between"><span>Active:</span> <strong>{initiatives.filter(i => i.status === 'active').length}</strong></li>
          <li className="flex justify-between"><span>Planning:</span> <strong>{initiatives.filter(i => i.status === 'planning').length}</strong></li>
          <li className="flex justify-between"><span>Completed:</span> <strong>{initiatives.filter(i => i.status === 'completed').length}</strong></li>
        </ul>
      </div>

      {/* Support */}
      <div className="bg-red-50 rounded-lg p-6 border border-red-200">
        <h3 className="font-bold text-gray-900 mb-3 text-lg">Support Our Work</h3>
        <p className="text-sm text-gray-700 mb-4">
          Help us advance AI research and education.
        </p>
        <a href="#" className="block px-4 py-2 text-sm text-center text-white bg-red-600 rounded-lg hover:bg-red-700 font-medium transition">
          Learn More
        </a>
      </div>
    </div>
  );

  return (
    <PageLayout
      title="Our Initiatives"
      subtitle="Strategic Research and Educational Programs"
      email="usd.airesearch.lab@gmail.com"
      sidebar={sidebar}
    >
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Active and Upcoming Initiatives</h2>
        <p className="text-gray-700 leading-relaxed mb-8">
          We lead and participate in numerous initiatives aimed at advancing AI research, education, and application across multiple domains. Below are our major strategic programs.
        </p>

        <div className="space-y-8">
          {filteredInitiatives.map(initiative => (
            <article 
              key={initiative.id}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900 flex-1">
                  {initiative.title}
                </h3>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ml-3 ${statusColors[initiative.status]}`}>
                  {initiative.status.charAt(0).toUpperCase() + initiative.status.slice(1)}
                </span>
              </div>

              <p className="text-sm text-gray-600 mb-4">
                Started: {initiative.year_started}
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                {initiative.description}
              </p>

              {initiative.focus_areas.length > 0 && (
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-900 mb-2">Focus Areas:</p>
                  <div className="flex flex-wrap gap-2">
                    {initiative.focus_areas.map((area, idx) => (
                      <span
                        key={idx}
                        className="inline-block px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {initiative.impact && (
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm font-semibold text-gray-900 mb-1">Impact:</p>
                  <p className="text-sm text-gray-700">
                    {initiative.impact}
                  </p>
                </div>
              )}
            </article>
          ))}
        </div>

        {filteredInitiatives.length === 0 && (
          <p className="text-center text-gray-600 py-8">
            No initiatives found with the selected filter.
          </p>
        )}
      </section>
    </PageLayout>
  );
};

export default Initiatives;
