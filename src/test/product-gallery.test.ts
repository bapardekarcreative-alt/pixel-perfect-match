import { describe, expect, it } from "vitest";
import { nameFromFile, productPhotos } from "@/assets/products";

describe("product gallery", () => {
  it("loads the 4 photos from the products folder in filename order", () => {
    expect(productPhotos.map((p) => p.name)).toEqual([
      "Classic Cold Coco",
      "Strawberry Chocolate Coco",
      "Caramel Hazelnut Coco",
      "Dark Chocolate Coco",
    ]);
  });

  it("turns a filename into a display name", () => {
    expect(nameFromFile("./05-mango_coco.webp")).toBe("Mango Coco");
  });
});
