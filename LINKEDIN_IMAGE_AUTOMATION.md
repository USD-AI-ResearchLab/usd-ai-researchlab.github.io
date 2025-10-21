# LinkedIn Profile Image Automation

This system helps manage LinkedIn profile images for the AI Research Lab website with both manual and automated options.

## 🚨 Important Note

LinkedIn has strict policies that prevent direct API access to profile images. This system provides both manual and semi-automated approaches that respect LinkedIn's terms of service.

## 🛠️ Setup Options

### Option 1: Manual Download (Recommended)

1. **Use the Image Manager Component**:
   ```tsx
   import ImageManager from './components/ImageManager';
   // Add <ImageManager /> to your admin page
   ```

2. **Follow the guided instructions** in the component to manually download images

### Option 2: Semi-Automated (Advanced Users)

1. **Install Dependencies**:
   ```bash
   npm install puppeteer sharp
   ```

2. **Run the Automation Script**:
   ```bash
   node linkedin-image-fetcher.js
   ```

3. **The script will**:
   - Open browser windows for each LinkedIn profile
   - Allow manual login if needed
   - Automatically download and optimize images
   - Save high-quality images to `/public/images/team/`

## 📋 Team Members with LinkedIn Profiles

### PhD Students
- **Nicholas Rasmussen**: https://www.linkedin.com/in/nicholas-rasmussen-022902174/

### Masters Students  
- **Sony Reddy Gurram**: https://linkedin.com/in/sony-reddy-gurram-715450229
- **Sainath Vaddi**: https://linkedin.com/in/vaddi-sainath-146b911a3
- **Puskal Khadka**: https://www.linkedin.com/in/puskal-khadka-910971188/
- **Deborah Asamoah**: https://www.linkedin.com/in/deborah-asamoah/
- **Anupam Dhakal**: https://www.linkedin.com/in/anupamdkl/
- **Robin Narsingh Ranabhat**: https://www.linkedin.com/in/robinranabhat/
- **Thoyajakasha Kashyap Kristipati**: https://www.linkedin.com/in/thoyajaksha-kashyap-kristipati/

## 🖼️ Image Requirements

### Quality Standards
- **Resolution**: Minimum 400x400px (800x800px preferred)
- **Format**: JPG (optimized to ~100KB per image)
- **Quality**: Professional headshot/portrait
- **Positioning**: Face-focused (system automatically crops to face area)

### File Naming Convention
```
firstname-lastname.jpg
```

Examples:
- `sony-reddy-gurram.jpg`
- `nicholas-rasmussen.jpg`
- `deborah-asamoah.jpg`

## 🔄 Auto-Update System

### Manual Refresh
1. Use the ImageManager component
2. Click "Refresh Status" to check for missing images
3. Follow guided instructions for missing images

### Automated Monitoring
```bash
# Set up a monthly cron job
0 0 1 * * node /path/to/linkedin-image-fetcher.js
```

### Update Detection
The system automatically:
- ✅ Detects missing images
- ✅ Provides download guidance  
- ✅ Shows status dashboard
- ✅ Handles image fallbacks (shows initials for missing images)

## 🎯 Features

### Smart Image Processing
- **Face-focused cropping**: `object-position: center 25%`
- **High-quality optimization**: Sharp.js processing
- **Consistent sizing**: 800x800px output
- **Progressive JPEG**: Fast loading

### Fallback System
- **Missing images**: Shows styled initials in logo red
- **Error handling**: Graceful degradation
- **Real-time status**: Live image availability checking

### User Experience
- **Professional appearance**: Circular profile images
- **Consistent branding**: Logo red color scheme
- **Responsive design**: Works on all devices
- **Fast loading**: Optimized images and Progressive JPEGs

## 📁 File Structure

```
/public/images/team/
├── Faculty (✅ Complete)
│   ├── kc-profile.jpg
│   ├── rod.jpg  
│   ├── wang.jpeg
│   ├── srikant.jpg
│   └── nand.jpg
├── PhD Students (🔄 In Progress)
│   └── nicholas-rasmussen.jpg
└── Masters Students (🔄 In Progress)
    ├── sony-reddy-gurram.jpg
    ├── sainath-vaddi.jpg
    ├── puskal-khadka.jpg
    ├── deborah-asamoah.jpg
    ├── anupam-dhakal.jpg
    ├── robin-ranabhat.jpg
    └── thoyajakasha-kristipati.jpg
```

## 🔐 Privacy & Legal

- **Respects LinkedIn ToS**: No unauthorized scraping
- **Manual download**: User-initiated image saving
- **Professional use**: Academic/research website
- **Public profiles only**: Only processes public LinkedIn profiles

## 🚀 Next Steps

1. **Add ImageManager component** to your admin interface
2. **Download missing images** using the guided interface  
3. **Set up monitoring** for future updates
4. **Consider automation** for regular updates (monthly)

## 📞 Support

For technical issues or questions:
- Check the ImageManager component for real-time status
- Review the console logs in the automation script
- Ensure all LinkedIn URLs are accessible and public
