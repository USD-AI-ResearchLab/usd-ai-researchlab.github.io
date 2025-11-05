import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

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
    <div className="pt-20 min-h-screen bg-white">
      <motion.div 
        className="container mx-auto px-4 py-12 max-w-4xl"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        {/* Header Section */}
        <motion.div className="text-left mb-16" variants={fadeInUp}>
          <h1 className="text-5xl md:text-6xl font-thin mb-4" style={{ color: 'var(--logo-red, #C53030)' }}>
            About
          </h1>
          <div className="w-24 h-1 mb-6" style={{ backgroundColor: 'var(--logo-red, #C53030)' }}></div>
          <p className="text-xl text-gray-600 leading-relaxed font-thin">
            Pioneering the future of artificial intelligence through innovation, education, and collaboration
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div className="mb-16" variants={fadeInUp}>
          <h2 className="text-3xl font-thin text-gray-800 mb-8">Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6 font-thin">
            The AI Club is dedicated to fostering a vibrant community of artificial intelligence enthusiasts, 
            researchers, and practitioners. We strive to bridge the gap between theoretical knowledge and 
            practical applications in the rapidly evolving field of AI.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 font-thin">
            Through cutting-edge research, hands-on workshops, and collaborative projects, we empower our 
            members to become leaders in the AI revolution, contributing to solutions that benefit society 
            and drive technological progress.
          </p>
          <h3 className="text-2xl font-thin mb-4" style={{ color: 'var(--logo-red, #C53030)' }}>Our Vision</h3>
          <p className="text-lg text-gray-700 leading-relaxed font-thin">
            To be the premier platform for AI innovation and education, 
            creating a future where artificial intelligence enhances human potential.
          </p>
        </motion.div>

        {/* Values Section */}
        <motion.div className="mb-16" variants={fadeInUp}>
          <h2 className="text-3xl font-thin text-gray-800 mb-8">Values</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-thin text-gray-800 mb-4" style={{ color: 'var(--logo-red, #C53030)' }}>Innovation</h3>
            <p className="text-gray-600 font-thin leading-relaxed">
              Pushing the boundaries of what's possible with AI through creative problem-solving and cutting-edge research.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-thin text-gray-800 mb-4" style={{ color: 'var(--logo-red, #C53030)' }}>Collaboration</h3>
            <p className="text-gray-600 font-thin leading-relaxed">
              Building a supportive community where diverse perspectives come together to solve complex challenges.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-thin text-gray-800 mb-4" style={{ color: 'var(--logo-red, #C53030)' }}>Education</h3>
            <p className="text-gray-600 font-thin leading-relaxed">
              Democratizing AI knowledge through accessible learning opportunities and hands-on experiences.
            </p>
          </div>
        </motion.div>

        {/* What We Do Section */}
        <motion.div className="mb-16" variants={fadeInUp}>
          <h2 className="text-3xl font-thin text-gray-800 mb-8">What We Do</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-thin text-gray-800 mb-2" style={{ color: 'var(--logo-red, #C53030)' }}>Research & Development</h3>
              <p className="text-gray-600 font-thin leading-relaxed">
                Conducting groundbreaking research in machine learning, deep learning, and AI applications.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-thin text-gray-800 mb-2" style={{ color: 'var(--logo-red, #C53030)' }}>Workshops & Training</h3>
              <p className="text-gray-600 font-thin leading-relaxed">
                Hosting interactive workshops, seminars, and training sessions for all skill levels.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-thin text-gray-800 mb-2" style={{ color: 'var(--logo-red, #C53030)' }}>Industry Partnerships</h3>
              <p className="text-gray-600 font-thin leading-relaxed">
                Collaborating with leading tech companies and research institutions worldwide.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-thin text-gray-800 mb-2" style={{ color: 'var(--logo-red, #C53030)' }}>Student Projects</h3>
              <p className="text-gray-600 font-thin leading-relaxed">
                Mentoring innovative student projects and providing resources for implementation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-thin text-gray-800 mb-2" style={{ color: 'var(--logo-red, #C53030)' }}>Community Events</h3>
              <p className="text-gray-600 font-thin leading-relaxed">
                Organizing hackathons, competitions, and networking events to foster collaboration.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-thin text-gray-800 mb-2" style={{ color: 'var(--logo-red, #C53030)' }}>Open Source Contributions</h3>
              <p className="text-gray-600 font-thin leading-relaxed">
                Contributing to open-source AI projects and making knowledge accessible to all.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Impact Section */}
        <motion.div className="mb-16" variants={fadeInUp}>
          <h2 className="text-3xl font-thin text-gray-800 mb-8">Impact</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="text-3xl font-thin mb-2" style={{ color: 'var(--logo-red, #C53030)' }}>500+ Active Members</div>
              <div className="text-3xl font-thin mb-2" style={{ color: 'var(--logo-red, #C53030)' }}>50+ Research Projects</div>
            </div>
            <div>
              <div className="text-3xl font-thin mb-2" style={{ color: 'var(--logo-red, #C53030)' }}>25+ Industry Partners</div>
              <div className="text-3xl font-thin mb-2" style={{ color: 'var(--logo-red, #C53030)' }}>100+ Events Hosted</div>
            </div>
          </div>
        </motion.div>

        {/* Join Us Section */}
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <h2 className="text-3xl font-thin mb-4" style={{ color: 'var(--logo-red, #C53030)' }}>Ready to Shape the Future?</h2>
          <p className="text-xl text-gray-600 font-thin leading-relaxed">
            Join our community of AI innovators and be part of the next technological revolution.
          </p>
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default About;
