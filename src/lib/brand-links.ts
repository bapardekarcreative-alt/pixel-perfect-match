// Brand link destinations. Edit here only.
// `confirmed: false` = placeholder/fallback until the client sends the official URL.
export type BrandLink = {
  id: "facebook" | "instagram" | "amin-marg" | "kalavad-road";
  label: string;
  sublabel: string;
  href: string;
  kind: "social" | "location";
  confirmed: boolean;
};

const mapsSearch = (q: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

export const brandLinks: BrandLink[] = [
  {
    id: "facebook",
    label: "Facebook",
    sublabel: "Follow our latest drops",
    // PLACEHOLDER: replace with the official Facebook page URL from the client.
    href: "https://www.facebook.com/search/top?q=Govani%27s%20Cold%20Coco",
    kind: "social",
    confirmed: false,
  },
  {
    id: "instagram",
    label: "Instagram",
    sublabel: "@govanis_coldcoco",
    href: "https://www.instagram.com/govanis_coldcoco/",
    kind: "social",
    confirmed: true,
  },
  {
    id: "amin-marg",
    label: "Amin Marg",
    sublabel: "Opel Plaza, near Amul Dairy · Rajkot",
    // PLACEHOLDER: replace with the client's Google Maps share link.
    href: mapsSearch("Govani's Cold Coco, Opel Plaza, Amin Marg, Rajkot"),
    kind: "location",
    confirmed: false,
  },
  {
    id: "kalavad-road",
    label: "Kalavad Road",
    sublabel: "Beat And Bite food mall · Rajkot",
    // PLACEHOLDER: replace with the client's Google Maps share link.
    href: mapsSearch("Govani's Cold Coco, Beat And Bite, Kalavad Road, Rajkot"),
    kind: "location",
    confirmed: false,
  },
];

export const instagramUrl = brandLinks.find((l) => l.id === "instagram")!.href;
export const facebookUrl = brandLinks.find((l) => l.id === "facebook")!.href;
