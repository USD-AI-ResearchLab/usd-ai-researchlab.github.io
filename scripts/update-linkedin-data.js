// Manual LinkedIn Data Update Script
// Run this script to manually update LinkedIn posts

const fs = require('fs');
const path = require('path');

// Function to format date consistently
function formatDate(dateStr) {
  try {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  } catch (error) {
    return new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  }
}

// Function to determine post type
function determinePostType(content) {
  const lowerContent = content.toLowerCase();
  if (lowerContent.includes('announcement') || lowerContent.includes('exciting news') || lowerContent.includes('🎉')) {
    return 'announcement';
  } else if (lowerContent.includes('shared') || lowerContent.includes('repost')) {
    return 'shared';
  }
  return 'company';
}

// Manual post data (update this with real LinkedIn posts)
const manualLinkedInPosts = [
  {
    content: "🎉 Exciting News! The AI Research Lab signed an agreement with the Thumbay Institute for AI in Healthcare at Gulf Medical University, UAE. This partnership will advance AI applications in healthcare and foster international collaboration.",
    author: "USD AI Research",
    date: "2 days ago",
    likes: 47,
    comments: 8,
    shares: 12
  },
  {
    content: "🚀 A New Chapter Begins – PhD Journey! 📚 Moinak Bose joins our research lab with fully funded PhD in Data Science and Engineering. We're thrilled to welcome this talented researcher to our team!",
    author: "KC (Casey) Santosh",
    date: "1 week ago", 
    likes: 156,
    comments: 23,
    shares: 18
  },
  {
    content: "💰 Major milestone achieved! Secured $7.245M funding for South Dakota Biomedical Computation Collaborative initiative. This investment will drive cutting-edge research in biomedical computation.",
    author: "USD AI Research",
    date: "2 weeks ago",
    likes: 89,
    comments: 15,
    shares: 25
  },
  {
    content: "🏆 Professor KC Santosh invited to deliver keynote on Artificial Intelligence at the International Conference on Intelligent Systems and Pattern Recognition in Tunisia (September 25-27, 2025).",
    author: "USD AI Research",
    date: "3 weeks ago",
    likes: 67,
    comments: 12,
    shares: 8
  },
  {
    content: "🔬 NSF Award #2346643 received! $500K grant for CC* Campus Compute infrastructure project. This will expand our on-campus high-performance computing capacity by over 50%.",
    author: "USD AI Research",
    date: "1 month ago",
    likes: 123,
    comments: 19,
    shares: 31
  }
];

// Function to update the LinkedIn data file
function updateLinkedInData() {
  const linkedInFilePath = path.join(__dirname, '../src/data/linkedin.ts');
  
  try {
    // Transform manual posts to the correct format
    const transformedPosts = manualLinkedInPosts.map((post, index) => ({
      id: `manual-${Date.now()}-${index}`,
      date: formatDate(post.date),
      content: post.content,
      author: post.author === 'USD AI Research' ? undefined : post.author,
      type: determinePostType(post.content),
      likes: post.likes,
      comments: post.comments,
      shares: post.shares
    }));
    
    // Read the current file
    let fileContent = fs.readFileSync(linkedInFilePath, 'utf8');
    
    // Replace the posts array
    const newPostsArray = `export const linkedinPosts: LinkedInPost[] = ${JSON.stringify(transformedPosts, null, 2).replace(/"([^"]+)":/g, '$1:')};`;
    
    // Replace the existing posts array
    fileContent = fileContent.replace(
      /export const linkedinPosts: LinkedInPost\[] = \[[\s\S]*?\];/,
      newPostsArray
    );
    
    // Write back to file
    fs.writeFileSync(linkedInFilePath, fileContent, 'utf8');
    
    console.log('✅ LinkedIn data updated successfully!');
    console.log(`📊 Updated ${transformedPosts.length} posts`);
    
    return transformedPosts;
  } catch (error) {
    console.error('❌ Failed to update LinkedIn data:', error);
    return null;
  }
}

// Function to backup current data
function backupCurrentData() {
  const linkedInFilePath = path.join(__dirname, '../src/data/linkedin.ts');
  const backupPath = path.join(__dirname, `../backups/linkedin-backup-${Date.now()}.ts`);
  
  try {
    // Create backups directory if it doesn't exist
    const backupDir = path.dirname(backupPath);
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true });
    }
    
    // Copy current file to backup
    fs.copyFileSync(linkedInFilePath, backupPath);
    console.log(`📦 Backup created: ${backupPath}`);
    
    return backupPath;
  } catch (error) {
    console.error('❌ Failed to create backup:', error);
    return null;
  }
}

// Main execution
function main() {
  console.log('🔄 Starting LinkedIn data update...');
  
  // Create backup first
  backupCurrentData();
  
  // Update data
  const updatedPosts = updateLinkedInData();
  
  if (updatedPosts) {
    console.log('\n📝 Updated posts:');
    updatedPosts.forEach((post, index) => {
      console.log(`${index + 1}. ${post.content.substring(0, 60)}...`);
      console.log(`   📅 ${post.date} | 👍 ${post.likes} likes | 💬 ${post.comments} comments`);
    });
    
    console.log('\n✨ LinkedIn data update completed!');
    console.log('🔄 Remember to commit and deploy your changes');
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = {
  updateLinkedInData,
  backupCurrentData,
  manualLinkedInPosts
};
