"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Bot,
  Sparkles,
  Brain,
  Cpu,
  CircuitBoard,
  Eye,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const FOCUS_AREAS = [
  { icon: <Bot className="w-4 h-4" />, label: "Robotics", color: "from-emerald-500 to-teal-600" },
  { icon: <Sparkles className="w-4 h-4" />, label: "Generative AI", color: "from-violet-500 to-purple-600" },
  { icon: <Brain className="w-4 h-4" />, label: "VLA Models", color: "from-cyan-500 to-blue-600" },
  { icon: <Cpu className="w-4 h-4" />, label: "Edge AI", color: "from-orange-500 to-amber-600" },
  { icon: <CircuitBoard className="w-4 h-4" />, label: "VLSI", color: "from-red-500 to-orange-600" },
  { icon: <Eye className="w-4 h-4" />, label: "Computer Vision", color: "from-pink-500 to-rose-600" },
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Passionate about bridging AI intelligence with the physical world"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative elements */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[var(--color-accent-cyan)]/10 to-[var(--color-accent-violet)]/10 blur-2xl" />
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-gradient-to-br from-[var(--color-accent-cyan)] to-[var(--color-accent-violet)] opacity-20 rotate-12" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-gradient-to-br from-[var(--color-accent-violet)] to-[var(--color-accent-pink)] opacity-20" />

              {/* Image */}
              <div className="relative rounded-3xl overflow-hidden border border-[var(--color-border)] glow-border">
                <Image
                  src="/images/profile.png"
                  alt="Naveen R"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)]/80 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                I am a passionate engineer focused on{" "}
                <span className="text-[var(--color-accent-cyan)] font-semibold">
                  Robotics
                </span>
                ,{" "}
                <span className="text-[var(--color-accent-violet)] font-semibold">
                  Generative AI
                </span>
                ,{" "}
                <span className="text-[var(--color-text-primary)] font-semibold">
                  Vision-Language-Action Models
                </span>
                ,{" "}
                <span className="text-[var(--color-accent-emerald)] font-semibold">
                  Edge AI
                </span>
                ,{" "}
                <span className="text-[var(--color-text-primary)] font-semibold">
                  Embedded Systems
                </span>
                , and{" "}
                <span className="text-[var(--color-accent-pink)] font-semibold">
                  VLSI
                </span>
                .
              </p>

              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                I enjoy transforming research papers into{" "}
                <span className="text-[var(--color-text-primary)] font-medium">
                  production-ready AI systems
                </span>{" "}
                and building intelligent robots that{" "}
                <span className="gradient-text font-semibold">
                  understand, reason, and act
                </span>
                .
              </p>

              {/* Focus Areas */}
              <div className="pt-4">
                <p className="text-sm font-medium text-[var(--color-text-muted)] mb-4 uppercase tracking-wider">
                  Core Focus Areas
                </p>
                <div className="flex flex-wrap gap-3">
                  {FOCUS_AREAS.map((area, i) => (
                    <motion.span
                      key={area.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.08 }}
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl bg-[var(--color-bg-glass)] backdrop-blur-sm border border-[var(--color-border)] text-[var(--color-text-primary)] hover:border-[var(--color-accent-cyan)] transition-all duration-300"
                    >
                      <span
                        className={`p-1 rounded-md bg-gradient-to-br ${area.color} text-white`}
                      >
                        {area.icon}
                      </span>
                      {area.label}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
