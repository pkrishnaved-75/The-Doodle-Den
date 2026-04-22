import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4 md:px-10">
        <div className="md:col-span-2">
          <h3 className="font-display text-3xl text-foreground">The Doodle Den</h3>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
            A small stationery house, quietly assembled in Dubai. We believe in paper
            you can feel and ink that means something.
          </p>
          <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            Serving the Dubai only
          </p>
        </div>

        <div>
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            Visit
          </p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/shop" className="hover:text-accent">Shop</Link></li>
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            Reach
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Al Quoz, Dubai</li>
            <li>+971 54 335 9664</li>
            <li>thedoodleden6@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground md:flex-row md:px-10">
          <span>© {new Date().getFullYear()} The Doodle Den Stationery</span>
          <span>Cash on Delivery · Dubai Only</span>
        </div>
      </div>
    </footer>
  );
}
