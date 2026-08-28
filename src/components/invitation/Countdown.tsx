import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Reveal } from "./Reveal";
import { Divider } from "./Ornament";

function diff(target: number) {
  const ms = Math.max(0, target - Date.now());
  return {
    days: Math.floor(ms / 86_400_000),
    hours: Math.floor((ms / 3_600_000) % 24),
    minutes: Math.floor((ms / 60_000) % 60),
    seconds: Math.floor((ms / 1000) % 60),
  };
}

function Unit({ value, label }: { value: number; label: string }) {
  const reduced = useReducedMotion();
  const text = String(value).padStart(2, "0");

  return (
    <div className="flex min-w-0 flex-col items-center">
      <div className="relative h-[1.15em] overflow-hidden font-display text-[clamp(2rem,11vw,3.6rem)] font-light leading-none text-ivory tabular-nums">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={text}
            className="block"
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: "45%", filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: "-45%", filter: "blur(6px)" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {text}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="mt-3 font-body text-[0.52rem] uppercase tracking-[0.32em] text-champagne/60">
        {label}
      </span>
    </div>
  );
}

export function Countdown({ dateISO }: { dateISO: string }) {
  const target = new Date(dateISO).getTime();
  const [time, setTime] = useState(() => diff(target));

  useEffect(() => {
    const id = setInterval(() => setTime(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  return (
    <section className="relative px-6 py-20 sm:py-28" aria-label="Countdown">
      <div className="mx-auto max-w-xl text-center">
        <Reveal>
          <p className="font-body text-[0.6rem] uppercase tracking-[0.5em] text-gold-soft">
            The Countdown
          </p>
          <Divider className="mt-8" />
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-12 grid grid-cols-4 gap-1 sm:gap-4">
            <Unit value={time.days} label="Days" />
            <Unit value={time.hours} label="Hours" />
            <Unit value={time.minutes} label="Minutes" />
            <Unit value={time.seconds} label="Seconds" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
