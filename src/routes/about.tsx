import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import penJournal from "@/assets/pen-journal.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — The Doodle Den Stationery Dubai" },
      { name: "description", content: "The Doodle Den is a small Dubai stationery house, founded on the idea that paper still matters. Next-day cash on delivery across the UAE." },
      { property: "og:title", content: "About — The Doodle Den Stationery Dubai" },
      { property: "og:description", content: "A small Dubai stationery house. Next-day cash on delivery only." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-12 md:px-10 md:py-28">
          <div className="md:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent">
              About The Doodle Den
            </p>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] text-foreground md:text-7xl">
              A small house for <span className="italic">slow</span> paper.
            </h1>
            <div className="mt-10 max-w-xl space-y-6 text-base leading-relaxed text-muted-foreground">
              <p>
                The Doodle Den began on a quiet Friday afternoon in Al Quoz, with a
                drawer of fountain pens, a stack of cotton paper and the
                stubborn belief that beautiful stationery still belongs on every
                desk.
              </p>
              <p>
                We are not a marketplace. We are not a megastore. We carry only
                what we'd happily keep on our own shelves — and we deliver it,
                wrapped by hand, anywhere in the UAE.
              </p>
              <p>
                Because we believe trust is built one parcel at a time, every
                order is paid in cash, on arrival. No cards, no fuss. You see it,
                you hold it, then you pay.
              </p>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="grain overflow-hidden rounded-sm shadow-[var(--shadow-elegant)]">
              <img
                src={penJournal}
                alt="A pen resting on a leather journal"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent">
            What we stand for
          </p>
          <div className="mt-12 grid gap-12 md:grid-cols-3">
            {[
              ["Curation over volume", "Small catalogue. Every item considered. Nothing on our shelves we wouldn't gift."],
              ["Dubai, only", "We ship to the UAE — and only to the UAE. It lets us stay close, fast, and personal."],
              ["Cash on delivery", "Pay when it's in your hands. No accounts, no card details. Old-fashioned and on purpose."],
            ].map(([t, d]) => (
              <div key={t} className="border-t border-foreground pt-6">
                <h3 className="font-display text-2xl text-foreground">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
