import AnimatedBackground from "@/components/AnimatedBackground";
import HeroSection from "@/components/HeroSection";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SkillsGrid from "@/components/SkillsGrid";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />
      <HeroSection />
      <ProjectsShowcase />
      <ExperienceTimeline />
      <SkillsGrid />
      
      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            Thanks for checking out my portfolio!
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © 2026 ckev.the.dev. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
