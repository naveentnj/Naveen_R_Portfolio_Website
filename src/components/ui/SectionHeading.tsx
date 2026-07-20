"use client";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-[var(--color-accent-cyan)] to-[var(--color-accent-violet)] ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}
