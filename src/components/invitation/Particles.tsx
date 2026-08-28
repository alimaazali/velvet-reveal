import { useMemo } from "react";
import { useReducedMotion } from "motion/react";

/** Faint floating dust motes for the stage. */
export function Dust({ count = 22 }: { count?: number }) {
  const reduced = useReducedMotion();
  const motes = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: (i * 37) % 100,
        top: (i * 53) % 100,
        size: 1 + ((i * 7) % 3),
        delay: (i % 11) * 0.9,
        duration: 9 + ((i * 3) % 8),
        dx: ((i % 5) - 2) * 14,
      })),
    [count],
  );

  if (reduced) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {motes.map((m) => (
        <span
          key={m.id}
          className="absolute rounded-full bg-gold-soft/70"
          style={{
            left: `${m.left}%`,
            top: `${m.top}%`,
            width: m.size,
            height: m.size,
            filter: "blur(0.4px)",
            animation: `dust-float ${m.duration}s ease-in-out ${m.delay}s infinite`,
            ["--dx" as string]: `${m.dx}px`,
          }}
        />
      ))}
    </div>
  );
}

/** Soft petals drifting down after the reveal. */
export function Petals({ active, count = 14 }: { active: boolean; count?: number }) {
  const reduced = useReducedMotion();
  const petals = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: (i * 71) % 100,
        delay: (i % 7) * 1.6,
        duration: 11 + ((i * 5) % 9),
        scale: 0.55 + ((i % 4) * 0.22),
        dx: ((i % 6) - 3) * 26,
      })),
    [count],
  );

  if (!active || reduced) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-20 overflow-hidden"
      style={{ contain: "strict" }}
    >
      {petals.map((p) => (
        <svg
          key={p.id}
          viewBox="0 0 20 20"
          width="14"
          height="14"
          className="absolute top-0 text-gold/50"
          style={{
            left: `${p.left}%`,
            transform: `scale(${p.scale})`,
            animation: `drift-down ${p.duration}s linear ${p.delay}s infinite`,
            ["--drift-x" as string]: `${p.dx}px`,
          }}
        >
          <path
            d="M10 1c4 4 6 7 6 10a6 6 0 0 1-12 0c0-3 2-6 6-10Z"
            fill="currentColor"
            opacity="0.75"
          />
        </svg>
      ))}
    </div>
  );
}
