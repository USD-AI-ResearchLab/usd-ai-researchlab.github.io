// LinkedIn posts data - can be updated dynamically or fetched from an API
export interface LinkedInPost {
  id: string;
  date: string;
  content: string;
  author?: string;
  type: 'company' | 'shared' | 'announcement';
  likes?: number;
  comments?: number;
  shares?: number;
}

export interface LinkedInProfile {
  name: string;
  followers: string;
  description: string;
  established: string;
  profileImage?: string;
}

// Company profile data
export const linkedinProfile: LinkedInProfile = {
  name: "USD Artificial Intelligence (ᗩI) Research",
  followers: "4.0k",
  description: "Research: Artificial Intelligence and Machine Learning",
  established: "EST 2015"
};

// Recent LinkedIn posts - Update this array with real posts
export const linkedinPosts: LinkedInPost[] = [
  {
    id: "1",
    date: "December 2024",
    content: "🎉 Exciting News! The AI Research Lab signed an agreement with the Thumbay Institute for AI in Healthcare at Gulf Medical University, UAE. This partnership will advance AI applications in healthcare and foster international collaboration.",
    type: "announcement",
    likes: 47,
    comments: 8,
    shares: 12
  },
  {
    id: "2", 
    date: "November 2024",
    content: "🚀 A New Chapter Begins – PhD Journey! 📚 Moinak Bose joins our research lab with fully funded PhD in Data Science and Engineering. We're thrilled to welcome this talented researcher to our team!",
    type: "shared",
    author: "KC (Casey) Santosh",
    likes: 156,
    comments: 23,
    shares: 18
  },
  {
    id: "3",
    date: "November 2024", 
    content: "💰 Major milestone achieved! Secured $7.245M funding for South Dakota Biomedical Computation Collaborative initiative. This investment will drive cutting-edge research in biomedical computation.",
    type: "company",
    likes: 89,
    comments: 15,
    shares: 25
  },
  {
    id: "4",
    date: "October 2024",
    content: "🏆 Professor KC Santosh invited to deliver keynote on Artificial Intelligence at the International Conference on Intelligent Systems and Pattern Recognition in Tunisia (September 25-27, 2025).",
    type: "announcement",
    likes: 67,
    comments: 12,
    shares: 8
  },
  {
    id: "5",
    date: "October 2024",
    content: "🔬 NSF Award #2346643 received! $500K grant for CC* Campus Compute infrastructure project. This will expand our on-campus high-performance computing capacity by over 50%.",
    type: "company",
    likes: 123,
    comments: 19,
    shares: 31
  },
  {
    id: "6",
    date: "September 2024",
    content: "🌍 Global expansion continues! Established new research partnerships with leading AI institutions across Europe and Asia. Excited about the international collaborations ahead!",
    type: "company",
    likes: 78,
    comments: 14,
    shares: 16
  }
];

// Function to get recent posts (can be modified to fetch from API)
export const getRecentLinkedInPosts = (limit: number = 3): LinkedInPost[] => {
  return linkedinPosts.slice(0, limit);
};

// Function to format post content for display
export const formatPostContent = (content: string, maxLength: number = 120): string => {
  if (content.length <= maxLength) return content;
  return content.substring(0, maxLength).trim() + "...";
};

// Function to format engagement stats
export const formatEngagementStats = (post: LinkedInPost): string => {
  const stats = [];
  if (post.likes) stats.push(`${post.likes} likes`);
  if (post.comments) stats.push(`${post.comments} comments`);
  if (post.shares) stats.push(`${post.shares} shares`);
  return stats.join(" • ");
};

// Function to add a new post (for future dynamic updates)
export const addLinkedInPost = (newPost: LinkedInPost): void => {
  linkedinPosts.unshift(newPost); // Add to beginning of array
  // Keep only the most recent 10 posts
  if (linkedinPosts.length > 10) {
    linkedinPosts.splice(10);
  }
};

// Function to update profile information
export const updateLinkedInProfile = (updates: Partial<LinkedInProfile>): LinkedInProfile => {
  return { ...linkedinProfile, ...updates };
};

// Function to simulate fetching from LinkedIn API (for future implementation)
export const fetchLinkedInData = async (): Promise<{ profile: LinkedInProfile; posts: LinkedInPost[] }> => {
  // This would be replaced with actual LinkedIn API calls
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        profile: linkedinProfile,
        posts: getRecentLinkedInPosts(6)
      });
    }, 1000);
  });
};

// Function to get posts by type
export const getPostsByType = (type: LinkedInPost['type']): LinkedInPost[] => {
  return linkedinPosts.filter(post => post.type === type);
};

// Function to get engagement summary
export const getEngagementSummary = () => {
  const recentPosts = getRecentLinkedInPosts(6);
  const totalLikes = recentPosts.reduce((sum, post) => sum + (post.likes || 0), 0);
  const totalComments = recentPosts.reduce((sum, post) => sum + (post.comments || 0), 0);
  const totalShares = recentPosts.reduce((sum, post) => sum + (post.shares || 0), 0);
  
  return {
    totalLikes,
    totalComments, 
    totalShares,
    averageEngagement: Math.round((totalLikes + totalComments + totalShares) / recentPosts.length)
  };
};

// Function to get trending post (most engaged)
export const getTrendingPost = (): LinkedInPost | null => {
  if (linkedinPosts.length === 0) return null;
  
  return linkedinPosts.reduce((trending, current) => {
    const currentEngagement = (current.likes || 0) + (current.comments || 0) + (current.shares || 0);
    const trendingEngagement = (trending.likes || 0) + (trending.comments || 0) + (trending.shares || 0);
    
    return currentEngagement > trendingEngagement ? current : trending;
  });
};

// Function to generate dynamic content updates
export const generateRandomUpdate = (): Partial<LinkedInPost> => {
  const updates = [
    "🔬 New research breakthrough in AI-driven medical image analysis!",
    "📚 Latest publication accepted at top-tier conference!",
    "🎓 Congratulations to our students on their outstanding achievements!",
    "🤝 New partnership announcement coming soon!",
    "💡 Innovative AI solutions being developed in our labs!",
    "🌟 Recognition received for outstanding research contributions!"
  ];
  
  const randomUpdate = updates[Math.floor(Math.random() * updates.length)];
  const randomLikes = Math.floor(Math.random() * 100) + 20;
  const randomComments = Math.floor(Math.random() * 20) + 5;
  const randomShares = Math.floor(Math.random() * 30) + 10;
  
  return {
    content: randomUpdate,
    likes: randomLikes,
    comments: randomComments,
    shares: randomShares,
    date: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
  };
};

// Function to generate dynamic activity notifications
export const generateActivityNotification = (): string => {
  const activities = [
    "New research paper submitted for review",
    "PhD student successfully defended thesis", 
    "Grant proposal approved for $2.5M funding",
    "Collaboration meeting scheduled with European partners",
    "AI conference presentation confirmed",
    "New lab equipment installation complete",
    "Research breakthrough in computer vision",
    "International student exchange program launched",
    "Workshop on machine learning scheduled",
    "Industry partnership agreement signed"
  ];
  
  return activities[Math.floor(Math.random() * activities.length)];
};

// Function to simulate real-time activity feed
export const getRecentActivity = () => {
  const now = new Date();
  const activities = [];
  
  for (let i = 0; i < 3; i++) {
    const time = new Date(now.getTime() - (i * 2 + Math.random() * 5) * 60 * 1000);
    activities.push({
      id: `activity-${i}`,
      message: generateActivityNotification(),
      timestamp: time,
      type: Math.random() > 0.5 ? 'research' : 'achievement'
    });
  }
  
  return activities;
};

// Function to simulate real-time updates with more sophisticated growth patterns
export const simulateRealTimeUpdates = (posts: LinkedInPost[]): LinkedInPost[] => {
  return posts.map(post => {
    // Calculate realistic growth based on post age and current engagement
    const currentTotal = (post.likes || 0) + (post.comments || 0) + (post.shares || 0);
    const growthFactor = Math.max(0.1, 1 - (currentTotal / 1000)); // Slower growth for popular posts
    
    const likeIncrease = Math.floor(Math.random() * 6 * growthFactor);
    const commentIncrease = Math.floor(Math.random() * 3 * growthFactor);
    const shareIncrease = Math.floor(Math.random() * 4 * growthFactor);
    
    return {
      ...post,
      likes: (post.likes || 0) + likeIncrease,
      comments: (post.comments || 0) + commentIncrease,
      shares: (post.shares || 0) + shareIncrease
    };
  });
};
