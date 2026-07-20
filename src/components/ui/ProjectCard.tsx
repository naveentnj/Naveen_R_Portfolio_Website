"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group gradient-border-card"
      style={{ perspective: "1000px" }}
    >
      <div className="relative overflow-hidden rounded-2xl transition-transform duration-500 group-hover:scale-[1.01]">
        {/* Project Image / Gradient Placeholder */}
        <div className="h-48 relative overflow-hidden bg-gradient-to-br from-[var(--color-bg-secondary)] to-[var(--color-bg-card)]">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-violet-500/10" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-5xl opacity-20">
              {project.category === "Robotics"
                ? "🤖"
                : project.category === "Physical AI"
                  ? "🧠"
                  : project.category === "Agentic AI"
                    ? "🕸️"
                    : project.category === "Edge AI"
                      ? "⚡"
                      : project.category === "Generative AI"
                        ? "🎨"
                        : "💻"}
            </span>
          </div>

          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-bg-glass)] backdrop-blur-sm border border-[var(--color-border)] text-[var(--color-accent-cyan)]">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3
            className="text-xl font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-cyan)] transition-colors"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {project.title}
          </h3>
          <p className="mt-3 text-sm text-[var(--color-text-secondary)] line-clamp-3 leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs rounded-md bg-[var(--color-bg-glass-light)] text-[var(--color-text-muted)] border border-[var(--color-border)]"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="px-2.5 py-1 text-xs rounded-md text-[var(--color-text-muted)]">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 mt-6 pt-4 border-t border-[var(--color-border)]">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg
                  bg-[var(--color-bg-glass-light)] text-[var(--color-text-secondary)]
                  hover:text-[var(--color-accent-cyan)] hover:border-[var(--color-accent-cyan)]
                  border border-[var(--color-border)]
                  transition-all duration-200"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg
                  bg-gradient-to-r from-cyan-500/10 to-violet-500/10
                  text-[var(--color-accent-cyan)]
                  border border-[var(--color-accent-cyan)]/30
                  hover:border-[var(--color-accent-cyan)]
                  transition-all duration-200"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
            <button className="ml-auto flex items-center gap-1 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent-cyan)] transition-colors group/btn">
              Learn More
              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
