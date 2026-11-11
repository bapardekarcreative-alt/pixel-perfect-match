import { useState } from "react";

import { PRODUCT_RATIO, productPhotos } from "@/assets/products";

export function ProductGallery() {
  const [active, setActive] = useState(0);
  const count = productPhotos.length;
  const next = () => setActive((i) => (i + 1) % count);
  const current = productPhotos[active] ?? productPhotos[0];
  if (!current) return null;

  return (
    <div>
      <div className="relative">
        <div
          aria-hidden="true"
          className={`bg-cocoa absolute -inset-3 -z-10 rounded-[2.25rem] opacity-90 transition-transform duration-700 ease-out sm:-inset-4 ${
            active % 2 === 0 ? "rotate-[-2.5deg]" : "rotate-[2.5deg]"
          }`}
        />
        <button
          type="button"
          onClick={next}
          aria-label={`Showing ${current.name}. Tap to see the next cold coco (${active + 1} of ${count}).`}
          className="group relative block w-full cursor-pointer overflow-hidden rounded-[2rem] bg-cream-deep shadow-photo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background active:scale-[0.99] transition-transform"
          style={{ aspectRatio: PRODUCT_RATIO }}
        >
          {productPhotos.map((photo, i) => (
            <img
              key={photo.src}
              src={photo.src}
              alt={i === active ? photo.name : ""}
              aria-hidden={i !== active}
              width={1024}
              height={1280}
              loading={i === 0 ? "eager" : "lazy"}
              fetchPriority={i === 0 ? "high" : "auto"}
              className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform,filter] duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)] ${
                i === active ? "scale-100 opacity-100 blur-0" : "scale-110 opacity-0 blur-sm"
              }`}
            />
          ))}

          <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent p-5 pt-16 text-left">
            <span key={current.name} className="rise">
              <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-primary-foreground/80">
                {String(active + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
              </span>
              <span className="mt-1 block font-display text-xl font-semibold text-primary-foreground sm:text-2xl">
                {current.name}
              </span>
            </span>
            <span className="shrink-0 rounded-full border border-primary-foreground/40 px-3 py-1 text-xs font-medium text-primary-foreground transition-colors group-hover:bg-primary-foreground group-hover:text-primary">
              Tap to change
            </span>
          </span>
        </button>
      </div>

      <div
        className="mt-8 flex justify-center gap-2"
        role="tablist"
        aria-label="Choose a cold coco photo"
      >
        {productPhotos.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={photo.name}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
              i === active ? "w-8 bg-primary" : "w-2 bg-border hover:bg-secondary"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
