# 🚀 Quick Start Guide

Get your portfolio live in 10 minutes!

## Step 1: Install Dependencies (2 minutes)

```bash
npm install
```

## Step 2: Customize Your Data (5 minutes)

### Edit Your Info

Open and update these 3 files:

1. **`src/data/projects.ts`** - Add your projects
2. **`src/data/experience.ts`** - Add your work experience
3. **`src/data/skills.ts`** - Update your tech stack

### Quick Replace Guide

Find and replace these placeholders:

- `Your Name` → Your actual name
- `your.email@example.com` → Your email
- `yourusername` → Your GitHub username
- `yourprofile` → Your LinkedIn profile

## Step 3: Add Your Resume (1 minute)

Drop your `resume.pdf` into the `public` folder.

## Step 4: Run Locally (1 minute)

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Step 5: Deploy (1 minute)

### Option A: Vercel (Easiest)
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repo
5. Click "Deploy"

### Option B: Netlify
1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site"
4. Connect GitHub
5. Deploy

## 🎨 Optional: Customize Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  accent: {
    cyan: "#YOUR_COLOR",
    indigo: "#YOUR_COLOR",
    emerald: "#YOUR_COLOR",
  }
}
```

## 📸 Optional: Add Project Images

1. Create folder: `public/projects/`
2. Add images: `project-name.jpg`
3. Reference in `src/data/projects.ts`

## ✅ Checklist

- [ ] Installed dependencies
- [ ] Updated projects.ts
- [ ] Updated experience.ts  
- [ ] Updated skills.ts
- [ ] Changed personal info
- [ ] Added resume.pdf
- [ ] Tested locally
- [ ] Deployed to hosting

## 🆘 Troubleshooting

### Port 3000 already in use?
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Alternative: Use different port
npm run dev -- -p 3001
```

### Build errors?
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run dev
```

### TypeScript errors?
Make sure all placeholder text is replaced with your actual data.

## 🎯 Next Steps

1. **SEO**: Update meta tags in `src/app/layout.tsx`
2. **Analytics**: Add Google Analytics or Plausible
3. **Domain**: Connect a custom domain
4. **Images**: Add real project screenshots
5. **Content**: Write detailed project descriptions

## 💡 Pro Tips

- Use high-quality project images (1200x630px)
- Keep descriptions concise and impact-focused
- Quantify achievements with specific metrics
- Update your portfolio regularly
- Test on mobile devices

---

Need help? Check the full README.md for detailed documentation!
