// cSpell: disable

import React, { useState, useEffect, useMemo, useCallback } from "react";
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
  {
    tier: 'Platinum',
    sponsors: [
      { name: 'Microsoft', logo: '/images/sponsor/microsoft.png', alt: 'Microsoft' },
      { name: 'Collins Aerospace', logo: '/images/sponsor/collins-aerospace.png', alt: 'Collins Aerospace' }
    ]
  },
  {
    tier: 'Gold',
    sponsors: [
      { name: 'NIST', logo: '/images/sponsor/nist.png', alt: 'NIST' },
      { name: 'EROS Center', logo: '/images/sponsor/eros.png', alt: 'EROS Center' }
    ]
  },
  {
    tier: 'Silver',
    sponsors: [
      { name: 'South Dakota BioTech', logo: '/images/sponsor/sd-biotech.png', alt: 'SD BioTech' },
      { name: 'Avera Health', logo: '/images/sponsor/avera.png', alt: 'Avera Health' }
    ]
  }
];

// Main Component
const AISymposium2025: React.FC = () => {
  // State Management
  const [activeTab, setActiveTab] = useState<"day1" | "day2">("day1");
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const [isLoading, setIsLoading] = useState(true);

  // Custom Hooks
  const { showButton, scrollToTop } = useScrollToTop();
  const isStatsVisible = useIntersectionObserver('stats-section');
  const scrollY = useParallaxScroll();

  // Animated counters
  const attendeesCount = useAnimatedCounter(STATS_DATA[0].number, isStatsVisible);
  const speakersCount = useAnimatedCounter(STATS_DATA[1].number, isStatsVisible);
  const yearsCount = useAnimatedCounter(STATS_DATA[2].number, isStatsVisible);
  const partnersCount = useAnimatedCounter(STATS_DATA[3].number, isStatsVisible);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Memoized data
  const scheduleData = useMemo(() => ({
    day1: [
      { time: "8:30 AM - 9:00 AM", title: "Registration & Breakfast Networking", details: "Check-in, coffee, and light breakfast", type: 'networking' as const },
      { time: "9:00 AM – 9:30 AM", title: "Opening Remarks", details: "Speakers: President (USD), Vice-President (Academic Affairs), Vice-President (Office of Research), Dean (College of Arts & Sciences), Chair (Department of Computer Science)", type: 'talk' as const },
      { time: "9:30 AM - 10:30 AM", title: "Keynote Address", details: "NIST GenAI: Text-to-Text Evaluation", speaker: "Dr. George Awad, Computer Scientist/Project Leader, NIST", type: 'keynote' as const },
      { time: "10:30 AM - 10:45 AM", title: "Break / Networking", details: "Coffee break and networking", type: 'break' as const },
      { time: "10:45 AM - 11:30 AM", title: "Blitz Talk", details: "AI: Now and Zen", speaker: "Dr. Pete Doucette, Director, EROS Center", type: 'talk' as const },
      { time: "11:30 AM - 12:15 PM", title: "Workshop", details: "Collins Aerospace AI Workshop", speaker: "Joseph J Schueder (Senior Technical Fellow), Joseph Engler (Chief AI Scientist), Chris Reuter (Sr. Principal AI Engineer)", type: 'workshop' as const },
      { time: "12:15 PM - 2:00 PM", title: "Lunch", details: "Buffet + Networking Lounge", type: 'networking' as const },
      { time: "2:00 PM – 2:45 PM", title: "Workshop", details: "AI in the Workplace: Productivity & Creativity – Navigating the New Era of Work with Artificial Intelligence", speaker: "Gopi Challagolla, Microsoft", type: 'workshop' as const },
      {
        time: "2:45 PM - 4:00 PM",
        title: "Panel: AI and Workforce Development in South Dakota",
        details: "Panelists: Kyle Moeller (Senior Design Engineer, Collins Aerospace), Desi Schweitzer (AVP for Students Success, Southeast Tech), Rodrigue Rizk (Academic Scientist, USD), Chris Olsen (Senior Director, SD DL&T), Mike Davis (State Director, SBA), Dennis Krogman (Exec. Director, EDPNC); Moderator: KC Santosh (USD)",
        type: 'panel' as const
      },
      { time: "4:00 PM - 4:15 PM", title: "AI Expo: Technology Showcase", details: "USD students, faculty research showcase, SD state companies", type: 'networking' as const },
      { time: "4:15 PM", title: "Closing Remarks", details: "Day 1 wrap-up and Day 2 preview", type: 'talk' as const },
    ],
    day2: [
      { time: "8:30 AM - 9:00 AM", title: "Registration & Networking", details: "Coffee and light breakfast", type: 'networking' as const },
      { time: "9:00 AM – 9:30 AM", title: "Welcome & Day 2 Overview", details: "KC Santosh (USD/SDBCC), William Chen (USD/SDBCC)", type: 'talk' as const },
      {
        time: "9:30 AM - 10:30 AM",
        title: "Keynote Address",
        details: "Applied Artificial Intelligence for enhancing human precision in cardiovascular medicine",
        speaker: "Dr. Matthias Ponfick, Professor & Cardiologist, University Medical Center Schleswig Holstein, Germany",
        type: 'keynote' as const
      },
      { time: "10:30 AM - 10:45 AM", title: "Break / Networking", details: "Coffee break and networking", type: 'break' as const },
      { time: "10:45 AM - 11:15 AM", title: "Blitz Talk I", details: "AI methods to uncover cell identity genes", speaker: "Dr. Kaifu Chen, Harvard Med School/Boston Children's Hospital", type: 'talk' as const },
      { time: "11:15 AM - 11:45 AM", title: "Blitz Talk II", details: "AI-powered drug discovery for complex diseases", speaker: "Dr. Yinglong Miao, University of North Carolina Chapel Hill", type: 'talk' as const },
      { time: "11:45 AM - 12:15 PM", title: "Panel: Healthcare AI Applications", details: "Panelists: Kara McCormick (SD BioTech), Sujit Sakpal (Avera), KC Santosh (USD/SDBCC), William Chen (USD/SDBCC), Jeffrey S McGough (SDSMT/SDBCC), Gregory Bertsch (University of South Dakota); Moderator: Jose Lira (Vermillion Unplugged)", type: 'panel' as const },
      { time: "12:15 PM - 1:00 PM", title: "Closing Ceremony & Awards", details: "Final remarks and networking", type: 'talk' as const },
    ],
  }), []);

  const committeeData: CommitteeSection = useMemo(() => ({
    "Organizing Committee": [
      { name: "KC Santosh", title: "Chair & Professor", organization: "University of South Dakota (Founding Chair, AI Symposium & Co-Chair, SDBCC)" },
      { name: "William CW Chen", title: "Assistant Professor", organization: "University of South Dakota (Chair, SDBCC)" }, 
      { name: "Jeffrey McGough", title: "Head & Professor", organization: "South Dakota School of Mines (Co-Chair, SDBCC)" },
      { name: "Rodrigue Rizk", title: "Assistant Professor/Grad Coord", organization: "University of South Dakota (Co-Chair, AI Symposium)" },
      { name: "Robert Burke", title: "Conference Committee Chair", organization: "IEEE Region 4" }
    ],
    "Technical Program Committee": [
      { name: "Nand K Yadav", organization: "University of South Dakota, USA" },
      { name: "Longwei Wang", organization: "University of South Dakota, USA" },
      { name: "Srikanth Baride", organization: "University of South Dakota, USA" },
      { name: "Gregory Bertsch", organization: "University of South Dakota, USA" },
      { name: "Jeffrey McGough", organization: "South Dakota School of Mines, USA" },
      { name: "Deepika Koundal", organization: "UPES, India" },
      { name: "D S Guru", organization: "University of Mysore, India" },
      { name: "Marzieh Khakifirooz", organization: "Tecno de Monterrey, Mexico" },
      { name: "Md-Rafik Bouguelia", organization: "Hamlstad University, Sweden" },
      { name: "Antoine Vacavant", organization: "Univ Clermont Auvergne, France" },
      { name: "Djamila Auoada", organization: "University of Luxembourg, Luxembourg" },
      { name: "ChakChai So-In", organization: "Khon Kaen University, Thailand" },
      { name: "Xi-Zhao Wang", organization: "ShenZhen University, China" },
      { name: "Sunil Aryal", organization: "Deakin University, AUS" },
      { name: "Ameni Boumaiza", organization: "Hamad Bin Khalifa University, Qatar" },
      { name: "Debasmita Ghosh Roy", organization: "Banasthali Vidyapith, India" },
      { name: "Priti Rai", organization: "University of Delhi, India" }
    ],
    "Logistics & Operations": [
      { name: "Ryan Oines", title: "Chief Operating Officer", organization: "USD Discovery District" },
      { name: "Marc-Antoine Niamba", title: "Biotech Development", organization: "USD Discovery District" },
      { name: "Laura Wiemers", title: "Management Analyst", organization: "University of South Dakota" },
      { name: "Cassie Stolpe", title: "Administrative Assistant", organization: "University of South Dakota" },
      { name: "Kirby Fuglsby", title: "Technology Transfer Officer", organization: "University of South Dakota" },
      { name: "Hanna DeLange", title: "Public Relations & Content Strategist", organization: "University of South Dakota" },
      { name: "Alissa Matt", title: "Assist VP for Marketing & University Relations", organization: "University of South Dakota" }
    ],
    "Advisory Board Members": [
      { name: "Sheila Gestring", title: "President", organization: "University of South Dakota" },
      { name: "Jay Perry", title: "Vice President", organization: "University of South Dakota – Sioux Falls" },
      { name: "Dan Engebretson", title: "Vice President, Research & Sponsored Programs", organization: "University of South Dakota" },
      { name: "Kurt Hackemer", title: "Vice President for Academic Affairs & Provost", organization: "University of South Dakota" },
      { name: "John Dudley", title: "Dean, College of Arts & Science", organization: "University of South Dakota" },
      { name: "Tim Ridgway", title: "Vice President of Health Affairs and Dean of the Sanford School of Medicine", organization: "University of South Dakota" },
      { name: "William Mayhan", title: "Dean, Biomedical Sciences", organization: "University of South Dakota" }
    ]
  }), []);

  const toggleSection = useCallback((sectionName: string) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionName]: !prev[sectionName]
    }));
  }, []);

  const getScheduleItemIcon = (type: ScheduleItem['type']) => {
    switch (type) {
      case 'keynote': return '🎯';
      case 'workshop': return '🔧';
      case 'panel': return '👥';
      case 'talk': return '💭';
      case 'break': return '☕';
      case 'networking': return '🤝';
      default: return '📅';
    }
  };

  const getScheduleItemColor = (type: ScheduleItem['type']) => {
    switch (type) {
      case 'keynote': return 'border-l-red-500 bg-red-50';
      case 'workshop': return 'border-l-blue-500 bg-blue-50';
      case 'panel': return 'border-l-green-500 bg-green-50';
      case 'talk': return 'border-l-purple-500 bg-purple-50';
      case 'break': return 'border-l-yellow-500 bg-yellow-50';
      case 'networking': return 'border-l-indigo-500 bg-indigo-50';
      default: return 'border-l-gray-500 bg-gray-50';
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-blue-50">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-red-500 border-t-transparent"></div>
          <p className="text-gray-600 font-medium">Loading AI Symposium 2025...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Parallax */}
      <section 
        id="hero-section" 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`,
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-20 w-12 h-12 bg-white rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-32 right-32 w-24 h-24 bg-white rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in-up">
              AI SYMPOSIUM
            </h1>
            <h2 className="text-4xl md:text-6xl font-light mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              2025
            </h2>
          </div>
          
          <div className="mb-12 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <p className="text-2xl md:text-3xl font-light mb-6">
              The Future of Artificial Intelligence
            </p>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Join industry leaders, researchers, and innovators for two days of cutting-edge insights, 
              workshops, and networking opportunities that will shape the future of AI.
            </p>
          </div>

          <div className="mb-12 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold">📅</div>
                <div className="text-lg">January 23-24, 2025</div>
              </div>
              <div>
                <div className="text-3xl font-bold">📍</div>
                <div className="text-lg">University of South Dakota</div>
              </div>
              <div>
                <div className="text-3xl font-bold">👥</div>
                <div className="text-lg">500+ Attendees Expected</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <a
              href="https://sites.google.com/view/ai-symposium-2025/registration"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-700 px-12 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Register Now
            </a>
            <a
              href="https://sites.google.com/view/ai-symposium-2025/call-for-papers"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-700 transform hover:scale-105 transition-all duration-300"
            >
              Submit Paper
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full animate-pulse mt-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Download Banner */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-6">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">🏆 Certificates Available!</h3>
              <p className="text-red-100">Download your participation and presentation certificates</p>
            </div>
            <a 
              href="https://sites.google.com/view/ai-symposium-2025/certificates"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-red-600 px-8 py-3 rounded-full font-bold hover:bg-red-50 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Download Certificates
            </a>
          </div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-gray-800">Welcome to AI Symposium 2025</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Step into the future of artificial intelligence at the most anticipated symposium of the year. 
              Connect with visionary leaders, explore groundbreaking research, and be part of shaping tomorrow's AI landscape.
            </p>
          </div>

          {/* Animated Statistics */}
          <div id="stats-section" className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[attendeesCount, speakersCount, yearsCount, partnersCount].map((count, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
                  <div className="text-5xl font-bold mb-4 text-red-600">
                    {count}{STATS_DATA[index].suffix}
                  </div>
                  <div className="text-lg font-semibold text-gray-700">{STATS_DATA[index].label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Known For Excellence Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8 text-gray-800">Known For Excellence</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-200 transition-colors duration-300">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">World-Class Speakers</h3>
                <p className="text-gray-600">Leading researchers and industry pioneers sharing cutting-edge insights</p>
              </div>
              <div className="text-center group">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                  <span className="text-3xl">🔬</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Cutting-Edge Research</h3>
                <p className="text-gray-600">Latest breakthroughs in AI research and practical applications</p>
              </div>
              <div className="text-center group">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">Networking Excellence</h3>
                <p className="text-gray-600">Connect with peers, mentors, and future collaborators</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8 text-gray-800">Event Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                  📅 <span className="ml-3">When</span>
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-600">Day 1</span>
                    <span className="text-gray-800">Thursday, January 23, 2025</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-600">Day 2</span>
                    <span className="text-gray-800">Friday, January 24, 2025</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-medium text-gray-600">Time</span>
                    <span className="text-gray-800">8:30 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                  📍 <span className="ml-3">Where</span>
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">University of South Dakota</h4>
                    <p className="text-gray-600">Vermillion, South Dakota</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Main Venue</h4>
                    <p className="text-gray-600">Al Neuharth Media Center</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Address</h4>
                    <p className="text-gray-600">555 N Dakota St, Vermillion, SD 57069</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Information */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-purple-700 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Registration & Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">Student Registration</h3>
              <div className="text-4xl font-bold mb-4">$50</div>
              <p className="mb-6">Perfect for students and early-career professionals</p>
              <ul className="space-y-2 text-left text-white/90">
                <li>✓ Full access to both days</li>
                <li>✓ All meals included</li>
                <li>✓ Certificate of participation</li>
                <li>✓ Networking sessions</li>
              </ul>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/30 transition-all duration-300 border-2 border-white/50">
              <h3 className="text-2xl font-bold mb-4">Professional Registration</h3>
              <div className="text-4xl font-bold mb-4">$150</div>
              <p className="mb-6">Ideal for industry professionals and researchers</p>
              <ul className="space-y-2 text-left text-white/90">
                <li>✓ Full access to both days</li>
                <li>✓ All meals included</li>
                <li>✓ Certificate of participation</li>
                <li>✓ Networking sessions</li>
                <li>✓ Workshop materials</li>
                <li>✓ Proceedings access</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">Virtual Attendance</h3>
              <div className="text-4xl font-bold mb-4">$25</div>
              <p className="mb-6">Join us online from anywhere in the world</p>
              <ul className="space-y-2 text-left text-white/90">
                <li>✓ Live streaming access</li>
                <li>✓ Interactive Q&A sessions</li>
                <li>✓ Digital certificate</li>
                <li>✓ Recorded sessions access</li>
                <li>✓ Virtual networking</li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://sites.google.com/view/ai-symposium-2025/registration"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-red-600 px-12 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Register Now
            </a>
            <a
              href="https://sites.google.com/view/ai-symposium-2025/program"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-red-600 transform hover:scale-105 transition-all duration-300"
            >
              View Full Program
            </a>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8 text-gray-800">Featured Speakers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from the brightest minds in artificial intelligence, representing leading institutions and companies worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SPEAKER_DATA.map((speaker, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">
                      {speaker.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-2 text-gray-800">{speaker.name}</h3>
                  <p className="text-center text-gray-600 font-medium mb-2">{speaker.title}</p>
                  <p className="text-center text-gray-500 text-sm mb-4">{speaker.organization}</p>
                  {speaker.bio && (
                    <p className="text-center text-gray-600 text-sm italic">{speaker.bio}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a
              href="https://sites.google.com/view/ai-symposium-2025/speakers"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              View All Speakers
            </a>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8 text-gray-800">Event Schedule</h2>
            <div className="flex justify-center mb-12">
              <div className="bg-white rounded-full p-2 shadow-lg">
                <button
                  onClick={() => setActiveTab("day1")}
                  className={`px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 ${
                    activeTab === "day1"
                      ? "bg-red-600 text-white shadow-lg"
                      : "text-gray-600 hover:text-red-600"
                  }`}
                >
                  Day 1 - January 23
                </button>
                <button
                  onClick={() => setActiveTab("day2")}
                  className={`px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 ${
                    activeTab === "day2"
                      ? "bg-red-600 text-white shadow-lg"
                      : "text-gray-600 hover:text-red-600"
                  }`}
                >
                  Day 2 - January 24
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {scheduleData[activeTab].map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 ${getScheduleItemColor(item.type)}`}
              >
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="md:w-48 mb-4 md:mb-0">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{getScheduleItemIcon(item.type)}</span>
                      <span className="font-bold text-gray-800">{item.time}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
                    <p className="text-gray-600 mb-2">{item.details}</p>
                    {item.speaker && (
                      <p className="text-red-600 font-medium">Speaker: {item.speaker}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://sites.google.com/view/ai-symposium-2025/program"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Download Full Schedule
            </a>
          </div>
        </div>
      </section>

      {/* Committee Members */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8 text-gray-800">Committee Members</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated professionals who make this symposium possible through their expertise and commitment.
            </p>
          </div>

          <div className="space-y-6">
            {Object.entries(committeeData).map(([sectionName, members]) => (
              <div key={sectionName} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleSection(sectionName)}
                  className="w-full px-8 py-6 text-left bg-gradient-to-r from-gray-50 to-gray-100 hover:from-red-50 hover:to-red-100 transition-all duration-300 flex justify-between items-center"
                >
                  <h3 className="text-2xl font-bold text-gray-800">{sectionName}</h3>
                  <span className={`text-3xl transition-transform duration-300 ${
                    openSections[sectionName] ? 'rotate-180' : ''
                  }`}>
                    ↓
                  </span>
                </button>
                {openSections[sectionName] && (
                  <div className="px-8 py-6 bg-white">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {members.map((member, memberIndex) => (
                        <div key={memberIndex} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-all duration-300">
                          <h4 className="font-bold text-gray-800 mb-2">{member.name}</h4>
                          {member.title && (
                            <p className="text-red-600 font-medium mb-1">{member.title}</p>
                          )}
                          {member.organization && (
                            <p className="text-gray-600 text-sm">{member.organization}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8 text-gray-800">Our Sponsors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're grateful to our sponsors who make this world-class event possible.
            </p>
          </div>

          <div className="space-y-12">
            {SPONSOR_TIERS.map((tier) => (
              <div key={tier.tier} className="text-center">
                <h3 className="text-2xl font-bold mb-8 text-gray-800">{tier.tier} Sponsors</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {tier.sponsors.map((sponsor, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <img
                        src={sponsor.logo}
                        alt={sponsor.alt}
                        className="max-h-16 mx-auto object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `<div class="h-16 flex items-center justify-center text-gray-500 font-medium">${sponsor.name}</div>`;
                          }
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Become a Sponsor</h3>
              <p className="text-gray-600 mb-6">
                Join leading organizations in supporting AI research and innovation. 
                Multiple sponsorship packages available.
              </p>
              <a
                href="https://sites.google.com/view/ai-symposium-2025/sponsorship"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Sponsorship Opportunities
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8 text-gray-800">Past Events</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the rich history of our AI Symposium series and the impact we've made in the AI community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[2024, 2023, 2022].map((year) => (
              <div key={year} className="bg-gradient-to-br from-red-50 to-purple-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <h3 className="text-3xl font-bold text-center mb-4 text-gray-800">AI Symposium {year}</h3>
                <div className="space-y-3 text-center">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Attendees:</span>
                    <span className="font-bold text-gray-800">{400 + (year - 2022) * 50}+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Speakers:</span>
                    <span className="font-bold text-gray-800">{25 + (year - 2022) * 5}+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Papers:</span>
                    <span className="font-bold text-gray-800">{80 + (year - 2022) * 20}+</span>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <a
                    href={`https://sites.google.com/view/ai-symposium-${year}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 font-bold hover:text-red-700 transition-colors duration-300"
                  >
                    View {year} Archives →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Attend */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-purple-700 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8">Why Attend AI Symposium 2025?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all duration-300">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Latest AI Innovations</h3>
              <p className="text-white/90">Get first-hand insights into cutting-edge AI research and breakthrough technologies.</p>
            </div>
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all duration-300">
                <span className="text-3xl">🌟</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Expert Knowledge</h3>
              <p className="text-white/90">Learn from renowned researchers, industry leaders, and AI pioneers.</p>
            </div>
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all duration-300">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Networking Excellence</h3>
              <p className="text-white/90">Build valuable connections with peers, mentors, and future collaborators.</p>
            </div>
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all duration-300">
                <span className="text-3xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Hands-on Workshops</h3>
              <p className="text-white/90">Participate in interactive workshops led by industry experts.</p>
            </div>
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all duration-300">
                <span className="text-3xl">💡</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Career Opportunities</h3>
              <p className="text-white/90">Discover new career paths and opportunities in the AI industry.</p>
            </div>
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all duration-300">
                <span className="text-3xl">📜</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Certificates & Recognition</h3>
              <p className="text-white/90">Earn certificates of participation and present your research.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8">Contact & Information</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl mb-4">📧</div>
              <h3 className="text-xl font-bold mb-4">General Inquiries</h3>
              <a href="mailto:ai-symposium@usd.edu" className="text-red-400 hover:text-red-300 transition-colors duration-300">
                ai-symposium@usd.edu
              </a>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">📝</div>
              <h3 className="text-xl font-bold mb-4">Registration</h3>
              <a 
                href="https://sites.google.com/view/ai-symposium-2025/registration" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-red-400 hover:text-red-300 transition-colors duration-300"
              >
                Registration Portal
              </a>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">📄</div>
              <h3 className="text-xl font-bold mb-4">Call for Papers</h3>
              <a 
                href="https://sites.google.com/view/ai-symposium-2025/call-for-papers" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-red-400 hover:text-red-300 transition-colors duration-300"
              >
                Submit Your Paper
              </a>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">🏢</div>
              <h3 className="text-xl font-bold mb-4">Sponsorship</h3>
              <a 
                href="https://sites.google.com/view/ai-symposium-2025/sponsorship" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-red-400 hover:text-red-300 transition-colors duration-300"
              >
                Sponsor Information
              </a>
            </div>
          </div>
          
          <div className="text-center mt-16 pt-16 border-t border-gray-600">
            <p className="text-gray-400 mb-4">Follow us for updates:</p>
            <div className="flex justify-center space-x-6">
              <a href="https://twitter.com/usd_ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                Twitter
              </a>
              <a href="https://linkedin.com/company/usd-ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                LinkedIn
              </a>
              <a href="https://www.facebook.com/usd.ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-red-600 text-white p-4 rounded-full shadow-2xl hover:bg-red-700 transform hover:scale-110 transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

      <Footer />

      {/* Add custom animations CSS */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default AISymposium2025;
