// Product gallery photos. Drop any .jpg/.png/.webp into this folder and it joins the gallery.
// Order = filename order (prefix with 01-, 02-…). Name comes from the filename.
// Every photo is shown in the same 4:5 frame (cropped to fit), so any size works;
// 1024x1280 (portrait 4:5) looks best.
export const PRODUCT_RATIO = "4 / 5";

const files = import.meta.glob<string>("./*.{jpg,jpeg,png,webp,avif}", {
  eager: true,
  import: "default",
});

export function nameFromFile(path: string) {
  return path
    .replace(/^.*\//, "")
    .replace(/\.[^.]+$/, "")
    .replace(/^\d+[-_]/, "")
    .split(/[-_]/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export const productPhotos = Object.keys(files)
  .sort()
  .map((path) => ({ src: files[path], name: nameFromFile(path) }));
