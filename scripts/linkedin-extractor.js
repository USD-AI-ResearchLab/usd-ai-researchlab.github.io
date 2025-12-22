// Chrome Extension Content Script to extract LinkedIn posts
// This runs on the LinkedIn page to extract post data

(function() {
  'use strict';
  
  // Function to extract posts from LinkedIn company page
  function extractLinkedInPosts() {
    const posts = [];
    const postElements = document.querySelectorAll('.feed-shared-update-v2');
    
    postElements.forEach((post, index) => {
      if (index >= 10) return; // Limit to 10 posts
      
      try {
        // Extract content
        const contentElement = post.querySelector('.feed-shared-text') || 
                             post.querySelector('.feed-shared-update-v2__description');
        const content = contentElement ? 
          contentElement.innerText.trim() : 
          'LinkedIn post content';
        
        // Extract author
        const authorElement = post.querySelector('.feed-shared-actor__name');
        const author = authorElement ? 
          authorElement.innerText.trim() : 
          'USD AI Research';
        
        // Extract time
        const timeElement = post.querySelector('.feed-shared-actor__sub-description time');
        const timeText = timeElement ? 
          timeElement.getAttribute('datetime') || timeElement.innerText.trim() : 
          new Date().toISOString();
        
        // Extract engagement metrics
        const reactionElement = post.querySelector('.social-counts-reactions__count');
        const likes = reactionElement ? 
          parseInt(reactionElement.innerText.replace(/[,\s]/g, '')) || 0 : 
          0;
        
        const commentElement = post.querySelector('.social-counts-comments .social-counts__count');
        const comments = commentElement ? 
          parseInt(commentElement.innerText.replace(/[,\s]/g, '')) || 0 : 
          0;
        
        // Extract post URL
        const linkElement = post.querySelector('.feed-shared-control-menu__trigger') || 
                           post.querySelector('a[href*="/feed/update/"]');
        const postUrl = linkElement ? 
          linkElement.getAttribute('href') : 
          '';
        
        posts.push({
          id: `extension-${Date.now()}-${index}`,
          content: content,
          author: author,
          date: timeText,
          likes: likes,
          comments: comments,
          shares: 0, // LinkedIn doesn't easily expose share counts
          url: postUrl,
          extractedAt: new Date().toISOString()
        });
        
      } catch (error) {
        console.warn('Error extracting post:', error);
      }
    });
    
    return posts;
  }
  
  // Function to extract company profile information
  function extractCompanyProfile() {
    try {
      const nameElement = document.querySelector('.org-top-card-summary__title') ||
                         document.querySelector('.organization-outlet__name');
      const name = nameElement ? nameElement.innerText.trim() : 'USD AI Research';
      
      const followersElement = document.querySelector('.org-top-card-summary__followers-count');
      const followers = followersElement ? followersElement.innerText.trim() : '4.0k followers';
      
      const descriptionElement = document.querySelector('.org-top-card-summary__tagline') ||
                               document.querySelector('.organization-outlet__description');
      const description = descriptionElement ? 
        descriptionElement.innerText.trim() : 
        'Research: Artificial Intelligence and Machine Learning';
      
      return {
        name,
        followers,
        description,
        established: 'EST 2015'
      };
    } catch (error) {
      console.warn('Error extracting profile:', error);
      return {
        name: 'USD AI Research',
        followers: '4.0k followers', 
        description: 'Research: Artificial Intelligence and Machine Learning',
        established: 'EST 2015'
      };
    }
  }
  
  // Main extraction function
  function extractAllData() {
    const posts = extractLinkedInPosts();
    const profile = extractCompanyProfile();
    
    const data = {
      posts,
      profile,
      extractedAt: new Date().toISOString(),
      url: window.location.href
    };
    
    // Send data to your website
    fetch('YOUR_WEBSITE_ENDPOINT/api/linkedin/receive', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }).then(response => {
      console.log('LinkedIn data sent successfully');
    }).catch(error => {
      console.error('Failed to send LinkedIn data:', error);
      
      // Fallback: save to localStorage
      localStorage.setItem('linkedinData', JSON.stringify(data));
    });
    
    return data;
  }
  
  // Auto-extract when page loads
  if (window.location.href.includes('linkedin.com/company/kc-ai')) {
    setTimeout(() => {
      console.log('Extracting LinkedIn data...');
      const data = extractAllData();
      console.log('Extracted data:', data);
    }, 3000); // Wait for page to load
  }
  
  // Expose functions globally for manual triggering
  window.linkedinExtractor = {
    extractPosts: extractLinkedInPosts,
    extractProfile: extractCompanyProfile,
    extractAll: extractAllData
  };
  
})();
