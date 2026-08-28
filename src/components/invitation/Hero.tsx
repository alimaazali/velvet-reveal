import { motion, useReducedMotion } from "motion/react";
import type { Invitation } from "@/data/invitation";
import { Divider, CornerFlourish } from "./Ornament";

export function Hero({ data, revealed }: { data: Invitation; revealed: boolean }) {
  const reduced = useReducedMotion();

  const line = (delay: number) =>
    reduced
      ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.5, delay: delay * 0.4 } }
      : {
          initial: { opacity: 0, y: 30, filter: "blur(14px)" },
          animate: { opacity: 1, y: 0, filter: "blur(0px)" },
          transition: { duration: 1.4, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
        };

  return (
    <section className="relative flex min-h-[92svh] flex-col items-center justify-center overflow-hidden px-6 text-center">
      <CornerFlourish className="absolute left-4 top-4 h-12 w-12 sm:h-20 sm:w-20" />
      <CornerFlourish className="absolute right-4 top-4 h-12 w-12 scale-x-[-1] sm:h-20 sm:w-20" />
      <CornerFlourish className="absolute bottom-4 left-4 h-12 w-12 scale-y-[-1] sm:h-20 sm:w-20" />
      <CornerFlourish className="absolute bottom-4 right-4 h-12 w-12 scale-[-1] sm:h-20 sm:w-20" />

      <div className="w-full max-w-2xl">
        <motion.p
          {...line(0.15)}
          animate={revealed ? line(0.15).animate : line(0.15).initial}
          className="font-body text-[0.6rem] uppercase tracking-[0.5em] text-champagne/70"
        >
          {data.hostLine}
        </motion.p>

        <motion.h1
          {...line(0.4)}
          animate={revealed ? line(0.4).animate : line(0.4).initial}
          className="mt-8 font-display text-[clamp(3rem,17vw,7rem)] font-light uppercase leading-[0.92] tracking-[0.06em] text-ivory"
        >
          {data.groomName}
        </motion.h1>

        <motion.div
          {...line(0.62)}
          animate={revealed ? line(0.62).animate : line(0.62).initial}
          className="my-2 flex items-center justify-center gap-4"
        >
          <span className="gold-rule w-14" />
          <span className="gold-text font-display text-3xl italic">&amp;</span>
          <span className="gold-rule w-14" />
        </motion.div>

        <motion.h2
          {...line(0.84)}
          animate={revealed ? line(0.84).animate : line(0.84).initial}
          className="font-display text-[clamp(3rem,17vw,7rem)] font-light uppercase leading-[0.92] tracking-[0.06em] text-ivory"
        >
          {data.brideName}
        </motion.h2>

        <motion.p
          {...line(1.15)}
          animate={revealed ? line(1.15).animate : line(1.15).initial}
          className="mt-10 font-body text-[0.68rem] uppercase tracking-[0.44em] text-gold-soft"
        >
          {data.date}
        </motion.p>

        <motion.div {...line(1.35)} animate={revealed ? line(1.35).animate : line(1.35).initial}>
          <Divider className="mt-8" />
          <p className="mx-auto mt-8 max-w-md text-balance font-display text-lg font-light italic leading-relaxed text-champagne/85 sm:text-xl">
            {data.heroMessage}
          </p>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: revealed ? 1 : 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <span className="block h-10 w-px bg-gradient-to-b from-transparent via-gold/60 to-transparent" />
      </motion.div>
    </section>
  );
}
