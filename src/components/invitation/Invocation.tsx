import type { Invocation as InvocationData } from "@/data/invitation";
import { Reveal } from "./Reveal";
import { Divider } from "./Ornament";

const SCRIPT_CLASS: Record<string, string> = {
  arabic: "font-[family-name:var(--font-arabic)] leading-[2]",
  devanagari: "font-display",
  latin: "font-display italic",
};

export function Invocation({ data }: { data: InvocationData }) {
  if (data.type === "none" || !data.text) return null;

  const scriptClass = SCRIPT_CLASS[data.script ?? "latin"] ?? SCRIPT_CLASS.latin;

  return (
    <section className="relative px-6 pb-14 pt-24 sm:pt-28" aria-label="Invocation">
      <div className="mx-auto max-w-xl text-center">
        <Reveal>
          <p
            dir={data.direction}
            lang={data.direction === "rtl" ? "ar" : undefined}
            className={`gold-text mx-auto text-balance text-2xl sm:text-3xl ${scriptClass}`}
          >
            {data.text}
          </p>
        </Reveal>
        {data.translation && (
          <Reveal delay={0.2}>
            <p className="mt-5 font-body text-[0.62rem] uppercase tracking-[0.3em] text-champagne/60">
              {data.translation}
            </p>
          </Reveal>
        )}
        <Reveal delay={0.35}>
          <Divider className="mt-10" />
        </Reveal>
      </div>
    </section>
  );
}
