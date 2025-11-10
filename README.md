# 🎨 Modern Portfolio Website

A professional, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Designed for **easy content management** - update your portfolio without editing any code!

## ✨ Features

- 🎯 **JSON-based content management** - Update everything from one file
- 📱 **Fully responsive** - Looks great on mobile, tablet, and desktop
- 🎨 **Modern design** - Clean, professional UI with smooth animations
- ⚡ **Fast performance** - Optimized with lazy loading and efficient rendering
- 🌙 **Professional color scheme** - Blue gradient with accent colors
- 📊 **Multiple sections** - Hero, About, Skills, Projects, Certificates, Contact
- 🔗 **Social links integration** - GitHub, LinkedIn, Twitter
- 📧 **Contact section** - Direct email links and contact information

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- A text editor (VS Code recommended)

### Installation

1. Clone or download this repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:8080`

## 📝 Updating Content

**All content is in one file: `public/portfolio-data.json`**

No coding required! Just edit the JSON file to update:
- Your name, title, and bio
- Skills and expertise
- Project showcase
- Contact information
- Social media links
- Certificates and achievements

📖 **Full guide:** See [CONTENT-EDITING-GUIDE.md](./CONTENT-EDITING-GUIDE.md) for detailed instructions.

### Quick Example

To change your name:
1. Open `public/portfolio-data.json`
2. Find the `"name"` field under `"personal"`
3. Change the value: `"name": "Your Name"`
4. Save and refresh your browser

## 📂 Project Structure

```
portfolio/
├── public/
│   ├── portfolio-data.json    # ← EDIT THIS FILE for content
│   └── robots.txt
├── src/
│   ├── components/            # UI components (no need to edit)
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── CertificatesSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   ├── lib/
│   │   └── portfolio.ts       # Data types
│   └── pages/
│       └── Index.tsx          # Main page
├── CONTENT-EDITING-GUIDE.md   # How to update content
└── README.md                  # This file
```

## 🖼️ Adding Your Own Images

### Profile Photo
1. Put your photo in the `public/` folder (e.g., `public/my-photo.jpg`)
2. Update `portfolio-data.json`:
   ```json
   "image": "/my-photo.jpg"
   ```

### Project Images
- Use external URLs (from Unsplash, your host, etc.)
- Or place in `public/` folder and reference as `/image-name.jpg`

## 🎨 Customization

### Colors
The design uses a professional blue/purple color scheme. To customize:
1. Open `src/index.css`
2. Modify the CSS variables under `:root` and `.dark`

### Sections
To hide a section (e.g., certificates):
1. Open `src/pages/Index.tsx`
2. Comment out or remove the component line:
   ```tsx
   {/* <CertificatesSection certificates={data.certificates} /> */}
   ```

## 📦 Building for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

Your site will be live in minutes! Vercel automatically:
- Builds your project
- Provides HTTPS
- Gives you a `.vercel.app` domain
- Automatically deploys when you push to GitHub

### Deploy to Netlify

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repo and deploy

### Deploy to Other Hosts

After running `npm run build`, upload the `dist/` folder to any static hosting:
- GitHub Pages
- Cloudflare Pages
- Firebase Hosting
- AWS S3 + CloudFront

## 🔧 Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run lint         # Check code quality
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Feel free to fork this project and customize it for your needs!

## 📄 License

This project is open source and available for personal and commercial use.

## 🆘 Troubleshooting

### Site shows "Failed to load portfolio data"
1. Check that `public/portfolio-data.json` exists
2. Validate your JSON at [jsonlint.com](https://jsonlint.com)
3. Make sure there are no syntax errors (missing commas, quotes, etc.)

### Images not showing
1. Check image URLs are correct
2. Make sure images in `public/` folder start with `/`
3. External URLs must start with `http://` or `https://`

### Changes not appearing
1. Save the file
2. Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
3. Clear browser cache if needed

## 📚 Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Shadcn UI** - Component library

---

**Made with ❤️ using React**

For detailed content editing instructions, see [CONTENT-EDITING-GUIDE.md](./CONTENT-EDITING-GUIDE.md)
