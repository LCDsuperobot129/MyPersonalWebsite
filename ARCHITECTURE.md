# 🏗️ Architecture & File Structure

## 📁 Complete Project Structure

```
MyPersonalWebsite/
│
├── 📂 src/                          # Source code directory
│   ├── 📂 app/                      # Next.js 14 App Router
│   │   ├── layout.tsx               # Root layout with metadata & fonts
│   │   ├── page.tsx                 # Main landing page
│   │   └── globals.css              # Global styles & Tailwind directives
│   │
│   ├── 📂 components/               # React components
│   │   ├── AnimatedBackground.tsx   # Canvas-based interactive background
│   │   ├── HeroSection.tsx          # Landing hero with CTAs
│   │   ├── ProjectsShowcase.tsx     # Filterable project grid + modals
│   │   ├── ExperienceTimeline.tsx   # Vertical timeline component
│   │   └── SkillsGrid.tsx          # Skills categorization display
│   │
│   ├── 📂 data/                     # Static data & content
│   │   ├── projects.ts              # Project portfolio data
│   │   ├── experience.ts            # Work/education/hackathon data
│   │   └── skills.ts                # Tech stack categorization
│   │
│   ├── 📂 types/                    # TypeScript type definitions
│   │   └── index.ts                 # Shared types & interfaces
│   │
│   └── 📂 lib/                      # Utility functions
│       └── utils.ts                 # Helper functions & animation variants
│
├── 📂 public/                       # Static assets (served as-is)
│   ├── projects/                    # Project images/screenshots
│   ├── resume.pdf                   # Your resume (add this)
│   └── .gitkeep                     # Ensures directory is tracked
│
├── 📄 Configuration Files
│   ├── next.config.js               # Next.js configuration
│   ├── tailwind.config.ts           # Tailwind CSS + custom theme
│   ├── tsconfig.json                # TypeScript compiler options
│   ├── postcss.config.mjs           # PostCSS plugins
│   ├── .eslintrc.json               # ESLint rules
│   └── .gitignore                   # Git ignore patterns
│
├── 📄 Package Management
│   └── package.json                 # Dependencies & scripts
│
└── 📄 Documentation
    ├── README.md                    # Main documentation
    ├── QUICKSTART.md                # 10-minute setup guide
    ├── CUSTOMIZATION.md             # Deep customization guide
    └── ARCHITECTURE.md              # This file
```

## 🔄 Data Flow

```
User Interaction
      ↓
  page.tsx (Main orchestrator)
      ↓
  ┌─────────────────────────────┐
  │   Component Layer           │
  │                             │
  │  • HeroSection              │
  │  • ProjectsShowcase ────────┼──→ data/projects.ts
  │  • ExperienceTimeline ──────┼──→ data/experience.ts
  │  • SkillsGrid ──────────────┼──→ data/skills.ts
  │                             │
  └─────────────────────────────┘
      ↓
  Framer Motion (Animations)
      ↓
  Tailwind CSS (Styling)
      ↓
  Rendered Output
```

## 🎨 Component Architecture

### 1. AnimatedBackground.tsx
**Purpose**: Interactive canvas background with mouse-tracking effects

**Features**:
- Dynamic grid that responds to mouse position
- Radial gradient glow following cursor
- Optimized animation loop using requestAnimationFrame
- Responsive to window resizing

**Performance**:
- Runs on separate canvas layer
- GPU-accelerated when possible
- Pointer-events disabled for performance

### 2. HeroSection.tsx
**Purpose**: Landing section with headline, CTAs, and social links

**Features**:
- Staggered animation entrance
- Floating gradient blobs background
- Interactive hover states on buttons
- Scroll indicator animation

**Key Elements**:
- Headline with gradient text
- Status badge
- CTA buttons (Projects, Resume)
- Social media links (GitHub, LinkedIn, Email)

### 3. ProjectsShowcase.tsx
**Purpose**: Interactive project portfolio with filtering and detailed views

**Features**:
- Category-based filtering system
- Smooth layout animations with Framer Motion LayoutGroup
- Project cards with hover effects
- Expandable modal for detailed project information
- Achievement badges and impact metrics

**State Management**:
- `selectedCategory`: Current filter selection
- `selectedProject`: Currently viewing project in modal

**Filtering Logic**:
```typescript
const filteredProjects = projects.filter((project) =>
  selectedCategory === "All" 
    ? true 
    : project.category.includes(selectedCategory)
);
```

### 4. ExperienceTimeline.tsx
**Purpose**: Vertical timeline displaying career progression

**Features**:
- Color-coded by type (work, education, hackathon)
- Icon-based visual hierarchy
- Gradient connecting line
- Hover animations on cards
- Scroll-triggered entrance animations

**Type Mapping**:
- Work → Briefcase icon, Indigo color
- Education → Graduation cap, Cyan color
- Hackathon → Trophy, Emerald color

### 5. SkillsGrid.tsx
**Purpose**: Categorized display of technical skills

**Features**:
- Icon-based category headers
- Hover effects on skill tags
- Responsive grid layout
- Category-specific iconography

## 🎭 Animation Strategy

### Framer Motion Patterns

**1. Staggered Children**
```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};
```

**2. Scroll-triggered Animations**
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
/>
```

**3. Hover Interactions**
```typescript
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
/>
```

**4. Layout Animations**
```typescript
<LayoutGroup>
  <motion.div layout>
    {/* Content */}
  </motion.div>
</LayoutGroup>
```

## 🎨 Styling Architecture

### Tailwind CSS Strategy

**1. Custom Theme Extensions**
- Custom colors (accent-*, background, surface)
- Custom animations (fade-in, slide-up, float)
- Custom utilities (text-gradient, glow effects)

**2. Utility Classes**
```css
.text-gradient {
  @apply bg-clip-text text-transparent bg-gradient-to-r;
}

.card-hover {
  @apply transition-all duration-300 hover:scale-[1.02];
}
```

**3. Component-Specific Styles**
- Inline Tailwind classes for component-specific styling
- Conditional classes for state-based styling
- Responsive modifiers (sm:, md:, lg:)

### Color System

```typescript
Background Layers:
  #0a0a0f (background) ──> Base
  #111118 (surface) ──────> Cards
  #1a1a24 (elevated) ─────> Modals

Accent Colors:
  #6366f1 (indigo) ───────> Primary
  #06b6d4 (cyan) ─────────> Secondary
  #10b981 (emerald) ──────> Success
  #a855f7 (purple) ───────> Tertiary
```

## 📊 Data Structure

### Type Definitions (src/types/index.ts)

```typescript
Project {
  id: string
  title: string
  description: string
  longDescription: string
  category: ProjectCategory[]
  tags: string[]
  image: string
  liveUrl?: string
  githubUrl: string
  impact: string
  achievement?: string
  problem?: string
  solution?: string
  challenges?: string[]
  featured?: boolean
}

Experience {
  id: string
  company: string
  role: string
  period: string
  description: string
  achievements: string[]
  type: "work" | "education" | "hackathon"
}

Skill {
  category: string
  items: string[]
}
```

## 🚀 Performance Optimizations

### 1. Code Splitting
- Automatic route-based splitting via Next.js
- Dynamic imports for heavy components (if needed)

### 2. Image Optimization
- Use Next.js Image component for auto-optimization
- Lazy loading for below-the-fold images

### 3. Animation Performance
- CSS transforms (translate, scale) for GPU acceleration
- `will-change` for frequently animated properties
- Reduced motion preference support

### 4. Bundle Size
- Tree-shaking with ES modules
- Import specific icons from lucide-react
- Minimal external dependencies

## 🔌 Extension Points

### Adding New Sections

1. Create component in `src/components/`
2. Import in `src/app/page.tsx`
3. Add to page layout
4. Create data file if needed in `src/data/`

### Adding New Project Categories

1. Update type in `src/types/index.ts`:
```typescript
export type ProjectCategory = "..." | "YourNewCategory";
```

2. Add to filter array in `ProjectsShowcase.tsx`:
```typescript
const categories = [..., "YourNewCategory"];
```

### Adding New Sections to Timeline

1. Add new type in `src/types/index.ts`:
```typescript
type: "work" | "education" | "hackathon" | "yournewtype"
```

2. Update helpers in `ExperienceTimeline.tsx`:
```typescript
const getIcon = (type: string) => {
  // Add your case
};
```

## 🔒 Type Safety

**Benefits of TypeScript**:
- Compile-time error detection
- IntelliSense autocomplete
- Refactoring confidence
- Self-documenting code

**Key Type Exports**:
- `Project` - Project data structure
- `ProjectCategory` - Valid project categories
- `Experience` - Experience data structure
- `Skill` - Skill category structure

## 📦 Dependency Overview

### Production Dependencies
- **react** & **react-dom**: Core React library
- **next**: React framework with SSR/SSG
- **framer-motion**: Animation library
- **lucide-react**: Icon library
- **clsx**: Conditional className utility

### Development Dependencies
- **typescript**: Type checking
- **@types/**: Type definitions
- **tailwindcss**: Utility-first CSS
- **postcss**: CSS processing
- **eslint**: Code linting

## 🎯 Best Practices

1. **Component Organization**: One component per file
2. **Type Safety**: Define types for all data structures
3. **Separation of Concerns**: Data separate from components
4. **Reusability**: Shared utilities in `/lib`
5. **Performance**: Memoize expensive computations
6. **Accessibility**: Semantic HTML and ARIA labels
7. **Responsive Design**: Mobile-first approach

## 🔄 Update Workflow

```bash
# 1. Update your data
src/data/*.ts

# 2. Test locally
npm run dev

# 3. Build for production
npm run build

# 4. Test production build
npm start

# 5. Deploy
git push origin main
# (Vercel/Netlify auto-deploys)
```

---

This architecture provides a solid foundation while remaining flexible for customization and extension.
