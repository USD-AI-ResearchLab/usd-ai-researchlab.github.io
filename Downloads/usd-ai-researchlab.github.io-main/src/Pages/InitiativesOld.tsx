// cSpell: disable

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import AnimatedAIBanner from '../components/AnimatedAIBanner';
import StatsComponent from '../components/StatsComponent';
import RegistrationInfo from '../components/RegistrationInfo';

const Initiatives: React.FC = () => {
  const [showGoToTop, setShowGoToTop] = useState(false);
  const [activeTab, setActiveTab] = useState("current");
  const [isScheduleOpen, setIsScheduleOpen] = useState(true);
  const [activeDay, setActiveDay] = useState("day1");

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

  const dates = {
    day1: "Thu 26/06",
    day2: "Fri 27/06",
  };

  const symposiumStats = [
    { number: 300, label: "Expected Attendees", icon: "👥" },
    { number: 50, label: "Expert Speakers", icon: "🎤" },
    { number: 2, label: "Conference Days", icon: "📅" },
    { number: 25, label: "Industry Partners", icon: "🤝" }
  ];

  const scheduleData = {
    day1: [
      { time: "8:30 AM - 9:00 AM", title: "Registration & Breakfast Networking", details: "Check-in, coffee, and light breakfast" },
      { time: "9:00 AM – 9:30 AM", title: "Opening Remarks", details: "Speakers: President (USD), Vice-President (Academic Affairs), Vice-President (Office of Research), Dean (College of Arts & Sciences), Chair (Department of Computer Science)" },
      { time: "9:30 AM - 10:30 AM", title: "Keynote Address", details: "NIST GenAI: Text-to-Text Evaluation - Dr. George Awad, Computer Scientist/Project Leader, NIST" },
      { time: "10:30 AM - 10:45 AM", title: "Break / Networking", details: "-" },
      { time: "10:45 AM - 11:30 AM", title: "Blitz Talk", details: "AI: Now and Zen - Dr. Pete Doucette, Director, EROS Center" },
      { time: "11:30 AM - 12:15 PM", title: "Workshop", details: "Speakers: Joseph J Schueder (Senior Technical Fellow), Joseph Engler (Chief AI Scientist), Chris Reuter (Sr. Principal AI Engineer), Collins Aerospace" },
      { time: "12:15 PM - 2:00 PM", title: "Lunch", details: "Buffet + Networking Lounge" },
      { time: "2:00 PM – 2:45 PM", title: "Workshop", details: "AI in the Workplace: Productivity & Creativity – Navigating the New Era of Work with Artificial Intelligence - Gopi Challagolla, Microsoft" },
      {
        time: "2:45 PM - 4:00 PM",
        title: "Panel: AI and Workforce Development in South Dakota",
        details: "Panelists: Kinchel C. Doerner (SD EPSCoR), Carson Merkwan (Direct Companies), Joseph Engler (Collins Aerospace), Eric Freer (Sterling), Dan Klosterman (Edge Team), Rajesh Kavasseri (SDSU), David Zeng (DSU); Moderator: Jose Lira (Vermillion Unplugged)",
      },
      { time: "4:00 PM - 5:00 PM", title: "Evening Reception", details: "Light hors d'oeuvres, social hour, and sponsor booths" },
    ],
    day2: [
      { time: "8:30 AM - 9:00 AM", title: "Registration & Breakfast Networking", details: "Check-in, coffee, and light breakfast" },
      { time: "9:00 AM – 9:30 AM", title: "Opening Remarks", details: "Welcome session with Senator Round's Office, USD and SDBCC leadership, and SDBCC program overview" },
      {
        time: "9:30 AM - 10:30 AM",
        title: "Keynote Address",
        details: "Computational Systems Modeling of Host Immune Response to Pathogen Infection and Vaccines - Dr. Douglas Lauffenburger, MIT",
      },
      { time: "10:30 AM - 10:45 AM", title: "Break / Networking", details: "-" },
      { time: "10:45 AM - 11:15 AM", title: "Blitz Talk I", details: "AI methods to uncover cell identity genes - Dr. Kaifu Chen, Harvard Med School/Boston Children's Hospital" },
      { time: "11:15 AM - 11:45 AM", title: "Blitz Talk II", details: "Accelerated and AI-Boosted Molecular Simulations and Drug Discovery - Dr. Yinglong Miao, UNC Chapel Hill" },
      { time: "11:45 AM - 12:15 PM", title: "Blitz Talk III", details: "TRECVID: Video Understanding Evaluation at NIST - Dr. George Awad, NIST" },
      { time: "12:15 PM - 2:00 PM", title: "Roundtable Lunch Discussion", details: "With Speakers" },
      {
        time: "2:00 PM - 4:00 PM",
        title: "Panel Discussion: Biomedical Computation and AI",
        details: "Panelists: Kara McCormick (SD BioTech), Sujit Sakpal (Avera), KC Santosh (USD/SDBCC), William Chen (USD/SDBCC), Jeffrey S McGough (SDSMT/SDBCC), Gregory Bertsch (University of South Dakota); Moderator: Jose Lira (Vermillion Unplugged)",
      },
    ],
  };

  const speakerList = [
    "George Awad, Computer Scientist/Project Leader, National Institute of Standards and Technology (NIST)",
    "Pete Doucette, Director, EROS Center",
    "Joseph J. Schueder, Senior Technical Fellow, Collins Aerospace",
    "Joseph Engler, Chief AI Scientist, Collins Aerospace",
    "Chris Reuter, Sr. Principal AI Engineer, Collins Aerospace",
    "Gopi Challagolla, Software Engineer, Microsoft",
    "Kinchel C. Doerner, Director, SD EPSCoR",
    "Carson Merkwan, Director of Business Development, Direct Companies",
    "Eric Freer, Representative, Sterling",
    "Dan Klosterman, Representative, Edge Team",
    "Rajesh Kavasseri, South Dakota State University (SDSU)",
    "David Zeng, Dakota State University (DSU)",
    "Douglas Lauffenburger, Full Professor and Founding Chair, Dept of Biological Engineering, MIT",
    "Kaifu Chen, Associate Professor, Harvard Med School / Boston Children's Hospital",
    "Yinglong Miao, Associate Professor, University of North Carolina Chapel Hill",
    "Kara McCormick, Executive Director, South Dakota Biotech",
    "Sujit Sakpal, Avera",
    "KC Santosh, University of South Dakota / SDBCC",
    "William Chen, University of South Dakota / SDBCC",
    "Jeffrey S. McGough, South Dakota School of Mines and Technology / SDBCC",
    "Gregory Bertsch, University of South Dakota"
  ];

  const committeeData = {
    "Organizing Committee": [
      "KC Santosh, Chair & Professor, University of South Dakota (Founding Chair, AI Symposium & Co-Chair, SDBCC)",
      "William CW Chen, Assist. Professor, University of South Dakota (Chair, SDBCC)",
      "Jeffrey McGough, Head & Professor, South Dakota School of Mines (Co-Chair, SDBCC)",
      "Rodrigue Rizk, Assist. Professor/Grad Coord, University of South Dakota (Co-Chair, AI Symposium)",
      "Robert Burke, Conference Committee Chair, IEEE Region 4"
    ],
    "Symposium Secretary": [
      "Rodrigue Rizk, University of South Dakota, USA"
    ],
    "Publicity Committee": [
      "Isaiah Cohen, University of South Dakota, USA",
      "Rodrigue Rizk, University of South Dakota, USA",
    ],
    "Technical Committee": [
      "Sunil Aryal, Deakin University, AUS",
      "Ameni Boumaiza, Hamad Bin Khalifa University, Qatar",
      "Debasmita Ghosh Roy, Banasthali Vidyapith, India",
      "Priti Rai, University of Delhi, India"
    ],
    "Logistics & Operations": [
      "Ryan Oines, Chief Operating Officer, USD Discovery District",
      "Marc-Antoine Niamba, Biotech Development, USD Discovery District",
      "Laura Wiemers, Management Analyst, University of South Dakota",
      "Cassie Stolpe, Administrative Assistant, University of South Dakota",
      "Kirby Fuglsby, Technology Transfer Officer, University of South Dakota",
      "Hanna DeLange, Public Relations & Content Strategist, University of South Dakota",
      "Alissa Matt, Assist VP for Marketing & University Relations, University of South Dakota"
    ],
    "Advisory Board Members": [
      "Sheila Gestring, President, University of South Dakota",
      "Jay Perry, Vice President, University of South Dakota – Sioux Falls",
      "Dan Engebretson, Vice President, Research & Sponsored Programs, University of South Dakota",
      "Kurt Hackemer, Vice President for Academic Affairs & Provost, University of South Dakota",
      "John Dudley, Dean, College of Arts & Science, University of South Dakota",
      "Tim Ridgway, Vice President of Health Affairs and Dean of the Sanford School of Medicine, University of South Dakota",
      "William Mayhan, Dean, Biomedical Sciences, University of South Dakota"
    ],
  };

  const stats = [
    { value: 500, suffix: "+", label: "Annual Attendees", icon: "👥" },
    { value: 35, suffix: "+", label: "Expert Speakers", icon: "🏆" },
    { value: 7, suffix: "", label: "Years of Excellence", icon: "📅" },
    { value: 12, suffix: "+", label: "Partner Organizations", icon: "🏢" },
  ];

  const sponsorshipTiers = [
    { tier: "Platinum", cost: "$3,000" },
    { tier: "Gold", cost: "$2,000" },
    { tier: "Silver", cost: "$1,000" },
    { tier: "Bronze", cost: "$500" },
  ];

  const whyAttend = [
    {
      title: "Collaborate",
      description: "Work with experts to brainstorm solutions in healthcare, cybersecurity, quantum computing, agriculture and risk management.",
      icon: "🤝"
    },
    {
      title: "Learn",
      description: "Gain insights from established AI professionals through engaging symposium sessions.",
      icon: "🎓"
    },
    {
      title: "Connect",
      description: "Build valuable connections with like-minded individuals both in-person and virtually.",
      icon: "👥"
    },
    {
      title: "Discover",
      description: "Learn about the latest advancements in AI and how they can impact your field.",
      icon: "❓"
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      <motion.div 
        className="container mx-auto px-4 py-8 max-w-7xl"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        {/* Back to Homepage */}
        <motion.div variants={fadeInUp}>
          <Link to="/" className="flex items-center text-red-500 font-bold gap-2 mb-4 hover:text-red-600 transition-colors">
            ← Back to Homepage
          </Link>
        </motion.div>

        {/* Symposium Navbar */}
        <motion.div className="text-center py-4 px-6 bg-white mb-8" variants={fadeInUp}>
          <h1 className="text-3xl sm:text-5xl font-bold text-red-700 leading-tight">
            7<sup className="text-xl align-top">th</sup> Artificial Intelligence Symposium*
          </h1>
          <p className="text-lg sm:text-xl text-gray-800 mt-1 font-semibold">
            June 26–27, 2025
          </p>
          <p className="text-sm sm:text-base text-gray-500 italic mt-1">
            * Formerly known as the Data Harnessing Symposium (held in 2018 and 2019)
          </p>
        </motion.div>

        {/* Animated AI Symposium Banner */}
        <motion.div variants={fadeInUp} className="mb-8">
          <AnimatedAIBanner />
        </motion.div>

        {/* Statistics Section */}
        <motion.div className="bg-white rounded-lg shadow-md p-6 mb-8" variants={fadeInUp}>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Symposium at a Glance</h2>
          <StatsComponent stats={symposiumStats} />
        </motion.div>

        {/* Registration Information */}
        <motion.div className="mb-8" variants={fadeInUp}>
          <RegistrationInfo />
        </motion.div>

        {/* Combined "Download" + "Welcome" Card */}
        <motion.div className="bg-white rounded-lg shadow-md p-6 mb-8" variants={fadeInUp}>
          {/* Download heading */}
          <div className="border-l-4 border-red-500 pl-4 mb-6">
            <h1 className="text-3xl md:text-4xl text-red-700 font-bold">
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
              className="font-bold underline text-red-600 hover:text-red-800"
            >
              https://forms.office.com/r/deink2VGxh
            </a>
            . Once submitted, your certificate will be sent to you automatically via email.
          </p>

          {/* Welcome heading */}
          <div className="border-l-4 border-red-500 pl-4 mt-8 mb-6">
            <h1 className="text-3xl md:text-4xl text-red-700 font-bold">
              Welcome to 7th Artificial Intelligence Symposium 2025
            </h1>
          </div>

          <p className="text-lg leading-relaxed text-justify mb-4">
            Join us for the University of South Dakota's 7th Annual{" "}
            <span className="font-bold">Artificial Intelligence Symposium</span>
            —formerly known as the Data Harnessing Symposium (2018–2019)—sponsored by
            IEEE and held in conjunction with the inaugural{" "}
            <a
              href="https://sd-bcc.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline text-red-600 hover:text-red-800"
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
        </motion.div>

        {/* Stats Component */}
        <motion.div className="bg-white rounded-lg shadow-md p-6 mb-8" variants={fadeInUp}>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Known for Excellence</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{stat.icon}</span>
                </div>
                <div className="text-3xl font-bold text-red-600 mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Location Information */}
        <motion.div className="bg-white rounded-lg shadow-md p-6 mb-8" variants={fadeInUp}>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Event Details</h2>
          <div className="flex flex-col md:flex-row md:items-center mb-6">
            <div className="flex items-start md:w-1/2">
              <div className="bg-red-100 p-2 rounded-full mr-3">
                📍
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Location</h3>
                <p className="text-gray-600">
                  USD Sioux Falls <br /> Avera Hall <br /> 4801 N. Career Ave. <br /> Sioux Falls, SD 57107
                </p>
                <p className="text-gray-600">
                  <strong>OR</strong> <br /> Zoom (link will be provided through registration)
                </p>
              </div>
            </div>

            <div className="flex items-start md:w-1/2 mt-4 md:mt-0">
              <div className="bg-red-100 p-2 rounded-full mr-3">
                📅
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Date and time</h3>
                <p className="text-gray-600">June 26 - 27, 2025</p>
              </div>
            </div>
          </div>

          {/* Registration Info */}
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-800 mb-2">📝 Registration Required</h3>
            <p className="text-gray-600 mb-4">
              This event is free, but registration is required to attend. Sign up, attend, and receive a certificate of participation immediately after the event!
            </p>
            <a
              href="https://events.vtools.ieee.org/event/register/487885"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors font-medium"
            >
              Register Now
            </a>
          </div>
        </motion.div>

        {/* Speakers Section */}
        <motion.div className="bg-white rounded-lg shadow-md p-6 mb-8" variants={fadeInUp}>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">🎤 Speakers</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {speakerList.map((speaker, index) => (
              <div key={index} className="flex items-start p-3 bg-gray-50 rounded-lg">
                <div className="bg-red-100 w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 text-sm">{speaker}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <p className="text-gray-500 italic">… more coming soon.</p>
          </div>
        </motion.div>

        {/* Sponsors Section */}
        <motion.div className="bg-white rounded-lg shadow-md p-6 mb-8" variants={fadeInUp}>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            🏆 Our Sponsors
          </h2>

          {/* Sponsors Tab Navigation */}
          <div className="flex border-b mb-6">
            <button
              className={`py-2 px-4 font-medium ${
                activeTab === "current"
                  ? "border-b-2 border-red-500 text-red-600"
                  : "text-gray-600 hover:text-red-600"
              }`}
              onClick={() => setActiveTab("current")}
            >
              Current Sponsors
            </button>
            <button
              className={`py-2 px-4 font-medium ${
                activeTab === "become"
                  ? "border-b-2 border-red-500 text-red-600"
                  : "text-gray-600 hover:text-red-600"
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
                We're grateful to the following organizations for their
                support of the AI Symposium 2025. Their partnership enables us to provide world-class content and
                experiences for our attendees.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-6">
                {/* Bronze Sponsor */}
                <div className="rounded-lg overflow-hidden shadow bg-white flex flex-col w-[200px]">
                  <div className="py-2 px-3 font-semibold text-white bg-yellow-700 text-center text-sm">
                    Bronze Sponsors
                  </div>
                  <div className="bg-gray-50 p-2 flex items-center justify-center h-24">
                    <span className="text-gray-500 text-sm">Avera Health</span>
                  </div>
                </div>

                {/* Silver Sponsors */}
                <div className="rounded-lg overflow-hidden shadow bg-white flex flex-col w-[240px]">
                  <div className="py-2 px-3 font-semibold text-white bg-gray-400 text-center text-sm">
                    Silver Sponsors
                  </div>
                  <div className="bg-gray-50 p-2 flex justify-around items-center h-24">
                    <span className="text-gray-500 text-sm">Sterling Technology</span>
                    <span className="text-gray-500 text-sm">IEEE USA</span>
                  </div>
                </div>

                {/* Gold Sponsor */}
                <div className="rounded-lg overflow-hidden shadow bg-white flex flex-col w-[200px]">
                  <div className="py-2 px-3 font-semibold text-white bg-yellow-500 text-center text-sm">
                    Gold Sponsors
                  </div>
                  <div className="bg-gray-50 p-2 flex items-center justify-center h-24">
                    <span className="text-gray-500 text-sm">Dakota Technologies</span>
                  </div>
                </div>

                {/* Partners */}
                <div className="rounded-lg overflow-hidden shadow bg-white flex flex-col w-[260px]">
                  <div className="py-2 px-3 font-semibold text-white bg-gray-700 text-center text-sm">
                    Partners
                  </div>
                  <div className="bg-gray-50 px-2 py-1 flex items-center justify-center gap-2 h-24">
                    <span className="text-gray-500 text-sm">IEEE</span>
                    <span className="text-gray-500 text-sm">SDBCC</span>
                    <span className="text-gray-500 text-sm">USD</span>
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
                  <span className="text-red-500 text-xl mr-3 mt-1">💰</span>
                  <div>
                    <h3 className="font-medium text-gray-800">Why Sponsor the AI Symposium?</h3>
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

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Sponsorship Opportunities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {sponsorshipTiers.map((tier, index) => (
                  <div key={index} className="border rounded-lg overflow-hidden">
                    <div
                      className={`p-4 font-semibold text-white ${
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
        </motion.div>

        {/* Conference Schedule */}
        <motion.div className="bg-white rounded-lg shadow-md p-6 mb-8" variants={fadeInUp}>
          <button
            onClick={() => setIsScheduleOpen(!isScheduleOpen)}
            className="w-full flex justify-between items-center text-left"
          >
            <h2 className="text-2xl font-semibold text-gray-800">Conference Schedule</h2>
            <span className="text-gray-600">
              {!isScheduleOpen ? "▼" : "▲"}
            </span>
          </button>

          {isScheduleOpen && (
            <div className="mt-6">
              <div className="flex space-x-4 mb-4">
                {Object.entries(dates).map(([day, date]) => (
                  <button
                    key={day}
                    onClick={() => setActiveDay(day)}
                    className={`px-4 py-2 rounded-md font-medium ${
                      activeDay === day
                        ? "bg-red-600 text-white"
                        : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                    }`}
                  >
                    {date}
                  </button>
                ))}
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-200">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold">Time</th>
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold">Session</th>
                      <th className="border border-gray-200 px-4 py-2 text-left font-semibold">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {scheduleData[activeDay as keyof typeof scheduleData].map((item, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="border border-gray-200 px-4 py-2 align-top whitespace-nowrap text-sm">
                          {item.time}
                        </td>
                        <td className="border border-gray-200 px-4 py-2 align-top font-medium">
                          {item.title}
                        </td>
                        <td className="border border-gray-200 px-4 py-2 align-top text-sm text-gray-600">
                          {item.details || "-"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 text-center">
                <button
                  className="text-red-600 font-medium opacity-50 cursor-not-allowed"
                  disabled
                  title="PDF schedule will be available soon"
                >
                  📥 Download Full Schedule (PDF) - Coming Soon
                </button>
              </div>
            </div>
          )}
        </motion.div>

        {/* Committee Members */}
        <motion.div className="bg-white rounded-lg shadow-md p-6 mb-8" variants={fadeInUp}>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Committee Members</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(committeeData).map(([committee, members]) => (
              <div key={committee} className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-red-600 mb-3">{committee}</h3>
                <ul className="space-y-2">
                  {members.map((member, index) => (
                    <li key={index} className="text-sm text-gray-700 flex items-start">
                      <span className="text-red-400 mr-2 mt-1">•</span>
                      <span>{member}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Past Events */}
        <motion.div className="bg-white rounded-lg shadow-md p-6 mb-8" variants={fadeInUp}>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Past Events</h2>
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
        </motion.div>

        {/* Key Benefits */}
        <motion.div className="bg-white rounded-lg shadow-md p-6 mb-8" variants={fadeInUp}>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Attend</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {whyAttend.map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-red-100 p-2 rounded-full mr-3">
                  <span className="text-red-500 text-xl">{item.icon}</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

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

      </motion.div>
      <Footer />
    </div>
  );
};

export default Initiatives;
