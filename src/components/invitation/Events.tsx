import type { WeddingEvent } from "@/data/invitation";
import { Reveal } from "./Reveal";
import { Divider } from "./Ornament";

function EventBlock({ event, index }: { event: WeddingEvent; index: number }) {
  const align = index % 2 === 0 ? "sm:text-left sm:items-start" : "sm:text-right sm:items-end";

  return (
    <article className={`flex flex-col items-center text-center ${align}`}>
      <Reveal>
        <p className="font-body text-[0.55rem] uppercase tracking-[0.5em] text-gold-soft/80">
          {String(index + 1).padStart(2, "0")}
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <h3 className="mt-4 font-display text-[clamp(2.2rem,12vw,4rem)] font-light uppercase leading-none tracking-[0.1em] text-ivory">
          {event.name}
        </h3>
      </Reveal>
      <Reveal delay={0.2}>
        <div className="mt-6 flex items-center gap-4">
          <span className="font-body text-[0.62rem] uppercase tracking-[0.34em] text-champagne/80">
            {event.date}
          </span>
          <span className="h-3 w-px bg-gold/50" />
          <span className="font-body text-[0.62rem] uppercase tracking-[0.34em] text-champagne/80">
            {event.time}
          </span>
        </div>
      </Reveal>
      <Reveal delay={0.3}>
        <p className="mt-7 font-display text-xl italic text-ivory/90">{event.venue}</p>
        <p className="mt-1 font-body text-[0.62rem] uppercase tracking-[0.28em] text-champagne/55">
          {event.address}
        </p>
        <p className="font-body text-[0.62rem] uppercase tracking-[0.28em] text-champagne/55">
          {event.city}
        </p>
      </Reveal>
      {event.description && (
        <Reveal delay={0.38}>
          <p className="mt-6 max-w-sm text-balance font-display text-base font-light italic leading-relaxed text-champagne/65">
            {event.description}
          </p>
        </Reveal>
      )}
      {event.mapsUrl && (
        <Reveal delay={0.46}>
          <a
            href={event.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center border-b border-gold/50 pb-1 font-body text-[0.56rem] uppercase tracking-[0.42em] text-gold-soft transition-colors hover:border-gold hover:text-ivory"
          >
            View location
          </a>
        </Reveal>
      )}
    </article>
  );
}

export function Events({ events }: { events: WeddingEvent[] }) {
  if (!events.length) return null;

  return (
    <section className="relative px-6 py-20 sm:py-28" aria-label="Events">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="text-center font-body text-[0.6rem] uppercase tracking-[0.5em] text-gold-soft">
            The Celebrations
          </p>
        </Reveal>
        <div className="mt-16 space-y-24">
          {events.map((event, i) => (
            <div key={event.id}>
              <EventBlock event={event} index={i} />
              {i < events.length - 1 && (
                <Reveal delay={0.1}>
                  <Divider className="mt-24" />
                </Reveal>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
