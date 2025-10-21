# Step-by-Step Image Collection Guide

## 🎯 Goal: Get high-resolution profile images for PhD students

### ✅ STEP 1: Nicholas Rasmussen (Has LinkedIn)
1. **Open this link**: https://www.linkedin.com/in/nicholas-rasmussen-022902174/
2. **Find his profile picture** (circular image on the left)
3. **Right-click the image** → "Open image in new tab"
4. **In the new tab**: Right-click → "Save image as..."
5. **Save as**: `nicholas-rasmussen.jpg`
6. **Move to**: `/Users/deepikanuthalapati/Downloads/AI_website-main 3/public/images/team/`

### 🔍 STEP 2: Find Other Students' Images

For Casey Wall, David Cortes, and Priyam Pandey, try these sources:

#### Option A: University Directory
- Check USD Computer Science department website
- Look for PhD student listings
- Search for their names in university directories

#### Option B: Research Profiles  
- Google Scholar: `"Casey Wall" "University of South Dakota"`
- ResearchGate: Search their names
- Conference websites where they might have presented

#### Option C: Social Media (Professional)
- Twitter/X professional profiles
- Academic personal websites
- GitHub profiles (sometimes have photos)

### 📁 Required File Names:
```
nicholas-rasmussen.jpg  ✅ (Get from LinkedIn)
casey-wall.jpg         🔍 (Need to find)  
david-cortes.jpg       🔍 (Need to find)
priyam-pandey.jpg      🔍 (Need to find)
```

### 🖼️ Image Requirements:
- **Size**: At least 400x400 pixels (larger is better)
- **Format**: JPG or PNG
- **Quality**: Professional headshot preferred
- **Content**: Clear face photo, preferably square aspect ratio

### 📂 Where to Place Images:
All images should go in:
```
/Users/deepikanuthalapati/Downloads/AI_website-main 3/public/images/team/
```

### 🔄 After Adding Images:
1. Refresh your website
2. The PersonCard component will automatically show the images
3. No code changes needed - it will detect the new files

### ⚡ Quick Test:
After adding an image, you can test if it's working by visiting:
```
http://localhost:5173/AILab/images/team/nicholas-rasmussen.jpg
```
(Replace with actual filename)

## 🚨 Important Notes:
- **Respect privacy**: Only use publicly available professional photos
- **High quality**: Larger images look better when cropped to circles
- **Professional appearance**: Academic/professional headshots work best
- **Fallback system**: If no image is found, the red initials will continue to show
