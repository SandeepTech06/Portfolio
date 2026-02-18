# Quick Start - Next.js Migration

## Automated Migration (Recommended)

Run the migration script to automatically convert UI components:

```powershell
.\migrate.ps1
```

Then follow the steps printed by the script.

## Manual Migration Steps

### 1. Backup and Update Dependencies

```powershell
# Backup current package.json
Copy-Item package.json package.json.backup

# Use new Next.js package.json
Copy-Item package.json.next package.json -Force

# Clean install
Remove-Item -Recurse -Force node_modules, package-lock.json
npm install
```

### 2. Convert UI Components

Option A - Use the migration script (recommended):
```powershell
.\migrate.ps1
```

Option B - Manual conversion:
```powershell
# Create directory
New-Item -ItemType Directory -Force -Path "components/ui"

# Copy each file from src/components/ui/ to components/ui/
# Rename .tsx to .jsx
# Add 'use client' to files with hooks/events
# Remove TypeScript syntax
```

### 3. Start Development Server

```powershell
npm run dev
```

Visit http://localhost:3000

### 4. Test Everything

- [ ] Homepage loads
- [ ] Navigation works
- [ ] Theme toggle works
- [ ] All sections display correctly
- [ ] Mobile responsive
- [ ] Smooth scrolling

### 5. Build for Production

```powershell
npm run build
npm start
```

## File Structure After Migration

```
portfolio/
├── app/
│   ├── layout.js          # Root layout with providers
│   ├── page.js            # Home page (Server Component)
│   ├── globals.css        # Global styles
│   └── not-found.js       # 404 page
├── components/
│   ├── Navigation.js      # Navigation bar
│   ├── HeroSection.js     # Hero section
│   ├── AboutSection.js    # About section
│   ├── SkillsSection.js   # Skills section
│   ├── ProjectsSection.js # Projects section
│   ├── CertificatesSection.js # Certificates
│   ├── ContactSection.js  # Contact section
│   ├── Footer.js          # Footer
│   ├── BackToTop.js       # Back to top button
│   ├── LoadingSpinner.js  # Loading component
│   └── ui/                # Shadcn UI components (*.jsx)
├── contexts/
│   └── ThemeContext.js    # Theme provider
├── hooks/
│   ├── use-mobile.jsx     # Mobile hook
│   └── use-toast.js       # Toast hook
├── lib/
│   ├── portfolio.js       # Portfolio data fetcher
│   └── utils.js           # Utility functions
├── public/
│   ├── portfolio-data.json # Your portfolio data
│   └── robots.txt
├── next.config.js         # Next.js configuration
├── jsconfig.json          # Path aliases
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.mjs     # PostCSS configuration
└── package.json           # Dependencies
```

## Troubleshooting

### Error: Module not found
- Check `jsconfig.json` exists
- Restart dev server: `npm run dev`

### Error: "use client" needed
- Add `'use client'` at the top of the component file

### Error: localStorage/window not defined
- Wrap in `useEffect` or check `typeof window !== 'undefined'`

### UI components not working
- Ensure all files in `components/ui/` are converted to `.jsx`
- Check for remaining TypeScript syntax
- Ensure `'use client'` is added where needed

## What's Different?

### React Router → Next.js Routing
- No more `<BrowserRouter>`, `<Routes>`, `<Route>`
- Pages are file-based in the `app/` directory
- Navigation uses native `<a>` tags or Next.js `<Link>`

### Client vs Server Components
- Default: Server Components (faster, better SEO)
- Add `'use client'` for interactive components
- Server Components can't use hooks or browser APIs

### Data Fetching
- Old: `useEffect` + `fetch` on client
- New: `async` components fetch on server
- Faster initial load, better SEO

### TypeScript → JavaScript
- No more type annotations
- No more interfaces/types
- Cleaner, simpler code

## Deploy

### Vercel (Recommended)
1. Push to GitHub
2. Import to Vercel
3. Deploy automatically

### Other Platforms
- Netlify: Supports Next.js
- AWS/Azure: Use Docker or Node.js
- Static Export: `npm run build && npm run export`

## Need Help?

See `MIGRATION-GUIDE.md` for detailed information.
