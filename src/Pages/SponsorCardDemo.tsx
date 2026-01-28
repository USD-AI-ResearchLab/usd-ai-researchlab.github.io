import React from 'react';
import { motion } from 'framer-motion';
import SponsorCard from '../components/SponsorCards';
import FloatingScrollArrows from "../components/FloatingScrollArrows";

const SponsorCardDemo: React.FC = () => {
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

  // Sample sponsor data
  const sponsors = [
    {
      name: "Sterling Technology",
      imageSrc: "/images/sponsor/Sterling.png",
      description: "Leading technology solutions provider specializing in innovative software development and IT consulting services.",
      website: "https://sterling-technology.com"
    },
    {
      name: "Vermillion Area Chamber & Development",
      imageSrc: "/images/sponsor/Area.png", 
      description: "Driving economic growth and development in the greater Vermillion area through strategic partnerships.",
      website: "https://vermillionchamber.com"
    },
    {
      name: "Dakota PC",
      imageSrc: "/images/sponsor/dakota.png",
      description: "Premier computer hardware and technology solutions provider serving South Dakota and surrounding regions.",
      website: "https://dakotapc.com"
    },
    {
      name: "South Dakota Biomedical Computing Consortium",
      imageSrc: "/images/sponsor/SD-BCC.png",
      description: "Advancing biomedical research through high-performance computing and collaborative partnerships across South Dakota.",
      website: "https://sdbcc.org"
    },
    {
      name: "IEEE",
      imageSrc: "/images/sponsor/IEEE.png",
      description: "The world's largest technical professional organization dedicated to advancing technology for humanity.",
      website: "https://ieee.org"
    },
    {
      name: "IEEE USA",
      imageSrc: "/images/sponsor/ieee_usa.png",
      description: "IEEE's U.S. organization focused on supporting the careers and public policy interests of members.",
      website: "https://ieeeusa.org"
    }
  ];

  return (
    <div className="pt-32 pb-32 min-h-screen bg-gray-200">
      <motion.div 
        className="w-full px-4 py-8"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        {/* Header */}
        <motion.div className="text-center mb-16 rounded-lg p-8 border border-gray-200 bg-gray-200" variants={fadeInUp}>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-thin mb-4 text-logo-red">
            Three Different Card Styles
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed font-thin max-w-3xl mx-auto">
            Showcasing three distinct card designs for displaying sponsor and partner information with varying levels of detail and visual impact.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto space-y-16">

          {/* Card Type 1: Basic Cards */}
          <motion.section variants={fadeInUp}>
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">Card Type 1: Basic Style</h2>
              <p className="text-gray-600 mb-6">Clean, minimal cards focusing on logo display with subtle hover effects. Perfect for sponsor logos sections.</p>
            </div>
            
            <div className="rounded-xl shadow-lg border border-gray-200 p-8 bg-gray-200">
              <div className="grid grid-cols-3 gap-6 items-center justify-items-center">
                {sponsors.slice(0, 6).map((sponsor, index) => (
                  <SponsorCard 
                    key={`basic-${index}`}
                    name={sponsor.name}
                    imageSrc={sponsor.imageSrc}
                    website={sponsor.website}
                    type="basic"
                  />
                ))}
              </div>
            </div>
          </motion.section>

          {/* Card Type 2: Detailed Cards */}
          <motion.section variants={fadeInUp}>
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">Card Type 2: Detailed Style</h2>
              <p className="text-gray-600 mb-6">Enhanced cards with organization names and descriptions. Ideal for showcasing partnerships with more context.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sponsors.map((sponsor, index) => (
                <SponsorCard 
                  key={`detailed-${index}`}
                  name={sponsor.name}
                  imageSrc={sponsor.imageSrc}
                  description={sponsor.description}
                  website={sponsor.website}
                  type="detailed"
                />
              ))}
            </div>
          </motion.section>

          {/* Card Type 3: Featured Cards */}
          <motion.section variants={fadeInUp}>
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">Card Type 3: Featured Style</h2>
              <p className="text-gray-600 mb-6">Premium cards with gradient backgrounds and enhanced styling. Perfect for highlighting key partners or sponsors.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sponsors.slice(0, 3).map((sponsor, index) => (
                <SponsorCard 
                  key={`featured-${index}`}
                  name={sponsor.name}
                  imageSrc={sponsor.imageSrc}
                  description={sponsor.description}
                  website={sponsor.website}
                  type="featured"
                />
              ))}
            </div>
          </motion.section>

          {/* Mixed Layout Example */}
          <motion.section variants={fadeInUp}>
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">Mixed Layout Example</h2>
              <p className="text-gray-600 mb-6">Combining different card types in a single layout for visual hierarchy and varied presentation.</p>
            </div>

            <div className="space-y-8">
              {/* Featured partners row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <SponsorCard 
                  name="IEEE"
                  imageSrc="/images/sponsor/IEEE.png"
                  description="The world's largest technical professional organization dedicated to advancing technology for humanity."
                  website="https://ieee.org"
                  type="featured"
                />
                <SponsorCard 
                  name="South Dakota Biomedical Computing Consortium"
                  imageSrc="/images/sponsor/SD-BCC.png"
                  description="Advancing biomedical research through high-performance computing and collaborative partnerships."
                  website="https://sdbcc.org"
                  type="featured"
                />
              </div>

              {/* Detailed partners row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <SponsorCard 
                  name="Sterling Technology"
                  imageSrc="/images/sponsor/Sterling.png"
                  description="Leading technology solutions provider."
                  website="https://sterling-technology.com"
                  type="detailed"
                />
                <SponsorCard 
                  name="Dakota PC"
                  imageSrc="/images/sponsor/dakota.png"
                  description="Premier computer hardware provider."
                  website="https://dakotapc.com"
                  type="detailed"
                />
                <SponsorCard 
                  name="IEEE USA"
                  imageSrc="/images/sponsor/ieee_usa.png"
                  description="Supporting IEEE members' careers and interests."
                  website="https://ieeeusa.org"
                  type="detailed"
                />
              </div>

              {/* Basic sponsors section */}
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-6 text-center">Additional Partners</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {sponsors.slice(0, 4).map((sponsor, index) => (
                    <SponsorCard 
                      key={`mixed-basic-${index}`}
                      name={sponsor.name}
                      imageSrc={sponsor.imageSrc}
                      website={sponsor.website}
                      type="basic"
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

        </div>
      </motion.div>

      <FloatingScrollArrows />
    </div>
  );
};

export default SponsorCardDemo;
