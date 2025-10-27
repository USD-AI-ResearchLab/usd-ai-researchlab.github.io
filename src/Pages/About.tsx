import React from 'react';
import Footer from '../components/Footer';

const About: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-left mb-16">
          <h1 className="text-5xl md:text-6xl font-thin mb-4" style={{ color: 'var(--logo-red, #C53030)' }}>
            About
          </h1>
          <div className="w-24 h-1 mb-6" style={{ backgroundColor: 'var(--logo-red, #C53030)' }}></div>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed font-thin">
            Pioneering the future of artificial intelligence through innovation, education, and collaboration
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-thin text-gray-800 mb-8 text-left">Mission</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-thin">
                The AI Club is dedicated to fostering a vibrant community of artificial intelligence enthusiasts, 
                researchers, and practitioners. We strive to bridge the gap between theoretical knowledge and 
                practical applications in the rapidly evolving field of AI.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-thin">
                Through cutting-edge research, hands-on workshops, and collaborative projects, we empower our 
                members to become leaders in the AI revolution, contributing to solutions that benefit society 
                and drive technological progress.
              </p>
            </div>
            <div className="relative">
              <div className="p-8 text-gray-700">
                <h3 className="text-2xl font-thin mb-4">Our Vision</h3>
                <p className="text-lg font-thin">
                  To be the premier platform for AI innovation and education, 
                  creating a future where artificial intelligence enhances human potential.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-thin text-gray-800 mb-12 text-left">Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-thin text-gray-800 mb-4">Innovation</h3>
              <p className="text-gray-600 font-thin">
                Pushing the boundaries of what's possible with AI through creative problem-solving and cutting-edge research.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-thin text-gray-800 mb-4">Collaboration</h3>
              <p className="text-gray-600 font-thin">
                Building a supportive community where diverse perspectives come together to solve complex challenges.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-thin text-gray-800 mb-4">Education</h3>
              <p className="text-gray-600 font-thin">
                Democratizing AI knowledge through accessible learning opportunities and hands-on experiences.
              </p>
            </div>
          </div>
        </div>

        {/* What We Do Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-thin text-gray-800 mb-12 text-left">What We Do</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center mt-1" style={{ 
                  backgroundColor: 'var(--logo-red, #C53030)',
                  minWidth: '32px',
                  minHeight: '32px'
                }}>
                  <span className="text-white font-thin text-sm" style={{ lineHeight: '1' }}>1</span>
                </div>
                <div>
                  <h3 className="text-xl font-thin text-gray-800 mb-2">Research & Development</h3>
                  <p className="text-gray-600 font-thin">
                    Conducting groundbreaking research in machine learning, deep learning, and AI applications.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center mt-1" style={{ backgroundColor: 'var(--logo-red, #C53030)' }}>
                  <span className="text-white font-thin text-sm">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-thin text-gray-800 mb-2">Workshops & Training</h3>
                  <p className="text-gray-600 font-thin">
                    Hosting interactive workshops, seminars, and training sessions for all skill levels.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center mt-1" style={{ backgroundColor: 'var(--logo-red, #C53030)' }}>
                  <span className="text-white font-thin text-sm">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-thin text-gray-800 mb-2">Industry Partnerships</h3>
                  <p className="text-gray-600 font-thin">
                    Collaborating with leading tech companies and research institutions worldwide.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center mt-1" style={{ backgroundColor: 'var(--logo-red, #C53030)' }}>
                  <span className="text-white font-thin text-sm">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-thin text-gray-800 mb-2">Student Projects</h3>
                  <p className="text-gray-600 font-thin">
                    Mentoring innovative student projects and providing resources for implementation.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center mt-1" style={{ backgroundColor: 'var(--logo-red, #C53030)' }}>
                  <span className="text-white font-thin text-sm">5</span>
                </div>
                <div>
                  <h3 className="text-xl font-thin text-gray-800 mb-2">Community Events</h3>
                  <p className="text-gray-600 font-thin">
                    Organizing hackathons, competitions, and networking events to foster collaboration.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center mt-1" style={{ backgroundColor: 'var(--logo-red, #C53030)' }}>
                  <span className="text-white font-thin text-sm">6</span>
                </div>
                <div>
                  <h3 className="text-xl font-thin text-gray-800 mb-2">Open Source Contributions</h3>
                  <p className="text-gray-600 font-thin">
                    Contributing to open-source AI projects and making knowledge accessible to all.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-thin text-gray-800 mb-12 text-left">Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-6">
              <div className="text-3xl font-thin mb-2" style={{ color: 'var(--logo-red)' }}>500+</div>
              <div className="text-gray-600 font-thin">Active Members</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-thin mb-2" style={{ color: 'var(--logo-red)' }}>50+</div>
              <div className="text-gray-600 font-thin">Research Projects</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-thin mb-2" style={{ color: 'var(--logo-red)' }}>25+</div>
              <div className="text-gray-600 font-thin">Industry Partners</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-thin mb-2" style={{ color: 'var(--logo-red)' }}>100+</div>
              <div className="text-gray-600 font-thin">Events Hosted</div>
            </div>
          </div>
        </div>

        {/* Join Us CTA */}
        <div className="text-center">
          <div className="p-12 text-gray-700">
            <h2 className="text-3xl font-thin mb-4">Ready to Shape the Future?</h2>
            <p className="text-xl mb-8 font-thin">
              Join our community of AI innovators and be part of the next technological revolution.
            </p>
            <button className="bg-gray-100 px-8 py-3 rounded-lg font-thin hover:bg-gray-200 transition-colors duration-300 text-gray-700">
              Get Involved
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
