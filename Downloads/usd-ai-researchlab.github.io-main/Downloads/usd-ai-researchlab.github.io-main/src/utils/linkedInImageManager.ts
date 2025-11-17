// LinkedIn Profile Image Manager
// This utility helps manage LinkedIn profile images for team members

interface TeamMember {
  name: string;
  linkedinUrl: string;
  imageFileName: string;
  lastUpdated?: string;
}

export class LinkedInImageManager {
  private teamMembers: TeamMember[] = [
    // PhD Students
    {
      name: "Nicholas Rasmussen",
      linkedinUrl: "https://www.linkedin.com/in/nicholas-rasmussen-022902174/",
      imageFileName: "nicholas-rasmussen.jpg"
    },
    // Masters Students
    {
      name: "Sony Reddy Gurram",
      linkedinUrl: "https://linkedin.com/in/sony-reddy-gurram-715450229",
      imageFileName: "sony-reddy-gurram.jpg"
    },
    {
      name: "Sainath Vaddi",
      linkedinUrl: "https://linkedin.com/in/vaddi-sainath-146b911a3",
      imageFileName: "sainath-vaddi.jpg"
    },
    {
      name: "Puskal Khadka",
      linkedinUrl: "https://www.linkedin.com/in/puskal-khadka-910971188/",
      imageFileName: "puskal-khadka.jpg"
    },
    {
      name: "Deborah Asamoah",
      linkedinUrl: "https://www.linkedin.com/in/deborah-asamoah/",
      imageFileName: "deborah-asamoah.jpg"
    },
    {
      name: "Anupam Dhakal",
      linkedinUrl: "https://www.linkedin.com/in/anupamdkl/",
      imageFileName: "anupam-dhakal.jpg"
    },
    {
      name: "Robin Narsingh Ranabhat",
      linkedinUrl: "https://www.linkedin.com/in/robinranabhat/",
      imageFileName: "robin-ranabhat.jpg"
    },
    {
      name: "Thoyajakasha Kashyap Kristipati",
      linkedinUrl: "https://www.linkedin.com/in/thoyajaksha-kashyap-kristipati/",
      imageFileName: "thoyajakasha-kristipati.jpg"
    }
  ];

  /**
   * Get list of team members with LinkedIn profiles
   */
  getTeamMembers(): TeamMember[] {
    return this.teamMembers;
  }

  /**
   * Generate download instructions for manual image collection
   */
  generateDownloadInstructions(): string {
    const instructions = this.teamMembers.map(member => 
      `## ${member.name}
1. Visit: ${member.linkedinUrl}
2. Right-click profile picture → "Open image in new tab"
3. Right-click opened image → "Save image as..."
4. Save as: ${member.imageFileName}
5. Place in: /public/images/team/${member.imageFileName}
`).join('\n');

    return `# LinkedIn Profile Image Download Instructions

${instructions}

## Automation Script (Node.js - for server-side use only)
\`\`\`bash
# Install dependencies
npm install puppeteer sharp

# Run the image fetcher script
node linkedin-image-fetcher.js
\`\`\`

## Notes:
- Due to LinkedIn's security policies, direct browser access is not possible
- Manual download ensures highest quality and respects privacy
- Consider setting up a scheduled task to check for updates monthly
`;
  }

  /**
   * Check if image exists locally
   */
  async checkImageExists(fileName: string): Promise<boolean> {
    try {
      const response = await fetch(`/AILab/images/team/${fileName}`);
      return response.ok;
    } catch {
      return false;
    }
  }

  /**
   * Get missing images list
   */
  async getMissingImages(): Promise<TeamMember[]> {
    const missing: TeamMember[] = [];
    
    for (const member of this.teamMembers) {
      const exists = await this.checkImageExists(member.imageFileName);
      if (!exists) {
        missing.push(member);
      }
    }
    
    return missing;
  }

  /**
   * Generate batch download script for automation tools
   */
  generateAutomationScript(): string {
    return `#!/bin/bash
# LinkedIn Image Batch Downloader
# Requires manual execution due to LinkedIn security

echo "LinkedIn Profile Image Downloader"
echo "================================="

${this.teamMembers.map(member => `
echo "Downloading ${member.name}..."
echo "Visit: ${member.linkedinUrl}"
echo "Save as: ${member.imageFileName}"
echo "Press Enter when ready for next..."
read
`).join('')}

echo "All images downloaded!"
echo "Place all images in: /public/images/team/"
`;
  }
}

// Export singleton instance
export const linkedInImageManager = new LinkedInImageManager();
