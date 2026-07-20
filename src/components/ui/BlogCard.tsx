"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import type { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="gradient-border-card group cursor-pointer"
    >
      <div className="p-6">
        {/* Topic tag */}
        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-cyan-500/10 to-violet-500/10 text-[var(--color-accent-cyan)] border border-[var(--color-accent-cyan)]/20">
          {post.topic}
        </span>

        <h3
          className="mt-4 text-lg font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-cyan)] transition-colors line-clamp-2"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {post.title}
        </h3>

        <p className="mt-3 text-sm text-[var(--color-text-secondary)] line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs rounded-md bg-[var(--color-bg-glass-light)] text-[var(--color-text-muted)]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-5 pt-4 border-t border-[var(--color-border)]">
          <div className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)]">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </div>
          <span className="flex items-center gap-1 text-sm text-[var(--color-accent-cyan)] group-hover:gap-2 transition-all">
            Read
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </motion.article>
  );
}
