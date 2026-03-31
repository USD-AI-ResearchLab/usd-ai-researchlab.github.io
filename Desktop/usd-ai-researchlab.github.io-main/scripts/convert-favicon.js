import sharp from 'sharp';
import fs from 'fs';

async function convertFavicon() {
  try {
    // Read the SVG file
    const svgBuffer = fs.readFileSync('public/favicon.svg');
    
    // Convert to PNG with transparent background
    await sharp(svgBuffer)
      .resize(32, 32)
      .png({ quality: 100 })
      .toFile('favicon-32x32.png');
    
    // Also create a 16x16 version
    await sharp(svgBuffer)
      .resize(16, 16)
      .png({ quality: 100 })
      .toFile('favicon-16x16.png');
    
    console.log('PNG favicons created successfully!');
  } catch (error) {
    console.error('Error converting favicon:', error);
  }
}

convertFavicon();
