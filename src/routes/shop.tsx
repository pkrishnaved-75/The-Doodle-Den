import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { useCart } from "@/components/cart/CartContext";
import { products, categories, type Product } from "@/data/products";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — The Doodle Den Stationery Dubai" },
      { name: "description", content: "Browse The Doodle Den's curated stationery: notebooks, pens, ink, and desk objects. Next-day cash on delivery across the UAE." },
      { property: "og:title", content: "Shop — The Doodle Den Stationery Dubai" },
      { property: "og:description", content: "Curated stationery for Dubai. Next-day cash on delivery only." },
    ],
  }),
  component: Shop,
});

function Shop() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const { add, open, items } = useCart();

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const matchesCat = category === "All" || p.category === category;
      const matchesQ =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q);
      return matchesCat && matchesQ;
    });
  }, [query, category]);

  const inBag = (id: string) => items.find((i) => i.id === id)?.qty ?? 0;

  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent">
            The Catalogue
          </p>
          <div className="mt-4 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <h1 className="font-display text-5xl text-foreground md:text-7xl">
              Things, <span className="italic">selected.</span>
            </h1>
            <p className="max-w-sm text-sm text-muted-foreground">
              Every item is in stock at our Dubai studio. Order today, it lands
              on your doorstep the next day. Payment in cash on arrival.
            </p>
          </div>

          {/* Search */}
          <div className="mt-10">
            <label className="relative block">
              <span className="sr-only">Search products</span>
              <svg
                className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground"
                width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
              </svg>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="search"
                placeholder="Search notebooks, pens, ink…"
                className="w-full rounded-full border border-border bg-card py-3.5 pl-12 pr-12 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              )}
            </label>
          </div>

          {/* Categories */}
          <div className="mt-6 flex flex-wrap gap-2">
            {categories.map((c) => {
              const active = c === category;
              return (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`rounded-full border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors ${
                    active
                      ? "border-foreground bg-foreground text-background"
                      : "border-border bg-card text-muted-foreground hover:border-foreground hover:text-foreground"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-card">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          {filtered.length === 0 ? (
            <div className="py-20 text-center">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                No results
              </p>
              <p className="mt-3 font-display text-2xl text-foreground">
                Nothing matched “{query}”.
              </p>
              <button
                onClick={() => { setQuery(""); setCategory("All"); }}
                className="mt-6 rounded-full border border-foreground px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.22em] text-foreground hover:bg-foreground hover:text-background"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <>
              <p className="mb-8 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                Showing {filtered.length} of {products.length}
              </p>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {filtered.map((p, i) => (
                  <ProductCard
                    key={p.id}
                    product={p}
                    index={i}
                    qty={inBag(p.id)}
                    onAdd={() => {
                      add({ id: p.id, name: p.name, category: p.category, price: p.price, img: p.img });
                      open();
                    }}
                  />
                ))}
              </div>
            </>
          )}

          <p className="mx-auto mt-16 max-w-xl text-center font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            Next-day delivery · Free within Dubai · Cash only
          </p>

          <div className="mt-10 flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.22em] text-background hover:-translate-y-0.5 transition-transform"
            >
              Place an order →
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function ProductCard({
  product,
  index,
  qty,
  onAdd,
}: {
  product: Product;
  index: number;
  qty: number;
  onAdd: () => void;
}) {
  const gallery = product.images && product.images.length > 0 ? product.images : [product.img];
  const [active, setActive] = useState(0);
  const hasMany = gallery.length > 1;
  const go = (dir: 1 | -1) => setActive((a) => (a + dir + gallery.length) % gallery.length);

  return (
    <article className="group">
      <div className="relative aspect-square overflow-hidden rounded-sm bg-background">
        <img
          src={gallery[active]}
          alt={`${product.name} — view ${active + 1}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-background/85 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-foreground backdrop-blur">
          No. {String(index + 1).padStart(2, "0")}
        </span>
        {qty > 0 && (
          <span className="absolute right-3 top-3 rounded-full bg-accent px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-accent-foreground">
            In bag · {qty}
          </span>
        )}
        {hasMany && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-foreground shadow-[var(--shadow-soft)] backdrop-blur transition-colors hover:bg-foreground hover:text-background"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next image"
              className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-foreground shadow-[var(--shadow-soft)] backdrop-blur transition-colors hover:bg-foreground hover:text-background"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
            <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-background/85 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-foreground backdrop-blur">
              {active + 1} / {gallery.length}
            </span>
          </>
        )}
      </div>
      {hasMany && (
        <div className="mt-3 flex gap-2 overflow-x-auto">
          {gallery.map((src, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActive(idx)}
              aria-label={`Show image ${idx + 1}`}
              className={`h-12 w-12 shrink-0 overflow-hidden rounded-sm border bg-background transition-colors ${
                idx === active ? "border-foreground" : "border-border hover:border-foreground/50"
              }`}
            >
              <img src={src} alt={`${product.name} view ${idx + 1}`} loading="lazy" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            {product.category}
          </p>
          <h3 className="mt-1 font-display text-lg leading-tight text-foreground">
            {product.name}
          </h3>
        </div>
        <p className="whitespace-nowrap font-mono text-sm text-foreground">
          AED {product.price}
        </p>
      </div>
      <button
        onClick={onAdd}
        className="mt-4 w-full rounded-full border border-foreground/15 bg-background py-2.5 font-mono text-[10px] uppercase tracking-[0.22em] text-foreground transition-colors hover:bg-foreground hover:text-background"
      >
        Add to bag
      </button>
    </article>
  );
}
