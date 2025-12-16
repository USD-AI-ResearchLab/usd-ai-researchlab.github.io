import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Opportunities: React.FC = () => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const positionTypes = [
    {
      id: 'phd',
      title: 'PhD Students',
      requirements: 'Strong foundations in ML, computer vision, NLP, statistics, probability, or applied mathematics. MSc or equivalent required.',
      applicationRequirements: [
        'CV',
        'Transcript', 
        'Motivational letter explaining interest in working with us'
      ],
      emailSubject: 'PhD Application - USD AI Lab 2025',
      additionalPrograms: [
        'NSF Graduate Research Fellowship Program',
        'USD Computer Science PhD Program'
      ]
    },
    {
      id: 'postdoc',
      title: 'Postdoctoral Researchers',
      requirements: 'Proven track record with publications at top ML/AI venues (NeurIPS, ICML, ICLR, AAAI, IJCAI, AISTATS). Evidence of research independence and leadership potential.',
      applicationRequirements: [
        'CV including publication list',
        'Contact information of two referees',
        'Research statement (1-2 pages) including past contributions and rationale for joining USD AI Research Lab'
      ],
      emailSubject: 'Postdoc Application - USD AI Lab 2025',
      fellowships: [
        'NSF Postdoctoral Research Fellowship',
        'NIH Postdoctoral Fellowship', 
        'Marie Curie Postdoctoral Fellowship (MSCA)'
      ]
    },
    {
      id: 'masters',
      title: "Master's Students",
      requirements: 'Interest in AI research through thesis projects, independent studies, or research assistantships. Strong programming skills and coursework in ML or related areas preferred.',
      applicationRequirements: [
        'CV and academic transcripts',
        'Brief statement of research interests',
        'Portfolio of relevant coursework or projects'
      ],
      emailSubject: "Master's Research Opportunity"
    },
    {
      id: 'undergraduate',
      title: 'Undergraduate Students',
      requirements: 'Strong academic performance and completion of relevant coursework in computer science, mathematics, or statistics.',
      description: 'Gain hands-on research experience through independent study projects, summer research programs, or senior capstone projects.',
      note: 'Contact us to discuss available opportunities and project alignment.'
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      <motion.div 
        className="w-full px-4 py-8"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        {/* Header Section */}
        <motion.div className="text-left mb-16" variants={fadeInUp}>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-thin mb-4 text-logo-red">
            Opportunities
          </h1>
        </motion.div>

        {/* Main Content Section */}
        <motion.div className="mb-16" variants={fadeInUp}>
          <div className="space-y-4 mb-12">
            <p className="body-text-18 text-black leading-relaxed font-thin">
              We are continuously looking for highly motivated and talented people to contribute to our research in AI, machine learning, and computer vision. Our positions are competitive and limited to maintain a focused, research-driven group.
            </p>
            
            <p className="body-text-18 text-black leading-relaxed font-thin">
              Before applying, please review our recent <a href="#/publications" className="text-logo-red underline">publications</a> to ensure alignment with our research directions.
            </p>
            
            <p className="body-text-18 text-gray-600 leading-relaxed font-thin italic">
              Due to high volume, we may not respond to every inquiry individually.
            </p>
          </div>
          
          {/* Position Categories with Dropdowns */}
          <div className="space-y-4">
            {positionTypes.map((position) => (
              <motion.div 
                key={position.id}
                variants={fadeInUp}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                {/* Header */}
                <button
                  onClick={() => toggleSection(position.id)}
                  className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                >
                  <h3 className="text-xl font-light text-black">{position.title}</h3>
                  <svg 
                    className={`w-6 h-6 text-gray-600 transition-transform duration-200 ${openSections[position.id] ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Content */}
                {openSections[position.id] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 bg-white border-t border-gray-100"
                  >
                    {/* Requirements */}
                    <div className="mb-6">
                      <h4 className="text-base font-medium text-black mb-3">Requirements</h4>
                      <p className="text-base text-gray-700 leading-relaxed">{position.requirements}</p>
                      {position.description && (
                        <p className="text-base text-gray-700 leading-relaxed mt-2">{position.description}</p>
                      )}
                    </div>

                    {/* Application Requirements */}
                    {position.applicationRequirements && (
                      <div className="mb-6">
                        <h4 className="text-base font-medium text-black mb-3">Application Requirements</h4>
                        <div className="bg-red-50 border-l-4 border-logo-red p-4 rounded-r-lg">
                          <p className="text-base text-gray-700 mb-3">
                            Send your application to <a href="mailto:usd.airesearch.lab@gmail.com" className="text-logo-red underline font-medium">usd.airesearch.lab@gmail.com</a> with subject line "{position.emailSubject}":
                          </p>
                          <ul className="list-disc list-inside text-base text-gray-700 space-y-1">
                            {position.applicationRequirements.map((req, index) => (
                              <li key={index}>{req}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Additional Programs */}
                    {position.additionalPrograms && (
                      <div className="mb-4">
                        <h4 className="text-base font-medium text-gray-600 mb-2">Alternative Application Routes</h4>
                        <ul className="list-disc list-inside text-base text-gray-600 space-y-1">
                          {position.additionalPrograms.map((program, index) => (
                            <li key={index}>{program}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Fellowships */}
                    {position.fellowships && (
                      <div className="mb-4">
                        <h4 className="text-base font-medium text-gray-600 mb-2">Competitive Fellowships</h4>
                        <p className="text-base text-gray-600 mb-2">
                          Consider applying to these (email us with subject "Fellowship Application - USD AI Lab 2025"):
                        </p>
                        <ul className="list-disc list-inside text-base text-gray-600 space-y-1">
                          {position.fellowships.map((fellowship, index) => (
                            <li key={index}>{fellowship}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Special Note */}
                    {position.note && (
                      <div className="mt-4 p-3 bg-red-50 border-l-4 border-logo-red rounded-lg">
                        <p className="text-base text-red-800">{position.note}</p>
                      </div>
                    )}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Research Visits/Internships - Dropdown Card Section */}
          <motion.div
            variants={fadeInUp}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            {/* Header */}
            <button
              onClick={() => toggleSection('research-visits')}
              className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
            >
              <h3 className="text-xl font-light text-black">Research Visits & Internships</h3>
              <svg 
                className={`w-6 h-6 text-gray-600 transition-transform duration-200 ${openSections['research-visits'] ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Content */}
            {openSections['research-visits'] && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="p-6 bg-white border-t border-gray-100"
              >
                {/* Information */}
                <div className="mb-6">
                  <h4 className="text-base font-medium text-black mb-3">Availability</h4>
                  <p className="text-base text-gray-700 mb-4">
                    Research visits are very limited and typically only possible through existing collaborations or funded programs (summer schools, fellowships, mobility grants).
                  </p>
                </div>

                {/* Important Notice */}
                <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                  <h4 className="text-base font-medium text-red-800 mb-2">Important Notice</h4>
                  <p className="text-base text-red-700">
                    Currently not responding to emails regarding research visits/internships.
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Important Notes */}
          <motion.div variants={fadeInUp} className="mt-12 p-6 bg-white border border-gray-200 rounded-lg">
            <h3 className="text-xl font-light mb-4 text-black">Important Notes</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-base font-medium text-black mb-2">Review Process</h4>
                <p className="text-base text-gray-700">Applications reviewed on rolling basis. We cannot respond to emails that don't follow instructions.</p>
              </div>
              <div>
                <h4 className="text-base font-medium text-black mb-2">Funding</h4>
                <p className="text-base text-gray-700">Support through research assistantships, teaching assistantships, or external fellowships.</p>
              </div>
            </div>
            <p className="text-base text-gray-600 mt-4">
              For general inquiries, visit our <a href="#/contact" className="text-logo-red underline">Contact page</a>.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Opportunities;
