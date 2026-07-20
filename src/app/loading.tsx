export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--color-bg-primary)]">
      <div className="flex flex-col items-center gap-6">
        {/* Logo */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-accent-cyan)] to-[var(--color-accent-violet)] flex items-center justify-center text-white font-bold text-xl animate-pulse">
          NR
        </div>

        {/* Loading bar */}
        <div className="w-48 h-1 rounded-full bg-[var(--color-bg-secondary)] overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[var(--color-accent-cyan)] to-[var(--color-accent-violet)]"
            style={{
              animation: "shimmer 1.5s ease-in-out infinite",
              backgroundSize: "200% 100%",
              width: "100%",
            }}
          />
        </div>

        <p className="text-sm text-[var(--color-text-muted)]">
          Loading Portfolio...
        </p>
      </div>
    </div>
  );
}
