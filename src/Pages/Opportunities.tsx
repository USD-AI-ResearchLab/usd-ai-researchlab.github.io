import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageLayout from '../components/PageLayout';
import FloatingScrollArrows from "../components/FloatingScrollArrows";

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
    initial: {},
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
      cardNumber: 1,
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
      cardNumber: 2,
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
      cardNumber: 3,
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
      cardNumber: 4,
      requirements: 'Strong academic performance and completion of relevant coursework in computer science, mathematics, or statistics.',
      description: 'Gain hands-on research experience through independent study projects, summer research programs, or senior capstone projects.',
      note: 'Contact us to discuss available opportunities and project alignment.'
    },
    {
      id: 'research-visits',
      title: 'Research Visits & Internships',
      cardNumber: 5,
      requirements: 'Open to researchers and students from all levels seeking short-term or long-term research collaborations.',
      description: 'Whether you are a visiting scholar, intern, or collaborative researcher, we welcome inquiries for research visits and internship opportunities.',
      note: 'Please include your research background, duration of visit/internship, and research interests in your inquiry.'
    }
  ];

  return (
    <PageLayout
      title="Career Opportunities"
    >
      <motion.div 
        className="w-full px-4 py-8 bg-gray-100 rounded-xl"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        {/* Main Content Section */}
        <motion.div className="mb-8 bg-gray-100 rounded-lg p-6 border border-gray-200" variants={fadeInUp}>
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
          <div className="space-y-2">
            {positionTypes.map((position) => (
              <motion.div 
                key={position.id}
                variants={fadeInUp}
                className={`border-2 rounded-lg overflow-hidden transition-all duration-300 ${
                  openSections[position.id] ? 'border-red-600' : 'border-gray-200'
                }`}
              >
                {/* Header */}
                <button
                  onClick={() => toggleSection(position.id)}
                  className="w-full flex items-center gap-3 p-6 bg-gray-100 hover:bg-gray-150 transition-colors duration-200 text-left"
                >
                  <h3 className={`text-xl font-normal flex-grow transition-all duration-300 ${
                    openSections[position.id] ? 'text-logo-red' : 'text-gray-900'
                  }`}>{position.title}</h3>
                  <svg 
                    className={`w-5 h-5 text-gray-600 transition-transform duration-200 flex-shrink-0 ${openSections[position.id] ? 'rotate-180' : ''}`}
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
                    className="p-6 bg-gray-100 border-t border-gray-100"
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
                            Send your application to <a href="mailto:usd.airesearch.lab@gmail.com" className="text-logo-red underline font-medium">usd.airesearch.lab@gmail.com</a> | <a href="mailto:kc.santosh@usd.edu" className="text-logo-red underline font-medium">kc.santosh@usd.edu</a>
                          </p>
                          <ul className="list-disc list-inside text-base text-gray-700 space-y-1">
                            {position.applicationRequirements.map((req, index) => (
                              <li key={index}>{req}</li>
                            ))}
                          </ul>
                        </div>
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

          {/* Important Notes */}
          <motion.div variants={fadeInUp} className="mt-12 p-6 bg-gray-100 border border-gray-200 rounded-lg">
            <h3 className="text-xl font-light mb-4 text-logo-red">Important Notes</h3>
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

          {/* Research Collaborations & Partnerships */}
          <motion.div variants={fadeInUp} className="mt-12 bg-gray-100 border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-light mb-4 text-logo-red">
              Research Collaborations & Partnerships
            </h3>
            <div className="space-y-4">
              <p className="text-base text-gray-700 leading-relaxed">
                We are always interested in collaborating with researchers, industry partners, and academic institutions. 
                For research collaboration inquiries, please include:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Your research background and current affiliation</li>
                <li>Specific research areas of mutual interest</li>
                <li>Proposed collaboration timeline and objectives</li>
                <li>Available resources and funding (if applicable)</li>
              </ul>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>For general inquiries:</strong> Please use the subject line "USD AI Lab - [Your Topic]" to help us route your message appropriately.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={fadeInUp} className="mt-12 bg-gray-100 border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-light mb-4 text-logo-red">
              Contact Us
            </h3>
            <div className="space-y-4">
              <p className="text-base text-gray-700 leading-relaxed">
                For any inquiries about opportunities, collaborations, or other matters, please reach out to us:
              </p>
              <div className="flex flex-col gap-3">
                <p className="text-base text-gray-700">
                  <a href="mailto:usd.airesearch.lab@gmail.com" className="text-logo-red underline font-medium">
                    usd.airesearch.lab@gmail.com
                  </a>
                  {' | '}
                  <a href="mailto:kc.santosh@usd.edu" className="text-logo-red underline font-medium">
                    kc.santosh@usd.edu
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating Scroll Arrows */}
      <FloatingScrollArrows />
    </PageLayout>
  );
};

export default Opportunities;
