import React from 'react';
import { motion } from 'framer-motion';

const Initiatives: React.FC = () => {
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

  const initiatives = [
    {
      title: "AI Symposium",
      description: "Annual symposium bringing together thought leaders from academia, industry, and government to explore the forefront of artificial intelligence.",
      link: "/ai-symposium-2025",
      category: "Events"
    },
    {
      title: "AI Club",
      description: "Student-led organization fostering AI learning through workshops, projects, and networking opportunities.",
      link: "#",
      category: "Education"
    },
    {
      title: "Healthcare AI Research",
      description: "Advancing AI applications in medical imaging, diagnostics, and patient care systems.",
      link: "#",
      category: "Research"
    },
    {
      title: "Cybersecurity AI",
      description: "Developing AI-powered solutions for threat detection, risk assessment, and cybersecurity management.",
      link: "#",
      category: "Research"
    },
    {
      title: "Agricultural AI",
      description: "Applying machine learning to sustainable agriculture, crop optimization, and precision farming.",
      link: "#",
      category: "Research"
    },
    {
      title: "Quantum Computing Research",
      description: "Exploring the intersection of quantum computing and artificial intelligence technologies.",
      link: "#",
      category: "Research"
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      <motion.div 
        className="container mx-auto px-4 py-12 max-w-4xl"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        {/* Header Section */}
        <motion.div className="text-left mb-16" variants={fadeInUp}>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-thin mb-4" style={{ color: '#C53030' }}>
            Initiatives
          </h1>
          <div className="w-24 h-1 mb-6" style={{ backgroundColor: '#C53030' }}></div>
        </motion.div>

        {/* Content Section */}
        <motion.div className="mb-16" variants={fadeInUp}>
          <p className="text-base text-gray-700 leading-relaxed mb-12 font-thin">
            Our research initiatives span multiple domains, focusing on advancing AI applications in healthcare, cybersecurity, agriculture, and emerging technologies.
          </p>
          
          {/* Initiatives Grid */}
          <div className="grid gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-300 group"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h3 className="text-xl font-medium text-gray-900 mr-3">
                        {initiative.title}
                      </h3>
                      <span className="px-2 py-1 text-xs rounded-full" style={{ backgroundColor: '#FFE8E8', color: '#C53030' }}>
                        {initiative.category}
                      </span>
                    </div>
                    <p className="text-gray-700 font-thin leading-relaxed">
                      {initiative.description}
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    {initiative.link !== "#" ? (
                      <a 
                        href={initiative.link}
                        className="inline-flex items-center px-4 py-2 text-white rounded-lg hover:opacity-90 transition-colors text-sm font-medium"
                        style={{ backgroundColor: '#C53030' }}
                      >
                        Learn More →
                      </a>
                    ) : (
                      <span className="inline-flex items-center px-4 py-2 bg-gray-300 text-gray-500 rounded-lg text-sm font-medium">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action Section */}
        <motion.div className="bg-red-50 rounded-lg p-8" variants={fadeInUp}>
          <h2 className="text-2xl font-thin mb-6" style={{ color: '#C53030' }}>
            Get Involved
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 font-thin">
            Interested in collaborating on our initiatives or proposing new research directions? We welcome partnerships with academic institutions, industry partners, and government organizations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 text-white rounded-lg hover:opacity-90 transition-colors font-medium"
              style={{ backgroundColor: '#C53030' }}
            >
              Contact Us
            </a>
            <a 
              href="/publications" 
              className="inline-flex items-center justify-center px-6 py-3 border rounded-lg hover:opacity-90 transition-colors font-medium"
              style={{ borderColor: '#C53030', color: '#C53030' }}
            >
              View Our Research
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Initiatives;
