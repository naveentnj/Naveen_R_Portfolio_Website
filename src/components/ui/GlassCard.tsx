"use client";

import { type ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export function GlassCard({
  children,
  className = "",
  hover = true,
  glow = false,
}: GlassCardProps) {
  return (
    <div
      className={`
        relative rounded-2xl overflow-hidden
        bg-[var(--color-bg-glass)] backdrop-blur-xl
        border border-[var(--color-border)]
        ${hover ? "transition-all duration-500 hover:border-[var(--color-border-glow)] hover:shadow-[0_0_30px_rgba(6,182,212,0.08)]" : ""}
        ${glow ? "glow-cyan" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
