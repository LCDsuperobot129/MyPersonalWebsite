# 🚀 Deployment Guide

Complete guide to deploying your portfolio to various platforms.

## 📋 Pre-Deployment Checklist

- [ ] All personal information updated
- [ ] Resume PDF added to `/public`
- [ ] Project images added (or placeholders removed)
- [ ] Social media links updated
- [ ] Test build runs successfully (`npm run build`)
- [ ] No TypeScript/ESLint errors
- [ ] Tested on mobile/tablet/desktop
- [ ] SEO metadata updated in `layout.tsx`

## ☁️ Deploy to Vercel (Recommended)

**Best for**: Next.js projects (built by the creators of Next.js)

### Method 1: GitHub Integration (Easiest)

1. **Push to GitHub**:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/your-portfolio.git
git push -u origin main
```

2. **Connect to Vercel**:
- Go to [vercel.com](https://vercel.com)
- Click "Add New Project"
- Import your GitHub repository
- Vercel auto-detects Next.js settings
- Click "Deploy"

3. **Done!** Your site is live at `your-project.vercel.app`

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow prompts and deploy
```

### Custom Domain on Vercel

1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records at your registrar:
   - Type: CNAME
   - Name: www
   - Value: cname.vercel-dns.com

## 🌐 Deploy to Netlify

**Best for**: Simple deployment with great free tier

### Method 1: Git Integration

1. **Push to GitHub** (see Vercel instructions)

2. **Connect to Netlify**:
- Go to [netlify.com](https://netlify.com)
- Click "Add new site" → "Import existing project"
- Connect to GitHub
- Select your repository

3. **Build Settings**:
```
Build command: npm run build
Publish directory: .next
```

4. **Deploy!**

### Method 2: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build your site
npm run build

# Deploy
netlify deploy --prod
```

### Custom Domain on Netlify

1. Go to Site Settings → Domain Management
2. Add custom domain
3. Follow DNS configuration instructions

## 🔷 Deploy to Azure Static Web Apps

1. **Create Static Web App** in Azure Portal

2. **Configure Build**:
```yaml
# .github/workflows/azure-static-web-apps.yml
app_location: "/"
api_location: ""
output_location: ".next"
```

3. **Build Command**:
```bash
npm run build
```

## 🟠 Deploy to AWS Amplify

1. **Open AWS Amplify Console**

2. **Connect Repository**:
- Choose GitHub
- Select repository
- Choose branch

3. **Build Settings**:
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm install
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

## 🐙 Deploy to GitHub Pages

**Note**: Requires additional configuration for Next.js

1. **Install next-export-optimize-images**:
```bash
npm install next-export-optimize-images
```

2. **Update next.config.js**:
```javascript
module.exports = {
  output: 'export',
  basePath: '/your-repo-name',
  images: {
    unoptimized: true,
  },
}
```

3. **Add deploy script** to `package.json`:
```json
{
  "scripts": {
    "deploy": "next build && next export && touch out/.nojekyll && git add out/ && git commit -m 'Deploy' && git subtree push --prefix out origin gh-pages"
  }
}
```

4. **Deploy**:
```bash
npm run deploy
```

## 🐳 Deploy with Docker

### Dockerfile

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]
```

### Docker Compose

```yaml
version: '3.8'
services:
  portfolio:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
```

### Deploy

```bash
docker build -t my-portfolio .
docker run -p 3000:3000 my-portfolio
```

## 🔧 Environment Variables

If you add environment variables later:

### Vercel
1. Project Settings → Environment Variables
2. Add variables
3. Redeploy

### Netlify
1. Site Settings → Build & Deploy → Environment
2. Add variables
3. Trigger deploy

### .env.local (Local Development)
```env
NEXT_PUBLIC_ANALYTICS_ID=your_id
NEXT_PUBLIC_API_URL=your_url
```

## 🌍 Custom Domain Setup

### 1. Purchase Domain
- Namecheap
- Google Domains
- Cloudflare Registrar

### 2. Configure DNS

**For Vercel**:
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: A
Name: @
Value: 76.76.21.21
```

**For Netlify**:
```
Type: CNAME
Name: www
Value: your-site.netlify.app

Type: A
Name: @
Value: 75.2.60.5
```

### 3. SSL Certificate
- Both Vercel and Netlify provide free SSL
- Auto-configured on custom domain

## 📊 Analytics Setup

### Google Analytics

1. **Create GA4 Property**: [analytics.google.com](https://analytics.google.com)

2. **Add to your site**:

Create `src/app/analytics.tsx`:
```typescript
'use client';

import Script from 'next/script';

export default function Analytics() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}
      </Script>
    </>
  );
}
```

3. **Import in layout.tsx**:
```typescript
import Analytics from './analytics';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### Plausible Analytics (Privacy-friendly)

1. Sign up at [plausible.io](https://plausible.io)

2. Add script in `layout.tsx`:
```typescript
<Script
  defer
  data-domain="yourdomain.com"
  src="https://plausible.io/js/script.js"
/>
```

## 🚨 Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Images Not Loading

- Check file paths (case-sensitive on Linux servers)
- Ensure images are in `/public` folder
- Use correct path format: `/image.jpg` not `./image.jpg`

### Animations Laggy on Mobile

Add to `globals.css`:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### TypeScript Errors

```bash
# Type check
npm run build

# Fix common issues
- Ensure all imports are correct
- Check type definitions in src/types/index.ts
- Verify data structure matches types
```

## 🔄 Continuous Deployment

### Automatic Deploys

Both Vercel and Netlify support automatic deployments:

1. **Push to main branch** → Automatic production deploy
2. **Push to other branch** → Automatic preview deploy
3. **Pull request** → Automatic preview with URL

### Deploy Hooks

Trigger deploys via webhook:

**Vercel**:
1. Project Settings → Git → Deploy Hooks
2. Create hook
3. Trigger via: `curl -X POST your-hook-url`

**Netlify**:
1. Site Settings → Build & Deploy → Build Hooks
2. Create hook
3. Trigger via: `curl -X POST your-hook-url`

## 📈 Performance Optimization

### Before Deploying

1. **Optimize Images**:
- Use WebP format
- Compress with TinyPNG
- Use Next.js Image component

2. **Check Bundle Size**:
```bash
npm run build
# Check output for large files
```

3. **Test Performance**:
- Lighthouse in Chrome DevTools
- PageSpeed Insights
- WebPageTest

### After Deploying

1. **CDN Configuration**: Automatically handled by Vercel/Netlify
2. **Compression**: Enabled by default
3. **Caching**: Configured automatically

## 🎯 Post-Deployment

### Monitor Your Site

1. **Uptime Monitoring**:
- UptimeRobot (free)
- Pingdom
- StatusCake

2. **Performance Monitoring**:
- Vercel Analytics (built-in)
- Google PageSpeed Insights
- WebPageTest

### Update Your Portfolio

```bash
# Make changes
git add .
git commit -m "Update project"
git push origin main
# Auto-deploys!
```

## 💡 Pro Tips

1. **Use preview deploys** to test changes before going live
2. **Set up custom 404 page** for better UX
3. **Enable HTTPS** (automatic on Vercel/Netlify)
4. **Add sitemap.xml** for better SEO
5. **Set up redirect rules** for URLs
6. **Use environment variables** for sensitive data
7. **Monitor Core Web Vitals** for performance

## 🎓 Next Steps

- [ ] Set up custom domain
- [ ] Add analytics
- [ ] Configure SEO tags
- [ ] Create og-image.jpg for social sharing
- [ ] Set up monitoring
- [ ] Add sitemap
- [ ] Submit to Google Search Console

---

Your portfolio is now live and ready to impress! 🚀
