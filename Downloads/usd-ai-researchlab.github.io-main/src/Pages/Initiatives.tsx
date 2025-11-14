import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedAIBanner from '../components/AnimatedAIBanner';
import StatsComponent from '../components/StatsComponent';
import RegistrationInfo from '../components/RegistrationInfo';
import Speakers from '../components/Speakers';
import ConferenceSchedule from '../components/ConferenceSchedule';
import CommitteeMembers from '../components/CommitteeMembers';

const Initiatives: React.FC = () => {
  const [showGoToTop, setShowGoToTop] = useState(false);
  const [activeTab, setActiveTab] = useState("current");

  // Control the visibility of the "Go to Top" button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowGoToTop(true);
      } else {
        setShowGoToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const symposiumStats = [
    { number: 300, label: "Expected Attendees", icon: "users" },
    { number: 50, label: "Expert Speakers", icon: "microphone" },
    { number: 2, label: "Conference Days", icon: "calendar" },
    { number: 25, label: "Industry Partners", icon: "handshake" }
  ];

  // Sponsorship tier information
  const sponsorshipTiers = [
    {
      tier: "Platinum",
      cost: "$3,000",
    },
    {
      tier: "Gold",
      cost: "$2,000",
    },
    {
      tier: "Silver",
      cost: "$1,000",
    },
    {
      tier: "Bronze",
      cost: "$500",
    },
  ];

  return (
    <div 
      className="bg-gray-100 min-h-screen"
      style={{
        backgroundImage: "url('/images/pattern.svg')",
        backgroundAttachment: "fixed",
        fontFamily: 'Ubuntu, sans-serif'
      }}
    >
      <div className="mx-auto px-4 sm:px-6 py-6 max-w-full sm:max-w-3xl md:max-w-5xl lg:max-w-7xl xl:max-w-7xl">
        {/* Back to Homepage */}
        <Link to="/" className="flex items-center font-bold gap-2 mb-4" style={{ color: '#C53030' }}>
          ← Back to Homepage
        </Link>

        {/* Symposium Navbar */}
        <div className="flex justify-center py-4 px-6 bg-white mb-8 rounded-lg">
          <div className="text-center">
            <h1 className="text-3xl sm:text-5xl font-bold leading-tight" style={{ fontFamily: 'Ubuntu, sans-serif', color: '#C53030' }}>
              7<sup className="text-xl align-top">th</sup> Artificial Intelligence Symposium*
            </h1>
            <p className="text-lg sm:text-xl text-gray-800 mt-1 font-semibold">
              June 26–27, 2025
            </p>
            <p className="text-sm sm:text-base text-gray-500 italic mt-1">
              * Formerly known as the Data Harnessing Symposium (held in 2018 and 2019)
            </p>
          </div>
        </div>

        {/* Animated AI Symposium Banner */}
        <div className="mb-8">
          <AnimatedAIBanner />
        </div>

        {/* Combined "Download" + "Welcome" Card */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          {/* Download heading */}
          <div className="border-l-4 pl-4 mb-6" style={{ borderColor: '#C53030' }}>
            <h1 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'Ubuntu, sans-serif', color: '#C53030' }}>
              Download your certificate of participation
            </h1>
          </div>

          <p className="text-lg leading-relaxed text-justify mb-4">
            Thank you for participating in the event! To receive your Certificate of
            Participation, please complete the form at the following link:{" "}
            <a
              href="https://forms.office.com/r/deink2VGxh"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline"
            >
              https://forms.office.com/r/deink2VGxh
            </a>
            . Once submitted, your certificate will be sent to you automatically via email.
          </p>

          {/* Welcome heading (with extra top margin) */}
          <div className="border-l-4 pl-4 mt-8 mb-6" style={{ borderColor: '#C53030' }}>
            <h1 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'Ubuntu, sans-serif', color: '#C53030' }}>
              Welcome to 7th Artificial Intelligence Symposium {new Date().getFullYear()}
            </h1>
          </div>

          <p className="text-lg leading-relaxed text-justify mb-4">
            Join us for the University of South Dakota's 7th Annual{" "}
            <a
              href="https://www.ai-research-lab.org/events/ai-symposium/2025"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline"
            >
              Artificial Intelligence Symposium
            </a>
            —formerly known as the Data Harnessing Symposium (2018–2019)—sponsored by
            IEEE and held in conjunction with the inaugural{" "}
            <a
              href="https://sd-bcc.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline"
            >
              South Dakota Biomedical Computation Consortium (SDBCC)
            </a>
            .
          </p>

          <p className="text-lg leading-relaxed text-justify">
            This premier event brings together thought leaders from academia, industry,
            and government to explore the forefront of artificial intelligence, data
            engineering, quantum computing, cyber threats, risk management, sustainable
            agriculture, healthcare, and biomedical computing.
          </p>
        </div>

        {/* Known for Excellence - Stats Component */}
        <StatsComponent stats={symposiumStats} />

        {/* Location Information */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Event Details
          </h2>
          <div className="flex flex-col md:flex-row md:items-center mb-6">
            <div className="flex items-start md:w-1/2">
              <div className="p-2 rounded-full mr-3" style={{ backgroundColor: '#f8f3f3' }}>
                <svg 
                  className="h-6 w-6 mx-auto" 
                  style={{ color: '#C53030' }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                  />
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Location</h3>
                <p className="text-gray-600">
                  USD Sioux Falls <br /> Avera Hall <br /> 4801 N. Career Ave. <br /> Sioux Falls, SD 57107 
                </p>
                <p className="text-gray-600">
                  <strong>OR</strong> <br /> Zoom (link will be provided through
                  registration)
                </p>
              </div>
            </div>

            <div className="flex items-start md:w-1/2 mt-4 md:mt-0">
              <div className="p-2 rounded-full mr-3" style={{ backgroundColor: '#f8f3f3' }}>
                <svg 
                  className="h-6 w-6 mx-auto" 
                  style={{ color: '#C53030' }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Date and time</h3>
                <p className="text-gray-600">
                  June 26 - 27, {new Date().getFullYear()}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <RegistrationInfo />

        {/* Featured Speakers */}
        <Speakers />

        {/* Conference Schedule */}
        <ConferenceSchedule />

        {/* Committee Members */}
        <CommitteeMembers />

        {/* Sponsors Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            <svg 
              className="inline-block mr-2 h-6 w-6" 
              style={{ color: '#C53030' }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" 
              />
            </svg>
            Our Sponsors
          </h2>

          {/* Sponsors Tab Navigation */}
          <div className="flex border-b mb-6">
            <button
              className={`py-2 px-4 font-medium ${
                activeTab === "current"
                  ? "border-b-2 text-white"
                  : "text-gray-600"
              }`}
              style={{ 
                borderColor: activeTab === "current" ? '#C53030' : 'transparent',
                color: activeTab === "current" ? '#C53030' : ''
              }}
              onClick={() => setActiveTab("current")}
            >
              Current Sponsors
            </button>
            <button
              className={`py-2 px-4 font-medium ${
                activeTab === "become"
                  ? "border-b-2 text-white"
                  : "text-gray-600"
              }`}
              style={{ 
                borderColor: activeTab === "become" ? '#C53030' : 'transparent',
                color: activeTab === "become" ? '#C53030' : ''
              }}
              onClick={() => setActiveTab("become")}
            >
              Become a Sponsor
            </button>
          </div>

          {/* Current Sponsors Content */}
          {activeTab === "current" && (
            <div>
              <p className="text-gray-600 mb-6">
                We&apos;re grateful to the following organizations for their
                support of the AI Symposium {new Date().getFullYear()}. Their
                partnership enables us to provide world-class content and
                experiences for our attendees.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-6">
                {/* Bronze Sponsor */}
                <div className="rounded-lg overflow-hidden shadow bg-white flex flex-col w-[200px]">
                  <div className="py-2 px-3 font-semibold text-white bg-yellow-700 text-center text-sm">
                    Bronze Sponsors
                  </div>
                  <div className="bg-gray-50 p-2 flex items-center justify-center h-24">
                    <img 
                      src="/images/sponsor/Area.svg" 
                      alt="Area Direct Companies" 
                      className="max-h-12 object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        ((e.target as HTMLImageElement).parentElement?.querySelector('.fallback') as HTMLElement).style.display = 'block';
                      }}
                    />
                    <span className="text-gray-500 fallback" style={{ display: 'none' }}>Area Direct Companies</span>
                  </div>
                </div>

                {/* Silver Sponsors */}
                <div className="rounded-lg overflow-hidden shadow bg-white flex flex-col w-[240px]">
                  <div className="py-2 px-3 font-semibold text-white bg-gray-400 text-center text-sm">
                    Silver Sponsors
                  </div>
                  <div className="bg-gray-50 p-2 flex justify-around items-center h-24">
                    <div className="flex items-center">
                      <img 
                        src="/images/sponsor/Sterling.svg" 
                        alt="Sterling" 
                        className="max-h-12 object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                          ((e.target as HTMLImageElement).parentElement?.querySelector('.fallback') as HTMLElement).style.display = 'block';
                        }}
                      />
                      <span className="text-gray-500 fallback" style={{ display: 'none' }}>Sterling</span>
                    </div>
                    <div className="flex items-center">
                      <img 
                        src="/images/sponsor/ieee_usa.svg" 
                        alt="IEEE USA" 
                        className="max-h-12 object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                          ((e.target as HTMLImageElement).parentElement?.querySelector('.fallback') as HTMLElement).style.display = 'block';
                        }}
                      />
                      <span className="text-gray-500 fallback" style={{ display: 'none' }}>IEEE USA</span>
                    </div>
                  </div>
                </div>

                {/* Gold Sponsor */}
                <div className="rounded-lg overflow-hidden shadow bg-white flex flex-col w-[200px]">
                  <div className="py-2 px-3 font-semibold text-white bg-yellow-500 text-center text-sm">
                    Gold Sponsors
                  </div>
                  <div className="bg-gray-50 p-2 flex items-center justify-center h-24">
                    <img 
                      src="/images/sponsor/dakota.svg" 
                      alt="Dakota" 
                      className="max-h-12 object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        ((e.target as HTMLImageElement).parentElement?.querySelector('.fallback') as HTMLElement).style.display = 'block';
                      }}
                    />
                    <span className="text-gray-500 fallback" style={{ display: 'none' }}>Dakota</span>
                  </div>
                </div>

                {/* Partners */}
                <div className="rounded-lg overflow-hidden shadow bg-white flex flex-col w-[260px]">
                  <div className="py-2 px-3 font-semibold text-white bg-gray-700 text-center text-sm">
                    Partners
                  </div>
                  <div className="bg-gray-50 px-2 py-1 flex items-center justify-center gap-2 h-24">
                    <div className="flex items-center">
                      <img 
                        src="/images/sponsor/IEEE.svg" 
                        alt="IEEE" 
                        className="h-10 object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                          ((e.target as HTMLImageElement).parentElement?.querySelector('.fallback') as HTMLElement).style.display = 'block';
                        }}
                      />
                      <span className="text-gray-500 fallback text-xs" style={{ display: 'none' }}>IEEE</span>
                    </div>
                    <div className="flex items-center">
                      <img 
                        src="/images/sponsor/logo.svg" 
                        alt="USD Logo" 
                        className="h-10 object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                          ((e.target as HTMLImageElement).parentElement?.querySelector('.fallback') as HTMLElement).style.display = 'block';
                        }}
                      />
                      <span className="text-gray-500 fallback text-xs" style={{ display: 'none' }}>USD</span>
                    </div>
                    <div className="flex items-center">
                      <img 
                        src="/images/sponsor/SD-BCC.svg" 
                        alt="SD BCC" 
                        className="h-10 object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                          ((e.target as HTMLImageElement).parentElement?.querySelector('.fallback') as HTMLElement).style.display = 'block';
                        }}
                      />
                      <span className="text-gray-500 fallback text-xs" style={{ display: 'none' }}>SD-BCC</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Become a Sponsor Content */}
          {activeTab === "become" && (
            <div>
              <div className="p-4 rounded-lg mb-6" style={{ backgroundColor: '#f8f3f3' }}>
                <div className="flex items-start">
                  <span className="h-6 w-6 mr-3 mt-1" style={{ color: '#C53030' }}>💼</span>
                  <div>
                    <h3 className="font-medium text-gray-800">
                      Why Sponsor the AI Symposium?
                    </h3>
                    <p className="text-gray-600">
                      Join us as a sponsor and position your organization at the
                      forefront of AI innovation. Gain visibility with academia,
                      industry leaders, and government officials while
                      demonstrating your commitment to advancing artificial
                      intelligence research and applications.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Sponsorship Opportunities
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {sponsorshipTiers.map((tier, index) => (
                  <div
                    key={index}
                    className="border rounded-lg overflow-hidden"
                  >
                    <div
                      className={`
                      p-4 font-semibold text-white
                      ${
                        tier.tier === "Platinum"
                          ? "bg-gray-700"
                          : tier.tier === "Gold"
                          ? "bg-yellow-500"
                          : tier.tier === "Silver"
                          ? "bg-gray-400"
                          : "bg-yellow-700"
                      }`}
                    >
                      {tier.tier} Sponsorship - {tier.cost}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  💼 Ready to Sponsor?
                </h3>
                <p className="text-gray-600 mb-4">
                  For more information about sponsorship opportunities or to become a sponsor, please contact our sponsorship team:
                </p>
                <div className="space-y-2">
                  <p className="flex items-center text-gray-700">
                    Email: <span className="ml-2">rodrigue.rizk@usd.edu and kc.santosh@usd.edu</span>
                  </p>
                  <p className="flex items-center text-gray-700">
                    Phone: <span className="ml-2">(605) 658-6841</span>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Past Events */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Past Events
          </h2>
          <p className="text-gray-700 mb-4">
            Learn more about our past Artificial Intelligence Symposiums.
          </p>

          <div className="space-y-2">
            <a
              target="_blank"
              href="https://www.usd.edu/Academics/Colleges-and-Schools/college-of-arts-sciences/computer-science/Artificial-Intelligence-Symposium"
              className="block py-2 px-4 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
              rel="noopener noreferrer"
            >
              <div className="flex items-center text-gray-800 font-medium">
                → AI Symposium 2024
              </div>
            </a>
            <a
              target="_blank"
              href="https://www.usd.edu/academics/colleges-and-schools/college-of-arts-sciences/south-dakotan-arts-and-sciences/usd-to-host-third-annual-ai-symposium"
              className="block py-2 px-4 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
              rel="noopener noreferrer"
            >
              <div className="flex items-center text-gray-800 font-medium">
                → AI Symposium 2023
              </div>
            </a>
            <a
              target="_blank"
              href="https://www.usd.edu/academics/colleges-and-schools/college-of-arts-sciences/south-dakotan-arts-and-sciences/usd-to-host-artificial-intelligence-symposium-march-22"
              className="block py-2 px-4 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
              rel="noopener noreferrer"
            >
              <div className="flex items-center text-gray-800 font-medium">
                → AI Symposium 2022
              </div>
            </a>
            <a
              target="_blank"
              href="https://www.usd.edu/the-south-dakotan/usd-to-host-first-ai-symposium-march-16-18"
              className="block py-2 px-4 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
              rel="noopener noreferrer"
            >
              <div className="flex items-center text-gray-800 font-medium">
                → AI Symposium 2021
              </div>
            </a>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Attend</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <div className="p-2 rounded-full mr-3" style={{ backgroundColor: '#f8f3f3' }}>
                <span className="h-6 w-6" style={{ color: '#C53030' }}>✅</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Collaborate</h3>
                <p className="text-gray-600">
                  Work with experts to brainstorm solutions in healthcare,
                  cybersecurity, quantum computing, agriculture and risk
                  management.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="p-2 rounded-full mr-3" style={{ backgroundColor: '#f8f3f3' }}>
                <span className="h-6 w-6" style={{ color: '#C53030' }}>🎓</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Learn</h3>
                <p className="text-gray-600">
                  Gain insights from established AI professionals through
                  engaging symposium sessions.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="p-2 rounded-full mr-3" style={{ backgroundColor: '#f8f3f3' }}>
                <svg 
                  className="h-6 w-6" 
                  style={{ color: '#C53030' }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" 
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Connect</h3>
                <p className="text-gray-600">
                  Build valuable connections with like-minded individuals both
                  in-person and virtually.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="p-2 rounded-full mr-3" style={{ backgroundColor: '#f8f3f3' }}>
                <svg 
                  className="h-6 w-6" 
                  style={{ color: '#C53030' }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Discover</h3>
                <p className="text-gray-600">
                  Learn about the latest advancements in AI and how they can
                  impact your field.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Go to Top Button */}
        {showGoToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
            style={{ backgroundColor: '#C53030' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#A02727'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#C53030'}
            aria-label="Go to top"
          >
            ↑
          </button>
        )}
      </div>
    </div>
  );
};

export default Initiatives;
