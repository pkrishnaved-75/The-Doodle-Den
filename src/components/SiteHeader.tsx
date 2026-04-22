import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { useCart } from "./cart/CartContext";

const nav = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const { count, open } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5 md:px-10">
        <Link to="/" className="flex items-baseline gap-2" onClick={() => setMobileOpen(false)}>
          <span className="font-display text-2xl tracking-tight text-foreground">The Doodle Den</span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:inline">
            Dubai · UAE
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={open}
            aria-label={`Open cart, ${count} items`}
            className="group relative flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-2 text-foreground transition-colors hover:border-foreground"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M3 6h18l-2 12H5L3 6zM8 6V4a4 4 0 018 0v2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Bag</span>
            {count > 0 && (
              <span className="ml-1 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-accent px-1.5 font-mono text-[10px] font-medium text-accent-foreground">
                {count}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="rounded-full border border-border bg-card p-2.5 text-foreground md:hidden"
            aria-label="Toggle menu"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-t border-border bg-background px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {nav.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  onClick={() => setMobileOpen(false)}
                  className="block py-1 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
                  activeProps={{ className: "text-foreground" }}
                  activeOptions={{ exact: n.to === "/" }}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
