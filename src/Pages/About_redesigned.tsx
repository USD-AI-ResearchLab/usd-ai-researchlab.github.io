import React from 'react';
import PageLayout from '../components/PageLayout';

const About: React.FC = () => {
  const sidebar = (
    <div className="space-y-8">
      {/* Quick Stats */}
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
        <h3 className="font-bold text-gray-900 mb-4 text-lg">Quick Facts</h3>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex items-center"><span className="text-red-600 mr-3 font-bold">•</span> Founded: 2015</li>
          <li className="flex items-center"><span className="text-red-600 mr-3 font-bold">•</span> Faculty: 5+</li>
          <li className="flex items-center"><span className="text-red-600 mr-3 font-bold">•</span> Students: 20+</li>
          <li className="flex items-center"><span className="text-red-600 mr-3 font-bold">•</span> Collaborators: 50+</li>
        </ul>
      </div>

      {/* Research Areas */}
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
        <h3 className="font-bold text-gray-900 mb-4 text-lg">Research Areas</h3>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex items-center"><span className="text-red-600 mr-3 font-bold">•</span> Machine Learning</li>
          <li className="flex items-center"><span className="text-red-600 mr-3 font-bold">•</span> Computer Vision</li>
          <li className="flex items-center"><span className="text-red-600 mr-3 font-bold">•</span> Natural Language Processing</li>
          <li className="flex items-center"><span className="text-red-600 mr-3 font-bold">•</span> AI Ethics & Sustainability</li>
          <li className="flex items-center"><span className="text-red-600 mr-3 font-bold">•</span> Explainable AI</li>
        </ul>
      </div>

      {/* Funding Sources */}
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
        <h3 className="font-bold text-gray-900 mb-4 text-lg">Funding Sources</h3>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex items-center"><span className="text-red-600 mr-3 font-bold">•</span> NSF (National Science Foundation)</li>
          <li className="flex items-center"><span className="text-red-600 mr-3 font-bold">•</span> DOD (Department of Defense)</li>
          <li className="flex items-center"><span className="text-red-600 mr-3 font-bold">•</span> SDBOR (State Board of Regents)</li>
          <li className="flex items-center"><span className="text-red-600 mr-3 font-bold">•</span> Department of Education</li>
        </ul>
      </div>
    </div>
  );

  return (
    <PageLayout
      title="About USD AI Research Lab"
      subtitle="Leading AI Research and Innovation in South Dakota"
      headerImage="/faculty/lab-building.jpg"
      email="usd.airesearch.lab@gmail.com"
      phone="+1 (605) 658-6841"
      socialLinks={{
        twitter: 'https://twitter.com/usdairesearch',
        linkedin: 'https://linkedin.com/company/usd-ai-lab',
        github: 'https://github.com/usd-airesearch',
        googlescholar: 'https://scholar.google.com'
      }}
      sidebar={sidebar}
    >
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The USD AI Research Lab is committed to advancing sustainable, human-centered machine intelligence that is accessible, responsible, and impactful across communities. We focus on building AI ecosystems that empower talent, reduce barriers, and ensure AI innovation benefits society at large.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Research Focus</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Artificial Intelligence & Machine Learning</h3>
            <p className="text-gray-700 leading-relaxed">
              We conduct cutting-edge research in machine learning, deep learning, and artificial intelligence applications. Our work spans theoretical foundations and practical implementations that solve real-world problems.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Computer Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              Our computer vision research focuses on image analysis, object detection, visual understanding, and applications in healthcare, agriculture, and autonomous systems.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Explainable AI & Ethics</h3>
            <p className="text-gray-700 leading-relaxed">
              We are committed to developing interpretable and ethical AI systems. Our research addresses transparency, fairness, accountability, and the societal impact of AI technologies.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Natural Language Processing</h3>
            <p className="text-gray-700 leading-relaxed">
              We work on language understanding, text analysis, and NLP applications that make information accessible and useful across diverse domains and languages.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Collaborations & Partnerships</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          We collaborate with leading universities, research institutions, and industry partners worldwide. Our partnerships enable us to tackle interdisciplinary challenges and create meaningful impact.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="font-semibold text-gray-900">National Institutes</p>
            <p className="text-sm text-gray-600 mt-1">NITI, NIH, NSF collaborations</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="font-semibold text-gray-900">International Partners</p>
            <p className="text-sm text-gray-600 mt-1">Universities across 20+ countries</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="font-semibold text-gray-900">Industry Partners</p>
            <p className="text-sm text-gray-600 mt-1">Tech companies and startups</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact & Inquiries</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Interested in collaborating with us or learning more about our research? We welcome inquiries from students, faculty, industry partners, and the broader research community.
        </p>
        <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-700 mb-2">
            <strong>Email:</strong>{' '}
            <a href="mailto:usd.airesearch.lab@gmail.com" className="text-red-600 underline hover:text-red-700">
              usd.airesearch.lab@gmail.com
            </a>
          </p>
          <p className="text-sm text-gray-700">
            <strong>Phone:</strong> +1 (605) 658-6841
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
