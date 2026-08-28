import { motion, useReducedMotion } from "motion/react";

interface CurtainsProps {
  open: boolean;
}

const LEFT_EDGE =
  "polygon(0% 0%, 100% 0%, 97.5% 8%, 99.4% 17%, 96.8% 27%, 99.2% 38%, 96.4% 49%, 99% 60%, 96.6% 71%, 99.3% 82%, 96.9% 92%, 98.6% 100%, 0% 100%)";
const RIGHT_EDGE =
  "polygon(2.5% 0%, 100% 0%, 100% 100%, 1.4% 100%, 3.1% 92%, 0.7% 82%, 3.4% 71%, 0.8% 60%, 3.6% 49%, 1% 38%, 3.2% 27%, 0.6% 17%, 2.5% 8%)";

function Panel({ side }: { side: "left" | "right" }) {
  const isLeft = side === "left";
  return (
    <div
      className="relative h-full w-full will-change-transform"
      style={{ clipPath: isLeft ? LEFT_EDGE : RIGHT_EDGE }}
    >
      {/* base velvet folds */}
      <div className="velvet absolute inset-0" />
      {/* fine thread texture */}
      <div className="velvet-fine absolute inset-0 opacity-45 mix-blend-overlay" />
      <div className="fabric-noise absolute inset-0 opacity-[0.18] mix-blend-soft-light" />

      {/* sheen sweeping along the fold crests */}
      <div
        className="absolute inset-0 opacity-55 mix-blend-screen"
        style={{
          backgroundImage: `linear-gradient(${
            isLeft ? "100deg" : "80deg"
          }, transparent 5%, color-mix(in oklab, var(--gold) 12%, transparent) 22%, transparent 42%, color-mix(in oklab, var(--wine-lift) 40%, transparent) 66%, transparent 88%)`,
        }}
      />

      {/* gathered / pleated header */}
      <div className="absolute inset-x-0 top-0 h-[16%]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-radial-gradient(60% 100% at 8% 0%, color-mix(in oklab, var(--wine-lift) 55%, transparent) 0px, color-mix(in oklab, var(--wine-deep) 95%, black) 26px, color-mix(in oklab, var(--wine) 80%, black) 46px)",
            backgroundSize: "46px 100%",
            maskImage: "linear-gradient(180deg, black 55%, transparent 100%)",
          }}
        />
        <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-b from-black/70 to-transparent" />
      </div>

      {/* inner edge highlight + drop shadow onto the stage */}
      <div
        className={`absolute inset-y-0 ${isLeft ? "right-0" : "left-0"} w-14`}
        style={{
          backgroundImage: `linear-gradient(${isLeft ? "270deg" : "90deg"}, color-mix(in oklab, var(--gold) 10%, transparent), transparent 70%)`,
        }}
      />
      <div
        className={`absolute inset-y-0 ${isLeft ? "right-0" : "left-0"} w-24`}
        style={{
          backgroundImage: `linear-gradient(${isLeft ? "270deg" : "90deg"}, rgba(0,0,0,0.55), transparent 80%)`,
        }}
      />
      {/* hem shadow */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />
    </div>
  );
}

export function Curtains({ open }: CurtainsProps) {
  const reduced = useReducedMotion();

  const transition = reduced
    ? { duration: 0.5, ease: "easeOut" as const }
    : { duration: 1.9, ease: [0.62, 0.02, 0.16, 1] as [number, number, number, number] };

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-40 overflow-hidden"
      style={{ perspective: "1400px" }}
    >
      {/* pelmet / valance across the top */}
      <motion.div
        className="absolute inset-x-0 top-0 h-[9svh] origin-top"
        initial={false}
        animate={{ y: open ? "-102%" : "0%" }}
        transition={{ ...transition, duration: reduced ? 0.4 : 1.3 }}
      >
        <div className="velvet absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 h-3 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gold/30" />
      </motion.div>

      <motion.div
        className="absolute inset-y-0 left-0 w-[58%] origin-top-left will-change-transform"
        initial={false}
        animate={
          open
            ? { x: "-104%", rotate: reduced ? 0 : -3.5, skewY: reduced ? 0 : 1.6, scaleX: 0.92 }
            : { x: "0%", rotate: 0, skewY: 0, scaleX: 1 }
        }
        transition={transition}
      >
        <Panel side="left" />
      </motion.div>

      <motion.div
        className="absolute inset-y-0 right-0 w-[58%] origin-top-right will-change-transform"
        initial={false}
        animate={
          open
            ? { x: "104%", rotate: reduced ? 0 : 3.5, skewY: reduced ? 0 : -1.6, scaleX: 0.92 }
            : { x: "0%", rotate: 0, skewY: 0, scaleX: 1 }
        }
        transition={transition}
      >
        <Panel side="right" />
      </motion.div>
    </div>
  );
}

/** Static velvet framing used by the closing scene. */
export function VelvetFrame() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="velvet absolute inset-y-0 -left-6 w-16 opacity-70 sm:w-24" style={{ maskImage: "linear-gradient(90deg, black, transparent)" }} />
      <div className="velvet absolute inset-y-0 -right-6 w-16 opacity-70 sm:w-24" style={{ maskImage: "linear-gradient(270deg, black, transparent)" }} />
      <div className="velvet absolute inset-x-0 -top-4 h-14 opacity-60" style={{ maskImage: "linear-gradient(180deg, black, transparent)" }} />
    </div>
  );
}
