import type { Invitation } from "@/data/invitation";
import { Reveal } from "./Reveal";
import { Divider, Monogram } from "./Ornament";
import { VelvetFrame } from "./Curtains";

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid h-11 w-11 place-items-center border border-gold/25 text-gold-soft transition-colors hover:border-gold/60 hover:text-ivory"
    >
      {children}
    </a>
  );
}

export function Closing({ data }: { data: Invitation }) {
  const { contact, closing } = data;
  const waHref = contact.whatsapp ? `https://wa.me/${contact.whatsapp}` : "";

  return (
    <section className="relative overflow-hidden px-6 py-28 sm:py-36" aria-label="With love">
      <div className="ink-panel absolute inset-0 -z-10" />
      <VelvetFrame />

      <div className="relative mx-auto max-w-lg text-center">
        <Reveal>
          <p className="font-body text-[0.6rem] uppercase tracking-[0.5em] text-gold-soft">
            {closing.salutation}
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <h2 className="mt-8 font-display text-[clamp(2rem,11vw,3.8rem)] font-light uppercase leading-[1.05] tracking-[0.08em] text-ivory">
            {data.groomName} <span className="gold-text">&amp;</span> {data.brideName}
          </h2>
        </Reveal>

        <Reveal delay={0.24}>
          <Divider className="mt-10" />
          <p className="mt-10 font-body text-[0.6rem] uppercase leading-[2.4] tracking-[0.38em] text-champagne/70">
            {closing.thanks}
          </p>
        </Reveal>

        <Reveal delay={0.34}>
          <Monogram text={data.monogram} className="mx-auto mt-14 h-28 w-28" />
        </Reveal>

        {waHref && (
          <Reveal delay={0.42}>
            <a
              href={waHref}
              target="_blank"
              rel="noreferrer"
              className="mt-14 inline-flex w-full items-center justify-center border border-gold/55 bg-gold/10 px-8 py-4 font-body text-[0.56rem] uppercase tracking-[0.42em] text-gold-soft transition-colors hover:bg-gold/20 hover:text-ivory sm:w-auto"
            >
              Message us on WhatsApp
            </a>
          </Reveal>
        )}

        <Reveal delay={0.5}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {contact.phone && (
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="font-body text-[0.56rem] uppercase tracking-[0.34em] text-champagne/70 transition-colors hover:text-ivory"
              >
                {contact.phone}
              </a>
            )}
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            {contact.instagram && (
              <SocialLink href={contact.instagram} label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
                </svg>
              </SocialLink>
            )}
            {contact.facebook && (
              <SocialLink href={contact.facebook} label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.3-.04-1.3-.13-2.45-.13-2.42 0-4.08 1.48-4.08 4.2v2.23H7.5V13h2.67v8z" />
                </svg>
              </SocialLink>
            )}
            {contact.youtube && (
              <SocialLink href={contact.youtube} label="YouTube">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22 12s0-3.2-.4-4.7a2.5 2.5 0 0 0-1.8-1.8C18.3 5 12 5 12 5s-6.3 0-7.8.5A2.5 2.5 0 0 0 2.4 7.3C2 8.8 2 12 2 12s0 3.2.4 4.7c.24.9.94 1.6 1.8 1.8C5.7 19 12 19 12 19s6.3 0 7.8-.5a2.5 2.5 0 0 0 1.8-1.8C22 15.2 22 12 22 12ZM10 15.2V8.8l5.4 3.2Z" />
                </svg>
              </SocialLink>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.6}>
          <p className="mt-16 font-display text-sm italic text-champagne/45">
            {data.date} &middot; {data.venue.city}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
