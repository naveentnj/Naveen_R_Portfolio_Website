"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { EXPERIENCES } from "@/lib/constants";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Journey & Experience"
          subtitle="My path through AI, Robotics, and Hardware Engineering"
        />

        <div className="relative">
          {EXPERIENCES.map((exp, index) => (
            <TimelineItem
              key={exp.id}
              experience={exp}
              index={index}
              isLast={index === EXPERIENCES.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
