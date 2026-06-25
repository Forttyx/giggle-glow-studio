import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { StickerCard } from "@/components/site/StickerCard";
import { ContactForm } from "@/components/site/ContactForm";
import { Mail, MapPin, Phone, Bus, Car } from "lucide-react";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Anglické Centrum Plzeň" },
      { name: "description", content: "Slovanská 149, Plzeň 2-Slovany. Telefon +420 775 22 00 44, info@anglickecentrum.cz. Napište nám přes formulář." },
      { property: "og:title", content: "Kontakt — Anglické Centrum Plzeň" },
      { property: "og:description", content: "Slovanská 149, Plzeň 2-Slovany. Mgr. Marcela Brabcová." },
    ],
  }),
  component: KontaktPage,
});

function KontaktPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Kontakt"
        title="Ozvěte se nám"
        description="Rádi vás pozveme na nezávaznou prohlídku školičky nebo s vámi domluvíme termín kurzu."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            <StickerCard variant="sun" className="-rotate-1">
              <div className="space-y-4">
                <a href="tel:+420775220044" className="flex items-center gap-3 font-display text-xl font-bold whitespace-nowrap">
                  <Phone className="h-5 w-5" /> +420 775 22 00 44
                </a>
                <a href="mailto:info@anglickecentrum.cz" className="flex items-center gap-3 font-display text-lg font-bold">
                  <Mail className="h-5 w-5" /> info@anglickecentrum.cz
                </a>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5" />
                  <div>
                    <div className="font-display font-bold">Slovanská 149</div>
                    <div className="text-sm">326 00 Plzeň 2 – Slovany</div>
                  </div>
                </div>
              </div>
            </StickerCard>

            <StickerCard variant="cream">
              <div className="font-display text-lg font-bold">Kontaktní osoba</div>
              <div className="mt-2 text-base">Mgr. Marcela Brabcová</div>
              <div className="text-sm text-muted-foreground">Majitelka a manažerka Anglického Centra</div>
            </StickerCard>

            <StickerCard variant="mint">
              <div className="font-display text-lg font-bold">Cesta k nám</div>
              <div className="mt-3 space-y-3">
                <div className="flex items-start gap-3">
                  <Car className="mt-0.5 h-5 w-5 text-royal" />
                  <div>
                    <div className="text-sm font-bold">Autem</div>
                    <div className="text-sm text-foreground/80">Bezplatné parkování na Slovanské třídě přímo u domu i v okolí.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Bus className="mt-0.5 h-5 w-5 text-royal" />
                  <div>
                    <div className="text-sm font-bold">MHD</div>
                    <div className="text-sm text-foreground/80">Tramvaj č. 1 — zastávka Vřesová.</div>
                  </div>
                </div>
              </div>
            </StickerCard>
          </div>

          <StickerCard variant="white">
            <h2 className="font-display text-2xl font-bold">Napište nám</h2>
            <p className="mt-1 text-sm text-muted-foreground">Odpovídáme do druhého pracovního dne.</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </StickerCard>
        </div>

        {/* MAPA */}
        <div className="mt-12 overflow-hidden rounded-3xl border-2 border-foreground/90 sticker">
          <iframe
            title="Mapa — Slovanská 149, Plzeň"
            src="https://www.openstreetmap.org/export/embed.html?bbox=13.388%2C49.724%2C13.406%2C49.732&layer=mapnik&marker=49.728188%2C13.396653"
            className="h-80 w-full"
            loading="lazy"
          />
        </div>

        {/* FAKTURACE */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <StickerCard variant="cream">
            <div className="font-display text-lg font-bold">Anglické Centrum</div>
            <div className="mt-2 text-sm">MBedu, s.r.o.</div>
            <div className="text-sm">Zadní cesta 1065/22, 326 00 Plzeň 2-Slovany</div>
            <div className="mt-3 text-sm">IČO: <strong>29116066</strong></div>
            <div className="text-sm">Nejsme plátci DPH.</div>
            <div className="text-sm">Číslo účtu: <strong>2800444135/2010</strong></div>
            <div className="mt-2 text-xs text-muted-foreground">Vedená u Krajského soudu v Plzni, oddíl C, vložka 26009.</div>
          </StickerCard>
          <StickerCard variant="cream">
            <div className="font-display text-lg font-bold">Anglická školička</div>
            <div className="mt-2 text-sm">Lingua Minor s.r.o.</div>
            <div className="text-sm">Zadní cesta 1065/22, 326 00 Plzeň 2-Slovany</div>
            <div className="mt-3 text-sm">IČO: <strong>07266588</strong></div>
            <div className="text-sm">Nejsme plátci DPH.</div>
            <div className="text-sm">Číslo účtu: <strong>2801463485/2010</strong></div>
            <div className="mt-2 text-xs text-muted-foreground">Vedená u Krajského soudu v Plzni, oddíl C, vložka 36573.</div>
          </StickerCard>
        </div>
      </section>
    </PageShell>
  );
}