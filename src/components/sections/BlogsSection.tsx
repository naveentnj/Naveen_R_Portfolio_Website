"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { BlogCard } from "@/components/ui/BlogCard";
import { BLOG_POSTS } from "@/lib/constants";

export function BlogsSection() {
  return (
    <section id="blogs" className="section-padding relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[var(--color-accent-violet)]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          title="Technical Blogs"
          subtitle="Deep dives into AI, Robotics, Edge Computing, and Semiconductor Engineering"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
