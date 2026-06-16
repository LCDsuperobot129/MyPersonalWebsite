# 🎨 Customization Guide

Deep dive into customizing every aspect of your portfolio.

## 🎯 Hero Section Customization

### File: `src/components/HeroSection.tsx`

#### Change Your Title & Tagline

```typescript
<h1>
  <span className="block text-white">YOUR TITLE HERE</span>
  <span className="block text-gradient from-accent-indigo via-accent-cyan to-accent-emerald">
    YOUR TAGLINE
  </span>
</h1>
```

#### Update Badge Text

```typescript
<motion.div variants={itemVariants} className="inline-flex...">
  <Sparkles className="w-4 h-4 text-accent-indigo" />
  <span className="text-sm text-gray-300">YOUR STATUS</span>
</motion.div>
```

#### Modify Subtitle

```typescript
<motion.p variants={itemVariants} className="text-xl...">
  Award-winning developer specializing in{" "}
  <span className="text-accent-cyan font-semibold">YOUR SKILL 1</span>,{" "}
  <span className="text-accent-indigo font-semibold">YOUR SKILL 2</span>, and{" "}
  <span className="text-accent-emerald font-semibold">YOUR SKILL 3</span>
</motion.p>
```

#### Update Social Links

Replace these URLs:

```typescript
<SocialLink href="https://github.com/YOURUSERNAME" icon={<Github />} label="GitHub" />
<SocialLink href="https://linkedin.com/in/YOURPROFILE" icon={<Linkedin />} label="LinkedIn" />
<SocialLink href="mailto:YOUR.EMAIL@example.com" icon={<Mail />} label="Email" />
```

## 📊 Projects Configuration

### File: `src/data/projects.ts`

### Project Object Structure

```typescript
{
  id: string;              // Unique identifier (e.g., "1", "project-name")
  title: string;           // Project name
  description: string;     // Brief one-liner (shown on card)
  longDescription: string; // Detailed description (shown in modal)
  category: ProjectCategory[]; // Array of categories
  tags: string[];          // Tech stack tags
  image: string;           // Path to image in public folder
  liveUrl?: string;        // Optional live demo URL
  githubUrl: string;       // GitHub repository URL
  impact: string;          // Key metric or achievement
  achievement?: string;    // Optional award (e.g., "🏆 1st Place")
  featured?: boolean;      // Shows "Featured" badge
  problem?: string;        // Problem statement (shown in modal)
  solution?: string;       // Your solution (shown in modal)
  challenges?: string[];   // Technical challenges (shown in modal)
}
```

### Available Categories

- `"Full-Stack"`
- `"AI/ML"`
- `"Hackathon"`
- `"Open Source"`
- `"Mobile"`
- `"Web3"`

### Example Project Entry

```typescript
{
  id: "awesome-project",
  title: "Awesome SaaS Platform",
  description: "A revolutionary B2B SaaS tool for team collaboration",
  longDescription: "Built a comprehensive platform that helps remote teams collaborate 10x more effectively with real-time features and AI-powered insights.",
  category: ["Full-Stack", "AI/ML"],
  tags: ["Next.js", "Python", "PostgreSQL", "OpenAI", "AWS"],
  image: "/projects/awesome-saas.jpg",
  liveUrl: "https://awesome-saas.com",
  githubUrl: "https://github.com/yourusername/awesome-saas",
  impact: "1000+ active users, $50K MRR",
  achievement: "🏆 Winner at TechCrunch Disrupt 2024",
  featured: true,
  problem: "Remote teams struggle with async communication...",
  solution: "Created an AI-powered workspace that...",
  challenges: [
    "Real-time synchronization across 1000+ concurrent users",
    "Implementing end-to-end encryption while maintaining search",
    "Reducing API latency from 500ms to <50ms"
  ]
}
```

### Writing Impact Statements

**Good Examples:**
- ✅ "50% reduction in API response time"
- ✅ "10K+ active users, 4.8★ rating"
- ✅ "Reduced infrastructure costs by $20K/month"
- ✅ "95% accuracy on benchmark dataset"

**Avoid:**
- ❌ "Really fast performance"
- ❌ "Many users like it"
- ❌ "Great results"

## 💼 Experience & Timeline

### File: `src/data/experience.ts`

### Experience Object Structure

```typescript
{
  id: string;
  company: string;         // Company or institution name
  role: string;            // Your position/role
  period: string;          // Date range (e.g., "Jan 2024 - Present")
  type: "work" | "education" | "hackathon";
  description: string;     // Brief role description
  achievements: string[];  // Array of bullet points
}
```

### Type Icons & Colors

- **work**: Briefcase icon, Indigo color
- **education**: Graduation cap icon, Cyan color  
- **hackathon**: Trophy icon, Emerald color

### Example Entries

```typescript
// Work Experience
{
  id: "work-1",
  company: "Tech Unicorn Inc",
  role: "Senior Full-Stack Engineer",
  period: "Jan 2024 - Present",
  type: "work",
  description: "Leading development of core platform serving 1M+ users",
  achievements: [
    "Reduced API latency by 45% through architectural improvements",
    "Led team of 5 engineers delivering $2M revenue feature",
    "Implemented CI/CD pipeline cutting deployment time by 85%",
  ],
}

// Education
{
  id: "edu-1",
  company: "MIT",
  role: "B.S. Computer Science",
  period: "2018 - 2022",
  type: "education",
  description: "GPA: 3.9/4.0 | Focus: AI/ML & Distributed Systems",
  achievements: [
    "Dean's List all semesters",
    "Published research on neural networks (100+ citations)",
    "TA for Advanced Algorithms",
  ],
}

// Hackathon
{
  id: "hack-1",
  company: "HackMIT 2024",
  role: "Winner - Best AI/ML Project",
  period: "Sep 2024",
  type: "hackathon",
  description: "Built AI code reviewer in 36 hours",
  achievements: [
    "Competed against 1,200+ participants",
    "$10K prize + AWS credits",
    "Received acquisition interest from 3 companies",
  ],
}
```

### Writing Achievement Bullets

**Formula:** Action Verb + Task + Quantifiable Result

**Examples:**
- ✅ "Architected microservices infrastructure reducing costs by 60%"
- ✅ "Mentored 5 junior developers, improving team velocity by 30%"
- ✅ "Built ML pipeline processing 10K+ requests/second"

## 🛠️ Skills Configuration

### File: `src/data/skills.ts`

### Skill Category Structure

```typescript
{
  category: string;  // Category name
  items: string[];   // Array of skill names
}
```

### Available Icons

Match your category names to these for proper icons:

- `"Languages"` → Code2 icon
- `"Frontend"` → Palette icon
- `"Backend"` → Server icon
- `"AI/ML"` → Brain icon
- `"DevOps & Cloud"` → Cloud icon
- `"Tools & Other"` → Wrench icon

### Example Configuration

```typescript
export const skills: Skill[] = [
  {
    category: "Languages",
    items: ["TypeScript", "Python", "Go", "Rust"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Vue.js", "Tailwind CSS"],
  },
  {
    category: "Your Custom Category",
    items: ["Skill 1", "Skill 2", "Skill 3"],
  },
];
```

## 🎨 Theming & Colors

### File: `tailwind.config.ts`

### Accent Colors

```typescript
accent: {
  cyan: "#06b6d4",     // Primary accent
  indigo: "#6366f1",   // Secondary accent
  emerald: "#10b981",  // Success/achievement color
  purple: "#a855f7",   // Additional accent
}
```

### Background Colors

```typescript
background: "#0a0a0f",           // Main background
surface: "#111118",              // Card background
"surface-elevated": "#1a1a24",   // Elevated cards
border: "#2a2a3a",               // Border color
```

### Using Custom Colors

In your components:

```typescript
// Background with your accent
className="bg-accent-cyan"

// Text with your accent  
className="text-accent-indigo"

// Border with your accent
className="border-accent-emerald"

// Gradient with multiple accents
className="bg-gradient-to-r from-accent-indigo to-accent-cyan"
```

## ✨ Animation Customization

### File: `tailwind.config.ts`

### Modify Animation Duration

```typescript
animation: {
  "fade-in": "fade-in 0.6s ease-out forwards",  // Change 0.6s
  "slide-up": "slide-up 0.6s ease-out forwards", // Change 0.6s
  "float": "float 6s ease-in-out infinite",      // Change 6s
}
```

### Custom Animations

Add your own:

```typescript
animation: {
  "my-animation": "my-animation 1s ease-in-out",
}

keyframes: {
  "my-animation": {
    "0%": { /* starting state */ },
    "100%": { /* ending state */ },
  },
}
```

## 🖼️ Adding Project Images

### Step 1: Prepare Images

- **Recommended size**: 1200px × 800px
- **Format**: JPG or PNG
- **Optimize**: Use tools like TinyPNG
- **Naming**: Use lowercase-with-dashes (e.g., `my-project.jpg`)

### Step 2: Add to Public Folder

```
public/
└── projects/
    ├── awesome-saas.jpg
    ├── code-reviewer.jpg
    └── fitness-app.jpg
```

### Step 3: Reference in Data

```typescript
{
  // ...other fields
  image: "/projects/awesome-saas.jpg",
}
```

### Step 4: (Optional) Use Next.js Image

For optimized images, update `ProjectCard` component:

```typescript
import Image from 'next/image';

// Replace the gradient div with:
<Image
  src={project.image}
  alt={project.title}
  width={400}
  height={300}
  className="object-cover"
/>
```

## 🔗 Adding More Social Links

### File: `src/components/HeroSection.tsx`

Add more platforms:

```typescript
import { Twitter, Instagram, Youtube } from "lucide-react";

// In the social links section:
<SocialLink href="https://twitter.com/yourhandle" icon={<Twitter />} label="Twitter" />
<SocialLink href="https://instagram.com/yourhandle" icon={<Instagram />} label="Instagram" />
<SocialLink href="https://youtube.com/@yourchannel" icon={<Youtube />} label="YouTube" />
```

## 📱 Responsive Design

All components are mobile-responsive by default using Tailwind's breakpoints:

- `sm:` - 640px and up
- `md:` - 768px and up  
- `lg:` - 1024px and up
- `xl:` - 1280px and up

### Example

```typescript
className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
// Mobile: 2xl, Tablet: 3xl, Desktop: 5xl
```

## 🔍 SEO Optimization

### File: `src/app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: "Your Name | Your Title",
  description: "Compelling description with keywords",
  keywords: ["keyword1", "keyword2", "keyword3"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Name Portfolio",
    description: "Your description",
    type: "website",
    images: ["/og-image.jpg"], // Add this image to public/
  },
};
```

## 🚀 Performance Tips

1. **Optimize images** before adding them
2. **Limit animations** on mobile for better performance
3. **Use lazy loading** for heavy components
4. **Minimize bundle size** by importing only what you need

```typescript
// Good: Import specific icons
import { Github, Linkedin } from "lucide-react";

// Avoid: Import everything
import * as Icons from "lucide-react";
```

---

Need more help? Check the main README.md or create an issue on GitHub!
