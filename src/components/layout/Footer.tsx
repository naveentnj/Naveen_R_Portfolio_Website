"use client";

import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  github: <Github className="w-5 h-5" />,
  linkedin: <Linkedin className="w-5 h-5" />,
  mail: <Mail className="w-5 h-5" />,
};

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--color-border)]">
      {/* Gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent-cyan)] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left - Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-accent-cyan)] to-[var(--color-accent-violet)] flex items-center justify-center font-bold text-white text-xs">
                NR
              </div>
              <span
                className="text-lg font-bold text-[var(--color-text-primary)]"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Naveen R
              </span>
            </div>
            <p className="mt-2 text-sm text-[var(--color-text-muted)] max-w-sm">
              Building the Future of Physical AI
            </p>
          </div>

          {/* Center - Social Links */}
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[var(--color-bg-glass-light)] border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent-cyan)] hover:border-[var(--color-accent-cyan)] transition-all duration-300"
                aria-label={link.name}
              >
                {SOCIAL_ICONS[link.icon]}
              </a>
            ))}
          </div>

          {/* Right - Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-[var(--color-text-muted)]">
              Designed & Developed with{" "}
              <Heart className="w-3.5 h-3.5 inline text-[var(--color-accent-pink)]" />{" "}
              by{" "}
              <span className="text-[var(--color-text-primary)] font-medium">
                Naveen R
              </span>
            </p>
            <p className="mt-1 text-xs text-[var(--color-text-muted)]">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
