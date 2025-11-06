// cSpell: disable

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from '../components/Footer';
import AnimatedAIBanner from '../components/AnimatedAIBanner';
import StatsComponent from '../components/StatsComponent';
import RegistrationInfo from '../components/RegistrationInfo';
import ConferenceSchedule from '../components/ConferenceSchedule';
import CommitteeMembers from '../components/CommitteeMembers';
import Speakers from '../components/Speakers';

const SpecificYearSymposium: React.FC = () => {
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
    { number: 300, label: "Expected Attendees", icon: "👥" },
    { number: 50, label: "Expert Speakers", icon: "🎤" },
    { number: 2, label: "Conference Days", icon: "📅" },
    { number: 25, label: "Industry Partners", icon: "🤝" }
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
      }}
    >
      <div className="mx-auto px-4 sm:px-6 py-6 max-w-full sm:max-w-3xl md:max-w-5xl lg:max-w-7xl xl:max-w-7xl">
        {/* Back to Homepage */}
        <Link to="/" className="flex items-center text-red-500 font-bold gap-2 mb-4">
          ← Back to Homepage
        </Link>

        {/* Symposium Navbar */}
        <div className="flex justify-center py-4 px-6 bg-white mb-8 rounded-lg">
          <div className="text-center">
            <h1 className="text-3xl sm:text-5xl font-bold text-red-700 leading-tight" style={{ fontFamily: 'Yanone Kaffeesatz, sans-serif' }}>
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
          <div className="border-l-4 border-red-500 pl-4 mb-6">
            <h1 className="text-3xl md:text-4xl text-red-700 font-bold" style={{ fontFamily: 'Yanone Kaffeesatz, sans-serif' }}>
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
          <div className="border-l-4 border-red-500 pl-4 mt-8 mb-6">
            <h1 className="text-3xl md:text-4xl text-red-700 font-bold" style={{ fontFamily: 'Yanone Kaffeesatz, sans-serif' }}>
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
              <div className="bg-red-100 p-2 rounded-full mr-3">
                <span className="h-6 w-6 mx-auto text-red-500">📍</span>
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
              <div className="bg-red-100 p-2 rounded-full mr-3">
                <span className="h-6 w-6 mx-auto text-red-500">📅</span>
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
            <span className="inline-block mr-2 text-red-500">🏆</span>
            Our Sponsors
          </h2>

          {/* Sponsors Tab Navigation */}
          <div className="flex border-b mb-6">
            <button
              className={`py-2 px-4 font-medium ${
                activeTab === "current"
                  ? "border-b-2 border-red-500 text-red-600"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("current")}
            >
              Current Sponsors
            </button>
            <button
              className={`py-2 px-4 font-medium ${
                activeTab === "become"
                  ? "border-b-2 border-red-500 text-red-600"
                  : "text-gray-600"
              }`}
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
              <div className="bg-red-50 p-4 rounded-lg mb-6">
                <div className="flex items-start">
                  <span className="text-red-500 h-6 w-6 mr-3 mt-1">💼</span>
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
                    📧 <span className="ml-2">rodrigue.rizk@usd.edu and kc.santosh@usd.edu</span>
                  </p>
                  <p className="flex items-center text-gray-700">
                    📞 <span className="ml-2">(605) 658-6841</span>
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
              <div className="bg-red-100 p-2 rounded-full mr-3">
                <span className="text-red-500 h-6 w-6">✅</span>
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
              <div className="bg-red-100 p-2 rounded-full mr-3">
                <span className="text-red-500 h-6 w-6">🎓</span>
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
              <div className="bg-red-100 p-2 rounded-full mr-3">
                <span className="text-red-500 h-6 w-6">👥</span>
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
              <div className="bg-red-100 p-2 rounded-full mr-3">
                <span className="text-red-500 h-6 w-6">🔍</span>
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
            className="fixed bottom-8 right-8 bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
            aria-label="Go to top"
          >
            ↑
          </button>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default SpecificYearSymposium;
