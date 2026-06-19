import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { StickerCard } from "@/components/site/StickerCard";
import { CTAButton, CTAAnchor } from "@/components/site/CTAButton";
import { DoodleStar } from "@/components/site/Doodles";
import detiImg from "@/assets/deti-scene.jpg";
import { Mail, Phone } from "lucide-react";

export const Route = createFileRoute("/anglictina-pro-deti")({
  head: () => ({
    meta: [
      { title: "Angličtina pro děti Plzeň — kurzy 2026/27" },
      {
        name: "description",
        content:
          "Připravujeme vlastní kurzy angličtiny pro děti pro školní rok 2026/27. Dopolední a odpolední kurzy vedené zábavnou a hravou formou.",
      },
      { property: "og:title", content: "Angličtina pro děti — Anglické Centrum Plzeň" },
      { property: "og:description", content: "Hravé kurzy angličtiny pro děti v Plzni — připravujeme nový školní rok 2026/27." },
      { property: "og:image", content: detiImg },
    ],
  }),
  component: DetiPage,
});

function DetiPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Angličtina pro děti"
        title="Hravé kurzy pro malé objevitele"
        description="Kurzy Helen Doron již neposkytujeme. Pro školní rok 2026/27 připravujeme vlastní kurzy angličtiny pro děti."
      />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-card p-3 sticker rotate-1">
            <img
              src={detiImg}
              alt="Děti se učí anglicky pomocí her"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-[1.5rem] object-cover"
            />
          </div>
          <div className="space-y-5">
            <StickerCard variant="sun" className="-rotate-1">
              <h2 className="font-display text-2xl font-bold">Připravujeme nové kurzy 2026/27</h2>
              <p className="mt-2 text-foreground/80">
                Pracujeme na programu vlastních kurzů angličtiny pro děti — dopolední i odpolední, vedených
                zábavnou a hravou formou.
              </p>
            </StickerCard>
            <ul className="space-y-3">
              {[
                "Malé skupinky pro maximální zapojení každého dítěte",
                "Aktivity přizpůsobené věku a úrovni",
                "Kurzy postavené na opakování, písničkách a hrách",
                "Návaznost mezi ročníky — nezačínáte od nuly",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-base">
                  <DoodleStar className="mt-0.5 h-5 w-5 flex-shrink-0 text-british-red" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <StickerCard variant="royal" className="mt-12 text-center">
          <h2 className="font-display text-2xl font-bold">Chcete být první, kdo se dozví?</h2>
          <p className="mx-auto mt-2 max-w-xl text-royal-foreground/90">
            Pro více informací nás neváhejte kontaktovat. Ozveme se vám hned, jakmile zveřejníme nový program.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <CTAAnchor href="tel:+420775220044" variant="secondary">
              <Phone className="h-4 w-4" /> +420 775 220 044
            </CTAAnchor>
            <CTAAnchor href="mailto:info@anglickecentrum.cz" variant="ghost">
              <Mail className="h-4 w-4" /> info@anglickecentrum.cz
            </CTAAnchor>
            <CTAButton to="/kontakt" variant="primary">Napsat dotaz</CTAButton>
          </div>
        </StickerCard>
      </section>
    </PageShell>
  );
}