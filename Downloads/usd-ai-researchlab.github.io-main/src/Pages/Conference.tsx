import { useEffect, useState, useRef } from 'react';
import Footer from '../components/Footer';

// Advanced TypeScript interfaces
interface Conference {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  speakers: Speaker[];
  tracks: Track[];
  status: 'upcoming' | 'ongoing' | 'past';
  registrationDeadline: string;
  maxAttendees: number;
  currentAttendees: number;
  features: string[];
  price: {
    early: number;
    regular: number;
    student: number;
  };
}

interface Speaker {
  id: string;
  name: string;
  title: string;
  organization: string;
  bio: string;
  avatar: string;
  topic: string;
  time: string;
}

interface Track {
  id: string;
  name: string;
  description: string;
  sessions: Session[];
  room: string;
}

interface Session {
  id: string;
  title: string;
  speaker: string;
  time: string;
  duration: number;
  type: 'keynote' | 'workshop' | 'panel' | 'presentation';
}

// Custom hooks
const useIntersectionObserver = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [threshold]);

  return { ref, isVisible };
};

const useAnimatedCounter = (endValue: number, duration = 2000, startAnimation = false) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCurrentValue(Math.floor(endValue * easeOutQuart));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [endValue, duration, startAnimation]);

  return currentValue;
};

const Conference: React.FC = () => {
  // Animation refs
  const heroRef = useIntersectionObserver();
  const statsRef = useIntersectionObserver();
  const featuresRef = useIntersectionObserver();
  const scheduleRef = useIntersectionObserver();
  const speakersRef = useIntersectionObserver();

  // Animated counters
  const attendeeCount = useAnimatedCounter(500, 2000, statsRef.isVisible);
  const sessionCount = useAnimatedCounter(25, 2000, statsRef.isVisible);
  const speakerCount = useAnimatedCounter(15, 2000, statsRef.isVisible);

  // Conference data
  const conferenceData: Conference = {
    id: 'ai-conference-2025',
    title: 'AI Innovation Conference 2025',
    date: 'March 15-17, 2025',
    time: '9:00 AM - 6:00 PM',
    location: 'University of South Dakota, Vermillion Campus',
    description: 'Join us for the premier AI conference bringing together researchers, industry leaders, and innovators to explore the cutting-edge developments in artificial intelligence and machine learning.',
    speakers: [
      {
        id: '1',
        name: 'Dr. Sarah Chen',
        title: 'Chief AI Officer',
        organization: 'TechCorp Research',
        bio: 'Leading researcher in neural networks and deep learning applications.',
        avatar: '/faculty/kc-santosh.jpg',
        topic: 'The Future of Neural Architecture Search',
        time: '9:30 AM'
      },
      {
        id: '2',
        name: 'Prof. Michael Rodriguez',
        title: 'Director of AI Ethics',
        organization: 'Stanford University',
        bio: 'Expert in AI ethics and responsible machine learning practices.',
        avatar: '/faculty/longwei-wang.jpeg',
        topic: 'Ethical AI: Building Responsible Systems',
        time: '11:00 AM'
      },
      {
        id: '3',
        name: 'Dr. Emily Watson',
        title: 'VP of Machine Learning',
        organization: 'Google DeepMind',
        bio: 'Pioneer in reinforcement learning and autonomous systems.',
        avatar: '/faculty/rodrigue-rizk.jpg',
        topic: 'Advances in Reinforcement Learning',
        time: '2:30 PM'
      }
    ],
    tracks: [
      {
        id: 'research',
        name: 'Research Track',
        description: 'Cutting-edge research presentations and findings',
        room: 'Auditorium A',
        sessions: [
          {
            id: 'r1',
            title: 'Neural Network Architectures',
            speaker: 'Dr. Sarah Chen',
            time: '9:30 AM',
            duration: 60,
            type: 'keynote'
          }
        ]
      },
      {
        id: 'industry',
        name: 'Industry Track',
        description: 'Real-world applications and industry insights',
        room: 'Conference Hall B',
        sessions: [
          {
            id: 'i1',
            title: 'AI in Production Systems',
            speaker: 'Industry Panel',
            time: '10:30 AM',
            duration: 90,
            type: 'panel'
          }
        ]
      }
    ],
    status: 'upcoming',
    registrationDeadline: 'February 28, 2025',
    maxAttendees: 500,
    currentAttendees: 347,
    features: ['Networking Sessions', 'Hands-on Workshops', 'Industry Expo', 'Research Posters'],
    price: {
      early: 299,
      regular: 399,
      student: 99
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Hero Section */}
      <section 
        ref={heroRef.ref}
        className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-all duration-1000 ${
          heroRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
          <div className="absolute inset-0 bg-black/20"></div>
          {/* Floating Particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white/10 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
              {conferenceData.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              {conferenceData.description}
            </p>

            <div className="flex flex-wrap justify-center gap-8 text-lg">
              <div className="flex items-center gap-2">
                <Calendar className="w-6 h-6 text-blue-300" />
                <span>{conferenceData.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-6 h-6 text-purple-300" />
                <span>{conferenceData.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-6 h-6 text-indigo-300" />
                <span>{conferenceData.currentAttendees}+ Registered</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Register Now
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold text-lg hover:bg-white/20 transform hover:scale-105 transition-all duration-300 border border-white/20">
                View Schedule
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        ref={statsRef.ref}
        className={`py-20 bg-white transition-all duration-1000 ${
          statsRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">{attendeeCount}+</div>
              <div className="text-gray-600 text-lg">Expected Attendees</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">{sessionCount}+</div>
              <div className="text-gray-600 text-lg">Sessions & Workshops</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-indigo-600 mb-2">{speakerCount}+</div>
              <div className="text-gray-600 text-lg">Expert Speakers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        ref={featuresRef.ref}
        className={`py-20 bg-gray-50 transition-all duration-1000 ${
          featuresRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Conference Highlights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of AI through interactive sessions, networking, and cutting-edge research presentations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: BookOpen, title: 'Research Papers', desc: 'Latest AI research findings' },
              { icon: Users, title: 'Networking', desc: 'Connect with industry leaders' },
              { icon: Award, title: 'Workshops', desc: 'Hands-on learning sessions' },
              { icon: Coffee, title: 'Social Events', desc: 'Coffee chats and mixers' }
            ].map((feature, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 ${
                  featuresRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section 
        ref={speakersRef.ref}
        className={`py-20 bg-white transition-all duration-1000 ${
          speakersRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Keynote Speakers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from the pioneers and thought leaders shaping the future of artificial intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {conferenceData.speakers.map((speaker, index) => (
              <div
                key={speaker.id}
                className={`bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 ${
                  speakersRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                    <img 
                      src={speaker.avatar} 
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.innerHTML = `<span class="text-white text-xl font-bold">${speaker.name.split(' ').map(n => n[0]).join('')}</span>`;
                      }}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{speaker.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{speaker.title}</p>
                  <p className="text-gray-600 text-sm mb-3">{speaker.organization}</p>
                  <p className="text-gray-700 text-sm mb-4">{speaker.topic}</p>
                  <div className="flex items-center justify-center gap-2 text-purple-600">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">{speaker.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Register for the Conference
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Secure your spot at the premier AI event of the year. Early bird pricing available until {conferenceData.registrationDeadline}.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold mb-2">Student</h3>
              <div className="text-3xl font-bold mb-4">${conferenceData.price.student}</div>
              <p className="text-gray-200">Perfect for students and researchers</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-yellow-400 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Early Bird</h3>
              <div className="text-3xl font-bold mb-4">${conferenceData.price.early}</div>
              <p className="text-gray-200">Save with early registration</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold mb-2">Regular</h3>
              <div className="text-3xl font-bold mb-4">${conferenceData.price.regular}</div>
              <p className="text-gray-200">Full conference access</p>
            </div>
          </div>

          <button className="px-10 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black rounded-full font-bold text-xl hover:from-yellow-400 hover:to-orange-400 transform hover:scale-105 transition-all duration-300 shadow-xl">
            Register Now
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Conference;
