# 📝 Content Editing Guide

This guide explains how to update your portfolio content **without touching any code**.

## 🎯 Quick Start

All your portfolio content lives in **one file**: `public/portfolio-data.json`

To update your portfolio:
1. Open `public/portfolio-data.json`
2. Edit the text, links, or images you want to change
3. Save the file
4. Refresh your browser to see changes

## 📋 What You Can Edit

### Personal Information
```json
"personal": {
  "name": "Your Name Here",
  "title": "Your Job Title",
  "bio": "Your longer biography...",
  "shortIntro": "A short tagline about you",
  "email": "your.email@example.com",
  "phone": "+1 (555) 123-4567",
  "location": "Your City, State",
  "image": "/path-to-your-photo.jpg"
}
```

**Tips:**
- `name`: Your full name
- `title`: Your professional title (e.g., "Full Stack Developer")
- `bio`: 2-3 sentences about your experience (shows in About section)
- `shortIntro`: One-line description (shows on hero/homepage)
- `image`: Path to your profile photo (put image in `public/` folder)

### Social Links
```json
"social": {
  "github": "https://github.com/yourusername",
  "linkedin": "https://linkedin.com/in/yourusername",
  "twitter": "https://twitter.com/yourusername"
}
```

**Tips:**
- Replace `yourusername` with your actual profile names
- Twitter is optional - remove the line if you don't want it shown

### Skills
```json
"skills": [
  {
    "title": "Skill Category Name",
    "description": "Technologies you know",
    "icon": "Code2"
  }
]
```

**Available Icons:**
- `Code2` - For programming/coding
- `Database` - For databases
- `Layout` - For design/UI
- `Rocket` - For DevOps/deployment
- `Palette` - For design systems
- `Zap` - For performance
- `Briefcase` - For business skills
- `Smartphone` - For mobile development

**To add more skills:**
1. Copy one skill block (from `{` to `}`)
2. Paste it after the last skill
3. Add a comma `,` after the previous skill
4. Update the title, description, and icon

### Projects
```json
"projects": [
  {
    "title": "Project Name",
    "description": "What this project does",
    "image": "https://image-url.com/project.jpg",
    "tags": ["React", "TypeScript", "API"],
    "liveUrl": "https://your-live-site.com",
    "githubUrl": "https://github.com/you/project"
  }
]
```

**Tips:**
- `image`: Use a URL or put image in `public/` folder
- `tags`: List of technologies used (add/remove as needed)
- `liveUrl`: Link to the working project
- `githubUrl`: Link to source code

**To add more projects:**
1. Copy one project block
2. Paste it and add a comma before it
3. Update all the details

### Certificates
```json
"certificates": [
  {
    "title": "Certificate Name",
    "issuer": "Who gave you the certificate",
    "date": "2023"
  }
]
```

**To add certificates:**
1. Copy a certificate block
2. Paste and add a comma
3. Update the details

## 🖼️ Adding Images

### Option 1: Use Your Own Images
1. Put your image file in the `public/` folder (e.g., `public/my-photo.jpg`)
2. Reference it in JSON as: `"/my-photo.jpg"`

### Option 2: Use External URLs
Just paste the full URL: `"https://example.com/image.jpg"`

**Image recommendations:**
- Profile photo: 500x500px or square
- Project images: 800x500px (landscape)
- Use JPG for photos, PNG for graphics

## ❌ Common Mistakes to Avoid

1. **Missing Commas**: Every item except the last needs a comma
   ```json
   // ❌ WRONG
   { "title": "Item 1" }
   { "title": "Item 2" }
   
   // ✅ CORRECT
   { "title": "Item 1" },
   { "title": "Item 2" }
   ```

2. **Extra Comma at End**: Don't add comma after last item
   ```json
   // ❌ WRONG
   { "title": "Last Item" },
   
   // ✅ CORRECT
   { "title": "Last Item" }
   ```

3. **Quotes**: Always use double quotes `"`, not single `'`

4. **URLs**: Must start with `http://` or `https://`

## 🔍 Testing Your Changes

1. Save `portfolio-data.json`
2. Refresh your browser
3. Check the developer console (F12) for errors if something looks wrong

## 🆘 Getting Help

If the site shows "Failed to load portfolio data":
1. Go to [JSONLint](https://jsonlint.com/)
2. Copy your entire `portfolio-data.json` file
3. Paste it there to check for errors
4. Fix any errors it finds

## 📱 Preview Before Publishing

Changes are instant in development mode. Just refresh your browser after saving the JSON file.

---

**Remember:** You're only editing the content file - the website code handles everything else automatically!
