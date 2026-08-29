import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { invitation } from "@/data/invitation";
import { Stage } from "@/components/invitation/Stage";
import { Petals } from "@/components/invitation/Particles";
import { Invocation } from "@/components/invitation/Invocation";
import { Hero } from "@/components/invitation/Hero";
import { Message } from "@/components/invitation/Message";
import { Countdown } from "@/components/invitation/Countdown";
import { Events } from "@/components/invitation/Events";
import { VenueSection } from "@/components/invitation/VenueSection";
import { Gallery } from "@/components/invitation/Gallery";
import { Rsvp } from "@/components/invitation/Rsvp";
import { Closing } from "@/components/invitation/Closing";
import { MusicControl } from "@/components/invitation/MusicControl";

const title = `${invitation.groomName} & ${invitation.brideName} — Wedding Invitation`;
const description = `${invitation.groomName} and ${invitation.brideName} invite you to their wedding on ${invitation.date} in ${invitation.venue.city}. Open the curtains to view the invitation.`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [open, setOpen] = useState(false);
  const [revealed, setRevealed] = useState(false);

  // Lock scrolling while the curtains are closed.
  useEffect(() => {
    document.body.style.overflow = open ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleOpen = useCallback(() => {
    setOpen(true);
    window.setTimeout(() => setRevealed(true), 700);
  }, []);

  return (
    <div className="stage-bg relative min-h-svh w-full overflow-x-hidden">
      <Stage data={invitation} open={open} onOpen={handleOpen} />
      <Petals active={revealed} />

      <main
        className={`relative z-10 mx-auto w-full max-w-3xl transition-opacity duration-700 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden={!open}
      >
        <Hero data={invitation} revealed={revealed} />
        <Invocation data={invitation.invocation} />
        <Message data={invitation} />
        <Countdown dateISO={invitation.dateISO} />
        <Events events={invitation.events} />
        <VenueSection venue={invitation.venue} />
        <Gallery items={invitation.gallery} />
        <Rsvp />
        <Closing data={invitation} />
      </main>

      {invitation.music && (
        <MusicControl src={invitation.music.src} visible={open} started={open} />
      )}
    </div>
  );
}
