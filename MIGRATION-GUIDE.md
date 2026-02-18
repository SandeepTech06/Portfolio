# Next.js Migration Guide

This project has been migrated from React + Vite + TypeScript to Next.js 14 with JavaScript.

## What's Changed

### Project Structure
```
Old Structure (React + Vite):
- src/
  - components/
  - pages/
  - contexts/
  - lib/

New Structure (Next.js):
- app/
  - layout.js (Root layout with providers)
  - page.js (Home page)
  - globals.css
  - not-found.js
- components/
- contexts/
- lib/
- public/
```

### Key Changes

1. **Routing**: React Router → Next.js App Router
2. **Language**: TypeScript → JavaScript
3. **Data Fetching**: Client-side fetch → Server Components
4. **Config**: Vite config → Next.js config

## Migration Steps

### 1. Install Dependencies

First, backup your current `package.json`, then replace it:

```bash
# Backup old package.json
copy package.json package.json.backup

# Replace with new Next.js package.json
copy package.json.next package.json

# Remove old dependencies and install new ones
rm -rf node_modules package-lock.json
npm install
```

### 2. Copy UI Components

The UI components from `src/components/ui/` need to be copied to `components/ui/`.

**Important**: The UI components need to be converted from TypeScript to JavaScript. For each file:

1. Rename `.tsx` to `.jsx`
2. Remove type annotations
3. Add `'use client'` directive if the component uses hooks or browser APIs

You can use this PowerShell script to convert them:

```powershell
# Create components/ui directory
New-Item -ItemType Directory -Force -Path "components/ui"

# Copy and rename files
Get-ChildItem "src/components/ui/*.tsx" | ForEach-Object {
    $newName = $_.Name -replace '\.tsx$', '.jsx'
    $content = Get-Content $_.FullName -Raw
    
    # Add 'use client' if needed (files with useState, useEffect, etc.)
    if ($content -match 'use(State|Effect|Context|Ref|Callback|Memo|Reducer|Id|LayoutEffect|ImperativeHandle|DebugValue)') {
        $content = "'use client'`n`n" + $content
    }
    
    # Remove type annotations (basic)
    $content = $content -replace ': React\..*?(?=[,\)\{])', ''
    $content = $content -replace '<.*?>', ''
    $content = $content -replace 'interface .*?\{[^}]*\}', ''
    $content = $content -replace 'type .*?=.*?(?=\n|$)', ''
    
    Set-Content -Path "components/ui/$newName" -Value $content
}
```

### 3. Manual Steps for UI Components

Due to the complexity of the UI components, you may need to manually convert some files. Here's a checklist:

- [ ] Copy all files from `src/components/ui/` to `components/ui/`
- [ ] Rename all `.tsx` files to `.jsx`
- [ ] Remove TypeScript-specific code:
  - Remove `import type` statements
  - Remove type annotations (`: Type`)
  - Remove generic parameters (`<Type>`)
  - Remove interface definitions or convert to JSDoc comments
- [ ] Add `'use client'` directive to components that use:
  - React hooks (useState, useEffect, etc.)
  - Browser APIs (window, document, etc.)
  - Event handlers

### 4. Update Configuration Files

Replace the following files:

- ✅ `tailwind.config.ts` → `tailwind.config.js` (already created)
- ✅ `tsconfig.json` → `jsconfig.json` (already created)
- ✅ `next.config.js` (already created)
- ✅ `package.json` (use package.json.next)

### 5. Clean Up Old Files

After migration is complete and tested, you can remove:

```bash
# Old configuration files
rm vite.config.ts
rm tsconfig.app.json
rm tsconfig.node.json
rm eslint.config.js
rm tailwind.config.ts
rm tsconfig.json

# Old source directory (after copying components)
# Be careful with this! Make sure everything is copied first
# rm -rf src/

# Old index.html (Next.js generates this)
rm index.html

# Backup file
rm package.json.backup
```

### 6. Environment Variables

If you have environment variables, rename them:
- `.env.local` variables should be prefixed with `NEXT_PUBLIC_` for client-side access

### 7. Run Development Server

```bash
npm run dev
```

Your site should now be running at `http://localhost:3000`

## Important Notes

### Server vs Client Components

Next.js 14 uses Server Components by default. Components that use:
- React hooks (useState, useEffect, etc.)
- Browser APIs (window, document, localStorage, etc.)
- Event handlers (onClick, onChange, etc.)

Must have `'use client'` at the top of the file.

Already marked as client components:
- ✅ Navigation.js
- ✅ HeroSection.js
- ✅ BackToTop.js
- ✅ ThemeContext.js
- All components/ui/* files (need to be copied and marked)

Server components (no 'use client' needed):
- ✅ AboutSection.js
- ✅ SkillsSection.js
- ✅ ProjectsSection.js
- ✅ CertificatesSection.js
- ✅ ContactSection.js
- ✅ Footer.js
- ✅ app/layout.js
- ✅ app/page.js

### Data Fetching

The main page (`app/page.js`) now uses Server Side Rendering. The portfolio data is fetched on the server, which means:
- Faster initial page load
- Better SEO
- No loading spinner needed
- Data is ready before the page renders

### Styling

- CSS modules work the same way
- Global styles are in `app/globals.css`
- Tailwind CSS configuration is in `tailwind.config.js`

## Testing Checklist

After migration, test:

- [ ] Home page loads correctly
- [ ] All sections visible (Hero, About, Skills, Projects, Certificates, Contact)
- [ ] Navigation works (smooth scrolling)
- [ ] Theme toggle works (light/dark mode)
- [ ] Mobile menu works
- [ ] Back to top button appears on scroll
- [ ] All links work
- [ ] Images load correctly
- [ ] Responsive design works on all screen sizes

## Build for Production

```bash
npm run build
npm start
```

## Deploy

Next.js works great with Vercel (zero-config), but also supports:
- Netlify
- AWS
- Azure
- Docker
- Traditional Node.js hosting

## Troubleshooting

### Issue: "Module not found: Can't resolve '@/components/...'"
**Solution**: Make sure `jsconfig.json` exists with the path mappings.

### Issue: "You're importing a component that needs X. It only works in a Client Component..."
**Solution**: Add `'use client'` at the top of the component file.

### Issue: "localStorage is not defined"
**Solution**: The component needs to be a Client Component with `'use client'`, and localStorage access should be wrapped in `useEffect` or checked with `typeof window !== 'undefined'`.

### Issue: Styles not applying
**Solution**: 
1. Make sure `tailwind.config.js` includes the correct content paths
2. Run `npm run dev` again
3. Clear `.next` folder and rebuild

## Need Help?

- Next.js Documentation: https://nextjs.org/docs
- Next.js Examples: https://github.com/vercel/next.js/tree/canary/examples

## Migration Completed! 🎉

Your portfolio is now running on Next.js with improved performance, better SEO, and modern React Server Components!
