import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { useState, useMemo } from "react";
import { useCart } from "@/components/cart/CartContext";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Order — The Doodle Den Stationery Dubai" },
      { name: "description", content: "Place an order or get in touch with The Doodle Den. Stationery delivered next day across the UAE with cash on delivery." },
      { property: "og:title", content: "Contact & Order — The Doodle Den Stationery Dubai" },
      { property: "og:description", content: "Place an order with The Doodle Den. Next-day cash on delivery across the UAE." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { items, total, clear } = useCart();

  const cartSummary = useMemo(
    () => items.map((i) => `${i.qty}× ${i.name} (AED ${i.price * i.qty})`).join("\n"),
    [items],
  );

  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 md:grid-cols-12 md:px-10 md:py-28">
          <div className="md:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent">
              Place an order
            </p>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] text-foreground md:text-6xl">
              Tell us what you'd like.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Send us your order — we'll confirm by phone within the hour, then
              dispatch from Al Quoz so it lands on your doorstep the next day.
              Pay in cash on arrival, anywhere in the UAE.
            </p>

            <dl className="mt-12 space-y-6">
              {[
                ["Studio", "Al Quoz Industrial 3, Dubai"],
                ["Email", "thedoodleden6@gmail.com"],
                ["Hours", "Sat — Thu · 10:00 — 19:00"],
              ].map(([k, v]) => (
                <div key={k} className="border-t border-border pt-4">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{k}</dt>
                  <dd className="mt-1 font-display text-xl text-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="md:col-span-7">
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); clear(); }}
              className="rounded-sm border border-border bg-card p-8 md:p-10 shadow-[var(--shadow-soft)]"
            >
              {submitted ? (
                <div className="py-12 text-center">
                  <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent">
                    Order received
                  </p>
                  <h2 className="mt-4 font-display text-3xl text-foreground">
                    Thank you. We'll call shortly.
                  </h2>
                  <p className="mt-4 text-sm text-muted-foreground">
                    A note from The Doodle Den will reach your phone within the
                    hour to confirm the parcel and the cash total in AED. It
                    arrives the next day.
                  </p>
                </div>
              ) : (
                <div className="grid gap-5">
                  {items.length > 0 && (
                    <div className="rounded-sm border border-border bg-background p-5">
                      <div className="flex items-baseline justify-between">
                        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                          Your bag
                        </p>
                        <p className="font-display text-lg text-foreground">AED {total}</p>
                      </div>
                      <ul className="mt-3 space-y-1.5">
                        {items.map((i) => (
                          <li key={i.id} className="flex justify-between text-sm">
                            <span className="text-foreground">{i.qty}× {i.name}</span>
                            <span className="font-mono text-muted-foreground">AED {i.price * i.qty}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Field label="Your name">
                    <input required className="field" placeholder="Ayesha Khan" />
                  </Field>
                  <Field label="Phone (UAE)">
                    <input required type="tel" className="field" placeholder="+971 50 000 0000" />
                  </Field>
                  <Field label="Delivery address">
                    <input required className="field" placeholder="Building, Street, Area, Emirate" />
                  </Field>
                  <Field label={items.length > 0 ? "Notes (optional)" : "What would you like to order?"}>
                    <textarea
                      required={items.length === 0}
                      rows={items.length > 0 ? 3 : 5}
                      defaultValue={cartSummary}
                      className="field resize-none"
                      placeholder="e.g. 1× Atlas Leather Journal, 2× Cedar Pencil Bundle…"
                    />
                  </Field>

                  <div className="mt-2 flex items-center justify-between rounded-sm border border-border bg-background px-4 py-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                      Payment
                    </span>
                    <span className="font-display text-base text-foreground">
                      Cash on Delivery · AED {total > 0 ? total : ""}
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="mt-2 inline-flex items-center justify-center gap-3 rounded-full bg-foreground px-7 py-4 font-mono text-[11px] uppercase tracking-[0.22em] text-background transition-transform hover:-translate-y-0.5"
                  >
                    Send order →
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <style>{`
        .field {
          width: 100%;
          background: var(--background);
          border: 1px solid var(--border);
          border-radius: 2px;
          padding: 0.75rem 1rem;
          font-size: 0.95rem;
          color: var(--foreground);
          transition: border-color 0.2s;
        }
        .field:focus {
          outline: none;
          border-color: var(--accent);
        }
      `}</style>
    </SiteLayout>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}
