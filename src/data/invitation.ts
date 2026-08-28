import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";

export type InvocationType = "allah" | "om" | "jesus" | "ram" | "custom" | "none";

export type TextDirection = "ltr" | "rtl";

export interface Invocation {
  type: InvocationType;
  text: string;
  translation?: string;
  direction: TextDirection;
  /** font stack key used by the invocation component */
  script?: "arabic" | "devanagari" | "latin";
}

export interface WeddingEvent {
  id: string;
  name: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  city: string;
  mapsUrl?: string;
  description?: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  /** layout hint for the editorial gallery */
  span: "portrait" | "wide" | "tall" | "full";
}

export interface Venue {
  name: string;
  address: string;
  landmark?: string;
  city: string;
  mapsUrl?: string;
}

export interface Contact {
  whatsapp?: string;
  phone?: string;
  instagram?: string;
  facebook?: string;
  youtube?: string;
}

export interface Invitation {
  brideName: string;
  groomName: string;
  monogram: string;
  date: string;
  /** ISO date used for the countdown */
  dateISO: string;
  hostLine: string;
  heroMessage: string;
  invitationMessage: string[];
  invocation: Invocation;
  events: WeddingEvent[];
  gallery: GalleryItem[];
  venue: Venue;
  contact: Contact;
  music?: { src: string; title: string };
  closing: { salutation: string; thanks: string };
}

export const invitation: Invitation = {
  brideName: "Ayesha",
  groomName: "Ahmed",
  monogram: "A & A",
  date: "14 December 2026",
  dateISO: "2026-12-14T11:00:00+05:30",
  hostLine: "Together with their families",
  heroMessage:
    "Two hearts, one promise — and an evening written in gold. We would be honoured by your presence.",
  invitationMessage: [
    "Together with their families",
    "Ahmed & Ayesha",
    "invite you to celebrate their wedding",
  ],
  invocation: {
    type: "allah",
    text: "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
    translation: "In the name of Allah, the Most Gracious, the Most Merciful",
    direction: "rtl",
    script: "arabic",
  },
  events: [
    {
      id: "nikah",
      name: "Nikah",
      date: "14 December 2026",
      time: "11:00 AM",
      venue: "Falaknuma Banquet Hall",
      address: "Road No. 12, Banjara Hills",
      city: "Hyderabad",
      mapsUrl: "https://maps.google.com/?q=Banjara+Hills+Hyderabad",
      description: "The solemnisation, followed by lunch with close family and friends.",
    },
    {
      id: "walima",
      name: "Walima",
      date: "16 December 2026",
      time: "7:30 PM",
      venue: "The Golconda Pavilion",
      address: "Necklace Road, Khairatabad",
      city: "Hyderabad",
      mapsUrl: "https://maps.google.com/?q=Necklace+Road+Hyderabad",
      description: "An evening of dinner, music and celebration under the winter sky.",
    },
  ],
  gallery: [
    { id: "g1", src: gallery1, alt: "The couple by candlelight", span: "portrait" },
    { id: "g2", src: gallery2, alt: "Walking beneath golden lights", span: "full" },
    { id: "g3", src: gallery3, alt: "Henna and gold detail", span: "tall" },
    { id: "g4", src: gallery4, alt: "The decorated hall", span: "wide" },
    { id: "g5", src: gallery5, alt: "Bride against velvet", span: "portrait" },
  ],
  venue: {
    name: "The Golconda Pavilion",
    address: "Necklace Road, Khairatabad",
    landmark: "Opposite Lumbini Park",
    city: "Hyderabad, Telangana",
    mapsUrl: "https://maps.google.com/?q=Necklace+Road+Hyderabad",
  },
  contact: {
    whatsapp: "919000000000",
    phone: "+91 90000 00000",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "",
  },
  music: {
    src: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3?filename=relaxing-145038.mp3",
    title: "Ambient strings",
  },
  closing: {
    salutation: "With love",
    thanks: "Thank you for celebrating with us",
  },
};
