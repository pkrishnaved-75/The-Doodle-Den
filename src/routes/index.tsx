import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import hero from "@/assets/hero-stationery.jpg";
import notebooks from "@/assets/notebooks.jpg";
import penJournal from "@/assets/pen-journal.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Doodle Den — Stationery, Delivered in Dubai" },
      { name: "description", content: "The Doodle Den is a Dubai stationery shop. Curated paper, pens and desk objects, delivered next day across the UAE with cash on delivery." },
      { property: "og:title", content: "The Doodle Den — Stationery, Delivered in Dubai" },
      { property: "og:description", content: "Curated stationery delivered next day across the UAE. Cash on delivery only." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-12 md:gap-12 md:px-10 md:py-24">
          <div className="md:col-span-6 md:pt-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent">
              Vol. 01 — Dubai Edition
            </p>
            <h1 className="mt-6 font-display text-[3.25rem] leading-[1.02] tracking-tight text-foreground md:text-[5.25rem]">
              Stationery,<br />
              <span className="italic text-accent">quietly</span> considered.
            </h1>
            <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
              A small, curated catalogue of paper, pens and desk objects —
              delivered to your door across Dubai the very next day. Pay with
              cash, only when it arrives.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/shop"
                className="group inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.22em] text-background transition-transform hover:-translate-y-0.5"
              >
                Browse the catalogue
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                to="/about"
                className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground underline-offset-8 hover:underline"
              >
                Our story
              </Link>
            </div>

            <dl className="mt-16 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                ["140+", "Items in stock"],
                ["Next day", "UAE delivery"],
                ["AED", "Cash on delivery"],
              ].map(([k, v]) => (
                <div key={v}>
                  <dt className="font-display text-2xl text-foreground">{k}</dt>
                  <dd className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative md:col-span-6">
            <div className="grain overflow-hidden rounded-sm shadow-[var(--shadow-elegant)]">
              <img
                src={hero}
                alt="Curated stationery flat lay"
                width={1600}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rotate-[-4deg] bg-card px-5 py-3 shadow-[var(--shadow-soft)] md:block">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                Est. Dubai
              </p>
              <p className="font-display text-xl text-foreground">2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <div className="flex items-end justify-between">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent">
                § 02 — The Shelves
              </p>
              <h2 className="mt-4 font-display text-4xl text-foreground md:text-5xl">
                Three quiet collections.
              </h2>
            </div>
            <Link to="/shop" className="hidden font-mono text-[11px] uppercase tracking-[0.22em] text-foreground underline-offset-8 hover:underline md:inline">
              View all →
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { title: "Paper & Notebooks", img: notebooks, n: "01", desc: "Bound, stitched, and made to be written in." },
              { title: "Pens & Ink", img: penJournal, n: "02", desc: "Fountain pens, gel rollers, and refillable favourites." },
              { title: "Desk Objects", img: hero, n: "03", desc: "Brass clips, wax seals, and small joys." },
            ].map((c) => (
              <Link
                key={c.title}
                to="/shop"
                className="group block overflow-hidden rounded-sm border border-border bg-background transition-shadow hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-baseline justify-between p-6">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                      No. {c.n}
                    </p>
                    <h3 className="mt-2 font-display text-2xl text-foreground">{c.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                  </div>
                  <span className="font-mono text-lg text-accent">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent">
            § 03 — The Method
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl text-foreground md:text-5xl">
            From our shelf to your desk, in three small steps.
          </h2>

          <ol className="mt-16 grid gap-12 md:grid-cols-3">
            {[
              ["Choose", "Browse the catalogue and place your order — no card required."],
              ["We pack", "Each order is hand-wrapped in our Al Quoz studio within hours."],
              ["You pay on arrival", "Our courier brings it to your door the next day. Pay in cash, in AED. Done."],
            ].map(([t, d], i) => (
              <li key={t} className="border-t border-foreground pt-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  Step 0{i + 1}
                </p>
                <h3 className="mt-3 font-display text-2xl text-foreground">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground text-background">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-20 md:flex-row md:items-end md:px-10 md:py-24">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-brass">
              Free delivery within Dubai
            </p>
            <h2 className="mt-4 max-w-xl font-display text-4xl leading-tight md:text-6xl">
              Ready when you are.
            </h2>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center gap-3 rounded-full bg-background px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground transition-transform hover:-translate-y-0.5"
          >
            Open the shop →
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
