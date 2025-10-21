// linkedin-image-fetcher.js
// Server-side script for automated LinkedIn image fetching
// Run with: node linkedin-image-fetcher.js

const puppeteer = require('puppeteer');
const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const teamMembers = [
  {
    name: "Nicholas Rasmussen",
    linkedinUrl: "https://www.linkedin.com/in/nicholas-rasmussen-022902174/",
    imageFileName: "nicholas-rasmussen.jpg"
  },
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

class LinkedInImageFetcher {
  constructor() {
    this.browser = null;
    this.outputDir = './public/images/team';
  }

  async initialize() {
    console.log('🚀 Starting LinkedIn Image Fetcher...');
    
    // Create output directory if it doesn't exist
    try {
      await fs.mkdir(this.outputDir, { recursive: true });
    } catch (error) {
      // Directory already exists
    }

    // Launch browser
    this.browser = await puppeteer.launch({
      headless: false, // Show browser for manual LinkedIn login if needed
      defaultViewport: { width: 1920, height: 1080 }
    });

    console.log('✅ Browser initialized');
  }

  async fetchProfileImage(member) {
    console.log(`📥 Fetching image for ${member.name}...`);
    
    const page = await this.browser.newPage();
    
    try {
      // Set user agent to avoid bot detection
      await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36');
      
      // Navigate to LinkedIn profile
      await page.goto(member.linkedinUrl, { waitUntil: 'networkidle2' });
      
      // Wait for profile image to load
      await page.waitForSelector('img[data-ghost-classes]', { timeout: 10000 });
      
      // Extract profile image URL
      const imageUrl = await page.evaluate(() => {
        const img = document.querySelector('img[data-ghost-classes]');
        return img ? img.src : null;
      });

      if (imageUrl && !imageUrl.includes('data:image')) {
        // Download and process image
        const response = await page.goto(imageUrl);
        const buffer = await response.buffer();
        
        // Process image with Sharp for high quality
        const processedBuffer = await sharp(buffer)
          .resize(800, 800, { 
            fit: 'cover',
            position: 'top' // Focus on face area
          })
          .jpeg({ 
            quality: 95,
            progressive: true 
          })
          .toBuffer();

        // Save image
        const filePath = path.join(this.outputDir, member.imageFileName);
        await fs.writeFile(filePath, processedBuffer);
        
        console.log(`✅ Saved: ${member.imageFileName}`);
        return true;
      } else {
        console.log(`❌ No image found for ${member.name}`);
        return false;
      }
      
    } catch (error) {
      console.log(`❌ Error fetching ${member.name}: ${error.message}`);
      return false;
    } finally {
      await page.close();
    }
  }

  async fetchAllImages() {
    console.log(`📋 Processing ${teamMembers.length} team members...`);
    
    const results = {
      success: 0,
      failed: 0,
      total: teamMembers.length
    };

    for (const member of teamMembers) {
      const success = await this.fetchProfileImage(member);
      if (success) {
        results.success++;
      } else {
        results.failed++;
      }
      
      // Add delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 2000));
    }

    return results;
  }

  async close() {
    if (this.browser) {
      await this.browser.close();
    }
  }
}

// Main execution
async function main() {
  const fetcher = new LinkedInImageFetcher();
  
  try {
    await fetcher.initialize();
    const results = await fetcher.fetchAllImages();
    
    console.log('\n📊 Results:');
    console.log(`✅ Successful: ${results.success}`);
    console.log(`❌ Failed: ${results.failed}`);
    console.log(`📊 Total: ${results.total}`);
    
  } catch (error) {
    console.error('💥 Fatal error:', error);
  } finally {
    await fetcher.close();
  }
}

// Run if called directly
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { LinkedInImageFetcher };
