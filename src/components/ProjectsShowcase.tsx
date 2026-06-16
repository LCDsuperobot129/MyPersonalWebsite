"use client";

import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Github, ExternalLink, X, Award, Zap, Code2 } from "lucide-react";
import { Project, ProjectCategory } from "@/types";
import { projects } from "@/data/projects";

export default function ProjectsShowcase() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="text-gradient from-accent-red to-accent-rose">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            All of my projects that I have worked on or am working on.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <LayoutGroup>
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      onClick={onClick}
      className="group relative bg-surface border border-border rounded-2xl overflow-hidden cursor-pointer hover:border-accent-red/50 transition-colors"
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-accent-red/20 border border-accent-red/50 rounded-full text-xs font-semibold text-accent-red backdrop-blur-sm">
          Featured
        </div>
      )}

      {/* Image Placeholder with gradient */}
      <div className="relative h-48 bg-gradient-to-br from-accent-red/20 via-surface to-accent-rose/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60" />
        <motion.div
          className="absolute inset-0 bg-accent-red/10"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        />
        {/* Icon representation */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Code2 className="w-16 h-16 text-accent-red/30" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Achievement Badge */}
        {project.achievement && (
          <div className="flex items-center gap-2 mb-3 text-sm">
            <Award className="w-4 h-4 text-accent-orange" />
            <span className="text-accent-orange font-semibold">{project.achievement}</span>
          </div>
        )}

        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-accent-red transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>

        {/* Impact Metric */}
        <div className="flex items-center gap-2 mb-4 text-accent-red">
          <Zap className="w-4 h-4" />
          <span className="text-sm font-semibold">{project.impact}</span>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-surface-elevated text-xs font-medium text-gray-300 rounded border border-border"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-1 text-xs font-medium text-gray-500">
              +{project.tags.length - 3} more
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 text-sm text-accent-red hover:text-accent-red/80 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>Source</span>
          </a>
        </div>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-accent-red/10 to-transparent" />
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-surface border border-border rounded-2xl shadow-2xl"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="sticky top-4 right-4 float-right z-10 p-2 bg-surface-elevated border border-border rounded-lg text-gray-400 hover:text-white hover:border-accent-red transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8">
          {/* Header */}
          <div className="mb-6">
            {project.achievement && (
              <div className="flex items-center gap-2 mb-3 text-accent-orange">
                <Award className="w-5 h-5" />
                <span className="font-semibold">{project.achievement}</span>
              </div>
            )}
            <h2 className="text-3xl font-bold text-white mb-3">{project.title}</h2>
            <p className="text-xl text-gray-400 mb-4">{project.longDescription}</p>

            {/* Impact */}
            <div className="flex items-center gap-2 text-accent-red">
              <Zap className="w-5 h-5" />
              <span className="font-semibold">{project.impact}</span>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-surface-elevated border border-border text-sm font-medium text-gray-300 rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Problem, Solution, Challenges */}
          <div className="space-y-6 mb-6">
            {project.problem && (
              <div>
                <h3 className="text-lg font-bold text-white mb-2">🎯 The Problem</h3>
                <p className="text-gray-400 leading-relaxed">{project.problem}</p>
              </div>
            )}

            {project.solution && (
              <div>
                <h3 className="text-lg font-bold text-white mb-2">💡 The Solution</h3>
                <p className="text-gray-400 leading-relaxed">{project.solution}</p>
              </div>
            )}

            {project.challenges && project.challenges.length > 0 && (
              <div>
                <h3 className="text-lg font-bold text-white mb-3">⚡ Technical Challenges</h3>
                <ul className="space-y-2">
                  {project.challenges.map((challenge, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-accent-red mt-1">•</span>
                      <span className="text-gray-400">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Action buttons */}
          <div className="flex gap-4 pt-6 border-t border-border">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <motion.button
                  className="w-full px-6 py-3 bg-gradient-to-r from-accent-indigo to-accent-cyan rounded-lg font-semibold text-white shadow-lg flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink className="w-5 h-5" />
                  View Live Demo
                </motion.button>
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <motion.button
                className="w-full px-6 py-3 bg-surface-elevated border border-border rounded-lg font-semibold text-white hover:border-accent-red transition-colors flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Github className="w-5 h-5" />
                View Source Code
              </motion.button>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
