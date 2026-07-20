"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { BlogsSection } from "@/components/sections/BlogsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />

      <main>
        <HeroSection />

        {/* Divider glow */}
        <div className="relative h-px">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-accent-cyan)]/20 to-transparent" />
        </div>

        <AboutSection />
        <SkillsSection />

        <div className="relative h-px">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-accent-violet)]/20 to-transparent" />
        </div>

        <ProjectsSection />
        <CertificationsSection />

        <div className="relative h-px">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-accent-cyan)]/20 to-transparent" />
        </div>

        <BlogsSection />
        <ExperienceSection />

        <div className="relative h-px">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-accent-violet)]/20 to-transparent" />
        </div>

        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
