"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ArrowDown,
  FolderOpen,
  FileDown,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { HERO_STATS, SOCIAL_LINKS } from "@/lib/constants";

// Lazy-load the heavy 3D scene
const HeroScene = dynamic(
  () =>
    import("@/components/three/HeroScene").then((mod) => ({
      default: mod.HeroScene,
    })),
  { ssr: false }
);

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  github: <Github className="w-5 h-5" />,
  linkedin: <Linkedin className="w-5 h-5" />,
  mail: <Mail className="w-5 h-5" />,
};

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Background */}
      <HeroScene />

      {/* Gradient overlays for blending */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-primary)]/30 via-transparent to-[var(--color-bg-primary)] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg-primary)]/50 via-transparent to-[var(--color-bg-primary)]/50 pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="mx-auto mb-8"
        >
          <div className="profile-ring w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden">
            <Image
              src="/images/profile.png"
              alt="Naveen R — Robotics AI Engineer"
              width={160}
              height={160}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <span className="text-[var(--color-text-primary)]">Naveen</span>{" "}
          <span className="gradient-text">R</span>
        </motion.h1>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4"
        >
          <span className="inline-block px-4 py-2 text-sm md:text-base font-medium rounded-full bg-[var(--color-bg-glass)] backdrop-blur-sm border border-[var(--color-border)] text-[var(--color-accent-cyan)]">
            Robotics AI Engineer
          </span>
        </motion.div>

        {/* Headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 text-lg md:text-xl lg:text-2xl text-[var(--color-text-secondary)] max-w-3xl mx-auto leading-relaxed"
        >
          Building{" "}
          <span className="text-[var(--color-accent-cyan)] font-semibold">
            Physical AI
          </span>
          ,{" "}
          <span className="text-[var(--color-accent-violet)] font-semibold">
            Intelligent Robotics
          </span>{" "}
          and{" "}
          <span className="text-[var(--color-accent-emerald)] font-semibold">
            Edge AI Systems
          </span>
          .
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            variant="primary"
            size="lg"
            icon={<FolderOpen className="w-5 h-5" />}
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View Projects
          </Button>
          <Button
            variant="secondary"
            size="lg"
            icon={<FileDown className="w-5 h-5" />}
            onClick={() =>
              window.open(
                "https://github.com/naveentnj/Naveen_R_Portfolio_Website/blob/main/public/resume.pdf",
                "_blank"
              )
            }
          >
            View Resume
          </Button>
          <Button
            variant="secondary"
            size="lg"
            icon={<Send className="w-5 h-5" />}
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact Me
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-[var(--color-bg-glass-light)] border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent-cyan)] hover:border-[var(--color-accent-cyan)] transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]"
              aria-label={link.name}
            >
              {SOCIAL_ICONS[link.icon]}
            </a>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
        >
          {HERO_STATS.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-[var(--color-text-muted)]">
              Scroll to explore
            </span>
            <ArrowDown className="w-4 h-4 text-[var(--color-accent-cyan)]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
