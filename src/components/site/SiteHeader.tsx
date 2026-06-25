import { Link } from "@tanstack/react-router";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { LOGO_CENTRUM, LOGO_SKOLICKA } from "@/lib/media";

type NavItem = {
  to: "/" | "/o-nas" | "/anglicka-skolicka" | "/anglictina-pro-deti" | "/anglictina-pro-dospele" | "/aktuality" | "/kontakt";
  label: string;
  children?: Array<{ to: "/o-nas" | "/o-nas/nas-tym"; label: string }>;
};

const nav: NavItem[] = [
  { to: "/", label: "Domů" },
  {
    to: "/o-nas",
    label: "O nás",
    children: [
      { to: "/o-nas", label: "Co je Anglické centrum" },
      { to: "/o-nas/nas-tym", label: "Náš tým" },
    ],
  },
  { to: "/anglicka-skolicka", label: "Anglická školička" },
  { to: "/anglictina-pro-deti", label: "Angličtina pro děti" },
  { to: "/anglictina-pro-dospele", label: "Angličtina pro dospělé" },
  { to: "/aktuality", label: "Aktuality" },
  { to: "/kontakt", label: "Kontakt" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b-2 border-foreground/90 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              src={LOGO_SKOLICKA}
              alt="Logo Anglická školička"
              className="h-10 w-auto sm:h-11 lg:h-12"
            />
            <img
              src={LOGO_CENTRUM}
              alt="Logo Anglické Centrum"
              className="h-9 w-auto sm:h-10 lg:h-11"
            />
          </div>
        </Link>

        <nav className="hidden xl:flex items-center gap-1">
          {nav.map((item) => (
            item.children ? (
              <div key={item.to} className="group relative">
                <Link
                  to={item.to}
                  className="rounded-full px-3 py-2 text-sm font-semibold whitespace-nowrap text-foreground/80 hover:bg-sun/40 hover:text-foreground transition"
                  activeProps={{ className: "bg-royal text-royal-foreground hover:bg-royal hover:text-royal-foreground" }}
                >
                  {item.label}
                </Link>
                <div className="invisible absolute left-0 top-full z-50 min-w-56 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100">
                  <div className="overflow-hidden rounded-2xl border-2 border-foreground/90 bg-card sticker-sm">
                    {item.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        className="block px-4 py-3 text-sm font-semibold text-foreground/80 hover:bg-sun/40 hover:text-foreground"
                        activeProps={{ className: "bg-royal text-royal-foreground" }}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-full px-3 py-2 text-sm font-semibold text-foreground/80 hover:bg-sun/40 hover:text-foreground transition"
                activeProps={{ className: "bg-royal text-royal-foreground hover:bg-royal hover:text-royal-foreground" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            )
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+420775220044"
            className="hidden md:inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-british-red px-4 py-2 text-sm font-bold text-white sticker-sm sticker-hover"
          >
            <Phone className="h-4 w-4" /> +420 775 22 00 44
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
              <div key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-base font-semibold text-foreground/80 hover:bg-sun/40"
                  activeProps={{ className: "bg-royal text-royal-foreground" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4 flex flex-col gap-1 border-l-2 border-foreground/20 pl-3 py-1">
                    {item.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        onClick={() => setOpen(false)}
                        className="block rounded-lg px-3 py-2 text-sm font-semibold text-foreground/70 hover:bg-sun/40"
                        activeProps={{ className: "bg-royal text-royal-foreground" }}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="tel:+420775220044"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-british-red px-4 py-3 text-base font-bold text-white sticker-sm"
            >
              <Phone className="h-4 w-4" /> Zavolat: +420 775 22 00 44
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}