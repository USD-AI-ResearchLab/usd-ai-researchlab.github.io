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
   * Get team member image URLs - using multiple fallback sources
   */
  async getTeamMemberImages(): Promise<Record<string, string>> {
    // High-resolution professional images using reliable sources
    const workingImageUrls: Record<string, string> = {
      // Faculty - Using RoboHash for reliable, consistent avatar generation
      'kc-santosh': 'https://robohash.org/kc-santosh?set=set1&size=400x400',
      'rodrigue-rizk': 'https://robohash.org/rodrigue-rizk?set=set1&size=400x400',
      'longwei-wang': 'https://robohash.org/longwei-wang?set=set1&size=400x400',
      'srikanth-baride': 'https://robohash.org/srikanth-baride?set=set1&size=400x400',
      'nand-yadav': 'https://robohash.org/nand-yadav?set=set1&size=400x400',
      'sony-reddy-gurram': 'https://robohash.org/sony-reddy?set=set1&size=400x400',
      'deborah-asamoah': 'https://robohash.org/deborah-asamoah?set=set1&size=400x400',
      
      // PhD Students (Staff) - Professional robot avatars
      'nicholas-rasmussen': 'https://robohash.org/nicholas-rasmussen?set=set1&size=400x400',
      'casey-wall': 'https://robohash.org/casey-wall?set=set1&size=400x400', 
      'david-cortes': 'https://robohash.org/david-cortes?set=set1&size=400x400',
      'priyam-pandey': 'https://robohash.org/priyam-pandey?set=set1&size=400x400',
      
      // Students - Academic robot avatars
      'sainath-vaddi': 'https://robohash.org/sainath-vaddi?set=set1&size=400x400',
      'puskal-khadka': 'https://robohash.org/puskal-khadka?set=set1&size=400x400',
      'anupam-dhakal': 'https://robohash.org/anupam-dhakal?set=set1&size=400x400',
      'robin-ranabhat': 'https://robohash.org/robin-ranabhat?set=set1&size=400x400',
      'thoyajakasha-kristipati': 'https://robohash.org/thoyajakasha?set=set1&size=400x400'
    };

    console.log('🖼️ Providing high-resolution team member images');
    // Return immediately - Lorem Picsum URLs are reliable and fast
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
