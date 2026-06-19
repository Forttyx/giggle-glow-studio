import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { StickerCard } from "@/components/site/StickerCard";
import { CTAButton } from "@/components/site/CTAButton";
import { SectionTitle } from "@/components/site/SectionTitle";
import { CallanDownloads } from "@/components/site/CallanDownloads";
import { DoodleStar } from "@/components/site/Doodles";
import { DOSPELI_IMAGE } from "@/lib/media";

const dospeliImg = DOSPELI_IMAGE;

export const Route = createFileRoute("/anglictina-pro-dospele")({
  head: () => ({
    meta: [
      { title: "Angličtina pro dospělé Plzeň — Callanova metoda" },
      {
        name: "description",
        content:
          "Callanova metoda v Plzni — individuální i skupinové kurzy angličtiny pro dospělé. Mluvíte od první lekce. Poslechové materiály ke stažení zdarma.",
      },
      { property: "og:title", content: "Angličtina pro dospělé Callanovou metodou — Plzeň" },
      { property: "og:description", content: "Jediní v Plzni, kdo učí angličtinu Callanovou metodou. Mluvíte od první lekce." },
      { property: "og:image", content: dospeliImg },
    ],
  }),
  component: DospeliPage,
});

function DospeliPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Pro dospělé · Callanova metoda"
        title="Mluvte anglicky od první lekce"
        description="Připravíme pro vás individuální nebo skupinový kurz na míru. Kurz zahájíte kdykoli během roku."
      >
        <CTAButton to="/kontakt">Domluvit kurz</CTAButton>
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-card p-3 sticker -rotate-1">
            <img
              src={dospeliImg}
              alt="Konverzační kurz angličtiny pro dospělé"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-[1.5rem] object-cover"
            />
          </div>
          <div className="space-y-6">
            <SectionTitle eyebrow="Proč Callanova metoda?" title="Rychle, efektivně, systematicky" />
            <ul className="space-y-3">
              {[
                ["Rychlá", "Výsledky přicházejí brzy. Žádné překládání, ale zautomatizování jazyka."],
                ["Efektivní", "Callanovou metodou mluvíte anglicky už od první hodiny."],
                ["Systematická", "Postavená na promyšleném systému otázek a odpovědí."],
              ].map(([title, desc]) => (
                <li key={title} className="flex items-start gap-3 rounded-2xl bg-card p-4 sticker-sm">
                  <DoodleStar className="mt-0.5 h-5 w-5 flex-shrink-0 text-british-red" />
                  <div>
                    <div className="font-display text-lg font-bold">{title}</div>
                    <div className="text-sm text-foreground/80">{desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-cream bg-paper border-y-2 border-foreground/90 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionTitle
            eyebrow="Proč v Anglickém Centru"
            title="Jediní v Plzni, kdo touto metodou vyučuje"
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Vyučujeme v malých skupinkách nebo individuálně",
              "Lekce trvá 45 – 90 min. dle dohody",
              "Kurz probíhá 1× – 2× týdně dle potřeby a dohody",
              "Výukové materiály a učebnice je možné objednat u nás",
              "Skupinový kurz otevíráme již při 3 studentech",
              "Žádné předem dané termíny — vše dohodneme dle vašich potřeb",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl bg-card p-4 sticker-sm">
                <DoodleStar className="mt-0.5 h-5 w-5 flex-shrink-0 text-british-red" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOWNLOADS */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionTitle
          eyebrow="Studijní materiály"
          title="Poslechové materiály ke stažení"
          description="Kompletní sada poslechů pro Callanovu metodu — lekce 1 až 77. Stáhněte si MP3 balíčky a procvičujte angličtinu kdykoli a kdekoli."
        />
        <div className="mt-10">
          <CallanDownloads />
        </div>
      </section>
    </PageShell>
  );
}