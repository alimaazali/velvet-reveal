import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { GalleryItem } from "@/data/invitation";
import { Reveal } from "./Reveal";

const SPAN_CLASS: Record<GalleryItem["span"], string> = {
  portrait: "col-span-7 aspect-[3/4]",
  tall: "col-span-5 aspect-[3/4.6] mt-14",
  wide: "col-span-7 aspect-[4/3] ml-auto",
  full: "col-span-12 aspect-[16/10]",
};

function Frame({ item, onOpen, index }: { item: GalleryItem; onOpen: () => void; index: number }) {
  const reduced = useReducedMotion();
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      className={`group relative overflow-hidden ${SPAN_CLASS[item.span]}`}
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 40, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.1, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <img
        src={item.src}
        alt={item.alt}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.06]"
      />
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-deep/70 via-transparent to-transparent" />
      <span className="pointer-events-none absolute inset-0 border border-gold/15" />
    </motion.button>
  );
}

export function Gallery({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<GalleryItem | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  if (!items.length) return null;

  return (
    <section className="relative px-4 py-20 sm:px-6 sm:py-28" aria-label="Photographs">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="text-center font-body text-[0.6rem] uppercase tracking-[0.5em] text-gold-soft">
            Moments
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-12 gap-3 sm:gap-5">
          {items.map((item, i) => (
            <Frame key={item.id} item={item} index={i} onOpen={() => setActive(item)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-ink-deep/95 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label={active.alt}
          >
            <motion.figure
              className="relative max-h-[86svh] max-w-[92vw]"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src={active.src}
                alt={active.alt}
                className="max-h-[80svh] w-auto border border-gold/25 object-contain"
              />
              <figcaption className="mt-4 text-center font-body text-[0.56rem] uppercase tracking-[0.34em] text-champagne/60">
                {active.alt}
              </figcaption>
            </motion.figure>
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute right-5 top-5 font-body text-[0.56rem] uppercase tracking-[0.34em] text-gold-soft"
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
