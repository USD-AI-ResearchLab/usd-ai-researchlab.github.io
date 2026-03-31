// Simple test to check if scraping works
const puppeteer = require('puppeteer');

console.log('Starting LinkedIn scraper test...');

async function testScraping() {
  try {
    console.log('Launching browser...');
    const browser = await puppeteer.launch({ 
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    console.log('Browser launched successfully!');
    const page = await browser.newPage();
    
    console.log('Navigating to LinkedIn...');
    await page.goto('https://www.linkedin.com/company/kc-ai/posts/?feedView=all', { 
      waitUntil: 'domcontentloaded',
      timeout: 15000
    });
    
    console.log('Page loaded, extracting basic info...');
    const title = await page.title();
    console.log('Page title:', title);
    
    await browser.close();
    console.log('Test completed successfully!');
    
    return { success: true, title };
  } catch (error) {
    console.error('Test failed:', error.message);
    return { success: false, error: error.message };
  }
}

testScraping();
