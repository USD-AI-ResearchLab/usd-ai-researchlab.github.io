import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';

interface TeamMember {
  id: string;
  name: string;
  position: string;
  image?: string;
  email?: string;
  bio: string;
  expertise: string[];
  social?: {
    [key: string]: string;
  };
}

const People: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<'all' | 'faculty' | 'phd' | 'postdoc' | 'staff'>('all');

  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Prof. KC Santosh',
      position: 'faculty',
      image: '/faculty/kc-santosh.jpg',
      email: 'kc.santosh@usd.edu',
      bio: 'Inaugural Director of USD AI Research Lab. Expert in machine learning, computer vision, and AI ethics.',
      expertise: ['Machine Learning', 'Computer Vision', 'AI Ethics', 'Explainable AI'],
      social: {
        linkedin: '#',
        googlescholar: '#',
        orcid: '#'
      }
    },
    {
      id: '2',
      name: 'Dr. Jane Smith',
      position: 'faculty',
      image: '/faculty/jane-smith.jpg',
      email: 'jane.smith@usd.edu',
      bio: 'Associate Professor specializing in Natural Language Processing and AI applications.',
      expertise: ['NLP', 'Deep Learning', 'Text Mining'],
      social: {
        linkedin: '#',
        googlescholar: '#'
      }
    },
    // Add more team members as needed
  ];

  const roles = [
    { id: 'all', label: 'All Members' },
    { id: 'faculty', label: 'Faculty' },
    { id: 'phd', label: 'PhD Students' },
    { id: 'postdoc', label: 'Postdocs' },
    { id: 'staff', label: 'Staff' }
  ];

  const filteredMembers = selectedRole === 'all' 
    ? teamMembers 
    : teamMembers.filter(m => m.position === selectedRole);

  const sidebar = (
    <div className="space-y-8">
      {/* Team Structure */}
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
        <h3 className="font-bold text-gray-900 mb-4 text-lg">Team Structure</h3>
        <div className="space-y-2">
          {roles.map(role => (
            <button
              key={role.id}
              onClick={() => setSelectedRole(role.id as 'all' | 'faculty' | 'phd' | 'postdoc' | 'staff')}
              className={`block w-full text-left px-4 py-2 rounded-lg transition-all font-medium ${
                selectedRole === role.id
                  ? 'bg-red-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {role.label}
            </button>
          ))}
        </div>
      </div>

      {/* Team Statistics */}
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
        <h3 className="font-bold text-gray-900 mb-4 text-lg">Team Statistics</h3>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex justify-between"><span>Faculty Members:</span> <strong>5+</strong></li>
          <li className="flex justify-between"><span>PhD Students:</span> <strong>15+</strong></li>
          <li className="flex justify-between"><span>Postdoctoral Researchers:</span> <strong>8+</strong></li>
          <li className="flex justify-between"><span>Collaborators:</span> <strong>20+</strong></li>
        </ul>
      </div>

      {/* Join Us */}
      <div className="bg-red-50 rounded-lg p-6 border border-red-200">
        <h3 className="font-bold text-gray-900 mb-3 text-lg">Interested in Joining?</h3>
        <p className="text-sm text-gray-700 mb-4">
          We are always looking for talented researchers and students.
        </p>
        <a href="/opportunities" className="block px-4 py-2 text-sm text-center text-white bg-red-600 rounded-lg hover:bg-red-700 font-medium transition">
          View Opportunities
        </a>
      </div>
    </div>
  );

  return (
    <PageLayout
      title="Our Team"
      subtitle="Meet the People Behind the Research"
      email="usd.airesearch.lab@gmail.com"
      sidebar={sidebar}
    >
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Team Members</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredMembers.map(member => (
            <div key={member.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
              {member.image && (
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm text-red-600 font-semibold mb-3">
                  {member.position.charAt(0).toUpperCase() + member.position.slice(1)}
                </p>
                
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>

                {member.expertise.length > 0 && (
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-900 mb-2">Expertise:</p>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((exp, idx) => (
                        <span
                          key={idx}
                          className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded"
                        >
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {member.email && (
                  <p className="text-sm text-gray-600 mb-3">
                    <a href={`mailto:${member.email}`} className="text-red-600 hover:underline">
                      {member.email}
                    </a>
                  </p>
                )}

                {member.social && (
                  <div className="flex gap-2">
                    {Object.entries(member.social).map(([platform, url]) => (
                      <a
                        key={platform}
                        href={url}
                        className="w-8 h-8 rounded-full bg-gray-200 hover:bg-red-600 text-gray-700 hover:text-white flex items-center justify-center text-xs transition"
                        title={platform}
                      >
                        {platform[0].toUpperCase()}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default People;
