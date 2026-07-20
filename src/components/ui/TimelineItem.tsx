"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Bot,
  Cpu,
  Sparkles,
  CircuitBoard,
  Rocket,
} from "lucide-react";
import type { Experience } from "@/types";

const ICON_MAP: Record<string, React.ReactNode> = {
  brain: <Brain className="w-5 h-5" />,
  bot: <Bot className="w-5 h-5" />,
  cpu: <Cpu className="w-5 h-5" />,
  sparkles: <Sparkles className="w-5 h-5" />,
  "circuit-board": <CircuitBoard className="w-5 h-5" />,
  rocket: <Rocket className="w-5 h-5" />,
};

interface TimelineItemProps {
  experience: Experience;
  index: number;
  isLast: boolean;
}

export function TimelineItem({ experience, index, isLast }: TimelineItemProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative flex items-start gap-8 mb-12"
    >
      {/* Timeline line + dot (centered) */}
      <div className="hidden md:flex flex-col items-center absolute left-1/2 -translate-x-1/2 top-0 h-full">
        {/* Dot */}
        <div
          className={`relative z-10 w-12 h-12 rounded-full bg-gradient-to-br ${experience.color} flex items-center justify-center text-white shadow-lg`}
        >
          {ICON_MAP[experience.icon] || <Sparkles className="w-5 h-5" />}
          {/* Pulse ring */}
          <div
            className={`absolute inset-0 rounded-full bg-gradient-to-br ${experience.color} animate-ping opacity-20`}
          />
        </div>
        {/* Line */}
        {!isLast && (
          <div className="w-0.5 flex-1 bg-gradient-to-b from-[var(--color-accent-cyan)]/30 to-transparent mt-2" />
        )}
      </div>

      {/* Card - alternating sides */}
      <div
        className={`w-full md:w-[calc(50%-3rem)] ${
          isEven ? "md:pr-0 md:mr-auto" : "md:pl-0 md:ml-auto"
        }`}
      >
        {/* Mobile dot */}
        <div className="md:hidden flex items-center gap-3 mb-3">
          <div
            className={`w-10 h-10 rounded-full bg-gradient-to-br ${experience.color} flex items-center justify-center text-white flex-shrink-0`}
          >
            {ICON_MAP[experience.icon] || <Sparkles className="w-4 h-4" />}
          </div>
          <span className="text-xs text-[var(--color-text-muted)]">
            {experience.period}
          </span>
        </div>

        <div className="gradient-border-card p-6">
          <span className="hidden md:inline-block text-xs text-[var(--color-text-muted)] mb-2">
            {experience.period}
          </span>
          <h3
            className="text-lg font-bold text-[var(--color-text-primary)]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {experience.title}
          </h3>
          {experience.organization && (
            <p className="text-sm text-[var(--color-accent-cyan)] mt-1">
              {experience.organization}
            </p>
          )}
          <p className="mt-3 text-sm text-[var(--color-text-secondary)] leading-relaxed">
            {experience.description}
          </p>
          <ul className="mt-3 space-y-1.5">
            {experience.highlights.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-xs text-[var(--color-text-muted)]"
              >
                <span className="w-1 h-1 rounded-full bg-[var(--color-accent-cyan)] mt-1.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
