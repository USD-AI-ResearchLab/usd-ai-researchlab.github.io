// Simple LinkedIn API server - provides dynamic data instead of scraping
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Dynamic content generation
const generateRecentPosts = () => {
  const templates = [
    {
      content: "🎉 Exciting News! The AI Research team signed an agreement with Thumbay Institute for AI in Healthcare at Gulf Medical University, UAE. This partnership will advance AI applications in healthcare and foster international collaboration.",
      type: "announcement"
    },
    {
      content: "🚀 A New Chapter Begins – PhD Journey! Moinak Bose joins our research lab with fully funded PhD in Data Science and Engineering. We're thrilled to welcome this talented researcher to our team!",
      type: "shared",
      author: "KC (Casey) Santosh"
    },
    {
      content: "💰 Major milestone achieved! Secured $7.245M funding for South Dakota Biomedical Computation Collaborative initiative. This investment will drive cutting-edge research in biomedical computation.",
      type: "company"
    },
    {
      content: "🏆 Professor KC Santosh invited to deliver keynote on Artificial Intelligence at the International Conference on Intelligent Systems and Pattern Recognition in Tunisia (September 25-27, 2025).",
      type: "announcement"
    },
    {
      content: "🔬 NSF Award #2346643 received! $500K grant for CC* Campus Compute infrastructure project. This will expand our on-campus high-performance computing capacity by over 50%.",
      type: "company"
    },
    {
      content: "🌍 Global expansion continues! Established new research partnerships with leading AI institutions across Europe and Asia. Excited about the international collaborations ahead!",
      type: "company"
    }
  ];
  
  return templates.map((template, index) => {
    const monthsBack = Math.floor(index / 2);
    const date = new Date();
    date.setMonth(date.getMonth() - monthsBack);
    
    // Add some randomness to engagement numbers for each request
    const baseTime = Date.now();
    const randomSeed = Math.floor(baseTime / 10000) + index;
    
    return {
      id: `post-${randomSeed}`,
      date: date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
      content: template.content,
      type: template.type,
      likes: Math.floor(Math.random() * 200) + 50 + index * 10,
      comments: Math.floor(Math.random() * 50) + 5 + index * 2,
      shares: Math.floor(Math.random() * 75) + 10 + index * 3,
      author: template.author || 'USD AI Research'
    };
  });
};

const getProfileData = () => ({
  name: "USD Artificial Intelligence Research",
  followers: "4.2k", 
  description: "Research: Artificial Intelligence and Machine Learning",
  established: "EST 2015",
  profileImage: null
});

// API Routes
app.get('/api/linkedin/company/kc-ai/posts', async (req, res) => {
  try {
    console.log('📡 LinkedIn API request received at', new Date().toISOString());
    
    // Simulate realistic API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const posts = generateRecentPosts();
    const profile = getProfileData();
    
    console.log(`✅ Generated ${posts.length} dynamic posts`);
    
    res.json({
      success: true,
      profile,
      posts,
      timestamp: new Date().toISOString(),
      source: 'dynamic-generation'
    });
    
  } catch (error) {
    console.error('❌ API Error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch LinkedIn data',
      message: error.message
    });
  }
});

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    service: 'LinkedIn Data API'
  });
});

app.get('*', (req, res) => {
  res.status(404).json({
    error: 'Route not found',
    availableRoutes: [
      'GET /api/linkedin/company/kc-ai/posts',
      'GET /api/health'
    ]
  });
});

app.listen(PORT, () => {
  console.log(`🚀 LinkedIn API server running on http://localhost:${PORT}`);
  console.log(`📱 Test endpoint: http://localhost:${PORT}/api/linkedin/company/kc-ai/posts`);
  console.log(`💚 Health check: http://localhost:${PORT}/api/health`);
});
