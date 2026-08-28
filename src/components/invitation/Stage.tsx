import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Curtains } from "./Curtains";
import { Dust } from "./Particles";
import { Monogram } from "./Ornament";
import type { Invitation } from "@/data/invitation";

interface StageProps {
  data: Invitation;
  open: boolean;
  onOpen: () => void;
}

export function Stage({ data, open, onOpen }: StageProps) {
  const reduced = useReducedMotion();

  return (
    <>
      {/* Backdrop stage: sits behind the page until opened */}
      <motion.div
        aria-hidden={open}
        className="vignette stage-bg pointer-events-none fixed inset-0 z-30 overflow-hidden"
        initial={false}
        animate={{ opacity: open ? 0 : 1 }}
        transition={{ duration: 1.2, delay: open ? 1.1 : 0 }}
      >
        <div className="fabric-noise absolute inset-0 opacity-[0.12] mix-blend-soft-light" />
        <motion.div
          className="absolute left-1/2 top-[26%] h-[70vh] w-[130vw] -translate-x-1/2 -translate-y-1/4 rounded-[50%]"
          style={{
            background:
              "radial-gradient(closest-side, color-mix(in oklab, var(--gold) 16%, transparent), transparent 72%)",
            animation: reduced ? undefined : "spotlight-breathe 7s ease-in-out infinite",
          }}
          initial={false}
          animate={{ opacity: open ? 1 : 0.7, scale: open ? 1.12 : 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        />
        <Dust />
      </motion.div>

      <Curtains open={open} />

      {/* Opening CTA */}
      <AnimatePresence>
        {!open && (
          <motion.button
            type="button"
            onClick={onOpen}
            aria-label="Open the invitation"
            className="fixed inset-0 z-50 flex w-full flex-col items-center justify-center px-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.32, ease: "easeOut" } }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 16, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              <Monogram text={data.monogram} className="h-32 w-32 sm:h-40 sm:w-40" />

              <p className="mt-8 font-display text-3xl font-light tracking-[0.08em] text-ivory sm:text-4xl">
                {data.groomName} <span className="gold-text">&amp;</span> {data.brideName}
              </p>
              <p className="mt-3 font-body text-[0.62rem] uppercase tracking-[0.42em] text-champagne/70">
                {data.date}
              </p>

              <motion.span
                className="mt-12 inline-flex items-center gap-3 border border-gold/40 px-6 py-3 font-body text-[0.6rem] uppercase tracking-[0.46em] text-gold-soft"
                animate={reduced ? { opacity: 1 } : { opacity: [0.55, 1, 0.55] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              >
                Tap to open
              </motion.span>
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
