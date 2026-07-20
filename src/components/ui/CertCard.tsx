"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import type { Certification } from "@/types";

interface CertCardProps {
  cert: Certification;
  index: number;
}

export function CertCard({ cert, index }: CertCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="gradient-border-card group"
    >
      <div className="p-5 flex items-start gap-4">
        <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 flex-shrink-0">
          <Award className="w-5 h-5 text-[var(--color-accent-cyan)]" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-semibold text-[var(--color-text-primary)] leading-snug">
            {cert.title}
          </h4>
          <p className="text-xs text-[var(--color-text-muted)] mt-1">
            {cert.issuer} {cert.date && `· ${cert.date}`}
          </p>
          <span className="inline-block mt-2 px-2 py-0.5 text-xs rounded-md bg-[var(--color-bg-glass-light)] text-[var(--color-accent-violet)] border border-[var(--color-border)]">
            {cert.category}
          </span>
        </div>
        {cert.credentialUrl && (
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-text-muted)] hover:text-[var(--color-accent-cyan)] transition-colors flex-shrink-0"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </motion.div>
  );
}
