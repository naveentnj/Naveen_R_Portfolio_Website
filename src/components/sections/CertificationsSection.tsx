"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CertCard } from "@/components/ui/CertCard";
import { CERTIFICATIONS, CERT_ISSUERS } from "@/lib/constants";

export function CertificationsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredCerts =
    activeFilter === "All"
      ? CERTIFICATIONS
      : CERTIFICATIONS.filter((c) => c.issuer === activeFilter);

  return (
    <section id="certifications" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Certifications"
          subtitle="Professional certifications across AI, Robotics, Cloud, and Hardware"
        />

        {/* 60+ badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-[var(--color-accent-cyan)]/10 to-[var(--color-accent-violet)]/10 border border-[var(--color-accent-cyan)]/20">
            <Award className="w-6 h-6 text-[var(--color-accent-cyan)]" />
            <span
              className="text-2xl font-bold gradient-text"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              60+
            </span>
            <span className="text-sm text-[var(--color-text-secondary)]">
              Professional Certifications
            </span>
          </div>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {CERT_ISSUERS.map((issuer) => (
            <button
              key={issuer}
              onClick={() => setActiveFilter(issuer)}
              className={`px-4 py-2 text-xs font-medium rounded-xl transition-all duration-200 cursor-pointer ${
                activeFilter === issuer
                  ? "bg-gradient-to-r from-[var(--color-accent-cyan)] to-[var(--color-accent-violet)] text-white"
                  : "bg-[var(--color-bg-glass-light)] border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-accent-cyan)]"
              }`}
            >
              {issuer}
            </button>
          ))}
        </div>

        {/* Cert grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert, index) => (
              <CertCard key={cert.id} cert={cert} index={index} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
