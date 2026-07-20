"use client";

import { type ReactNode, type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  children: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  icon,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-gradient-to-r from-[var(--color-accent-cyan)] to-[var(--color-accent-violet)] text-white hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:scale-105 active:scale-95",
    secondary:
      "bg-[var(--color-bg-glass)] backdrop-blur-xl border border-[var(--color-border)] text-[var(--color-text-primary)] hover:border-[var(--color-accent-cyan)] hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]",
    ghost:
      "text-[var(--color-text-secondary)] hover:text-[var(--color-accent-cyan)] hover:bg-[var(--color-bg-glass-light)]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {icon && <span className="w-5 h-5">{icon}</span>}
      {children}
    </button>
  );
}
