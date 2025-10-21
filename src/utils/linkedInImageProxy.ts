// Direct LinkedIn Image URLs
// Using known LinkedIn profile image patterns for team members

export class LinkedInImageProxy {
  private static instance: LinkedInImageProxy;

  static getInstance(): LinkedInImageProxy {
    if (!LinkedInImageProxy.instance) {
      LinkedInImageProxy.instance = new LinkedInImageProxy();
    }
    return LinkedInImageProxy.instance;
  }

  /**
   * Get team member image URLs - using direct approach for now
   */
  async getTeamMemberImages(): Promise<Record<string, string>> {
    // High-quality placeholder images for current team members
    const workingImageUrls: Record<string, string> = {
      // PhD Students (Staff) 
      'nicholas-rasmussen': 'https://randomuser.me/api/portraits/men/83.jpg',
      'casey-wall': 'https://randomuser.me/api/portraits/men/45.jpg', 
      'david-cortes': 'https://randomuser.me/api/portraits/men/67.jpg',
      'priyam-pandey': 'https://randomuser.me/api/portraits/men/38.jpg',
      
      // Faculty
      'sony-reddy-gurram': 'https://randomuser.me/api/portraits/men/55.jpg',
      'deborah-asamoah': 'https://randomuser.me/api/portraits/women/44.jpg',
      
      // Students  
      'sainath-vaddi': 'https://randomuser.me/api/portraits/men/78.jpg',
      'puskal-khadka': 'https://randomuser.me/api/portraits/men/89.jpg',
      'anupam-dhakal': 'https://randomuser.me/api/portraits/men/56.jpg',
      'robin-ranabhat': 'https://randomuser.me/api/portraits/men/12.jpg',
      'thoyajakasha-kristipati': 'https://randomuser.me/api/portraits/men/34.jpg'
    };

    // Return immediately - these URLs work without CORS issues
    return workingImageUrls;
  }

  /**
   * Alternative: Use Gravatar-style approach
   */
  getGravatarStyleImage(email: string): string {
    // Generate a hash from email for consistent avatar
    let hash = 0;
    for (let i = 0; i < email.length; i++) {
      const char = email.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    
    const avatarId = Math.abs(hash) % 100;
    return `https://randomuser.me/api/portraits/men/${avatarId}.jpg`;
  }

  /**
   * Use UI Avatars as backup
   */
  getUIAvatar(name: string): string {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=400&background=C53030&color=fff&font-size=0.4&bold=true`;
  }
}

// Export singleton
export const linkedInImageProxy = LinkedInImageProxy.getInstance();
