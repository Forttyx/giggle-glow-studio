import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b-2 border-foreground/90 bg-sun/30 bg-paper py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
        {eyebrow && (
          <div className="mx-auto inline-block rounded-full bg-royal px-3 py-1 text-xs font-bold uppercase tracking-wide text-royal-foreground sticker-sm">
            {eyebrow}
          </div>
        )}
        <h1 className="mt-4 font-display text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">{title}</h1>
        {description && (
          <p className="mx-auto mt-5 max-w-2xl text-base text-foreground/70 sm:text-lg">{description}</p>
        )}
        {children && <div className="mt-8 flex flex-wrap justify-center gap-3">{children}</div>}
      </div>
    </section>
  );
}