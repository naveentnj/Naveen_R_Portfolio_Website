"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillBar } from "@/components/ui/SkillBar";
import { SKILL_CATEGORIES } from "@/lib/constants";

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[var(--color-accent-cyan)]/5 to-[var(--color-accent-violet)]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="Technologies and domains I work with across AI, Robotics, and Hardware"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILL_CATEGORIES.map((category, index) => (
            <SkillBar key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
