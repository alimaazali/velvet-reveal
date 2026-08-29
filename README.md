# Velvet Reveal

BUILD — CINEMATIC CURTAIN REVEAL WEDDING INVITATION



Build a single-page, mobile-first digital wedding invitation whose defining interaction is a luxurious cinematic velvet curtain reveal.



The attached reference reel is the primary visual inspiration. The result should feel like a premium animated wedding invitation/card, not a normal website.



TECH STACK



Use:



- React + TypeScript

- Next.js if available

- Tailwind CSS

- Framer Motion / Motion for animations

- SVG/CSS for decorative elements

- Responsive modern CSS



Do NOT build an admin panel, authentication, database, SaaS system or payment system yet.



However, keep all invitation content in one centralized typed data/config object so it can later be connected to a backend.



---



1. INITIAL SCREEN — CLOSED CURTAINS



On first load, show a full-screen cinematic stage.



Background:



- deep black / very dark burgundy

- subtle fabric texture

- extremely subtle vignette

- soft central spotlight

- faint floating dust particles

- no visible website navigation



Two luxurious velvet curtains occupy the left and right sides.



The curtains should look like real heavy theatrical velvet, with:



- folds

- highlights

- shadows

- dimensional depth

- slightly irregular fabric edges

- realistic gathered sections near the top

- subtle movement



Do not use two flat red rectangles.



The center remains partially visible behind the curtains.



At the center place an elegant monogram:



A & A



Below it:



Ahmed & Ayesha



And a small instruction:



TAP TO OPEN



Use sophisticated serif/display typography.



The opening composition must immediately feel expensive.



---



2. OPEN INTERACTION



The invitation begins closed.



When the user taps/clicks anywhere on the opening CTA:



Sequence



0.0–0.3 sec



- CTA fades away

- background spotlight subtly intensifies



0.2–1.5 sec



- left curtain smoothly travels toward the left edge

- right curtain smoothly travels toward the right edge

- curtains should slightly rotate/skew as they move

- folds/highlights move naturally with the curtain

- use realistic easing, not linear movement



0.7–1.8 sec



- central wedding content becomes visible

- monogram gently scales down and fades

- decorative gold/ornamental elements appear



1.2–2.2 sec



- small flower petals / particles drift downward

- first invitation content fades upward into view



2.0+ sec



- opening scene is fully revealed

- user can begin scrolling



The transition must feel like a theatrical reveal, not a simple "translateX()" animation.



Use layered curtain elements and gradients/shadows to create depth.



---



3. IMPORTANT CURTAIN BEHAVIOR



Do not permanently remove the curtains from the DOM after opening.



Animate them off-screen and keep them available for future responsive/state behavior.



Opening must work correctly on:



- 320px

- 360px

- 375px

- 390px

- 412px

- 430px

- tablet

- desktop



No horizontal overflow.



The animation must remain smooth on mobile.



---



4. VISUAL STYLE



Use a luxury wedding palette such as:



- deep burgundy / wine

- black

- antique gold

- warm ivory

- muted champagne



Do not make the entire page bright red/gold.



Gold should be used sparingly for:



- borders

- ornaments

- typography accents

- dividers

- buttons



Use premium serif typography for names/headings and a refined secondary font for supporting text.



The typography must feel like luxury wedding stationery.



---



5. OPENING INVOCATION



After the curtains open, reveal a configurable invocation.



The current demo can use:



بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ



But architect the component so the value can later be changed to:



- Allah

- Om

- Jesus

- Ram

- Custom

- None



Support Arabic, Urdu, Hindi, English and Unicode.



For Arabic/Urdu, correctly support RTL text.



---



6. MAIN HERO



Immediately after the reveal, create a cinematic hero section.



Display:



AHMED



&



AYESHA



14 DECEMBER 2026



Add a short elegant wedding message.



Names should be the visual focus.



Animate them with:



- fade

- slight upward movement

- blur-to-sharp

- staggered timing



Do not over-animate the typography.



---



7. SCROLL STORYTELLING



After the opening, the invitation becomes a continuous cinematic scroll experience.



As the user scrolls:



- sections fade in

- text moves subtly upward

- images scale gently

- decorative lines reveal themselves

- backgrounds transition gradually

- ornamental elements move at different speeds

- subtle parallax is used



Use Motion/Framer Motion with Intersection Observer or performant scroll-linked techniques.



Do not use expensive continuous JavaScript calculations unnecessarily.



The page should feel calm and cinematic.



---



8. INVITATION MESSAGE



Create an elegant section containing a short invitation message.



Example:



Together with their families



Ahmed & Ayesha



invite you to celebrate their wedding



Use generous whitespace and ornamental separators.



This must resemble printed wedding stationery translated into motion.



---



9. COUNTDOWN



Create a sophisticated countdown section.



Display:



THE COUNTDOWN



Days | Hours | Minutes | Seconds



Use typography rather than generic rounded timer cards.



Animate the numbers subtly.



Countdown to the wedding date from the central invitation data.



---



10. EVENTS



Create an elegant event sequence.



Support multiple events.



Demo:



NIKAH



14 DECEMBER 2026

11:00 AM



Venue Name

Hyderabad



VIEW LOCATION



WALIMA



16 DECEMBER 2026

7:30 PM



Venue Name

Hyderabad



VIEW LOCATION



Events should appear as editorial invitation layouts, NOT generic UI cards.



Each event can have:



- name

- date

- time

- venue

- address

- Maps URL

- description



Reveal each event sequentially as the user scrolls.



---



11. VENUE



Create a dedicated cinematic venue section.



Include:



- venue name

- address

- landmark

- city



CTA:



GET DIRECTIONS



Open the configured Google Maps URL.



Use an elegant ornamental/map-inspired composition rather than embedding a huge generic map.



---



12. PHOTO EXPERIENCE



Create a premium editorial gallery.



Do not use a basic 3-column grid.



Use:



- large portrait photographs

- full-width photographs

- staggered compositions

- overlapping images

- subtle zoom

- parallax

- fade reveals



Clicking an image should open a beautiful lightbox.



Use placeholder/demo wedding photography for now.



---



13. RSVP



Create an elegant RSVP section.



Fields:



- Name

- Attending / Not attending

- Number of guests

- Optional message



Use a refined form matching the invitation design.



For this prototype, the submission can use a temporary frontend handler/mock state.



Do not build a database yet.



---



14. CONTACT / SOCIAL



Provide configurable:



- WhatsApp

- Phone

- Instagram

- Facebook

- YouTube



Only show icons/links when data exists.



Make WhatsApp a prominent but elegant CTA.



---



15. MUSIC



Include optional background music.



Do not force autoplay with sound.



Use an OPEN INVITATION interaction so audio can begin after user interaction.



Add a small fixed music control after opening:



- play

- pause

- mute



Keep it visually subtle.



Do not use the copyrighted audio from the reference reel.



---



16. CLOSING EXPERIENCE



The final section should feel like the final frame of a wedding film.



Display:



WITH LOVE



AHMED & AYESHA



THANK YOU FOR CELEBRATING WITH US



Use the same ornamental language from the opening.



Do NOT slam the curtains shut.



Instead, subtly bring back the curtain/velvet motif around the edges as a visual frame.



Then reveal:



- WhatsApp

- RSVP/contact

- social links



The ending should feel calm and luxurious.



---



17. DATA ARCHITECTURE



Keep all editable invitation information centralized.



Example:



const invitation = {

  brideName: "Ayesha",

  groomName: "Ahmed",

  date: "14 December 2026",



  invocation: {

    type: "allah",

    text: "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ"

  },



  events: [],

  gallery: [],



  venue: {

    name: "",

    address: "",

    mapsUrl: ""

  },



  contact: {

    whatsapp: "",

    phone: ""

  }

}



Components must consume this data rather than hardcoding values throughout the page.



This is preparation for a future admin system.



---



18. RESPONSIVENESS



Mobile is the primary experience.



Optimize specifically for:



360–430px portrait



Then adapt elegantly to:



- tablet

- desktop



On desktop, maintain a controlled invitation width and cinematic composition rather than simply stretching everything.



No horizontal scrolling.



No clipped text.



No overlapping content.



No broken animation.



---



19. PERFORMANCE



Use performant animations.



Prefer:



- transform

- opacity

- scale

- GPU-friendly effects



Optimize images.



Lazy-load images below the fold.



Respect:



"prefers-reduced-motion"



When reduced motion is enabled, replace complex animations with simple fades.



---



20. FINAL QUALITY BAR



This should look like a premium commercial digital wedding invitation, suitable for showing to wedding-card printing businesses.



Do not make it look like:



- a SaaS website

- a generic React template

- a portfolio project

- a basic wedding webpage

- a collection of cards



The curtain reveal is the hero feature.



The first 5–10 seconds should be impressive enough that someone watching the experience immediately understands:



“This is a digital wedding invitation.”



Prioritize:



1. Curtain realism

2. Opening choreography

3. Typography

4. Cinematic transitions

5. Mobile experience

6. Premium visual hierarchy

7. Smooth performance



Build the actual working interactive page, not merely a static visual mockup.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/868d8b4d-e5f3-4397-ae7b-2d312998a436).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
