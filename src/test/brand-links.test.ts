import { describe, expect, it } from "vitest";
import { brandLinks } from "@/lib/brand-links";

describe("brand links", () => {
  it("has exactly the four links from the brief, in order", () => {
    expect(brandLinks.map((l) => l.id)).toEqual(["facebook", "instagram", "amin-marg", "kalavad-road"]);
  });

  it("location links open Google Maps", () => {
    for (const l of brandLinks.filter((l) => l.kind === "location")) {
      expect(l.href.startsWith("https://www.google.com/maps/")).toBe(true);
    }
  });
});
