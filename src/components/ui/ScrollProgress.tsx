"use client";

import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 z-[60] origin-left bg-gradient-to-r from-[var(--color-accent-cyan)] via-[var(--color-accent-violet)] to-[var(--color-accent-pink)]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
