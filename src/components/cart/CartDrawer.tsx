import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { useCart } from "./CartContext";

export function CartDrawer() {
  const { isOpen, close, items, count, total, setQty, remove, clear } = useCart();

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  return (
    <div
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-50 transition-opacity ${
        isOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <button
        aria-label="Close cart"
        onClick={close}
        className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
      />
      <aside
        role="dialog"
        aria-label="Your cart"
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-background shadow-[var(--shadow-elegant)] transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex items-center justify-between border-b border-border px-6 py-5">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">Your bag</p>
            <h2 className="mt-1 font-display text-2xl text-foreground">
              {count === 0 ? "Empty" : `${count} item${count > 1 ? "s" : ""}`}
            </h2>
          </div>
          <button
            onClick={close}
            aria-label="Close"
            className="rounded-full border border-border p-2 text-foreground transition-colors hover:bg-muted"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                Nothing here yet
              </p>
              <p className="mt-3 max-w-xs font-display text-xl text-foreground">
                Your bag is patiently waiting for paper.
              </p>
              <button
                onClick={close}
                className="mt-8 rounded-full bg-foreground px-6 py-3 font-mono text-[10px] uppercase tracking-[0.22em] text-background"
              >
                Continue browsing
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-border">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4 py-5">
                  <div className="h-20 w-20 shrink-0 overflow-hidden rounded-sm bg-muted">
                    <img src={item.img} alt={item.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                          {item.category}
                        </p>
                        <h3 className="mt-1 font-display text-base leading-tight text-foreground">
                          {item.name}
                        </h3>
                      </div>
                      <p className="whitespace-nowrap font-mono text-sm text-foreground">
                        AED {item.price * item.qty}
                      </p>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center rounded-full border border-border">
                        <QtyBtn label="−" onClick={() => setQty(item.id, item.qty - 1)} />
                        <span className="min-w-[2ch] text-center font-mono text-xs">{item.qty}</span>
                        <QtyBtn label="+" onClick={() => setQty(item.id, item.qty + 1)} />
                      </div>
                      <button
                        onClick={() => remove(item.id)}
                        className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground underline-offset-4 hover:text-accent hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <footer className="border-t border-border bg-card px-6 py-5">
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                Total · Cash on Delivery
              </span>
              <span className="font-display text-2xl text-foreground">AED {total}</span>
            </div>
            <Link
              to="/contact"
              onClick={close}
              className="mt-4 flex w-full items-center justify-center gap-3 rounded-full bg-foreground py-4 font-mono text-[11px] uppercase tracking-[0.22em] text-background transition-transform hover:-translate-y-0.5"
            >
              Place order →
            </Link>
            <button
              onClick={clear}
              className="mt-3 w-full text-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground hover:text-accent"
            >
              Empty bag
            </button>
          </footer>
        )}
      </aside>
    </div>
  );
}

function QtyBtn({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex h-8 w-8 items-center justify-center text-sm text-foreground transition-colors hover:bg-muted"
      aria-label={label === "+" ? "Increase quantity" : "Decrease quantity"}
    >
      {label}
    </button>
  );
}
