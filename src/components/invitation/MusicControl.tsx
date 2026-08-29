import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface MusicControlProps {
  src: string;
  visible: boolean;
  /** becomes true once the user has opened the invitation (a real gesture) */
  started: boolean;
}

export function MusicControl({ src, visible, started }: MusicControlProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);

  // Audio only ever begins after the user's opening tap.
  useEffect(() => {
    if (!started || !audioRef.current) return;
    audioRef.current.volume = 0.35;
    audioRef.current
      .play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false));
  }, [started]);

  function toggle() {
    const el = audioRef.current;
    if (!el) return;
    if (el.paused) {
      el.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else {
      el.pause();
      setPlaying(false);
    }
  }

  function toggleMute() {
    const el = audioRef.current;
    if (!el) return;
    el.muted = !el.muted;
    setMuted(el.muted);
  }

  return (
    <>
      <audio ref={audioRef} src={src} loop preload="none" />
      <AnimatePresence>
        {visible && (
          <motion.div
            className="fixed bottom-4 right-4 z-[60] flex items-center gap-1 border border-gold/25 bg-ink-deep/70 px-2 py-1.5 backdrop-blur-sm"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button
              type="button"
              onClick={toggle}
              aria-label={playing ? "Pause music" : "Play music"}
              className="grid h-7 w-7 shrink-0 place-items-center text-gold-soft transition-opacity hover:opacity-70"
            >
              {playing ? (
                <svg width="11" height="12" viewBox="0 0 11 12" fill="currentColor" aria-hidden="true">
                  <rect x="0" y="0" width="3.4" height="12" />
                  <rect x="7.6" y="0" width="3.4" height="12" />
                </svg>
              ) : (
                <svg width="11" height="12" viewBox="0 0 11 12" fill="currentColor" aria-hidden="true">
                  <path d="M0 0l11 6-11 6z" />
                </svg>
              )}
            </button>
            <span className="h-4 w-px bg-gold/20" />
            <button
              type="button"
              onClick={toggleMute}
              aria-label={muted ? "Unmute music" : "Mute music"}
              className="grid h-7 w-7 shrink-0 place-items-center text-gold-soft transition-opacity hover:opacity-70"
            >
              <svg width="14" height="12" viewBox="0 0 14 12" fill="none" stroke="currentColor" strokeWidth="1.1" aria-hidden="true">
                <path d="M1 4.2h2.4L6.4 1.6v8.8L3.4 7.8H1z" fill="currentColor" stroke="none" />
                {muted ? (
                  <path d="M9 4l4 4M13 4l-4 4" />
                ) : (
                  <>
                    <path d="M8.8 3.6a3.4 3.4 0 0 1 0 4.8" />
                    <path d="M10.8 2a5.6 5.6 0 0 1 0 8" opacity="0.6" />
                  </>
                )}
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
