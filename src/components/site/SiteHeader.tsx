import { Link } from "@tanstack/react-router";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/", label: "Domů" },
  { to: "/o-nas", label: "O nás" },
  { to: "/anglicka-skolicka", label: "Anglická školička" },
  { to: "/anglictina-pro-deti", label: "Angličtina pro děti" },
  { to: "/anglictina-pro-dospele", label: "Angličtina pro dospělé" },
  { to: "/aktuality", label: "Aktuality" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b-2 border-foreground/90 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-royal text-royal-foreground font-display text-xl font-bold sticker-sm">
            AC
          </div>
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-lg font-bold text-foreground">Anglické Centrum</div>
            <div className="text-xs text-muted-foreground">Plzeň · od 2011</div>
          </div>
        </Link>

        <nav className="hidden xl:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full px-3 py-2 text-sm font-semibold text-foreground/80 hover:bg-sun/40 hover:text-foreground transition"
              activeProps={{ className: "bg-royal text-royal-foreground hover:bg-royal hover:text-royal-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+420775220044"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-british-red px-4 py-2 text-sm font-bold text-white sticker-sm sticker-hover"
          >
            <Phone className="h-4 w-4" /> +420 775 220 044
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="xl:hidden inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-sun text-foreground sticker-sm"
            aria-label="Otevřít menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="xl:hidden border-t-2 border-foreground/90 bg-cream">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-semibold text-foreground/80 hover:bg-sun/40"
                activeProps={{ className: "bg-royal text-royal-foreground" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+420775220044"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-british-red px-4 py-3 text-base font-bold text-white sticker-sm"
            >
              <Phone className="h-4 w-4" /> Zavolat: +420 775 220 044
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}