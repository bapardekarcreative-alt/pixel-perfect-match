import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, MapPin } from "lucide-react";
import type { ReactNode } from "react";

import logoImg from "@/assets/govanis-logo.png";
import { ProductGallery } from "@/components/ProductGallery";
import { brandLinks, facebookUrl, instagramUrl, type BrandLink } from "@/lib/brand-links";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Govani's Cold Coco — A Little Chocolate. A Lot of Happiness." },
      {
        name: "description",
        content:
          "Your favourite cold coco, crafted to refresh every moment. Find Govani's Cold Coco on Instagram, Facebook and at Amin Marg & Kalavad Road, Rajkot.",
      },
      { property: "og:title", content: "Govani's Cold Coco" },
      {
        property: "og:description",
        content: "A Little Chocolate. A Lot of Happiness. Visit us at Amin Marg & Kalavad Road, Rajkot.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21h3.1Z" />
    </svg>
  );
}

function iconFor(link: BrandLink) {
  if (link.id === "facebook") return <FacebookIcon className="size-5" />;
  if (link.id === "instagram") return <InstagramIcon className="size-5" />;
  return <MapPin className="size-5" strokeWidth={1.8} aria-hidden="true" />;
}

function LinkButton({ link, delay }: { link: BrandLink; delay: number }) {
  const title = link.kind === "location" ? `Govani's Cold Coco · ${link.label}` : link.label;
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${title} — opens in a new tab`}
      style={{ animationDelay: `${delay}ms` }}
      className="rise group flex items-center gap-4 rounded-2xl border border-border bg-card p-3 pr-5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-y-0 active:scale-[0.99]"
    >
      <span className="bg-cocoa flex size-12 shrink-0 items-center justify-center rounded-xl text-primary-foreground transition-transform duration-300 group-hover:scale-105">
        {iconFor(link)}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-display text-base font-semibold leading-tight sm:text-lg text-foreground">{title}</span>
        <span className="mt-0.5 block truncate text-sm text-muted-foreground">{link.sublabel}</span>
      </span>
      <ArrowUpRight
        className="size-5 shrink-0 text-milk transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
        aria-hidden="true"
      />
    </a>
  );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex size-11 items-center justify-center rounded-full border border-border bg-card text-primary shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {children}
    </a>
  );
}

function Index() {
  const social = brandLinks.filter((l) => l.kind === "social");
  const locations = brandLinks.filter((l) => l.kind === "location");

  return (
    <div className="min-h-screen overflow-x-clip">
      <main className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-10 sm:px-8 md:py-14 lg:min-h-screen lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-12">
        {/* Product visual */}
        <section aria-label="Our signature cold coco" className="order-2 px-3 sm:px-0 lg:order-1">
          <div className="rise relative mx-auto max-w-md lg:max-w-none" style={{ animationDelay: "150ms" }}>
            <ProductGallery />
            <div className="float-slow pointer-events-none absolute -right-2 -top-5 sm:-right-6 rounded-2xl border border-border bg-card px-5 py-3 shadow-lift">
              <p className="font-display text-2xl font-bold leading-none text-primary">19+</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">Coco varieties</p>
            </div>
          </div>
        </section>

        {/* Brand profile + links */}
        <section aria-labelledby="brand-name" className="order-1 lg:order-2">
          <header className="rise flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="rounded-full bg-card p-1.5 shadow-lift ring-1 ring-border">
              <img
                src={logoImg}
                alt="Govani's Cold Coco logo"
                width={106}
                height={106}
                className="size-24 rounded-full object-cover"
              />
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-secondary">
              Rajkot · Morbi · Ahmedabad
            </p>
            <h1 id="brand-name" className="mt-3 font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-primary sm:text-6xl">
              Govani's
              <span className="block italic font-medium text-milk">Cold Coco</span>
            </h1>
            <p className="mt-5 font-display text-xl font-semibold text-foreground sm:text-2xl">
              A Little Chocolate. A Lot of Happiness.
            </p>
            <p className="mt-2 max-w-sm text-base text-muted-foreground">
              Your favourite cold coco, crafted to refresh every moment.
            </p>

            <div className="mt-6 flex gap-3">
              <SocialIcon href={instagramUrl} label="Govani's Cold Coco on Instagram">
                <InstagramIcon className="size-5" />
              </SocialIcon>
              <SocialIcon href={facebookUrl} label="Govani's Cold Coco on Facebook">
                <FacebookIcon className="size-5" />
              </SocialIcon>
            </div>
          </header>

          <nav aria-label="Brand links" className="mt-10 space-y-7">
            <div>
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">Follow along</h2>
              <div className="space-y-3">
                {social.map((l, i) => (
                  <LinkButton key={l.id} link={l} delay={200 + i * 80} />
                ))}
              </div>
            </div>
            <div>
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">Visit an outlet</h2>
              <div className="space-y-3">
                {locations.map((l, i) => (
                  <LinkButton key={l.id} link={l} delay={360 + i * 80} />
                ))}
              </div>
            </div>
          </nav>
        </section>
      </main>

      <footer className="pb-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Govani's Cold Coco. Made with chocolate.
      </footer>
    </div>
  );
}
