import React from 'react';
import { motion } from 'framer-motion';
import bgimage from "../assets/logo.svg";

const About: React.FC = () => {
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

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <motion.div 
        className="container mx-auto px-4 py-12"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        {/* Header Section */}
        <motion.div className="text-left mb-16" variants={fadeInUp}>
          <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ color: 'var(--logo-red, #C53030)' }}>
            About
          </h1>
          <div className="w-24 h-1 mb-6" style={{ backgroundColor: 'var(--logo-red, #C53030)' }}></div>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            Pioneering the future of artificial intelligence through innovation, education, and collaboration
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div className="mb-20" variants={fadeInUp}>
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-left">Mission</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The AI Club is dedicated to fostering a vibrant community of artificial intelligence enthusiasts, 
                  researchers, and practitioners. We strive to bridge the gap between theoretical knowledge and 
                  practical applications in the rapidly evolving field of AI.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Through cutting-edge research, hands-on workshops, and collaborative projects, we empower our 
                  members to become leaders in the AI revolution, contributing to solutions that benefit society 
                  and drive technological progress.
                </p>
              </div>
              <div className="relative">
                <div className="rounded-xl p-8 text-white" style={{ background: `linear-gradient(to right, var(--logo-red-dark), var(--logo-red))` }}>
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-lg opacity-90">
                    To be the premier platform for AI innovation and education, 
                    creating a future where artificial intelligence enhances human potential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div className="mb-20" variants={fadeInUp}>
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-left">Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: 'var(--logo-red-bg)' }}>
                <svg className="w-8 h-8" style={{ color: 'var(--logo-red)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Innovation</h3>
              <p className="text-gray-600">
                Pushing the boundaries of what's possible with AI through creative problem-solving and cutting-edge research.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: 'var(--logo-red-bg)' }}>
                <svg className="w-8 h-8" style={{ color: 'var(--logo-red)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Collaboration</h3>
              <p className="text-gray-600">
                Building a supportive community where diverse perspectives come together to solve complex challenges.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: 'var(--logo-red-bg)' }}>
                <svg className="w-8 h-8" style={{ color: 'var(--logo-red)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Education</h3>
              <p className="text-gray-600">
                Democratizing AI knowledge through accessible learning opportunities and hands-on experiences.
              </p>
            </div>
            </div>
          </div>
        </motion.div>

        {/* What We Do Section */}
        <motion.div className="mb-20" variants={fadeInUp}>
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-left">What We Do</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center mt-1" style={{ 
                    backgroundColor: 'var(--logo-red, #C53030)',
                    minWidth: '32px',
                    minHeight: '32px'
                  }}>
                    <span className="text-white font-bold text-sm" style={{ lineHeight: '1' }}>1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Research & Development</h3>
                    <p className="text-gray-600">
                      Conducting groundbreaking research in machine learning, deep learning, and AI applications.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center mt-1" style={{ backgroundColor: 'var(--logo-red, #C53030)' }}>
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Workshops & Training</h3>
                    <p className="text-gray-600">
                      Hosting interactive workshops, seminars, and training sessions for all skill levels.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center mt-1" style={{ backgroundColor: 'var(--logo-red, #C53030)' }}>
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Industry Partnerships</h3>
                    <p className="text-gray-600">
                      Collaborating with leading tech companies and research institutions worldwide.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center mt-1" style={{ backgroundColor: 'var(--logo-red, #C53030)' }}>
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Student Projects</h3>
                    <p className="text-gray-600">
                      Mentoring innovative student projects and providing resources for implementation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center mt-1" style={{ backgroundColor: 'var(--logo-red, #C53030)' }}>
                    <span className="text-white font-bold text-sm">5</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Community Events</h3>
                    <p className="text-gray-600">
                      Organizing hackathons, competitions, and networking events to foster collaboration.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center mt-1" style={{ backgroundColor: 'var(--logo-red, #C53030)' }}>
                    <span className="text-white font-bold text-sm">6</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Open Source Contributions</h3>
                    <p className="text-gray-600">
                      Contributing to open-source AI projects and making knowledge accessible to all.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Impact Section */}
        <motion.div className="mb-16" variants={fadeInUp}>
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-left">Impact</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="text-3xl font-bold mb-2" style={{ color: 'var(--logo-red)' }}>500+</div>
                <div className="text-gray-600">Active Members</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="text-3xl font-bold mb-2" style={{ color: 'var(--logo-red)' }}>50+</div>
                <div className="text-gray-600">Research Projects</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="text-3xl font-bold mb-2" style={{ color: 'var(--logo-red)' }}>25+</div>
                <div className="text-gray-600">Industry Partners</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="text-3xl font-bold mb-2" style={{ color: 'var(--logo-red)' }}>100+</div>
                <div className="text-gray-600">Events Hosted</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Join Us CTA */}
        <motion.div className="text-center" variants={fadeInUp}>
          <div className="rounded-2xl p-12 text-white" style={{ background: `linear-gradient(to right, var(--logo-red-dark), var(--logo-red))` }}>
            <h2 className="text-3xl font-bold mb-4">Ready to Shape the Future?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join our community of AI innovators and be part of the next technological revolution.
            </p>
            <button className="bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300" style={{ color: 'var(--logo-red)' }}>
              Get Involved
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
