import type { Invitation } from "@/data/invitation";
import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { Divider } from "./Ornament";

export function Message({ data }: { data: Invitation }) {
  return (
    <section className="relative px-6 py-24 sm:py-32" aria-label="Invitation message">
      <div className="mx-auto max-w-lg text-center">
        <Reveal>
          <Divider className="mb-14" />
        </Reveal>
        <Stagger className="space-y-8" gap={0.22}>
          {data.invitationMessage.map((line, i) => (
            <StaggerItem key={line}>
              {i === 1 ? (
                <p className="gold-text font-display text-[clamp(2rem,10vw,3.4rem)] font-light leading-tight">
                  {line}
                </p>
              ) : (
                <p className="font-body text-[0.66rem] uppercase leading-[2.4] tracking-[0.38em] text-champagne/75">
                  {line}
                </p>
              )}
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal delay={0.25}>
          <Divider className="mt-14" />
        </Reveal>
      </div>
    </section>
  );
}
