// cSpell: disable

import React, { useState, useEffect, useMemo, useCallback, useRef } from "react";
import Footer from '../components/Footer';

// Advanced Types and Interfaces
interface Stat {
  number: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

interface ScheduleItem {
  time: string;
  title: string;
  details: string;
  speaker?: string;
  type: 'keynote' | 'workshop' | 'panel' | 'talk' | 'break' | 'networking';
}

interface CommitteeSection {
  [key: string]: Array<{
    name: string;
    title?: string;
    organization?: string;
  }>;
}

interface SponsorTier {
  tier: 'Platinum' | 'Gold' | 'Silver' | 'Bronze' | 'Partners';
  sponsors: Array<{
    name: string;
    logo: string;
    alt: string;
    website?: string;
    description?: string;
  }>;
}

interface Speaker {
  name: string;
  title: string;
  organization: string;
  bio?: string;
  image?: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

// Advanced Custom Hooks
const useScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return { showButton, scrollToTop };
};

const useAnimatedCounter = (target: number, isVisible: boolean, duration: number = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const startCount = 0;

    const updateCount = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(startCount + (target - startCount) * easeOut);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [target, isVisible, duration]);

  return count;
};

const useIntersectionObserver = (
  targetId: string,
  options: IntersectionObserverInit = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      options
    );

    observer.observe(target);
    return () => observer.unobserve(target);
  }, [targetId, options]);

  return isVisible;
};

const useParallaxScroll = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollY;
};

// Advanced Constants with real data
const STATS_DATA: Stat[] = [
  { number: 500, label: "Expected Attendees", suffix: "+" },
  { number: 35, label: "Industry Speakers", suffix: "+" },
  { number: 8, label: "Years of Excellence", suffix: "" },
  { number: 25, label: "Partner Organizations", suffix: "+" }
];

const SPEAKER_DATA: Speaker[] = [
  {
    name: "Dr. George Awad",
    title: "Computer Scientist/Project Leader",
    organization: "National Institute of Standards and Technology (NIST)",
    bio: "Leading expert in AI evaluation and standards development",
    social: { linkedin: "https://linkedin.com/in/george-awad" }
  },
  {
    name: "Dr. Pete Doucette", 
    title: "Director",
    organization: "EROS Center",
    bio: "Pioneering research in Earth observation and AI applications"
  },
  {
    name: "Dr. Matthias Ponfick",
    title: "Professor & Cardiologist", 
    organization: "University Medical Center Schleswig Holstein, Germany",
    bio: "Applied AI for cardiovascular medicine and precision healthcare"
  },
  {
    name: "Gopi Challagolla",
    title: "Software Engineer",
    organization: "Microsoft",
    bio: "AI in workplace productivity and creativity solutions"
  }
];

const SPONSOR_TIERS: SponsorTier[] = [
  elementId: string,
  options: IntersectionObserverInit = { threshold: 0.1, rootMargin: '50px' }
) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      options
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [elementId, options]);

  return isVisible;
};

// Constants
const STATS_DATA: Stat[] = [
  { number: 500, label: "Annual Attendees" },
  { number: 35, label: "Expert Speakers" },
  { number: 7, label: "Years of Excellence" },
  { number: 12, label: "Partner Organizations" }
];

const SPONSOR_TIERS: SponsorTier[] = [
  {
    tier: 'Bronze',
    sponsors: [{ name: 'Direct Companies', logo: '/images/sponsor/Area.png', alt: 'Direct Companies' }]
  },
  {
    tier: 'Silver',
    sponsors: [
      { name: 'Sterling', logo: '/images/sponsor/Sterling.png', alt: 'Sterling' },
      { name: 'IEEE USA', logo: '/images/sponsor/ieee_usa.png', alt: 'IEEE USA' }
    ]
  },
  {
    tier: 'Gold',
    sponsors: [{ name: 'Dakota', logo: '/images/sponsor/dakota.png', alt: 'Dakota' }]
  },
  {
    tier: 'Partners',
    sponsors: [
      { name: 'IEEE', logo: '/images/sponsor/IEEE.png', alt: 'IEEE' },
      { name: 'Partner', logo: '/images/sponsor/logo.png', alt: 'Generic Partner' },
      { name: 'SD BCC', logo: '/images/sponsor/SD-BCC.png', alt: 'SD BCC' }
    ]
  }
];

const AISymposium2025: React.FC = () => {
  const [activeDay, setActiveDay] = useState<"day1" | "day2">("day1");
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    "Organizing Committee": false,
    "Symposium Secretary": false, 
    "Publicity Committee": false,
    "Logistics & Operations": false,
    "Advisory Board Members": false
  });
  const [activeSponsorTab, setActiveSponsorTab] = useState<"current" | "become">("current");

  // Custom hooks
  const { showButton: showGoToTop, scrollToTop } = useScrollToTop();
  const isStatsVisible = useIntersectionObserver('stats-section');

  // Memoized data
  const scheduleData = useMemo(() => ({
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
      { time: "10:30 AM - 10:45 AM", title: "Break / Networking" },
      { time: "10:45 AM - 11:15 AM", title: "Blitz Talk I", details: "AI methods to uncover cell identity genes - Dr. Kaifu Chen, Harvard Med School/Boston Children's Hospital" },
      { time: "11:15 AM - 11:45 AM", title: "Blitz Talk II", details: "AI-powered drug discovery for complex diseases - Dr. Yinglong Miao, University of North Carolina Chapel Hill" },
      { time: "11:45 AM - 12:15 PM", title: "Panel: Healthcare AI Applications", details: "Panelists: Kara McCormick (SD BioTech), Sujit Sakpal (Avera), KC Santosh (USD/SDBCC), William Chen (USD/SDBCC), Jeffrey S McGough (SDSMT/SDBCC), Gregory Bertsch (University of South Dakota); Moderator: Jose Lira (Vermillion Unplugged)" },
    ],
  }), []);

  const committeeData: CommitteeSection = useMemo(() => ({
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
      "Travis Loof, University of South Dakota, USA",
      "William Chen, University of South Dakota, USA",
      "Longwei Wang, University of South Dakota, USA",
      "Dipankar DasGupta, University of Memphis, USA",
      "Yaoi-Chiang, University of Minnesota, USA",
      "Aobo Li, UC San Diego, USA",
      "Kurtis Van Gent, Google, USA",
      "Naveen Rokkam, Mygo Consulting Inc, USA",
      "Hubert Cecotti, California State University, USA",
      "Vishnu Pendyala, San Jose State University, USA",
      "Yashbir Singh, Mayo Clinic – Rochester, USA",
      "Szilard Vajda, Central Washington University, USA",
      "Alice Othmani, Universite de Paris-Est, France",
      "Laurent Wendling, University of Paris, France",
      "Mickael Coustaty, University of La Rochelle, France",
      "Aaisha Makkar, University of Derby, UK",
      "Anas Aboud El Kalam, Cadi Ayyad University, Morocco",
      "AbdelKrim Haqiq, Hassan First University of Settat, Morocco",
      "Jitendra Kumar, NIT Tiruchirappalli, India",
      "Satish K Singh, IIIT Allahabad, India",
      "Surbhi Vijh, Amity University, India",
      "Ravindra Hegadi, Central University of Karnataka, India",
      "Deepika Koundal, UPES, India",
      "D S Guru, University of Mysore, India",
      "Marzieh Khakifirooz, Tecno de Monterrey, Mexico",
      "Md-Rafik Bouguelia, Hamlstad University, Sweden",
      "Antoine Vacavant, Univ Clermont Auvergne, France",
      "Djamila Auoada, University of Luxembourg, Luxembourg",
      "ChakChai So-In, Khon Kaen University, Thailand",
      "Xi-Zhao Wang, ShenZhen University, China",
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
    ]
  }), []);

  const toggleSection = (sectionName: string) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionName]: !prev[sectionName]
    }));
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
    "Jeffrey S. McGough, South Dakota School of Mines and Technology / SDBCC"
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="flex justify-center py-4 px-6 bg-white">
        <div className="text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-red-700 leading-tight">
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

      <section className="w-full">
        <div className="max-w-full mx-auto px-4 py-6 sm:max-w-3xl sm:px-6 md:max-w-5xl lg:max-w-7xl xl:max-w-7xl">
          
          {/* Back to Homepage */}
          <a href="/" className="flex items-center text-red-500 font-bold gap-2 mb-4">
            ← Back to Homepage
          </a>

          {/* Hero Banner */}
          <div className="relative bg-gradient-to-r from-red-600 to-red-800 rounded-lg p-12 mb-8 overflow-hidden">
            {/* Decorative elements matching the screenshot */}
            <div className="absolute inset-0">
              {/* Large circle on the left */}
              <div className="absolute left-8 top-1/2 transform -translate-y-1/2 w-48 h-48 bg-red-500 rounded-full opacity-30"></div>
              
              {/* Small dots scattered around */}
              <div className="absolute top-6 left-1/4 w-3 h-3 bg-white rounded-full opacity-60"></div>
              <div className="absolute top-12 right-1/4 w-2 h-2 bg-white rounded-full opacity-50"></div>
              <div className="absolute bottom-8 left-1/3 w-3 h-3 bg-white rounded-full opacity-70"></div>
              <div className="absolute bottom-16 right-1/3 w-2 h-2 bg-white rounded-full opacity-40"></div>
              <div className="absolute top-1/3 right-1/5 w-3 h-3 bg-white rounded-full opacity-60"></div>
              <div className="absolute top-2/3 left-1/5 w-2 h-2 bg-white rounded-full opacity-50"></div>
              <div className="absolute top-8 left-3/5 w-3 h-3 bg-white rounded-full opacity-65"></div>
              <div className="absolute bottom-12 right-1/6 w-2 h-2 bg-white rounded-full opacity-45"></div>
              
              {/* Network connection lines */}
              <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 800 300">
                <path d="M100,150 L200,100 L300,120 L450,80 L600,110" stroke="white" strokeWidth="1" fill="none"/>
                <path d="M150,200 L280,160 L400,180 L550,140" stroke="white" strokeWidth="1" fill="none"/>
                <path d="M50,100 L180,140 L320,90 L480,130 L650,100" stroke="white" strokeWidth="1" fill="none"/>
                
                {/* Connection nodes */}
                <circle cx="200" cy="100" r="3" fill="white" opacity="0.6"/>
                <circle cx="300" cy="120" r="3" fill="white" opacity="0.6"/>
                <circle cx="450" cy="80" r="3" fill="white" opacity="0.6"/>
                <circle cx="280" cy="160" r="3" fill="white" opacity="0.6"/>
                <circle cx="400" cy="180" r="3" fill="white" opacity="0.6"/>
                <circle cx="180" cy="140" r="3" fill="white" opacity="0.6"/>
                <circle cx="480" cy="130" r="3" fill="white" opacity="0.6"/>
              </svg>

              {/* Rectangular outlines on the right */}
              <div className="absolute right-8 top-1/4 w-32 h-20 border-2 border-white opacity-20 rounded"></div>
              <div className="absolute right-16 bottom-1/4 w-24 h-16 border-2 border-white opacity-15 rounded"></div>
            </div>
            
            <div className="relative z-10 text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-2 tracking-wide">
                Artificial Intelligence Symposium
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-wider">2025</h2>
              <p className="text-xl md:text-2xl font-medium">
                Click to Download Your Certificate of Participation
              </p>
            </div>
          </div>

          {/* Download Certificate Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
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
                className="font-bold underline"
              >
                https://forms.office.com/r/deink2VGxh
              </a>
              . Once submitted, your certificate will be sent to you automatically via email.
            </p>
          </div>

          {/* Welcome Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="border-l-4 border-red-500 pl-4 mt-8 mb-6">
              <h1 className="text-3xl md:text-4xl text-red-700 font-bold">
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

          {/* Known for Excellence Section (Statistics) */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="border-l-4 border-red-500 pl-4 mb-6">
              <h2 className="text-3xl md:text-4xl text-red-700 font-bold">
                Known for Excellence
              </h2>
            </div>
            <div id="stats-section" className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {STATS_DATA.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold mb-2 text-red-700">
                    {stat.number}{index === 0 || index === 1 ? '+' : index === 3 ? '+' : ''}
                  </div>
                  <div className="text-lg font-semibold text-gray-700">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Event Details Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="border-l-4 border-red-500 pl-4 mb-6">
              <h2 className="text-3xl md:text-4xl text-red-700 font-bold">
                Event Details
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Location</h3>
                <div className="space-y-2 text-gray-700">
                  <p className="font-semibold">USD Sioux Falls</p>
                  <p>Avera Hall</p>
                  <p>4801 N. Career Ave.</p>
                  <p>Sioux Falls, SD 57107</p>
                  <p className="mt-4 italic">OR</p>
                  <p>Zoom (link will be provided through registration)</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Date and time</h3>
                <p className="text-gray-700 text-lg">June 26 - 27, 2025</p>
              </div>
            </div>
          </div>

          {/* Registration Link Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="border-l-4 border-red-500 pl-4 mb-6">
              <h2 className="text-3xl md:text-4xl text-red-700 font-bold">
                Registration link
              </h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-700 text-lg">
                This event is free, but registration is required to attend.
              </p>
              <p className="text-gray-700">
                📌 <strong>Registration link:</strong>{" "}
                <a 
                  href="https://events.vtools.ieee.org/event/register/487885"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline font-semibold"
                >
                  https://events.vtools.ieee.org/event/register/487885
                </a>
              </p>
              <p className="text-gray-700">
                🎓 Sign up, attend, and receive a certificate of participation immediately after the event!
              </p>
            </div>
          </div>

          {/* Speakers Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="border-l-4 border-red-500 pl-4 mb-6">
              <h1 className="text-3xl md:text-4xl text-red-700 font-bold">
                🎤 Speakers
              </h1>
            </div>
            <div className="grid gap-4 text-gray-700">
              {speakerList.map((speaker, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-base">{speaker}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Schedule Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="border-l-4 border-red-500 pl-4 mb-6">
              <h1 className="text-3xl md:text-4xl text-red-700 font-bold">
                Conference Schedule
              </h1>
            </div>
            
            {/* Day Tabs */}
            <div className="flex flex-wrap gap-2 mb-6 border-b">
              <button
                onClick={() => setActiveDay("day1")}
                className={`px-6 py-3 font-semibold rounded-t-lg transition-colors ${
                  activeDay === "day1"
                    ? "bg-red-700 text-white border-b-4 border-red-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Day 1: June 26, 2025
              </button>
              <button
                onClick={() => setActiveDay("day2")}
                className={`px-6 py-3 font-semibold rounded-t-lg transition-colors ${
                  activeDay === "day2"
                    ? "bg-red-700 text-white border-b-4 border-red-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Day 2: June 27, 2025
              </button>
            </div>

            {/* Schedule Content */}
            <div className="space-y-4">
              {scheduleData[activeDay as keyof typeof scheduleData].map((item, index) => (
                <div key={index} className="border-l-4 border-red-200 pl-4 py-2">
                  <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4">
                    <div className="text-red-700 font-bold whitespace-nowrap">
                      {item.time}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-700">{item.details}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <a 
                href="https://www.ai-research-lab.org/resources/AI%20Symposium%20Agenda%20_%20Final.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                📥 Download Full Schedule (PDF)
              </a>
            </div>
          </div>

          {/* Committee Members Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="border-l-4 border-red-500 pl-4 mb-6">
              <h1 className="text-3xl md:text-4xl text-red-700 font-bold">
                Committee Members
              </h1>
            </div>
            
            {Object.entries(committeeData).map(([sectionName, members]) => (
              <div key={sectionName} className="mb-6 border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleSection(sectionName)}
                  className="w-full text-left p-4 bg-gray-50 hover:bg-gray-100 transition-colors rounded-t-lg flex justify-between items-center"
                >
                  <h2 className="text-xl font-semibold text-gray-800">{sectionName}</h2>
                  <span className={`transform transition-transform ${openSections[sectionName] ? 'rotate-180' : ''}`}>
                    ↓
                  </span>
                </button>
                {openSections[sectionName] && (
                  <div className="p-4 border-t border-gray-200">
                    <ul className="space-y-3">
                      {members.map((member, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{member}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Sponsorship Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="border-l-4 border-red-500 pl-4 mb-6">
              <h1 className="text-3xl md:text-4xl text-red-700 font-bold">
                Our Sponsors
              </h1>
            </div>
            
            {/* Sponsor Navigation Tabs */}
            <div className="flex gap-4 mb-6 border-b">
              <button className="px-4 py-2 font-semibold text-red-700 border-b-2 border-red-700">
                Current Sponsors
              </button>
              <button className="px-4 py-2 font-semibold text-gray-500 hover:text-gray-700">
                Become a Sponsor
              </button>
            </div>
            
            <div className="mb-6">
              <p className="text-gray-700 text-lg">
                We're grateful to the following organizations for their support of the AI Symposium 2025. 
                Their partnership enables us to provide world-class content and experiences for our attendees.
              </p>
            </div>
            
            {/* Bronze Sponsors */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bronze Sponsors</h3>
              <div className="flex flex-wrap gap-6 items-center">
                <div className="flex flex-col items-center">
                  <img 
                    src="/images/sponsor/Area.png" 
                    alt="Direct Companies"
                    className="h-16 w-auto object-contain mb-2"
                  />
                  <span className="text-sm text-gray-600 text-center">Direct Companies</span>
                </div>
              </div>
            </div>

            {/* Silver Sponsors */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Silver Sponsors</h3>
              <div className="flex flex-wrap gap-6 items-center">
                <div className="flex flex-col items-center">
                  <img 
                    src="/images/sponsor/Sterling.png" 
                    alt="Sterling"
                    className="h-16 w-auto object-contain mb-2"
                  />
                  <span className="text-sm text-gray-600 text-center">Sterling</span>
                </div>
                <div className="flex flex-col items-center">
                  <img 
                    src="/images/sponsor/ieee_usa.png" 
                    alt="IEEE USA"
                    className="h-16 w-auto object-contain mb-2"
                  />
                  <span className="text-sm text-gray-600 text-center">IEEE USA</span>
                </div>
              </div>
            </div>

            {/* Gold Sponsors */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Gold Sponsors</h3>
              <div className="flex flex-wrap gap-6 items-center">
                <div className="flex flex-col items-center">
                  <img 
                    src="/images/sponsor/dakota.png" 
                    alt="Dakota"
                    className="h-16 w-auto object-contain mb-2"
                  />
                  <span className="text-sm text-gray-600 text-center">Dakota</span>
                </div>
              </div>
            </div>

            {/* Partners */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Partners</h3>
              <div className="flex flex-wrap gap-6 items-center">
                <div className="flex flex-col items-center">
                  <img 
                    src="/images/sponsor/IEEE.png" 
                    alt="IEEE"
                    className="h-16 w-auto object-contain mb-2"
                  />
                  <span className="text-sm text-gray-600 text-center">IEEE</span>
                </div>
                <div className="flex flex-col items-center">
                  <img 
                    src="/images/sponsor/logo.png" 
                    alt="Generic Partner"
                    className="h-16 w-auto object-contain mb-2"
                  />
                  <span className="text-sm text-gray-600 text-center">Partner</span>
                </div>
                <div className="flex flex-col items-center">
                  <img 
                    src="/images/sponsor/SD-BCC.png" 
                    alt="SD BCC"
                    className="h-16 w-auto object-contain mb-2"
                  />
                  <span className="text-sm text-gray-600 text-center">SD BCC</span>
                </div>
              </div>
            </div>
          </div>

          {/* Past Events Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="border-l-4 border-red-500 pl-4 mb-6">
              <h1 className="text-3xl md:text-4xl text-red-700 font-bold">
                Past Events
              </h1>
            </div>
            
            <p className="text-gray-700 text-lg mb-6">
              Learn more about our past Artificial Intelligence Symposiums.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <a 
                href="https://www.usd.edu/Academics/Colleges-and-Schools/college-of-arts-sciences/computer-science/Artificial-Intelligence-Symposium"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white p-4 rounded-lg text-center hover:bg-red-700 transition-colors"
              >
                <h3 className="font-bold">AI Symposium 2024</h3>
              </a>
              <a 
                href="https://www.usd.edu/academics/colleges-and-schools/college-of-arts-sciences/south-dakotan-arts-and-sciences/usd-to-host-third-annual-ai-symposium"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white p-4 rounded-lg text-center hover:bg-red-700 transition-colors"
              >
                <h3 className="font-bold">AI Symposium 2023</h3>
              </a>
              <a 
                href="https://www.usd.edu/academics/colleges-and-schools/college-of-arts-sciences/south-dakotan-arts-and-sciences/usd-to-host-artificial-intelligence-symposium-march-22"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white p-4 rounded-lg text-center hover:bg-red-700 transition-colors"
              >
                <h3 className="font-bold">AI Symposium 2022</h3>
              </a>
              <a 
                href="https://www.usd.edu/the-south-dakotan/usd-to-host-first-ai-symposium-march-16-18"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white p-4 rounded-lg text-center hover:bg-red-700 transition-colors"
              >
                <h3 className="font-bold">AI Symposium 2021</h3>
              </a>
            </div>
          </div>

          {/* Why Attend Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="border-l-4 border-red-500 pl-4 mb-6">
              <h1 className="text-3xl md:text-4xl text-red-700 font-bold">
                Why Attend
              </h1>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Collaborate</h3>
                <p className="text-gray-700">
                  Work with experts to brainstorm solutions in healthcare, cybersecurity, 
                  quantum computing, agriculture and risk management.
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Learn</h3>
                <p className="text-gray-700">
                  Gain insights from established AI professionals through engaging 
                  symposium sessions.
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Connect</h3>
                <p className="text-gray-700">
                  Build valuable connections with like-minded individuals both 
                  in-person and virtually.
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Discover</h3>
                <p className="text-gray-700">
                  Learn about the latest advancements in AI and how they can 
                  impact your field.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="border-l-4 border-red-500 pl-4 mb-6">
              <h1 className="text-3xl md:text-4xl text-red-700 font-bold">
                Contact Information
              </h1>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">General Inquiries</h3>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <strong>KC Santosh</strong><br />
                    Chair & Professor<br />
                    University of South Dakota<br />
                    Email: <a href="mailto:KC.Santosh@usd.edu" className="text-red-600 underline">KC.Santosh@usd.edu</a>
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Symposium Secretary</h3>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <strong>Rodrigue Rizk</strong><br />
                    Assistant Professor<br />
                    University of South Dakota<br />
                    Email: <a href="mailto:Rodrigue.Rizk@usd.edu" className="text-red-600 underline">Rodrigue.Rizk@usd.edu</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Go to Top Button */}
      {showGoToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition-colors"
          aria-label="Go to top"
        >
          ↑
        </button>
      )}

      <Footer />
    </div>
  );
};

export default AISymposium2025;
