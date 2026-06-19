import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { StickerCard } from "@/components/site/StickerCard";
import { CTAButton } from "@/components/site/CTAButton";
import { SectionTitle } from "@/components/site/SectionTitle";
import skolickaAsset from "@/assets/real/skolicka-real.jpg.asset.json";

const skolickaImg = skolickaAsset.url;

export const Route = createFileRoute("/anglicka-skolicka")({
  head: () => ({
    meta: [
      { title: "Anglická školička Plzeň — pro děti 2,5 až 6 let" },
      {
        name: "description",
        content:
          "Malá anglická školička v Plzni pro děti 2,5–6 let. Max 20 dětí denně, výuka 100% v angličtině, dopolední i celodenní program. Domácí atmosféra od roku 2013.",
      },
      { property: "og:title", content: "Anglická školička Plzeň" },
      { property: "og:description", content: "Malá školička s domácí atmosférou pro děti 2,5–6 let. Angličtina jako druhý jazyk." },
      { property: "og:image", content: skolickaImg },
      { name: "twitter:image", content: skolickaImg },
    ],
  }),
  component: SkolickaPage,
});

const schedule = [
  ["7:30 – 9:00", "příchod do školky, volná hra"],
  ["9:00 – 9:45", "dopolední angličtina „Morning Circle\" — řízený program, hry s angličtinou, zpívání, čtení, pohyb"],
  ["9:45 – 10:00", "dopolední svačinka"],
  ["10:00 – 11:00", "výtvarné a rukodělné práce"],
  ["11:00 – 11:45", "pobyt venku"],
  ["11:45 – 12:15", "oběd"],
  ["12:15 – 12:30", "odchod dětí po dopoledním programu"],
  ["12:30 – 14:00", "odpočinek, hry s angličtinou"],
  ["14:00 – 14:15", "odpolední svačinka"],
  ["14:15 – 16:00", "odpolední angličtina, výtvarka, pohyb, pobyt venku, spontánní činnosti"],
] as const;

const pricing = [
  { days: "3 dny / days", morning: "6 700 Kč", full: "9 700 Kč" },
  { days: "4 dny / days", morning: "8 300 Kč", full: "11 000 Kč" },
  { days: "5 dní / days", morning: "9 500 Kč", full: "12 300 Kč" },
];

function SkolickaPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Anglická školička"
        title="Domácí školička, kde se mluví anglicky"
        description="Provozujeme ji od září 2013. Děti se učí angličtinu přirozeně — jako druhý jazyk, pomocí říkanek, písniček a častého opakování."
      >
        <CTAButton to="/kontakt">Domluvit nezávaznou prohlídku</CTAButton>
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-card p-3 sticker -rotate-1">
            <img
              src={skolickaImg}
              alt="Děti v anglické školičce"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-[1.5rem] object-cover"
            />
          </div>
          <div className="space-y-6">
            <StickerCard variant="sun" className="rotate-1">
              <h3 className="font-display text-xl font-bold">Pro děti od 2,5 do 6 let</h3>
              <p className="mt-2 text-foreground/80">
                V malém kolektivu se setkávají velmi malé děti s předškoláky. Menší se učí nápodobou od větších,
                větší se zase učí spolupracovat a pomáhat.
              </p>
            </StickerCard>
            <StickerCard variant="mint">
              <h3 className="font-display text-xl font-bold">Max. 20 dětí denně</h3>
              <p className="mt-2 text-foreground/80">
                Lektorky mají dostatek času věnovat se individuálním potřebám každého dítěte v učení i v rozvoji.
              </p>
            </StickerCard>
            <StickerCard variant="cream">
              <h3 className="font-display text-xl font-bold">S dětmi vyrábíme, malujeme, zpíváme</h3>
              <p className="mt-2 text-foreground/80">
                Tančíme, cvičíme, hrajeme divadlo. Vše probíhá v angličtině — stává se přirozenou součástí
                života dětí. Reagují na běžné pokyny a komentují denní aktivity.
              </p>
            </StickerCard>
          </div>
        </div>
      </section>

      {/* DENNÍ ROZVRH */}
      <section className="bg-cream bg-paper border-y-2 border-foreground/90 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionTitle
            align="center"
            eyebrow="Rámcový denní rozvrh"
            title="Jak vypadá den ve školičce"
            className="mx-auto items-center"
          />
          <div className="mt-10 overflow-hidden rounded-3xl bg-card sticker">
            {schedule.map(([time, what], i) => (
              <div
                key={time}
                className={`grid grid-cols-[8rem_1fr] gap-4 px-5 py-3 text-sm sm:grid-cols-[10rem_1fr] sm:px-6 sm:text-base ${
                  i % 2 === 0 ? "bg-cream" : "bg-card"
                }`}
              >
                <div className="font-display font-bold text-royal">{time}</div>
                <div className="text-foreground/80">{what}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CENÍK */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <SectionTitle
          eyebrow="Ceník"
          title="Školné — školní rok"
          description="Sourozenecká sleva 15 % na druhé dítě. Stravné se účtuje zvlášť, dle skutečné docházky."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pricing.map((p, i) => (
            <StickerCard
              key={p.days}
              variant={i === 1 ? "sun" : "white"}
              className={i === 1 ? "rotate-1" : ""}
            >
              <div className="font-display text-2xl font-bold">{p.days}</div>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="text-foreground/60">Dopolední program</dt>
                  <dd className="font-display text-xl font-bold">{p.morning}</dd>
                </div>
                <div>
                  <dt className="text-foreground/60">Celodenní program</dt>
                  <dd className="font-display text-xl font-bold">{p.full}</dd>
                </div>
              </dl>
            </StickerCard>
          ))}
        </div>
        <StickerCard variant="mint" className="mt-8">
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <div className="font-display text-lg font-bold">Stravné</div>
              <p className="text-sm text-foreground/80">Dopolední 120 Kč/den · celodenní 150 Kč/den. Odhlášení obědů nejpozději do 20:00 předchozího dne.</p>
            </div>
            <div>
              <div className="font-display text-lg font-bold">Sleva na sourozence</div>
              <p className="text-sm text-foreground/80">Druhé dítě má 15 % slevu na školné.</p>
            </div>
          </div>
        </StickerCard>
        <p className="mt-6 text-sm text-muted-foreground">
          Školné je splatné na začátku kalendářního měsíce, nejpozději do 5. dne v měsíci na základě faktury.
          Při absenci se školné nevrací, ale dle kapacity nabízíme náhradní termín. Školka respektuje státní
          svátky a školní prázdniny. Zápis probíhá po celý rok do naplnění kapacity.
        </p>
        <div className="mt-8 text-center">
          <CTAButton to="/kontakt">Mám zájem o místo</CTAButton>
        </div>
      </section>
    </PageShell>
  );
}