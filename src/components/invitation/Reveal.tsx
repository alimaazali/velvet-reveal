import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  blur?: boolean;
  className?: string;
  once?: boolean;
}

export function Reveal({
  children,
  delay = 0,
  y = 26,
  blur = true,
  className = "",
  once = true,
}: RevealProps) {
  const reduced = useReducedMotion();

  const variants: Variants = reduced
    ? {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.4, delay: delay * 0.5 } },
      }
    : {
        hidden: { opacity: 0, y, filter: blur ? "blur(10px)" : "blur(0px)" },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 1.05, delay, ease: [0.16, 1, 0.3, 1] },
        },
      };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.25, margin: "0px 0px -8% 0px" }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className = "",
  gap = 0.13,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  gap?: number;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ show: { transition: { staggerChildren: gap, delayChildren: delay } } }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
  y = 22,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={
        reduced
          ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } }
          : {
              hidden: { opacity: 0, y, filter: "blur(8px)" },
              show: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
              },
            }
      }
    >
      {children}
    </motion.div>
  );
}
