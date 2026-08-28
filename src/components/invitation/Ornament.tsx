interface DividerProps {
  className?: string;
  label?: string;
}

export function Divider({ className = "", label }: DividerProps) {
  return (
    <div className={`flex w-full items-center justify-center gap-3 ${className}`}>
      <span className="gold-rule h-px w-full max-w-[7rem] flex-1" />
      <svg
        width="34"
        height="16"
        viewBox="0 0 34 16"
        fill="none"
        aria-hidden="true"
        className="shrink-0 text-gold"
      >
        <path
          d="M17 1.5 20.2 8 17 14.5 13.8 8 17 1.5Z"
          stroke="currentColor"
          strokeWidth="0.9"
          opacity="0.9"
        />
        <circle cx="17" cy="8" r="1.3" fill="currentColor" />
        <path d="M0 8h11M23 8h11" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
      </svg>
      <span className="gold-rule h-px w-full max-w-[7rem] flex-1" />
      {label ? <span className="sr-only">{label}</span> : null}
    </div>
  );
}

export function CornerFlourish({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 90 90"
      fill="none"
      aria-hidden="true"
      className={`text-gold/45 ${className}`}
      width="90"
      height="90"
    >
      <path
        d="M2 2h30M2 2v30M2 2c22 0 44 12 52 34"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="none"
      />
      <path d="M8 8h16M8 8v16" stroke="currentColor" strokeWidth="0.5" opacity="0.7" />
      <circle cx="56" cy="38" r="1.6" fill="currentColor" />
    </svg>
  );
}

export function Monogram({ text, className = "" }: { text: string; className?: string }) {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 160 160"
        className="absolute inset-0 h-full w-full text-gold/50"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="80" cy="80" r="72" stroke="currentColor" strokeWidth="0.7" />
        <circle cx="80" cy="80" r="64" stroke="currentColor" strokeWidth="0.4" opacity="0.6" />
        <path
          d="M80 6 86 14 80 22 74 14 80 6ZM80 138l6 8-6 8-6-8 6-8ZM6 80l8-6 8 6-8 6-8-6ZM138 80l8-6 8 6-8 6-8-6Z"
          fill="currentColor"
          opacity="0.8"
        />
      </svg>
      <span className="gold-text font-display text-3xl tracking-[0.18em] sm:text-4xl">{text}</span>
    </div>
  );
}
