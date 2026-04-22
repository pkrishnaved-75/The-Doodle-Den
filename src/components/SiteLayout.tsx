import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { CartDrawer } from "./cart/CartDrawer";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <CartDrawer />
    </div>
  );
}
