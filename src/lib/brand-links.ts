// Builds the link buttons from src/links/social-links.ts (edit URLs there, not here).
import { locationLinks, socialLinks } from "@/links/social-links";

export type BrandLink = {
  id: "facebook" | "instagram" | "amin-marg" | "kalavad-road";
  label: string;
  sublabel: string;
  href: string;
  kind: "social" | "location";
  confirmed: boolean;
};

export const brandLinks: BrandLink[] = [
  {
    id: "facebook",
    label: "Facebook",
    sublabel: "Follow our latest drops",
    href: socialLinks.facebook.url,
    kind: "social",
    confirmed: socialLinks.facebook.confirmed,
  },
  {
    id: "instagram",
    label: "Instagram",
    sublabel: socialLinks.instagram.handle,
    href: socialLinks.instagram.url,
    kind: "social",
    confirmed: socialLinks.instagram.confirmed,
  },
  {
    id: "amin-marg",
    label: "Amin Marg",
    sublabel: locationLinks.aminMarg.address,
    href: locationLinks.aminMarg.url,
    kind: "location",
    confirmed: locationLinks.aminMarg.confirmed,
  },
  {
    id: "kalavad-road",
    label: "Kalavad Road",
    sublabel: locationLinks.kalavadRoad.address,
    href: locationLinks.kalavadRoad.url,
    kind: "location",
    confirmed: locationLinks.kalavadRoad.confirmed,
  },
];

export const instagramUrl = socialLinks.instagram.url;
export const facebookUrl = socialLinks.facebook.url;
