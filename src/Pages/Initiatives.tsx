import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

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

  const speakers = [
    { name: "George Awad", role: "Computer Scientist/Project Leader, National Institute of Standards and Technology (NIST)" },
    { name: "Pete Doucette", role: "Director, EROS Center" },
    { name: "Joseph J. Schueder", role: "Senior Technical Fellow, Collins Aerospace" },
    { name: "Joseph Engler", role: "Chief AI Scientist, Collins Aerospace" },
    { name: "Chris Reuter", role: "Sr. Principal AI Engineer, Collins Aerospace" },
    { name: "Gopi Challagolla", role: "Software Engineer, Microsoft" },
    { name: "Kinchel C. Doerner", role: "Director, SD EPSCoR" },
    { name: "Carson Merkwan", role: "Director of Business Development, Direct Companies" },
    { name: "Eric Freer", role: "Representative, Sterling" },
    { name: "Dan Klosterman", role: "Representative, Edge Team" },
    { name: "Rajesh Kavasseri", role: "South Dakota State University (SDSU)" },
    { name: "David Zeng", role: "Dakota State University (DSU)" },
    { name: "Douglas Lauffenburger", role: "Full Professor and Founding Chair, Dept of Biological Engineering, MIT" },
    { name: "Kaifu Chen", role: "Associate Professor, Harvard Med School / Boston Children's Hospital" },
    { name: "Yinglong Miao", role: "Associate Professor, University of North Carolina Chapel Hill" },
    { name: "Kara McCormick", role: "Executive Director, South Dakota Biotech" },
    { name: "Sujit Sakpal", role: "Avera" },
    { name: "KC Santosh", role: "University of South Dakota / SDBCC" },
    { name: "William Chen", role: "University of South Dakota / SDBCC" },
    { name: "Jeffrey S. McGough", role: "South Dakota School of Mines and Technology / SDBCC" }
  ];

  const schedule = [
    {
      time: "8:30 AM - 9:00 AM",
      title: "Registration & Breakfast Networking",
      description: "Check-in, coffee, and light breakfast"
    },
    {
      time: "9:00 AM – 9:30 AM",
      title: "Opening Remarks",
      description: "Speakers: President (USD), Vice-President (Academic Affairs), Vice-President (Office of Research), Dean (College of Arts & Sciences), Chair (Department of Computer Science)"
    },
    {
      time: "9:30 AM - 10:30 AM",
      title: "Keynote Address",
      description: "NIST GenAI: Text-to-Text Evaluation - Dr. George Awad, Computer Scientist/Project Leader, NIST"
    },
    {
      time: "10:30 AM - 10:45 AM",
      title: "Break / Networking",
      description: "-"
    },
    {
      time: "10:45 AM - 11:30 AM",
      title: "Blitz Talk",
      description: "AI: Now and Zen - Dr. Pete Doucette, Director, EROS Center"
    },
    {
      time: "11:30 AM - 12:15 PM",
      title: "Workshop",
      description: "Speakers: Joseph J Schueder (Senior Technical Fellow), Joseph Engler (Chief AI Scientist), Chris Reuter (Sr. Principal AI Engineer), Collins Aerospace"
    },
    {
      time: "12:15 PM - 2:00 PM",
      title: "Lunch",
      description: "Buffet + Networking Lounge"
    },
    {
      time: "2:00 PM – 2:45 PM",
      title: "Workshop",
      description: "AI in the Workplace: Productivity & Creativity – Navigating the New Era of Work with Artificial Intelligence - Gopi Challagolla, Microsoft"
    },
    {
      time: "2:45 PM - 4:00 PM",
      title: "Panel: AI and Workforce Development in South Dakota",
      description: "Panelists: Kinchel C. Doerner (SD EPSCoR), Carson Merkwan (Direct Companies), Joseph Engler (Collins Aerospace), Eric Freer (Sterling), Dan Klosterman (Edge Team), Rajesh Kavasseri (SDSU), David Zeng (DSU); Moderator: Jose Lira (Vermillion Unplugged)"
    },
    {
      time: "4:00 PM - 5:00 PM",
      title: "Evening Reception",
      description: "Light hors d'oeuvres, social hour, and sponsor booths"
    }
  ];

  const stats = [
    { number: "7th", label: "Annual Symposium" },
    { number: "50+", label: "Expert Speakers" },
    { number: "2", label: "Days of Excellence" },
    { number: "500+", label: "Expected Attendees" }
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
      icon: "📚"
    },
    {
      title: "Connect",
      description: "Build valuable connections with like-minded individuals both in-person and virtually.",
      icon: "🌐"
    },
    {
      title: "Discover",
      description: "Learn about the latest advancements in AI and how they can impact your field.",
      icon: "🔍"
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <motion.div 
        className="container mx-auto px-4 py-12"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        {/* Hero Section */}
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <h1 className="text-5xl md:text-6xl font-thin mb-4" style={{ color: 'var(--logo-red, #C53030)' }}>
            7th Artificial Intelligence Symposium
          </h1>
          <div className="w-24 h-1 mx-auto mb-6" style={{ backgroundColor: 'var(--logo-red, #C53030)' }}></div>
          <h2 className="text-3xl md:text-4xl font-thin text-gray-800 mb-4">
            June 26–27, 2025
          </h2>
          <p className="text-lg text-gray-600 font-thin mb-8 max-w-4xl mx-auto leading-relaxed">
            Join us for the University of South Dakota's 7th Annual Artificial Intelligence Symposium—formerly known as the Data Harnessing Symposium (2018–2019)—sponsored by IEEE and held in conjunction with the inaugural South Dakota Biomedical Computation Consortium (SDBCC).
          </p>
          <p className="text-lg text-gray-600 font-thin mb-8 max-w-4xl mx-auto leading-relaxed">
            This premier event brings together thought leaders from academia, industry, and government to explore the forefront of artificial intelligence, data engineering, quantum computing, cyber threats, risk management, sustainable agriculture, healthcare, and biomedical computing.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div className="mb-16" variants={fadeInUp}>
          <h2 className="text-3xl font-thin text-center text-gray-800 mb-8">Known for Excellence</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl font-thin mb-2" style={{ color: 'var(--logo-red, #C53030)' }}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-thin">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Event Details */}
        <motion.div className="mb-16" variants={fadeInUp}>
          <h2 className="text-3xl font-thin text-gray-800 mb-8 text-center">Event Details</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-thin mb-4" style={{ color: 'var(--logo-red, #C53030)' }}>📍 Location</h3>
              <div className="text-gray-700 font-thin leading-relaxed">
                <p className="mb-2"><strong>USD Sioux Falls</strong></p>
                <p className="mb-2">Avera Hall</p>
                <p className="mb-2">4801 N. Career Ave.</p>
                <p className="mb-4">Sioux Falls, SD 57107</p>
                <p className="text-sm text-gray-600">OR</p>
                <p className="text-sm text-gray-600">Zoom (link will be provided through registration)</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-thin mb-4" style={{ color: 'var(--logo-red, #C53030)' }}>📅 Date and Time</h3>
              <p className="text-xl font-thin text-gray-700 mb-4">June 26 - 27, 2025</p>
              <h3 className="text-2xl font-thin mb-4" style={{ color: 'var(--logo-red, #C53030)' }}>📝 Registration</h3>
              <p className="text-gray-600 font-thin mb-4">This event is free, but registration is required to attend.</p>
              <a 
                href="https://events.vtools.ieee.org/event/register/487885" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 text-white rounded-md hover:opacity-90 transition-opacity font-thin"
                style={{ backgroundColor: 'var(--logo-red, #C53030)' }}
              >
                Register Now
              </a>
              <p className="text-sm text-gray-600 mt-2">🎓 Sign up, attend, and receive a certificate of participation immediately after the event!</p>
            </div>
          </div>
        </motion.div>

        {/* Speakers Section */}
        <motion.div className="mb-16" variants={fadeInUp}>
          <h2 className="text-3xl font-thin text-gray-800 mb-8 text-center">🎤 Speakers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {speakers.map((speaker, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-thin mb-2" style={{ color: 'var(--logo-red, #C53030)' }}>
                  {speaker.name}
                </h3>
                <p className="text-gray-600 font-thin text-sm">{speaker.role}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600 font-thin text-lg">… more coming soon.</p>
          </div>
        </motion.div>

        {/* Schedule Section */}
        <motion.div className="mb-16" variants={fadeInUp}>
          <h2 className="text-3xl font-thin text-gray-800 mb-8 text-center">Conference Schedule</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b">
                <h3 className="text-xl font-thin" style={{ color: 'var(--logo-red, #C53030)' }}>
                  Thursday, June 26, 2025
                </h3>
              </div>
              <div className="divide-y divide-gray-200">
                {schedule.map((item, index) => (
                  <div key={index} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="text-sm font-thin text-gray-600 md:w-48 flex-shrink-0">
                        {item.time}
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-lg font-thin mb-1" style={{ color: 'var(--logo-red, #C53030)' }}>
                          {item.title}
                        </h4>
                        <p className="text-gray-600 font-thin text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center mt-6">
              <a 
                href="https://www.ai-research-lab.org/resources/AI%20Symposium%20Agenda%20_%20Final.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 text-white rounded-md hover:opacity-90 transition-opacity font-thin"
                style={{ backgroundColor: 'var(--logo-red, #C53030)' }}
              >
                📥 Download Full Schedule (PDF)
              </a>
            </div>
          </div>
        </motion.div>

        {/* Why Attend Section */}
        <motion.div className="mb-16" variants={fadeInUp}>
          <h2 className="text-3xl font-thin text-gray-800 mb-8 text-center">Why Attend</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyAttend.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-thin mb-3" style={{ color: 'var(--logo-red, #C53030)' }}>
                  {item.title}
                </h3>
                <p className="text-gray-600 font-thin text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Committee Members */}
        <motion.div className="mb-16" variants={fadeInUp}>
          <h2 className="text-3xl font-thin text-gray-800 mb-8 text-center">Committee Members</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-thin mb-4" style={{ color: 'var(--logo-red, #C53030)' }}>Organizing Committee</h3>
              <ul className="space-y-2 text-gray-600 font-thin text-sm">
                <li>• KC Santosh, Chair & Professor, University of South Dakota (Founding Chair, AI Symposium & Co-Chair, SDBCC)</li>
                <li>• William CW Chen, Assist. Professor, University of South Dakota (Chair, SDBCC)</li>
                <li>• Jeffrey McGough, Head & Professor, South Dakota School of Mines (Co-Chair, SDBCC)</li>
                <li>• Rodrigue Rizk, Assist. Professor/Grad Coord, University of South Dakota (Co-Chair, AI Symposium)</li>
                <li>• Robert Burke, Conference Committee Chair, IEEE Region 4</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-thin mb-4" style={{ color: 'var(--logo-red, #C53030)' }}>Advisory Board Members</h3>
              <ul className="space-y-2 text-gray-600 font-thin text-sm">
                <li>• Sheila Gestring, President, University of South Dakota</li>
                <li>• Jay Perry, Vice President, University of South Dakota – Sioux Falls</li>
                <li>• Dan Engebretson, Vice President, Research & Sponsored Programs, University of South Dakota</li>
                <li>• Kurt Hackemer, Vice President for Academic Affairs & Provost, University of South Dakota</li>
                <li>• John Dudley, Dean, College of Arts & Science, University of South Dakota</li>
                <li>• Tim Ridgway, Vice President of Health Affairs and Dean of the Sanford School of Medicine, University of South Dakota</li>
                <li>• William Mayhan, Dean, Biomedical Sciences, University of South Dakota</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Past Events */}
        <motion.div className="mb-16 text-center" variants={fadeInUp}>
          <h2 className="text-3xl font-thin text-gray-800 mb-8">Past Events</h2>
          <p className="text-gray-600 font-thin mb-6">Learn more about our past Artificial Intelligence Symposiums.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.usd.edu/Academics/Colleges-and-Schools/college-of-arts-sciences/computer-science/Artificial-Intelligence-Symposium" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white rounded-md shadow hover:shadow-md transition-shadow text-sm font-thin text-gray-700 hover:text-red-600">AI Symposium 2024</a>
            <a href="https://www.usd.edu/academics/colleges-and-schools/college-of-arts-sciences/south-dakotan-arts-and-sciences/usd-to-host-third-annual-ai-symposium" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white rounded-md shadow hover:shadow-md transition-shadow text-sm font-thin text-gray-700 hover:text-red-600">AI Symposium 2023</a>
            <a href="https://www.usd.edu/academics/colleges-and-schools/college-of-arts-sciences/south-dakotan-arts-and-sciences/usd-to-host-artificial-intelligence-symposium-march-22" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white rounded-md shadow hover:shadow-md transition-shadow text-sm font-thin text-gray-700 hover:text-red-600">AI Symposium 2022</a>
            <a href="https://www.usd.edu/the-south-dakotan/usd-to-host-first-ai-symposium-march-16-18" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white rounded-md shadow hover:shadow-md transition-shadow text-sm font-thin text-gray-700 hover:text-red-600">AI Symposium 2021</a>
          </div>
        </motion.div>

        {/* Certificate Information */}
        <motion.div className="bg-white p-8 rounded-lg shadow-md text-center" variants={fadeInUp}>
          <h2 className="text-3xl font-thin text-gray-800 mb-6">Download your certificate of participation</h2>
          <p className="text-gray-600 font-thin mb-6 leading-relaxed">
            Thank you for participating in the event! To receive your Certificate of Participation, please complete the form at the following link. Once submitted, your certificate will be sent to you automatically via email.
          </p>
          <a 
            href="https://forms.office.com/r/deink2VGxh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 text-white rounded-md hover:opacity-90 transition-opacity font-thin"
            style={{ backgroundColor: 'var(--logo-red, #C53030)' }}
          >
            Get Certificate
          </a>
        </motion.div>

      </motion.div>
      <Footer />
    </div>
  );
};

export default Initiatives;
