"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  Eye,
  Bot,
  Cpu,
  Code,
  Cloud,
  CircuitBoard,
} from "lucide-react";
import type { SkillCategory } from "@/types";

const ICON_MAP: Record<string, React.ReactNode> = {
  brain: <Brain className="w-6 h-6" />,
  eye: <Eye className="w-6 h-6" />,
  bot: <Bot className="w-6 h-6" />,
  cpu: <Cpu className="w-6 h-6" />,
  code: <Code className="w-6 h-6" />,
  cloud: <Cloud className="w-6 h-6" />,
  "circuit-board": <CircuitBoard className="w-6 h-6" />,
};

interface SkillBarProps {
  category: SkillCategory;
  index: number;
}

export function SkillBar({ category, index }: SkillBarProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="gradient-border-card group cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <div
            className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-white flex-shrink-0`}
          >
            {ICON_MAP[category.icon] || <Cpu className="w-6 h-6" />}
          </div>
          <div className="flex-1 min-w-0">
            <h3
              className="text-lg font-semibold text-[var(--color-text-primary)]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {category.title}
            </h3>
            <p className="text-sm text-[var(--color-text-muted)] mt-0.5">
              {category.description}
            </p>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-[var(--color-text-muted)]"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
            </svg>
          </motion.div>
        </div>

        {/* Skills chips */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-[var(--color-border)]">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg
                      bg-[var(--color-bg-glass-light)] text-[var(--color-text-secondary)]
                      border border-[var(--color-border)]
                      hover:border-[var(--color-accent-cyan)] hover:text-[var(--color-accent-cyan)]
                      transition-all duration-200"
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
