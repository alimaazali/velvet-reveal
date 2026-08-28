import type { Venue } from "@/data/invitation";
import { Reveal } from "./Reveal";
import { CornerFlourish } from "./Ornament";

export function VenueSection({ venue }: { venue: Venue }) {
  if (!venue.name) return null;

  return (
    <section className="relative overflow-hidden px-6 py-24 sm:py-32" aria-label="Venue">
      <div className="ink-panel absolute inset-0 -z-10" />
      <div className="relative mx-auto max-w-xl">
        <div className="relative border border-gold/20 px-6 py-16 text-center sm:px-14">
          <CornerFlourish className="absolute -left-px -top-px h-14 w-14" />
          <CornerFlourish className="absolute -right-px -top-px h-14 w-14 scale-x-[-1]" />
          <CornerFlourish className="absolute -bottom-px -left-px h-14 w-14 scale-y-[-1]" />
          <CornerFlourish className="absolute -bottom-px -right-px h-14 w-14 scale-[-1]" />

          <Reveal>
            <p className="font-body text-[0.55rem] uppercase tracking-[0.5em] text-gold-soft">
              The Venue
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <h3 className="mt-8 font-display text-[clamp(1.9rem,9vw,3rem)] font-light leading-tight text-ivory">
              {venue.name}
            </h3>
          </Reveal>

          <Reveal delay={0.22}>
            <svg
              viewBox="0 0 200 60"
              className="mx-auto mt-8 h-10 w-40 text-gold/40"
              fill="none"
              aria-hidden="true"
            >
              <path d="M4 44c26-22 44 6 66-10s38 14 62-6 44 8 64 6" stroke="currentColor" strokeWidth="0.7" />
              <path d="M4 52c30-14 48 8 70-6s40 10 62-4 42 6 60 4" stroke="currentColor" strokeWidth="0.4" opacity="0.6" />
              <circle cx="100" cy="20" r="3.5" stroke="currentColor" strokeWidth="0.9" />
              <path d="M100 24v12" stroke="currentColor" strokeWidth="0.7" />
            </svg>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mt-6 font-body text-[0.64rem] uppercase leading-[2.2] tracking-[0.3em] text-champagne/70">
              {venue.address}
              {venue.landmark ? <><br />{venue.landmark}</> : null}
              <br />
              {venue.city}
            </p>
          </Reveal>

          {venue.mapsUrl && (
            <Reveal delay={0.4}>
              <a
                href={venue.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-12 inline-flex items-center justify-center border border-gold/50 px-8 py-4 font-body text-[0.56rem] uppercase tracking-[0.44em] text-gold-soft transition-colors hover:bg-gold/10 hover:text-ivory"
              >
                Get directions
              </a>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
