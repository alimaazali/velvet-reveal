import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "./Reveal";
import { Divider } from "./Ornament";

export interface RsvpValues {
  name: string;
  attending: "yes" | "no";
  guests: number;
  message: string;
}

const fieldClass =
  "w-full min-w-0 border-b border-gold/25 bg-transparent px-1 py-3 font-display text-lg text-ivory outline-none transition-colors placeholder:text-champagne/35 focus:border-gold/70";

export function Rsvp() {
  const [values, setValues] = useState<RsvpValues>({
    name: "",
    attending: "yes",
    guests: 2,
    message: "",
  });
  const [sent, setSent] = useState(false);

  // Prototype: frontend-only mock submission.
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!values.name.trim()) return;
    setSent(true);
  }

  return (
    <section className="relative px-6 py-24 sm:py-32" aria-label="RSVP">
      <div className="mx-auto max-w-md text-center">
        <Reveal>
          <p className="font-body text-[0.6rem] uppercase tracking-[0.5em] text-gold-soft">RSVP</p>
          <p className="mt-6 font-display text-2xl font-light italic text-champagne/85">
            Kindly respond before 1 December 2026
          </p>
          <Divider className="mt-10" />
        </Reveal>

        <AnimatePresence mode="wait">
          {sent ? (
            <motion.div
              key="thanks"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-14"
            >
              <p className="gold-text font-display text-3xl font-light">Thank you, {values.name}</p>
              <p className="mt-4 font-body text-[0.6rem] uppercase tracking-[0.34em] text-champagne/65">
                {values.attending === "yes"
                  ? `We look forward to celebrating with ${values.guests} of you`
                  : "You will be dearly missed"}
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="mt-12 space-y-9 text-left"
              exit={{ opacity: 0 }}
            >
              <div>
                <label
                  htmlFor="rsvp-name"
                  className="font-body text-[0.54rem] uppercase tracking-[0.36em] text-champagne/55"
                >
                  Your name
                </label>
                <input
                  id="rsvp-name"
                  required
                  value={values.name}
                  onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
                  placeholder="Full name"
                  className={fieldClass}
                />
              </div>

              <div>
                <span className="font-body text-[0.54rem] uppercase tracking-[0.36em] text-champagne/55">
                  Will you attend?
                </span>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  {(["yes", "no"] as const).map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setValues((v) => ({ ...v, attending: opt }))}
                      className={`border px-3 py-3 font-body text-[0.54rem] uppercase tracking-[0.3em] transition-colors ${
                        values.attending === opt
                          ? "border-gold/70 bg-gold/10 text-ivory"
                          : "border-gold/20 text-champagne/60 hover:border-gold/40"
                      }`}
                    >
                      {opt === "yes" ? "Joyfully accept" : "Regretfully decline"}
                    </button>
                  ))}
                </div>
              </div>

              {values.attending === "yes" && (
                <div>
                  <label
                    htmlFor="rsvp-guests"
                    className="font-body text-[0.54rem] uppercase tracking-[0.36em] text-champagne/55"
                  >
                    Number of guests
                  </label>
                  <input
                    id="rsvp-guests"
                    type="number"
                    min={1}
                    max={12}
                    value={values.guests}
                    onChange={(e) =>
                      setValues((v) => ({ ...v, guests: Number(e.target.value) || 1 }))
                    }
                    className={fieldClass}
                  />
                </div>
              )}

              <div>
                <label
                  htmlFor="rsvp-message"
                  className="font-body text-[0.54rem] uppercase tracking-[0.36em] text-champagne/55"
                >
                  A message (optional)
                </label>
                <textarea
                  id="rsvp-message"
                  rows={3}
                  value={values.message}
                  onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
                  placeholder="Your wishes for the couple"
                  className={`${fieldClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="w-full border border-gold/50 px-8 py-4 font-body text-[0.56rem] uppercase tracking-[0.44em] text-gold-soft transition-colors hover:bg-gold/10 hover:text-ivory"
              >
                Send response
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
